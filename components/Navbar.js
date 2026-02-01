import { getLanguage } from "../lang.js";

const navText = {
  home: { es: "Inicio", en: "Home" },
  experience: { es: "Experiencia", en: "Experience" },
  skills: { es: "Habilidades", en: "Skills" },
  projects: { es: "Proyectos", en: "Projects" },
  downloads: { es: "Descargas", en: "Downloads" },
  contact: { es: "Contacto", en: "Contact" },
};

export function renderNavbar() {
  const lang = getLanguage();

  return `
    <nav class="nav">

      <div class="nav__language">
        <button class="nav__lang-btn" data-lang="es">ES</button>
        <button class="nav__lang-btn" data-lang="en">EN</button>
      </div>

      <button class="nav__toggle" aria-label="Menu">
        ☰
      </button>

      <ul class="nav__menu">
        <li><a href="#hero">${navText.home[lang]}</a></li>
        <li><a href="#experience">${navText.experience[lang]}</a></li>
        <li><a href="#skills">${navText.skills[lang]}</a></li>
        <li><a href="#projects">${navText.projects[lang]}</a></li>
        <li><a href="#downloads">${navText.downloads[lang]}</a></li>
        <li><a href="#contact">${navText.contact[lang]}</a></li>
      </ul>

    </nav>
  `;
}
