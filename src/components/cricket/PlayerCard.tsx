
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Player } from '@/types/cricket';

interface PlayerCardProps {
  player: Player;
  teamColors: {
    primary: string;
    secondary: string;
  };
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, teamColors }) => {
  return (
    <Card className="overflow-hidden hover-card">
      <div 
        className="h-40 relative"
        style={{
          background: `linear-gradient(45deg, ${teamColors.primary || '#9b87f5'}, ${teamColors.secondary || '#0EA5E9'})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <img 
          src={player.imageUrl} 
          alt={player.name} 
          className="h-full w-full object-cover object-top"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/150?text=" + player.name.split(' ')[0];
          }}
        />
        <Badge 
          className="absolute top-2 right-2 bg-white text-black hover:bg-white/90"
        >
          {player.jerseyNumber ? `#${player.jerseyNumber}` : player.role.slice(0, 3).toUpperCase()}
        </Badge>
      </div>
      <CardContent className="pt-3 pb-2">
        <h3 className="font-bold text-sm truncate">{player.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <Badge variant="outline" className="text-xs">{player.role}</Badge>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
          <div>
            <span className="text-muted-foreground">Matches:</span> {player.stats.matches}
          </div>
          {player.role.includes('Batsman') || player.role === 'All-rounder' ? (
            <div>
              <span className="text-muted-foreground">Runs:</span> {player.stats.runs || 0}
            </div>
          ) : (
            <div>
              <span className="text-muted-foreground">Wickets:</span> {player.stats.wickets || 0}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button size="sm" className="w-full bg-fitness-purple hover:bg-fitness-purple/90" asChild>
          <Link to={`/cricket/player/${player.id}`}>View Stats</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlayerCard;
