// Animação de entrada suave nos cards
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// Inicializar estado dos cards
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
})

// Menu hamburguer
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});