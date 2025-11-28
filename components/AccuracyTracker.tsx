import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Aug', units: 25.3 },
  { month: 'Sep', units: 48.7 },
  { month: 'Oct', units: 89.2 },
  { month: 'Nov', units: 127.8 },
];

export function AccuracyTracker() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Accuracy Tracker – YTD Performance</h2>
      <div className="glass rounded-xl p-6">
        <p className="text-center mb-4">+127.8 Units | 68.4% Win Rate | 245 Picks</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="units" stroke="var(--accent-green)" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
