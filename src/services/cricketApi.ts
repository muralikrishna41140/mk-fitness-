import { toast } from 'sonner';

// For a real app, we would use this API key through a backend service
// to keep it secure. For demo purposes, it's included here.
const API_KEY = 'AIzaSyAqCv5YgFxsuTXI4GmupUUV1w_EfBkkmI4';

// In a production environment, this would be an actual Cricket API endpoint
const API_URL = 'https://api.example.com/cricket/v1';

export interface Match {
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

export const getMatches = async (): Promise<Match[]> => {
  try {
    // In a real app, we would call the actual API
    // const response = await fetch(`${API_URL}/matches?key=${API_KEY}`);
    // if (!response.ok) {
    //   throw new Error(`API call failed with status: ${response.status}`);
    // }
    // return await response.json();
    
    // For the demo, we're returning mock data
    return [
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
    ];
  } catch (error) {
    console.error('Error fetching matches:', error);
    toast.error('Failed to fetch cricket matches. Please try again later.');
    return [];
  }
};

export const getCricketWorkout = async (
  playerRole: string,
  fitnessLevel: string,
  duration: string
): Promise<string> => {
  // This is a wrapper function that calls the Gemini API
  // In a real app, we might have specialized cricket training content
  // For now, we'll reuse the existing Gemini API with cricket-specific prompts
  
  try {
    // For demo purposes, we'll return mock data
    return `
    # ${playerRole.toUpperCase()} CRICKET WORKOUT - ${duration} minutes - ${fitnessLevel} level

    ## Warm-up (5 minutes)
    - Light jogging: 2 minutes
    - Dynamic stretches: 3 minutes

    ## Skill-specific exercises (${parseInt(duration) - 10} minutes)
    ${playerRole === 'batsman' ? `
    - Shadow batting practice: 5 minutes
    - Footwork drills: 5 minutes
    - Power hitting with resistance band: 5 minutes
    - Hand-eye coordination drills: 5 minutes
    ` : playerRole === 'bowler' ? `
    - Run-up practice: 5 minutes
    - Bowling action drills: 10 minutes
    - Target practice: 5 minutes
    - Shoulder strengthening exercises: 5 minutes
    ` : playerRole === 'wicketkeeper' ? `
    - Catching drills: 8 minutes
    - Lateral movement exercises: 5 minutes
    - Reflex training: 5 minutes
    - Glove work practice: 2 minutes
    ` : `
    - Combined batting/bowling drills: 10 minutes
    - Fielding exercises: 5 minutes
    - Fitness circuit: 5 minutes
    `}

    ## Cool down (5 minutes)
    - Static stretching
    - Mobility exercises

    ## Tips
    - Focus on proper technique before increasing intensity
    - Stay hydrated throughout the workout
    - Adjust exercises based on available equipment
    `;
  } catch (error) {
    console.error('Error generating cricket workout:', error);
    toast.error('Failed to generate cricket workout. Please try again later.');
    return 'Unable to generate cricket workout at this time. Please try again later.';
  }
};
