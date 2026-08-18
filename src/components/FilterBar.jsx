export default function FilterBar({
  t,
  categories,
  activeCategory,
  setActiveCategory,
  query,
  setQuery,
}) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        className="search-input"
        placeholder={t.searchPlaceholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="chips" role="tablist" aria-label="Category filter">
        <button
          className={`chip ${activeCategory === "all" ? "chip-active" : ""}`}
          onClick={() => setActiveCategory("all")}
          role="tab"
          aria-selected={activeCategory === "all"}
        >
          {t.all}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`chip ${activeCategory === cat ? "chip-active" : ""}`}
            onClick={() => setActiveCategory(cat)}
            role="tab"
            aria-selected={activeCategory === cat}
          >
            {t[cat]}
          </button>
        ))}
      </div>
    </div>
  );
}
