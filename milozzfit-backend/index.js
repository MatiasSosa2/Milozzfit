require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const verificarToken = require('./middlewares/verificarToken');


const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const clienteRoutes = require('./routes/cliente');
app.use('/cliente', clienteRoutes);


app.get('/', (req, res) => {
  res.send('Milozzfit Backend funcionando 🚀');
});

const JWT_SECRET = process.env.JWT_SECRET || 'milozzfit_secreto';



// Ruta de test
app.get('/', (req, res) => {
  res.send('Milozzfit Backend funcionando 🚀');
});

// Registro de usuarios (puede usarse para admin o clientes)
app.post('/registro', async (req, res) => {
  const { nombre, email, password, rol } = req.body;
  if (!nombre || !email || !password) {
    return res.status(400).json({ error: 'Faltan datos' });
  }
  try {
    const existe = await prisma.usuario.findUnique({ where: { email } });
    if (existe) return res.status(400).json({ error: 'Email ya registrado' });

    const hash = await bcrypt.hash(password, 10);
    const usuario = await prisma.usuario.create({
      data: {
        nombre,
        email,
        password: hash,
        rol: rol || 'CLIENTE',
        fechaInicio: new Date(),
      },
    });

    res.json({ message: 'Usuario creado', usuario: { id: usuario.id, email: usuario.email, rol: usuario.rol } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Login de usuario
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Faltan datos' });

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) return res.status(401).json({ error: 'Usuario no encontrado' });

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: usuario.id, email: usuario.email, rol: usuario.rol }, JWT_SECRET, { expiresIn: '3h' });
    res.json({ token, usuario: { id: usuario.id, email: usuario.email, rol: usuario.rol } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener usuario logueado
app.get('/me', verificarToken, async (req, res) => {
  try {
    const usuario = await prisma.usuario.findUnique({ where: { id: req.usuario.id } });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    res.json({ usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener todos los usuarios (solo admin)
app.get('/usuarios', verificarToken, async (req, res) => {
  if (req.usuario.rol !== 'ADMIN') return res.status(403).json({ error: 'Acceso denegado' });

  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Crear cliente (solo admin)
app.post('/clientes', verificarToken, async (req, res) => {
  if (req.usuario.rol !== 'ADMIN') return res.status(403).json({ error: 'Acceso denegado' });

  const { nombre, email, password } = req.body;
  if (!nombre || !email || !password) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  try {
    const existe = await prisma.usuario.findUnique({ where: { email } });
    if (existe) return res.status(400).json({ error: 'El email ya está en uso' });

    const hash = await bcrypt.hash(password, 10);

    const cliente = await prisma.usuario.create({
      data: {
        nombre,
        email,
        password: hash,
        rol: 'CLIENTE',
        fechaInicio: new Date(),
      },
    });

    res.json({
      message: 'Cliente creado correctamente',
      cliente: {
        id: cliente.id,
        nombre: cliente.nombre,
        email: cliente.email,
        rol: cliente.rol,
        fechaInicio: cliente.fechaInicio
      },
    });
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error interno al crear cliente' });
  }
});

// Crear rutina (solo admin)
app.post('/rutinas', verificarToken, async (req, res) => {
  if (req.usuario.rol !== 'ADMIN') return res.status(403).json({ error: 'Acceso denegado' });

  const { usuarioId, semana, dia, ejercicios } = req.body;

  if (!usuarioId || !semana || !dia || !ejercicios || typeof ejercicios !== 'object') {
    return res.status(400).json({ error: 'Faltan datos o el formato es incorrecto' });
  }

  try {
    const rutina = await prisma.rutina.create({
      data: {
        usuarioId,
        semana,
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

// Obtener rutina del alumno autenticado según semana y día
router.get('/rutina', verificarToken, async (req, res) => {
  const usuarioId = req.usuario.id;
  const { semana, dia } = req.query;

  if (!semana || !dia) {
    return res.status(400).json({ error: 'Faltan semana o dia en la consulta' });
  }

  try {
    const rutina = await prisma.rutina.findFirst({
      where: {
        usuarioId,
        semana: Number(semana),
        dia,
      },
    });

    if (!rutina) {
      return res.status(404).json({ error: 'No se encontró rutina para esta semana y día' });
    }

    res.json({
      id: rutina.id,
      usuarioId: rutina.usuarioId,
      semana: rutina.semana,
      dia: rutina.dia,
      ejercicios: JSON.parse(rutina.ejercicios),
    });
  } catch (error) {
    console.error('Error al obtener rutina:', error);
    res.status(500).json({ error: 'Error interno al obtener rutina' });
  }
});


// Montar rutas cliente desde ./routes/cliente.js
app.use('/cliente', require('./routes/cliente'));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
