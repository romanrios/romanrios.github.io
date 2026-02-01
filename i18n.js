import { getLanguage } from "./lang.js";
import { experience, experienceMeta } from "./data/experience.js";
import { heroProfile } from "./data/heroProfile.js";
import { skills } from "./data/skills.js";
import { projects } from "./data/projects.js";
import { navbar } from "./data/navbar.js";


const dict = {
    navbar,
    experience,
    experienceMeta,
    heroProfile,
    skills,
    projects
};

function resolve(path, lang) {
    return path.split(".").reduce((obj, key) => obj?.[key], dict)?.[lang] ?? "";
}

export function translate(root = document) {
    const lang = getLanguage();

    root.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        const attr = el.dataset.i18nAttr;
        const value = resolve(key, lang);

        if (!value) return;

        if (attr) {
            el.setAttribute(attr, value);
        } else {
            el.innerHTML = value;
        }
    });
}

