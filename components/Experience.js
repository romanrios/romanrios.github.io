import { experience } from "../data/experience.js";
import { t } from "../data/i18n.js";

function renderCard(item) {
  const period = item.periodKey ? t(item.periodKey) : item.period;

  return `
    <div class="exp__card">
      <div class="exp__info">
        <h3 class="exp__card-title">${item.title}</h3>
        <p>${t(item.descriptionKey)}</p>
        <p class="exp__anio">${period}</p>
      </div>
    </div>
  `;
}

function renderTimeline(titleKey, items) {
  return `
    <div class="exp__timeline">
      <h3 class="exp__timeline_top_title" data-i18n="${titleKey}"></h3>
      <div class="exp__outer">
        ${items.map(renderCard).join("")}
      </div>
    </div>
  `;
}

export function renderExperience() {
  return `
    <section class="exp">
      <h2 class="exp__title" data-i18n="nav.experience"></h2>

      <section class="exp__timelines-container">
        <div>
          ${renderTimeline("experience.academic", experience.academic)}
          ${renderTimeline("experience.work", experience.work)}
        </div>

        ${renderTimeline("experience.courses", experience.courses)}
      </section>
    </section>
  `;
}
