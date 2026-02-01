export function renderNavbar() {
  return `
    <nav class="nav">

      <div class="nav__language">
        <button class="nav__lang-btn" data-lang="es">ES</button>
        <button class="nav__lang-btn" data-lang="en">EN</button>
      </div>

      <button
        class="nav__toggle"
        data-i18n="navbar.menuLabel"
        data-i18n-attr="aria-label"
      >
        ☰
      </button>

      <ul class="nav__menu">
        <li><a href="#hero" data-i18n="navbar.home"></a></li>
        <li><a href="#experience" data-i18n="navbar.experience"></a></li>
        <li><a href="#skills" data-i18n="navbar.skills"></a></li>
        <li><a href="#projects" data-i18n="navbar.projects"></a></li>
        <li><a href="#downloads" data-i18n="navbar.downloads"></a></li>
        <li><a href="#contact" data-i18n="navbar.contact"></a></li>
      </ul>

    </nav>
  `;
}
