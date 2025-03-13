const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu'); // Adicione isso

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Adicione isso:
if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}
