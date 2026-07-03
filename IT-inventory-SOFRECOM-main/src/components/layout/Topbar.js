import { Menu, Search, Bell, Settings, ChevronDown, Sun, Moon } from 'lucide-react';

export default function Topbar({ activePage, onNavigate, onToggleSidebar, theme, onToggleTheme }) {
  const navItems = [
    { label: 'Dashboard', key: 'dashboard' },
    { label: 'Inventaire', key: 'inventory' },
    { label: 'Rapports', key: 'reports' },
    { label: 'Alertes', key: 'alerts' },
    { label: 'Space Management', key: 'space-management' },
  ];

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="menu-toggle" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          <Menu size={20} />
        </button>
      </div>

      <nav className="topbar-nav">
        {navItems.map((item) => (
          <a
            key={item.key}
            href="#!"
            className={`topbar-link ${activePage === item.key ? 'active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(item.key);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="topbar-search">
        <div className="search-bar">
          <Search size={16} />
          <input type="text" placeholder="Rechercher un équipement, un ticket..." />
        </div>
      </div>

      <div className="topbar-right">
        <button
          className="icon-btn theme-toggle"
          onClick={onToggleTheme}
          aria-label="Basculer le thème"
          title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="icon-btn">
          <span style={{ position: 'relative', display: 'flex' }}>
            <Bell size={18} />
            <span className="notification-dot"></span>
          </span>
        </button>
        <button className="icon-btn">
          <Settings size={18} />
        </button>
        <div className="user-menu">
          <img
            src="https://ui-avatars.com/api/?name=Admin&background=5d87ff&color=fff"
            alt="Admin"
            className="user-avatar"
          />
          <span>Admin</span>
          <ChevronDown size={14} className="dropdown-arrow" />
        </div>
      </div>
    </header>
  );
}
