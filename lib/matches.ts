export const matches = [
  // Premier League (10 matches)
  { league: 'Premier League', home: 'Brentford', away: 'Burnley', homeWin: 55, draw: 25, awayWin: 20, predicted: '2-1', xG: [1.8, 1.2], time: 'Nov 29, 15:00' },
  { league: 'Premier League', home: 'Man City', away: 'Leeds', homeWin: 70, draw: 15, awayWin: 15, predicted: '3-0', xG: [2.5, 0.8], time: 'Nov 29, 17:30' },
  { league: 'Premier League', home: 'Sunderland', away: 'Bournemouth', homeWin: 40, draw: 30, awayWin: 30, predicted: '1-1', xG: [1.3, 1.4], time: 'Nov 29, 15:00' },
  { league: 'Premier League', home: 'Everton', away: 'Newcastle', homeWin: 35, draw: 28, awayWin: 37, predicted: '1-2', xG: [1.2, 1.6], time: 'Nov 29, 17:30' },
  { league: 'Premier League', home: 'Spurs', away: 'Fulham', homeWin: 60, draw: 22, awayWin: 18, predicted: '2-0', xG: [2.0, 1.0], time: 'Nov 29, 20:00' },
  { league: 'Premier League', home: 'Crystal Palace', away: 'Man Utd', homeWin: 25, draw: 25, awayWin: 50, predicted: '0-2', xG: [0.9, 1.9], time: 'Nov 30, 12:00' },
  { league: 'Premier League', home: 'Aston Villa', away: 'Wolves', homeWin: 52, draw: 26, awayWin: 22, predicted: '2-1', xG: [1.7, 1.1], time: 'Nov 30, 14:05' },
  { league: 'Premier League', home: 'Nott\'m Forest', away: 'Brighton', homeWin: 38, draw: 29, awayWin: 33, predicted: '1-2', xG: [1.4, 1.5], time: 'Nov 30, 14:05' },
  { league: 'Premier League', home: 'West Ham', away: 'Liverpool', homeWin: 20, draw: 24, awayWin: 56, predicted: '0-3', xG: [0.8, 2.2], time: 'Nov 30, 14:05' },
  { league: 'Premier League', home: 'Chelsea', away: 'Arsenal', homeWin: 45, draw: 27, awayWin: 28, predicted: '1-1', xG: [1.6, 1.6], time: 'Nov 30, 16:30' },

  // La Liga (10 matches)
  { league: 'La Liga', home: 'Real Madrid', away: 'Valencia', homeWin: 65, draw: 20, awayWin: 15, predicted: '3-1', xG: [2.4, 1.0], time: 'Nov 29, 21:00' },
  { league: 'La Liga', home: 'Barcelona', away: 'Atletico Madrid', homeWin: 48, draw: 28, awayWin: 24, predicted: '2-1', xG: [1.9, 1.3], time: 'Nov 30, 16:15' },
  { league: 'La Liga', home: 'Sevilla', away: 'Real Sociedad', homeWin: 42, draw: 30, awayWin: 28, predicted: '1-1', xG: [1.4, 1.4], time: 'Nov 29, 15:00' },
  { league: 'La Liga', home: 'Athletic Bilbao', away: 'Osasuna', homeWin: 55, draw: 25, awayWin: 20, predicted: '2-0', xG: [1.8, 1.0], time: 'Nov 29, 20:00' },
  { league: 'La Liga', home: 'Villarreal', away: 'Getafe', homeWin: 50, draw: 27, awayWin: 23, predicted: '2-1', xG: [1.7, 1.2], time: 'Nov 30, 13:00' },
  { league: 'La Liga', home: 'Real Betis', away: 'Mallorca', homeWin: 52, draw: 26, awayWin: 22, predicted: '1-0', xG: [1.5, 1.1], time: 'Nov 30, 18:30' },
  { league: 'La Liga', home: 'Alaves', away: 'Espanyol', homeWin: 47, draw: 29, awayWin: 24, predicted: '2-1', xG: [1.6, 1.3], time: 'Dec 1, 14:00' },
  { league: 'La Liga', home: 'Celta Vigo', away: 'Las Palmas', homeWin: 60, draw: 22, awayWin: 18, predicted: '3-1', xG: [2.1, 1.0], time: 'Nov 30, 20:00' },
  { league: 'La Liga', home: 'Girona', away: 'Rayo Vallecano', homeWin: 58, draw: 24, awayWin: 18, predicted: '2-0', xG: [1.9, 0.9], time: 'Dec 1, 16:15' },
  { league: 'La Liga', home: 'Granada', away: 'Valladolid', homeWin: 40, draw: 30, awayWin: 30, predicted: '1-1', xG: [1.3, 1.3], time: 'Dec 1, 21:00' },

  // Bundesliga (10 matches)
  { league: 'Bundesliga', home: 'Bayern Munich', away: 'Dortmund', homeWin: 62, draw: 23, awayWin: 15, predicted: '3-1', xG: [2.3, 1.1], time: 'Nov 29, 18:30' },
  { league: 'Bundesliga', home: 'Bayer Leverkusen', away: 'RB Leipzig', homeWin: 50, draw: 28, awayWin: 22, predicted: '2-2', xG: [1.8, 1.7], time: 'Nov 30, 15:30' },
  { league: 'Bundesliga', home: 'Stuttgart', away: 'Eintracht Frankfurt', homeWin: 45, draw: 27, awayWin: 28, predicted: '1-1', xG: [1.5, 1.5], time: 'Nov 29, 15:30' },
  { league: 'Bundesliga', home: 'Union Berlin', away: 'Wolfsburg', homeWin: 48, draw: 26, awayWin: 26, predicted: '2-1', xG: [1.6, 1.2], time: 'Nov 29, 20:30' },
  { league: 'Bundesliga', home: 'Freiburg', away: 'Augsburg', homeWin: 55, draw: 25, awayWin: 20, predicted: '2-0', xG: [1.8, 1.0], time: 'Nov 30, 15:30' },
  { league: 'Bundesliga', home: 'Mainz', away: 'Heidenheim', homeWin: 52, draw: 26, awayWin: 22, predicted: '1-0', xG: [1.4, 1.1], time: 'Nov 30, 18:30' },
  { league: 'Bundesliga', home: 'Mönchengladbach', away: 'Hoffenheim', homeWin: 47, draw: 29, awayWin: 24, predicted: '2-2', xG: [1.7, 1.6], time: 'Dec 1, 15:30' },
  { league: 'Bundesliga', home: 'Bochum', away: 'St. Pauli', homeWin: 60, draw: 22, awayWin: 18, predicted: '3-1', xG: [2.0, 1.0], time: 'Nov 30, 15:30' },
  { league: 'Bundesliga', home: 'Werder Bremen', away: 'Holstein Kiel', homeWin: 58, draw: 24, awayWin: 18, predicted: '2-0', xG: [1.9, 0.9], time: 'Dec 1, 18:30' },
  { league: 'Bundesliga', home: 'Köln', away: 'Darmstadt', homeWin: 40, draw: 30, awayWin: 30, predicted: '1-1', xG: [1.3, 1.3], time: 'Dec 1, 20:30' },

  // Serie A (10 matches)
  { league: 'Serie A', home: 'Inter Milan', away: 'Juventus', homeWin: 55, draw: 25, awayWin: 20, predicted: '2-1', xG: [1.9, 1.3], time: 'Nov 29, 20:45' },
  { league: 'Serie A', home: 'AC Milan', away: 'Napoli', homeWin: 48, draw: 28, awayWin: 24, predicted: '1-1', xG: [1.6, 1.6], time: 'Nov 30, 18:00' },
  { league: 'Serie A', home: 'Roma', away: 'Lazio', homeWin: 45, draw: 27, awayWin: 28, predicted: '1-2', xG: [1.5, 1.7], time: 'Nov 29, 18:00' },
  { league: 'Serie A', home: 'Atalanta', away: 'Fiorentina', homeWin: 52, draw: 26, awayWin: 22, predicted: '2-1', xG: [1.8, 1.2], time: 'Nov 30, 20:45' },
  { league: 'Serie A', home: 'Bologna', away: 'Genoa', homeWin: 50, draw: 27, awayWin: 23, predicted: '1-0', xG: [1.4, 1.1], time: 'Nov 29, 15:00' },
  { league: 'Serie A', home: 'Torino', away: 'Udinese', homeWin: 47, draw: 29, awayWin: 24, predicted: '2-1', xG: [1.6, 1.3], time: 'Nov 30, 15:00' },
  { league: 'Serie A', home: 'Verona', away: 'Parma', homeWin: 40, draw: 30, awayWin: 30, predicted: '1-1', xG: [1.3, 1.3], time: 'Dec 1, 12:30' },
  { league: 'Serie A', home: 'Lecce', away: 'Monza', homeWin: 55, draw: 25, awayWin: 20, predicted: '2-0', xG: [1.8, 1.0], time: 'Nov 30, 15:00' },
  { league: 'Serie A', home: 'Como', away: 'Venezia', homeWin: 58, draw: 24, awayWin: 18, predicted: '3-1', xG: [2.0, 1.0], time: 'Dec 1, 15:00' },
  { league: 'Serie A', home: 'Empoli', away: 'Cagliari', homeWin: 42, draw: 28, awayWin: 30, predicted: '1-2', xG: [1.4, 1.5], time: 'Dec 1, 18:00' },

  // Ligue 1 (10 matches)
  { league: 'Ligue 1', home: 'PSG', away: 'Marseille', homeWin: 68, draw: 18, awayWin: 14, predicted: '3-0', xG: [2.6, 0.9], time: 'Nov 29, 21:00' },
  { league: 'Ligue 1', home: 'Monaco', away: 'Lyon', homeWin: 50, draw: 27, awayWin: 23, predicted: '2-1', xG: [1.7, 1.2], time: 'Nov 30, 17:00' },
  { league: 'Ligue 1', home: 'Nice', away: 'Lille', homeWin: 45, draw: 28, awayWin: 27, predicted: '1-1', xG: [1.5, 1.5], time: 'Nov 29, 20:00' },
  { league: 'Ligue 1', home: 'Lens', away: 'Rennes', homeWin: 48, draw: 26, awayWin: 26, predicted: '2-1', xG: [1.6, 1.2], time: 'Nov 30, 15:00' },
  { league: 'Ligue 1', home: 'Brest', away: 'Reims', homeWin: 52, draw: 25, awayWin: 23, predicted: '1-0', xG: [1.4, 1.1], time: 'Nov 29, 15:00' },
  { league: 'Ligue 1', home: 'Montpellier', away: 'Toulouse', homeWin: 40, draw: 30, awayWin: 30, predicted: '1-1', xG: [1.3, 1.3], time: 'Nov 30, 20:00' },
  { league: 'Ligue 1', home: 'Strasbourg', away: 'Nantes', homeWin: 55, draw: 24, awayWin: 21, predicted: '2-0', xG: [1.8, 1.0], time: 'Dec 1, 15:00' },
  { league: 'Ligue 1', home: 'Angers', away: 'Auxerre', homeWin: 47, draw: 29, awayWin: 24, predicted: '2-2', xG: [1.6, 1.6], time: 'Nov 30, 13:00' },
  { league: 'Ligue 1', home: 'Saint-Étienne', away: 'Le Havre', homeWin: 60, draw: 22, awayWin: 18, predicted: '3-1', xG: [2.1, 1.0], time: 'Dec 1, 17:00' },
  { league: 'Ligue 1', home: 'Lorient', away: 'Guingamp', homeWin: 42, draw: 28, awayWin: 30, predicted: '1-2', xG: [1.4, 1.5], time: 'Dec 1, 20:00' }
] as const;
