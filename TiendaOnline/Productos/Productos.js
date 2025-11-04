// Lista simulada de productos (puedes cargar desde Firebase luego)
const productos = [
  {
    nombre: "Camisa Estampada",
    imagen: "../imagenes/estampado.png",
    categoria: "Moda",
    descripcion: "Camisa fresca y moderna ideal para cualquier ocasión.",
    precio: "$45.000",
  },
  {
    nombre: "Pantalón Casual",
    imagen: "../imagenes/pantalonCasual.png",
    categoria: "Casual",
    descripcion: "Comodidad y estilo en un solo producto.",
    precio: "$70.000",
  },
  {
    nombre: "Vestido Floral",
    imagen: "../imagenes/vestidoFloral.png",
    categoria: "Elegante",
    descripcion: "Perfecto para un look moderno y femenino.",
    precio: "$90.000",
  },
];

const contenedor = document.getElementById("productos-lista");

productos.forEach((prod) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <div class="card-content">
      <h3>${prod.nombre}</h3>
      <p><strong>Categoría:</strong> ${prod.categoria}</p>
      <p>${prod.descripcion}</p>
      <p class="precio">${prod.precio}</p>
      <button class="btn-comprar">Comprar</button>
    </div>
  `;
  contenedor.appendChild(card);
});

// Lógica base para carrito (aún sin Firebase)
let carrito = [];

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-comprar")) {
    const nombre = e.target.parentElement.querySelector("h3").textContent;
    carrito.push(nombre);
    alert(`${nombre} agregado al carrito 🛒`);
    console.log("Carrito:", carrito);
  }
});
