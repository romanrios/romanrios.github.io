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
        <li><a href="#hero" data-i18n="nav.home"></a></li>
        <li><a href="#experience" data-i18n="nav.experience"></a></li>
        <li><a href="#skills" data-i18n="nav.skills"></a></li>
        <li><a href="#projects" data-i18n="nav.projects"></a></li>
        <li><a href="#downloads" data-i18n="nav.downloads"></a></li>
        <li><a href="#contact" data-i18n="nav.contact"></a></li>
      </ul>
    </nav>
  `;
}
