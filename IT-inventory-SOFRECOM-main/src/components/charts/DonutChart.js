import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Serveurs', value: 24, color: '#5d87ff' },
  { name: 'Postes de travail', value: 87, color: '#13deb9' },
  { name: 'Réseau', value: 12, color: '#7c4dff' },
  { name: 'Imprimantes', value: 18, color: '#ffae1f' },
  { name: 'Mobiles', value: 33, color: '#fa896b' },
  { name: 'Licences', value: 10, color: '#49beff' }
];

export default function DonutChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            background: 'var(--bg-elevated)', 
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            color: 'var(--text-primary)'
          }}
        />
        <Legend 
          verticalAlign="bottom" 
          height={36}
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
