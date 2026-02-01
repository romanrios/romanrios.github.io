import { experience, experienceMeta } from "../data/experience.js";
import { getLanguage } from "../lang.js";

function renderCard(item, lang) {
  return `
    <div class="exp__card">
      <div class="exp__info">
        <h3 class="exp__card-title">${item.title[lang]}</h3>
        <p>${item.description[lang]}</p>
        <p class="exp__anio">${item.period[lang]}</p>
      </div>
    </div>
  `;
}

function renderTimeline(titleKey, items, lang) {
  return `
    <div class="exp__timeline">
      <h3 class="exp__timeline_top_title">
        ${experienceMeta[titleKey][lang]}
      </h3>

      <div class="exp__outer">
        ${items.map(item => renderCard(item, lang)).join("")}
      </div>
    </div>
  `;
}

export function renderExperience() {
  const lang = getLanguage();

  return `
    <section class="exp">
      <h2 class="exp__title">
        ${experienceMeta.sectionTitle[lang]}
      </h2>

      <section class="exp__timelines-container">
        <div>
          ${renderTimeline("academic", experience.academic, lang)}
          ${renderTimeline("work", experience.work, lang)}
        </div>

        ${renderTimeline("courses", experience.courses, lang)}
      </section>
    </section>
  `;
}
