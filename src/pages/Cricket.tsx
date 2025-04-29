
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import TeamCard from '@/components/cricket/TeamCard';
import { useQuery } from '@tanstack/react-query';
import { fetchIPLTeams } from '@/services/cricketService';

const Cricket: React.FC = () => {
  const { data: teams, isLoading } = useQuery({
    queryKey: ['iplTeams'],
    queryFn: fetchIPLTeams,
  });

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">IPL Cricket Player Analytics</h1>
            <p className="text-muted-foreground">Explore detailed statistics and performance analytics for IPL players.</p>
          </div>
          <Badge variant="default" className="bg-fitness-purple hover:bg-fitness-purple/90">
            IPL Season 2024
          </Badge>
        </div>

        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="teams" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="teams">Teams</TabsTrigger>
                <TabsTrigger value="topPlayers">Top Players</TabsTrigger>
                <TabsTrigger value="stats">League Stats</TabsTrigger>
              </TabsList>
              
              <TabsContent value="teams" className="space-y-6">
                {isLoading ? (
                  <div className="flex justify-center p-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fitness-purple"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teams?.map((team) => (
                      <TeamCard key={team.id} team={team} />
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="topPlayers" className="min-h-[300px]">
                <div className="text-center p-12">
                  <p className="text-muted-foreground">Top player rankings coming soon.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="stats" className="min-h-[300px]">
                <div className="text-center p-12">
                  <p className="text-muted-foreground">League statistics coming soon.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Cricket;
