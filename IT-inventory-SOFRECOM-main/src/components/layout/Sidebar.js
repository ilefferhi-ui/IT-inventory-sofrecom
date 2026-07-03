import {
  Server,
  Monitor,
  Network,
  Printer,
  Smartphone,
  FileText,
  CheckCircle2,
  XCircle,
  PackageX,
  Wrench,
  Warehouse,
  Ticket,
  Ban,
  LogOut,
} from 'lucide-react';

export default function Sidebar({ isOpen = true }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">IT</div>
          <div className="logo-text">IT Inventory</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-group-title">Inventaire</div>
        <a href="#" className="nav-item active">
          <Server size={17} />
          <span>Serveurs</span>
          <span className="nav-count">24</span>
        </a>
        <a href="#" className="nav-item">
          <Monitor size={17} />
          <span>Postes de travail</span>
          <span className="nav-count">87</span>
        </a>
        <a href="#" className="nav-item">
          <Network size={17} />
          <span>Réseau</span>
          <span className="nav-count">12</span>
        </a>
        <a href="#" className="nav-item">
          <Printer size={17} />
          <span>Imprimantes</span>
          <span className="nav-count">18</span>
        </a>
        <a href="#" className="nav-item">
          <Smartphone size={17} />
          <span>Mobiles</span>
          <span className="nav-count">33</span>
        </a>
        <a href="#" className="nav-item">
          <FileText size={17} />
          <span>Licences</span>
          <span className="nav-count">10</span>
        </a>

        <div className="nav-section">
          <div className="nav-section-title">Statuts</div>
          <a href="#" className="nav-item">
            <CheckCircle2 size={17} />
            <span>En ligne</span>
            <span className="nav-count badge">42</span>
          </a>
          <a href="#" className="nav-item">
            <XCircle size={17} />
            <span>Hors service</span>
            <span className="nav-count badge">5</span>
          </a>
          <a href="#" className="nav-item">
            <PackageX size={17} />
            <span>Hors stock</span>
            <span className="nav-count badge">12</span>
          </a>
          <a href="#" className="nav-item">
            <Wrench size={17} />
            <span>En maintenance</span>
            <span className="nav-count badge">8</span>
          </a>
        </div>

        <div className="nav-section">
          <div className="nav-section-title">Management</div>
          <a href="#" className="nav-item">
            <Warehouse size={17} />
            <span>Entrepôt</span>
          </a>
          <a href="#" className="nav-item">
            <Ticket size={17} />
            <span>Tickets SAV</span>
            <span className="nav-count badge">4</span>
          </a>
          <a href="#" className="nav-item">
            <Ban size={17} />
            <span>Fin de vie</span>
            <span className="nav-count">7</span>
          </a>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user-card">
          <img
            src="https://ui-avatars.com/api/?name=Admin&background=5d87ff&color=fff"
            alt="Admin"
          />
          <div className="sidebar-user-info">
            <div className="sidebar-user-name">Admin</div>
            <div className="sidebar-user-role">Administrateur IT</div>
          </div>
          <button className="sidebar-logout-btn" aria-label="Déconnexion" title="Déconnexion">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
