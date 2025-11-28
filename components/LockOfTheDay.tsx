import { motion } from "framer-motion";

export function LockOfTheDay() {
  const lock = { home: 'PSG', away: 'Marseille', predicted: '3-0', edge: '+EV 12%' };

  return (
    <motion.section
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      className="max-w-2xl mx-auto px-6 py-12"
    >
      <div className="glass rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-[var(--accent-orange)]">Lock of the Day</h3>
        <p className="text-4xl font-black mb-4">{lock.home} {lock.predicted.split('-')[0]}-{lock.predicted.split('-')[1]} {lock.away}</p>
        <p className="text-lg opacity-80">Edge: {lock.edge} | Confidence: High</p>
        <button className="mt-6 px-8 py-3 bg-[var(--accent-green)] rounded-full font-bold text-black hover:scale-105 transition">
          Bet This Now
        </button>
      </div>
    </motion.section>
  );
}
