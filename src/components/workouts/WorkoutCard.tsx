
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Flame, Share2, Bookmark, PlayCircle } from 'lucide-react';

interface WorkoutCardProps {
  title: string;
  duration: number;
  calories: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  imageUrl: string;
  exercises: number;
  category: string;
  saved?: boolean;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  duration,
  calories,
  level,
  imageUrl,
  exercises,
  category,
  saved = false
}) => {
  const getLevelBadge = () => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <Card className="overflow-hidden hover-card">
      <div className="relative h-48">
        <img 
          src={imageUrl}
          alt={title} 
          className="w-full h-full object-cover"
        />
        <Badge className={`absolute top-3 right-3 ${getLevelBadge()}`}>
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </Badge>
        <Badge className="absolute top-3 left-3 bg-fitness-purple text-white hover:bg-fitness-purple/90">
          {category}
        </Badge>
        <div className="absolute bottom-3 right-3">
          <Button variant="secondary" size="sm" className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
            <PlayCircle className="h-4 w-4 mr-1" />
            Preview
          </Button>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pb-3">
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gray-500" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center">
            <Flame className="h-4 w-4 mr-1 text-gray-500" />
            <span>{calories} cal</span>
          </div>
          <div>
            <span>{exercises} exercises</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="flex-1 mr-2">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button className="flex-1 bg-fitness-purple hover:bg-fitness-purple/90">
          <PlayCircle className="h-4 w-4 mr-2" />
          Start
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
