export default function ServiceCard({ icon: Icon, title, children }) {
  return (
    <article className="service-card">
      <div className="icon-badge" aria-hidden="true">
        <Icon size={24} />
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
