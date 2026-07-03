import { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar.js';
import Topbar from './components/layout/Topbar.js';
import DashboardPage from './pages/DashboardPage.js';
import SpaceManagementPage from './pages/SpaceManagementPage.js';
import './styles/dashboard.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const renderPage = () => {
    switch (activePage) {
      case 'space-management':
        return <SpaceManagementPage />;
      case 'dashboard':
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="app-container" data-theme={theme}>
      <Sidebar isOpen={sidebarOpen} />
      <div className={`main-content ${sidebarOpen ? '' : 'collapsed'}`}>
        <Topbar
          activePage={activePage}
          onNavigate={setActivePage}
          onToggleSidebar={() => setSidebarOpen((open) => !open)}
          theme={theme}
          onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        />
        <main className="dashboard">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
