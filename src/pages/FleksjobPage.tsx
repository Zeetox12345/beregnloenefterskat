import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { calculateTaxAndNet } from "@/utils/taxCalculations";

const FleksjobPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 30000, netMin: 20000, netMax: 20500 },
    "Aarhus": { grossSalary: 29500, netMin: 19700, netMax: 20200 },
    "Odense": { grossSalary: 28500, netMin: 19000, netMax: 19500 },
    "Aalborg": { grossSalary: 28000, netMin: 18500, netMax: 19000 },
    "Esbjerg": { grossSalary: 27500, netMin: 18200, netMax: 18700 },
    "Randers": { grossSalary: 27000, netMin: 17700, netMax: 18200 },
    "Vejle": { grossSalary: 29000, netMin: 19200, netMax: 19700 }
  };

  const cityExamples = useMemo(() => {
    return Object.entries(cityData).map(([city, data]) => {
      const calculation = calculateTaxAndNet(data.grossSalary);
      return {
        city,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax,
        netSalary: calculation.monthlyNet,
        realTaxRate: calculation.realTaxRate
      };
    });
  }, []);

  const selectedCityData = cityData[selectedCity];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Fleksjob Løn Efter Skat – Se Hvad Du Får Udbetalt"
        description="Få overblik over fleksjob løn efter skat i Danmark 2025. Se eksempler by for by og brug værktøj til at beregne din udbetaling præcist."
        keywords="fleksjob løn efter skat, fleksløn 30000 kr, fleksløntilskud, fleksjob nettoløn, fleksjob beregning 2025, fleksjob København, fleksjob Aarhus"
      />
      <Header />
      <PageTitle title="Fleksjob Løn Efter Skat – Din Ultimative Guide" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Fleksjob Løn Efter Skat – Din Ultimative Guide</h1>
            
            <p className="lead">
              Er du i tvivl om, hvordan din fleksjob-løn egentlig ser ud efter skat? I denne guide gennemgår vi 
              hvordan en fleksjob-løn på 30.000 kr i København bliver til 20.000-20.500 kr efter skat. Vi viser også 
              hvordan fleksløn i Aarhus på 29.500 kr giver 19.700-20.200 kr udbetalt, eller hvordan 28.500 kr i Odense 
              bliver til 19.000-19.500 kr efter skat. Vi dækker alt, du behøver at vide om fleksjob, hvordan lønnen beregnes, 
              og hvilke faktorer der påvirker din endelige udbetaling. Hvis du vil have et hurtigt overblik over din nettoløn i andre sammenhænge, 
              kan du bruge værktøjet 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>
              til at lave en hurtig estimering.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fleksjob i Danmark – Kort Fortalt</h2>
            <p>
              Fleksjob er en ordning, der gør det muligt for personer med varigt nedsat arbejdsevne at forblive på arbejdsmarkedet. 
              Du får løn fra din arbejdsgiver for de timer, du faktisk arbejder, mens kommunen bidrager med et fleksløntilskud, 
              der skal supplere dig op til en rimelig samlet indkomst. For en fleksjobber i København med en månedlig bruttoløn 
              på 30.000 kr betyder det en udbetaling efter skat på mellem 20.000 kr og 20.500 kr, afhængigt af individuelle 
              fradrag og skatteforhold.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg my-6">
              <h3 className="text-lg font-semibold mb-2">Overordnede elementer i fleksjob-løn:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Løn fra arbejdsgiver:</strong> Betales for de faktiske timer, du arbejder.</li>
                <li><strong>Fleksløntilskud:</strong> Kommunen supplerer din løn, så du kan opnå en indkomst på niveau med et fuldtidsjob, tilpasset din nedsatte arbejdsevne.</li>
                <li><strong>Skat og fradrag:</strong> Du betaler kommuneskat, arbejdsmarkedsbidrag (AM-bidrag), og eventuelle pensionsindbetalinger kan også spille ind.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempler på Fleksjob Løn Før og Efter Skat</h2>
            <p>
              Tabellen herunder illustrerer et gennemsnitligt spænd mellem løn før og efter skat i forskellige større byer. 
              I København kan en fleksjobber med 30.000 kr i bruttoløn forvente 20.000-20.500 kr udbetalt, mens en tilsvarende 
              stilling i Randers med 27.000 kr i løn før skat giver 17.700-18.200 kr udbetalt. Tallene er vejledende og varierer 
              baseret på lokale skatteprocenter og individuelle forhold.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((example) => (
                    <tr 
                      key={example.city} 
                      className={`hover:bg-gray-50 ${example.city === selectedCity ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedCity(example.city)}
                    >
                      <td className="py-3 px-4 border-b">{example.city}</td>
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} - {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              Bemærk: Disse estimater tager udgangspunkt i en fleksjob-ansættelse på omkring 20-25 timer om ugen og en gennemsnitlig kommuneskat. 
              Din reelle fleksjob løn efter skat kan afvige fra eksemplerne her.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fleksjob Lønberegning i Større Byer</h2>
            <p>
              Sammenlignet på tværs af byer ser vi, at en fleksjob-indkomst i Vejle på 29.000 kr før skat resulterer i 
              19.200-19.700 kr efter skat, hvilket giver en effektiv skatteprocent på omkring {cityExamples.find(c => c.city === "Vejle")?.realTaxRate.toFixed(1)}%. 
              I Aarhus bliver 29.500 kr før skat til 19.700-20.200 kr efter skat, og i Aalborg får en fleksjobber med 28.000 kr 
              i månedlig indkomst 18.500-19.000 kr udbetalt. Forskellene skyldes primært lokale skattesatser og tilskudsberegninger.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan Beregnes Fleksjob Løn Efter Skat</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">1. Bruttolønnen (løn før skat)</h3>
            <p>
              Bruttolønnen i et fleksjob kommer fra den del, du arbejder, og kan variere betydeligt alt efter din faglige profil, 
              overenskomst, arbejdsgiver og det timetal, du er ansat på. For en fleksjobber i København er gennemsnitslønnen 
              typisk omkring 30.000 kr før skat, mens den i Esbjerg oftere ligger omkring 27.500 kr.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">2. Fleksløntilskud fra kommunen</h3>
            <p>
              Kommunen supplerer din løn med et fleksløntilskud, som afhænger af din arbejdsevne, timetal, og i visse tilfælde 
              også din timeløn. Jo færre timer du kan arbejde, desto større vil tilskuddet ofte være. Dette tilskud hjælper med 
              at hæve en lavere bruttoløn som eksempelvis de 27.000 kr i Randers til en fornuftig indkomst.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">3. Fradrag og skatteberegning</h3>
            <p>
              Din nettoløn afhænger af flere skatte- og fradragsfaktorer:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Arbejdsmarkedsbidrag (AM-bidrag) på 8 % af bruttolønnen. For en løn på 30.000 kr udgør dette 2.400 kr.</li>
              <li>A-skat baseret på kommunens skatteprocent samt eventuel kirkeskat. Dette varierer fra by til by.</li>
              <li>Personfradrag: Du har et skattemæssigt fradrag, som mindsker din skattepligtige indkomst.</li>
              <li>Pensionsbidrag: Hvis du har pensionsordning i dit fleksjob, bidrager det til at sænke din udbetalte nettoløn nu, men gavner dig på sigt.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Derfor Er Fleksjob Løn Efter Skat Forskellig fra Person til Person</h2>
            <ul className="list-disc pl-6 space-y-3 my-4">
              <li>
                <strong>Timetal og arbejdsevne:</strong> Selve fundamentet i et fleksjob er, at du arbejder dét antal timer, du kan klare.
              </li>
              <li>
                <strong>Geografiske forskelle i skat:</strong> Kommuneskatten varierer i landets 98 kommuner. Det kan derfor påvirke udbetalingen – 
                sammenlign for eksempel en fleksjob-løn i København (30.000 kr før skat) med Odense (28.500 kr før skat).
              </li>
              <li>
                <strong>Individuelle fradrag:</strong> Alt lige fra befordringsfradrag til eventuelle håndværkerfradrag kan spille ind i din samlede skatteberegning.
              </li>
              <li>
                <strong>Overenskomst og branche:</strong> Arbejder du inden for en branche med højere grundløn, vil bruttolønnen være tilsvarende højere, og fleksløntilskuddet justeres derefter.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at Optimere Din Fleksjob Løn</h2>
            <div className="space-y-6 my-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Få styr på alle dine fradrag</h3>
                <p>
                  Jo bedre du kender dine fradragsmuligheder, desto mere præcis bliver din nettoløn. 
                  Tjek <a href="https://skat.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SKAT's hjemmeside</a> eller 
                  kontakt en skatterådgiver.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Overvej pensionsindbetalinger</h3>
                <p>
                  Pensionsindbetalinger kan reducere din nettoløn i dag, men styrker din økonomiske situation på længere sigt.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Drøft muligheder med arbejdsgiver</h3>
                <p>
                  Hvis din arbejdsgiver er fleksibel med arbejdstid eller opgaver, kan det have betydning for din lønsammensætning. 
                  På den måde kan du måske arbejde flere timer uden at blive overbelastet.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Hold øje med lokale skatteregler</h3>
                <p>
                  Undersøg kommunens hjemmesider for lokale skatteregler. Det kan have overraskende stor indflydelse på din endelige udbetaling, 
                  særligt når du sammenligner byer som Aarhus (29.500 kr før skat) og København (30.000 kr før skat).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Søg faglig eller juridisk rådgivning</h3>
                <p>
                  Fagforeninger, advokater eller revisorer kan give skræddersyede råd, så du får mest muligt ud af dit fleksjob.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Fleksjob-løn efter skat er ikke en statisk størrelse. Den afhænger af din personlige situation, dit timetal, 
              kommunale tilskud, individuelle fradrag og skatteniveauet i din kommune. Dette kan forklare, hvorfor en bruttoløn på 30.000 kr 
              i København giver 20.000-20.500 kr udbetalt, mens 28.000 kr i Aalborg resulterer i 18.500-19.000 kr efter skat. 
              Derfor er det vigtigt at lave en individuel beregning, så du kan få et nøjagtigt billede af din økonomi.
            </p>
            <p className="mt-4">
              Vil du have en hurtig oversigt over, hvad du kan forvente at få udbetalt, er det en god idé at benytte 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>-værktøjet. 
              På den måde sikrer du, at du kender din nettoløn og kan tage højde for vigtige faktorer som fradrag og pensionsindbetalinger.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-3 my-4">
              <li>
                <strong><a href="https://star.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">STAR – Styrelsen for Arbejdsmarked og Rekruttering</a></strong>
                <p className="text-sm text-gray-600">(Information om fleksjob-ordninger, tilskud og regler)</p>
              </li>
              <li>
                <strong><a href="https://dst.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Danmarks Statistik</a></strong>
                <p className="text-sm text-gray-600">(Gennemsnitlige løndata i forskellige brancher og områder)</p>
              </li>
              <li>
                <strong><a href="https://bm.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beskæftigelsesministeriet</a></strong>
                <p className="text-sm text-gray-600">(Overordnet lovgivning og vejledninger om fleksjob)</p>
              </li>
            </ul>
            <p className="mt-6">
              Ved at bruge disse kilder og værktøjer kan du opnå et retvisende indblik i din fleksjob-løn efter skat, 
              så du kan planlægge din økonomi mest optimalt.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FleksjobPage; 