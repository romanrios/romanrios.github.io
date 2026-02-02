import { contact } from "../data/contact.js";

const { info, social } = contact;

function renderSocialLinks() {
  return social
    .map(
      s => `
        <a href="${s.url}" target="_blank" class="fa-stack fa-2x">
          <i class="fa-solid fa-circle fa-stack-2x"></i>
          <i class="fa-brands fa-${s.icon} fa-stack-1x fa-inverse"></i>
        </a>
      `
    )
    .join("");
}

function renderInfoItem(icon, content, i18nKey) {
  return `
    <div class="contact__item">
      <i class="${icon}"></i>
      ${i18nKey
      ? `<span data-i18n="${i18nKey}"></span>`
      : `<span>${content}</span>`
    }
    </div>
    <hr class="contact__divider" />
  `;
}

export function renderContact() {
  return `
    <section class="contact">
      <h2 class="exp__title" class="contact__title" data-i18n="contact.meta.sectionTitle"></h2>

      <div class="contact__content">

        <div class="contact__info">
          ${renderInfoItem("fa-solid fa-location-dot", null, "contact.info.location")}
          ${renderInfoItem("fa-brands fa-whatsapp", info.phone)}
          ${renderInfoItem("fa-regular fa-envelope", info.email)}

          <div class="contact__social">
            ${renderSocialLinks()}
          </div>
        </div>

        <form
          class="contact__form"
          action="https://formspree.io/f/meqwqwnb"
          method="POST"
        >
          <div class="contact__form-fields">

            <input
  type="text"
  class="contact__input"
  required
  name="name"
  autocomplete="name"
  data-i18n="contact.form.placeholders.name"
  data-i18n-attr="placeholder"
/>

            <input
  type="email"
  class="contact__input"
  required
  name="_replyto"
  data-i18n="contact.form.placeholders.email"
  data-i18n-attr="placeholder"
/>


            <textarea
  class="contact__input contact__input--message"
  required
  rows="7"
  name="message"
  data-i18n="contact.form.placeholders.message"
  data-i18n-attr="placeholder"
></textarea>


            <input
  type="submit"
  class="contact__submit"
  data-i18n="contact.form.submit"
  data-i18n-attr="value"
/>


          </div>
        </form>

      </div>
    </section>
  `;
}
