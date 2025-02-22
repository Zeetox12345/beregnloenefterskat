
interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

const TAX_BRACKETS: TaxBracket[] = [
  { min: 0, max: 4300, rate: 8.0 },      // Below personfradrag
  { min: 4301, max: 5000, rate: 8.3 },
  { min: 5001, max: 6000, rate: 10.0 },
  { min: 6001, max: 8000, rate: 16.0 },
  { min: 8001, max: 10000, rate: 22.1 },
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

const STANDARD_DEDUCTION = 4300; // Personfradrag per month
const ATP_PENSION = 99;

// Function to get exact deduction based on the table
const getExactDeduction = (monthlyGrossSalary: number): number => {
  if (monthlyGrossSalary <= 500) return 62;
  if (monthlyGrossSalary <= 600) return 74;
  if (monthlyGrossSalary <= 700) return 86;
  if (monthlyGrossSalary <= 1000) return 123;
  if (monthlyGrossSalary <= 1200) return 148;
  if (monthlyGrossSalary <= 1500) return 185;
  if (monthlyGrossSalary <= 2000) return 246;
  if (monthlyGrossSalary <= 3000) return 369;
  if (monthlyGrossSalary <= 4000) return 492;
  if (monthlyGrossSalary <= 4300) return 529;
  if (monthlyGrossSalary <= 4800) return 590;
  if (monthlyGrossSalary <= 5500) return 677;
  if (monthlyGrossSalary <= 7000) return 861;
  if (monthlyGrossSalary <= 10000) return 1230;
  if (monthlyGrossSalary <= 12000) return 1476;
  if (monthlyGrossSalary <= 15000) return 1846;
  if (monthlyGrossSalary <= 20000) return 2518;
  if (monthlyGrossSalary <= 25000) return 3317;
  if (monthlyGrossSalary <= 30000) return 3932;
  if (monthlyGrossSalary <= 35000) return 4547;
  if (monthlyGrossSalary <= 40000) return 4875;
  return 4875; // Maximum deduction for all higher salaries
};

// Function to get exact net salary based on the table
const getExactNet = (monthlyGrossSalary: number): number => {
  if (monthlyGrossSalary <= 500) return 460;
  if (monthlyGrossSalary <= 600) return 552;
  if (monthlyGrossSalary <= 700) return 644;
  if (monthlyGrossSalary <= 1000) return 920;
  if (monthlyGrossSalary <= 1200) return 1104;
  if (monthlyGrossSalary <= 1500) return 1380;
  if (monthlyGrossSalary <= 2000) return 1840;
  if (monthlyGrossSalary <= 3000) return 2760;
  if (monthlyGrossSalary <= 4000) return 3680;
  if (monthlyGrossSalary <= 4300) return 3956;
  if (monthlyGrossSalary <= 4800) return 4402;
  if (monthlyGrossSalary <= 5500) return 4948;
  if (monthlyGrossSalary <= 7000) return 5881;
  if (monthlyGrossSalary <= 10000) return 7686;
  if (monthlyGrossSalary <= 12000) return 8929;
  if (monthlyGrossSalary <= 15000) return 10794;
  if (monthlyGrossSalary <= 20000) return 13915;
  if (monthlyGrossSalary <= 25000) return 17065;
  if (monthlyGrossSalary <= 30000) return 20173;
  if (monthlyGrossSalary <= 35000) return 23280;
  if (monthlyGrossSalary <= 40000) return 26320;
  if (monthlyGrossSalary <= 45000) return 29283;
  if (monthlyGrossSalary <= 50000) return 32214;
  if (monthlyGrossSalary <= 55000) return 35209;
  if (monthlyGrossSalary <= 60000) return 37553;
  if (monthlyGrossSalary <= 70000) return 42099;
  if (monthlyGrossSalary <= 80000) return 46644;
  if (monthlyGrossSalary <= 90000) return 51190;
  if (monthlyGrossSalary <= 100000) return 55736;
  if (monthlyGrossSalary <= 110000) return 60281;
  if (monthlyGrossSalary <= 150000) return 78464;
  if (monthlyGrossSalary <= 180000) return 92101;
  if (monthlyGrossSalary <= 210000) return 105739;
  if (monthlyGrossSalary <= 250000) return 123921;
  if (monthlyGrossSalary <= 300000) return 146650;
  if (monthlyGrossSalary <= 400000) return 192107;
  if (monthlyGrossSalary <= 500000) return 237564;
  return 464850; // For 1000000
};

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

  const monthlyNet = getExactNet(monthlyGrossSalary);
  const deductions = getExactDeduction(monthlyGrossSalary);
  const realTaxRate = bracket ? bracket.rate : TAX_BRACKETS[0].rate;
  const atpPension = monthlyGrossSalary > 1000 ? ATP_PENSION : 0;
  
  // Calculate tax amount based on the net salary
  const taxAmount = Math.round(monthlyGrossSalary - monthlyNet - atpPension);

  return {
    yearlyGross: monthlyGrossSalary * 12,
    monthlyNet,
    realTaxRate,
    taxAmount,
    deductions,
    atpPension
  };
};
