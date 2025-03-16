// Seleciona os elementos
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle'); // O botão hamburguer
const closeMenu = document.querySelector('.close-menu'); // O ícone de fechar (X)

// Função para abrir o menu
menuToggle.addEventListener('click', () => {
  menu.classList.add('active'); // Adiciona a classe .active ao menu
});

// Função para fechar o menu
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active'); // Remove a classe .active do menu
});
