import React from 'react';
import { Trophy, UserCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export default function Navbar() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy size={24} className="text-yellow-400" />
            <span className="font-bold text-xl">PE Premier</span>
          </Link>
          
          <div className="flex items-center">
            <MobileNav />
            <DesktopNav />
            {currentUser ? (
              <Link
                to="/profile"
                className="ml-4 flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
              >
                <UserCircle size={20} />
                <span className="hidden md:inline">{currentUser.displayName}</span>
              </Link>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="ml-4 flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
              >
                <UserCircle size={20} />
                <span className="hidden md:inline">Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}