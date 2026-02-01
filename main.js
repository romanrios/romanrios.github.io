
import { translate } from "./i18n.js";

import { setLanguage } from "./lang.js";
import { renderNavbar } from "./components/Navbar.js";
import { renderHero } from "./components/Hero.js";
import { renderProfile } from "./components/Profile.js";
import { renderExperience } from "./components/Experience.js";
import { renderSkills } from "./components/Skills.js";
// import { renderProjects } from "./components/Projects.js";

function renderApp() {
  document.querySelector("#navbar").innerHTML = renderNavbar();
  document.querySelector("#hero").innerHTML = renderHero();
  document.querySelector("#profile").innerHTML = renderProfile();
  document.querySelector("#experience").innerHTML = renderExperience();
  document.querySelector("#skills").innerHTML = renderSkills();

  translate();
  initNavbarEvents();
}

// Navbar events
function initNavbarEvents() {
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

  // botones idioma
  document.querySelectorAll(".nav__lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
      translate();
    });
  });
}

// resize solo una vez
window.addEventListener("resize", () => {
  const menu = document.querySelector(".nav__menu");
  if (!menu) return;

  if (window.innerWidth > 858) {
    menu.classList.remove("is-open", "is-animated");
  }
});

renderApp();
