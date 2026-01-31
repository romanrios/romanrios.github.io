import { experience } from "../data/experience.js";
import { t } from "../data/i18n.js";

function renderCard(item) {
  const period = item.periodKey ? t(item.periodKey) : item.period;

  return `
    <div class="card">
      <div class="info">
        <h3 class="title">${item.title}</h3>
        <p>${t(item.descriptionKey)}</p>
        <p class="anio">${period}</p>
      </div>
    </div>
  `;
}

function renderTimeline(titleKey, items) {
  return `
    <div class="timeline">
      <h3 class="timeline_top_title" data-i18n="${titleKey}"></h3>
      <div class="outer">
        ${items.map(renderCard).join("")}
      </div>
    </div>
  `;
}

export function renderExperience() {
  return `
    <section class="experience">
      <h2 data-i18n="nav.experience"></h2>

      <section class="timelines-container">
        <div>
          ${renderTimeline("experience.academic", experience.academic)}
          ${renderTimeline("experience.work", experience.work)}
        </div>

        ${renderTimeline("experience.courses", experience.courses)}
      </section>
    </section>
  `;
}
