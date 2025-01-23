function toggleMenuOpen() {
    document.body.classList.toggle('open');
  }
  
  // Cerrar el menú al hacer clic en cualquier enlace del menú
  document.querySelectorAll('.navbar-menu button').forEach(button => {
    button.addEventListener('click', () => {
      document.body.classList.remove('open');
    });
  });
  
  // Cerrar el menú al hacer clic en cualquier parte fuera del menú
  document.addEventListener('click', function(event) {
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarBurger = document.querySelector('.navbar-burger');
    const navbarOverlay = document.querySelector('.navbar-overlay');
  
    if (document.body.classList.contains('open') && 
        !navbarMenu.contains(event.target) && 
        !navbarBurger.contains(event.target) &&
        !navbarOverlay.contains(event.target)) {
      document.body.classList.remove('open');
    }
  });
  