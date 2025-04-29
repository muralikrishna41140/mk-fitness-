
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import MealPlanCard from '@/components/diet/MealPlanCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Wand2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { generateDietPlan } from '@/services/geminiApi';
import { Checkbox } from '@/components/ui/checkbox';

const Diet: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dietType, setDietType] = useState('balanced');
  const [calorieGoal, setCalorieGoal] = useState('2000');
  const [includeSnacks, setIncludeSnacks] = useState(true);
  const [foodPreferences, setFoodPreferences] = useState<string[]>([]);
  const [generatedDietPlan, setGeneratedDietPlan] = useState('');

  const handleFoodPreferenceChange = (item: string) => {
    if (foodPreferences.includes(item)) {
      setFoodPreferences(foodPreferences.filter(i => i !== item));
    } else {
      setFoodPreferences([...foodPreferences, item]);
    }
  };

  const handleGenerateDietPlan = async () => {
    setLoading(true);
    try {
      // Update to match the service function signature
      const response = await generateDietPlan(dietType, parseInt(calorieGoal), includeSnacks, foodPreferences);
      setGeneratedDietPlan(response);
      toast.success('Diet plan generated successfully!');
    } catch (error) {
      console.error('Error generating diet plan:', error);
      toast.error('Failed to generate diet plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Diet Plans</h1>
            <p className="text-gray-500">Explore personalized diet plans for a healthier you</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-fitness-purple hover:bg-fitness-purple/90 w-full md:w-auto">
                <Wand2 className="h-4 w-4 mr-2" />
                Generate Diet Plan
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create Custom Diet Plan</DialogTitle>
                <DialogDescription>
                  Tell us your dietary preferences and we'll create a personalized diet plan just for you.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="dietType">Diet Type</Label>
                  <Select value={dietType} onValueChange={setDietType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a diet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="lowcarb">Low Carb</SelectItem>
                      <SelectItem value="highprotein">High Protein</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="calorieGoal">Calorie Goal (per day)</Label>
                  <Select value={calorieGoal} onValueChange={setCalorieGoal}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select calorie goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1500">1500 calories</SelectItem>
                      <SelectItem value="2000">2000 calories</SelectItem>
                      <SelectItem value="2500">2500 calories</SelectItem>
                      <SelectItem value="3000">3000 calories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="includeSnacks"
                    checked={includeSnacks}
                    onCheckedChange={(checked) => setIncludeSnacks(!!checked)}
                  />
                  <Label htmlFor="includeSnacks">Include Snacks</Label>
                </div>

                <div className="grid gap-2">
                  <Label>Food Preferences</Label>
                  <div className="flex flex-wrap gap-2">
                    {['Chicken', 'Fish', 'Vegetables', 'Fruits', 'Nuts', 'Dairy', 'Eggs'].map((item) => (
                      <Button
                        key={item}
                        type="button"
                        variant={foodPreferences.includes(item) ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleFoodPreferenceChange(item)}
                        className={foodPreferences.includes(item) ? "bg-fitness-purple hover:bg-fitness-purple/90" : ""}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                {generatedDietPlan && (
                  <div className="mt-2 p-4 bg-gray-50 rounded-md max-h-40 overflow-y-auto">
                    <p className="text-sm whitespace-pre-line">{generatedDietPlan}</p>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={handleGenerateDietPlan}
                  disabled={loading}
                  className="bg-fitness-purple hover:bg-fitness-purple/90"
                >
                  {loading ? "Generating..." : "Generate Diet Plan"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input placeholder="Search diet plans..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="balanced">Balanced</TabsTrigger>
            <TabsTrigger value="lowcarb">Low Carb</TabsTrigger>
            <TabsTrigger value="highprotein">High Protein</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MealPlanCard
                title="Balanced Meal Plan"
                calories={2000}
                protein="120g"
                carbs="250g"
                fat="80g"
                imageUrl="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                dietType="Balanced"
              />
              <MealPlanCard
                title="Low Carb Meal Plan"
                calories={1800}
                protein="140g"
                carbs="50g"
                fat="120g"
                imageUrl="https://images.unsplash.com/photo-1519708227418-c8b39e2a042b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                dietType="Low Carb"
              />
              <MealPlanCard
                title="High Protein Meal Plan"
                calories={2200}
                protein="200g"
                carbs="200g"
                fat="80g"
                imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                dietType="High Protein"
              />
            </div>
          </TabsContent>

          <TabsContent value="balanced" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MealPlanCard
                title="Balanced Meal Plan"
                calories={2000}
                protein="120g"
                carbs="250g"
                fat="80g"
                imageUrl="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                dietType="Balanced"
              />
            </div>
          </TabsContent>

          <TabsContent value="lowcarb" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MealPlanCard
                title="Low Carb Meal Plan"
                calories={1800}
                protein="140g"
                carbs="50g"
                fat="120g"
                imageUrl="https://images.unsplash.com/photo-1519708227418-c8b39e2a042b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                dietType="Low Carb"
              />
            </div>
          </TabsContent>

          <TabsContent value="highprotein" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MealPlanCard
                title="High Protein Meal Plan"
                calories={2200}
                protein="200g"
                carbs="200g"
                fat="80g"
                imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                dietType="High Protein"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Diet;
