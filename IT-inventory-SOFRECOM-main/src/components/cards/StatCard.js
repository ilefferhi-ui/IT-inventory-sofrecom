export default function StatCard({ title, value, variant = 'default', subtitle }) {
  const getVariantClass = () => {
    switch(variant) {
      case 'critical': return 'stat-critical';
      case 'success': return 'stat-success';
      default: return 'stat-default';
    }
  };

  return (
    <div className={`stat-card ${getVariantClass()}`}>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      {subtitle && <div className="stat-subtitle">{subtitle}</div>}
    </div>
  );
}
