import { renderNavbar } from "./components/Navbar.js";
import { renderHero } from "./components/Hero.js";
import { translatePage, setLanguage } from "./data/i18n.js";

document.querySelector("#navbar").innerHTML = renderNavbar();
document.querySelector("#hero").innerHTML = renderHero();

// -----------------------

// Navbar
const toggleButton = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

toggleButton.addEventListener("click", () => {
  menu.classList.add("is-animated");
  menu.classList.toggle("is-open");
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 858) {
    menu.classList.remove("is-open", "is-animated");
  }
});

// -----------------------

// Activar traducciones
translatePage();

// Botones de idioma
document.querySelectorAll(".nav__lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

// -----------------------
