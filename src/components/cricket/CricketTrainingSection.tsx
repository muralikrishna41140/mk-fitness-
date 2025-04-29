
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Cricket, Timer, Award } from 'lucide-react';

const CricketTrainingSection: React.FC = () => {
  // Mock data for cricket training metrics
  const trainingMetrics = [
    {
      title: "Batting Practice",
      metric: "Stroke Accuracy",
      value: 75,
      goal: 100,
      unit: "strokes",
      color: "bg-fitness-purple",
    },
    {
      title: "Bowling Practice",
      metric: "Delivery Speed",
      value: 125,
      goal: 140,
      unit: "km/h",
      color: "bg-fitness-orange",
    },
    {
      title: "Fielding Practice",
      metric: "Catches Completed",
      value: 15,
      goal: 20,
      unit: "catches",
      color: "bg-fitness-blue",
    },
    {
      title: "Fitness Training",
      metric: "Sprints Between Wickets",
      value: 30,
      goal: 50,
      unit: "sprints",
      color: "bg-green-500",
    },
  ];

  // Mock data for cricket quizzes and challenges
  const cricketChallenges = [
    {
      title: "Cricket IQ Challenge",
      description: "Test your cricket knowledge with daily trivia questions.",
      icon: Cricket,
      progress: 60,
      reward: "Cricket Genius Badge",
    },
    {
      title: "30-Day Batting Form",
      description: "Practice batting technique daily for 30 days.",
      icon: Timer,
      progress: 40,
      reward: "Master Batter Badge",
    },
    {
      title: "Bowl 1000 Deliveries",
      description: "Track your progress towards bowling 1000 deliveries.",
      icon: Award,
      progress: 25,
      reward: "Elite Bowler Badge",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Training Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainingMetrics.map((metric) => (
            <Card key={metric.title} className="hover-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{metric.title}</CardTitle>
                <CardDescription>{metric.metric}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Progress</span>
                    <span className="text-sm font-medium">
                      {metric.value} / {metric.goal} {metric.unit}
                    </span>
                  </div>
                  <Progress 
                    value={(metric.value / metric.goal) * 100} 
                    className="h-2" 
                    indicatorClassName={metric.color}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Update Progress</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Cricket Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cricketChallenges.map((challenge) => (
            <Card key={challenge.title} className="hover-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  <challenge.icon className="h-5 w-5 text-fitness-purple" />
                </div>
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Progress</span>
                    <span className="text-sm font-medium">
                      {challenge.progress}%
                    </span>
                  </div>
                  <Progress 
                    value={challenge.progress} 
                    className="h-2" 
                  />
                  <div className="flex items-center mt-2">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    <span className="text-xs">{challenge.reward}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-fitness-purple hover:bg-fitness-purple/90">Join Challenge</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CricketTrainingSection;
