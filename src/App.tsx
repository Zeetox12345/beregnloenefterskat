import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import SalaryPage from "./pages/SalaryPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import JobGamePage from "./pages/JobGamePage";
import FleksjobPage from "./pages/FleksjobPage";
import DagplejerPage from "./pages/DagplejerPage";
import VaernepligtPage from "./pages/VaernepligtPage";
import SUUdeboendePage from "./pages/SUUdeboendePage";
import PaedagogmedhjaelperPage from "./pages/PaedagogmedhjaelperPage";
import KontanthjaelpPage from "./pages/KontanthjaelpPage";
import SOSUHjaelperPage from "./pages/SOSUHjaelperPage";
import KonstabelLoenPage from "./pages/KonstabelLoenPage";
import SOSUAssistentPage from "./pages/SOSUAssistentPage";
// Job pages will be imported once they are created

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/loen/:salary" element={<SalaryPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/spil" element={<JobGamePage />} />
            <Route path="/jobs/fleksjob" element={<FleksjobPage />} />
            <Route path="/jobs/dagplejer" element={<DagplejerPage />} />
            <Route path="/jobs/vaernepligt" element={<VaernepligtPage />} />
            <Route path="/jobs/su-udeboende" element={<SUUdeboendePage />} />
            <Route path="/jobs/paedagogmedhjaelper" element={<PaedagogmedhjaelperPage />} />
            <Route path="/jobs/kontanthjaelp-satser" element={<KontanthjaelpPage />} />
            <Route path="/jobs/sosu-hjaelper" element={<SOSUHjaelperPage />} />
            <Route path="/jobs/konstabel-loen-efter-skat" element={<KonstabelLoenPage />} />
            <Route path="/jobs/sosu-assistent-loen-efter-skat" element={<SOSUAssistentPage />} />
            
            {/* Redirect unwanted pages to the home page */}
            <Route path="/sample-page" element={<Navigate replace to="/" />} />
            <Route path="/category/uncategorized" element={<Navigate replace to="/" />} />
            <Route path="/category/uncategorized/*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
