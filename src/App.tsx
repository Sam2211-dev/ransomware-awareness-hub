
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

// Ransomware Type Detail Pages
import JigsawRansomware from "./pages/ransomware-types/JigsawRansomware";
import WannaCryRansomware from "./pages/ransomware-types/WannaCryRansomware";
import BadRabbitRansomware from "./pages/ransomware-types/BadRabbitRansomware";
import MazeRansomware from "./pages/ransomware-types/MazeRansomware";
import CryptoLockerRansomware from "./pages/ransomware-types/CryptoLockerRansomware";
import GoldenEyeRansomware from "./pages/ransomware-types/GoldenEyeRansomware";

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
            
            {/* Ransomware Type Detail Routes */}
            <Route path="/user-education/types/jigsaw" element={<JigsawRansomware />} />
            <Route path="/user-education/types/wannacry" element={<WannaCryRansomware />} />
            <Route path="/user-education/types/badrabbit" element={<BadRabbitRansomware />} />
            <Route path="/user-education/types/maze" element={<MazeRansomware />} />
            <Route path="/user-education/types/cryptolocker" element={<CryptoLockerRansomware />} />
            <Route path="/user-education/types/goldeneye" element={<GoldenEyeRansomware />} />
            
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
