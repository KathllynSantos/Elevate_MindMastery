document.addEventListener("DOMContentLoaded", () => {
    // Funcionalidade do Menu Responsivo
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu li a"); // Itens do menu
  
    // Alternar a visibilidade do menu ao clicar no ícone
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  
    // Fechar o menu quando um item de navegação for clicado
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        menu.classList.remove("active"); // Fecha o menu
      });
    });
});
