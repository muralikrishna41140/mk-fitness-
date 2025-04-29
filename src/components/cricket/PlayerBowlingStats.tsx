
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Player } from '@/types/cricket';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

interface PlayerBowlingStatsProps {
  player: Player;
}

const PlayerBowlingStats: React.FC<PlayerBowlingStatsProps> = ({ player }) => {
  const { bowlingStats = [] } = player;
  
  if (!bowlingStats.length) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">No bowling statistics available for this player.</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-medium text-lg mb-4">Bowling Statistics by Season</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Season</TableHead>
                <TableHead>Matches</TableHead>
                <TableHead>Wickets</TableHead>
                <TableHead>Best Figures</TableHead>
                <TableHead>Average</TableHead>
                <TableHead>Economy</TableHead>
                <TableHead>SR</TableHead>
                <TableHead>5W</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bowlingStats.map((stat, index) => (
                <TableRow key={index}>
                  <TableCell>{stat.season}</TableCell>
                  <TableCell>{stat.matches}</TableCell>
                  <TableCell>{stat.wickets}</TableCell>
                  <TableCell>{stat.bestFigures}</TableCell>
                  <TableCell>{stat.average?.toFixed(2) || '-'}</TableCell>
                  <TableCell>{stat.economy?.toFixed(2) || '-'}</TableCell>
                  <TableCell>{stat.strikeRate?.toFixed(2) || '-'}</TableCell>
                  <TableCell>{stat.fiveWickets}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-muted/50 font-medium">
                <TableCell>Career</TableCell>
                <TableCell>{player.stats.matches}</TableCell>
                <TableCell>{player.stats.wickets}</TableCell>
                <TableCell>{player.stats.bestBowlingFigures}</TableCell>
                <TableCell>{player.stats.bowlingAverage?.toFixed(2) || '-'}</TableCell>
                <TableCell>{player.stats.economy?.toFixed(2) || '-'}</TableCell>
                <TableCell>{player.stats.bowlingStrikeRate?.toFixed(2) || '-'}</TableCell>
                <TableCell>{player.stats.fiveWickets}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerBowlingStats;
