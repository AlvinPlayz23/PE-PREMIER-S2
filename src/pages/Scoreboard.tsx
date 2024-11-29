import React from 'react';
import { Calendar, Star } from 'lucide-react';
import StandingsTable from '../components/StandingsTable';
import PlayerCard from '../components/PlayerCard';

const RECENT_MATCHES = [
  {
    id: 1,
    homeTeam: "Abhi's Team",
    awayTeam: "Neel's Team",
    homeScore: 1,
    awayScore: 1,
    date: '2024-11-27',
    scorers: [
      { name: "Alvin", team: "Neel's Team", goals: 1 },
      { name: "Hashly [Abel.L OG]", team: "Abhi's Team", goals: 1 }
    ]
  },
  {
    id: 1,
    homeTeam: "Abhi's Team",
    awayTeam: "Neel's Team",
    homeScore: 3,
    awayScore: 2,
    date: '2024-11-20',
    scorers: [
      { name: "Abhinav Sandeep", team: "Abhi's Team", goals: 2 },
      { name: "Jonathan Sijo", team: "Abhi's Team", goals: 1 },
      { name: "Jade George", team: "Neel's Team", goals: 1 },
      { name: "Reuben", team: "Neel's Team", goals: 1 }
    ]
  }
];

const STANDINGS = [
  {
    position: 1,
    team: "Abhi's Team",
    played: 11,
    won: 7,
    drawn: 3,
    lost: 1,
    goalsFor: 25,
    goalsAgainst: 12,
    points: 26,
  },
  {
    position: 2,
    team: "Neel's Team",
    played: 11,
    won: 6,
    drawn: 3,
    lost: 2,
    goalsFor: 20,
    goalsAgainst: 15,
    points: 23,
  }
];

const TOP_PERFORMERS = [
  {
    id: 1,
    name: 'Abhinav Sandeep',
    position: 'ST',
    rating: 91,
    price: '0.890',
    team: "Abhi's Team",
    imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop',
    description: '15 goals, 8 assists in 10 matches',
  },
  {
    id: 2,
    name: 'Jade George',
    position: 'ST',
    rating: 90,
    price: '0.860',
    team: "Neel's Team",
    imageUrl: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&auto=format&fit=crop',
    description: '12 goals, 6 assists in 10 matches',
  },
  {
    id: 3,
    name: 'Jonathan Sijo',
    position: 'LW',
    rating: 89,
    price: '0.795',
    team: "Abhi's Team",
    imageUrl: 'https://images.unsplash.com/photo-1577015834140-07f5d4c928c6?w=800&auto=format&fit=crop',
    description: '8 goals, 10 assists in 10 matches',
  }
];

export default function Scoreboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Scoreboard</h1>

        {/* Recent Matches */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar size={20} className="mr-2" />
            Recent Matches
          </h2>
          <div className="space-y-6">
            {RECENT_MATCHES.map(match => (
              <div
                key={match.id}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex-1 text-right">
                    <span className="font-semibold">{match.homeTeam}</span>
                  </div>
                  <div className="mx-4 px-6 py-2 bg-white rounded-lg shadow text-center">
                    <span className="text-xl font-bold">
                      {match.homeScore} - {match.awayScore}
                    </span>
                    <div className="text-sm text-gray-500">
                      {new Date(match.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold">{match.awayTeam}</span>
                  </div>
                </div>
                <div className="bg-white p-3 text-sm text-gray-600">
                  <p className="text-center">
                    <span className="font-medium">Scorers:</span>{' '}
                    {match.scorers.map((scorer, index) => (
                      <span key={scorer.name}>
                        {scorer.name} ({scorer.goals})
                        {index < match.scorers.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* League Standings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">League Standings</h2>
          <StandingsTable standings={STANDINGS} />
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Star size={20} className="mr-2 text-yellow-400" />
            Top Performers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOP_PERFORMERS.map(player => (
              <PlayerCard key={player.id} {...player} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
