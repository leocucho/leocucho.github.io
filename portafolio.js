// Mostrar el botón "Volver al inicio" al hacer scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block"; // Mostrar el botón
  } else {
    document.getElementById("back-to-top").style.display = "none"; // Ocultar el botón
  }
}

// Función para desplazar al principio de la página cuando se hace clic en el botón
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para otros navegadores
}

// Agregar evento de clic al botón "back-to-top"
document.getElementById("back-to-top").addEventListener("click", topFunction);

// Cambio de idioma
document.getElementById("English").onclick = function() {
    window.location.href = "index.html"; // Página en inglés
};

document.getElementById("Spanish").onclick = function() {
    window.location.href = "index-es.html"; // Página en español
};


aclib.runAutoTag({
    zoneId: '3ccxfv1zrc',
});

