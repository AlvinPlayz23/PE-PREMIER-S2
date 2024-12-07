import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TransferMarket from './pages/TransferMarket';
import Scoreboard from './pages/Scoreboard';
import Lineup from './pages/Lineup';
import Vote from './pages/Vote';
import Login from './pages/Login';
import Profile from './pages/Profile';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/transfer-market" element={<TransferMarket />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
            <Route path="/lineup" element={<Lineup />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}