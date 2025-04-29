
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Dumbbell, Users, Trophy } from 'lucide-react';
import { toast } from 'sonner';
import { generateWorkout } from '@/services/geminiApi';
import CricketWorkoutCard from './CricketWorkoutCard';

const CricketWorkoutSection: React.FC = () => {
  const [playerRole, setPlayerRole] = React.useState('batsman');
  const [fitnessLevel, setFitnessLevel] = React.useState('beginner');
  const [duration, setDuration] = React.useState('30');
  const [loading, setLoading] = React.useState(false);
  const [generatedWorkout, setGeneratedWorkout] = React.useState('');

  const handleGenerateWorkout = async () => {
    setLoading(true);
    try {
      const response = await generateWorkout(
        `Cricket training for ${playerRole}`,
        fitnessLevel,
        duration,
        ['Cricket equipment']
      );
      setGeneratedWorkout(response);
      toast.success('Cricket workout generated successfully!');
    } catch (error) {
      console.error('Error generating workout:', error);
      toast.error('Failed to generate workout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-fitness-purple hover:bg-fitness-purple/90 w-full">
              Generate Cricket Workout
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create Cricket-Specific Workout</DialogTitle>
              <DialogDescription>
                Get a personalized cricket workout based on your role and preferences.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="role">Player Role</Label>
                <Select value={playerRole} onValueChange={setPlayerRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="batsman">Batsman</SelectItem>
                    <SelectItem value="bowler">Bowler</SelectItem>
                    <SelectItem value="wicketkeeper">Wicket-Keeper</SelectItem>
                    <SelectItem value="allrounder">All-Rounder</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="level">Fitness Level</Label>
                <Select value={fitnessLevel} onValueChange={setFitnessLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="duration">Workout Duration (minutes)</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {generatedWorkout && (
                <div className="mt-2 p-4 bg-gray-50 rounded-md max-h-60 overflow-y-auto">
                  <p className="text-sm whitespace-pre-line">{generatedWorkout}</p>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button 
                onClick={handleGenerateWorkout}
                disabled={loading}
                className="bg-fitness-purple hover:bg-fitness-purple/90"
              >
                {loading ? "Generating..." : "Generate Workout"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CricketWorkoutCard 
          title="Batsman Power Training"
          role="Batsman"
          duration={30}
          equipment="Bat, Resistance bands"
          level="Intermediate"
          imageUrl="https://img.freepik.com/free-photo/cricket-player-field_23-2150460656.jpg?size=626&ext=jpg"
          exercises={8}
        />
        <CricketWorkoutCard 
          title="Fast Bowler's Toolkit"
          role="Bowler"
          duration={45}
          equipment="Cricket ball, Cones"
          level="Advanced"
          imageUrl="https://img.freepik.com/free-photo/cricket-player-celebrating-victory_23-2150449648.jpg?size=626&ext=jpg"
          exercises={10}
        />
        <CricketWorkoutCard 
          title="Wicket-Keeper Reflexes"
          role="Wicket-Keeper"
          duration={25}
          equipment="Gloves, Reaction balls"
          level="Beginner"
          imageUrl="https://img.freepik.com/free-photo/cricket-players-field_23-2149048804.jpg?size=626&ext=jpg"
          exercises={6}
        />
      </div>
    </div>
  );
};

export default CricketWorkoutSection;
