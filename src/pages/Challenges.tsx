import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ChallengeCard from '@/components/challenges/ChallengeCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';

const Challenges: React.FC = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Fitness Challenges</h1>
            <p className="text-gray-500">Join challenges, compete with friends, and earn rewards</p>
          </div>
          <Button className="bg-fitness-purple hover:bg-fitness-purple/90 w-full md:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Create Challenge
          </Button>
        </div>
        
        <Tabs defaultValue="active">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="available">Available</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ChallengeCard
                title="10K Steps Daily"
                description="Walk 10,000 steps every day for 30 days"
                participants={248}
                progress={65}
                daysLeft={12}
                imageUrl="https://img.freepik.com/free-photo/full-shot-woman-running-outdoors_23-2149872579.jpg?size=626&ext=jpg"
                type="solo"
              />
              <ChallengeCard
                title="Group Weight Loss"
                description="Lose 5% body weight together with your team"
                participants={42}
                progress={28}
                daysLeft={21}
                imageUrl="https://img.freepik.com/free-photo/people-gym_23-2149175223.jpg?size=626&ext=jpg"
                type="group"
              />
              <ChallengeCard
                title="Buddy Push-up Challenge"
                description="Complete 1,000 push-ups with a friend in 30 days"
                participants={2}
                progress={45}
                daysLeft={16}
                imageUrl="https://img.freepik.com/free-photo/man-doing-push-up-exercise-fitness-mat_23-2147949770.jpg?size=626&ext=jpg"
                type="friend"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="available" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ChallengeCard
                title="30-Day Plank Challenge"
                description="Build core strength with daily planks"
                participants={156}
                progress={0}
                daysLeft={30}
                imageUrl="https://img.freepik.com/free-photo/fit-young-woman-doing-plank-exercise_176420-676.jpg?size=626&ext=jpg"
                type="solo"
              />
              <ChallengeCard
                title="Healthy Eating Week"
                description="Track your nutrition and eat clean for 7 days"
                participants={89}
                progress={0}
                daysLeft={7}
                imageUrl="https://img.freepik.com/free-photo/healthy-food-background-conceptual-photo-healthy-food-fresh-vegetables_127425-16.jpg?size=626&ext=jpg"
                type="group"
              />
              <ChallengeCard
                title="Weekend Warrior"
                description="Complete 3 workouts this weekend"
                participants={124}
                progress={0}
                daysLeft={2}
                imageUrl="https://img.freepik.com/free-photo/side-view-man-training-with-weights_23-2149315505.jpg?size=626&ext=jpg"
                type="solo"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ChallengeCard
                title="Yoga for 21 Days"
                description="Practice yoga for 21 consecutive days"
                participants={312}
                progress={100}
                daysLeft={0}
                imageUrl="https://img.freepik.com/free-photo/woman-doing-yoga-mat_23-2149080086.jpg?size=626&ext=jpg"
                type="solo"
              />
              <ChallengeCard
                title="Spring 5K"
                description="Train and complete a 5K run"
                participants={184}
                progress={100}
                daysLeft={0}
                imageUrl="https://img.freepik.com/free-photo/full-shot-women-running-together_23-2149226833.jpg?size=626&ext=jpg"
                type="group"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Challenges;
