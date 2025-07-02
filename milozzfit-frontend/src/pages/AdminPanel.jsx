import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:4000';

export default function AdminPanel() {
  const [clientes, setClientes] = useState([]);
  const [rutinas, setRutinas] = useState([]);
  const [form, setForm] = useState({
    usuarioId: '',
    semana: 1,
    dia: 'Lunes',
    ejercicios: {},
  });
  const [ejercicioNombre, setEjercicioNombre] = useState('');
  const [ejercicioRepeticiones, setEjercicioRepeticiones] = useState('');
  const [ejercicioSeries, setEjercicioSeries] = useState('');
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchClientes();
    fetchRutinas();
  }, []);

  async function fetchClientes() {
    try {
      const res = await axios.get(`${API_BASE}/usuarios`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClientes(res.data.filter(u => u.rol === 'CLIENTE'));
      if (res.data.length > 0 && !form.usuarioId) {
        setForm(f => ({ ...f, usuarioId: res.data[0].id }));
      }
    } catch (error) {
      console.error('Error cargando clientes:', error);
    }
  }

  async function fetchRutinas() {
    try {
      const res = await axios.get(`${API_BASE}/rutinas`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRutinas(res.data);
    } catch (error) {
      // Si no existe la ruta GET /rutinas, solo ignora o implementa backend para ello
      console.log('No hay rutinas para listar o ruta GET /rutinas no implementada');
    }
  }

  function agregarEjercicio() {
    if (!ejercicioNombre || !ejercicioRepeticiones || !ejercicioSeries) return;

    setForm(f => ({
      ...f,
      ejercicios: {
        ...f.ejercicios,
        [ejercicioNombre.toLowerCase()]: {
          nombre: ejercicioNombre,
          repeticiones: Number(ejercicioRepeticiones),
          series: Number(ejercicioSeries),
        },
      },
    }));

    setEjercicioNombre('');
    setEjercicioRepeticiones('');
    setEjercicioSeries('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMensaje(null);

    if (!form.usuarioId) {
      setMensaje({ tipo: 'error', texto: 'Seleccioná un cliente' });
      return;
    }
    if (!form.semana || !form.dia) {
      setMensaje({ tipo: 'error', texto: 'Semana y día son obligatorios' });
      return;
    }
    if (Object.keys(form.ejercicios).length === 0) {
      setMensaje({ tipo: 'error', texto: 'Agregá al menos un ejercicio' });
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${API_BASE}/rutinas`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMensaje({ tipo: 'exito', texto: 'Rutina creada correctamente!' });
      setRutinas(r => [...r, res.data.rutina]);
      // reset form (except usuarioId)
      setForm(f => ({ usuarioId: f.usuarioId, semana: 1, dia: 'Lunes', ejercicios: {} }));
    } catch (error) {
      console.error(error);
      setMensaje({ tipo: 'error', texto: 'Error al crear rutina' });
    }

    setLoading(false);
  }

  return (
    <div className="p-6 bg-[#121212] min-h-screen text-[#eee]">
      <h1 className="text-4xl font-bold mb-6 text-[#f01c00]">Panel de Administrador</h1>

      {mensaje && (
        <div className={`mb-4 p-3 rounded ${
          mensaje.tipo === 'exito' ? 'bg-green-700' : 'bg-red-700'
        }`}>
          {mensaje.texto}
        </div>
      )}

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Crear nueva rutina</h2>
        <form onSubmit={handleSubmit} className="bg-[#1f1f1f] p-6 rounded-lg max-w-xl">
          <label className="block mb-2">
            Cliente:
            <select
              className="w-full p-2 rounded bg-[#262626] border border-[#333] mt-1"
              value={form.usuarioId}
              onChange={e => setForm(f => ({ ...f, usuarioId: e.target.value }))}
            >
              {clientes.map(cliente => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nombre} ({cliente.email})
                </option>
              ))}
            </select>
          </label>

          <label className="block mb-2">
            Semana:
            <input
              type="number"
              min="1"
              className="w-full p-2 rounded bg-[#262626] border border-[#333] mt-1"
              value={form.semana}
              onChange={e => setForm(f => ({ ...f, semana: Number(e.target.value) }))}
              required
            />
          </label>

          <label className="block mb-2">
            Día:
            <select
              className="w-full p-2 rounded bg-[#262626] border border-[#333] mt-1"
              value={form.dia}
              onChange={e => setForm(f => ({ ...f, dia: e.target.value }))}
              required
            >
              {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>

          <div className="mb-4 border border-[#333] rounded p-3 bg-[#262626]">
            <h3 className="font-semibold mb-2">Agregar ejercicio</h3>
            <input
              type="text"
              placeholder="Nombre ejercicio"
              value={ejercicioNombre}
              onChange={e => setEjercicioNombre(e.target.value)}
              className="p-2 rounded bg-[#1f1f1f] border border-[#444] w-full mb-2"
            />
            <input
              type="number"
              placeholder="Repeticiones"
              min="1"
              value={ejercicioRepeticiones}
              onChange={e => setEjercicioRepeticiones(e.target.value)}
              className="p-2 rounded bg-[#1f1f1f] border border-[#444] w-full mb-2"
            />
            <input
              type="number"
              placeholder="Series"
              min="1"
              value={ejercicioSeries}
              onChange={e => setEjercicioSeries(e.target.value)}
              className="p-2 rounded bg-[#1f1f1f] border border-[#444] w-full mb-2"
            />
            <button
              type="button"
              onClick={agregarEjercicio}
              className="bg-[#f01c00] hover:bg-[#c31500] text-white py-2 rounded w-full transition"
            >
              Añadir ejercicio
            </button>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Ejercicios añadidos:</h3>
            {Object.keys(form.ejercicios).length === 0 ? (
              <p className="text-[#bbb] italic">No hay ejercicios añadidos</p>
            ) : (
              <ul className="list-disc list-inside">
                {Object.entries(form.ejercicios).map(([key, ex]) => (
                  <li key={key}>
                    {ex.nombre} - {ex.series} series de {ex.repeticiones} repeticiones
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#f01c00] hover:bg-[#c31500] text-white py-3 rounded w-full font-bold transition disabled:opacity-50"
          >
            {loading ? 'Creando...' : 'Crear Rutina'}
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Rutinas creadas</h2>
        {rutinas.length === 0 ? (
          <p>No hay rutinas creadas.</p>
        ) : (
          <div className="overflow-auto max-h-96 bg-[#1f1f1f] p-4 rounded">
            <table className="min-w-full text-left text-[#eee]">
              <thead>
                <tr>
                  <th className="border-b border-[#333] py-2 px-4">Cliente</th>
                  <th className="border-b border-[#333] py-2 px-4">Semana</th>
                  <th className="border-b border-[#333] py-2 px-4">Día</th>
                  <th className="border-b border-[#333] py-2 px-4">Ejercicios</th>
                </tr>
              </thead>
              <tbody>
                {rutinas.map(r => (
                  <tr key={r.id} className="border-b border-[#333] hover:bg-[#262626]">
                    <td className="py-2 px-4">{clientes.find(c => c.id === r.usuarioId)?.nombre || 'Desconocido'}</td>
                    <td className="py-2 px-4">{r.semana}</td>
                    <td className="py-2 px-4">{r.dia}</td>
                    <td className="py-2 px-4">
                      <ul className="list-disc list-inside">
                        {Object.entries(r.ejercicios).map(([key, ex]) => (
                          <li key={key}>
                            {ex.nombre} - {ex.series}x{ex.repeticiones}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
