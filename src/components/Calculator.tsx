
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { calculateTaxAndNet } from "@/utils/taxCalculations";

export const Calculator = () => {
  const { toast } = useToast();
  const [salary, setSalary] = useState("");
  const [calculationResult, setCalculationResult] = useState<{
    monthlyNet: number;
    realTaxRate: number;
    yearlyGross: number;
    taxAmount: number;
    deductions: number;
    atpPension: number;
  } | null>(null);

  useEffect(() => {
    if (salary && !isNaN(Number(salary))) {
      const result = calculateTaxAndNet(Number(salary));
      setCalculationResult(result);
    } else {
      setCalculationResult(null);
    }
  }, [salary]);

  return (
    <div className="container mx-auto px-4 pt-2 pb-4 md:py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
            Lønberegner - 2025
          </h2>
          
          <div className="space-y-3 md:space-y-4">
            <div>
              <Label htmlFor="salary" className="text-base mb-1.5 block">
                Indtast månedsløn før skat
              </Label>
              <Input
                id="salary"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="F.eks. 35000"
                className="text-3xl md:text-4xl h-16 text-right font-semibold"
              />
              <span className="text-right block mt-0.5 text-sm text-gray-500">kr</span>
            </div>

            {/* Main result section */}
            <div className="bg-primary p-4 rounded-lg">
              <h3 className="text-sm font-medium text-white/90">Udbetalt per måned</h3>
              <p className="text-4xl md:text-5xl font-bold mt-1.5 text-white">
                {calculationResult ? 
                  `${calculationResult.monthlyNet.toLocaleString("da-DK")} kr` : 
                  "- kr"
                }
              </p>
            </div>

            <div className="mt-4 text-sm text-gray-500 text-center md:hidden">
              Scroll ned for at se flere detaljer ↓
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">Års løn</h3>
                <p className="text-lg font-semibold mt-1">
                  {calculationResult ? 
                    `${calculationResult.yearlyGross.toLocaleString("da-DK")} kr` :
                    "- kr"
                  }
                </p>
                <span className="text-xs text-gray-500">Per year</span>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">ATP (pension)</h3>
                <p className="text-lg font-semibold mt-1">
                  {calculationResult ? `${calculationResult.atpPension} kr` : "- kr"}
                </p>
                <span className="text-xs text-gray-500">Per month</span>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">Personfradrag</h3>
                <p className="text-lg font-semibold mt-1">4.300 kr</p>
                <span className="text-xs text-gray-500">Per month</span>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">Andre fradrag</h3>
                <p className="text-lg font-semibold mt-1">
                  {calculationResult ? 
                    `${calculationResult.deductions.toLocaleString("da-DK")} kr` :
                    "- kr"
                  }
                </p>
                <span className="text-xs text-gray-500">Per month</span>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">Reel skatteprocent</h3>
                <p className="text-lg font-semibold mt-1 text-orange-600">
                  {calculationResult ? 
                    `${calculationResult.realTaxRate.toFixed(1)}%` :
                    "-%"
                  }
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">Skat i alt</h3>
                <p className="text-lg font-semibold mt-1">
                  {calculationResult ? 
                    `${calculationResult.taxAmount.toLocaleString("da-DK")} kr` :
                    "- kr"
                  }
                </p>
                <span className="text-xs text-gray-500">Per month</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-3 text-sm text-gray-500 text-center">
          *Udregningen tager udgangspunkt i kommuneskatten i Københavns kommune uden kirkeskat.
        </div>
      </div>
    </div>
  );
};
