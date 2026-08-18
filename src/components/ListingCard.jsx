function daysUntil(dateStr) {
  if (!dateStr) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  const diffMs = target - today;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr, lang) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ListingCard({ listing, lang, t }) {
  const title = lang === "fr" ? listing.title_fr : listing.title_en;
  const description = lang === "fr" ? listing.description_fr : listing.description_en;
  const days = daysUntil(listing.deadline);

  let deadlineClass = "deadline-normal";
  if (days !== null) {
    if (days < 0) deadlineClass = "deadline-past";
    else if (days <= 7) deadlineClass = "deadline-urgent";
    else if (days <= 21) deadlineClass = "deadline-soon";
  }

  return (
    <article className={`card ${!listing.verified ? "card-unverified" : ""}`}>
      <div className="card-top">
        <span className="card-org">{listing.org}</span>
        <span className={`badge ${listing.verified ? "badge-verified" : "badge-unverified"}`}>
          {listing.verified ? t.verified : t.unverified}
        </span>
      </div>

      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>

      <div className="card-footer">
        <span className={`deadline ${deadlineClass}`}>
          {listing.deadline ? (
            <>
              {t.deadlineLabel}: {formatDate(listing.deadline, lang)}
            </>
          ) : (
            t.rolling
          )}
        </span>

        {listing.link ? (
          <a
            className="card-link"
            href={listing.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.viewDetails} →
          </a>
        ) : (
          <span className="card-link card-link-disabled">{t.noLink}</span>
        )}
      </div>
    </article>
  );
}
