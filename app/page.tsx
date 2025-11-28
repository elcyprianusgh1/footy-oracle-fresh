import { MatchCard } from '@/components/MatchCard';
import { LockOfTheDay } from '@/components/LockOfTheDay';
import { AccuracyTracker } from '@/components/AccuracyTracker';
import { matches } from '@/lib/matches';

export default function Home() {
  const todaysMatches = matches.filter(m => m.time.startsWith('Nov 29') || m.time.startsWith('Nov 30') || m.time.startsWith('Dec 1'));

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-orange)]">
          FootyOracle
        </h1>
        <p className="text-2xl md:text-4xl font-light mb-8 opacity-90">
          Unlock football's future. Data-driven predictions for Europe's top leagues.
        </p>
        <div className="glass rounded-xl p-4 inline-block">
          <span className="text-lg font-bold text-[var(--accent-green)]">+127.8 Units YTD</span> | <span>68.4% Win Rate</span>
        </div>
      </section>

      {/* Accuracy Tracker */}
      <AccuracyTracker />

      {/* Lock of the Day */}
      <LockOfTheDay />

      {/* Matches Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">This Weekend's Slate ({todaysMatches.length} Matches)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {todaysMatches.map((m, i) => <MatchCard key={i} match={m} />)}
        </div>
      </section>

      {/* Pro CTA */}
      <section className="py-20 text-center">
        <h3 className="text-3xl md:text-5xl font-black mb-6 text-[var(--accent-orange)]">Go Pro – €9/month</h3>
        <p className="text-xl opacity-80 mb-8">Player props • +EV edges • Exclusive bot alerts</p>
        <button className="px-12 py-5 bg-[var(--accent-green)] rounded-full text-xl font-bold hover:scale-105 transition text-black">
          Unlock Now
        </button>
      </section>
    </div>
  );
}
