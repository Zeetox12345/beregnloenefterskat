export const InfoSections = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-6 text-primary">
          Guide: Sådan bruger du beregneren til at finde ud af, hvad du får udbetalt efter skat
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            Denne beregner hjælper dig med at finde ud af, hvad du får udbetalt efter skat.
            For at beregningen bliver korrekt, er det vigtigt, at du bruger de rigtige tal.
            Her får du en gennemgang af, hvordan du både udfylder beregneren og finder de nødvendige oplysninger.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-3">1. Løn før skat (kr.)</h3>
              <p>Dette felt er din bruttoløn, altså din løn før der trækkes skat, arbejdsmarkedsbidrag (AM-bidrag), og pension.</p>
              <p className="font-medium mt-2">Sådan finder du din bruttoløn:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Tjek din lønseddel, hvor bruttolønnen normalt står øverst som "Månedsløn" eller "Bruttoløn".</li>
                <li>Hvis du ikke har din lønseddel ved hånden, kan du spørge din arbejdsgiver eller HR-afdeling.</li>
              </ul>
              <p className="mt-2"><strong>Eksempel:</strong><br />
              Hvis din månedlige bruttoløn er 35.000 kr., indtaster du "35000".</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">2. Fradrag (kr.)</h3>
              <p>Fradraget er det beløb, du kan trække fra, før din skat bliver beregnet.</p>
              <p className="font-medium mt-2">Sådan finder du dit fradrag:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Log ind på Skat.dk og se din forskudsopgørelse. Her finder du dit årlige personfradrag, som du kan dele med 12 for at få det månedlige fradrag.</li>
                <li>Hvis du har andre fradrag, fx kørselsfradrag eller fagforeningskontingent, skal du lægge disse til det månedlige beløb.</li>
              </ul>
              <p className="mt-2"><strong>Eksempel:</strong></p>
              <ul className="list-disc pl-6">
                <li>Dit årlige personfradrag er fx 48.000 kr.</li>
                <li>Del 48.000 kr. med 12 måneder: 48.000 ÷ 12 = 4.000 kr.</li>
                <li>Hvis du har andre fradrag, lægger du dem til de 4.000 kr.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">3. Trækprocent (%)</h3>
              <p>Trækprocenten viser, hvor stor en del af din løn der bliver trukket til skat.</p>
              <p className="font-medium mt-2">Sådan finder du din trækprocent:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Log ind på Skat.dk og kig på din forskudsopgørelse. Her kan du finde din trækprocent under overskriften "Skatteprocent".</li>
                <li>Hvis du ikke ved, hvor du skal kigge, kan du bruge Skats chatfunktion eller spørge din arbejdsgiver.</li>
              </ul>
              <p className="mt-2"><strong>Eksempel:</strong><br />
              Hvis din trækprocent er 39 %, indtaster du "39".</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">4. Egen pensionsindbetaling (%)</h3>
              <p>Her angiver du den procentdel af din løn, som du selv betaler til pension.</p>
              <p className="font-medium mt-2">Sådan finder du din pensionsprocent:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Tjek din lønseddel, hvor pensionsindbetalingerne normalt står som en procentdel af din løn eller som et beløb.</li>
                <li>Hvis din arbejdsgiver også indbetaler til pension, står dette som regel separat. Du skal kun indtaste din egen andel.</li>
              </ul>
              <p className="mt-2"><strong>Eksempel:</strong></p>
              <ul className="list-disc pl-6">
                <li>Din lønseddel viser, at du indbetaler 5 % af din bruttoløn til pension.</li>
                <li>Hvis din løn er 35.000 kr., svarer 5 % til 1.750 kr.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">5. Fri telefon, computer eller internet</h3>
              <p>Hvis du har frynsegoder som fri telefon, computer eller internet, skal du slå denne knap til.</p>
              <p className="font-medium mt-2">Sådan finder du ud af, om du har frynsegoder:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Tjek din ansættelseskontrakt eller spørg din arbejdsgiver.</li>
                <li>Hvis du har fri telefon, internet eller en arbejdsgiverbetalt computer, bliver dette normalt oplyst i din kontrakt eller på lønsedlen.</li>
              </ul>
              <p className="mt-2"><strong>Eksempel:</strong></p>
              <ul className="list-disc pl-6">
                <li>Hvis du har fri telefon, bliver du beskattet af ca. 250 kr. om måneden.</li>
                <li>Slå knappen til for at inkludere denne beskatning i beregningen.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">6. Beregn (BEREGN-knappen)</h3>
              <p>Når du har udfyldt alle felter, klikker du på "BEREGN".</p>
              <p>Beregneren viser, hvad din løn efter skat bliver.</p>
              <p>Det beløb, du ser som resultat, er din nettoløn – det, der bliver overført til din bankkonto.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">7. Nulstil (NULSTIL-knappen)</h3>
              <p>Hvis du vil starte forfra med nye tal, klikker du på "NULSTIL".</p>
              <p>Alle felter bliver tømt, og du kan indtaste nye oplysninger.</p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Eksempel på, hvordan du udfylder beregneren</h3>
              <p className="mb-4">Lad os sige:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Din bruttoløn er 35.000 kr.</li>
                <li>Dit månedlige fradrag er 4.000 kr.</li>
                <li>Din trækprocent er 39 %.</li>
                <li>Du betaler 5 % af din løn til pension.</li>
                <li>Du har fri telefon.</li>
              </ul>
              
              <p className="font-medium mb-2">Beregningstrin:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Skattepligtig indkomst:<br />
                Bruttoløn (35.000 kr.) - Fradrag (4.000 kr.) = 31.000 kr.</li>
                <li>Arbejdsmarkedsbidrag (AM-bidrag):<br />
                31.000 kr. x 8 % = 2.480 kr.</li>
                <li>Indkomst efter AM-bidrag:<br />
                31.000 kr. - 2.480 kr. = 28.520 kr.</li>
                <li>Skat (trækprocent):<br />
                28.520 kr. x 39 % = 11.122,80 kr.</li>
                <li>Pension:<br />
                35.000 kr. x 5 % = 1.750 kr.</li>
                <li>Beskatning af frynsegoder (fri telefon):<br />
                Der lægges ca. 250 kr. til din skattepligtige indkomst.</li>
                <li>Nettoløn:<br />
                Bruttoløn (35.000 kr.) - (AM-bidrag + skat + pension + frynsegodebeskatning) = ca. 19.647 kr.</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};