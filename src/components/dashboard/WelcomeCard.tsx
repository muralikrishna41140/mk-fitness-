
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const WelcomeCard: React.FC = () => {
  const timeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning';
    if (hour < 18) return 'Afternoon';
    return 'Evening';
  };

  return (
    <Card className="bg-gradient-to-r from-fitness-purple to-fitness-blue text-white overflow-hidden animate-fade-in">
      <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Good {timeOfDay()}, Alex!</h2>
          <p className="text-white/80">Ready to crush your fitness goals today?</p>
          <div className="flex items-center gap-2 text-sm mt-2">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Level 12</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/40"></div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>2,450 XP</span>
            </div>
          </div>
          <Button variant="secondary" size="sm" className="mt-3 bg-white text-fitness-purple hover:bg-white/90">
            Today's Workout <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <img 
              src="https://img.freepik.com/free-vector/fitness-tracker-concept-illustration_114360-1525.jpg?size=626&ext=jpg" 
              alt="Fitness" 
              className="relative z-10 w-40 h-40 object-contain"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
