import { AlertCircle, AlertTriangle } from 'lucide-react';

export default function AlertsList() {
  const alerts = [
    { id: 1, type: 'critical', title: 'Serveur PROD-DB-01 hors ligne', time: 'Il y a 5 min' },
    { id: 2, type: 'warning', title: 'Utilisation CPU élevée sur WEB-SRV-03', time: 'Il y a 12 min' },
    { id: 3, type: 'critical', title: 'Échec de sauvegarde sur BACKUP-01', time: 'Il y a 23 min' },
    { id: 4, type: 'warning', title: 'Espace disque faible sur FILE-SRV-02', time: 'Il y a 1h' },
    { id: 5, type: 'warning', title: 'Mise à jour disponible pour 12 serveurs', time: 'Il y a 2h' },
    { id: 6, type: 'critical', title: 'Connexion réseau instable - Segment 3', time: 'Il y a 3h' },
    { id: 7, type: 'warning', title: 'Certificat SSL expire dans 7 jours', time: 'Il y a 4h' }
  ];

  return (
    <div className="alerts-list">
      {alerts.map(alert => (
        <div key={alert.id} className={`alert-item alert-${alert.type}`}>
          <div className={`alert-icon alert-icon-${alert.type}`}>
            {alert.type === 'critical' ? <AlertCircle size={18} /> : <AlertTriangle size={18} />}
          </div>
          <div className="alert-content">
            <div className="alert-title">{alert.title}</div>
          </div>
          <div className="alert-time">{alert.time}</div>
        </div>
      ))}
    </div>
  );
}
