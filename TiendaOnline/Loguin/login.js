// Escuchar el formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Buscar un usuario con esas credenciales
  const usuario = usuarios.find(
    (user) => user.email === email && user.password === password
  );

  if (usuario) {
    alert(`Bienvenido ${usuario.nombre}!`);
    // Guardar la sesión activa
    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
    window.location.href = "../Inicio/Inicio.html";
  } else {
    alert("Correo o contraseña incorrectos.");
  }
});
