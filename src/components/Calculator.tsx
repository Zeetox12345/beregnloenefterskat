import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export const Calculator = () => {
  const { toast } = useToast();
  const [salary, setSalary] = useState("");
  const [deduction, setDeduction] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [pension, setPension] = useState("");
  const [benefits, setBenefits] = useState(false);
  const [netSalary, setNetSalary] = useState<number | null>(null);

  const calculateSalary = () => {
    if (!salary || !taxRate) {
      toast({
        title: "Manglende information",
        description: "Udfyld venligst løn og trækprocent",
        variant: "destructive",
      });
      return;
    }

    const grossSalary = Number(salary);
    const deductions = Number(deduction) || 0;
    const taxRateNum = Number(taxRate);
    const pensionRate = Number(pension) || 0;

    const pensionAmount = (grossSalary * pensionRate) / 100;
    const taxableIncome = grossSalary - deductions - pensionAmount;
    const tax = (taxableIncome * taxRateNum) / 100;
    
    const calculatedNetSalary = taxableIncome - tax;
    
    setNetSalary(Math.round(calculatedNetSalary));
    
    toast({
      title: "Beregning udført",
      description: "Din nettoløn er blevet beregnet",
    });
  };

  const resetCalculator = () => {
    setSalary("");
    setDeduction("");
    setTaxRate("");
    setPension("");
    setBenefits(false);
    setNetSalary(null);
    
    toast({
      title: "Nulstillet",
      description: "Alle felter er blevet nulstillet",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="salary">Løn før skat (kr.)</Label>
            <Input
              id="salary"
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="F.eks. 35000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deduction">Fradrag (kr.)</Label>
            <Input
              id="deduction"
              type="number"
              value={deduction}
              onChange={(e) => setDeduction(e.target.value)}
              placeholder="F.eks. 4000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="taxRate">Trækprocent (%)</Label>
            <Input
              id="taxRate"
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              placeholder="F.eks. 39"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pension">Egen pensionsindbetaling (%)</Label>
            <Input
              id="pension"
              type="number"
              value={pension}
              onChange={(e) => setPension(e.target.value)}
              placeholder="F.eks. 5"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="benefits"
              checked={benefits}
              onCheckedChange={setBenefits}
            />
            <Label htmlFor="benefits">Fri telefon, computer eller internet</Label>
          </div>

          <div className="flex space-x-4">
            <Button onClick={calculateSalary} className="flex-1">
              BEREGN
            </Button>
            <Button
              onClick={resetCalculator}
              variant="outline"
              className="flex-1"
            >
              Nulstil
            </Button>
          </div>

          {netSalary !== null && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold text-center mb-2">
                Din forventede nettoløn
              </h3>
              <p className="text-2xl font-bold text-primary text-center">
                {netSalary.toLocaleString("da-DK")} kr. pr. måned
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};