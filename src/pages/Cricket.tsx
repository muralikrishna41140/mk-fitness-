
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import CricketWorkoutSection from '@/components/cricket/CricketWorkoutSection';
import CricketMatchSection from '@/components/cricket/CricketMatchSection';
import CricketTrainingSection from '@/components/cricket/CricketTrainingSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Cricket: React.FC = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Cricket Performance Zone</h1>
          <p className="text-gray-500">Specialized training, match insights, and cricket-specific fitness</p>
        </div>

        <Tabs defaultValue="training">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="matches">Live Matches</TabsTrigger>
            <TabsTrigger value="workouts">Cricket Workouts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="training" className="mt-6">
            <CricketTrainingSection />
          </TabsContent>
          
          <TabsContent value="matches" className="mt-6">
            <CricketMatchSection />
          </TabsContent>
          
          <TabsContent value="workouts" className="mt-6">
            <CricketWorkoutSection />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Cricket;
