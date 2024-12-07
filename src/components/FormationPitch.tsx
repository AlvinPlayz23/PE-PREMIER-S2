import React from 'react';
import PlayerMarker from './PlayerMarker';
import { PlayerPosition } from '../types/player';

interface FormationPitchProps {
  players: PlayerPosition[];
  teamName: string;
}

export default function FormationPitch({ players, teamName }: FormationPitchProps) {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] bg-gradient-to-b from-green-600 to-green-700 rounded-lg overflow-hidden">
      {/* Field markings */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-24 md:w-32 h-24 md:h-32 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-1/2" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 md:w-64 h-20 md:h-24 border-2 border-white" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 md:w-64 h-20 md:h-24 border-2 border-white" />
      </div>

      {/* Team name */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-800 text-white px-4 py-2 rounded-full text-sm md:text-base">
        {teamName}
      </div>

      {/* Players */}
      {players.map((player) => (
        <PlayerMarker key={player.id} player={player} />
      ))}
    </div>
  );
}