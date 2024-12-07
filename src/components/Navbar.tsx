import React from 'react';
import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy size={24} className="text-yellow-400" />
            <span className="font-bold text-xl">PE Premier</span>
          </Link>
          
          <MobileNav />
          <DesktopNav />
        </div>
      </div>
    </nav>
  );
}