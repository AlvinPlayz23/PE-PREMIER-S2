import React from 'react';
import { Trophy, Users, Home, LineChart, Vote } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function DesktopNav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="hidden lg:flex space-x-8">
      <Link
        to="/"
        className={`flex items-center space-x-1 hover:text-yellow-400 transition-colors ${
          isActive('/') ? 'text-yellow-400' : ''
        }`}
      >
        <Home size={18} />
        <span>Home</span>
      </Link>
      
      <Link
        to="/transfer-market"
        className={`flex items-center space-x-1 hover:text-yellow-400 transition-colors ${
          isActive('/transfer-market') ? 'text-yellow-400' : ''
        }`}
      >
        <Users size={18} />
        <span>Transfer Market</span>
      </Link>
      
      <Link
        to="/lineup"
        className={`flex items-center space-x-1 hover:text-yellow-400 transition-colors ${
          isActive('/lineup') ? 'text-yellow-400' : ''
        }`}
      >
        <LineChart size={18} />
        <span>Lineup</span>
      </Link>
      
      <Link
        to="/scoreboard"
        className={`flex items-center space-x-1 hover:text-yellow-400 transition-colors ${
          isActive('/scoreboard') ? 'text-yellow-400' : ''
        }`}
      >
        <Trophy size={18} />
        <span>Scoreboard</span>
      </Link>

      <Link
        to="/vote"
        className={`flex items-center space-x-1 hover:text-yellow-400 transition-colors ${
          isActive('/vote') ? 'text-yellow-400' : ''
        }`}
      >
        <Vote size={18} />
        <span>Vote</span>
      </Link>
    </div>
  );
}