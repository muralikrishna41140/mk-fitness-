
// Type definitions for cricket module

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  founded: string;
  homeVenue: string;
  titles: number;
  colors: {
    primary: string;
    secondary: string;
  };
  players: Player[];
}

export interface Player {
  id: string;
  name: string;
  age: number;
  nationality: string;
  teamId: string;
  teamName: string;
  role: string;
  jerseyNumber?: number;
  imageUrl: string;
  battingStyle: string;
  bowlingStyle?: string;
  stats: {
    matches: number;
    runs?: number;
    highestScore?: number;
    battingAverage?: number;
    strikeRate?: number;
    fifties?: number;
    hundreds?: number;
    wickets?: number;
    bestBowlingFigures?: string;
    bowlingAverage?: number;
    economy?: number;
    bowlingStrikeRate?: number;
    fiveWickets?: number;
    catches: number;
    stumpings?: number;
  };
  battingStats?: {
    season: string;
    matches: number;
    runs: number;
    highestScore: number;
    average?: number;
    strikeRate?: number;
    fifties: number;
    hundreds: number;
  }[];
  bowlingStats?: {
    season: string;
    matches: number;
    wickets: number;
    bestFigures: string;
    average?: number;
    economy?: number;
    strikeRate?: number;
    fiveWickets: number;
  }[];
}
