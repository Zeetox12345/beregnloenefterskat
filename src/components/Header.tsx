import { Calculator, ChevronDown, BookOpen, Gamepad, Briefcase } from "lucide-react";
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

export const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);

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
      { name: "Fleksjob", path: "/jobs/fleksjob" },
      { name: "Værnepligt", path: "/jobs/vaernepligt" },
      { name: "SU Udeboende", path: "/jobs/su-udeboende" },
      { name: "Enlig Forsørger SU", path: "/jobs/enlig-forsoerger-su" },
      { name: "Kontanthjælp Satser", path: "/jobs/kontanthjaelp-satser" },
    ],
    "Sundhed & Omsorg": [
      { name: "Bioanalytiker", path: "/jobs/bioanalytiker-loen-efter-skat" },
      { name: "SOSU Hjælper", path: "/jobs/sosu-hjaelper" },
      { name: "SOSU Assistent", path: "/jobs/sosu-assistent-loen-efter-skat" },
      { name: "Dagplejer", path: "/jobs/dagplejer" },
      { name: "Tandklinikassistent", path: "/jobs/tandklinikassistent-loen-efter-skat" },
      { name: "Psykolog", path: "/jobs/psykolog-loen-efter-skat" },
      { name: "Ergoterapeut", path: "/jobs/ergoterapeut-loen-efter-skat" },
      { name: "Farmakonom", path: "/jobs/farmakonom-loen-efter-skat" },
      { name: "Fysioterapeut", path: "/jobs/fysioterapeut-loen-efter-skat" },
    ],
    "Undervisning": [
      { name: "Ph.d.-studerende", path: "/jobs/phd-loen-efter-skat" },
      { name: "Pædagogmedhjælper", path: "/jobs/paedagogmedhjaelper" },
      { name: "Pædagogisk Assistent", path: "/jobs/paedagogisk-assistent-loen-efter-skat" },
      { name: "Pædagog", path: "/jobs/paedagog-loen-efter-skat" },
      { name: "Folkeskolelærer", path: "/jobs/folkeskolelaerer-loen-efter-skat" },
      { name: "Gymnasielærer", path: "/jobs/gymnasielaerer-loen-efter-skat" },
    ],
    "Sikkerhed & Forsvar": [
      { name: "Konstabel", path: "/jobs/konstabel-loen-efter-skat" },
      { name: "Fængselsbetjent", path: "/jobs/faengselsbetjent-loen-efter-skat" },
      { name: "Politibetjent", path: "/jobs/politibetjent-loen-efter-skat" },
    ],
    "Handel & Service": [
      { name: "Lastbilchauffør", path: "/jobs/lastbilchauffoer-loen-efter-skat" },
      { name: "Skraldemand", path: "/jobs/skraldemand-loen-efter-skat" },
      { name: "Elektriker", path: "/jobs/elektriker-loen-efter-skat" },
      { name: "Socialrådgiver", path: "/jobs/socialraadgiver-loen-efter-skat" },
      { name: "Advokat", path: "/jobs/advokat-loen-efter-skat" },
      { name: "Tømrer", path: "/jobs/toemrer-loen-efter-skat" },
      { name: "Stewardesse", path: "/jobs/stewardesse-loen-efter-skat" },
    ]
  };

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
                <DropdownMenuLabel className="text-primary font-semibold pt-2 sticky top-0 bg-popover z-10">
                  Job-specifikke lønberegninger
                </DropdownMenuLabel>
                
                {Object.entries(jobCategories).map(([category, jobs], index) => (
                  <div key={category}>
                    <DropdownMenuLabel className="text-gray-600 font-medium text-sm pt-1">
                      {category}
                    </DropdownMenuLabel>
                    <DropdownMenuGroup>
                      {jobs.map((job) => (
                        <DropdownMenuItem key={job.path} asChild>
                          <Link 
                            to={job.path}
                            className="cursor-pointer w-full pl-5"
                            onClick={() => setIsJobsDropdownOpen(false)}
                          >
                            {job.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                    {index < Object.entries(jobCategories).length - 1 && (
                      <DropdownMenuSeparator />
                    )}
                  </div>
                ))}
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
