
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
            Herunder finder du en detaljeret gennemgang af, hvordan beregningerne fungerer,
            og hvad de forskellige tal betyder.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-3">1. Indtastning af løn</h3>
              <p>I feltet øverst indtaster du din månedsløn før skat (bruttoløn). Dette er det beløb, der står på din lønseddel før nogen form for fradrag eller skat.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">2. Personfradrag</h3>
              <p>Personfradraget er på 4.300 kr. om måneden (51.600 kr. årligt). Dette er et grundlæggende fradrag, som alle skatteydere har ret til. Det betyder, at de første 4.300 kr. du tjener om måneden, er fritaget for indkomstskat.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">3. Andre fradrag (Beskæftigelsesfradrag og Jobfradrag)</h3>
              <p>Andre fradrag består primært af:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Beskæftigelsesfradrag: Dette fradrag stiger med din indkomst og har et maksimum på 4.600 kr. pr. måned.</li>
                <li>Jobfradrag: Et ekstra fradrag der også stiger med indkomsten.</li>
                <li>Eksempler på månedlige fradrag:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Ved 15.000 kr/md: 1.846 kr</li>
                    <li>Ved 25.000 kr/md: 3.317 kr</li>
                    <li>Ved 35.000 kr/md: 4.547 kr</li>
                    <li>Ved 40.000 kr/md og derover: 4.875 kr</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">4. ATP Pension</h3>
              <p>ATP er en lovpligtig pensionsordning:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Fast månedligt beløb på 99 kr. for fuldtidsansatte</li>
                <li>Betales kun hvis din månedsløn er over 1.000 kr.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">5. Skatteprocenter og progressive trin</h3>
              <p>Skatten stiger progressivt med indkomsten. Her er nogle eksempler på reelle skatteprocenter:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>0-4.300 kr/md: 8,0%</li>
                <li>4.301-5.000 kr/md: 8,3%</li>
                <li>10.001-15.000 kr/md: 27,4%</li>
                <li>30.001-35.000 kr/md: 33,2%</li>
                <li>50.001-55.000 kr/md: 35,8%</li>
                <li>Over 80.000 kr/md: 44,2% og højere</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">6. Udbetalt løn (nettoløn)</h3>
              <p>Din udbetaling beregnes sådan:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Start med bruttolønnen (din indtastede månedsløn)</li>
                <li>Træk ATP fra (99 kr. hvis løn > 1.000 kr.)</li>
                <li>Fratræk skat baseret på din indkomst efter fradrag</li>
                <li>Resultatet er din månedlige udbetaling</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">7. Skat i alt</h3>
              <p>Den samlede månedlige skat vises i nederste højre hjørne og inkluderer:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Kommuneskat</li>
                <li>Bundskat</li>
                <li>Evt. topskat (ved højere indkomster)</li>
                <li>AM-bidrag (Arbejdsmarkedsbidrag)</li>
              </ul>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Eksempel på beregning</h3>
              <p>Lad os tage et eksempel med en månedsløn på 35.000 kr.:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Bruttoløn: 35.000 kr.</li>
                <li>ATP-bidrag: 99 kr.</li>
                <li>Personfradrag: 4.300 kr.</li>
                <li>Andre fradrag: 4.547 kr.</li>
                <li>Skatteprocent: 33,2%</li>
                <li>Skat i alt: 11.621 kr.</li>
                <li>Udbetalt: 23.280 kr.</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Bemærkninger</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>Beregningen er baseret på 2025-satser</li>
                <li>Der er taget udgangspunkt i Københavns kommunes skattesatser</li>
                <li>Kirkeskat er ikke medregnet</li>
                <li>Der er ikke taget højde for særlige fradrag som fx befordring, fagforening, etc.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
