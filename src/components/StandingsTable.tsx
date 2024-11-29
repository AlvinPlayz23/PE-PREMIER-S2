import React from 'react';
import { Trophy } from 'lucide-react';

interface TeamStanding {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

interface StandingsTableProps {
  standings: TeamStanding[];
}

export default function StandingsTable({ standings }: StandingsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Pos</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Team</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">P</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">W</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">D</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">L</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">GF</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">GA</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Pts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {standings.map((team) => (
            <tr
              key={team.team}
              className={`
                ${team.position <= 3 ? 'bg-red-50' : ''}
                hover:bg-gray-50 transition-colors
              `}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {team.position <= 3 && (
                    <Trophy
                      size={16}
                      className={`mr-2 ${
                        team.position === 1
                          ? 'text-yellow-400'
                          : team.position === 2
                          ? 'text-gray-400'
                          : 'text-amber-700'
                      }`}
                    />
                  )}
                  {team.position}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                {team.team}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{team.played}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{team.won}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{team.drawn}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{team.lost}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{team.goalsFor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{team.goalsAgainst}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center font-bold">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}