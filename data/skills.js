export const skillsMeta = {
  sectionTitle: {
    es: "Habilidades",
    en: "Skills",
  },
};

export const skills = [
  // =========================
  // DESARROLLO
  // =========================
  {
    title: {
      es: "DESARROLLO",
      en: "DEVELOPMENT",
    },

    groups: [
      {
        subtitle: { es: "FRONTEND", en: "FRONTEND" },
        items: [
          { es: "JavaScript (ES6+)", en: "JavaScript (ES6+)" },
          { es: "TypeScript", en: "TypeScript" },
          { es: "React", en: "React" },
          { es: "HTML5", en: "HTML5" },
          { es: "CSS3", en: "CSS3" },
          { es: "Responsive Design", en: "Responsive Design" },
        ],
      },
      {
        subtitle: { es: "BACKEND", en: "BACKEND" },
        items: [
          { es: "Node.js", en: "Node.js" },
          { es: "Express.js", en: "Express.js" },
          { es: "REST APIs", en: "REST APIs" },
          { es: "MySQL", en: "MySQL" },
          { es: "Firebase", en: "Firebase" },
          { es: "MongoDB", en: "MongoDB" },
        ],
        subitems: ["Python", "PHP"],
      },

      {
        subtitle: { es: "SOFTWARE & GAME DEV", en: "SOFTWARE & GAME DEV" },
        items: [
          { es: "Visual Studio", en: "Visual Studio" },
          { es: "Android Studio", en: "Android Studio" },
          { es: "PixiJS", en: "PixiJS" },
        ],
        subitems: ["Unity", "Godot", "Construct"],
      },

    ],
  },

  // =========================
  // DISEÑO
  // =========================
  {
    title: {
      es: "DISEÑO",
      en: "DESIGN",
    },

    groups: [
      {
        subtitle: { es: "ÁREAS", en: "AREAS" },
        items: [
          { es: "UX/UI", en: "UX/UI" },
          { es: "Web & Apps", en: "Web & Apps" },
          { es: "Identidad Visual", en: "Identidad Visual" },
          { es: "Diseño Editorial", en: "Diseño Editorial" },
          { es: "Diseño de Información", en: "Diseño de Información" },
          { es: "Sistemas de Diseño", en: "Design Systems" },
          { es: "Producción Audiovisual", en: "Audiovisual Production" },
        ],
      },
      {
        subtitle: { es: "HERRAMIENTAS", en: "TOOLS" },
        items: [
          { es: "Figma", en: "Figma" },
          { es: "Adobe Illustrator", en: "Adobe Illustrator" },
          { es: "Adobe Photoshop", en: "Adobe Photoshop" },
          { es: "Adobe InDesign", en: "Adobe InDesign" },
          { es: "Adobe Premiere Pro", en: "Adobe Premiere Pro" },
          { es: "Adobe After Effects", en: "Adobe After Effects" },
        ],
        subitems: ["CorelDRAW", "Adobe Audition", "FL Studio"],
      },
    ],
  },

  // =========================
  // TRANSVERSALES 
  // =========================
  {
    title: {
      es: "TRANSVERSALES",
      en: "CORE",
    },

    groups: [
      {
        subtitle: { es: "SOFT SKILLS", en: "SOFT SKILLS" },
        items: [
          { es: "Proactividad", en: "Proactivity" },
          { es: "Adaptabilidad", en: "Adaptability" },
          { es: "Aprendizaje continuo", en: "Continuous Learning" },
          { es: "Trabajo en equipo", en: "Teamwork" },
          { es: "Comunicación efectiva", en: "Effective communication" },
        ],
      },
      {
        subtitle: { es: "WORKFLOW", en: "WORKFLOW" },
        items: [
          { es: "Git / GitHub", en: "Git / GitHub" },
          { es: "Google Workspace", en: "Google Workspace" },
          { es: "Notion", en: "Notion" },
          { es: "Automatización CSV/Datasets", en: "CSV/Datasets Automation" },
          { es: "IA aplicada al desarrollo", en: "AI-assisted development" },
        ],
      },
    ],
  },
];