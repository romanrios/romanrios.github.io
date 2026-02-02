import { experience } from "../data/experience.js";

function renderCard(type, index) {
  return `
    <div class="exp__card">
      <div class="exp__info">
        <h3
          class="exp__card-title"
          data-i18n="experience.${type}.${index}.title"
        ></h3>

        <p data-i18n="experience.${type}.${index}.description"></p>

        <p
          class="exp__anio"
          data-i18n="experience.${type}.${index}.period"
        ></p>
      </div>
    </div>
  `;
}

function renderTimeline(type) {
  return `
    <div class="exp__timeline">
      <h3
        class="exp__timeline_top_title"
        data-i18n="experienceMeta.${type}"
      ></h3>

      <div class="exp__outer">
        ${experience[type].map((_, i) => renderCard(type, i)).join("")}
      </div>
    </div>
  `;
}

export function renderExperience() {
  return `
    <section class="exp">
      <h2
        class="exp__title"
        data-i18n="experienceMeta.sectionTitle"
      ></h2>

      <section class="exp__timelines-container">
        <div>
          ${renderTimeline("academic")}
          ${renderTimeline("work")}
        </div>

        ${renderTimeline("courses")}
      </section>
    </section>
  `;
}
