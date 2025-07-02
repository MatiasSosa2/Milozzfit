// src/components/ClienteRutina.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClienteRutina = () => {
  const [rutina, setRutina] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const obtenerDiaActual = () => {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return dias[new Date().getDay()];
  };

  const obtenerSemanaActual = () => {
    const fechaInicio = new Date('2025-07-01'); // ajustar si es necesario
    const hoy = new Date();
    const diff = hoy - fechaInicio;
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) + 1;
  };

  useEffect(() => {
    const fetchRutina = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No hay token de autenticación');
        return;
      }

      const semana = obtenerSemanaActual();
      const dia = obtenerDiaActual();

      try {
        const response = await axios.get(`http://localhost:4000/rutina?semana=${semana}&dia=${dia}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setRutina(response.data);
      } catch (err) {
        setError('No se pudo cargar la rutina');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRutina();
  }, []);

  if (loading) return <p>Cargando rutina...</p>;
  if (error) return <p>{error}</p>;
  if (!rutina) return <p>No hay rutina disponible para hoy.</p>;

  return (
    <div>
      <h2>Rutina del día {rutina.dia} - Semana {rutina.semana}</h2>
      <ul>
        {Object.entries(rutina.ejercicios).map(([clave, ejercicio]) => (
          <li key={clave}>
            <strong>{ejercicio.nombre}</strong>: {ejercicio.series} series de {ejercicio.repeticiones} reps
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteRutina;
