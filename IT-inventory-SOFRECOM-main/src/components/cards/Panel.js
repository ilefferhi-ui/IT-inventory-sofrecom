export default function Panel({ title, children }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h3 className="panel-title">{title}</h3>
      </div>
      <div className="panel-content">
        {children}
      </div>
    </div>
  );
}
