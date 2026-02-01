import { experience } from "../data/experience.js";

function renderCard(item) {
  const period = item.periodKey
    ? `<p class="exp__anio" data-i18n="${item.periodKey}"></p>`
    : `<p class="exp__anio">${item.period}</p>`;

  const cardTitle = item.titleKey
    ? `<h3 class="exp__card-title" data-i18n="${item.titleKey}"></h3>`
    : `<h3 class="exp__card-title">${item.title}</h3>`


  return `
    <div class="exp__card">
      <div class="exp__info">
        ${cardTitle}
        <p data-i18n="${item.descriptionKey}"></p>
        ${period}
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
