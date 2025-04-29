
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Activity, Award, Heart } from 'lucide-react';
import { toast } from 'sonner';
import { getPlayerStats } from '@/services/cricAPI';

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

interface PlayerStatsCardProps {
  playerId: string;
}

const PlayerStatsCard: React.FC<PlayerStatsCardProps> = ({ playerId }) => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  // Fetch player stats on component mount
  React.useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const data = await getPlayerStats(playerId);
        if (data) {
          setPlayer(data);
        }
      } catch (error) {
        console.error('Error fetching player stats:', error);
        toast.error('Failed to load player stats');
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [playerId]);

  if (loading) {
    return (
      <Card className="hover-card">
        <CardHeader>
          <div className="h-5 w-40 bg-gray-200 rounded animate-pulse"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!player) {
    return (
      <Card className="hover-card">
        <CardContent className="p-6 text-center">
          <p className="text-gray-500">Player not found</p>
        </CardContent>
      </Card>
    );
  }

  const getRoleIcon = () => {
    switch (player.role) {
      case 'Batsman':
        return <Activity className="h-4 w-4" />;
      case 'Bowler':
        return <Award className="h-4 w-4" />;
      case 'All-Rounder':
        return <Heart className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getRoleBadgeColor = () => {
    switch (player.role) {
      case 'Batsman':
        return 'bg-fitness-purple';
      case 'Bowler':
        return 'bg-fitness-orange';
      case 'All-Rounder':
        return 'bg-fitness-blue';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className={`hover-card transition-all ${expanded ? 'transform-gpu -translate-y-1' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{player.name}</CardTitle>
          <Badge className={getRoleBadgeColor()}>
            <span className="flex items-center">
              {getRoleIcon()}
              <span className="ml-1">{player.role}</span>
            </span>
          </Badge>
        </div>
        <p className="text-sm text-gray-500">Team: {player.team}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          {player.battingStats && (
            <div className="bg-gray-50 p-2 rounded">
              <h4 className="font-medium text-sm mb-1">Batting Stats</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Average</p>
                  <p className="font-medium">{player.battingStats.average}</p>
                </div>
                <div>
                  <p className="text-gray-500">Strike Rate</p>
                  <p className="font-medium">{player.battingStats.strikeRate}</p>
                </div>
                <div>
                  <p className="text-gray-500">Highest</p>
                  <p className="font-medium">{player.battingStats.highestScore}</p>
                </div>
              </div>
            </div>
          )}
          
          {player.bowlingStats && (
            <div className="bg-gray-50 p-2 rounded">
              <h4 className="font-medium text-sm mb-1">Bowling Stats</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Economy</p>
                  <p className="font-medium">{player.bowlingStats.economy}</p>
                </div>
                <div>
                  <p className="text-gray-500">Wickets</p>
                  <p className="font-medium">{player.bowlingStats.wickets}</p>
                </div>
                <div>
                  <p className="text-gray-500">Best</p>
                  <p className="font-medium">{player.bowlingStats.bestFigures}</p>
                </div>
              </div>
            </div>
          )}
          
          {expanded && (
            <div className="animate-fade-in space-y-3 mt-2">
              <h4 className="font-medium text-sm">Recommended Training</h4>
              {player.role === 'Batsman' && (
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>High-intensity footwork drills</li>
                  <li>Reaction time training with tennis balls</li>
                  <li>Core stability exercises for better balance</li>
                </ul>
              )}
              {player.role === 'Bowler' && (
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Shoulder stability exercises</li>
                  <li>Sprint interval training</li>
                  <li>Core rotational strength training</li>
                </ul>
              )}
              {player.role === 'All-Rounder' && (
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Split session training (batting/bowling)</li>
                  <li>Full-body compound exercises</li>
                  <li>Extended cardio for match endurance</li>
                </ul>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full text-fitness-purple border-fitness-purple hover:bg-fitness-purple/10"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Training Tips'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlayerStatsCard;
