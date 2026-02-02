let lang = localStorage.getItem("lang") || "es";

export function getLanguage() {
  return lang;
}

export function setLanguage(newLang) {
  lang = newLang;
  localStorage.setItem("lang", newLang);
}
