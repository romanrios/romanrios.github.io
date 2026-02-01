import { skills, skillsMeta } from "../data/skills.js";
import { getLanguage } from "../lang.js";

function renderTag(item, lang) {
  const label = typeof item === "string" ? item : item[lang];
  return `<p class="tag">${label}</p>`;
}

function renderCategory(category, lang) {
  return `
    <div class="habilidades_box_">
      <h3 class="hab_box_title">
        ${category.title[lang]}
      </h3>

      <div class="habilidades_box">
        ${category.items.map(item => renderTag(item, lang)).join("")}
      </div>
    </div>
  `;
}

export function renderSkills() {
  const lang = getLanguage();

  return `
    <section class="skills">
      <h2 class="exp__title">
        ${skillsMeta.sectionTitle[lang]}
      </h2>

      <section class="habilidades_box_container">
        ${skills.map(cat => renderCategory(cat, lang)).join("")}
      </section>
    </section>
  `;
}
