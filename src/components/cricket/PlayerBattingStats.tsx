
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Player } from '@/types/cricket';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

interface PlayerBattingStatsProps {
  player: Player;
}

const PlayerBattingStats: React.FC<PlayerBattingStatsProps> = ({ player }) => {
  const { battingStats = [] } = player;
  
  if (!battingStats.length) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">No batting statistics available for this player.</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-medium text-lg mb-4">Batting Statistics by Season</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Season</TableHead>
                <TableHead>Matches</TableHead>
                <TableHead>Runs</TableHead>
                <TableHead>Highest</TableHead>
                <TableHead>Average</TableHead>
                <TableHead>Strike Rate</TableHead>
                <TableHead>50s</TableHead>
                <TableHead>100s</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {battingStats.map((stat, index) => (
                <TableRow key={index}>
                  <TableCell>{stat.season}</TableCell>
                  <TableCell>{stat.matches}</TableCell>
                  <TableCell>{stat.runs}</TableCell>
                  <TableCell>{stat.highestScore}</TableCell>
                  <TableCell>{stat.average?.toFixed(2) || '-'}</TableCell>
                  <TableCell>{stat.strikeRate?.toFixed(2) || '-'}</TableCell>
                  <TableCell>{stat.fifties}</TableCell>
                  <TableCell>{stat.hundreds}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-muted/50 font-medium">
                <TableCell>Career</TableCell>
                <TableCell>{player.stats.matches}</TableCell>
                <TableCell>{player.stats.runs}</TableCell>
                <TableCell>{player.stats.highestScore}</TableCell>
                <TableCell>{player.stats.battingAverage?.toFixed(2) || '-'}</TableCell>
                <TableCell>{player.stats.strikeRate?.toFixed(2) || '-'}</TableCell>
                <TableCell>{player.stats.fifties}</TableCell>
                <TableCell>{player.stats.hundreds}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerBattingStats;
