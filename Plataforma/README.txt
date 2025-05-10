
# Plataforma Fitness - Full Stack App

## 1. Cómo levantar la app

### Backend (API + MySQL)

Requisitos:
- Docker y Docker Compose instalados

Pasos:
```bash
cd backend
docker-compose up --build
```

Esto levanta:
- MySQL con estructura precargada
- API Node.js corriendo en http://localhost:5000

### Frontend (React)

Requisitos:
- Node.js (v16 o superior)

Pasos:
```bash
cd client
npm install
npm start
```

Esto levanta el frontend en http://localhost:3000

## 2. Usuario de prueba entrenador

Puedes insertar manualmente un entrenador usando:

```sql
INSERT INTO users (nombre, email, password, rol)
VALUES ('Entrenador', 'admin@fit.com', '$2a$10$hashed_example', 'entrenador');
```

> *Reemplaza `$2a$...` por una contraseña hasheada con bcrypt.*
