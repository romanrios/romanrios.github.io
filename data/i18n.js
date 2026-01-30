import { translations } from "./translations.js";

let currentLang = localStorage.getItem("lang") || "es";

export function t(path) {
    return path.split(".").reduce((obj, key) => obj?.[key], translations[currentLang]) || path;
}

export function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    translatePage();
}

export function translatePage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        el.innerHTML = t(key);
    });
}

export function getLanguage() {
    return currentLang;
}
