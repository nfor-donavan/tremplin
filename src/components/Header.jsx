export default function Header({ lang, setLang, t }) {
  return (
    <header className="header">
      <div className="header-row">
        <span className="wordmark">Tremplin</span>
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === "en" ? "fr" : "en")}
          aria-label="Switch language"
        >
          {t.langToggle}
        </button>
      </div>
    </header>
  );
}
