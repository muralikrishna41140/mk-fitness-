import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import WorkoutCard from '@/components/workouts/WorkoutCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Wand2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { generateWorkout } from '@/services/geminiApi';

const Workouts: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [goal, setGoal] = useState('strength');
  const [fitnessLevel, setFitnessLevel] = useState('beginner');
  const [duration, setDuration] = useState('30');
  const [equipment, setEquipment] = useState<string[]>([]);
  const [generatedWorkout, setGeneratedWorkout] = useState('');

  const handleEquipmentChange = (item: string) => {
    if (equipment.includes(item)) {
      setEquipment(equipment.filter(i => i !== item));
    } else {
      setEquipment([...equipment, item]);
    }
  };

  const handleGenerateWorkout = async () => {
    setLoading(true);
    try {
      const response = await generateWorkout(goal, fitnessLevel, duration, equipment);
      setGeneratedWorkout(response);
      toast.success('Workout generated successfully!');
    } catch (error) {
      console.error('Error generating workout:', error);
      toast.error('Failed to generate workout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Workout Library</h1>
            <p className="text-gray-500">Discover personalized workouts for your fitness journey</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-fitness-purple hover:bg-fitness-purple/90 w-full md:w-auto">
                <Wand2 className="h-4 w-4 mr-2" />
                Generate Workout
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create Custom Workout</DialogTitle>
                <DialogDescription>
                  Tell us your preferences and we'll create a personalized workout just for you.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="goal">Workout Goal</Label>
                  <Select value={goal} onValueChange={setGoal}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strength">Strength Training</SelectItem>
                      <SelectItem value="cardio">Cardio & Endurance</SelectItem>
                      <SelectItem value="flexibility">Flexibility & Mobility</SelectItem>
                      <SelectItem value="weightloss">Weight Loss</SelectItem>
                      <SelectItem value="muscle">Muscle Building</SelectItem>
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
                
                <div className="grid gap-2">
                  <Label>Available Equipment</Label>
                  <div className="flex flex-wrap gap-2">
                    {['Dumbbells', 'Resistance Bands', 'Bench', 'Pull-up Bar', 'No Equipment'].map((item) => (
                      <Button
                        key={item}
                        type="button"
                        variant={equipment.includes(item) ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleEquipmentChange(item)}
                        className={equipment.includes(item) ? "bg-fitness-purple hover:bg-fitness-purple/90" : ""}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {generatedWorkout && (
                  <div className="mt-2 p-4 bg-gray-50 rounded-md max-h-40 overflow-y-auto">
                    <p className="text-sm whitespace-pre-line">{generatedWorkout}</p>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button 
                  type="submit" 
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
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input placeholder="Search workouts..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="strength">Strength</TabsTrigger>
            <TabsTrigger value="hiit">HIIT</TabsTrigger>
            <TabsTrigger value="cardio">Cardio</TabsTrigger>
            <TabsTrigger value="yoga">Yoga</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <WorkoutCard
                title="Full Body HIIT"
                duration={30}
                calories={320}
                level="intermediate"
                imageUrl="https://img.freepik.com/free-photo/athletic-shirtless-young-male-fitness-model-holds-dumbbell-with-light-isolated-dark-background_613910-16.jpg?size=626&ext=jpg"
                exercises={12}
                category="HIIT"
              />
              <WorkoutCard
                title="Home Core Crusher"
                duration={20}
                calories={180}
                level="beginner"
                imageUrl="https://img.freepik.com/free-photo/attractive-young-woman-home-workout_23-2149215800.jpg?size=626&ext=jpg"
                exercises={8}
                category="Core"
              />
              <WorkoutCard
                title="Leg Day Strength"
                duration={45}
                calories={400}
                level="advanced"
                imageUrl="https://img.freepik.com/free-photo/muscular-man-lifting-barbell-gym_651396-1120.jpg?size=626&ext=jpg"
                exercises={10}
                category="Strength"
              />
              <WorkoutCard
                title="Yoga Flow"
                duration={25}
                calories={150}
                level="beginner"
                imageUrl="https://img.freepik.com/free-photo/woman-doing-yoga-park_23-2147796423.jpg?size=626&ext=jpg"
                exercises={6}
                category="Yoga"
              />
              <WorkoutCard
                title="Fat Burn Cardio"
                duration={35}
                calories={380}
                level="intermediate"
                imageUrl="https://img.freepik.com/free-photo/man-doing-legs-exercise_23-2148318456.jpg?size=626&ext=jpg"
                exercises={14}
                category="Cardio"
              />
              <WorkoutCard
                title="Upper Body Push"
                duration={40}
                calories={350}
                level="intermediate"
                imageUrl="https://img.freepik.com/free-photo/man-doing-dumbbell-row_23-2148314508.jpg?size=626&ext=jpg"
                exercises={9}
                category="Strength"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="strength" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <WorkoutCard
                title="Leg Day Strength"
                duration={45}
                calories={400}
                level="advanced"
                imageUrl="https://img.freepik.com/free-photo/muscular-man-lifting-barbell-gym_651396-1120.jpg?size=626&ext=jpg"
                exercises={10}
                category="Strength"
              />
              <WorkoutCard
                title="Upper Body Push"
                duration={40}
                calories={350}
                level="intermediate"
                imageUrl="https://img.freepik.com/free-photo/man-doing-dumbbell-row_23-2148314508.jpg?size=626&ext=jpg"
                exercises={9}
                category="Strength"
              />
            </div>
          </TabsContent>
          
          {/* Other tabs content would be similar */}
          <TabsContent value="hiit" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <WorkoutCard
                title="Full Body HIIT"
                duration={30}
                calories={320}
                level="intermediate"
                imageUrl="https://img.freepik.com/free-photo/athletic-shirtless-young-male-fitness-model-holds-dumbbell-with-light-isolated-dark-background_613910-16.jpg?size=626&ext=jpg"
                exercises={12}
                category="HIIT"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="cardio" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <WorkoutCard
                title="Fat Burn Cardio"
                duration={35}
                calories={380}
                level="intermediate"
                imageUrl="https://img.freepik.com/free-photo/man-doing-legs-exercise_23-2148318456.jpg?size=626&ext=jpg"
                exercises={14}
                category="Cardio"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="yoga" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <WorkoutCard
                title="Yoga Flow"
                duration={25}
                calories={150}
                level="beginner"
                imageUrl="https://img.freepik.com/free-photo/woman-doing-yoga-park_23-2147796423.jpg?size=626&ext=jpg"
                exercises={6}
                category="Yoga"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Workouts;
