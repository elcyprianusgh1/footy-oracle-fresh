import { motion } from 'framer-motion'

export function MatchCard({ match }: { match: any }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">{match.league}</span>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{match.time}</span>
      </div>
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="text-right"><p className="font-bold text-lg">{match.home}</p></div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">
            {match.prediction} <span className="text-sm text-gray-600">({match.confidence}%)</span>
          </p>
        </div>
        <div className="text-left"><p className="font-bold text-lg">{match.away}</p></div>
      </div>
    </motion.div>
  )
}
