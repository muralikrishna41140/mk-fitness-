
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Utensils, Clock } from 'lucide-react';

interface MealPlanCardProps {
  title: string;
  description: string;
  calories: number;
  time: string;
  imageUrl: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  diet?: 'vegan' | 'vegetarian' | 'keto' | 'paleo' | 'balanced';
}

const MealPlanCard: React.FC<MealPlanCardProps> = ({
  title,
  description,
  calories,
  time,
  imageUrl,
  type,
  diet = 'balanced'
}) => {
  const getTypeColor = () => {
    switch (type) {
      case 'breakfast':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'lunch':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'dinner':
        return 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200';
      case 'snack':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getDietBadge = () => {
    switch (diet) {
      case 'vegan':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'vegetarian':
        return 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200';
      case 'keto':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'paleo':
        return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
      case 'balanced':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
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
        <Badge className={`absolute top-3 left-3 ${getTypeColor()}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
        <Badge className={`absolute top-3 right-3 ${getDietBadge()}`}>
          {diet.charAt(0).toUpperCase() + diet.slice(1)}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="flex justify-between mt-3 text-sm">
          <div className="flex items-center">
            <Utensils className="h-4 w-4 mr-1 text-gray-500" />
            <span>{calories} cal</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gray-500" />
            <span>{time} min</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-fitness-purple hover:bg-fitness-purple/90">
          View Recipe
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealPlanCard;
