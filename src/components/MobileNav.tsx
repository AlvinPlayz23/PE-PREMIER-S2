import React from 'react';
import { Trophy, Users, Home, LineChart, Menu, Vote } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function MobileNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-red-900 shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                isActive('/') ? 'bg-red-700 text-white' : 'text-white'
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            
            <Link
              to="/transfer-market"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                isActive('/transfer-market') ? 'bg-red-700 text-white' : 'text-white'
              }`}
            >
              <Users size={20} />
              <span>Transfer Market</span>
            </Link>
            
            <Link
              to="/lineup"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                isActive('/lineup') ? 'bg-red-700 text-white' : 'text-white'
              }`}
            >
              <LineChart size={20} />
              <span>Lineup</span>
            </Link>
            
            <Link
              to="/scoreboard"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                isActive('/scoreboard') ? 'bg-red-700 text-white' : 'text-white'
              }`}
            >
              <Trophy size={20} />
              <span>Scoreboard</span>
            </Link>

            <Link
              to="/vote"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                isActive('/vote') ? 'bg-red-700 text-white' : 'text-white'
              }`}
            >
              <Vote size={20} />
              <span>Vote</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}