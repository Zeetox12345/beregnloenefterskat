import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const VaernepligtPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { baseSalary: 9500, netMin: 7000, netMax: 7300, mealAllowance: 7470, totalPayout: 14500 },
    "Aarhus": { baseSalary: 9500, netMin: 6900, netMax: 7200, mealAllowance: 7470, totalPayout: 14400 },
    "Odense": { baseSalary: 9500, netMin: 6900, netMax: 7100, mealAllowance: 7470, totalPayout: 14400 },
    "Aalborg": { baseSalary: 9500, netMin: 6800, netMax: 7100, mealAllowance: 7470, totalPayout: 14300 },
    "Esbjerg": { baseSalary: 9500, netMin: 6800, netMax: 7100, mealAllowance: 7470, totalPayout: 14300 }
  };

  const cityExamples = useMemo(() => {
    return Object.entries(cityData).map(([city, data]) => {
      return {
        city,
        baseSalary: data.baseSalary,
        netMin: data.netMin,
        netMax: data.netMax,
        mealAllowance: data.mealAllowance,
        totalPayout: data.totalPayout
      };
    });
  }, []);

  const selectedCityData = cityData[selectedCity];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Værnepligt Løn Efter Skat – Alt du Skal Vide"
        description="Se, hvad du kan forvente i værnepligtsløn før og efter skat. Få indsigt i de 249 kr. skattefri kostpenge om dagen og få mest ud af din værnepligt."
        keywords="værnepligt løn efter skat, værnepligtsløn, værnepligt kostpenge, værnepligt 249 kr, værnepligt skat, værnepligt indkomst"
      />
      <Header />
      <PageTitle title="Værnepligt Løn Efter Skat – Alt du Skal Vide (inkl. 249 kr. Skattefri Kostpenge)" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Værnepligt Løn Efter Skat – Alt du Skal Vide (inkl. 249 kr. Skattefri Kostpenge)</h1>
            
            <p className="lead">
              Skal du i værnepligt, eller er du blot nysgerrig på, hvad lønnen egentlig er, når skatten er trukket fra? I denne guide gennemgår vi værnepligt løn efter skat i Danmark – inklusive de 249 kr. skattefri kostpenge om dagen, som du kan modtage under visse betingelser. Du får et overblik over grundlønnen, hvordan skatten beregnes, og en tabel der viser, hvor meget du samlet kan få udbetalt hver måned med og uden kostpenge.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad indebærer værnepligt?</h2>
            <p>
              Værnepligt er en national tjenestepligt for mænd (og for kvinder, der melder sig frivilligt) i Danmark. Forløbet varer oftest mellem 4 til 12 måneder alt efter enhed og funktion. Under værnepligten:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Modtager du en fast månedlig løn (værnepligtsydelse) fra Forsvaret.</li>
              <li>Har du som regel mulighed for at bo og spise på kasernen uden ekstra omkostninger.</li>
              <li>Får du militær træning, øvelser og praktiske færdigheder.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Grundløn + 249 kr. Skattefri Kostpenge</h2>
            <p>
              Som værnepligtig kan du modtage:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Grundløn (værnepligtsydelse):</strong> Typisk ca. 9.500 kr. om måneden før skat.</li>
              <li><strong>Skattefri kostpenge (249 kr. pr. dag):</strong> Dette gælder kun, hvis du ikke benytter Forsvarets kost og logi. Får du maden stillet til rådighed på kasernen, modtager du normalt ikke disse penge.</li>
            </ul>
            <p className="mt-2">
              <strong>Eksempel:</strong> 249 kr. x 30 dage = 7.470 kr. skattefrit om måneden.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tabel: Samlet Udbetaling med og uden Kostpenge</h2>
            <p>
              Nedenstående tabel viser et estimat for løn før og efter skat i forskellige byer. Samtidig kan du se, hvor meget du samlet får udbetalt, 
              hvis du får kostpenge (7.470 kr. skattefrit ved 30 dages tjeneste). I København får en værnepligtig typisk 7.000-7.300 kr udbetalt efter skat,
              men med kostpenge kan det samlede beløb nå op på ca. 14.500 kr.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Grundløn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat (uden kostpenge)</th>
                    <th className="py-3 px-4 border-b text-left">Kostpenge pr. måned (30 dage)</th>
                    <th className="py-3 px-4 border-b text-left">Samlet udbetaling</th>
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
                      <td className="py-3 px-4 border-b">{example.baseSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} - {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                      <td className="py-3 px-4 border-b">{example.mealAllowance.toLocaleString("da-DK")} kr <span className="text-sm text-green-600">(skattefrit)</span></td>
                      <td className="py-3 px-4 border-b">Ca. {example.totalPayout.toLocaleString("da-DK")} kr</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              Bemærk: Tallene er vejledende. Din faktiske løn efter skat afhænger af kommuneskat, kirkeskat, personlige fradrag og eventuelle tillæg (fx børnetillæg).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvordan beregnes værnepligt løn efter skat?</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Løn før skat</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Ca. 9.500 kr. pr. måned som standard værnepligtsydelse.</li>
              <li>Tillæg kan være relevante ved længere tjeneste eller særlige funktioner (f.eks. sergentaspirant).</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Skat og fradrag</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Arbejdsmarkedsbidrag (8 %) samt kommuneskat (24-27 %) og evt. kirkeskat.</li>
              <li>Personlige fradrag (f.eks. befordring) mindsker dit skattegrundlag.</li>
              <li>Resultatet bliver din løn efter skat.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Skattefri kostpenge</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>249 kr. pr. dag lægges direkte til din rådighedsøkonomi, uden at blive beskattet.</li>
              <li>Udbetales kun, hvis du ikke spiser på kasernen.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fordele ved Værnepligt</h2>
            <ul className="list-disc pl-6 space-y-3 mt-2">
              <li>
                <strong>Fri kost og logi:</strong> Hvis du vælger at spise og bo på kasernen, sparer du udgifter til mad og husleje.
              </li>
              <li>
                <strong>Skattefri kostpenge:</strong> Vælger du at bo og spise ude, kan du få udbetalt 249 kr. pr. dag skattefrit.
              </li>
              <li>
                <strong>Erfaring og netværk:</strong> Værnepligten giver ofte personlig udvikling, disciplin og mulighed for at skabe nye venskaber.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5 Gode Råd til Værnepligtige om Løn og Skat</h2>
            <div className="space-y-6 my-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Tjek dit skattekort</h3>
                <p>
                  Sørg for, at alle oplysninger hos Skattestyrelsen (fx fradrag og bopælsoplysninger) er korrekte.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Vælg mellem gratis kost og kostpenge</h3>
                <p>
                  Vurder, om det bedst kan betale sig at bo/spise på kasernen eller modtage de skattefri 249 kr. om dagen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Overvej transportfradrag</h3>
                <p>
                  Bor du hjemme og pendler dagligt, kan kilometerfradrag øge din løn efter skat.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Søg børne- eller forsørgertillæg</h3>
                <p>
                  Har du børn eller forsørger en ægtefælle, kan du i visse tilfælde få yderligere løntillæg.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Brug en lønberegner</h3>
                <p>
                  Er du i tvivl om det nøjagtige beløb, kan du bruge 
                  <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> 
                  for at få et mere præcist estimat.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som værnepligtig kan du forvente en grundløn på cirka 9.500 kr. før skat, hvilket ofte resulterer i en løn efter skat på omkring 6.800 - 7.300 kr. 
              Reelt kommer du dog enten til at spare penge på kost og logi, hvis du bor og spiser på kasernen, eller du kan modtage 249 kr. skattefri kostpenge om dagen, 
              hvis du selv sørger for maden. Det betyder, at din samlede udbetaling i sidstnævnte scenarie kan nærme sig 14.000 - 14.500 kr. alt efter din bopælskommune og fradrag.
            </p>
            <p className="mt-4">
              Vil du have en præcis beregning for netop din situation, kan du benytte 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> 
              og derefter lægge dine kostpenge til. På den måde får du det bedste billede af, hvad du rent faktisk får udbetalt under værnepligten.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-3 my-4">
              <li>
                <strong><a href="https://www.forsvaret.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Forsvaret.dk</a></strong>
                <p className="text-sm text-gray-600">(Officiel info om værnepligt, betingelser og lønsatser)</p>
              </li>
              <li>
                <strong><a href="https://borger.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Borger.dk</a></strong>
                <p className="text-sm text-gray-600">(Oplysninger om skatteforhold, fradrag og offentlige ydelser)</p>
              </li>
              <li>
                <strong><a href="https://www.skat.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skattestyrelsen</a></strong>
                <p className="text-sm text-gray-600">(Generel info om personfradrag, kirkeskat og kommuneskat)</p>
              </li>
            </ul>
            <p className="mt-6">
              Husk altid at tjekke de seneste satser og regler hos Forsvaret eller Skattestyrelsen, så du er sikker på at få korrekt værnepligt løn efter skat – med eller uden kostpenge.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VaernepligtPage; 