
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dumbbell, LineChart, Wheat, Clock } from 'lucide-react';
import { getCricketTips } from '@/services/geminiApi';
import { toast } from 'sonner';

const CricketTipsSection: React.FC = () => {
  const [tips, setTips] = useState<string>('');
  const [role, setRole] = useState<string>('batsman');
  const [loading, setLoading] = useState(false);

  const handleGetTips = async () => {
    setLoading(true);
    try {
      const tipResponse = await getCricketTips(role);
      setTips(tipResponse);
    } catch (error) {
      console.error('Error getting cricket tips:', error);
      toast.error('Failed to get cricket tips. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="hover-card">
      <CardHeader className="bg-gradient-to-r from-fitness-purple/20 to-fitness-blue/20">
        <CardTitle className="text-lg">Cricket Performance Tips</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <Tabs defaultValue="batsman" onValueChange={(value) => setRole(value)}>
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="batsman">Batsman</TabsTrigger>
              <TabsTrigger value="bowler">Bowler</TabsTrigger>
              <TabsTrigger value="wicketkeeper">Keeper</TabsTrigger>
              <TabsTrigger value="allrounder">All-Rounder</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="justify-start h-auto py-3"
              onClick={handleGetTips}
              disabled={loading}
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <Dumbbell className="h-4 w-4 mr-2 text-fitness-purple" />
                  <span className="font-medium">Training Tips</span>
                </div>
                <span className="text-xs text-gray-500 mt-1">Get specialized training advice</span>
              </div>
            </Button>
            <Button 
              variant="outline" 
              className="justify-start h-auto py-3"
              onClick={handleGetTips}
              disabled={loading}
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <Wheat className="h-4 w-4 mr-2 text-fitness-orange" />
                  <span className="font-medium">Nutrition Tips</span>
                </div>
                <span className="text-xs text-gray-500 mt-1">Cricket-specific diet advice</span>
              </div>
            </Button>
            <Button 
              variant="outline" 
              className="justify-start h-auto py-3"
              onClick={handleGetTips}
              disabled={loading}
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <LineChart className="h-4 w-4 mr-2 text-fitness-blue" />
                  <span className="font-medium">Performance Analytics</span>
                </div>
                <span className="text-xs text-gray-500 mt-1">Track and improve your stats</span>
              </div>
            </Button>
            <Button 
              variant="outline" 
              className="justify-start h-auto py-3"
              onClick={handleGetTips}
              disabled={loading}
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-green-600" />
                  <span className="font-medium">Recovery Strategies</span>
                </div>
                <span className="text-xs text-gray-500 mt-1">Optimal recovery between matches</span>
              </div>
            </Button>
          </div>

          {loading && (
            <div className="py-8 text-center">
              <div className="inline-flex space-x-2 animate-pulse">
                <div className="h-2 w-2 bg-fitness-purple rounded-full"></div>
                <div className="h-2 w-2 bg-fitness-purple rounded-full animation-delay-200"></div>
                <div className="h-2 w-2 bg-fitness-purple rounded-full animation-delay-500"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Generating tips...</p>
            </div>
          )}
          
          {tips && !loading && (
            <div className="bg-gray-50 p-4 rounded-md mt-4 animate-fade-in whitespace-pre-line">
              <h3 className="font-medium text-fitness-purple mb-2">Tips for {role.charAt(0).toUpperCase() + role.slice(1)}s</h3>
              <div className="text-sm">
                {tips}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CricketTipsSection;
