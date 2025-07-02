// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setError('Por favor, completa todos los campos.');
    }

    try {
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return setError(data.error || 'Error al iniciar sesión');
      }

      // Guardar token y usuario en localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('usuario', JSON.stringify(data.usuario));

      // Redirigir según rol
      if (data.usuario.rol === 'ADMIN') {
        navigate('/admin');
      } else if (data.usuario.rol === 'CLIENTE') {
        navigate('/cliente');
      } else {
        setError('Rol desconocido');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-neutral-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-red-500">MilozzFit - Iniciar sesión</h2>

        {error && <p className="text-red-400 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-neutral-700 text-white placeholder-gray-400 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 p-2 rounded font-semibold"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
