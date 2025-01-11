const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
    document.addEventListener('DOMContentLoaded', () => {
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const carouselContainer = document.querySelector('.carousel-container');
      
        // Define o tamanho do scroll (igual à largura de um card)
        const scrollAmount = carouselContainer.offsetWidth / 3;
      
        // Evento para a seta anterior
        prevButton.addEventListener('click', () => {
          carouselContainer.scrollLeft -= scrollAmount;
        });
      
        // Evento para a seta próxima
        nextButton.addEventListener('click', () => {
          carouselContainer.scrollLeft += scrollAmount;
        });
      });
      