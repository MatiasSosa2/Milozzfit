import { useState, useEffect } from 'react';
import API from '../api';

function RutinaHoy() {
  const [rutinas, setRutinas] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        const token = localStorage.getItem('token');
        const resUsuario = await API.get('/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUsuario(resUsuario.data);

        const res = await API.get(`/rutinas/semana-actual/${resUsuario.data.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setRutinas(res.data);
      } catch (err) {
        console.error('Error al obtener rutina', err);
      }
    };

    fetchRutinas();
  }, []);

  const marcarComoCompletado = async (idRutina) => {
    try {
      const token = localStorage.getItem('token');
      await API.post(`/progreso`, {
        rutinaId: idRutina,
        completado: true,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMensaje('✅ Día marcado como completado');
    } catch (err) {
      console.error('Error al marcar progreso', err);
      setMensaje('❌ No se pudo guardar el progreso');
    }
  };

  const rutinasPorDia = rutinas.reduce((acc, r) => {
    if (!acc[r.dia]) acc[r.dia] = [];
    acc[r.dia].push(r);
    return acc;
  }, {});

  return (
    <div style={{ padding: '2rem', maxWidth: 700, margin: 'auto' }}>
      <h2>Rutina de la Semana Actual</h2>
      {mensaje && <p>{mensaje}</p>}
      {Object.entries(rutinasPorDia).map(([dia, ejercicios]) => (
        <div key={dia} style={{ marginBottom: '2rem' }}>
          <h3>{dia}</h3>
          {ejercicios.map((r) => (
            <div key={r.id} style={{ marginBottom: '1rem' }}>
              <strong>{r.ejercicio.nombre} - {r.zona}</strong>
              <p>{r.ejercicio.descripcion}</p>
              <iframe
                width="100%"
                height="250"
                src={r.ejercicio.video}
                title="Video ejercicio"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
          <button onClick={() => marcarComoCompletado(ejercicios[0].id)}>
            Marcar como completado
          </button>
        </div>
      ))}
    </div>
  );
}

export default RutinaHoy;
