
interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

const AM_RATE = 0.08;            // 8% labor market contribution
const PERSONAL_ALLOWANCE = 4875; // "andre fradrag" monthly
const BASE_TAX_RATE = 0.39;      // combined ordinary tax ~39%
const TOP_TAX_RATE = 0.15;       // top-skat 15%
const TOP_THRESHOLD = 50000;     // ~50k monthly
const ATP_PENSION = 99;          // ATP pension contribution
const ATP_THRESHOLD = 3000;      // Minimum salary for ATP

export const calculateTaxAndNet = (monthlyGrossSalary: number) => {
  // Handle negative or zero salary
  if (monthlyGrossSalary <= 0) {
    return {
      yearlyGross: 0,
      monthlyNet: 0,
      realTaxRate: 0,
      taxAmount: 0,
      deductions: PERSONAL_ALLOWANCE,
      atpPension: 0
    };
  }

  // 1. Calculate ATP
  const atpPension = monthlyGrossSalary > ATP_THRESHOLD ? ATP_PENSION : 0;

  // 2. Subtract AM-bidrag (8%)
  const postAMB = monthlyGrossSalary * (1 - AM_RATE);

  // 3. Calculate net income using progressive tax system
  let monthlyNet = 0;
  if (postAMB <= PERSONAL_ALLOWANCE) {
    // If below personal allowance, only AM-bidrag is deducted
    monthlyNet = postAMB;
  } else {
    // Calculate taxable amount above personal allowance
    const basePart = postAMB - PERSONAL_ALLOWANCE;
    const thresholdSpan = TOP_THRESHOLD - PERSONAL_ALLOWANCE;

    if (basePart <= thresholdSpan) {
      // Not over top-tax threshold
      monthlyNet = postAMB - (BASE_TAX_RATE * basePart);
    } else {
      // Over top-tax threshold
      const overTop = basePart - thresholdSpan;
      const portionAfterBase = postAMB - (BASE_TAX_RATE * thresholdSpan);
      monthlyNet = portionAfterBase - ((BASE_TAX_RATE + TOP_TAX_RATE) * overTop);
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
    deductions: PERSONAL_ALLOWANCE,
    atpPension
  };
};
