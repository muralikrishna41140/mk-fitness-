
import React from 'react';
import { Activity, Dumbbell, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CricketChatExtensionProps {
  onSendMessage: (text: string) => void;
}

const CricketChatExtension: React.FC<CricketChatExtensionProps> = ({ onSendMessage }) => {
  const cricketQuestions = [
    {
      text: "What's the best warm-up routine before bowling?",
      icon: Activity,
      category: "bowling"
    },
    {
      text: "Exercises to improve batting footwork?",
      icon: Dumbbell,
      category: "batting"
    },
    {
      text: "How to improve fielding reflexes?",
      icon: Star,
      category: "fielding"
    },
    {
      text: "Recovery plan after a cricket match?",
      icon: Calendar,
      category: "recovery"
    }
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-700">Cricket-Specific Questions</h3>
      <div className="flex flex-wrap gap-2">
        {cricketQuestions.map((question, index) => {
          const Icon = question.icon;
          return (
            <Button
              key={index}
              variant="outline"
              className="text-xs py-1 px-2 h-auto whitespace-normal text-left justify-start"
              onClick={() => onSendMessage(question.text)}
            >
              <div className="flex items-center">
                <Icon className="h-3 w-3 mr-2 text-fitness-purple" />
                <span>{question.text}</span>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CricketChatExtension;
