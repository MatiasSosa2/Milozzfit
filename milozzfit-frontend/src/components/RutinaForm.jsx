import React, { useState } from 'react';

export default function RutinaForm({ token }) {
  const [usuarioId, setUsuarioId] = useState('');
  const [semana, setSemana] = useState('');
  const [dia, setDia] = useState('');
  const [ejercicios, setEjercicios] = useState([
    { nombre: '', repeticiones: '', series: '' },
  ]);
  const [mensaje, setMensaje] = useState(null);

  // Agregar un ejercicio vacío
  const agregarEjercicio = () => {
    setEjercicios([...ejercicios, { nombre: '', repeticiones: '', series: '' }]);
  };

  // Actualizar un ejercicio
  const cambiarEjercicio = (index, campo, valor) => {
    const copia = [...ejercicios];
    copia[index][campo] = valor;
    setEjercicios(copia);
  };

  // Crear la estructura de ejercicios para enviar (objeto con clave nombre)
  const construirEjercicios = () => {
    const obj = {};
    ejercicios.forEach((ej) => {
      if (ej.nombre.trim() !== '') {
        obj[ej.nombre.toLowerCase()] = {
          nombre: ej.nombre,
          repeticiones: parseInt(ej.repeticiones, 10),
          series: parseInt(ej.series, 10),
        };
      }
    });
    return obj;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usuarioId || !semana || !dia) {
      setMensaje('Completa usuarioId, semana y día');
      return;
    }

    const payload = {
      usuarioId,
      semana: parseInt(semana, 10),
      dia,
      ejercicios: construirEjercicios(),
    };

    try {
      const res = await fetch('http://localhost:4000/rutinas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMensaje(data.error || 'Error al crear rutina');
      } else {
        setMensaje('Rutina creada con éxito 🎉');
        // Resetear campos si querés
        setUsuarioId('');
        setSemana('');
        setDia('');
        setEjercicios([{ nombre: '', repeticiones: '', series: '' }]);
      }
    } catch (error) {
      setMensaje('Error en la conexión con el servidor');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, marginTop: 20 }}>
      <h2 style={{ color: 'var(--color-primary)' }}>Crear Rutina</h2>

      <label>
        Usuario ID:
        <input
          type="text"
          value={usuarioId}
          onChange={e => setUsuarioId(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
          placeholder="UUID del usuario"
          required
        />
      </label>

      <label>
        Semana:
        <input
          type="number"
          value={semana}
          onChange={e => setSemana(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
          min="1"
          required
        />
      </label>

      <label>
        Día:
        <select
          value={dia}
          onChange={e => setDia(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
          required
        >
          <option value="">Seleccione día</option>
          <option>Lunes</option>
          <option>Martes</option>
          <option>Miércoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select>
      </label>

      <h3>Ejercicios</h3>
      {ejercicios.map((ej, i) => (
        <div key={i} style={{ marginBottom: 10, borderBottom: '1px solid var(--color-primary-light)', paddingBottom: 10 }}>
          <label>
            Nombre:
            <input
              type="text"
              value={ej.nombre}
              onChange={e => cambiarEjercicio(i, 'nombre', e.target.value)}
              style={{ width: '100%', marginBottom: 5 }}
              required
            />
          </label>

          <label>
            Repeticiones:
            <input
              type="number"
              value={ej.repeticiones}
              onChange={e => cambiarEjercicio(i, 'repeticiones', e.target.value)}
              style={{ width: '100%', marginBottom: 5 }}
              min="1"
              required
            />
          </label>

          <label>
            Series:
            <input
              type="number"
              value={ej.series}
              onChange={e => cambiarEjercicio(i, 'series', e.target.value)}
              style={{ width: '100%' }}
              min="1"
              required
            />
          </label>
        </div>
      ))}

      <button type="button" onClick={agregarEjercicio} style={{ marginBottom: 15 }}>
        + Agregar ejercicio
      </button>

      <button
        type="submit"
        style={{
          backgroundColor: 'var(--color-primary)',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Crear Rutina
      </button>

      {mensaje && <p style={{ marginTop: 15 }}>{mensaje}</p>}
    </form>
  );
}
