const URL_BACKEND = "http://127.0.0.1:8000";

async function loginEntrenador() {
  const user = document.getElementById("adminUser").value;
  const pass = document.getElementById("adminPass").value;
  const msg = document.getElementById("login-message");

  try {
    const res = await fetch(`${URL_BACKEND}/login_admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario: user, password: pass })
    });

    const data = await res.json();

    if (data.estado === "ok") {
      document.getElementById("login-section").classList.add("hidden");
      document.getElementById("admin-section").classList.remove("hidden");
    } else {
      msg.textContent = data.mensaje;
    }
  } catch (error) {
    msg.textContent = "Error al conectar con el servidor";
    console.error(error);
  }
}

async function agregarUsuario() {
  const nuevo = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    dni: document.getElementById("dni").value,
    email: document.getElementById("email").value,
    programa: document.getElementById("programa").value,
    activo: document.getElementById("activo").value === "true"
  };

  try {
    const res = await fetch(`${URL_BACKEND}/agregar_usuario`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo)
    });

    const data = await res.json();

    alert(data.mensaje);

    if (data.estado === "ok") limpiarFormulario();
  } catch (error) {
    alert("Error al enviar los datos.");
    console.error(error);
  }
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("email").value = "";
}
