
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPlayerDetails } from '@/services/cricketService';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PlayerOverview from '@/components/cricket/PlayerOverview';
import PlayerBattingStats from '@/components/cricket/PlayerBattingStats';
import PlayerBowlingStats from '@/components/cricket/PlayerBowlingStats';
import PlayerPerformanceGraphs from '@/components/cricket/PlayerPerformanceGraphs';

const PlayerDetails: React.FC = () => {
  const { playerId } = useParams<{ playerId: string }>();
  
  const { data: player, isLoading } = useQuery({
    queryKey: ['playerDetails', playerId],
    queryFn: () => fetchPlayerDetails(playerId || ''),
    enabled: !!playerId,
  });

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to={player ? `/cricket/team/${player.teamId}` : "/cricket"}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to {player ? player.teamName : 'Teams'}
            </Link>
          </Button>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fitness-purple"></div>
          </div>
        ) : player ? (
          <>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-md">
                <img 
                  src={player.imageUrl} 
                  alt={player.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150?text=" + player.name.split(' ')[0];
                  }}
                />
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-3">
                  <h1 className="text-3xl font-bold">{player.name}</h1>
                  <Badge className="bg-fitness-purple hover:bg-fitness-purple/90">{player.role}</Badge>
                </div>
                <p className="text-muted-foreground mt-1">
                  {player.nationality}, {player.age} years
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline">Team: {player.teamName}</Badge>
                  <Badge variant="outline">
                    {player.battingStyle} Batsman
                  </Badge>
                  {player.bowlingStyle && (
                    <Badge variant="outline">
                      {player.bowlingStyle} Bowler
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Player Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="batting">Batting</TabsTrigger>
                    <TabsTrigger value="bowling">Bowling</TabsTrigger>
                    <TabsTrigger value="graphs">Graphs</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-4">
                    <PlayerOverview player={player} />
                  </TabsContent>
                  
                  <TabsContent value="batting" className="space-y-4">
                    <PlayerBattingStats player={player} />
                  </TabsContent>
                  
                  <TabsContent value="bowling" className="space-y-4">
                    <PlayerBowlingStats player={player} />
                  </TabsContent>
                  
                  <TabsContent value="graphs" className="space-y-4">
                    <PlayerPerformanceGraphs player={player} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="text-center p-12">
            <p>Player not found</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default PlayerDetails;
