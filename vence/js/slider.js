document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slider img");
    const counter = document.querySelector(".hero-page__counter");
    const total = slides.length;
    let current = 0;
  
    const updateCounter = () => {
      counter.textContent = `${current + 1}/${total}`;
    };
  
    const changeSlide = () => {
      slides[current].classList.remove("active");
      current = (current + 1) % total;
      slides[current].classList.add("active");
      updateCounter();
    };
  
    updateCounter();
    setInterval(changeSlide, 4000);
  });