import { useMemo, useState } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ListingCard from "./components/ListingCard";
import EmptyState from "./components/EmptyState";
import Stamp from "./components/Stamp";
import { listings, categories } from "./data/listings";
import { strings } from "./data/strings";
import "./App.css";

export default function App() {
  const [lang, setLang] = useState("en");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const t = strings[lang];

  const verifiedCount = listings.filter((l) => l.verified).length;

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      const matchesCategory =
        activeCategory === "all" || l.category === activeCategory;
      const title = lang === "fr" ? l.title_fr : l.title_en;
      const desc = lang === "fr" ? l.description_fr : l.description_en;
      const haystack = `${title} ${desc} ${l.org}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, lang]);

  return (
    <div className="app">
      <Header lang={lang} setLang={setLang} t={t} />

      <section className="hero">
        <Stamp size={104} className="hero-stamp" />
        <h1 className="hero-title">{t.tagline}</h1>
        <p className="hero-subhead">{t.subhead}</p>
        <p className="hero-count">
          {verifiedCount} {verifiedCount === 1 ? t.countSingle : t.countPlural}
        </p>
      </section>

      <main className="main">
        <FilterBar
          t={t}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          query={query}
          setQuery={setQuery}
        />

        {filtered.length === 0 ? (
          <EmptyState t={t} />
        ) : (
          <div className="grid">
            {filtered.map((listing) => (
              <ListingCard key={listing.id} listing={listing} lang={lang} t={t} />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>{t.footerNote}</p>
      </footer>
    </div>
  );
}
