
import React from 'react';
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Activity, Flame, TrendingUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: 'activity' | 'flame' | 'trending-up';
  color: 'purple' | 'orange' | 'blue';
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  description, 
  icon, 
  color 
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'activity':
        return <Activity className="h-5 w-5" />;
      case 'flame':
        return <Flame className="h-5 w-5" />;
      case 'trending-up':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <Activity className="h-5 w-5" />;
    }
  };

  const getColorClass = () => {
    switch (color) {
      case 'purple':
        return 'bg-fitness-purple text-white';
      case 'orange':
        return 'bg-fitness-orange text-white';
      case 'blue':
        return 'bg-fitness-blue text-white';
      default:
        return 'bg-fitness-purple text-white';
    }
  };

  return (
    <Card className="hover-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-full ${getColorClass()}`}>
          {getIcon()}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
