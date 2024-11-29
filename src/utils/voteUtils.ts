import fs from 'fs';
import path from 'path';

interface DailyVotes {
  date: string;
  abhiVotes: number;
  neelVotes: number;
}

export function recordVote(team: 'abhi' | 'neel') {
  const today = new Date().toISOString().split('T')[0];
  const votesPath = path.join(process.cwd(), 'src/data/votes.txt');
  
  let content = fs.readFileSync(votesPath, 'utf-8');
  const lines = content.split('\n');
  
  // Check if we already have votes for today
  const todayIndex = lines.findIndex(line => line.includes(today));
  
  if (todayIndex === -1) {
    // Create new entry for today
    const newEntry = `\n${today}:\nAbhi's Team: ${team === 'abhi' ? 1 : 0} votes\nNeel's Team: ${team === 'neel' ? 1 : 0} votes\nTotal Votes: 1\n`;
    content = newEntry + content;
  } else {
    // Update existing entry
    const currentVotes = {
      abhi: parseInt(lines[todayIndex + 1].split(': ')[1]) || 0,
      neel: parseInt(lines[todayIndex + 2].split(': ')[1]) || 0
    };
    
    if (team === 'abhi') currentVotes.abhi++;
    else currentVotes.neel++;
    
    const totalVotes = currentVotes.abhi + currentVotes.neel;
    
    lines[todayIndex + 1] = `Abhi's Team: ${currentVotes.abhi} votes`;
    lines[todayIndex + 2] = `Neel's Team: ${currentVotes.neel} votes`;
    lines[todayIndex + 3] = `Total Votes: ${totalVotes}`;
    
    content = lines.join('\n');
  }
  
  fs.writeFileSync(votesPath, content);
}

export function getVoteHistory(): DailyVotes[] {
  const votesPath = path.join(process.cwd(), 'src/data/votes.txt');
  const content = fs.readFileSync(votesPath, 'utf-8');
  const lines = content.split('\n');
  
  const voteHistory: DailyVotes[] = [];
  let currentEntry: Partial<DailyVotes> = {};
  
  for (const line of lines) {
    if (line.includes(':') && !line.includes('Vote History')) {
      if (Object.keys(currentEntry).length > 0) {
        voteHistory.push(currentEntry as DailyVotes);
      }
      currentEntry = { date: line.replace(':', '') };
    } else if (line.includes("Abhi's Team")) {
      currentEntry.abhiVotes = parseInt(line.split(': ')[1]);
    } else if (line.includes("Neel's Team")) {
      currentEntry.neelVotes = parseInt(line.split(': ')[1]);
    }
  }
  
  if (Object.keys(currentEntry).length > 0) {
    voteHistory.push(currentEntry as DailyVotes);
  }
  
  return voteHistory;
}