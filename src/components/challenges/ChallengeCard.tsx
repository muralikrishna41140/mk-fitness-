
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

interface ChallengeCardProps {
  title: string;
  description: string;
  participants: number;
  progress: number;
  daysLeft: number;
  imageUrl: string;
  type: 'solo' | 'group' | 'friend';
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  description,
  participants,
  progress,
  daysLeft,
  imageUrl,
  type
}) => {
  const getBadgeVariant = () => {
    switch (type) {
      case 'solo':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'group':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'friend':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'solo':
        return 'Solo Challenge';
      case 'group':
        return 'Group Challenge';
      case 'friend':
        return 'Friend Challenge';
      default:
        return 'Challenge';
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
        <Badge className={`absolute top-3 right-3 ${getBadgeVariant()}`}>
          {getTypeLabel()}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-1">
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users className="h-4 w-4 mr-1" />
          <span>{participants} participants</span>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-value"
              style={{ 
                width: `${progress}%`,
                backgroundColor: `${progress < 30 ? '#F97316' : progress < 70 ? '#0EA5E9' : '#9b87f5'}`
              }}
            ></div>
          </div>
          <div className="flex justify-end">
            <span className="text-xs text-gray-500">{daysLeft} days left</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-fitness-purple hover:bg-fitness-purple/90">
          Continue Challenge
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
