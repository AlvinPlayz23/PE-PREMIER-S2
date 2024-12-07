interface VoteData {
  abhiVotes: number;
  neelVotes: number;
  lastReset: number;
}

const STORAGE_KEY = 'voteData';
const RESET_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export function getVotes(): VoteData {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (!storedData) {
    return { abhiVotes: 0, neelVotes: 0, lastReset: Date.now() };
  }

  const data: VoteData = JSON.parse(storedData);
  
  // Check if 24 hours have passed since last reset
  if (Date.now() - data.lastReset >= RESET_INTERVAL) {
    const newData = { abhiVotes: 0, neelVotes: 0, lastReset: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    return newData;
  }

  return data;
}

export function recordVote(team: 'abhi' | 'neel') {
  const currentVotes = getVotes();
  
  const newVotes = {
    ...currentVotes,
    abhiVotes: currentVotes.abhiVotes + (team === 'abhi' ? 1 : 0),
    neelVotes: currentVotes.neelVotes + (team === 'neel' ? 1 : 0)
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newVotes));
  return newVotes;
}

export function hasUserVoted(): boolean {
  return localStorage.getItem('userVote') !== null;
}

export function setUserVoted(team: 'abhi' | 'neel') {
  localStorage.setItem('userVote', team);
}

export function getTimeUntilReset(): number {
  const currentVotes = getVotes();
  const timeElapsed = Date.now() - currentVotes.lastReset;
  return Math.max(0, RESET_INTERVAL - timeElapsed);
}