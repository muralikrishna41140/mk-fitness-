
// Gemini API service for AI-powered features
// Note: In a production app, API keys should be stored in environment variables or 
// managed through Supabase Edge Functions

const GEMINI_API_KEY = "AIzaSyBEpyWyglnvNUV4Nw3R2bpFoh-XRDpVeP8";

export async function generateWorkout(
  type: string,
  level: string,
  duration: string,
  equipment: string[]
): Promise<string> {
  try {
    // Simulate a Gemini API call for workout generation
    // In a production app, replace this with actual API call
    console.log(`Generating ${type} workout for ${level} level, ${duration} minutes`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock response
    return `${type.toUpperCase()} WORKOUT - ${level} level (${duration} min)
    
Warm-up (5 min):
• High knees - 30 seconds
• Arm circles - 30 seconds
• Side shuffles - 30 seconds
• Dynamic stretches - 3 min

Main workout:
• Exercise 1: Cricket stance jumps - 3 sets of 10 reps
• Exercise 2: Bat swing with resistance band - 3 sets of 12 reps
• Exercise 3: Single-leg balance drills - 2 sets of 45 seconds each side
• Exercise 4: Lateral lunges - 3 sets of 10 each side
• Exercise 5: Rotational core exercises - 3 sets of 15 reps

Cool down:
• Static stretching - 5 minutes
• Breathing exercises - 2 minutes

Equipment needed: ${equipment.join(', ')}
    `;
  } catch (error) {
    console.error('Error generating workout:', error);
    throw new Error('Failed to generate workout');
  }
}

export async function generateDietPlan(
  dietType: string,
  calories: number,
  includeSnacks: boolean,
  preferences: string[]
): Promise<string> {
  try {
    // Simulate a Gemini API call for diet plan generation
    // In a production app, replace this with actual API call
    console.log(`Generating ${dietType} diet plan with ${calories} calories`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock response
    return `${dietType.toUpperCase()} DIET PLAN - ${calories} calories
    
Breakfast:
• Protein-rich eggs with whole grain toast
• Fresh fruit and Greek yogurt
${preferences.includes('Nuts') ? '• Mixed nuts for added protein' : ''}

Lunch:
• Grilled ${preferences.includes('Chicken') ? 'chicken' : preferences.includes('Fish') ? 'fish' : 'tofu'} salad with mixed greens
• Quinoa or brown rice
• Avocado for healthy fats

${includeSnacks ? 'Afternoon Snack:\n• Protein shake\n• Fresh fruit or veggie sticks' : ''}

Dinner:
• Lean protein (${preferences.join(' or ')})
• Steamed vegetables
• Complex carbohydrates

Hydration:
• 3-4 liters of water throughout the day
• Electrolyte drinks during intense training

Supplements:
• Protein: 1.6-2g per kg of bodyweight daily
• Consider multivitamin, omega-3, and magnesium
    `;
  } catch (error) {
    console.error('Error generating diet plan:', error);
    throw new Error('Failed to generate diet plan');
  }
}

export async function getCricketTips(playerRole: string): Promise<string> {
  try {
    // Simulate a Gemini API call for cricket tips
    console.log(`Getting cricket tips for ${playerRole}`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock response based on player role
    switch(playerRole.toLowerCase()) {
      case 'batsman':
        return `BATTING TIPS:
• Footwork: Practice forward defense and back foot shots daily
• Balance: Maintain a stable base when playing shots
• Head Position: Keep your head still and eyes level during stroke play
• Grip: Ensure your grip is firm but not tight
• Timing: Focus on timing rather than power - the sweet spot is key`;
        
      case 'bowler':
        return `BOWLING TIPS:
• Run-up: Develop a consistent, rhythmical run-up
• Action: Maintain a high arm action for better accuracy
• Focus: Target a spot, not the batsman
• Follow-through: Complete your action with a proper follow-through
• Variations: Practice subtle changes in pace and seam position`;
        
      case 'wicketkeeper':
        return `WICKET-KEEPING TIPS:
• Stance: Stay low with weight on balls of feet
• Hands: Keep hands relaxed and in front of body
• Movement: Move late and decisively with the ball
• Concentration: Focus on each delivery for the entire match
• Diving: Practice safe diving techniques to both sides`;
        
      case 'allrounder':
        return `ALL-ROUNDER TIPS:
• Balance: Split practice time between batting and bowling
• Recovery: Pay extra attention to recovery between sessions
• Role Clarity: Define your primary skill in different match situations
• Fitness: Higher fitness requirements - focus on endurance
• Mental Approach: Develop separate mental routines for batting and bowling`;
        
      default:
        return `CRICKET GENERAL TIPS:
• Fitness: Focus on explosive power, endurance, and mobility
• Nutrition: Carb-loading before matches, protein for recovery
• Mental Skills: Develop routines for pressure situations
• Recovery: Use active recovery techniques between intense sessions
• Analysis: Review your performances regularly using video if available`;
    }
  } catch (error) {
    console.error('Error generating cricket tips:', error);
    throw new Error('Failed to generate cricket tips');
  }
}
