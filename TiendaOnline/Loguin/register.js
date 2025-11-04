// Escuchar el formulario de registro
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Cargar usuarios guardados
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Chequear si el email ya existe
  const existe = usuarios.some((user) => user.email === email);

  if (existe) {
    alert("Ya existe una cuenta con este correo.");
    return;
  }

  // Añadir el nuevo usuario
  const nuevoUsuario = { nombre, telefono, email, password };
  usuarios.push(nuevoUsuario);

  // Guardar la lista de usuarios
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cuenta creada correctamente. Ahora puedes iniciar sesión.");
  window.location.href = "Loguin.html";
});
