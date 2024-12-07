import React from 'react';
import { PlayerPosition } from '../types/player';

interface PlayerMarkerProps {
  player: PlayerPosition;
}

export default function PlayerMarker({ player }: PlayerMarkerProps) {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${player.x}%`, top: `${player.y}%` }}
    >
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 md:w-12 md:h-12 bg-red-700 rounded-full border-2 border-white flex items-center justify-center text-white shadow-lg text-xs md:text-sm">
          {player.position}
        </div>
        <span className="mt-1 text-white text-xs md:text-sm font-semibold bg-black bg-opacity-50 px-2 rounded whitespace-nowrap">
          {player.name}
        </span>
      </div>
    </div>
  );
}