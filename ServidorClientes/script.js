let usuarioLogueado = null;
let rutinas = {};
let datosCargados = false;

async function cargarRutinas() {
  try {
    const res = await fetch("rutinas.json");
    rutinas = await res.json();
    datosCargados = true;
  } catch (error) {
    console.error("Error cargando rutinas", error);
  }
}

cargarRutinas();

async function loginUser() {
  const emailInput = document.getElementById("email").value.trim().toLowerCase();
  const mensaje = document.getElementById("login-message");

  if (!datosCargados) {
    mensaje.textContent = "Cargando rutinas... Intenta en unos segundos.";
    return;
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/login_cliente", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailInput })
    });

    const data = await res.json();

    if (data.estado === "ok") {
      usuarioLogueado = data.usuario;
      mostrarPanelUsuario();
    } else {
      mensaje.textContent = data.mensaje;
    }
  } catch (error) {
    console.error("Error al conectar con el servidor", error);
    mensaje.textContent = "Error de conexión. Intenta más tarde.";
  }
}

function mostrarPanelUsuario() {
  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("user-section").classList.remove("hidden");
  document.getElementById("user-name").textContent = usuarioLogueado.nombre;
  document.getElementById("user-program").textContent = usuarioLogueado.programa;
  generarCalendario();
}

function generarCalendario() {
  const calendario = document.getElementById("calendar");
  calendario.innerHTML = "";

  const hoy = new Date();
  const totalDias = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();

  for (let dia = 1; dia <= totalDias; dia++) {
    const diaElemento = document.createElement("div");
    diaElemento.classList.add("calendar-day");

    const rutinaLink = rutinas[usuarioLogueado.programa]?.[dia];

    if (usuarioLogueado.activo && dia <= hoy.getDate() && rutinaLink) {
      diaElemento.textContent = `Día ${dia}`;
      diaElemento.onclick = () => window.open(rutinaLink, "_blank");
    } else {
      diaElemento.textContent = `Día ${dia}`;
      diaElemento.classList.add("locked");
    }

    calendario.appendChild(diaElemento);
  }
}
