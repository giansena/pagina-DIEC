document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scroll para los enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Evento simple para el botón de contacto
  const btnContacto = document.getElementById('btnContacto');
  if (btnContacto) {
    btnContacto.addEventListener('click', () => {
      alert('¡Gracias por tu interés! Déjanos tu correo o contáctanos a contacto@diec.com');
    });
  }
});