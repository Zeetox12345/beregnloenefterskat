import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import SalaryPage from "./pages/SalaryPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import JobGamePage from "./pages/JobGamePage";
import FleksjobPage from "./pages/FleksjobPage";
// Job pages will be imported once they are created
// import DagplejerPage from "./pages/DagplejerPage";
// import VaernepligtPage from "./pages/VaernepligtPage";
// import SuUdeboendePage from "./pages/SuUdeboendePage";
// import PaedagogmedhjaelperPage from "./pages/PaedagogmedhjaelperPage";

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
            {/* These routes will be uncommented once the pages are created */}
            {/* <Route path="/jobs/dagplejer" element={<DagplejerPage />} /> */}
            {/* <Route path="/jobs/vaernepligt" element={<VaernepligtPage />} /> */}
            {/* <Route path="/jobs/su-udeboende" element={<SuUdeboendePage />} /> */}
            {/* <Route path="/jobs/paedagogmedhjaelper" element={<PaedagogmedhjaelperPage />} /> */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
