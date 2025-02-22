
interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

const TAX_BRACKETS: TaxBracket[] = [
  { min: 0, max: 10000, rate: 22.1 },
  { min: 10001, max: 15000, rate: 27.4 },
  { min: 15001, max: 20000, rate: 29.9 },
  { min: 20001, max: 30000, rate: 32.4 },
  { min: 30001, max: 35000, rate: 33.2 },
  { min: 35001, max: 40000, rate: 34.0 },
  { min: 40001, max: 45000, rate: 34.7 },
  { min: 45001, max: 50000, rate: 35.3 },
  { min: 50001, max: 55000, rate: 35.8 },
  { min: 55001, max: 60000, rate: 37.2 },
  { min: 60001, max: 70000, rate: 39.7 },
  { min: 70001, max: 80000, rate: 41.6 },
  { min: 80001, max: 100000, rate: 44.2 },
  { min: 100001, max: 150000, rate: 47.6 },
  { min: 150001, max: 200000, rate: 49.4 },
  { min: 200001, max: 300000, rate: 51.1 },
  { min: 300001, max: null, rate: 51.1 },
];

const STANDARD_DEDUCTION = 4300;
const ATP_PENSION = 99;

export const calculateTaxAndNet = (monthlyGrossSalary: number) => {
  // Handle negative or zero salary
  if (monthlyGrossSalary <= 0) {
    return {
      yearlyGross: 0,
      monthlyNet: 0,
      realTaxRate: 0,
      taxAmount: 0,
      deductions: 0,
      atpPension: 0
    };
  }

  // Find applicable tax bracket
  const bracket = TAX_BRACKETS.find(
    (b) => monthlyGrossSalary >= b.min && 
    (b.max === null || monthlyGrossSalary <= b.max)
  );

  const taxRate = bracket ? bracket.rate : TAX_BRACKETS[0].rate;
  
  // Calculate yearly values
  const yearlyGross = monthlyGrossSalary * 12;
  
  // Calculate monthly values
  const monthlyDeduction = STANDARD_DEDUCTION;
  const otherDeductions = Math.min(monthlyGrossSalary * 0.13, monthlyGrossSalary); // Cap deductions at salary amount
  
  // Only apply ATP pension if salary is above a certain threshold (e.g., 1000 kr)
  const atpPension = monthlyGrossSalary > 1000 ? ATP_PENSION : 0;
  
  // Calculate taxable income (cannot be negative)
  const taxableIncome = Math.max(0, monthlyGrossSalary - monthlyDeduction - otherDeductions - atpPension);
  
  // Calculate tax and net salary
  const taxAmount = (taxableIncome * taxRate) / 100;
  const netSalary = Math.max(0, monthlyGrossSalary - taxAmount - atpPension);

  return {
    yearlyGross: Math.max(0, yearlyGross),
    monthlyNet: Math.round(netSalary),
    realTaxRate: monthlyGrossSalary > 0 ? taxRate : 0,
    taxAmount: Math.round(taxAmount),
    deductions: Math.round(monthlyDeduction + otherDeductions),
    atpPension
  };
};
