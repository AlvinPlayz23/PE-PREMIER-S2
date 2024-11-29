import React, { useState } from 'react';
import FormationPitch from '../components/FormationPitch';
import { ABHI_TEAM, NEEL_TEAM } from '../data/teams';

export default function Lineup() {
  const [selectedTeam, setSelectedTeam] = useState<"Abhi's Team" | "Neel's Team">("Abhi's Team");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Team Lineup</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedTeam("Abhi's Team")}
              className={`px-4 py-2 rounded-lg ${
                selectedTeam === "Abhi's Team"
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Abhi's Team
            </button>
            <button
              onClick={() => setSelectedTeam("Neel's Team")}
              className={`px-4 py-2 rounded-lg ${
                selectedTeam === "Neel's Team"
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Neel's Team
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <FormationPitch
            players={selectedTeam === "Abhi's Team" ? ABHI_TEAM : NEEL_TEAM}
            teamName={selectedTeam}
          />
        </div>
      </div>
    </div>
  );
}