import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Oct', acc: 68 }, { month: 'Nov', acc: 72 }, { month: 'Dec', acc: 76 },
  { month: 'Jan', acc: 79 }, { month: 'Feb', acc: 82 }, { month: 'Mar', acc: 86 },
]

export function AccuracyTracker() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-6 text-center">Accuracy This Season</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Line type="monotone" dataKey="acc" stroke="#10b981" strokeWidth={5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center text-5xl font-black text-green-600 mt-6">86%</p>
    </div>
  )
}
