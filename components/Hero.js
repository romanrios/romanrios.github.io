export function renderHero() {
  return `
    <div class="hero">
      <img
        class="hero__image"
        src="./assets/images/perfil.png"
        alt="Foto de perfil de Román Ríos"
      />

      <h1 class="hero__title">Román Ríos</h1>

      <p class="hero__subtitle" data-i18n="hero.subtitle"></p>
    </div>
  `;
}
