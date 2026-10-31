export default function StatCard({ title, value, icon: Icon, tone, subtitle }) {
  return (
    <article className="stat-card">
      <div className={`stat-icon ${tone}`}><Icon size={19} /></div>
      <div className="stat-copy"><span>{title}</span><strong>৳ {new Intl.NumberFormat('en-BD', { maximumFractionDigits: 2 }).format(value)}</strong><small>{subtitle}</small></div>
    </article>
  );
}
