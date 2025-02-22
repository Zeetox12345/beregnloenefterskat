
interface TaxBracket {
  wage: number;
  fradrag: number;
}

const FRADRAG_BRACKETS: TaxBracket[] = [
  { wage:    500, fradrag:  62 },
  { wage:    600, fradrag:  74 },
  { wage:    700, fradrag:  86 },
  { wage:   1000, fradrag: 123 },
  { wage:   1200, fradrag: 148 },
  { wage:   1500, fradrag: 185 },
  { wage:   2000, fradrag: 246 },
  { wage:   3000, fradrag: 369 },
  { wage:   4000, fradrag: 492 },
  { wage:   4300, fradrag: 529 },
  { wage:   5000, fradrag: 615 },
  { wage:   5500, fradrag: 677 },
  { wage:   6000, fradrag: 739 },
  { wage:   7000, fradrag: 861 },
  { wage:  10000, fradrag: 1230 },
  { wage:  12000, fradrag: 1476 },
  { wage:  15000, fradrag: 1846 },
  { wage:  20000, fradrag: 2518 },
  { wage:  25000, fradrag: 3317 },
  { wage:  30000, fradrag: 3932 },
  { wage:  35000, fradrag: 4547 },
  { wage:  40000, fradrag: 4875 },
  { wage: Infinity, fradrag: 4875 },
];

const AM_RATE = 0.08;            // 8% labor market contribution
const BASE_TAX_RATE = 0.39;      // combined ordinary tax ~39%
const TOP_TAX_RATE = 0.15;       // top-skat 15%
const TOP_THRESHOLD = 50000;     // ~50k monthly
const ATP_PENSION = 99;          // ATP pension contribution
const ATP_THRESHOLD = 3000;      // Minimum salary for ATP
const PERSONFRADRAG = 4300;      // Monthly personfradrag

const getAndreFradrag = (monthlyWage: number): number => {
  for (let i = 0; i < FRADRAG_BRACKETS.length; i++) {
    if (monthlyWage <= FRADRAG_BRACKETS[i].wage) {
      return FRADRAG_BRACKETS[i].fradrag;
    }
  }
  return 0; // Fallback (should never happen due to Infinity bracket)
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

  // 1. Calculate ATP
  const atpPension = monthlyGrossSalary > ATP_THRESHOLD ? ATP_PENSION : 0;

  // 2. Subtract AM-bidrag (8%)
  const amBidrag = monthlyGrossSalary * AM_RATE;
  const postAMB = monthlyGrossSalary - amBidrag;

  // 3. Get progressive "andre fradrag"
  const personalAllowance = getAndreFradrag(monthlyGrossSalary);
  
  // 4. Calculate total tax deductions including personfradrag
  const totalDeductions = PERSONFRADRAG + personalAllowance;

  // 5. Calculate taxable income
  let taxableIncome = Math.max(0, postAMB - totalDeductions);

  // 6. Calculate tax on taxable income
  let taxOnIncome = 0;
  if (postAMB <= TOP_THRESHOLD) {
    // Not over top-tax threshold
    taxOnIncome = taxableIncome * BASE_TAX_RATE;
  } else {
    // Over top-tax threshold
    const baseIncome = TOP_THRESHOLD - totalDeductions;
    const topIncome = postAMB - TOP_THRESHOLD;
    taxOnIncome = (baseIncome * BASE_TAX_RATE) + (topIncome * (BASE_TAX_RATE + TOP_TAX_RATE));
  }

  // 7. Calculate monthly net income
  const monthlyNet = monthlyGrossSalary - amBidrag - taxOnIncome - atpPension;

  // 8. Calculate real tax rate (including AM-bidrag but not ATP)
  const totalTax = amBidrag + taxOnIncome;
  const realTaxRate = (totalTax / monthlyGrossSalary) * 100;

  return {
    yearlyGross: monthlyGrossSalary * 12,
    monthlyNet: Math.round(monthlyNet),
    realTaxRate: Math.round(realTaxRate * 10) / 10,
    taxAmount: Math.round(totalTax),
    deductions: personalAllowance,
    atpPension
  };
};
