document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carouselContainer = document.querySelector(".carousel-container");
    const cards = document.querySelectorAll(".testimonial-card");
  
    // Define o tamanho do scroll
    const scrollAmount = carouselContainer.offsetWidth / 3;
  
    // Adiciona animação suave ao scroll
    const animateCard = (card) => {
      card.classList.add("active");
      setTimeout(() => {
        card.classList.remove("active");
      }, 300); // Duração da animação
    };
  
    // Evento para a seta anterior
    prevButton.addEventListener("click", () => {
      carouselContainer.scrollLeft -= scrollAmount;
  
      // Animação do cartão visível
      cards.forEach((card) => {
        const cardLeft = card.getBoundingClientRect().left;
        const containerLeft = carouselContainer.getBoundingClientRect().left;
  
        if (cardLeft >= containerLeft && cardLeft < containerLeft + scrollAmount) {
          animateCard(card);
        }
      });
    });
  
    // Evento para a seta próxima
    nextButton.addEventListener("click", () => {
      carouselContainer.scrollLeft += scrollAmount;
  
      // Animação do cartão visível
      cards.forEach((card) => {
        const cardRight = card.getBoundingClientRect().right;
        const containerRight = carouselContainer.getBoundingClientRect().right;
  
        if (cardRight <= containerRight && cardRight > containerRight - scrollAmount) {
          animateCard(card);
        }
      });
    });
  });
  