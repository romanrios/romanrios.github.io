export function renderNavbar() {
    return `
    <nav class="nav">
      <div class="nav__language">
        <button class="nav__lang-btn" data-lang="es">ES</button>
        <button class="nav__lang-btn" data-lang="en">EN</button>
      </div>

      <button class="nav__toggle" aria-label="Abrir menú">
        ☰
      </button>

      <ul class="nav__menu">
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#downloads">Descargas</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  `;
}
