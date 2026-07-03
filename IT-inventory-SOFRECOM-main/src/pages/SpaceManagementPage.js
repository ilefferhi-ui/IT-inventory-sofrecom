import StatCard from '../components/cards/StatCard';
import Panel from '../components/cards/Panel';

const floor = {
  name: '4ᵉ étage',
  blocks: Array.from({ length: 4 }, (_, blockIndex) => {
    const blockName = String.fromCharCode(65 + blockIndex);
    return {
      name: `Bloc ${blockName}`,
      tables: Array.from({ length: 6 }, (_, tableIndex) => ({
        name: `Table ${tableIndex + 1}`,
        seats: 4,
        accessPoints: Array.from({ length: 4 }, (_, apIndex) => `4${blockName}${tableIndex + 1}-${apIndex + 1}`),
      })),
    };
  }),
};

const totalTables = floor.blocks.reduce((sum, block) => sum + block.tables.length, 0);
const totalSeats = totalTables * 4;
const totalAccessPoints = totalTables * 4;
const functionalPCs = totalSeats - 4;

export default function SpaceManagementPage() {
  return (
    <>
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Space Management</h1>
          <p className="header-subtitle">
            Plan du 4ᵉ étage avec blocs, tables, chaises et points d’accès.
          </p>
        </div>
      </header>

      <div className="stats-grid">
        <StatCard
          title="Chaises totales"
          value={totalSeats}
          variant="default"
          subtitle="4 chaises par table"
        />
        <StatCard
          title="PCs fonctionnels"
          value={functionalPCs}
          variant="success"
          subtitle="Postes prêts à l’emploi"
        />
        <StatCard
          title="Points d’accès"
          value={totalAccessPoints}
          variant="default"
          subtitle="4 par table"
        />
        <StatCard
          title="Blocs"
          value={4}
          variant="default"
          subtitle="A à D"
        />
      </div>

      <div className="panels-row-3">
        <Panel title={floor.name}>
          <div className="space-floor-grid">
            {floor.blocks.map((block) => (
              <div key={block.name} className="space-block-card">
                <div className="space-block-title">{block.name}</div>
                <div className="space-block-body">
                  {block.tables.map((table) => (
                    <div key={table.name} className="space-table-item">
                      <div className="space-table-name">{table.name}</div>
                      <div className="space-table-meta">4 chaises</div>
                      <div className="space-table-ap">
                        APs: {table.accessPoints.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}
