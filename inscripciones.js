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

// script.js
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

  
    // Validar edad mínima al enviar formulario
    form.addEventListener("submit", (e) => {
      const edadInput = document.getElementById("edad");
      const edad = parseInt(edadInput.value, 10);
  
      if (isNaN(edad) || edad < 6) {
        e.preventDefault();
        alert("La edad mínima para inscribirse es 6 años.");
        edadInput.focus();
        return;
      }
  
      // Simular envío con alerta
      e.preventDefault();
      alert("¡Gracias por inscribirte! Nos pondremos en contacto contigo pronto.");
      form.reset();
    });
  
  