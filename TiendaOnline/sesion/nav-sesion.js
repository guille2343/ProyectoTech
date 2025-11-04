// sesion/nav-sesion.js

/**
 * Función para marcar el enlace activo en la barra de navegación.
 */
function setPageActive() {
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    // Comparar el nombre del archivo para la página activa.
    const linkFileName = linkPath.split("/").pop();
    const currentFileName = currentPath.split("/").pop();

    if (currentFileName === linkFileName) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}

/**
 * Función principal que se ejecuta al cargar el DOM.
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. GESTIÓN DE LA SESIÓN
  const sessionContainer = document.getElementById("session-container");

  if (sessionContainer) {
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

    if (usuarioActivo && usuarioActivo.nombre) {
      const inicial =
        usuarioActivo.nombre.trim().charAt(0).toUpperCase() || "?";

      // Mostrar avatar y botón de cerrar sesión
      sessionContainer.innerHTML = `
              <div class="user-info-inline">
                <div class="logout-wrapper" id="navLogoutWrapper">
                  <div class="avatar" id="navAvatar">${inicial}</div>
                  <button class="logout-btn" id="navLogoutBtn">Cerrar sesión</button>
                </div>
              </div>
            `;

      const avatar = document.getElementById("navAvatar");
      const logoutBtn = document.getElementById("navLogoutBtn");
      const wrapper = document.getElementById("navLogoutWrapper");

      // Mostrar/ocultar el botón de cerrar sesión al hacer clic en el avatar
      avatar.addEventListener("click", () => {
        wrapper.classList.toggle("show");
      });

      // Lógica para cerrar sesión
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("usuarioActivo");
        window.location.href = "../Loguin/Loguin.html";
      });
    } else {
      // Mostrar el enlace de "Iniciar Sesión"
      sessionContainer.innerHTML = `
              <a href="../Loguin/Loguin.html" class="login-link-btn">Iniciar Sesión</a>
            `;
    }
  }

  setPageActive();
  document.body.classList.add("page-loaded");
});
