import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { time: '00:00', cpu: 35, ram: 45 },
  { time: '02:00', cpu: 38, ram: 48 },
  { time: '04:00', cpu: 42, ram: 52 },
  { time: '06:00', cpu: 48, ram: 55 },
  { time: '08:00', cpu: 55, ram: 58 },
  { time: '10:00', cpu: 62, ram: 62 },
  { time: '12:00', cpu: 68, ram: 65 },
  { time: '14:00', cpu: 72, ram: 68 },
  { time: '16:00', cpu: 75, ram: 70 },
  { time: '18:00', cpu: 78, ram: 72 },
  { time: '20:00', cpu: 82, ram: 75 },
  { time: '22:00', cpu: 85, ram: 78 },
  { time: '24:00', cpu: 80, ram: 75 }
];

export default function CPUChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" opacity={0.6} />
        <XAxis 
          dataKey="time" 
          stroke="var(--border-color)" 
          style={{ fontSize: 12 }}
          tick={{ fill: 'var(--text-muted)' }}
        />
        <YAxis 
          stroke="var(--border-color)" 
          style={{ fontSize: 12 }}
          tick={{ fill: 'var(--text-muted)' }}
        />
        <Tooltip 
          contentStyle={{ 
            background: 'var(--bg-elevated)', 
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            color: 'var(--text-primary)'
          }}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="cpu" 
          stroke="#13deb9" 
          strokeWidth={3}
          dot={false}
          name="CPU (%)"
        />
        <Line 
          type="monotone" 
          dataKey="ram" 
          stroke="#5d87ff" 
          strokeWidth={3}
          dot={false}
          name="RAM (%)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
