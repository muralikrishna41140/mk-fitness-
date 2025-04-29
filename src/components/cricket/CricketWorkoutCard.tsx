
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Dumbbell } from 'lucide-react';

interface CricketWorkoutCardProps {
  title: string;
  role: string;
  duration: number;
  equipment: string;
  level: string;
  imageUrl: string;
  exercises: number;
}

const CricketWorkoutCard: React.FC<CricketWorkoutCardProps> = ({
  title,
  role,
  duration,
  equipment,
  level,
  imageUrl,
  exercises,
}) => {
  return (
    <Card className="overflow-hidden hover-card">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge 
            className={`
              ${role === 'Batsman' ? 'bg-fitness-purple' : 
                role === 'Bowler' ? 'bg-fitness-orange' : 
                role === 'Wicket-Keeper' ? 'bg-fitness-blue' :
                'bg-green-500'}
            `}
          >
            {role}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center">
            <Dumbbell className="h-4 w-4 mr-1" />
            <span>{exercises} exercises</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Equipment:</span> {equipment}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="w-full">
          <Badge variant="outline" className="w-full flex justify-center">
            {level}
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CricketWorkoutCard;
