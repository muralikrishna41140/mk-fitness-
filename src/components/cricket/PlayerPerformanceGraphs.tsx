
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Player } from '@/types/cricket';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface PlayerPerformanceGraphsProps {
  player: Player;
}

const PlayerPerformanceGraphs: React.FC<PlayerPerformanceGraphsProps> = ({ player }) => {
  // Prepare skill composition data for pie chart
  const skillData = [
    {
      name: 'Batting',
      value: player.role.includes('Batsman') ? 70 : player.role === 'All-rounder' ? 50 : 20,
      fill: '#9b87f5'
    },
    {
      name: 'Bowling',
      value: player.role.includes('Bowler') ? 70 : player.role === 'All-rounder' ? 50 : 10,
      fill: '#0EA5E9'
    },
    {
      name: 'Fielding',
      value: player.role === 'Wicket-keeper' ? 60 : 30,
      fill: '#F97316'
    }
  ];

  // Prepare attributes data for radar chart
  const attributesData = [
    { subject: 'Power', A: Math.floor(Math.random() * 40) + 60 },
    { subject: 'Technique', A: Math.floor(Math.random() * 40) + 60 },
    { subject: 'Consistency', A: Math.floor(Math.random() * 40) + 60 },
    { subject: 'Stamina', A: Math.floor(Math.random() * 40) + 60 },
    { subject: 'Fielding', A: Math.floor(Math.random() * 40) + 60 }
  ];

  // Prepare last 10 matches performance data
  const last10Matches = Array.from({ length: 10 }, (_, i) => {
    const isImpactful = Math.random() > 0.7;
    return {
      match: `M${i + 1}`,
      runs: player.role.includes('Batsman') || player.role === 'All-rounder' || player.role === 'Wicket-keeper'
        ? Math.floor(Math.random() * (isImpactful ? 80 : 40)) + (isImpactful ? 30 : 5)
        : 0,
      wickets: player.role.includes('Bowler') || player.role === 'All-rounder'
        ? Math.floor(Math.random() * (isImpactful ? 4 : 2)) + (isImpactful ? 0 : 0)
        : 0
    };
  });

  // Prepare season-wise performance data
  const seasonData = [
    { season: '2018', runs: Math.floor(Math.random() * 400) + 100, wickets: Math.floor(Math.random() * 15) + 1 },
    { season: '2019', runs: Math.floor(Math.random() * 400) + 100, wickets: Math.floor(Math.random() * 15) + 1 },
    { season: '2020', runs: Math.floor(Math.random() * 400) + 100, wickets: Math.floor(Math.random() * 15) + 1 },
    { season: '2021', runs: Math.floor(Math.random() * 400) + 100, wickets: Math.floor(Math.random() * 15) + 1 },
    { season: '2022', runs: Math.floor(Math.random() * 400) + 100, wickets: Math.floor(Math.random() * 15) + 1 },
    { season: '2023', runs: Math.floor(Math.random() * 400) + 100, wickets: Math.floor(Math.random() * 15) + 1 },
    { season: '2024', runs: Math.floor(Math.random() * 400) + 100, wickets: Math.floor(Math.random() * 15) + 1 }
  ];

  const chartConfig = {
    batting: { label: 'Batting', color: '#9b87f5' },
    bowling: { label: 'Bowling', color: '#0EA5E9' },
    fielding: { label: 'Fielding', color: '#F97316' },
    power: { label: 'Power', color: '#9b87f5' },
    technique: { label: 'Technique', color: '#0EA5E9' },
    consistency: { label: 'Consistency', color: '#F97316' },
    stamina: { label: 'Stamina', color: '#22C55E' },
    runs: { label: 'Runs', color: '#9b87f5' },
    wickets: { label: 'Wickets', color: '#0EA5E9' }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="font-medium text-lg mb-4">Skill Composition</h3>
          <div className="h-[300px]">
            <ChartContainer id="skill-pie" config={chartConfig}>
              <PieChart>
                <Pie
                  data={skillData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {skillData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="font-medium text-lg mb-4">Player Attributes</h3>
          <div className="h-[300px]">
            <ChartContainer id="attributes-radar" config={chartConfig}>
              <RadarChart outerRadius={90} data={attributesData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Attributes"
                  dataKey="A"
                  stroke="#9b87f5"
                  fill="#9b87f5"
                  fillOpacity={0.6}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </RadarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="font-medium text-lg mb-4">Last 10 Matches</h3>
          <div className="h-[300px]">
            <ChartContainer id="last-10-matches" config={chartConfig}>
              <LineChart data={last10Matches}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="match" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                {(player.role.includes('Batsman') || player.role === 'All-rounder' || player.role === 'Wicket-keeper') && (
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="runs"
                    stroke="#9b87f5"
                    activeDot={{ r: 8 }}
                    name="Runs"
                  />
                )}
                {(player.role.includes('Bowler') || player.role === 'All-rounder') && (
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="wickets"
                    stroke="#0EA5E9"
                    activeDot={{ r: 8 }}
                    name="Wickets"
                  />
                )}
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="font-medium text-lg mb-4">Season-wise Performance</h3>
          <div className="h-[300px]">
            <ChartContainer id="season-performance" config={chartConfig}>
              <BarChart data={seasonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="season" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                {(player.role.includes('Batsman') || player.role === 'All-rounder' || player.role === 'Wicket-keeper') && (
                  <Bar
                    yAxisId="left"
                    dataKey="runs"
                    fill="#9b87f5"
                    name="Runs"
                    barSize={20}
                  />
                )}
                {(player.role.includes('Bowler') || player.role === 'All-rounder') && (
                  <Bar
                    yAxisId="right"
                    dataKey="wickets"
                    fill="#0EA5E9"
                    name="Wickets"
                    barSize={20}
                  />
                )}
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerPerformanceGraphs;
