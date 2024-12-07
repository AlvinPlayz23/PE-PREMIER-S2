import React from 'react';
import { Trophy, Users, Target } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to PE PREMIER LEAGUE
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Season 2 is here! Join us in celebrating the beautiful game
            with our school's finest talents.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Trophy className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">League Standings</h3>
            <p className="text-gray-600">
              Track your team's progress and compete for the top spot in our
              competitive league table.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Users className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transfer Market</h3>
            <p className="text-gray-600">
              Build your dream team by trading players in our dynamic transfer
              market system.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Target className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Match Center</h3>
            <p className="text-gray-600">
              Stay updated with live scores, match schedules, and detailed
              statistics.
            </p>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Season 2 Updates</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Season 2 Kickoff</h3>
              <p className="text-gray-600">
                The new season starts next week! Get ready for more exciting matches.
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">Transfer Window Opens</h3>
              <p className="text-gray-600">
                Season 2 transfer window is now open. Start building your dream team!
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold">New Formation System</h3>
              <p className="text-gray-600">
                Check out the new lineup system for creating and managing team formations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}