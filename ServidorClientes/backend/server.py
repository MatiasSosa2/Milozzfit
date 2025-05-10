# backend/server.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os

app = FastAPI()

# CORS para frontend local
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Reemplazar con ["http://localhost:3000"] en producción
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = "data.json"  # Archivo de usuarios
ADMIN_USER = "admin"
ADMIN_PASS = "123"

# -------------------------------
# MODELOS
# -------------------------------

class Usuario(BaseModel):
    nombre: str
    apellido: str
    dni: str
    email: str
    programa: str
    activo: bool

# -------------------------------
# LOGIN CLIENTE
# -------------------------------

@app.post("/login_cliente")
async def login_cliente(request: Request):
    data = await request.json()
    email = data.get("email")

    if not os.path.exists(DATA_FILE):
        return {"estado": "error", "mensaje": "No hay usuarios registrados"}

    with open(DATA_FILE, "r") as f:
        usuarios = json.load(f)

    usuario = next((u for u in usuarios if u["email"].lower() == email.lower()), None)

    if usuario:
        print(usuario)
        return {"estado": "ok", "usuario": usuario}
    else:
        return {"estado": "error", "mensaje": "Usuario no encontrado"}

# -------------------------------
# LOGIN ENTRENADOR
# -------------------------------

@app.post("/login_admin")
async def login_admin(request: Request):
    data = await request.json()
    if data.get("usuario") == ADMIN_USER and data.get("password") == ADMIN_PASS:
        return {"estado": "ok"}
    else:
        return {"estado": "error", "mensaje": "Credenciales inválidas"}

# -------------------------------
# AGREGAR USUARIO (ENTRENADOR)
# -------------------------------

@app.post("/agregar_usuario")
async def agregar_usuario(usuario: Usuario):
    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, "w") as f:
            json.dump([], f)

    with open(DATA_FILE, "r") as f:
        usuarios = json.load(f)

    if any(u["email"].lower() == usuario.email.lower() or u["dni"] == usuario.dni for u in usuarios):
        return {"estado": "error", "mensaje": "Ya existe un usuario con ese email o DNI"}

    usuarios.append(usuario.dict())

    with open(DATA_FILE, "w") as f:
        json.dump(usuarios, f, indent=2)

    return {"estado": "ok", "mensaje": "Usuario agregado correctamente"}
