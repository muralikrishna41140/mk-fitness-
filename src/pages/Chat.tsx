
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ChatInterface from '@/components/chat/ChatInterface';

const Chat: React.FC = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">AI Fitness Coach</h1>
          <p className="text-gray-500">Get personalized fitness and nutrition advice powered by Gemini AI</p>
        </div>
        
        <div className="h-[calc(100vh-220px)]">
          <ChatInterface />
        </div>
      </div>
    </PageLayout>
  );
};

export default Chat;
