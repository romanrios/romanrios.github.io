import { heroProfile } from "../data/heroProfile.js";
import { getLanguage } from "../lang.js";

export function renderHero() {
  const lang = getLanguage();
  const hero = heroProfile.hero;

  return `
    <div class="hero">
      <img
        class="hero__image"
        src="${hero.image.src}"
        alt="${hero.image.alt[lang]}"
      />

      <h1 class="hero__title">${hero.name}</h1>

      <p class="hero__subtitle">
        ${hero.subtitle[lang]}
      </p>
    </div>
  `;
}
