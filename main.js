import { renderNavbar } from "./components/Navbar.js";
import { renderHero } from "./components/Hero.js";

document.querySelector("#navbar").innerHTML = renderNavbar();
document.querySelector("#hero").innerHTML = renderHero();

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