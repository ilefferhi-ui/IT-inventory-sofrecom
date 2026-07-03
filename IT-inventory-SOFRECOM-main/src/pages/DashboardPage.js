import StatCard from '../components/cards/StatCard';
import Panel from '../components/cards/Panel';
import CPUChart from '../components/charts/CPUChart';
import DonutChart from '../components/charts/DonutChart';
import NetworkStatus from '../components/charts/NetworkStatus';
import AlertsList from '../components/alerts/AlertsList';

export default function DashboardPage() {
  return (
    <>
      <header className="dashboard-header">
        <div className="header-left">
          <p className="header-subtitle">
            Actualisé il y a <span className="highlight">12s</span> • 
            <span className="highlight"> 184 équipements surveillés</span>
          </p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">🔄 Actualiser</button>
          <button className="btn-primary">+ Ajouter équipement</button>
        </div>
      </header>

      <div className="stats-grid">
        <StatCard 
          title="TOTAL ÉQUIPEMENTS" 
          value="184" 
          variant="default"
          subtitle="+3 cette semaine"
        />
        <StatCard 
          title="EN LIGNE" 
          value="168" 
          variant="success"
          subtitle="91.3% disponibilité"
        />
        <StatCard 
          title="ALERTES ACTIVES" 
          value="7" 
          variant="critical"
          subtitle="+2 depuis hier"
        />
        <StatCard 
          title="LICENCES EXPIRÉES" 
          value="3" 
          variant="critical"
          subtitle="⚠️ Action requise"
        />
      </div>

      <div className="panels-row">
        <Panel title="📊 Utilisation CPU & RAM — Serveurs (24h)">
          <CPUChart />
        </Panel>
        <Panel title="📈 Répartition par catégorie">
          <DonutChart />
        </Panel>
      </div>

      <div className="panels-row-3">
        <Panel title="🌐 Statuts réseau">
          <NetworkStatus />
        </Panel>
        <Panel title="⚠️ Alertes récentes (7)">
          <AlertsList />
        </Panel>
        <Panel title="⚡ Ressources critiques">
          <div style={{color: '#94a3b8', padding: '40px', textAlign: 'center', fontSize: '14px'}}>
            Contenu à venir...
          </div>
        </Panel>
      </div>
    </>
  );
}
