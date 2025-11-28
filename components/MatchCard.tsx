import { motion } from "framer-motion";

type Match = typeof matches[number];

export function MatchCard({ match }: { match: Match }) {
  const maxProb = Math.max(match.homeWin, match.draw, match.awayWin);
  const isHomeWin = match.homeWin === maxProb;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 hover:border-[var(--accent-green)] border transition"
    >
      <p className="text-sm opacity-70 mb-3 text-[var(--accent-orange)]">{match.league} - {match.time}</p>
      <div className="flex justify-between items-center mb-6">
        <div className="text-right">
          <p className={`text-xl font-bold ${isHomeWin ? 'text-[var(--accent-green)]' : ''}`}>{match.home}</p>
          <p className="text-3xl font-black">{match.predicted.split('-')[0]}</p>
        </div>
        <div className="text-center mx-4">
          <p className="text-sm opacity-60">vs</p>
          <p className="text-xs mt-2">xG {match.xG[0].toFixed(1)} – {match.xG[1].toFixed(1)}</p>
        </div>
        <div className="text-left">
          <p className={`text-xl font-bold ${!isHomeWin && match.awayWin === maxProb ? 'text-[var(--accent-green)]' : ''}`}>{match.away}</p>
          <p className="text-3xl font-black">{match.predicted.split('-')[1]}</p>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <span className={isHomeWin ? "text-[var(--accent-green)] font-bold" : ""}>{match.homeWin}%</span>
        <span>{match.draw}%</span>
        <span className={!isHomeWin && match.awayWin === maxProb ? "text-[var(--accent-green)] font-bold" : ""}>{match.awayWin}%</span>
      </div>
    </motion.div>
  );
}
