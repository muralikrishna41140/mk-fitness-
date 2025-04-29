
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, Dumbbell, Activity } from 'lucide-react';

interface MobileNavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ to, icon: Icon, label }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex flex-col items-center text-[10px] ${isActive ? 'text-fitness-purple' : 'text-gray-400'}`
      }
    >
      <Icon className="h-6 w-6" />
      <span className="mt-1">{label}</span>
    </NavLink>
  );
};

const MobileNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="grid grid-cols-4 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] p-2">
        <MobileNavItem to="/dashboard" icon={Home} label="Home" />
        <MobileNavItem to="/challenges" icon={Trophy} label="Challenges" />
        <MobileNavItem to="/workouts" icon={Dumbbell} label="Workouts" />
        <MobileNavItem to="/cricket" icon={Activity} label="Cricket" />
      </div>
    </div>
  );
};

export default MobileNav;
