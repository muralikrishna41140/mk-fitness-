
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Challenges from "./pages/Challenges";
import Workouts from "./pages/Workouts";
import Diet from "./pages/Diet";
import Blogs from "./pages/Blogs";
import Chat from "./pages/Chat";
import Cricket from "./pages/Cricket";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
