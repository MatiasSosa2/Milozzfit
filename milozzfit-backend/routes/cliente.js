const express = require('express');
const router = express.Router();
const verificarToken = require('../middlewares/verificarToken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ✅ Obtener progreso del usuario autenticado
router.get('/progreso', verificarToken, async (req, res) => {
  try {
    const progreso = await prisma.progreso.findMany({
      where: { usuarioId: req.usuario.id },
    });
    res.json(progreso);
  } catch (error) {
    console.error('Error al obtener progreso:', error);
    res.status(500).json({ error: 'Error interno al obtener progreso' });
  }
});

// ✅ Crear progreso para usuario autenticado
router.post('/progreso', verificarToken, async (req, res) => {
  const { semana, dia, completado } = req.body;
  const usuarioId = req.usuario.id;

  if (!semana || !dia) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  try {
    const existeProgreso = await prisma.progreso.findFirst({
      where: { usuarioId, semana, dia },
    });

    if (existeProgreso) {
      return res.status(409).json({ error: 'Ya existe progreso para esta semana y día' });
    }

    const nuevoProgreso = await prisma.progreso.create({
      data: {
        usuarioId,
        semana,
        dia,
        completado: completado || false,
      },
    });

    res.json({
      message: 'Progreso creado correctamente',
      progreso: nuevoProgreso,
    });
  } catch (error) {
    console.error('Error al crear progreso:', error);
    res.status(500).json({ error: 'Error interno al crear progreso' });
  }
});

// ✅ Actualizar progreso (marcar completado o no)
router.patch('/progreso', verificarToken, async (req, res) => {
  const { semana, dia, completado } = req.body;
  const usuarioId = req.usuario.id;

  if (typeof completado !== 'boolean' || !semana || !dia) {
    return res.status(400).json({ error: 'Faltan datos o tipo incorrecto' });
  }

  try {
    const progreso = await prisma.progreso.findFirst({
      where: { usuarioId, semana, dia },
    });

    if (!progreso) {
      return res.status(404).json({ error: 'Progreso no encontrado' });
    }

    const progresoActualizado = await prisma.progreso.update({
      where: { id: progreso.id },
      data: { completado },
    });

    res.json({
      message: 'Progreso actualizado correctamente',
      progreso: progresoActualizado,
    });
  } catch (error) {
    console.error('Error al actualizar progreso:', error);
    res.status(500).json({ error: 'Error interno al actualizar progreso' });
  }
});

// ✅ Crear rutina (solo ADMIN)
router.post('/rutinas', verificarToken, async (req, res) => {
  if (req.usuario.rol !== 'ADMIN') {
    return res.status(403).json({ error: 'Acceso denegado: solo administradores' });
  }

  const { usuarioId, semana, dia, ejercicios } = req.body;

  if (!usuarioId || !semana || !dia || !ejercicios || typeof ejercicios !== 'object') {
    return res.status(400).json({ error: 'Faltan datos o el formato es incorrecto' });
  }

  try {
    const rutina = await prisma.rutina.create({
      data: {
        usuarioId,
        semana: Number(semana),
        dia,
        ejercicios: JSON.stringify(ejercicios),
      },
    });

    res.json({
      message: 'Rutina creada correctamente',
      rutina: {
        id: rutina.id,
        usuarioId: rutina.usuarioId,
        semana: rutina.semana,
        dia: rutina.dia,
        ejercicios: JSON.parse(rutina.ejercicios),
      },
    }); 
  } catch (error) {
    console.error('Error al crear rutina:', error);
    res.status(500).json({ error: 'Error interno al crear rutina' });
  }
});

// ✅ Obtener rutina del cliente para una semana y día específicos
router.get('/rutinas', verificarToken, async (req, res) => {
  const { semana, dia } = req.query;

  if (!semana || !dia) {
    return res.status(400).json({ error: 'Faltan semana o día en la consulta' });
  }

  try {
    const rutina = await prisma.rutina.findFirst({
      where: {
        usuarioId: req.usuario.id,
        semana: parseInt(semana),
        dia,
      },
    });

    if (!rutina) {
      return res.status(404).json({ error: 'No se encontró rutina para esta semana y día' });
    }

    res.json({
      message: 'Rutina encontrada',
      rutina: {
        id: rutina.id,
        semana: rutina.semana,
        dia: rutina.dia,
        ejercicios: JSON.parse(rutina.ejercicios),
      },
    });
  } catch (error) {
    console.error('Error al obtener rutina:', error);
    res.status(500).json({ error: 'Error interno al obtener rutina' });
  }
});


module.exports = router;
