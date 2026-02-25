import { skills } from "../data/skills.js";

function renderGroup(group, path) {
  return `
    <div class="skills_group">
      ${group.subtitle
      ? `
          <h4
            class="skills_subtitle"
            data-i18n="${path}.subtitle"
          ></h4>
        `
      : ""
    }

      <div class="skills_box">
        ${group.items
      .map(
        (item, i) => `
              <p
                class="skills_tag"
                data-i18n="${path}.items.${i}"
              ></p>
            `
      )
      .join("")}
          </div>
          <div class="skills_box">
          ${Array.isArray(group.subitems) ? group.subitems.map((item) => `<p class="skills_subtag">${item}</p>`).join("") : ""}
    </div>
          </div>
  `;
}

function renderCategory(category, index) {
  return `
    <div class="skills_box_">
      <h3
        class="skills_box_title"
        data-i18n="skills.${index}.title"
      ></h3>

      ${category.groups
      .map((group, i) =>
        renderGroup(group, `skills.${index}.groups.${i}`)
      )
      .join("")}

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

      <section class="skills_box_container">
        ${skills.map((cat, i) => renderCategory(cat, i)).join("")}
      </section>
    </section>
  `;
}