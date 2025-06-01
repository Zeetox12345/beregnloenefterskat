import { Calculator, ChevronDown, BookOpen, Gamepad, Briefcase, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);
  const [jobSearchQuery, setJobSearchQuery] = useState("");

  // Organize salary options into groups
  const salaryGroups = {
    "Lav indkomst": [20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000, 36000, 37000, 38000, 39000],
    "Mellem indkomst": [40000, 45000, 50000, 55000],
    "Høj indkomst": [60000, 65000, 70000, 75000],
    "Top indkomst": [80000, 85000, 90000, 95000, 100000]
  };

  // Job specific pages organized by categories
  const jobCategories = {
    "Offentlige Ydelser": [
      { name: "Borgmester", path: "/jobs/borgmester" },
      { name: "Statsminister", path: "/jobs/statsminister-loen-efter-skat" },
      { name: "Dagpenge", path: "/jobs/dagpenge" },
      { name: "Fleksjob", path: "/jobs/fleksjob" },
      { name: "Førtidspension", path: "/jobs/foertidspension" },
      { name: "Værnepligt", path: "/jobs/vaernepligt" },
      { name: "SU Udeboende", path: "/jobs/su-udeboende" },
      { name: "Enlig Forsørger SU", path: "/jobs/enlig-forsoerger-su" },
      { name: "Kontanthjælp Satser", path: "/jobs/kontanthjaelp-satser" },
      { name: "Løn Under Sygdom", path: "/jobs/loen-under-sygdom" },
      { name: "Løn Under Barsel", path: "/jobs/loen-under-barsel" },
    ],
    "Sundhed & Omsorg": [
      { name: "Ambulanceredder", path: "/jobs/ambulanceredder" },
      { name: "Anæstesisygeplejerske", path: "/jobs/anaestesisygeplejerske" },
      { name: "Bioanalytiker", path: "/jobs/bioanalytiker-loen-efter-skat" },
      { name: "Carelink", path: "/jobs/carelink" },
      { name: "Dyrlæge", path: "/jobs/dyrlaege-loen-efter-skat" },
      { name: "Ernæringsassistent", path: "/jobs/ernaeringsassistent" },
      { name: "Jordemoder", path: "/jobs/jordemoder-loen-efter-skat" },
      { name: "Kosmetisk Sygeplejerske", path: "/jobs/kosmetisk-sygeplejerske" },
      { name: "Laborant", path: "/jobs/laborant-loen-efter-skat" },
      { name: "Læge", path: "/jobs/laege-loen-efter-skat" },
      { name: "Lægesekretær", path: "/jobs/laegesekretaer-loen-efter-skat" },
      { name: "Overlæge", path: "/jobs/overlaege" },
      { name: "Paramediciner", path: "/jobs/paramediciner" },
      { name: "Portør", path: "/jobs/portoer" },
      { name: "SOSU Hjælper", path: "/jobs/sosu-hjaelper" },
      { name: "SOSU Assistent", path: "/jobs/sosu-assistent-loen-efter-skat" },
      { name: "SOSU Elev", path: "/jobs/elevloen-sosu-efter-skat" },
      { name: "Sygeplejerske", path: "/jobs/sygeplejerske-loen-efter-skat" },
      { name: "Sundhedsplejerske", path: "/jobs/sundhedsplejerske-loen-efter-skat" },
      { name: "Veterinærsygeplejerske", path: "/jobs/veterinaersygeplejerske" },
      { name: "Dagplejer", path: "/jobs/dagplejer" },
      { name: "Tandklinikassistent", path: "/jobs/tandklinikassistent-loen-efter-skat" },
      { name: "Tandlæge", path: "/jobs/tandlaege-loen-efter-skat" },
      { name: "Tandplejer", path: "/jobs/tandplejer-loen-efter-skat" },
      { name: "Psykolog", path: "/jobs/psykolog-loen-efter-skat" },
      { name: "Ergoterapeut", path: "/jobs/ergoterapeut-loen-efter-skat" },
      { name: "Farmakonom", path: "/jobs/farmakonom-loen-efter-skat" },
      { name: "Fysioterapeut", path: "/jobs/fysioterapeut-loen-efter-skat" },
      { name: "Radiograf", path: "/jobs/radiograf-loen-efter-skat" },
      { name: "Sundhedsadministrativ Koordinator", path: "/jobs/sundhedsadministrativ-koordinator-loen-efter-skat" },
    ],
    "Undervisning": [
      { name: "FGU Elev", path: "/jobs/fgu-loen-efter-skat" },
      { name: "Ph.d.-studerende", path: "/jobs/phd-loen-efter-skat" },
      { name: "Pædagogmedhjælper", path: "/jobs/paedagogmedhjaelper" },
      { name: "Pædagogisk Assistent", path: "/jobs/paedagogisk-assistent-loen-efter-skat" },
      { name: "Pædagog", path: "/jobs/paedagog-loen-efter-skat" },
      { name: "Socialpædagog", path: "/jobs/socialpaedagog" },
      { name: "Præst", path: "/jobs/praest" },
      { name: "Folkeskolelærer", path: "/jobs/folkeskolelaerer-loen-efter-skat" },
      { name: "Gymnasielærer", path: "/jobs/gymnasielaerer-loen-efter-skat" },
      { name: "Lærervikar", path: "/jobs/laerervikar-loen-efter-skat" },
    ],
    "Sikkerhed & Forsvar": [
      { name: "Konstabel", path: "/jobs/konstabel-loen-efter-skat" },
      { name: "Fængselsbetjent", path: "/jobs/faengselsbetjent-loen-efter-skat" },
      { name: "Politibetjent", path: "/jobs/politibetjent-loen-efter-skat" },
      { name: "Vagt", path: "/jobs/vagt" },
    ],
    "Handel & Service": [
      { name: "Advokat", path: "/jobs/advokat-loen-efter-skat" },
      { name: "Aktieanalytiker", path: "/jobs/aktieanalytiker" },
      { name: "Arkitekt", path: "/jobs/arkitekt" },
      { name: "Bankrådgiver", path: "/jobs/bankraadgiver-loen-efter-skat" },
      { name: "Bedemand", path: "/jobs/bedemand" },
      { name: "Blomsterbinder", path: "/jobs/blomsterbinder" },
      { name: "Bogholder", path: "/jobs/bogholder" },
      { name: "Butiksassistent", path: "/jobs/butiksassistent" },
      { name: "Butikschef", path: "/jobs/butikschef" },
      { name: "Bygningsingeniør", path: "/jobs/bygningsingenioer-loen-efter-skat" },
      { name: "Bygningskonstruktør", path: "/jobs/bygningskonstruktoer-loen-efter-skat" },
      { name: "Buschauffør", path: "/jobs/buschauffoer-loen-efter-skat" },
      { name: "Chefkonsulent", path: "/jobs/chefkonsulent" },
      { name: "Civilingeniør", path: "/jobs/civilingenioer-loen-efter-skat" },
      { name: "Croupier", path: "/jobs/croupier" },
      { name: "Dataanalytiker", path: "/jobs/dataanalytiker" },
      { name: "Datamatiker", path: "/jobs/datamatiker-loen-efter-skat" },
      { name: "Ejendomsmægler", path: "/jobs/ejendomsmaegler-loen-efter-skat" },
      { name: "Elektriker", path: "/jobs/elektriker-loen-efter-skat" },
      { name: "Farmaceut", path: "/jobs/farmaceut-loen-efter-skat" },
      { name: "Financial Controller", path: "/jobs/financial-controller" },
      { name: "Finansøkonom", path: "/jobs/finansoekonom-loen-efter-skat" },
      { name: "Flyveleder", path: "/jobs/flyveleder" },
      { name: "Forsikringsmatematik", path: "/jobs/forsikringsmatematik-loen-efter-skat" },
      { name: "Frisør", path: "/jobs/frisoer-loen-efter-skat" },
      { name: "Industritekniker", path: "/jobs/industritekniker" },
      { name: "Indkøber", path: "/jobs/indkoeber" },
      { name: "Ingeniør", path: "/jobs/ingenioer-loen-efter-skat" },
      { name: "IT Supporter", path: "/jobs/it-supporter" },
      { name: "Journalist", path: "/jobs/journalist" },
      { name: "Jurist", path: "/jobs/jurist" },
      { name: "Key Account Manager", path: "/jobs/key-account-manager" },
      { name: "Konsulent", path: "/jobs/konsulent" },
      { name: "Kundeservicekonsulent", path: "/jobs/kundeservicekonsulent" },
      { name: "Køletekniker", path: "/jobs/koeletekniker" },
      { name: "Leasingkonsulent", path: "/jobs/leasingkonsulent" },
      { name: "Lagermedarbejder", path: "/jobs/lagermedarbejder" },
      { name: "Lastbilchauffør", path: "/jobs/lastbilchauffoer-loen-efter-skat" },
      { name: "Lokomotivfører", path: "/jobs/lokomotivfoerer" },
      { name: "Maler", path: "/jobs/maler-loen-efter-skat" },
      { name: "Markedsføringsøkonom", path: "/jobs/markedsfoeringsoekonom-loen-efter-skat" },
      { name: "McDonald's", path: "/jobs/mcdonalds" },
      { name: "Maskiningeniør", path: "/jobs/maskiningenioer" },
      { name: "Maskinmester", path: "/jobs/maskinmester-loen-efter-skat" },
      { name: "Mekaniker", path: "/jobs/mekaniker-loen-efter-skat" },
      { name: "Mejerist", path: "/jobs/mejerist-loen-efter-skat" },
      { name: "Multimediedesigner", path: "/jobs/multimediedesigner" },
      { name: "Pilot", path: "/jobs/pilot-loen-efter-skat" },
      { name: "Procesoperatør", path: "/jobs/procesoperatoer-loen-efter-skat" },
      { name: "Projektleder", path: "/jobs/projektleder-loen-efter-skat" },
      { name: "Receptionist", path: "/jobs/receptionist" },
      { name: "Rejseguide", path: "/jobs/rejseguide" },
      { name: "Rengøringsassistent", path: "/jobs/rengoeringsassistent" },
      { name: "Revisor", path: "/jobs/revisor-loen-efter-skat" },
      { name: "Salgsassistent", path: "/jobs/salgsassistent" },
      { name: "Skraldemand", path: "/jobs/skraldemand-loen-efter-skat" },
      { name: "Software Ingeniør", path: "/jobs/software-ingenioer-loen-efter-skat" },
      { name: "Socialrådgiver", path: "/jobs/socialraadgiver-loen-efter-skat" },
      { name: "Specialkonsulent", path: "/jobs/specialkonsulent" },
      { name: "Stewardesse", path: "/jobs/stewardesse-loen-efter-skat" },
      { name: "Taxachauffør", path: "/jobs/taxachauffoer-loen-efter-skat" },
      { name: "Togfører", path: "/jobs/togfoerer" },
      { name: "Tømrer", path: "/jobs/toemrer-loen-efter-skat" },
      { name: "Ungarbejder", path: "/jobs/ungarbejder" },
      { name: "Voksenlærling", path: "/jobs/voksenlaerling-loen-efter-skat" },
      { name: "VVS-montør", path: "/jobs/vvs" },
      { name: "Wolt Kurér", path: "/jobs/wolt" },
    ]
  };

  // Filter jobs based on search query
  const getFilteredJobs = () => {
    if (!jobSearchQuery.trim()) return jobCategories;
    
    const searchTerm = jobSearchQuery.toLowerCase().trim();
    const filteredCategories: Record<string, { name: string; path: string }[]> = {};
    
    Object.entries(jobCategories).forEach(([category, jobs]) => {
      const filteredJobs = jobs.filter(job => 
        job.name.toLowerCase().includes(searchTerm)
      );
      
      if (filteredJobs.length > 0) {
        filteredCategories[category] = filteredJobs;
      }
    });
    
    return filteredCategories;
  };
  
  const filteredJobCategories = getFilteredJobs();

  return (
    <header className="w-full bg-gradient-to-r from-secondary to-accent py-4">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* Empty left column for balance */}
          <div className="hidden md:block"></div>
          
          {/* Centered logo and title */}
          <div className="flex justify-center col-span-1 mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-3 hover:underline">
              <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group">
                <Calculator className="h-5 w-5 md:h-6 md:w-6 text-white transform transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-primary font-sans truncate">
                <span className="capitalize">B</span>eregnloenefterskat.dk
              </span>
            </Link>
          </div>
          
          {/* Navigation menu - mobile optimized */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-3">
            <Link to="/blog" className="inline-flex items-center space-x-1 px-3 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors text-sm md:text-base">
              <BookOpen className="h-4 w-4" />
              <span>Blog</span>
            </Link>
            
            <Link to="/spil" className="inline-flex items-center space-x-1 px-3 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors text-sm md:text-base">
              <Gamepad className="h-4 w-4" />
              <span>Lønspil</span>
            </Link>
            
            <DropdownMenu open={isJobsDropdownOpen} onOpenChange={setIsJobsDropdownOpen}>
              <DropdownMenuTrigger className="inline-flex items-center space-x-1 px-3 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors text-sm md:text-base">
                <Briefcase className="h-4 w-4 mr-1" />
                <span>Jobs</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              
              <DropdownMenuContent align="end" className="w-72 max-h-[70vh] overflow-y-auto bg-popover !bg-opacity-100">
                <div className="sticky top-0 z-20 bg-white pt-2 pb-2 border-b shadow-sm">
                  <DropdownMenuLabel className="text-primary font-semibold">
                    Job-specifikke lønberegninger
                  </DropdownMenuLabel>
                
                  <div className="px-2 py-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-2 top-3 text-muted-foreground" />
                      <Input 
                        type="text" 
                        placeholder="Søg efter job..." 
                        value={jobSearchQuery}
                        onChange={(e) => setJobSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                          // Prevent dropdown keyboard navigation from interfering with typing
                          e.stopPropagation();
                        }}
                        className="pl-8 h-9"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  {Object.keys(filteredJobCategories).length === 0 ? (
                    <div className="px-2 py-4 text-center text-muted-foreground">
                      Ingen jobs matcher din søgning
                    </div>
                  ) : (
                    Object.entries(filteredJobCategories).map(([category, jobs], index) => (
                      <div key={category} className="mt-1 first:mt-0">
                        <DropdownMenuLabel className="text-gray-600 font-medium text-sm pt-1">
                          {category}
                        </DropdownMenuLabel>
                        <DropdownMenuGroup>
                          {jobs.map((job) => (
                            <DropdownMenuItem key={job.path} asChild>
                              <Link 
                                to={job.path}
                                className="cursor-pointer w-full pl-5"
                                onClick={() => {
                                  setJobSearchQuery("");
                                  setIsJobsDropdownOpen(false);
                                }}
                              >
                                {job.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                        {index < Object.entries(filteredJobCategories).length - 1 && (
                          <DropdownMenuSeparator />
                        )}
                      </div>
                    ))
                  )}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
              <DropdownMenuTrigger className="inline-flex items-center space-x-1 px-3 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors text-sm md:text-base">
                <span>Løn</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              
              <DropdownMenuContent align="end" className="w-72 max-h-[70vh] overflow-y-auto bg-popover !bg-opacity-100">
                {Object.entries(salaryGroups).map(([groupName, salaries], index) => (
                  <div key={groupName}>
                    <DropdownMenuLabel className="text-primary font-semibold pt-2">
                      {groupName}
                    </DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <div className="grid grid-cols-2 gap-1">
                        {salaries.map((salary) => (
                          <DropdownMenuItem key={salary} asChild>
                            <Link 
                              to={`/loen/${salary}`}
                              className="cursor-pointer w-full"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {salary.toLocaleString("da-DK")} kr
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuGroup>
                    {index < Object.entries(salaryGroups).length - 1 && (
                      <DropdownMenuSeparator />
                    )}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
