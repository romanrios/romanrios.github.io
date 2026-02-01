import { projects } from "../data/projects.js";
import { t } from "../data/i18n.js";

function renderMedia(media) {
  if (media.type === "iframe") {
    return `
      <div style="padding: ${media.ratio} 0 0 0; position: relative; margin-bottom: 7px;">
        <iframe
          src="${media.src}"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    `;
  }

  if (media.type === "image") {
    return `
      <a href="${media.link}" target="_blank">
        <img src="${media.src}" />
      </a>
    `;
  }
}

function renderLinks(links) {
  return links
    .map(
      link => `<a href="${link.url}" target="_blank" class="link">${link.label}</a>`
    )
    .join("");
}

function renderProject(project) {
  return `
    <div class="project-detail">
      <p class="project-header">${t(project.rolesKey)}</p>

      ${renderMedia(project.media)}

      <h3>${project.title}</h3>
      <p data-i18n="${project.descriptionKey}"></p>

      ${renderLinks(project.links)}
    </div>
  `;
}

export function renderProjects() {
  return `
    <section class="projects">
      <h2 class="exp__title" data-i18n="projects.title"></h2>

      <div class="projects-list">
        ${projects.map(renderProject).join("")}
      </div>
    </section>
  `;
}
