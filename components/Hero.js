import { heroProfile } from "../data/heroProfile.js";

export function renderHero() {
  const hero = heroProfile.hero;

  return `
    <div class="hero">
      <img
        class="hero__image"
        src="${hero.image.src}"
        data-i18n="heroProfile.hero.image.alt"
        data-i18n-attr="alt"
      />

      <h1 class="hero__title">
        ${hero.name}
      </h1>

      <p
        class="hero__subtitle"
        data-i18n="heroProfile.hero.subtitle"
      ></p>
    </div>
  `;
}
