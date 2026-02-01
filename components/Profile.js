import { heroProfile } from "../data/heroProfile.js";
import { getLanguage } from "../lang.js";

export function renderProfile() {
  const lang = getLanguage();

  return `
    <div class="profile">
      <p class="profile__text">
        ${heroProfile.profile.description[lang]}
      </p>
    </div>
  `;
}
