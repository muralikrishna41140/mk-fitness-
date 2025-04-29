
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, Dumbbell, Apple, BookOpen, MessageSquare, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label, onClick }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex flex-col items-center justify-center py-2 ${isActive ? 'text-fitness-purple' : 'text-gray-500'}`
      }
      onClick={onClick}
    >
      <Icon className="h-6 w-6" />
      <span className="text-xs mt-1">{label}</span>
    </NavLink>
  );
};

const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-5 h-16">
          <NavItem to="/dashboard" icon={Home} label="Home" />
          <NavItem to="/challenges" icon={Trophy} label="Challenges" />
          <NavItem to="/workouts" icon={Dumbbell} label="Workouts" />
          <NavItem to="/diet" icon={Apple} label="Diet" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="flex flex-col items-center justify-center h-full rounded-none">
                <Menu className="h-6 w-6 text-gray-500" />
                <span className="text-xs mt-1 text-gray-500">More</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="py-6 flex flex-col gap-2">
                <h2 className="text-lg font-semibold mb-2">Menu</h2>
                <NavLink 
                  to="/blogs" 
                  className="flex items-center gap-3 py-2"
                  onClick={handleNavClick}
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Fitness Blog</span>
                </NavLink>
                <NavLink 
                  to="/chat" 
                  className="flex items-center gap-3 py-2"
                  onClick={handleNavClick}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>AI Coach</span>
                </NavLink>
                <div className="mt-6">
                  <div className="bg-gradient-to-r from-fitness-purple to-fitness-blue rounded-xl p-4 text-white">
                    <h3 className="font-bold">Upgrade to Pro</h3>
                    <p className="text-xs mt-1 text-white/80">Get personalized plans & premium features</p>
                    <button className="mt-3 bg-white text-fitness-purple px-3 py-1 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
