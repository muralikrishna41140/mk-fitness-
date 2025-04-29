
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Team } from '@/types/cricket';

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <Card className="overflow-hidden hover-card">
      <div 
        className="h-32 flex items-center justify-center relative"
        style={{
          background: `linear-gradient(45deg, ${team.colors.primary || '#9b87f5'}, ${team.colors.secondary || '#0EA5E9'})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 bg-white rounded-full p-2 shadow-md">
          <img 
            src={team.logo} 
            alt={team.name} 
            className="h-16 w-16 object-contain"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/150?text=" + team.shortName;
            }}
          />
        </div>
      </div>
      <CardContent className="pt-4 pb-2">
        <div className="text-center">
          <h3 className="font-bold text-lg">{team.name}</h3>
          <div className="flex items-center justify-center gap-1 mt-1">
            <Badge variant="outline" className="text-xs">{team.shortName}</Badge>
            {team.titles > 0 && (
              <Badge className="bg-fitness-orange text-white hover:bg-fitness-orange/90 flex items-center gap-1">
                <Trophy className="h-3 w-3" />
                {team.titles}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {team.homeVenue}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full bg-fitness-purple hover:bg-fitness-purple/90" asChild>
          <Link to={`/cricket/team/${team.id}`}>View Team</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
