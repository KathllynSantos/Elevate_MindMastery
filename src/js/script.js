document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".certification-logos");
  const prevButton = document.querySelector(".carousel-certifications-btn.prev");
  const nextButton = document.querySelector(".carousel-certifications-btn.next");

  let scrollPosition = 0;
  const itemWidth = 170; // Largura da imagem + margem
  const visibleItems = 4; // Quantidade de itens visíveis no carrossel

  const updateCarouselPosition = () => {
    carousel.style.transform = `translateX(${-scrollPosition * itemWidth}px)`;
  };

  nextButton.addEventListener("click", () => {
    if (scrollPosition < carousel.children.length - visibleItems) {
      scrollPosition++;
      updateCarouselPosition();
    }
  });

  prevButton.addEventListener("click", () => {
    if (scrollPosition > 0) {
      scrollPosition--;
      updateCarouselPosition();
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
    function setupCarousel(containerSelector, btnPrevSelector, btnNextSelector) {
      const container = document.querySelector(containerSelector);
      const prevBtn = document.querySelector(btnPrevSelector);
      const nextBtn = document.querySelector(btnNextSelector);
  
      let scrollAmount = 0; // Controle de rolagem
  
      if (container && prevBtn && nextBtn) {
        const scrollStep = container.offsetWidth; // Passo é o tamanho visível do contêiner
  
        // Botão de rolar para trás
        prevBtn.addEventListener("click", () => {
          scrollAmount -= scrollStep;
          if (scrollAmount < 0) {
            scrollAmount = 0; // Impede rolagem para trás além do início
          }
          container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
          });
        });
  
        // Botão de rolar para frente
        nextBtn.addEventListener("click", () => {
          scrollAmount += scrollStep;
          if (scrollAmount > container.scrollWidth - container.offsetWidth) {
            scrollAmount = container.scrollWidth - container.offsetWidth; // Impede rolagem para frente além do final
          }
          container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
          });
        });
      }
    }
  
    // Inicializar os dois carrosséis
    setupCarousel(
      ".testimonials-container",
      ".carousel-btn.prev",
      ".carousel-btn.next"
    );
  
    setupCarousel(
      ".certifications-container",
      ".carousel-certifications-btn.prev",
      ".carousel-certifications-btn.next"
    );
  });
  