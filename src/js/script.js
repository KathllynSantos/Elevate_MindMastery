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
