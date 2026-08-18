// Verified listings. Each one checked against its official source before being added.
// deadline: ISO date string ("YYYY-MM-DD") or null for rolling/ongoing.
// category: "internship" | "scholarship" | "grant" | "program"

export const listings = [
  {
    id: "chevening-2027",
    org: "UK Government (FCDO)",
    category: "scholarship",
    title_en: "Chevening Scholarship 2027/28",
    title_fr: "Bourse Chevening 2027/28",
    description_en:
      "Fully funded one-year master's degree at any UK university, covering tuition, travel and a monthly stipend. Requires 2,800+ hours of work experience.",
    description_fr:
      "Master d'un an entièrement financé dans n'importe quelle université britannique, incluant frais de scolarité, voyage et allocation mensuelle. Nécessite plus de 2800 heures d'expérience professionnelle.",
    deadline: "2026-10-06",
    verified: true,
    link: "https://www.chevening.org/apply/",
  },
  {
    id: "undp-digital-ai-internship",
    org: "UNDP",
    category: "internship",
    title_en: "UNDP Remote Internship — Digital, AI and Innovation",
    title_fr: "Stage à distance PNUD — Numérique, IA et Innovation",
    description_en:
      "Remote internship with a ~$500 monthly stipend, working on digital transformation and AI projects with the UN Development Programme.",
    description_fr:
      "Stage à distance avec une allocation mensuelle d'environ 500 $, travaillant sur des projets de transformation numérique et d'IA avec le PNUD.",
    deadline: "2026-09-30",
    verified: true,
    link: "https://estm.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/33001",
  },
  {
    id: "au-internship-program",
    org: "African Union",
    category: "internship",
    title_en: "African Union Internship Program",
    title_fr: "Programme de stages de l'Union Africaine",
    description_en:
      "Full-time internship across AU departments in Addis Ababa. Open to AU member-state nationals aged 22–32, applications via the AU Careers portal.",
    description_fr:
      "Stage à temps plein dans les départements de l'UA à Addis-Abeba. Ouvert aux ressortissants des États membres âgés de 22 à 32 ans, candidature via le portail carrières de l'UA.",
    deadline: null,
    verified: true,
    link: "https://au.int/en/internships",
  },
  {
    id: "orange-digital-center-cm",
    org: "Orange Cameroun",
    category: "program",
    title_en: "Orange Digital Center Cameroon",
    title_fr: "Orange Digital Center Cameroun",
    description_en:
      "Free digital skills training and the Orange Fab startup accelerator, with centers in Yaoundé, Douala, Buea, and Maroua.",
    description_fr:
      "Formation gratuite aux compétences numériques et accélérateur de startups Orange Fab, avec des centres à Yaoundé, Douala, Buea et Maroua.",
    deadline: null,
    verified: true,
    link: "https://www.orange.cm/digital-center",
  },
  {
    id: "google-internship-2026",
    org: "Google",
    category: "internship",
    title_en: "Google Internship Programme",
    title_fr: "Programme de stages Google",
    description_en:
      "3–6 month internships across software engineering, AI, cloud computing, data science and product management, worldwide. Rolling basis — each posting has its own deadline.",
    description_fr:
      "Stages de 3 à 6 mois en ingénierie logicielle, IA, cloud computing, data science et gestion de produit, dans le monde entier. Candidatures continues — chaque offre a sa propre date limite.",
    deadline: null,
    verified: true,
    link: "https://careers.google.com/students/",
  },
  {
    id: "example-scam-flag",
    org: "Unverified poster (example)",
    category: "internship",
    title_en: '"Guaranteed" remote internship — pay a registration fee',
    title_fr:
      "Stage à distance \u00ab garanti \u00bb — payer des frais d'inscription",
    description_en:
      "Example of a listing that would be rejected: any opportunity asking for payment upfront is a red flag, not a real employer.",
    description_fr:
      "Exemple d'annonce qui serait rejetée : toute offre demandant un paiement à l'avance est un signal d'alerte, pas un vrai employeur.",
    deadline: null,
    verified: false,
    link: "",
  },
];

export const categories = ["internship", "scholarship", "grant", "program"];
