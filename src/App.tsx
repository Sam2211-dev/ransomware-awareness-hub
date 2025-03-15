
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layouts
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Introduction from "./pages/Introduction";
import WhyEmerging from "./pages/WhyEmerging";
import HowWorks from "./pages/HowWorks";
import UserEducation from "./pages/UserEducation";
import RansomwareTypes from "./pages/RansomwareTypes";
import RansomwareHistory from "./pages/RansomwareHistory";
import VictimPerspective from "./pages/VictimPerspective";
import Mitigation from "./pages/Mitigation";
import Prevention from "./pages/Prevention";
import CybercrimeAwareness from "./pages/CybercrimeAwareness";
import Download from "./pages/Download";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Introduction Routes */}
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/introduction/why-emerging" element={<WhyEmerging />} />
            <Route path="/introduction/how-works" element={<HowWorks />} />
            
            {/* User Education Routes */}
            <Route path="/user-education" element={<UserEducation />} />
            <Route path="/user-education/types" element={<RansomwareTypes />} />
            <Route path="/user-education/history" element={<RansomwareHistory />} />
            <Route path="/user-education/victim-perspective" element={<VictimPerspective />} />
            
            {/* Mitigation Routes */}
            <Route path="/mitigation" element={<Mitigation />} />
            <Route path="/mitigation/prevention" element={<Prevention />} />
            <Route path="/mitigation/cybercrime-awareness" element={<CybercrimeAwareness />} />
            
            {/* Download Route */}
            <Route path="/download" element={<Download />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
