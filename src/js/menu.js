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
  