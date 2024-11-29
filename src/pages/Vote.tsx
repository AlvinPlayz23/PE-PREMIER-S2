import React, { useState, useEffect } from 'react';
import { Vote as VoteIcon, Users, ChevronRight, Calendar } from 'lucide-react';
import { recordVote, getVoteHistory } from '../utils/voteUtils';

interface VoteData {
  abhiVotes: number;
  neelVotes: number;
}

interface DailyVotes {
  date: string;
  abhiVotes: number;
  neelVotes: number;
}

export default function Vote() {
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState<VoteData>({ abhiVotes: 0, neelVotes: 0 });
  const [voteHistory, setVoteHistory] = useState<DailyVotes[]>([]);
  
  useEffect(() => {
    const savedVote = localStorage.getItem('userVote');
    if (savedVote) {
      setHasVoted(true);
    }
    
    try {
      const history = getVoteHistory();
      setVoteHistory(history);
      if (history.length > 0) {
        setVotes({
          abhiVotes: history[0].abhiVotes,
          neelVotes: history[0].neelVotes
        });
      }
    } catch (error) {
      console.error('Error loading vote history:', error);
    }
  }, []);

  const handleVote = (team: 'abhi' | 'neel') => {
    if (!hasVoted) {
      try {
        recordVote(team);
        const newVotes = {
          abhiVotes: votes.abhiVotes + (team === 'abhi' ? 1 : 0),
          neelVotes: votes.neelVotes + (team === 'neel' ? 1 : 0)
        };
        
        setVotes(newVotes);
        setHasVoted(true);
        localStorage.setItem('userVote', team);
        
        // Refresh vote history
        const history = getVoteHistory();
        setVoteHistory(history);
      } catch (error) {
        console.error('Error recording vote:', error);
      }
    }
  };

  const totalVotes = votes.abhiVotes + votes.neelVotes;
  const abhiPercentage = totalVotes ? Math.round((votes.abhiVotes / totalVotes) * 100) : 0;
  const neelPercentage = totalVotes ? Math.round((votes.neelVotes / totalVotes) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <VoteIcon className="text-red-600 mr-2" size={24} />
            <h1 className="text-2xl font-bold">Next Match Vote</h1>
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

        {/* Vote History */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Calendar className="text-red-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold">Vote History</h2>
          </div>
          
          <div className="space-y-4">
            {voteHistory.map((day) => (
              <div key={day.date} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{day.date}</span>
                  <span className="text-gray-600">Total: {day.abhiVotes + day.neelVotes} votes</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-sm">
                    <span className="text-gray-600">Abhi's Team:</span>{' '}
                    <span className="font-medium">{day.abhiVotes} votes</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Neel's Team:</span>{' '}
                    <span className="font-medium">{day.neelVotes} votes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}