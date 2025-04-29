
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Eye, Flame } from 'lucide-react';
import { getLiveMatches } from '@/services/cricAPI';
import { toast } from 'sonner';

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

const CricketLiveMatchSection: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);

  // Fetch live matches on component mount
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await getLiveMatches();
        setMatches(data);
      } catch (error) {
        console.error('Error fetching live matches:', error);
        toast.error('Failed to load live matches');
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2].map((i) => (
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

  if (matches.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-gray-500">No live matches at the moment.</p>
          <p className="text-sm text-gray-400 mt-2">Check back later for live cricket action!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {matches.map((match) => (
        <Card 
          key={match.id} 
          className={`overflow-hidden hover-card transition-all ${selectedMatch === match.id ? 'ring-2 ring-fitness-purple' : ''}`}
          onClick={() => setSelectedMatch(match.id === selectedMatch ? null : match.id)}
        >
          <div className="bg-gradient-to-r from-fitness-purple/20 to-fitness-blue/20 py-3 px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {selectedMatch === match.id && <Flame className="h-4 w-4 text-fitness-orange mr-2 animate-pulse" />}
                <CardTitle className="text-lg">
                  {match.teams.team1Flag} {match.teams.team1} vs {match.teams.team2Flag} {match.teams.team2}
                </CardTitle>
              </div>
              <Badge className="bg-red-500">Live</Badge>
            </div>
          </div>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Match Type:</span> {match.matchType}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Venue:</span> {match.venue}
                  </p>
                </div>
                <Button size="sm" variant="outline" className="text-fitness-purple border-fitness-purple hover:bg-fitness-purple/10">
                  <Eye className="h-4 w-4 mr-2" /> Watch
                </Button>
              </div>
              
              {match.score && (
                <div className="mt-4 space-y-1 bg-gray-50 p-3 rounded-md">
                  <div className="flex justify-between font-medium">
                    <span>{match.teams.team1}</span>
                    <span>{match.score.team1}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>{match.teams.team2}</span>
                    <span>{match.score.team2}</span>
                  </div>
                </div>
              )}
              
              {selectedMatch === match.id && (
                <div className="mt-4 animate-fade-in">
                  <h4 className="font-medium text-fitness-purple mb-2">Match-Aware Training Tips:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Focus on your footwork like {match.teams.team1} batsmen today</li>
                    <li>Practice yorker variations similar to {match.teams.team2} bowlers</li>
                    <li>Work on quick singles between wickets - crucial on this ground</li>
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CricketLiveMatchSection;
