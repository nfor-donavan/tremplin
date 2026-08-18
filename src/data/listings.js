// Seed data. Replace/extend with real, verified opportunities.
// deadline: ISO date string ("YYYY-MM-DD") or null for rolling/ongoing.
// category: "internship" | "scholarship" | "grant" | "program"

export const listings = [
  {
    id: "unicef-epp",
    org: "UNICEF",
    category: "internship",
    title_en: "UNICEF EPP 3.0 Internship (Rome)",
    title_fr: "Stage UNICEF EPP 3.0 (Rome)",
    description_en:
      "Innovation-focused internship track for early-career tech talent, based at UNICEF's Office of Innovation.",
    description_fr:
      "Programme de stage axé sur l'innovation pour jeunes talents tech, basé au bureau de l'innovation de l'UNICEF.",
    deadline: null,
    verified: true,
    link: "https://www.unicef.org/careers",
  },
  {
    id: "govai-fellowship",
    org: "GovAI",
    category: "program",
    title_en: "GovAI Fellowship",
    title_fr: "Bourse GovAI",
    description_en:
      "Research fellowship on AI governance and policy, open to applicants worldwide.",
    description_fr:
      "Bourse de recherche sur la gouvernance et les politiques de l'IA, ouverte aux candidats du monde entier.",
    deadline: null,
    verified: true,
    link: "https://www.governance.ai/",
  },
  {
    id: "wipo-internship",
    org: "WIPO",
    category: "internship",
    title_en: "WIPO Internship Programme",
    title_fr: "Programme de stages de l'OMPI",
    description_en:
      "Internship placements at the World Intellectual Property Organization in Geneva.",
    description_fr:
      "Stages à l'Organisation Mondiale de la Propriété Intellectuelle à Genève.",
    deadline: null,
    verified: true,
    link: "https://www.wipo.int/about-wipo/en/employment/interns.html",
  },
  {
    id: "mapp-embassy",
    org: "U.S. Embassy Yaoundé",
    category: "program",
    title_en: "MAPP Program",
    title_fr: "Programme MAPP",
    description_en:
      "Mentorship and professional development program run by the U.S. Embassy in Yaoundé.",
    description_fr:
      "Programme de mentorat et de développement professionnel organisé par l'Ambassade des États-Unis à Yaoundé.",
    deadline: null,
    verified: true,
    link: "https://cm.usembassy.gov/",
  },
  {
    id: "example-scam-flag",
    org: "Unverified poster (example)",
    category: "internship",
    title_en: "\"Guaranteed\" remote internship — pay a registration fee",
    title_fr: "Stage à distance \u00ab garanti \u00bb — payer des frais d'inscription",
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
