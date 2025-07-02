import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:4000';

export default function ClientePanel() {
  const [rutinas, setRutinas] = useState([]);
  const [progreso, setProgreso] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchRutinas();
    fetchProgreso();
  }, []);

  async function fetchRutinas() {
    try {
      const res = await axios.get(`${API_BASE}/rutinas/usuario`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRutinas(res.data);
    } catch (error) {
      console.error('Error al cargar rutinas:', error);
      setMensaje({ tipo: 'error', texto: 'Error al cargar rutinas' });
    } finally {
      setLoading(false);
    }
  }

  async function fetchProgreso() {
    try {
      const res = await axios.get(`${API_BASE}/cliente/progreso`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProgreso(res.data);
    } catch (error) {
      console.error('Error al cargar progreso:', error);
    }
  }

  // Verificar si la rutina (semana+dia) está completada
  function estaCompletada(semana, dia) {
    return progreso.some(p => p.semana === semana && p.dia === dia && p.completado);
  }

  async function toggleCompletado(semana, dia) {
    const progresoExistente = progreso.find(p => p.semana === semana && p.dia === dia);

    try {
      if (progresoExistente) {
        // Actualizar estado
        await axios.patch(`${API_BASE}/cliente/progreso`, {
          semana,
          dia,
          completado: !progresoExistente.completado,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Crear nuevo progreso
        await axios.post(`${API_BASE}/cliente/progreso`, {
          semana,
          dia,
          completado: true,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      // Refrescar progreso
      fetchProgreso();
    } catch (error) {
      console.error('Error al actualizar progreso:', error);
      setMensaje({ tipo: 'error', texto: 'No se pudo actualizar el progreso' });
    }
  }

  if (loading) return <p className="p-6 text-[#eee]">Cargando rutinas...</p>;

  return (
    <div className="p-6 bg-[#121212] min-h-screen text-[#eee]">
      <h1 className="text-4xl font-bold mb-6 text-[#f01c00]">Mis Rutinas</h1>

      {mensaje && (
        <div className={`mb-4 p-3 rounded ${
          mensaje.tipo === 'error' ? 'bg-red-700' : 'bg-green-700'
        }`}>
          {mensaje.texto}
        </div>
      )}

      {rutinas.length === 0 ? (
        <p>No tenés rutinas asignadas.</p>
      ) : (
        rutinas.map(rutina => {
          const completada = estaCompletada(rutina.semana, rutina.dia);

          return (
            <div
              key={rutina.id}
              className={`mb-6 p-5 rounded-lg border ${
                completada ? 'border-green-600 bg-green-900/40' : 'border-[#333] bg-[#1f1f1f]'
              }`}
            >
              <h2 className="text-2xl font-semibold mb-2">
                Semana {rutina.semana} - {rutina.dia}
              </h2>
              <ul className="list-disc list-inside mb-4">
                {Object.entries(rutina.ejercicios).map(([key, ex]) => (
                  <li key={key}>
                    {ex.nombre} - {ex.series} series x {ex.repeticiones} repeticiones
                  </li>
                ))}
              </ul>

              <button
                onClick={() => toggleCompletado(rutina.semana, rutina.dia)}
                className={`py-2 px-4 rounded font-semibold transition ${
                  completada
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-[#f01c00] hover:bg-[#c31500] text-white'
                }`}
              >
                {completada ? 'Marcar como pendiente' : 'Marcar como completado'}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
