import { skills } from "../data/skills.js";

function renderTag(item, path) {
  // item fijo (string)
  if (typeof item === "string") {
    return `<p class="tag">${item}</p>`;
  }

  // item traducible
  return `
    <p
      class="tag"
      data-i18n="${path}"
    ></p>
  `;
}

function renderCategory(category, index) {
  return `
    <div class="habilidades_box_">
      <h3
        class="hab_box_title"
        data-i18n="skills.${index}.title"
      ></h3>

      <div class="habilidades_box">
        ${category.items
      .map((item, i) =>
        renderTag(item, `skills.${index}.items.${i}`)
      )
      .join("")}
      </div>
    </div>
  `;
}

export function renderSkills() {
  return `
    <section class="skills">
      <h2
        class="exp__title"
        data-i18n="skillsMeta.sectionTitle"
      ></h2>

      <section class="habilidades_box_container">
        ${skills.map((cat, i) => renderCategory(cat, i)).join("")}
      </section>
    </section>
  `;
}
