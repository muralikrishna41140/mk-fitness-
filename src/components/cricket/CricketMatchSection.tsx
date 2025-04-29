
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

// Mock data structure - in a real app, this would come from the Cric API
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
];

const CricketMatchSection: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate API fetch
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        // In a real app, we would fetch from the Cricket API
        // const response = await fetch('...', {
        //   headers: {
        //     'Authorization': `Bearer ${CRICKET_API_KEY}`
        //   }
        // });
        // const data = await response.json();
        
        // Using mock data for now
        setTimeout(() => {
          setMatches(MOCK_MATCHES);
          setLoading(false);
        }, 1000);
        
      } catch (error) {
        console.error('Error fetching matches:', error);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-8 w-full" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {matches.map((match) => (
        <Card key={match.id} className="overflow-hidden hover-card">
          <CardHeader className="bg-gradient-to-r from-fitness-purple/20 to-fitness-blue/20">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">
                {match.teams.team1Flag} {match.teams.team1} vs {match.teams.team2Flag} {match.teams.team2}
              </CardTitle>
              <Badge 
                className={`
                  ${match.status === 'Live' ? 'bg-red-500' : 
                    match.status === 'Upcoming' ? 'bg-yellow-500' : 
                    'bg-green-500'}
                `}
              >
                {match.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Match Type:</span> {match.matchType}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Venue:</span> {match.venue}
              </p>
              {match.score && (
                <div className="mt-4 space-y-1">
                  <p className="text-sm">
                    <span className="font-bold">{match.teams.team1}:</span> {match.score.team1}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">{match.teams.team2}:</span> {match.score.team2}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CricketMatchSection;
