import React, { useState, useMemo } from 'react';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import PlayerCard from '../components/PlayerCard';
import { MOCK_PLAYERS } from '../data/players';

const TEAMS = ["All Teams", "Abhi's Team", "Neel's Team"];
const POSITIONS = ["All Positions", "ST", "LW", "RW", "CAM", "CM", "CDM", "CB", "RB", "GK", "CF"];
const RATINGS = ["All Ratings", "90+", "85-89", "80-84", "75-79"];

export default function TransferMarket() {
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [selectedPosition, setSelectedPosition] = useState("All Positions");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [sortBy, setSortBy] = useState<'price' | 'rating' | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filteredAndSortedPlayers = useMemo(() => {
    let filtered = [...MOCK_PLAYERS];

    if (selectedTeam !== "All Teams") {
      filtered = filtered.filter(player => player.team === selectedTeam);
    }
    if (selectedPosition !== "All Positions") {
      filtered = filtered.filter(player => player.position.includes(selectedPosition));
    }
    if (selectedRating !== "All Ratings") {
      const [min, max] = selectedRating === "90+" 
        ? [90, 99]
        : selectedRating.split("-").map(Number);
      filtered = filtered.filter(player => 
        player.rating >= min && (max ? player.rating <= max : true)
      );
    }

    if (sortBy) {
      filtered.sort((a, b) => {
        const aValue = sortBy === 'price' ? parseFloat(a.price) : a.rating;
        const bValue = sortBy === 'price' ? parseFloat(b.price) : b.rating;
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      });
    }

    return filtered;
  }, [selectedTeam, selectedPosition, selectedRating, sortBy, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Transfer Market</h1>
          
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <Filter size={20} className="text-gray-500" />
              
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2"
              >
                {TEAMS.map(team => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>

              <select
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2"
              >
                {POSITIONS.map(pos => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>

              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2"
              >
                {RATINGS.map(rating => (
                  <option key={rating} value={rating}>{rating}</option>
                ))}
              </select>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => {
                    setSortBy('price');
                    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
                  }}
                  className={`px-3 py-2 rounded-md ${
                    sortBy === 'price' ? 'bg-red-100 text-red-800' : 'bg-gray-100'
                  }`}
                >
                  Price {sortBy === 'price' && (
                    sortOrder === 'asc' ? <SortAsc className="inline" size={16} /> : <SortDesc className="inline" size={16} />
                  )}
                </button>
                
                <button
                  onClick={() => {
                    setSortBy('rating');
                    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
                  }}
                  className={`px-3 py-2 rounded-md ${
                    sortBy === 'rating' ? 'bg-red-100 text-red-800' : 'bg-gray-100'
                  }`}
                >
                  Rating {sortBy === 'rating' && (
                    sortOrder === 'asc' ? <SortAsc className="inline" size={16} /> : <SortDesc className="inline" size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedPlayers.map(player => (
              <PlayerCard key={player.id} {...player} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}