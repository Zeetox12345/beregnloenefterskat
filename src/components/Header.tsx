import { Calculator, ChevronDown, Search } from "lucide-react";
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
import { Button } from "@/components/ui/button";

export const Header = () => {
  const navigate = useNavigate();
  const [customSalary, setCustomSalary] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Organize salary options into groups
  const salaryGroups = {
    "Lav indkomst": [20000, 25000, 30000, 35000],
    "Mellem indkomst": [40000, 45000, 50000, 55000],
    "Høj indkomst": [60000, 65000, 70000, 75000],
    "Top indkomst": [80000, 85000, 90000, 95000, 100000]
  };

  const handleCustomSalarySubmit = () => {
    const salary = parseInt(customSalary.replace(/\D/g, ""));
    if (!isNaN(salary) && salary > 0) {
      navigate(`/lonn/${salary}`);
      setIsDropdownOpen(false);
      setCustomSalary("");
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-secondary to-accent py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center">
          {/* Empty left column for balance */}
          <div className="hidden md:block"></div>
          
          {/* Centered logo and title */}
          <div className="flex justify-center col-span-3 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 hover:underline">
              <Calculator className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              <span className="text-xl md:text-2xl font-bold text-primary font-sans">
                beregnloenefterskat.dk
              </span>
            </Link>
          </div>
          
          {/* Right side dropdown on desktop, below logo on mobile */}
          <div className="col-span-3 md:col-span-1 flex justify-center md:justify-end mt-3 md:mt-0">
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
              <DropdownMenuTrigger className="flex items-center space-x-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
                <span>Løn efter skat</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              
              <DropdownMenuContent align="end" className="w-72 max-h-[70vh] overflow-y-auto">
                <div className="p-3 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-full">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Indtast løn..."
                        value={customSalary}
                        onChange={(e) => setCustomSalary(e.target.value)}
                        className="h-9 pl-8"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleCustomSalarySubmit();
                          }
                        }}
                      />
                    </div>
                    <Button 
                      size="sm" 
                      onClick={handleCustomSalarySubmit}
                      className="h-9"
                    >
                      Gå
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Indtast din ønskede månedsløn
                  </p>
                </div>
                
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
                              to={`/lonn/${salary}`}
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
