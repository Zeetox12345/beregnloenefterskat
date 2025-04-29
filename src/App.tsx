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
import PaedagogiskAssistentPage from "./pages/PaedagogiskAssistentPage";
import PaedagogPage from "./pages/PaedagogPage";
import EnligForsoergerSUPage from "./pages/EnligForsoergerSUPage";
import SkraldemandLoenPage from "./pages/SkraldemandLoenPage";
import FaengselsbetjentLoenPage from "./pages/FaengselsbetjentLoenPage";
import PolitibetjentLoenPage from "./pages/PolitibetjentLoenPage";
import SocialraadgiverLoenPage from "./pages/SocialraadgiverLoenPage";
import FolkeskolelaererLoenPage from "./pages/FolkeskolelaererLoenPage";
import GymnasielaererLoenPage from "./pages/GymnasielaererLoenPage";
import ElektrikerLoenPage from "./pages/ElektrikerLoenPage";
import TandklinikassistentLoenPage from "./pages/TandklinikassistentLoenPage";
import LastbilchauffeurLoenPage from "./pages/LastbilchauffeurLoenPage";
import PsykologLoenPage from "./pages/PsykologLoenPage";
import ErgoterapeutLoenPage from "./pages/ErgoterapeutLoenPage";
import AdvokatLoenPage from "./pages/AdvokatLoenPage";
import FarmakonomerLoenPage from "./pages/FarmakonomerLoenPage";
import ToemrerLoenPage from "./pages/ToemrerLoenPage";
import FysioterapeutLoenPage from "./pages/FysioterapeutLoenPage";
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
            <Route path="/jobs/paedagogisk-assistent-loen-efter-skat" element={<PaedagogiskAssistentPage />} />
            <Route path="/jobs/paedagog-loen-efter-skat" element={<PaedagogPage />} />
            <Route path="/jobs/enlig-forsoerger-su" element={<EnligForsoergerSUPage />} />
            <Route path="/jobs/skraldemand-loen-efter-skat" element={<SkraldemandLoenPage />} />
            <Route path="/jobs/faengselsbetjent-loen-efter-skat" element={<FaengselsbetjentLoenPage />} />
            <Route path="/jobs/politibetjent-loen-efter-skat" element={<PolitibetjentLoenPage />} />
            <Route path="/jobs/socialraadgiver-loen-efter-skat" element={<SocialraadgiverLoenPage />} />
            <Route path="/jobs/folkeskolelaerer-loen-efter-skat" element={<FolkeskolelaererLoenPage />} />
            <Route path="/jobs/gymnasielaerer-loen-efter-skat" element={<GymnasielaererLoenPage />} />
            <Route path="/jobs/elektriker-loen-efter-skat" element={<ElektrikerLoenPage />} />
            <Route path="/jobs/tandklinikassistent-loen-efter-skat" element={<TandklinikassistentLoenPage />} />
            <Route path="/jobs/lastbilchauffoer-loen-efter-skat" element={<LastbilchauffeurLoenPage />} />
            <Route path="/jobs/psykolog-loen-efter-skat" element={<PsykologLoenPage />} />
            <Route path="/jobs/ergoterapeut-loen-efter-skat" element={<ErgoterapeutLoenPage />} />
            <Route path="/jobs/advokat-loen-efter-skat" element={<AdvokatLoenPage />} />
            <Route path="/jobs/farmakonom-loen-efter-skat" element={<FarmakonomerLoenPage />} />
            <Route path="/jobs/toemrer-loen-efter-skat" element={<ToemrerLoenPage />} />
            <Route path="/jobs/fysioterapeut-loen-efter-skat" element={<FysioterapeutLoenPage />} />
            
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
