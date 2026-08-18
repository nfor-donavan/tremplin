# Tremplin

Verified internships, scholarships, grants and programs for Cameroonian students. Bilingual (EN/FR). No backend — listings live in a plain JS file, so v1 stays dead simple to run and edit.

## Run it locally

```bash
npm install
npm run dev
```

## Add or edit listings

Everything lives in `src/data/listings.js`. Each listing looks like:

```js
{
  id: "unique-slug",
  org: "Organization name",
  category: "internship", // internship | scholarship | grant | program
  title_en: "English title",
  title_fr: "Titre en français",
  description_en: "One or two sentences.",
  description_fr: "Une ou deux phrases.",
  deadline: "2026-09-30", // or null for rolling/ongoing
  verified: true,          // false shows a red "avoid" badge — use for scam examples/warnings only
  link: "https://...",     // official source, not a random aggregator
}
```

Keep the "quality over quantity" rule from the roadmap: only post what you've personally checked against an official source.

## Deploy (same flow as your other projects)

```bash
npm run build
```

Push to a new GitHub repo (`tremplin` or similar), then import it into Vercel like `africonnect-web` and `civicslot` — it'll auto-detect the Vite config, no extra setup needed.

## What's intentionally NOT here yet

- User accounts / auth
- Email or WhatsApp alerts for new listings
- AI CV review or matching
- Employer submission form

Per the roadmap: get this in front of 10-20 real students first, then let their feedback decide what gets built next — not the other way around.
