
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, Dumbbell, Apple, BookOpen, MessageSquare, Activity } from 'lucide-react';

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon: Icon, label }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `nav-item ${isActive ? 'active' : ''} flex items-center gap-3 rounded-lg px-3 py-2 transition-all`
      }
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 h-screen sticky top-0 p-4 bg-white/50 backdrop-blur-sm">
      <div className="flex-1 py-6 flex flex-col gap-1">
        <p className="text-xs font-semibold text-gray-500 px-3 py-2 uppercase">Main Menu</p>
        <SidebarLink to="/dashboard" icon={Home} label="Dashboard" />
        <SidebarLink to="/challenges" icon={Trophy} label="Challenges" />
        <SidebarLink to="/workouts" icon={Dumbbell} label="Workouts" />
        <SidebarLink to="/diet" icon={Apple} label="Diet Plans" />
        <SidebarLink to="/blogs" icon={BookOpen} label="Fitness Blog" />
        <SidebarLink to="/chat" icon={MessageSquare} label="AI Coach" />
        <SidebarLink to="/cricket" icon={Activity} label="Cricket Zone" />
      </div>
      
      <div className="mt-auto">
        <div className="bg-gradient-to-r from-fitness-purple to-fitness-blue rounded-xl p-4 text-white">
          <h3 className="font-bold">Upgrade to Pro</h3>
          <p className="text-xs mt-1 text-white/80">Get personalized plans & premium features</p>
          <button className="mt-3 bg-white text-fitness-purple px-3 py-1 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
