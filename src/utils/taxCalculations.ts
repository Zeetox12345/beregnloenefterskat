
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
  const postAMB = monthlyGrossSalary * (1 - AM_RATE);

  // 3. Get progressive "andre fradrag"
  const personalAllowance = getAndreFradrag(monthlyGrossSalary);

  // 4. Calculate net income using progressive tax system
  let monthlyNet = 0;
  if (postAMB <= personalAllowance) {
    // If below personal allowance, only AM-bidrag is deducted
    monthlyNet = postAMB;
  } else {
    // Calculate taxable amount above personal allowance
    const taxableAboveAllowance = postAMB - personalAllowance;
    const thresholdSpan = TOP_THRESHOLD - personalAllowance;

    if (taxableAboveAllowance <= thresholdSpan) {
      // Not over top-tax threshold
      monthlyNet = postAMB - (BASE_TAX_RATE * taxableAboveAllowance);
    } else {
      // Over top-tax threshold
      const overTop = taxableAboveAllowance - thresholdSpan;
      const afterBaseTaxToThreshold = postAMB - BASE_TAX_RATE * thresholdSpan;
      monthlyNet = afterBaseTaxToThreshold - ((BASE_TAX_RATE + TOP_TAX_RATE) * overTop);
    }
  }

  // Subtract ATP from net income
  monthlyNet -= atpPension;

  // Calculate real tax rate
  const totalTax = monthlyGrossSalary - monthlyNet - atpPension;
  const realTaxRate = (totalTax / monthlyGrossSalary) * 100;

  return {
    yearlyGross: monthlyGrossSalary * 12,
    monthlyNet: Math.round(monthlyNet), // Round to nearest whole number
    realTaxRate: Math.round(realTaxRate * 10) / 10, // Round to 1 decimal
    taxAmount: Math.round(totalTax),
    deductions: personalAllowance,
    atpPension
  };
};
