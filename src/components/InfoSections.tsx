import { useMemo } from "react";
import { calculateTaxAndNet } from "@/utils/taxCalculations";

interface InfoSectionsProps {
  salary?: string;
  isMainPage?: boolean;
}

export const InfoSections = ({ salary, isMainPage = false }: InfoSectionsProps) => {
  const salaryNumber = salary ? parseInt(salary) : 35000;
  
  const calculationExample = useMemo(() => {
    const calculation = calculateTaxAndNet(salaryNumber);
    
    // Calculate all the values needed for the example
    const amBidrag = Math.round(salaryNumber * 0.08);
    const postAMB = salaryNumber - amBidrag;
    const andreFradrag = calculation.deductions;
    const personfradrag = 4300;
    const totalFradrag = personfradrag + andreFradrag;
    const skattepligtigIndkomst = Math.max(0, postAMB - totalFradrag);
    
    let skatBeregning;
    let topSkatTekst = "";
    const topThreshold = 50000;
    
    if (postAMB <= topThreshold) {
      // Not over top-tax threshold
      skatBeregning = {
        baseSkat: Math.round(skattepligtigIndkomst * 0.39),
        topSkat: 0
      };
    } else {
      // Over top-tax threshold
      const baseIncome = Math.max(0, topThreshold - totalFradrag);
      const topIncome = postAMB - topThreshold;
      const baseSkat = Math.round(baseIncome * 0.39);
      const topSkat = Math.round(topIncome * 0.54);
      
      skatBeregning = {
        baseSkat,
        topSkat
      };
      
      topSkatTekst = `
        <li>Indkomst over topskattegrænsen: ${postAMB.toLocaleString("da-DK")} - ${topThreshold.toLocaleString("da-DK")} = ${topIncome.toLocaleString("da-DK")} kr</li>
        <li>Topskat (54% af ${topIncome.toLocaleString("da-DK")}): ${topSkat.toLocaleString("da-DK")} kr</li>
      `;
    }
    
    const totalSkat = skatBeregning.baseSkat + skatBeregning.topSkat;
    const udbetalt = Math.round(salaryNumber - amBidrag - totalSkat - calculation.atpPension);
    
    return {
      grossSalary: salaryNumber.toLocaleString("da-DK"),
      amBidrag: amBidrag.toLocaleString("da-DK"),
      postAMB: postAMB.toLocaleString("da-DK"),
      andreFradrag: andreFradrag.toLocaleString("da-DK"),
      totalFradrag: totalFradrag.toLocaleString("da-DK"),
      skattepligtigIndkomst: skattepligtigIndkomst.toLocaleString("da-DK"),
      baseSkat: skatBeregning.baseSkat.toLocaleString("da-DK"),
      topSkat: skatBeregning.topSkat.toLocaleString("da-DK"),
      totalSkat: totalSkat.toLocaleString("da-DK"),
      atp: calculation.atpPension.toString(),
      udbetalt: udbetalt.toLocaleString("da-DK"),
      topSkatTekst,
      harTopSkat: postAMB > topThreshold,
      realTaxRate: calculation.realTaxRate.toFixed(1)
    };
  }, [salaryNumber]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-6 text-primary">
          {isMainPage 
            ? "Guide: Sådan bruges skatteberegneren og forstå dine skatteberegninger" 
            : `Guide: Sådan beregnes din løn på ${calculationExample.grossSalary} kr`}
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            {isMainPage 
              ? "Denne beregner hjælper dig med at få et overblik over din løn efter skat. Herunder finder du en detaljeret gennemgang af det progressive skattesystem og hvordan din skat beregnes trin for trin."
              : `Herunder finder du en detaljeret gennemgang af, hvordan din løn på ${calculationExample.grossSalary} kr 
                beregnes efter skat, og hvordan det progressive skattesystem påvirker din indkomst.
                Din effektive skatteprocent er <strong>${calculationExample.realTaxRate}%</strong> og 
                du får udbetalt <strong>${calculationExample.udbetalt} kr</strong> efter skat.`
            }
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-3">1. AM-bidrag (Arbejdsmarkedsbidrag)</h3>
              <p>Det første der fratrækkes din løn er AM-bidraget på 8%. Dette bidrag beregnes af din bruttoløn inden andre fradrag.</p>
              <p className="mt-1"><strong>Din beregning:</strong> {calculationExample.grossSalary} kr × 0,08 = {calculationExample.amBidrag} kr</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">2. Andre fradrag</h3>
              <p>Efter AM-bidrag fratrækkes der et månedligt fradrag, der afhænger af din indkomst. Dette beløb er skattefrit.</p>
              <p className="mt-1"><strong>Dit fradrag:</strong> {calculationExample.andreFradrag} kr ved en indkomst på {calculationExample.grossSalary} kr</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">3. Almindelig indkomstskat</h3>
              <p>For indkomst over fradraget og under topskattegrænsen betales en samlet skatteprocent på cirka 39%. Dette inkluderer:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Kommuneskat</li>
                <li>Sundhedsbidrag</li>
                <li>Bundskat</li>
              </ul>
              <p className="mt-1"><strong>Din beregning:</strong> {calculationExample.skattepligtigIndkomst} kr × 0,39 = {calculationExample.baseSkat} kr</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">4. Topskat</h3>
              <p>Hvis din månedlige indkomst efter AM-bidrag overstiger 50.000 kr, skal du betale topskat. Dette betyder:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>15% ekstra skat på den del af indkomsten, der ligger over topskattegrænsen</li>
                <li>Dette kommer oveni den almindelige indkomstskat på 39%</li>
                <li>Den samlede marginalskat kan således blive op til 54% for indkomst over topskattegrænsen</li>
              </ul>
              {calculationExample.harTopSkat && (
                <p className="mt-1 text-orange-600"><strong>Din beregning inkluderer topskat</strong>, da din indkomst efter AM-bidrag er over 50.000 kr. Din topskat udgør {calculationExample.topSkat} kr.</p>
              )}
              {!calculationExample.harTopSkat && (
                <p className="mt-1"><strong>Din indkomst er ikke omfattet af topskat</strong>, da den er under grænsen på 50.000 kr efter AM-bidrag</p>
              )}
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">5. ATP (Arbejdsmarkedets Tillægspension)</h3>
              <p>ATP er et fast pensionsbidrag:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>99 kr. per måned for fuldtidsansatte</li>
                <li>Betales kun hvis månedslønnen er over 3.000 kr</li>
                <li>ATP-bidraget trækkes fra efter alle skatter er beregnet</li>
              </ul>
              <p className="mt-1"><strong>Dit ATP-bidrag:</strong> {calculationExample.atp} kr</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">6. {isMainPage ? "Beregningseksempel" : "Din beregning"}</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">For en månedsløn på {calculationExample.grossSalary} kr:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>AM-bidrag (8%): {calculationExample.grossSalary} × 0,08 = {calculationExample.amBidrag} kr</li>
                  <li>Efter AM-bidrag: {calculationExample.grossSalary} - {calculationExample.amBidrag} = {calculationExample.postAMB} kr</li>
                  <li>Personfradrag: 4.300 kr</li>
                  <li>Andre fradrag: {calculationExample.andreFradrag} kr</li>
                  <li>Samlet fradrag: 4.300 + {calculationExample.andreFradrag} = {calculationExample.totalFradrag} kr</li>
                  <li>Skattepligtig indkomst: {calculationExample.postAMB} - {calculationExample.totalFradrag} = {calculationExample.skattepligtigIndkomst} kr</li>
                  {!calculationExample.harTopSkat && (
                    <li>Skat (39% af {calculationExample.skattepligtigIndkomst}): {calculationExample.totalSkat} kr</li>
                  )}
                  {calculationExample.harTopSkat && (
                    <>
                      <li>Skat på indkomst op til topskattegrænsen: {calculationExample.baseSkat} kr</li>
                      <li dangerouslySetInnerHTML={{ __html: calculationExample.topSkatTekst }}></li>
                      <li>Samlet skat: {calculationExample.totalSkat} kr</li>
                    </>
                  )}
                  <li>ATP-bidrag: {calculationExample.atp} kr</li>
                  <li>Udbetalt: {calculationExample.grossSalary} - {calculationExample.amBidrag} - {calculationExample.totalSkat} - {calculationExample.atp} = {calculationExample.udbetalt} kr</li>
                </ol>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">7. Bemærkninger</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>Beregningen er baseret på 2025-satser</li>
                <li>Der er taget udgangspunkt i Københavns kommunes skattesatser</li>
                <li>Kirkeskat er ikke medregnet</li>
                <li>Der er ikke taget højde for særlige fradrag som fx:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Befordring</li>
                    <li>Fagforeningskontingent</li>
                    <li>Pensionsindbetalinger</li>
                    <li>Renteudgifter</li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
