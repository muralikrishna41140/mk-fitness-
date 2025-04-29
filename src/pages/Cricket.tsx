import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import CricketWorkoutSection from '@/components/cricket/CricketWorkoutSection';
import CricketMatchSection from '@/components/cricket/CricketMatchSection';
import CricketTrainingSection from '@/components/cricket/CricketTrainingSection';
import CricketLiveMatchSection from '@/components/cricket/CricketLiveMatchSection';
import CricketIQQuiz from '@/components/cricket/CricketIQQuiz';
import CricketTipsSection from '@/components/cricket/CricketTipsSection';
import PlayerStatsCard from '@/components/cricket/PlayerStatsCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Trophy, Dumbbell, Brain, Apple, Activity as ActivityIcon } from 'lucide-react';

const Cricket: React.FC = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">Cricket Performance Zone</h1>
            <p className="text-gray-500">Specialized training, match insights, and cricket-specific fitness</p>
          </div>
          <div className="hidden md:flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-fitness-purple to-fitness-blue text-white">
            <Activity className="h-6 w-6" />
          </div>
        </div>

        <Card className="bg-gradient-to-r from-fitness-purple to-fitness-blue text-white overflow-hidden">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Cricket Performance Lab</h2>
              <p className="text-white/80">Train smarter with AI-powered cricket fitness analysis and live match insights</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <div className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" />
                  <span>Personalized Training</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/40"></div>
                <div className="flex items-center gap-1">
                  <ActivityIcon className="h-4 w-4" />
                  <span>Live Cricket Data</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <CricketLiveMatchSection />
          </div>
          <div>
            <CricketTipsSection />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <CricketIQQuiz />
          </div>
          <div className="md:col-span-2">
            <Card>
              <CardHeader className="bg-gradient-to-r from-fitness-purple/20 to-fitness-blue/20">
                <CardTitle className="text-lg flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-fitness-purple" />
                  Player Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <PlayerStatsCard playerId="1" />
                  <PlayerStatsCard playerId="2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="training">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="training" className="flex items-center">
              <Dumbbell className="h-4 w-4 mr-2" />
              Training
            </TabsTrigger>
            <TabsTrigger value="nutrition" className="flex items-center">
              <Apple className="h-4 w-4 mr-2" />
              Cricket Nutrition
            </TabsTrigger>
            <TabsTrigger value="workouts" className="flex items-center">
              <Brain className="h-4 w-4 mr-2" />
              Cricket Workouts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="training" className="mt-6">
            <CricketTrainingSection />
          </TabsContent>
          
          <TabsContent value="nutrition" className="mt-6">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Cricket-Specific Nutrition</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover-card">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-delicious-salad-with-many-ingredients-dark-desk-diet-health-salad-food-meal_140725-75636.jpg?size=626&ext=jpg)' }}>
                    <div className="h-full w-full bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
                      <Badge className="bg-fitness-purple">Match Day</Badge>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h4 className="font-medium text-lg">Match Day Nutrition</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Optimize your performance with proper pre-match, during-match, and post-match nutrition strategies.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Carbs</span>
                        <span className="font-medium">60%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-value" style={{ width: '60%', backgroundColor: '#9b87f5' }}></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Protein</span>
                        <span className="font-medium">25%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-value" style={{ width: '25%', backgroundColor: '#F97316' }}></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Fat</span>
                        <span className="font-medium">15%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-value" style={{ width: '15%', backgroundColor: '#0EA5E9' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover-card">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/grilled-chicken-breast-fresh-vegetable-salad-tomatoes-cucumbers_2829-8727.jpg?size=626&ext=jpg)' }}>
                    <div className="h-full w-full bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
                      <Badge className="bg-fitness-orange">Training Day</Badge>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h4 className="font-medium text-lg">Training Day Nutrition</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Fuel your cricket training sessions with the right balance of nutrients to maximize performance.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Carbs</span>
                        <span className="font-medium">50%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-value" style={{ width: '50%', backgroundColor: '#9b87f5' }}></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Protein</span>
                        <span className="font-medium">30%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-value" style={{ width: '30%', backgroundColor: '#F97316' }}></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Fat</span>
                        <span className="font-medium">20%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-value" style={{ width: '20%', backgroundColor: '#0EA5E9' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover-card">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/protein-smoothies-with-ingredients_23-2149022621.jpg?size=626&ext=jpg)' }}>
                    <div className="h-full w-full bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
                      <Badge className="bg-fitness-blue">Recovery Day</Badge>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h4 className="font-medium text-lg">Recovery Nutrition</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Speed up recovery between cricket matches and training sessions with optimal nutrition strategies.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Carbs</span>
                        <span className="font-medium">40%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-value" style={{ width: '40%', backgroundColor: '#9b87f5' }}></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Protein</span>
                        <span className="font-medium">35%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-value" style={{ width: '35%', backgroundColor: '#F97316' }}></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Fat</span>
                        <span className="font-medium">25%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-value" style={{ width: '25%', backgroundColor: '#0EA5E9' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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
