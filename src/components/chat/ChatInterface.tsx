
import React, { useState } from 'react';
import { Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface Message {
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const isAi = message.sender === 'ai';
  
  return (
    <div className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex ${isAi ? 'flex-row' : 'flex-row-reverse'} max-w-[85%]`}>
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${isAi ? 'bg-fitness-purple text-white mr-3' : 'bg-gray-200 ml-3'}`}>
          {isAi ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M12 8V4H8"></path>
              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
              <path d="M2 14h2"></path>
              <path d="M20 14h2"></path>
              <path d="M15 13v2"></path>
              <path d="M9 13v2"></path>
            </svg>
          ) : (
            <User className="h-4 w-4" />
          )}
        </div>
        <div className={`py-2 px-4 rounded-2xl ${
          isAi 
            ? 'bg-white border border-gray-200 text-gray-800' 
            : 'bg-fitness-purple text-white'
        }`}>
          <p className="text-sm">{message.content}</p>
          <div className={`text-xs mt-1 ${isAi ? 'text-gray-500' : 'text-white/70'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickPrompt: React.FC<{ text: string; onClick: (text: string) => void }> = ({ text, onClick }) => {
  return (
    <Button 
      variant="outline" 
      className="text-xs py-1 px-2 h-auto whitespace-normal text-left justify-start" 
      onClick={() => onClick(text)}
    >
      {text}
    </Button>
  );
};

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! I'm your AI fitness coach. How can I help you today with your fitness, nutrition, or sports training questions?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (content: string = input) => {
    if (!content.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      content,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);
    
    // Simulate AI response - in a real app, this would call the Gemini API
    setTimeout(() => {
      const aiMessage: Message = {
        content: `Thanks for your message about "${content}". In a real app, this would be processed by the Gemini API to give you personalized fitness advice. This is just a placeholder response for the demo.`,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  const handleQuickPrompt = (text: string) => {
    sendMessage(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <Tabs defaultValue="chat" className="flex flex-col h-full">
        <div className="px-4 py-2 border-b">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="explore">Explore</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="chat" className="flex-1 flex flex-col overflow-hidden m-0 border-none">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {loading && (
              <div className="flex justify-start mb-4">
                <div className="flex flex-row max-w-[85%]">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-fitness-purple text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                  </div>
                  <div className="py-2 px-4 rounded-2xl bg-white border border-gray-200 text-gray-800">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-fitness-purple rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-fitness-purple rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="h-2 w-2 bg-fitness-purple rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t bg-white">
            <div className="mb-3 flex flex-wrap gap-2">
              <QuickPrompt text="Create a home workout with no equipment" onClick={handleQuickPrompt} />
              <QuickPrompt text="Recommend a meal plan for weight loss" onClick={handleQuickPrompt} />
              <QuickPrompt text="Cricket training tips for beginners" onClick={handleQuickPrompt} />
            </div>
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Textarea 
                placeholder="Ask anything about fitness, nutrition, or sports..." 
                className="resize-none min-h-[44px]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={loading || !input.trim()}
                className="bg-fitness-purple hover:bg-fitness-purple/90 h-[44px] w-[44px]"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </TabsContent>
        
        <TabsContent value="explore" className="m-0 p-4 flex-1 overflow-auto">
          <div className="grid gap-4">
            <h3 className="text-lg font-medium">Popular Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['Weight Loss', 'Muscle Building', 'Sports Training', 'Nutrition', 'Recovery', 'Mental Fitness'].map((topic) => (
                <Button 
                  key={topic} 
                  variant="outline" 
                  className="justify-start h-auto py-4"
                  onClick={() => {
                    setMessages([...messages, {
                      content: `Tell me about ${topic}`,
                      sender: 'user',
                      timestamp: new Date()
                    }]);
                    toast(`Loading information about ${topic}...`);
                  }}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{topic}</span>
                    <span className="text-xs text-gray-500">Get expert advice</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ChatInterface;
