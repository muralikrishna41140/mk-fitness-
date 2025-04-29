
// Cric API service for cricket match and stats data
// Note: In a production app, API keys should be stored in environment variables or 
// managed through Supabase Edge Functions

const CRIC_API_KEY = "AIzaSyAqCv5YgFxsuTXI4GmupUUV1w_EfBkkmI4";

interface Match {
  id: string;
  teams: {
    team1: string;
    team2: string;
    team1Flag?: string;
    team2Flag?: string;
  };
  status: string;
  score?: {
    team1: string;
    team2: string;
  };
  venue: string;
  matchType: string;
}

interface Player {
  id: string;
  name: string;
  team: string;
  role: string;
  battingStats?: {
    average: number;
    strikeRate: number;
    highestScore: number;
  };
  bowlingStats?: {
    economy: number;
    wickets: number;
    bestFigures: string;
  };
}

// Mock data - in a real app, these would come from API calls
const MOCK_MATCHES: Match[] = [
  {
    id: "1",
    teams: {
      team1: "India",
      team2: "Australia",
      team1Flag: "🇮🇳",
      team2Flag: "🇦🇺",
    },
    status: "Live",
    score: {
      team1: "256/4 (43.2)",
      team2: "-",
    },
    venue: "Melbourne Cricket Ground",
    matchType: "ODI",
  },
  {
    id: "2",
    teams: {
      team1: "England",
      team2: "South Africa",
      team1Flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      team2Flag: "🇿🇦",
    },
    status: "Upcoming",
    venue: "Lord's, London",
    matchType: "Test",
  },
  {
    id: "3",
    teams: {
      team1: "Pakistan",
      team2: "New Zealand",
      team1Flag: "🇵🇰",
      team2Flag: "🇳🇿",
    },
    status: "Completed",
    score: {
      team1: "187/10 (45.3)",
      team2: "188/5 (43.1)",
    },
    venue: "Gaddafi Stadium, Lahore",
    matchType: "T20",
  },
  {
    id: "4",
    teams: {
      team1: "West Indies",
      team2: "Sri Lanka",
      team1Flag: "🏝️",
      team2Flag: "🇱🇰",
    },
    status: "Upcoming",
    venue: "Kensington Oval, Barbados",
    matchType: "T20",
  },
];

const MOCK_PLAYERS: Player[] = [
  {
    id: "1",
    name: "Virat Kohli",
    team: "India",
    role: "Batsman",
    battingStats: {
      average: 53.62,
      strikeRate: 93.17,
      highestScore: 183,
    }
  },
  {
    id: "2",
    name: "Jasprit Bumrah",
    team: "India",
    role: "Bowler",
    bowlingStats: {
      economy: 4.64,
      wickets: 121,
      bestFigures: "6/19",
    }
  },
  {
    id: "3",
    name: "Ben Stokes",
    team: "England",
    role: "All-Rounder",
    battingStats: {
      average: 38.14,
      strikeRate: 95.09,
      highestScore: 102,
    },
    bowlingStats: {
      economy: 5.72,
      wickets: 89,
      bestFigures: "5/61",
    }
  },
  {
    id: "4",
    name: "Pat Cummins",
    team: "Australia",
    role: "Bowler",
    bowlingStats: {
      economy: 4.76,
      wickets: 145,
      bestFigures: "6/23",
    }
  },
];

export async function getLiveMatches(): Promise<Match[]> {
  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Filter live matches
    return MOCK_MATCHES.filter(match => match.status === "Live");
  } catch (error) {
    console.error('Error fetching live matches:', error);
    throw new Error('Failed to fetch live matches');
  }
}

export async function getUpcomingMatches(): Promise<Match[]> {
  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Filter upcoming matches
    return MOCK_MATCHES.filter(match => match.status === "Upcoming");
  } catch (error) {
    console.error('Error fetching upcoming matches:', error);
    throw new Error('Failed to fetch upcoming matches');
  }
}

export async function getRecentMatches(): Promise<Match[]> {
  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Filter completed matches
    return MOCK_MATCHES.filter(match => match.status === "Completed");
  } catch (error) {
    console.error('Error fetching recent matches:', error);
    throw new Error('Failed to fetch recent matches');
  }
}

export async function getAllMatches(): Promise<Match[]> {
  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 700));
    
    return MOCK_MATCHES;
  } catch (error) {
    console.error('Error fetching all matches:', error);
    throw new Error('Failed to fetch all matches');
  }
}

export async function getPlayerStats(playerId: string): Promise<Player | undefined> {
  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return MOCK_PLAYERS.find(player => player.id === playerId);
  } catch (error) {
    console.error('Error fetching player stats:', error);
    throw new Error('Failed to fetch player stats');
  }
}

export async function getTopPlayers(role?: string): Promise<Player[]> {
  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 900));
    
    if (role) {
      return MOCK_PLAYERS.filter(player => player.role === role);
    }
    
    return MOCK_PLAYERS;
  } catch (error) {
    console.error('Error fetching top players:', error);
    throw new Error('Failed to fetch top players');
  }
}
