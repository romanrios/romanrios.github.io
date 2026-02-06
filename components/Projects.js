import { projects, projectsMeta } from "../data/projects.js";

function renderMedia(media) {
  if (media.type === "iframe") {
    return `
      <div class="project-media" style="padding:${media.ratio} 0 0 0;">
        <iframe
          src="${media.src}"
          loading="lazy"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    `;
  }

  if (media.type === "image") {
    const img = `<img src="${media.src}" loading="lazy" />`;

    return media.link
      ? `<a href="${media.link}" target="_blank">${img}</a>`
      : img;
  }
}

function renderLinks(links) {
  return links
    .map(
      link =>
        `<a href="${link.url}" target="_blank" class="link">${link.label}</a>`
    )
    .join("");
}

function renderProject(project, sectionKey, index) {
  return `
    <div class="project-detail">
      <p
        class="project-header"
        data-i18n="projects.${sectionKey}.${index}.roles"
      ></p>

      ${renderMedia(project.media)}

      <h3>${project.title}</h3>

      <p
        data-i18n="projects.${sectionKey}.${index}.description"
      ></p>

      ${renderLinks(project.links)}
    </div>
  `;
}

function renderSection(sectionKey, sectionProjects) {
  return `
    <div class="projects-section">
      <h3
        class="projects-section__title"
        data-i18n="projectsMeta.sections.${sectionKey}"
      ></h3>

      <div class="projects-list">
        ${sectionProjects
      .map((project, index) =>
        renderProject(project, sectionKey, index)
      )
      .join("")}
      </div>
    </div>
  `;
}

export function renderProjects() {
  return `
    <section class="projects">
      <h2
        class="exp__title"
        data-i18n="projectsMeta.sectionTitle"
      ></h2>

      ${Object.entries(projects)
      .map(([sectionKey, sectionProjects]) =>
        renderSection(sectionKey, sectionProjects)
      )
      .join("")}
    </section>
  `;
}
