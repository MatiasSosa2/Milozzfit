// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout'; // ✅ Agregar esta línea
import AdminPanel from './pages/AdminPanel';
import ClientePanel from './pages/ClientePanel';
import Login from './pages/Login';
import RutaPrivada from './components/RutaPrivada';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <RutaPrivada rolRequerido="ADMIN">
                <AdminPanel />
              </RutaPrivada>
            }
          />

          <Route
            path="/cliente"
            element={
              <RutaPrivada rolRequerido="CLIENTE">
                <ClientePanel />
              </RutaPrivada>
            }
          />

          <Route path="*" element={<p>404 - Página no encontrada</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
