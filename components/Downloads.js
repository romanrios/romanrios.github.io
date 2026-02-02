import { downloads } from "../data/downloads.js";

function renderLink(item, i) {
  return `
    <a
      class="downloads_link"
      href="${item.href}"
      target="_blank"
      ${item.id ? `id="${item.id}"` : ""}
      data-i18n="downloads.items.${i}.label"
    ></a>
  `;
}

export function renderDownloads() {
  return `
    <section id="downloads">
      <h2 class="exp__title" data-i18n="downloads.meta.sectionTitle"></h2>
      ${downloads.items.map(renderLink).join("")}
    </section>
  `;
}

