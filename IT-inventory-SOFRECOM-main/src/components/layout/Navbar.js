export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="nav-link active">
          <span className="nav-icon">📊</span>
          <span>Dashboard</span>
        </a>
        <a href="#" className="nav-link">
          <span className="nav-icon">📦</span>
          <span>Inventaire</span>
        </a>
        <a href="#" className="nav-link">
          <span className="nav-icon">⚠️</span>
          <span>Alertes</span>
        </a>
        <a href="#" className="nav-link">
          <span className="nav-icon">📄</span>
          <span>Rapports</span>
        </a>
      </div>
      
      <div className="navbar-right">
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">Last 24h — Live</span>
        </div>
      </div>
    </nav>
  );
}

