import React, { useState, useMemo } from 'react';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import PlayerCard from '../components/PlayerCard';

const MOCK_PLAYERS = [
  {
    id: 1,
    name: 'Abhinav Sandeep',
    position: 'LW, ST, CAM',
    rating: 91,
    price: '0.890',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/pZyhWQL.jpg',
    description: 'Explosive forward with excellent dribbling skills and clinical finishing ability.'
  },
  {
    id: 2,
    name: 'Jade George',
    position: 'ST, LW, RW',
    rating: 90,
    price: '0.860',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/v60uck9.jpg',
    description: 'Versatile striker with exceptional pace and natural goal-scoring instinct.'
  },
  {
    id: 3,
    name: 'Jonathan Sijo',
    position: 'LW, RW, CF',
    rating: 89,
    price: '0.795',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/Lj1ybe9.jpg',
    description: 'Dynamic winger with incredible speed and precise crossing ability.'
  },
  {
    id: 4,
    name: 'Reuben',
    position: 'ST, RW, CF',
    rating: 89,
    price: '0.820',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/0knKEXN.jpg',
    description: 'Clinical finisher with excellent positioning and aerial ability.'
  },
  {
    id: 5,
    name: 'Festy',
    position: 'RW, CM',
    rating: 89,
    price: '0.700',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/w3rnU3Q.jpg',
    description: 'Technical midfielder with great vision and passing range.'
  },
  {
    id: 6,
    name: 'Mebin',
    position: 'CM, CF',
    rating: 88,
    price: '0.690',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/GtA4dHF.jpg',
    description: 'Box-to-box midfielder with excellent shooting ability from range.'
  },
  {
    id: 7,
    name: 'Joshua Iype',
    position: 'CM, CF',
    rating: 88,
    price: '0.690',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/1Zr2aZg.jpg',
    description: 'Creative playmaker with exceptional ball control and vision.'
  },
  {
    id: 8,
    name: 'Navaneeth',
    position: 'CB, CDM, GK',
    rating: 88,
    price: '0.690',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/fGIkEjV.jpg',
    description: 'Versatile defender with excellent positioning and leadership qualities.'
  },
  {
    id: 9,
    name: 'Alvin',
    position: 'CAM, LW',
    rating: 88,
    price: '0.620',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/8pQpuRv.jpg',
    description: 'Skillful attacking midfielder known for creating chances and key passes.'
  },
  {
    id: 10,
    name: 'Hashly Akash',
    position: 'CM, CAM',
    rating: 88,
    price: '0.625',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/ssrhMnO.jpg',
    description: 'Technical midfielder with excellent ball control and passing ability.'
  },
  {
    id: 11,
    name: 'Joshua Jekku',
    position: 'CM, CAM',
    rating: 87,
    price: '0.615',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/HQtIjQd.png',
    description: 'Creative midfielder with exceptional dribbling skills and vision.'
  },
  {
    id: 12,
    name: 'Emmanuel',
    position: 'CB, CM',
    rating: 87,
    price: '0.635',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/XLkvha2.png',
    description: 'Strong defender with excellent tackling ability and aerial presence.'
  },
  {
    id: 13,
    name: 'Cedric Bastin',
    position: 'RB, CDM',
    rating: 87,
    price: '0.630',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/t0xyzxt.png',
    description: 'Versatile defender with great speed and crossing ability.'
  },
  {
    id: 14,
    name: 'Ethen',
    position: 'CB, GK',
    rating: 87,
    price: '0.605',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/wPEn9aM.png',
    description: 'Reliable defender with excellent positioning and shot-stopping ability.'
  },
  {
    id: 15,
    name: 'Lishanth .G',
    position: 'RW, CDM, CB',
    rating: 87,
    price: '0.625',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/xg6uv8L.jpg',
    description: 'Versatile player with excellent tactical awareness and work rate.'
  },
  {
    id: 16,
    name: 'Kevin Ram',
    position: 'CB, GK, CDM',
    rating: 86,
    price: '0.600',
    team: "Neel's Team",
    imageUrl: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&auto=format&fit=crop',
    description: 'Solid defender with great reflexes and distribution skills.'
  },
  {
    id: 17,
    name: 'Neel Francis',
    position: 'RW, GK',
    rating: 87,
    price: '0.605',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/EhcBKKx.jpg',
    description: 'Captain of Neels Team.'
  }
];

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
                    sortBy === 'price' ? 'bg-green-100 text-green-800' : 'bg-gray-100'
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
                    sortBy === 'rating' ? 'bg-green-100 text-green-800' : 'bg-gray-100'
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