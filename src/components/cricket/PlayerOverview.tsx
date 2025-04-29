
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Player } from '@/types/cricket';

interface PlayerOverviewProps {
  player: Player;
}

const PlayerOverview: React.FC<PlayerOverviewProps> = ({ player }) => {
  const statItems = [
    { label: 'Matches', value: player.stats.matches },
    ...(player.role.includes('Batsman') || player.role === 'All-rounder' || player.role === 'Wicket-keeper' ? [
      { label: 'Runs', value: player.stats.runs || 0 },
      { label: 'Highest Score', value: player.stats.highestScore || 0 },
      { label: 'Batting Avg', value: player.stats.battingAverage?.toFixed(2) || 0 },
      { label: 'Strike Rate', value: player.stats.strikeRate?.toFixed(2) || 0 },
      { label: '50s/100s', value: `${player.stats.fifties || 0}/${player.stats.hundreds || 0}` },
    ] : []),
    ...(player.role.includes('Bowler') || player.role === 'All-rounder' ? [
      { label: 'Wickets', value: player.stats.wickets || 0 },
      { label: 'Best Figures', value: player.stats.bestBowlingFigures || '-' },
      { label: 'Bowling Avg', value: player.stats.bowlingAverage?.toFixed(2) || 0 },
      { label: 'Economy', value: player.stats.economy?.toFixed(2) || 0 },
      { label: '5 Wickets', value: player.stats.fiveWickets || 0 },
    ] : []),
    { label: 'Catches', value: player.stats.catches || 0 },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <h3 className="font-medium text-lg mb-4">Player Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Full Name</span>
                <span className="font-medium">{player.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Age</span>
                <span className="font-medium">{player.age} years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nationality</span>
                <span className="font-medium">{player.nationality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Team</span>
                <span className="font-medium">{player.teamName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Role</span>
                <span className="font-medium">{player.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Batting</span>
                <span className="font-medium">{player.battingStyle}</span>
              </div>
              {player.bowlingStyle && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bowling</span>
                  <span className="font-medium">{player.bowlingStyle}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <h3 className="font-medium text-lg mb-4">Career Statistics</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {statItems.map((item) => (
                <div key={item.label} className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                  <p className="text-2xl font-bold mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PlayerOverview;
