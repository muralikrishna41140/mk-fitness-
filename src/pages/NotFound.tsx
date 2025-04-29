
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-fitness-purple">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600">
            Oops! It seems like the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="relative w-full max-w-[240px] h-[240px] mx-auto">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-fitness-purple/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-fitness-orange/10 rounded-full animate-pulse"></div>
          <div className="relative z-10">
            <img 
              src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg" 
              alt="404 Error" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            Maybe you'd like to get back on your fitness journey?
          </p>
          <Button asChild className="bg-fitness-purple hover:bg-fitness-purple/90">
            <Link to="/">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
