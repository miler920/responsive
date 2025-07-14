


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("comentarioForm");
  const comentariosDiv = document.getElementById("comentarios");
  const estadisticasDiv = document.getElementById("estadisticas");

  // Cargar comentarios desde localStorage o array vacío
  let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

  // Función para guardar en localStorage
  function guardarComentarios() {
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }

  // Mostrar los comentarios
  function mostrarComentarios() {
    comentariosDiv.innerHTML = "";
    comentarios.slice().reverse().forEach((c, index) => {
      const div = document.createElement("div");
      div.classList.add("comentario-item");
      div.innerHTML = `
        <div class="estrella">${'★'.repeat(c.estrellas)}${'☆'.repeat(5 - c.estrellas)}</div>
        <p>${c.texto}</p>
        <button class="eliminar-btn" data-index="${index}">🗑 Eliminar</button>
      `;
      comentariosDiv.appendChild(div);
    });

    // Botones para eliminar
    document.querySelectorAll(".eliminar-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        eliminarComentario(index);
      });
    });
  }

  // Mostrar estadísticas
  function mostrarEstadisticas() {
    estadisticasDiv.innerHTML = "";
    const conteo = [0, 0, 0, 0, 0];
    comentarios.forEach(c => conteo[c.estrellas - 1]++);

    const total = comentarios.length || 1;
    for (let i = 5; i >= 1; i--) {
      const porcentaje = (conteo[i - 1] / total) * 100;
      estadisticasDiv.innerHTML += `
        <div>${i} estrella${i > 1 ? "s" : ""} (${conteo[i - 1]}):</div>
        <div class="barra-container">
          <div class="barra" style="width: ${porcentaje}%;"></div>
        </div>
      `;
    }
  }

  // Agregar nuevo comentario
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const estrellas = parseInt(form.estrella.value);
    const texto = form.comentario.value.trim();
    if (!estrellas || !texto) return;

    const nuevoComentario = {
      estrellas,
      texto,
      fecha: new Date().toISOString()
    };

    comentarios.push(nuevoComentario);
    guardarComentarios();
    form.reset();
    mostrarComentarios();
    mostrarEstadisticas();
  });

  // Eliminar comentario
  function eliminarComentario(index) {
    const realIndex = comentarios.length - 1 - index; // invertir por reverse()
    comentarios.splice(realIndex, 1);
    guardarComentarios();
    mostrarComentarios();
    mostrarEstadisticas();
  }

  // Mostrar al cargar
  mostrarComentarios();
  mostrarEstadisticas();
});

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

