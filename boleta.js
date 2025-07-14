// script.js
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const headerImages = [
  'img/fondo1.jpg',
  'img/fondo2.jpg',
  'img/fondo3.jpg',
  'img/fondo4.jpg',
  'img/fondo5.jpg'
];

let currentImage = 0;

function updateHeaderBackground() {
  const header = document.getElementById('main-header');
  header.style.backgroundImage = `url(${headerImages[currentImage]})`;
  currentImage = (currentImage + 1) % headerImages.length;
}

// Cambia cada 5 segundos
setInterval(updateHeaderBackground, 7000);
window.onload = updateHeaderBackground;


const mensaje = document.querySelector('textarea[name="mensaje"]');
const charCount = document.getElementById('charCount');

mensaje.addEventListener('input', () => {
const length = mensaje.value.length;
charCount.textContent = `${length} / 10 caracteres`;
});


let productos = [];

document.getElementById('btnAgregar').addEventListener('click', () => {
  const productoSeleccionado = document.getElementById('producto').value;
  const cantidad = parseInt(document.getElementById('cantidad').value);

  if (!productoSeleccionado || cantidad < 1) return;

  const [nombre, precioStr] = productoSeleccionado.split('|');
  const precio = parseFloat(precioStr);
  const subtotal = cantidad * precio;

  productos.push({ nombre, precio, cantidad, subtotal });
  actualizarTabla();
});

function actualizarTabla() {
  const tbody = document.querySelector('#tablaProductos tbody');
  tbody.innerHTML = '';

  let subtotal = 0;

  productos.forEach((item, index) => {
    subtotal += item.subtotal;
    const fila = `
      <tr>
        <td>${item.cantidad}</td>
        <td>${item.nombre}</td>
        <td>S/. ${item.precio.toFixed(2)}</td>
        <td>S/. ${item.subtotal.toFixed(2)}</td>
        <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
      </tr>
    `;
    tbody.innerHTML += fila;
  });

  const igv = subtotal * 0.18;
  const total = subtotal + igv;

  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('igv').textContent = igv.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
}

function eliminarProducto(index) {
  productos.splice(index, 1);
  actualizarTabla();
}

function imprimirBoleta() {
  window.print();
}

// 🌙 Modo oscuro
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
