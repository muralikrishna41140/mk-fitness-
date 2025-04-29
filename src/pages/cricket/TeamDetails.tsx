import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTeamDetails } from '@/services/cricketService';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PlayerCard from '@/components/cricket/PlayerCard';

const TeamDetails: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  
  const { data: team, isLoading } = useQuery({
    queryKey: ['teamDetails', teamId],
    queryFn: () => fetchTeamDetails(teamId || ''),
    enabled: !!teamId,
  });

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/cricket">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
          </Button>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fitness-purple"></div>
          </div>
        ) : team ? (
          <>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center p-2">
                <img 
                  src={team.logo} 
                  alt={team.name} 
                  className="w-full h-full object-contain"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150?text=" + team.shortName;
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold">{team.name}</h1>
                  <Badge className="bg-fitness-purple hover:bg-fitness-purple/90">{team.shortName}</Badge>
                </div>
                <p className="text-muted-foreground mt-1">Founded: {team.founded}</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">Home: {team.homeVenue}</Badge>
                  <Badge variant="outline">Titles: {team.titles}</Badge>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Team Squad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {team.players?.map((player) => (
                    <PlayerCard key={player.id} player={player} teamColors={team.colors} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="text-center p-12">
            <p>Team not found</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default TeamDetails;
