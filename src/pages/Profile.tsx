import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { MOCK_PLAYERS } from '../data/players';
import { Trophy, Goal, Award, Timer, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  const playerData = MOCK_PLAYERS.find(
    player => player.name.toLowerCase() === currentUser.displayName?.toLowerCase()
  );

  const stats = {
    goals: 15,
    assists: 8,
    gamesPlayed: 10,
    minutesPlayed: 850,
    rating: playerData?.rating || 85,
    team: playerData?.team || "Unassigned",
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-red-600 px-6 py-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">{currentUser.displayName}</h1>
                <p className="text-red-100 mt-1">{stats.team}</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <Goal className="w-8 h-8 text-red-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Goals</p>
                  <p className="text-2xl font-bold">{stats.goals}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <Award className="w-8 h-8 text-red-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Assists</p>
                  <p className="text-2xl font-bold">{stats.assists}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <Trophy className="w-8 h-8 text-red-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Games Played</p>
                  <p className="text-2xl font-bold">{stats.gamesPlayed}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <Timer className="w-8 h-8 text-red-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Minutes Played</p>
                  <p className="text-2xl font-bold">{stats.minutesPlayed}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <Star className="w-8 h-8 text-red-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-2xl font-bold">{stats.rating}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-red-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Team</p>
                  <p className="text-2xl font-bold">{stats.team}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Recent Performance</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Performance chart coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}