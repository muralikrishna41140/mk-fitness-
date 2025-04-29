import { Team, Player } from '@/types/cricket';

const API_KEY = 'AIzaSyAqCv5YgFxsuTXI4GmupUUV1w_EfBkkmI4';

// Mock data for IPL teams
const iplTeams: Team[] = [
  {
    id: 'csk',
    name: 'Chennai Super Kings',
    shortName: 'CSK',
    logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c3773cb-5629-4145-b044-4ef6f9090376/dezxkol-e543058b-d73d-438e-abc6-6b1302b33398.png/v1/fill/w_396,h_396/chennai_super_kings_logo_iplt20_com_by_harshmore7781_dezxkol-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzk2IiwicGF0aCI6IlwvZlwvOWMzNzczY2ItNTYyOS00MTQ1LWIwNDQtNGVmNmY5MDkwMzc2XC9kZXp4a29sLWU1NDMwNThiLWQ3M2QtNDM4ZS1hYmM2LTZiMTMwMmIzMzM5OC5wbmciLCJ3aWR0aCI6Ijw9Mzk2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2Q4xaO6h3mrZ1DXlzChsNisH6YeCnkUSQU2KI7b119g',
    founded: '2008',
    homeVenue: 'M.A. Chidambaram Stadium',
    titles: 5,
    colors: {
      primary: '#FFFF3C',
      secondary: '#0081E5'
    },
    players: [] // Will be populated when fetching team details
  },
  {
    id: 'mi',
    name: 'Mumbai Indians',
    shortName: 'MI',
    logo: 'https://toppng.com/uploads/preview/mumbai-indians-vector-logo-11574257217cpr8xzzm7m.png',
    founded: '2008',
    homeVenue: 'Wankhede Stadium',
    titles: 5,
    colors: {
      primary: '#004BA0',
      secondary: '#0078BC'
    },
    players: []
  },
  {
    id: 'rcb',
    name: 'Royal Challengers Bangalore',
    shortName: 'RCB',
    logo: 'https://d1u68zc0161z8s.cloudfront.net/wp-content/uploads/2022/05/RCB-IPL-Dashboard-l-Radarr.png',
    founded: '2008',
    homeVenue: 'M. Chinnaswamy Stadium',
    titles: 0,
    colors: {
      primary: '#EC1C24',
      secondary: '#000000'
    },
    players: []
  },
  {
    id: 'kkr',
    name: 'Kolkata Knight Riders',
    shortName: 'KKR',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoJ_jgz_orv7Xp-g2FZY-oa7O2RLN7lmMuQ&s',
    founded: '2008',
    homeVenue: 'Eden Gardens',
    titles: 2,
    colors: {
      primary: '#3A225D',
      secondary: '#B3A123'
    },
    players: []
  },
  {
    id: 'rr',
    name: 'Rajasthan Royals',
    shortName: 'RR',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/800px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png',
    founded: '2008',
    homeVenue: 'Sawai Mansingh Stadium',
    titles: 1,
    colors: {
      primary: '#254AA5',
      secondary: '#FF1C51'
    },
    players: []
  },
  {
    id: 'srh',
    name: 'Sunrisers Hyderabad',
    shortName: 'SRH',
    logo: 'https://www.financialexpress.com/wp-content/uploads/2024/11/FotoJet-2024-11-25T145844.182.jpg?w=440',
    founded: '2013',
    homeVenue: 'Rajiv Gandhi Intl. Cricket Stadium',
    titles: 1,
    colors: {
      primary: '#F26522',
      secondary: '#0A0A0A'
    },
    players: []
  },
  {
    id: 'dc',
    name: 'Delhi Capitals',
    shortName: 'DC',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxsWuk8ejkkoDU0DVKlnJCXpaSIQk-5JdCQ&s',
    founded: '2008',
    homeVenue: 'Arun Jaitley Stadium',
    titles: 0,
    colors: {
      primary: '#0078BC',
      secondary: '#B71C1C'
    },
    players: []
  },
  {
    id: 'pbks',
    name: 'Punjab Kings',
    shortName: 'PBKS',
    logo: 'https://i.pinimg.com/736x/0a/81/5e/0a815e9a05d8e90a938ccc42e3e80712.jpg',
    founded: '2008',
    homeVenue: 'IS Bindra Stadium',
    titles: 0,
    colors: {
      primary: '#ED1B24',
      secondary: '#A4A09A'
    },
    players: []
  },
  {
    id: 'lsg',
    name: 'Lucknow Super Giants',
    shortName: 'LSG',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/1200px-Punjab_Kings_Logo.svg.png',
    founded: '2022',
    homeVenue: 'BRSABV Ekana Cricket Stadium',
    titles: 0,
    colors: {
      primary: '#A0E0FF',
      secondary: '#274D85'
    },
    players: []
  },
  {
    id: 'gt',
    name: 'Gujarat Titans',
    shortName: 'GT',
    logo: 'https://www.gujarattitansipl.com/wp-content/uploads/2022/01/gujarat-titans-logo.png',
    founded: '2022',
    homeVenue: 'Narendra Modi Stadium',
    titles: 1,
    colors: {
      primary: '#1B2133',
      secondary: '#0B4973'
    },
    players: []
  }
];

