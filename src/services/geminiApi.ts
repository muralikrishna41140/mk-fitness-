import { toast } from 'sonner';

// For a real app, we would use this API key through a backend service
// to keep it secure. For demo purposes, it's included here.
const API_KEY = 'AIzaSyBEpyWyglnvNUV4Nw3R2bpFoh-XRDpVeP8';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent';

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export const generateWorkout = async (
  goal: string,
  fitnessLevel: string,
  duration: string,
  equipment: string[]
): Promise<string> => {
  try {
    const prompt = `
      Create a personalized workout plan with the following details:
      - Goal: ${goal}
      - Fitness level: ${fitnessLevel}
      - Available time: ${duration} minutes
      - Available equipment: ${equipment.join(', ') || 'None'}
      
      Format the response as a structured workout routine with:
      1. A brief introduction
      2. Warm-up section (2-3 exercises)
      3. Main workout with exercises, sets, reps, and rest periods
      4. Cool down section (2-3 stretches)
      5. Tips for proper form
      
      Keep it concise but detailed enough for someone to follow along.
    `;
    
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });
    
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    
    const data = await response.json() as GeminiResponse;
    return data.candidates[0].content.parts[0].text;
    
  } catch (error) {
    console.error('Error generating workout:', error);
    toast.error('Failed to generate workout plan. Please try again later.');
    return 'Unable to generate workout at this time. Please try again later.';
  }
};

export const generateDietPlan = async (
  preferences: string,
  goal: string,
  allergies: string[]
): Promise<string> => {
  try {
    const prompt = `
      Create a personalized diet plan with the following details:
      - Dietary preferences: ${preferences}
      - Goal: ${goal}
      - Allergies/restrictions: ${allergies.join(', ') || 'None'}
      
      Format the response as a structured meal plan with:
      1. A brief introduction about nutrition for this goal
      2. Breakfast options (3 alternatives)
      3. Lunch options (3 alternatives)
      4. Dinner options (3 alternatives)
      5. Snacks (2-3 options)
      6. Hydration recommendations
      
      Include approximate calories per meal and keep it realistic and healthy.
    `;
    
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });
    
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    
    const data = await response.json() as GeminiResponse;
    return data.candidates[0].content.parts[0].text;
    
  } catch (error) {
    console.error('Error generating diet plan:', error);
    toast.error('Failed to generate diet plan. Please try again later.');
    return 'Unable to generate diet plan at this time. Please try again later.';
  }
};

export const chatWithAI = async (message: string): Promise<string> => {
  try {
    const prompt = `
      You are a knowledgeable and encouraging fitness assistant. Respond to the following fitness, nutrition, or sports training question with accurate, helpful information. Keep your response friendly and motivating.
      
      Question: ${message}
    `;
    
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });
    
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    
    const data = await response.json() as GeminiResponse;
    return data.candidates[0].content.parts[0].text;
    
  } catch (error) {
    console.error('Error chatting with AI:', error);
    toast.error('Failed to get a response. Please try again later.');
    return 'I apologize, but I am unable to respond at this time. Please try again later.';
  }
};
