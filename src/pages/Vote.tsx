import React, { useState, useEffect } from 'react';
import { Vote as VoteIcon, Users, ChevronRight, Clock } from 'lucide-react';
import { getVotes, recordVote, hasUserVoted, setUserVoted, getTimeUntilReset } from '../utils/voteUtils';

export default function Vote() {
  const [votes, setVotes] = useState({ abhiVotes: 0, neelVotes: 0 });
  const [hasVoted, setHasVoted] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Initialize votes and check if user has voted
    const currentVotes = getVotes();
    setVotes({ abhiVotes: currentVotes.abhiVotes, neelVotes: currentVotes.neelVotes });
    setHasVoted(hasUserVoted());

    // Set up timers
    const updateTimeLeft = () => {
      const msLeft = getTimeUntilReset();
      const hoursLeft = Math.floor(msLeft / (1000 * 60 * 60));
      const minutesLeft = Math.floor((msLeft % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft(`${hoursLeft}h ${minutesLeft}m`);
    };

    updateTimeLeft();
    const timeInterval = setInterval(updateTimeLeft, 60000); // Update every minute

    // Check for vote reset every minute
    const resetInterval = setInterval(() => {
      const currentVotes = getVotes();
      setVotes({ abhiVotes: currentVotes.abhiVotes, neelVotes: currentVotes.neelVotes });
    }, 60000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(resetInterval);
    };
  }, []);

  const handleVote = (team: 'abhi' | 'neel') => {
    if (!hasVoted) {
      const newVotes = recordVote(team);
      setVotes({ abhiVotes: newVotes.abhiVotes, neelVotes: newVotes.neelVotes });
      setUserVoted(team);
      setHasVoted(true);
    }
  };

  const totalVotes = votes.abhiVotes + votes.neelVotes;
  const abhiPercentage = totalVotes ? Math.round((votes.abhiVotes / totalVotes) * 100) : 0;
  const neelPercentage = totalVotes ? Math.round((votes.neelVotes / totalVotes) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <VoteIcon className="text-red-600 mr-2" size={24} />
              <h1 className="text-2xl font-bold">Next Match Vote</h1>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-1" />
              <span>Resets in: {timeLeft}</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Who will win the next match?</h2>
              <div className="flex items-center text-gray-600">
                <Users size={16} className="mr-1" />
                <span>{totalVotes} votes</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <button
                  onClick={() => handleVote('abhi')}
                  disabled={hasVoted}
                  className={`w-full p-4 rounded-lg border-2 ${
                    hasVoted
                      ? 'border-gray-200 bg-gray-50'
                      : 'border-red-200 hover:border-red-300 hover:bg-red-50'
                  } transition-colors`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Abhi's Team</span>
                    {!hasVoted && <ChevronRight size={20} className="text-red-500" />}
                  </div>
                </button>
                {hasVoted && (
                  <div
                    className="absolute top-0 left-0 h-full bg-red-100 rounded-lg transition-all duration-1000"
                    style={{ width: `${abhiPercentage}%`, opacity: 0.5 }}
                  />
                )}
                {hasVoted && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium">
                    {abhiPercentage}%
                  </span>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => handleVote('neel')}
                  disabled={hasVoted}
                  className={`w-full p-4 rounded-lg border-2 ${
                    hasVoted
                      ? 'border-gray-200 bg-gray-50'
                      : 'border-red-200 hover:border-red-300 hover:bg-red-50'
                  } transition-colors`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Neel's Team</span>
                    {!hasVoted && <ChevronRight size={20} className="text-red-500" />}
                  </div>
                </button>
                {hasVoted && (
                  <div
                    className="absolute top-0 left-0 h-full bg-red-100 rounded-lg transition-all duration-1000"
                    style={{ width: `${neelPercentage}%`, opacity: 0.5 }}
                  />
                )}
                {hasVoted && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium">
                    {neelPercentage}%
                  </span>
                )}
              </div>
            </div>
          </div>

          {hasVoted && (
            <div className="text-center text-gray-600">
              Thanks for voting! The results will be updated in real-time.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}