// Mock data for players
const generatePlayers = (teamId: string, teamName: string): Player[] => {
  const roles = ['Batsman', 'Bowler', 'All-rounder', 'Wicket-keeper'];
  const battingStyles = ['Right-handed', 'Left-handed'];
  const bowlingStyles = ['Right-arm fast', 'Left-arm fast', 'Right-arm spin', 'Left-arm spin'];
  const countries = ['India', 'Australia', 'England', 'South Africa', 'New Zealand', 'West Indies'];
  
  return Array.from({ length: 15 }, (_, i) => {
    const roleIndex = Math.floor(Math.random() * roles.length);
    const role = roles[roleIndex];
    const playerId = `${teamId}-player-${i + 1}`;
    const isBatsman = role.includes('Batsman') || role === 'All-rounder' || role === 'Wicket-keeper';
    const isBowler = role.includes('Bowler') || role === 'All-rounder';
    
    return {
      id: playerId,
      name: `Player ${i + 1} ${teamName}`,
      age: Math.floor(Math.random() * 15) + 20,
      nationality: countries[Math.floor(Math.random() * countries.length)],
      teamId,
      teamName,
      role,
      jerseyNumber: Math.floor(Math.random() * 99) + 1,
      imageUrl: `https://via.placeholder.com/300x400.png?text=${playerId}`,
      battingStyle: battingStyles[Math.floor(Math.random() * battingStyles.length)],
      bowlingStyle: isBowler ? bowlingStyles[Math.floor(Math.random() * bowlingStyles.length)] : undefined,
      stats: {
        matches: Math.floor(Math.random() * 100) + 20,
        runs: isBatsman ? Math.floor(Math.random() * 3000) + 500 : Math.floor(Math.random() * 200),
        highestScore: isBatsman ? Math.floor(Math.random() * 100) + 30 : undefined,
        battingAverage: isBatsman ? Math.random() * 40 + 15 : undefined,
        strikeRate: isBatsman ? Math.random() * 50 + 130 : undefined,
        fifties: isBatsman ? Math.floor(Math.random() * 20) : undefined,
        hundreds: isBatsman ? Math.floor(Math.random() * 5) : undefined,
        wickets: isBowler ? Math.floor(Math.random() * 100) + 10 : undefined,
        bestBowlingFigures: isBowler ? `${Math.floor(Math.random() * 5) + 1}/${Math.floor(Math.random() * 20) + 10}` : undefined,
        bowlingAverage: isBowler ? Math.random() * 20 + 15 : undefined,
        economy: isBowler ? Math.random() * 3 + 6 : undefined,
        bowlingStrikeRate: isBowler ? Math.random() * 10 + 20 : undefined,
        fiveWickets: isBowler ? Math.floor(Math.random() * 3) : undefined,
        catches: Math.floor(Math.random() * 30),
        stumpings: role === 'Wicket-keeper' ? Math.floor(Math.random() * 20) : 0
      },
      battingStats: isBatsman ? Array.from({ length: 7 }, (_, j) => ({
        season: `${2018 + j}`,
        matches: Math.floor(Math.random() * 14) + 1,
        runs: Math.floor(Math.random() * 400) + 50,
        highestScore: Math.floor(Math.random() * 70) + 30,
        average: Math.random() * 40 + 15,
        strikeRate: Math.random() * 50 + 130,
        fifties: Math.floor(Math.random() * 4),
        hundreds: Math.random() > 0.8 ? 1 : 0
      })) : [],
      bowlingStats: isBowler ? Array.from({ length: 7 }, (_, j) => ({
        season: `${2018 + j}`,
        matches: Math.floor(Math.random() * 14) + 1,
        wickets: Math.floor(Math.random() * 15) + 1,
        bestFigures: `${Math.floor(Math.random() * 4) + 1}/${Math.floor(Math.random() * 20) + 10}`,
        average: Math.random() * 20 + 15,
        economy: Math.random() * 3 + 6,
        strikeRate: Math.random() * 10 + 20,
        fiveWickets: Math.random() > 0.9 ? 1 : 0
      })) : []
    };
  });
};

// Fetch all IPL teams
export const fetchIPLTeams = async (): Promise<Team[]> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return iplTeams;
};

// Fetch team details by ID
export const fetchTeamDetails = async (teamId: string): Promise<Team> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const team = iplTeams.find(t => t.id === teamId);
  
  if (!team) {
    throw new Error('Team not found');
  }
  
  // Generate players if not already generated
  if (!team.players || team.players.length === 0) {
    team.players = generatePlayers(team.id, team.name);
  }
  
  return { ...team };
};

// Fetch player details by ID
export const fetchPlayerDetails = async (playerId: string): Promise<Player> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Extract teamId from playerId (format: teamId-player-number)
  const teamId = playerId.split('-')[0];
  
  const team = await fetchTeamDetails(teamId);
  const player = team.players.find(p => p.id === playerId);
  
  if (!player) {
    throw new Error('Player not found');
  }
  
  return { ...player };
};
