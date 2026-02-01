import { translatePage, setLanguage } from "./data/i18n.js";
import { renderNavbar } from "./components/Navbar.js";
import { renderHero } from "./components/Hero.js";
import { renderProfile } from "./components/Profile.js";
import { renderExperience } from "./components/Experience.js";
import { renderSkills } from "./components/Skills.js";
import { renderProjects } from "./components/Projects.js";


document.querySelector("#navbar").innerHTML = renderNavbar();
document.querySelector("#hero").innerHTML = renderHero();
document.querySelector("#profile").innerHTML = renderProfile();
document.querySelector("#experience").innerHTML = renderExperience();
document.querySelector("#skills").innerHTML = renderSkills();
document.querySelector("#projects").innerHTML = renderProjects();



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
