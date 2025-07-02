import React from 'react';

export default function Layout({ children }) {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: 'var(--color-bg)',
      color: 'var(--color-text)',
    }}>
      <nav style={{
        width: '250px',
        backgroundColor: 'var(--color-bg-alt)',
        padding: '1rem',
        boxShadow: '2px 0 5px var(--color-shadow-primary)',
      }}>
        <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Milozzfit</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <a href="/admin" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Panel Admin</a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <a href="/cliente" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Panel Cliente</a>
          </li>
          <li>
            <a href="/logout" style={{ color: 'var(--color-primary-light)', textDecoration: 'none' }}>Cerrar sesión</a>
          </li>
        </ul>
      </nav>

      <main style={{ flexGrow: 1, padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}
