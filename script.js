// ========== MENU HAMBURGUER ==========
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  // Abre/fecha o menu ao clicar nas 3 barrinhas
  menuToggle.addEventListener("click", () => {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });

  // Fecha o menu quando clicar em um link
  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.style.display = "none";
    });
  });
});

// ========== ANIMAÇÃO DE ENTRADA NOS CARDS ==========
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// Estado inicial dos cards (ocultos)
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
});