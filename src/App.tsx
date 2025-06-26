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
import AdvokatsekretaerLoenPage from "./pages/AdvokatsekretaerLoenPage";
import FarmakonomerLoenPage from "./pages/FarmakonomerLoenPage";
import ToemrerLoenPage from "./pages/ToemrerLoenPage";
import FysioterapeutLoenPage from "./pages/FysioterapeutLoenPage";
import KiropraktorLoenPage from "./pages/KiropraktorLoenPage";
import StewardesseLoenPage from "./pages/StewardesseLoenPage";
import PhDLoenPage from "./pages/PhDLoenPage";
import BioanalytikerLoenPage from "./pages/BioanalytikerLoenPage";
import ElevloenSOSUPage from "./pages/ElevloenSOSUPage";
import TaxachauffoerLoenPage from "./pages/TaxachauffoerLoenPage";
import TandlaegeLoenPage from "./pages/TandlaegeLoenPage";
import TandplejerLoenPage from "./pages/TandplejerLoenPage";
import MekanikerLoenPage from "./pages/MekanikerLoenPage";
import BygningskonstruktoerLoenPage from "./pages/BygningskonstruktoerLoenPage";
import FarmaceutLoenPage from "./pages/FarmaceutLoenPage";
import FGULoenPage from "./pages/FGULoenPage";
import LaegeLoenPage from "./pages/LaegeLoenPage";
import RadiografLoenPage from "./pages/RadiografLoenPage";
import FrisoerLoenPage from "./pages/FrisoerLoenPage";
import DyrlaegeLoenPage from "./pages/DyrlaegeLoenPage";
import BygningsingenioerLoenPage from "./pages/BygningsingenioerLoenPage";
import SygeplejerskeLoenPage from "./pages/SygeplejerskeLoenPage";
import EjendomsmaeglerLoenPage from "./pages/EjendomsmaeglerLoenPage";
import BankraadgiverLoenPage from "./pages/BankraadgiverLoenPage";
import BuschauffoerLoenPage from "./pages/BuschauffoerLoenPage";
import MaskinmesterLoenPage from "./pages/MaskinmesterLoenPage";
import SundhedsplejerskeLoenPage from "./pages/SundhedsplejerskeLoenPage";
import LaborantLoenPage from "./pages/LaborantLoenPage";
import JordemoderLoenPage from "./pages/JordemoderLoenPage";
import FinansoekomonLoenPage from "./pages/FinansoekomonLoenPage";
import CivilingeniørLoenPage from "./pages/CivilingeniørLoenPage";
import SoftwareIngenioerLoenPage from "./pages/SoftwareIngenioerLoenPage";
import PilotLoenPage from "./pages/PilotLoenPage";
import MalerLoenPage from "./pages/MalerLoenPage";
import RevisorLoenPage from "./pages/RevisorLoenPage";
import DatamatikerLoenPage from "./pages/DatamatikerLoenPage";
import MejeristLoenPage from "./pages/MejeristLoenPage";
import ProjektlederLoenPage from "./pages/ProjektlederLoenPage";
import IngenioerLoenPage from "./pages/IngenioerLoenPage";
import StatsministerLoenPage from "./pages/StatsministerLoenPage";
import ProcesoperatoerLoenPage from "./pages/ProcesoperatoerLoenPage";
import LaegesekretaerLoenPage from "./pages/LaegesekretaerLoenPage";
import VoksenlaerlingLoenPage from "./pages/VoksenlaerlingLoenPage";
import ForsikringsmatematikLoenPage from "./pages/ForsikringsmatematikLoenPage";
import ForsikringsraadgiverLoenPage from "./pages/ForsikringsraadgiverLoenPage";
import SundhedsadministrativKoordinatorLoenPage from "./pages/SundhedsadministrativKoordinatorLoenPage";
import LaerervikarLoenPage from "./pages/LaerervikarLoenPage";
import MarkedsføringsøkonomLoenPage from "./pages/MarkedsføringsøkonomLoenPage";
import JuristLoenPage from "./pages/JuristLoenPage";
import ArkitektLoenPage from "./pages/ArkitektLoenPage";
import AssurandorLoenPage from "./pages/AssurandorLoenPage";
import ButiksassistentLoenPage from "./pages/ButiksassistentLoenPage";
import ButikschefLoenPage from "./pages/ButikschefLoenPage";
import PortoerLoenPage from "./pages/PortoerLoenPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PraestLoenPage from "./pages/PraestLoenPage";
import SalgsassistentLoenPage from "./pages/SalgsassistentLoenPage";
import SocialpaedagogLoenPage from "./pages/SocialpaedagogLoenPage";
import ITSupporterLoenPage from "./pages/ITSupporterLoenPage";
import KeyAccountManagerLoenPage from "./pages/KeyAccountManagerLoenPage";
import AnæstesisygeplejerskeLoenPage from "./pages/AnæstesisygeplejerskeLoenPage";
import FoertidspensionPage from "./pages/FoertidspensionPage";
import ReceptionistLoenPage from "./pages/ReceptionistLoenPage";
import CarelinkLoenPage from "./pages/CarelinkLoenPage";
import AmbulanceredderLoenPage from "./pages/AmbulanceredderLoenPage";
import FlyvelederLoenPage from "./pages/FlyvelederLoenPage";
import TogfoererLoenPage from "./pages/TogfoererLoenPage";
import KonsulentLoenPage from "./pages/KonsulentLoenPage";
import KoeleteknikerLoenPage from "./pages/KoeleteknikerLoenPage";
import KosmetiskSygeplejerskeLoenPage from "./pages/KosmetiskSygeplejerskeLoenPage";
import VeterinaersygeplejerskeLoenPage from "./pages/VeterinaersygeplejerskeLoenPage";
import IndustriteknikerLoenPage from "./pages/IndustriteknikerLoenPage";
import FinancialControllerLoenPage from "./pages/FinancialControllerLoenPage";
import IndkoeberLoenPage from "./pages/IndkoeberLoenPage";
import LagermedarbejderLoenPage from "./pages/LagermedarbejderLoenPage";
import LoenUnderSygdomPage from "./pages/LoenUnderSygdomPage";
import LokomotivfoererLoenPage from "./pages/LokomotivfoererLoenPage";
import UngarbejderLoenPage from "./pages/UngarbejderLoenPage";
import BedemandLoenPage from "./pages/BedemandLoenPage";
import ChefkonsulentLoenPage from "./pages/ChefkonsulentLoenPage";
import WoltLoenPage from "./pages/WoltLoenPage";
import JournalistLoenPage from "./pages/JournalistLoenPage";
import ErnaeringsassistentLoenPage from "./pages/ErnaeringsassistentLoenPage";
import ParamedicinerLoenPage from "./pages/ParamedicinerLoenPage";
import OverlaegeLoenPage from "./pages/OverlaegeLoenPage";
import MultimediedesignerLoenPage from "./pages/MultimediedesignerLoenPage";
import LoenUnderBarselPage from "./pages/LoenUnderBarselPage";
import BogholderLoenPage from "./pages/BogholderLoenPage";
import BorgmesterLoenPage from "./pages/BorgmesterLoenPage";
import MaskiningenioerLoenPage from "./pages/MaskiningenioerLoenPage";
import RengoeringsassistentLoenPage from "./pages/RengoeringsassistentLoenPage";
import McdonaldsLoenPage from "./pages/McdonaldsLoenPage";
import CroupierLoenPage from "./pages/CroupierLoenPage";
import SpecialkonsulentLoenPage from "./pages/SpecialkonsulentLoenPage";
import BlomsterbinderLoenPage from "./pages/BlomsterbinderLoenPage";
import VVSLoenPage from "./pages/VVSLoenPage";
import AktieanalytikerLoenPage from "./pages/AktieanalytikerLoenPage";
import DagpengeLoenPage from "./pages/DagpengeLoenPage";
import LeasingkonsulentLoenPage from "./pages/LeasingkonsulentLoenPage";
import KundeservicekonsulentLoenPage from "./pages/KundeservicekonsulentLoenPage";
import RejseguideLoenPage from "./pages/RejseguideLoenPage";
import VagtLoenPage from "./pages/VagtLoenPage";
import DataanalytikerLoenPage from "./pages/DataanalytikerLoenPage";
import FitnessinstruktørLoenPage from "./pages/FitnessinstruktørLoenPage";
import BartenderLoenPage from "./pages/BartenderLoenPage";
import DJLoenPage from "./pages/DJLoenPage";
import DyrepasserLoenPage from "./pages/DyrepasserLoenPage";
import FotografLoenPage from "./pages/FotografLoenPage";
import GrafiskDesignerLoenPage from "./pages/GrafiskDesignerLoenPage";
import BrandmandLoenPage from "./pages/BrandmandLoenPage";
import MurerLoenPage from "./pages/MurerLoenPage";
import AmbulancebehandlerLoenPage from "./pages/AmbulancebehandlerLoenPage";
import KokLoenPage from "./pages/KokLoenPage";
import EjendomsadministratorLoenPage from "./pages/EjendomsadministratorLoenPage";
import PlejefamilieLoenPage from "./pages/PlejefamilieLoenPage";
import ITKonsulentLoenPage from "./pages/ITKonsulentLoenPage";
import HRLoenPage from "./pages/HRLoenPage";
import ButiksassistentUfaglaertLoenPage from "./pages/ButiksassistentUfaglaertLoenPage";
import LandinspektoerLoenPage from "./pages/LandinspektoerLoenPage";
import DiplomingeniørLoenPage from "./pages/DiplomingeniørLoenPage";
import AutomationsteknologLoenPage from "./pages/AutomationsteknologLoenPage";
import AuPairLoenPage from "./pages/AuPairLoenPage";
import ProduktionsteknologLoenPage from "./pages/ProduktionsteknologLoenPage";
import SouschefLoenPage from "./pages/SouschefLoenPage";
import BilsaelgerLoenPage from "./pages/BilsaelgerLoenPage";
import VikarLoenPage from "./pages/VikarLoenPage";
import TjenerLoenPage from "./pages/TjenerLoenPage";
import EjendomsserviceteknikerLoenPage from "./pages/EjendomsserviceteknikerLoenPage";
import AdministrativMedarbejderLoenPage from "./pages/AdministrativMedarbejderLoenPage";
import TrafiklederLoenPage from "./pages/TrafiklederLoenPage";
import OptikerLoenPage from "./pages/OptikerLoenPage";
import KoerelaererLoenPage from "./pages/KoerelaererLoenPage";
import RenovationsarbejderLoenPage from "./pages/RenovationsarbejderLoenPage";
import KirurgLoenPage from "./pages/KirurgLoenPage";
import PersonligTraenerLoenPage from "./pages/PersonligTraenerLoenPage";
import TekniskDesignerLoenPage from "./pages/TekniskDesignerLoenPage";
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
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
            <Route path="/jobs/renovationsarbejder" element={<RenovationsarbejderLoenPage />} />
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
            <Route path="/jobs/advokatsekretaer" element={<AdvokatsekretaerLoenPage />} />
            <Route path="/jobs/farmakonom-loen-efter-skat" element={<FarmakonomerLoenPage />} />
            <Route path="/jobs/toemrer-loen-efter-skat" element={<ToemrerLoenPage />} />
            <Route path="/jobs/fysioterapeut-loen-efter-skat" element={<FysioterapeutLoenPage />} />
            <Route path="/jobs/stewardesse-loen-efter-skat" element={<StewardesseLoenPage />} />
            <Route path="/jobs/phd-loen-efter-skat" element={<PhDLoenPage />} />
            <Route path="/jobs/bioanalytiker-loen-efter-skat" element={<BioanalytikerLoenPage />} />
            <Route path="/jobs/elevloen-sosu-efter-skat" element={<ElevloenSOSUPage />} />
            <Route path="/jobs/taxachauffoer-loen-efter-skat" element={<TaxachauffoerLoenPage />} />
            <Route path="/jobs/tandlaege-loen-efter-skat" element={<TandlaegeLoenPage />} />
            <Route path="/jobs/tandplejer-loen-efter-skat" element={<TandplejerLoenPage />} />
            <Route path="/jobs/mekaniker-loen-efter-skat" element={<MekanikerLoenPage />} />
            <Route path="/jobs/bygningskonstruktoer-loen-efter-skat" element={<BygningskonstruktoerLoenPage />} />
            <Route path="/jobs/farmaceut-loen-efter-skat" element={<FarmaceutLoenPage />} />
            <Route path="/jobs/fgu-loen-efter-skat" element={<FGULoenPage />} />
            <Route path="/jobs/laege-loen-efter-skat" element={<LaegeLoenPage />} />
            <Route path="/jobs/kirurg" element={<KirurgLoenPage />} />
            <Route path="/jobs/radiograf-loen-efter-skat" element={<RadiografLoenPage />} />
            <Route path="/jobs/frisoer-loen-efter-skat" element={<FrisoerLoenPage />} />
            <Route path="/jobs/dyrlaege-loen-efter-skat" element={<DyrlaegeLoenPage />} />
            <Route path="/jobs/bygningsingenioer-loen-efter-skat" element={<BygningsingenioerLoenPage />} />
            <Route path="/jobs/sygeplejerske-loen-efter-skat" element={<SygeplejerskeLoenPage />} />
            <Route path="/jobs/ejendomsmaegler-loen-efter-skat" element={<EjendomsmaeglerLoenPage />} />
            <Route path="/jobs/bankraadgiver-loen-efter-skat" element={<BankraadgiverLoenPage />} />
            <Route path="/jobs/buschauffoer-loen-efter-skat" element={<BuschauffoerLoenPage />} />
            <Route path="/jobs/maskinmester-loen-efter-skat" element={<MaskinmesterLoenPage />} />
            <Route path="/jobs/sundhedsplejerske-loen-efter-skat" element={<SundhedsplejerskeLoenPage />} />
            <Route path="/jobs/laborant-loen-efter-skat" element={<LaborantLoenPage />} />
            <Route path="/jobs/jordemoder-loen-efter-skat" element={<JordemoderLoenPage />} />
            <Route path="/jobs/finansoekonom-loen-efter-skat" element={<FinansoekomonLoenPage />} />
            <Route path="/jobs/civilingenioer-loen-efter-skat" element={<CivilingeniørLoenPage />} />
            <Route path="/jobs/software-ingenioer-loen-efter-skat" element={<SoftwareIngenioerLoenPage />} />
            <Route path="/jobs/pilot-loen-efter-skat" element={<PilotLoenPage />} />
            <Route path="/jobs/revisor-loen-efter-skat" element={<RevisorLoenPage />} />
            <Route path="/jobs/maler-loen-efter-skat" element={<MalerLoenPage />} />
            <Route path="/jobs/datamatiker-loen-efter-skat" element={<DatamatikerLoenPage />} />
            <Route path="/jobs/mejerist-loen-efter-skat" element={<MejeristLoenPage />} />
            <Route path="/jobs/projektleder-loen-efter-skat" element={<ProjektlederLoenPage />} />
            <Route path="/jobs/ingenioer-loen-efter-skat" element={<IngenioerLoenPage />} />
            <Route path="/jobs/statsminister-loen-efter-skat" element={<StatsministerLoenPage />} />
            <Route path="/jobs/procesoperatoer-loen-efter-skat" element={<ProcesoperatoerLoenPage />} />
            <Route path="/jobs/laegesekretaer-loen-efter-skat" element={<LaegesekretaerLoenPage />} />
            <Route path="/jobs/voksenlaerling-loen-efter-skat" element={<VoksenlaerlingLoenPage />} />
            <Route path="/jobs/forsikringsmatematik-loen-efter-skat" element={<ForsikringsmatematikLoenPage />} />
            <Route path="/jobs/forsikringsraadgiver" element={<ForsikringsraadgiverLoenPage />} />
            <Route path="/jobs/sundhedsadministrativ-koordinator-loen-efter-skat" element={<SundhedsadministrativKoordinatorLoenPage />} />
            <Route path="/jobs/laerervikar-loen-efter-skat" element={<LaerervikarLoenPage />} />
            <Route path="/jobs/markedsfoeringsoekonom-loen-efter-skat" element={<MarkedsføringsøkonomLoenPage />} />
            <Route path="/jobs/jurist" element={<JuristLoenPage />} />
            <Route path="/jobs/arkitekt" element={<ArkitektLoenPage />} />
            <Route path="/jobs/assurandor" element={<AssurandorLoenPage />} />
            <Route path="/jobs/butiksassistent" element={<ButiksassistentLoenPage />} />
            <Route path="/jobs/butiksassistent-ufaglaert" element={<ButiksassistentUfaglaertLoenPage />} />
            <Route path="/jobs/butikschef" element={<ButikschefLoenPage />} />
            <Route path="/jobs/portoer" element={<PortoerLoenPage />} />
            <Route path="/jobs/praest" element={<PraestLoenPage />} />
            <Route path="/jobs/salgsassistent" element={<SalgsassistentLoenPage />} />
            <Route path="/jobs/socialpaedagog" element={<SocialpaedagogLoenPage />} />
            <Route path="/jobs/it-supporter" element={<ITSupporterLoenPage />} />
            <Route path="/jobs/key-account-manager" element={<KeyAccountManagerLoenPage />} />
            <Route path="/jobs/anaestesisygeplejerske" element={<AnæstesisygeplejerskeLoenPage />} />
            <Route path="/jobs/foertidspension" element={<FoertidspensionPage />} />
            <Route path="/jobs/receptionist" element={<ReceptionistLoenPage />} />
            <Route path="/jobs/carelink" element={<CarelinkLoenPage />} />
            <Route path="/jobs/ambulanceredder" element={<AmbulanceredderLoenPage />} />
            <Route path="/jobs/flyveleder" element={<FlyvelederLoenPage />} />
            <Route path="/jobs/togfoerer" element={<TogfoererLoenPage />} />
            <Route path="/jobs/konsulent" element={<KonsulentLoenPage />} />
            <Route path="/jobs/koeletekniker" element={<KoeleteknikerLoenPage />} />
            <Route path="/jobs/kosmetisk-sygeplejerske" element={<KosmetiskSygeplejerskeLoenPage />} />
            <Route path="/jobs/veterinaersygeplejerske" element={<VeterinaersygeplejerskeLoenPage />} />
            <Route path="/jobs/vikar" element={<VikarLoenPage />} />
            <Route path="/jobs/industritekniker" element={<IndustriteknikerLoenPage />} />
            <Route path="/jobs/financial-controller" element={<FinancialControllerLoenPage />} />
            <Route path="/jobs/indkoeber" element={<IndkoeberLoenPage />} />
            <Route path="/jobs/lagermedarbejder" element={<LagermedarbejderLoenPage />} />
            <Route path="/jobs/loen-under-sygdom" element={<LoenUnderSygdomPage />} />
            <Route path="/jobs/lokomotivfoerer" element={<LokomotivfoererLoenPage />} />
            <Route path="/jobs/ungarbejder" element={<UngarbejderLoenPage />} />
            <Route path="/jobs/bedemand" element={<BedemandLoenPage />} />
            <Route path="/jobs/chefkonsulent" element={<ChefkonsulentLoenPage />} />
            <Route path="/jobs/wolt" element={<WoltLoenPage />} />
            <Route path="/jobs/journalist" element={<JournalistLoenPage />} />
            <Route path="/jobs/ernaeringsassistent" element={<ErnaeringsassistentLoenPage />} />
            <Route path="/jobs/paramediciner" element={<ParamedicinerLoenPage />} />
            <Route path="/jobs/overlaege" element={<OverlaegeLoenPage />} />
            <Route path="/jobs/multimediedesigner" element={<MultimediedesignerLoenPage />} />
            <Route path="/jobs/loen-under-barsel" element={<LoenUnderBarselPage />} />
            <Route path="/jobs/bogholder" element={<BogholderLoenPage />} />
            <Route path="/jobs/borgmester" element={<BorgmesterLoenPage />} />
            <Route path="/jobs/maskiningenioer" element={<MaskiningenioerLoenPage />} />
            <Route path="/jobs/rengoeringsassistent" element={<RengoeringsassistentLoenPage />} />
            <Route path="/jobs/mcdonalds" element={<McdonaldsLoenPage />} />
            <Route path="/jobs/croupier" element={<CroupierLoenPage />} />
            <Route path="/jobs/specialkonsulent" element={<SpecialkonsulentLoenPage />} />
            <Route path="/jobs/blomsterbinder" element={<BlomsterbinderLoenPage />} />
            <Route path="/jobs/vvs" element={<VVSLoenPage />} />
            <Route path="/jobs/aktieanalytiker" element={<AktieanalytikerLoenPage />} />
            <Route path="/jobs/dagpenge" element={<DagpengeLoenPage />} />
            <Route path="/jobs/leasingkonsulent" element={<LeasingkonsulentLoenPage />} />
            <Route path="/jobs/kundeservicekonsulent" element={<KundeservicekonsulentLoenPage />} />
            <Route path="/jobs/rejseguide" element={<RejseguideLoenPage />} />
            <Route path="/jobs/vagt" element={<VagtLoenPage />} />
            <Route path="/jobs/dataanalytiker" element={<DataanalytikerLoenPage />} />
            <Route path="/jobs/fitnessinstruktoer" element={<FitnessinstruktørLoenPage />} />
            <Route path="/jobs/personlig-traener" element={<PersonligTraenerLoenPage />} />
            <Route path="/jobs/bartender" element={<BartenderLoenPage />} />
            <Route path="/jobs/dj" element={<DJLoenPage />} />
            <Route path="/jobs/dyrepasser" element={<DyrepasserLoenPage />} />
            <Route path="/jobs/fotograf" element={<FotografLoenPage />} />
            <Route path="/jobs/grafisk-designer" element={<GrafiskDesignerLoenPage />} />
            <Route path="/jobs/brandmand" element={<BrandmandLoenPage />} />
            <Route path="/jobs/murer" element={<MurerLoenPage />} />
            <Route path="/jobs/ambulancebehandler" element={<AmbulancebehandlerLoenPage />} />
            <Route path="/jobs/kok" element={<KokLoenPage />} />
            <Route path="/jobs/ejendomsadministrator" element={<EjendomsadministratorLoenPage />} />
            <Route path="/jobs/plejefamilie" element={<PlejefamilieLoenPage />} />
            <Route path="/jobs/it-konsulent" element={<ITKonsulentLoenPage />} />
            <Route path="/jobs/hr" element={<HRLoenPage />} />
            <Route path="/jobs/landinspektoer" element={<LandinspektoerLoenPage />} />
            <Route path="/jobs/diplomingenioer" element={<DiplomingeniørLoenPage />} />
            <Route path="/jobs/automationsteknolog" element={<AutomationsteknologLoenPage />} />
            <Route path="/jobs/au-pair" element={<AuPairLoenPage />} />
            <Route path="/jobs/produktionsteknolog" element={<ProduktionsteknologLoenPage />} />
            <Route path="/jobs/kiropraktor" element={<KiropraktorLoenPage />} />
            <Route path="/jobs/souschef" element={<SouschefLoenPage />} />
            <Route path="/jobs/bilsaelger" element={<BilsaelgerLoenPage />} />
            <Route path="/jobs/tjener" element={<TjenerLoenPage />} />
            <Route path="/jobs/ejendomsservicetekniker" element={<EjendomsserviceteknikerLoenPage />} />
            <Route path="/jobs/administrativ-medarbejder" element={<AdministrativMedarbejderLoenPage />} />
            <Route path="/jobs/trafikleder" element={<TrafiklederLoenPage />} />
            <Route path="/jobs/optiker" element={<OptikerLoenPage />} />
            <Route path="/jobs/koerelaerer" element={<KoerelaererLoenPage />} />
            <Route path="/jobs/teknisk-designer" element={<TekniskDesignerLoenPage />} />
            
            {/* Redirect unwanted pages to the home page */}
            <Route path="/sample-page" element={<Navigate replace to="/" />} />
            <Route path="/category/uncategorized" element={<Navigate replace to="/" />} />
            <Route path="/category/uncategorized/*" element={<Navigate replace to="/" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
