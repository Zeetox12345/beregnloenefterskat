
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
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Lønberegner - 2025
          </h2>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="salary" className="text-lg mb-2 block">
                Indtast månedsløn og udregn hvor meget du vil få udbetalt efter skat og pension*
              </Label>
              <Input
                id="salary"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="F.eks. 35000"
                className="text-2xl h-14 text-right"
              />
              <span className="text-right block mt-1 text-sm text-gray-500">kr</span>
            </div>

            {/* Main result section */}
            <div className="bg-primary p-6 rounded-lg">
              <h3 className="text-sm font-medium text-white/90">Udbetalt per måned</h3>
              <p className="text-4xl md:text-5xl font-bold mt-2 text-white">
                {calculationResult ? 
                  `${calculationResult.monthlyNet.toLocaleString("da-DK")} kr` : 
                  "- kr"
                }
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">Års løn</h3>
                <p className="text-lg font-semibold mt-1">
                  {calculationResult ? 
                    `${calculationResult.yearlyGross.toLocaleString("da-DK")} kr` :
                    "- kr"
                  }
                </p>
                <span className="text-xs text-gray-500">Per year</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">ATP (pension)</h3>
                <p className="text-lg font-semibold mt-1">
                  {calculationResult ? `${calculationResult.atpPension} kr` : "- kr"}
                </p>
                <span className="text-xs text-gray-500">Per month</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">Personfradrag</h3>
                <p className="text-lg font-semibold mt-1">4.300 kr</p>
                <span className="text-xs text-gray-500">Per month</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600">Andre fradrag</h3>
                <p className="text-lg font-semibold mt-1">
                  {calculationResult ? 
                    `${calculationResult.deductions.toLocaleString("da-DK")} kr` :
                    "- kr"
                  }
                </p>
                <span className="text-xs text-gray-500">Per month</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg col-span-2 md:col-span-1">
                <h3 className="text-sm font-medium text-gray-600">Reel skatteprocent</h3>
                <p className="text-lg font-semibold mt-1 text-orange-600">
                  {calculationResult ? 
                    `${calculationResult.realTaxRate.toFixed(1)}%` :
                    "-%"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-500 text-center">
          *Udregningen tager udgangspunkt i kommuneskatten i Københavns kommune uden kirkeskat.
        </div>
      </div>
    </div>
  );
};
