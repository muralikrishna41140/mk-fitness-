
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Award, Brain, Check, ChevronRight, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const cricketQuizQuestions: QuizQuestion[] = [
  {
    question: "Which muscle group is most important for a fast bowler's delivery?",
    options: [
      "Biceps",
      "Core and lower back",
      "Chest",
      "Shoulders"
    ],
    correctAnswer: 1,
    explanation: "The core and lower back muscles generate the power and stability needed for a fast bowling action. These muscles transfer energy from the legs through the torso to the bowling arm."
  },
  {
    question: "What's the recommended daily protein intake for a cricket player during tournament season?",
    options: [
      "0.8g per kg of body weight",
      "1.2-1.6g per kg of body weight", 
      "2.0-2.5g per kg of body weight",
      "3.0g per kg of body weight"
    ],
    correctAnswer: 1,
    explanation: "Cricket players typically need 1.2-1.6g of protein per kg of body weight during tournament season to support muscle recovery and maintenance."
  },
  {
    question: "Which type of training is most effective for improving a batsman's reaction time?",
    options: [
      "Long-distance running",
      "Heavy weightlifting",
      "Plyometric exercises",
      "High-intensity interval training with visual stimuli"
    ],
    correctAnswer: 3,
    explanation: "High-intensity interval training that incorporates visual stimuli helps improve a batsman's reaction time by training both the cardiovascular system and the neuromuscular connections needed for quick responses."
  },
  {
    question: "What's the most effective recovery method for fast bowlers between matches?",
    options: [
      "Complete rest with no activity",
      "Ice baths followed by active recovery",
      "Heavy strength training",
      "Long-duration cardio"
    ],
    correctAnswer: 1,
    explanation: "Ice baths help reduce inflammation, while active recovery (light movement) promotes blood flow and clears metabolic waste. This combination is ideal for fast bowlers who put significant stress on their bodies."
  },
  {
    question: "Which supplement has been scientifically proven to benefit cricket players during long matches?",
    options: [
      "Pre-workout stimulants",
      "Branch chain amino acids (BCAAs)",
      "Electrolyte drinks",
      "Fat burners"
    ],
    correctAnswer: 2,
    explanation: "Electrolyte drinks have been proven to help cricket players maintain hydration and performance during long matches, especially in hot conditions where significant sweating occurs."
  }
];

const CricketIQQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    
    if (optionIndex === cricketQuizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
      toast.success("Correct answer!");
    } else {
      toast("Not quite right!");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < cricketQuizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const getBadge = () => {
    const percentage = (score / cricketQuizQuestions.length) * 100;
    if (percentage >= 80) return "Cricket Genius";
    if (percentage >= 60) return "Cricket Expert";
    if (percentage >= 40) return "Cricket Enthusiast";
    return "Cricket Novice";
  };

  if (!quizStarted) {
    return (
      <Card className="hover-card">
        <CardHeader className="bg-gradient-to-r from-fitness-purple/20 to-fitness-blue/20">
          <CardTitle className="flex items-center">
            <Brain className="h-5 w-5 mr-2 text-fitness-purple" />
            Cricket IQ Quiz
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="space-y-4">
            <p>Test your cricket fitness knowledge with this quick quiz! Answer questions about training, recovery, nutrition and more.</p>
            
            <div className="flex items-center gap-2 text-sm mt-4">
              <Badge className="bg-fitness-purple">5 Questions</Badge>
              <Badge variant="outline">Fitness & Cricket</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-fitness-purple hover:bg-fitness-purple/90"
            onClick={startQuiz}
          >
            Start Quiz <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (showResults) {
    return (
      <Card className="hover-card">
        <CardHeader className="bg-gradient-to-r from-fitness-purple/20 to-fitness-blue/20">
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2 text-fitness-purple" />
            Quiz Results
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-4 bg-fitness-purple/10 rounded-full">
              <Award className="h-10 w-10 text-fitness-purple" />
            </div>
            
            <h3 className="text-xl font-bold">{getBadge()}</h3>
            
            <div className="space-y-2">
              <p className="text-2xl font-bold">{score} / {cricketQuizQuestions.length}</p>
              <Progress value={(score / cricketQuizQuestions.length) * 100} className="h-2" />
              <p className="text-sm text-gray-500">
                You got {score} out of {cricketQuizQuestions.length} questions correct!
              </p>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-2">View Explanations</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Quiz Explanations</DialogTitle>
                  <DialogDescription>Learn from your quiz answers</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                  {cricketQuizQuestions.map((q, index) => (
                    <div key={index} className="p-3 border rounded-md">
                      <p className="font-medium">{index + 1}. {q.question}</p>
                      <p className="text-sm text-green-600 mt-1">
                        <span className="font-medium">Answer:</span> {q.options[q.correctAnswer]}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">{q.explanation}</p>
                    </div>
                  ))}
                </div>
                <DialogFooter>
                  <Button 
                    className="bg-fitness-purple hover:bg-fitness-purple/90"
                  >
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-fitness-purple hover:bg-fitness-purple/90"
            onClick={handleRestartQuiz}
          >
            Try Again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const currentQuestion = cricketQuizQuestions[currentQuestionIndex];

  return (
    <Card className="hover-card">
      <CardHeader className="bg-gradient-to-r from-fitness-purple/20 to-fitness-blue/20">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Cricket IQ Quiz</CardTitle>
          <Badge variant="outline">{currentQuestionIndex + 1} / {cricketQuizQuestions.length}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6 pb-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full justify-start text-left h-auto py-3 ${
                    selectedOption === index
                      ? index === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-300'
                        : 'bg-red-100 border-red-300'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                >
                  <div className="flex items-center">
                    {isAnswered && index === currentQuestion.correctAnswer && (
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                    )}
                    {isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer && (
                      <X className="h-4 w-4 text-red-600 mr-2" />
                    )}
                    <span>{option}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
          
          {isAnswered && (
            <div className="animate-fade-in p-3 bg-gray-50 rounded-md text-sm">
              <p className="font-medium text-fitness-purple">Explanation:</p>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <div className="w-full flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500">
              Score: {score} / {currentQuestionIndex + 1}
            </span>
          </div>
          <Button
            onClick={handleNextQuestion}
            disabled={!isAnswered}
            className={`bg-fitness-purple hover:bg-fitness-purple/90 ${!isAnswered ? 'opacity-50' : ''}`}
          >
            {currentQuestionIndex < cricketQuizQuestions.length - 1 ? 'Next Question' : 'See Results'}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CricketIQQuiz;
