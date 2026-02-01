import { skills } from "../data/skills.js";
import { t } from "../data/i18n.js";

function renderTag(item) {
  const label = item.includes(".") ? t(item) : item;
  return `<p class="tag">${label}</p>`;
}

function renderCategory(category) {
  return `
    <div class="habilidades_box_">
      <h3 class="hab_box_title" data-i18n="${category.titleKey}"></h3>
      <div class="habilidades_box">
        ${category.items.map(renderTag).join("")}
      </div>
    </div>
  `;
}

export function renderSkills() {
  return `
    <section class="skills">
      <h2 class="exp__title" data-i18n="skills.title"></h2>

      <section class="habilidades_box_container">
        ${skills.map(renderCategory).join("")}
      </section>
    </section>
  `;
}
