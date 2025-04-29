
import React from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/layout/PageLayout';
import WelcomeCard from '@/components/dashboard/WelcomeCard';
import StatsCard from '@/components/dashboard/StatsCard';
import ChallengeCard from '@/components/challenges/ChallengeCard';
import WorkoutCard from '@/components/workouts/WorkoutCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Dashboard | FitForge</title>
      </Helmet>
      
      <div className="space-y-6">
        <WelcomeCard />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard
            title="Weekly Streak"
            value="5 days"
            description="Keep going! 2 more days to complete your week."
            icon="trending-up"
            color="purple"
          />
          <StatsCard
            title="Calories Burned"
            value="1,248"
            description="15% increase from last week"
            icon="flame"
            color="orange"
          />
          <StatsCard
            title="Active Minutes"
            value="156"
            description="24 minutes today"
            icon="activity"
            color="blue"
          />
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Active Challenges</h2>
            <Link to="/challenges">
              <Button variant="ghost" className="text-fitness-purple hover:text-fitness-purple/80 hover:bg-fitness-purple/10">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
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
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recommended Workouts</h2>
            <Link to="/workouts">
              <Button variant="ghost" className="text-fitness-purple hover:text-fitness-purple/80 hover:bg-fitness-purple/10">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
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
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
