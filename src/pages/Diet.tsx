import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/layout/PageLayout';
import MealPlanCard from '@/components/diet/MealPlanCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Filter, Wand2 } from 'lucide-react';
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
  const [preferences, setPreferences] = useState('balanced');
  const [goal, setGoal] = useState('maintain');
  const [allergies, setAllergies] = useState<string[]>([]);
  const [generatedPlan, setGeneratedPlan] = useState('');

  const handleAllergiesChange = (item: string) => {
    if (allergies.includes(item)) {
      setAllergies(allergies.filter(i => i !== item));
    } else {
      setAllergies([...allergies, item]);
    }
  };

  const handleGeneratePlan = async () => {
    setLoading(true);
    try {
      const response = await generateDietPlan(preferences, goal, allergies);
      setGeneratedPlan(response);
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
      <Helmet>
        <title>Diet Plans | FitForge</title>
      </Helmet>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Meal Plans</h1>
            <p className="text-gray-500">Personalized nutrition for your health goals</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-fitness-purple hover:bg-fitness-purple/90 w-full md:w-auto">
                <Wand2 className="h-4 w-4 mr-2" />
                Generate Meal Plan
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create Custom Meal Plan</DialogTitle>
                <DialogDescription>
                  Tell us your dietary preferences and we'll create a personalized meal plan.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="preferences">Dietary Preferences</Label>
                  <Select value={preferences} onValueChange={setPreferences}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="keto">Keto</SelectItem>
                      <SelectItem value="paleo">Paleo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="goal">Nutrition Goal</Label>
                  <Select value={goal} onValueChange={setGoal}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weightloss">Weight Loss</SelectItem>
                      <SelectItem value="maintain">Maintain Weight</SelectItem>
                      <SelectItem value="muscle">Build Muscle</SelectItem>
                      <SelectItem value="energy">Increase Energy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label>Allergies & Restrictions</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Gluten', 'Dairy', 'Nuts', 'Eggs', 'Soy', 'Seafood'].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`allergy-${item}`} 
                          checked={allergies.includes(item)} 
                          onCheckedChange={() => handleAllergiesChange(item)}
                        />
                        <label 
                          htmlFor={`allergy-${item}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {generatedPlan && (
                  <div className="mt-2 p-4 bg-gray-50 rounded-md max-h-40 overflow-y-auto">
                    <p className="text-sm whitespace-pre-line">{generatedPlan}</p>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button 
                  type="submit" 
                  onClick={handleGeneratePlan} 
                  disabled={loading}
                  className="bg-fitness-purple hover:bg-fitness-purple/90"
                >
                  {loading ? "Generating..." : "Generate Meal Plan"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="flex justify-end mb-4">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="dinner">Dinner</TabsTrigger>
            <TabsTrigger value="snacks">Snacks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MealPlanCard
                title="Avocado Toast with Eggs"
                description="Whole grain toast with mashed avocado, poached eggs, and a sprinkle of red pepper flakes"
                calories={350}
                time="15"
                imageUrl="https://img.freepik.com/free-photo/poached-egg-sandwich-with-avocado_1127-336.jpg?size=626&ext=jpg"
                type="breakfast"
                diet="balanced"
              />
              <MealPlanCard
                title="Quinoa Buddha Bowl"
                description="Mixed quinoa bowl with roasted vegetables, chickpeas, and tahini dressing"
                calories={420}
                time="25"
                imageUrl="https://img.freepik.com/free-photo/buddha-bowl-with-chickpea-avocado-quinoa-sweet-potato-fresh-lettuce-nuts_1150-37963.jpg?size=626&ext=jpg"
                type="lunch"
                diet="vegetarian"
              />
              <MealPlanCard
                title="Baked Salmon with Veggies"
                description="Herb-crusted salmon fillet with steamed seasonal vegetables and lemon"
                calories={480}
                time="30"
                imageUrl="https://img.freepik.com/free-photo/salmon-garnished-with-asparagus-tomatoes-spinach-overhead-view_23-2148221956.jpg?size=626&ext=jpg"
                type="dinner"
                diet="paleo"
              />
              <MealPlanCard
                title="Greek Yogurt Parfait"
                description="Layered Greek yogurt with fresh berries, honey, and granola"
                calories={220}
                time="5"
                imageUrl="https://img.freepik.com/free-photo/tasty-homemade-breakfast-granola-with-greek-yogurt-berry-fruits-honey-glass-jar_1150-43588.jpg?size=626&ext=jpg"
                type="snack"
                diet="balanced"
              />
              <MealPlanCard
                title="Chicken & Avocado Wrap"
                description="Grilled chicken strips with avocado, mixed greens, and whole grain wrap"
                calories={380}
                time="10"
                imageUrl="https://img.freepik.com/free-photo/chicken-wrap-with-vegetables-tortilla_2829-14395.jpg?size=626&ext=jpg"
                type="lunch"
                diet="balanced"
              />
              <MealPlanCard
                title="Vegan Lentil Soup"
                description="Hearty lentil soup with carrots, celery, onions, and aromatic spices"
                calories={320}
                time="40"
                imageUrl="https://img.freepik.com/free-photo/lentil-soup-with-vegetables_1127-100.jpg?size=626&ext=jpg"
                type="dinner"
                diet="vegan"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="breakfast" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MealPlanCard
                title="Avocado Toast with Eggs"
                description="Whole grain toast with mashed avocado, poached eggs, and a sprinkle of red pepper flakes"
                calories={350}
                time="15"
                imageUrl="https://img.freepik.com/free-photo/poached-egg-sandwich-with-avocado_1127-336.jpg?size=626&ext=jpg"
                type="breakfast"
                diet="balanced"
              />
            </div>
          </TabsContent>
          
          {/* Other tabs content would be similar */}
          <TabsContent value="lunch" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MealPlanCard
                title="Quinoa Buddha Bowl"
                description="Mixed quinoa bowl with roasted vegetables, chickpeas, and tahini dressing"
                calories={420}
                time="25"
                imageUrl="https://img.freepik.com/free-photo/buddha-bowl-with-chickpea-avocado-quinoa-sweet-potato-fresh-lettuce-nuts_1150-37963.jpg?size=626&ext=jpg"
                type="lunch"
                diet="vegetarian"
              />
              <MealPlanCard
                title="Chicken & Avocado Wrap"
                description="Grilled chicken strips with avocado, mixed greens, and whole grain wrap"
                calories={380}
                time="10"
                imageUrl="https://img.freepik.com/free-photo/chicken-wrap-with-vegetables-tortilla_2829-14395.jpg?size=626&ext=jpg"
                type="lunch"
                diet="balanced"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="dinner" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MealPlanCard
                title="Baked Salmon with Veggies"
                description="Herb-crusted salmon fillet with steamed seasonal vegetables and lemon"
                calories={480}
                time="30"
                imageUrl="https://img.freepik.com/free-photo/salmon-garnished-with-asparagus-tomatoes-spinach-overhead-view_23-2148221956.jpg?size=626&ext=jpg"
                type="dinner"
                diet="paleo"
              />
              <MealPlanCard
                title="Vegan Lentil Soup"
                description="Hearty lentil soup with carrots, celery, onions, and aromatic spices"
                calories={320}
                time="40"
                imageUrl="https://img.freepik.com/free-photo/lentil-soup-with-vegetables_1127-100.jpg?size=626&ext=jpg"
                type="dinner"
                diet="vegan"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="snacks" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MealPlanCard
                title="Greek Yogurt Parfait"
                description="Layered Greek yogurt with fresh berries, honey, and granola"
                calories={220}
                time="5"
                imageUrl="https://img.freepik.com/free-photo/tasty-homemade-breakfast-granola-with-greek-yogurt-berry-fruits-honey-glass-jar_1150-43588.jpg?size=626&ext=jpg"
                type="snack"
                diet="balanced"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Diet;
