export default function EmptyState({ t }) {
  return (
    <div className="empty-state">
      <p className="empty-title">{t.emptyTitle}</p>
      <p className="empty-body">{t.emptyBody}</p>
    </div>
  );
}
