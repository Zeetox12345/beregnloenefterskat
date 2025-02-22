
export const InfoSections = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-6 text-primary">
          Guide: Sådan bruges skatteberegneren og forstå dine skatteberegninger
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            Denne beregner hjælper dig med at få et overblik over din løn efter skat.
            Herunder finder du en detaljeret gennemgang af det progressive skattesystem
            og hvordan din skat beregnes trin for trin.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-3">1. AM-bidrag (Arbejdsmarkedsbidrag)</h3>
              <p>Det første der fratrækkes din løn er AM-bidraget på 8%. Dette bidrag beregnes af din bruttoløn inden andre fradrag.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">2. Andre fradrag</h3>
              <p>Efter AM-bidrag fratrækkes der et månedligt fradrag på 4.547 kr ved en indkomst på 35.000 kr. Dette beløb er skattefrit, hvilket betyder at du ikke betaler skat af de første 4.547 kr af din indkomst efter AM-bidrag.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">3. Almindelig indkomstskat</h3>
              <p>For indkomst over fradraget og under topskattegrænsen betales en samlet skatteprocent på cirka 39%. Dette inkluderer:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Kommuneskat</li>
                <li>Sundhedsbidrag</li>
                <li>Bundskat</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">4. Topskat</h3>
              <p>Hvis din månedlige indkomst efter AM-bidrag overstiger 50.000 kr, skal du betale topskat. Dette betyder:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>15% ekstra skat på den del af indkomsten, der ligger over topskattegrænsen</li>
                <li>Dette kommer oveni den almindelige indkomstskat på 39%</li>
                <li>Den samlede marginalskat kan således blive op til 54% for indkomst over topskattegrænsen</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">5. ATP (Arbejdsmarkedets Tillægspension)</h3>
              <p>ATP er et fast pensionsbidrag:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>99 kr. per måned for fuldtidsansatte</li>
                <li>Betales kun hvis månedslønnen er over 3.000 kr</li>
                <li>ATP-bidraget trækkes fra efter alle skatter er beregnet</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">6. Beregningseksempel</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">For en månedsløn på 35.000 kr:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>AM-bidrag (8%): 35.000 × 0,08 = 2.800 kr</li>
                  <li>Efter AM-bidrag: 35.000 - 2.800 = 32.200 kr</li>
                  <li>Personfradrag: 4.300 kr</li>
                  <li>Andre fradrag: 4.547 kr</li>
                  <li>Samlet fradrag: 4.300 + 4.547 = 8.847 kr</li>
                  <li>Skattepligtig indkomst: 32.200 - 8.847 = 23.353 kr</li>
                  <li>Skat (39% af 23.353): 9.108 kr</li>
                  <li>ATP-bidrag: 99 kr</li>
                  <li>Udbetalt: 35.000 - 2.800 - 9.108 - 99 = 22.993 kr</li>
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
