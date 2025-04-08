import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const PaedagogmedhjaelperPage = () => {
  const [selectedCity, setSelectedCity] = useState('København');

  // Data for salaries by city
  const cityData = {
    'København': { grossSalary: 24000, minNet: 16500, maxNet: 17000 },
    'Aarhus': { grossSalary: 23500, minNet: 16200, maxNet: 16700 },
    'Odense': { grossSalary: 23000, minNet: 15800, maxNet: 16300 },
    'Aalborg': { grossSalary: 22500, minNet: 15500, maxNet: 16000 },
    'Esbjerg': { grossSalary: 22000, minNet: 15200, maxNet: 15700 },
    'Randers': { grossSalary: 22000, minNet: 15200, maxNet: 15700 },
    'Vejle': { grossSalary: 23500, minNet: 16200, maxNet: 16700 },
  };

  // Data for salary development with experience
  const experienceData = [
    { experience: "Nyansat (0 år)", grossSalary: 21500, minNet: 14900, maxNet: 15400 },
    { experience: "2-3 år", grossSalary: 23000, minNet: 15800, maxNet: 16300 },
    { experience: "4-5 år", grossSalary: 24000, minNet: 16500, maxNet: 17000 },
    { experience: "6+ år", grossSalary: 25500, minNet: 17500, maxNet: 18000 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Pædagogmedhjælper Løn Efter Skat – Se Hvad Du Får Udbetalt"
        description="Få styr på pædagogmedhjælper løn før og efter skat. Se eksempler på nettoløn, anciennitet og brug tips til at få et mere præcist billede af din udbetaling."
        keywords="pædagogmedhjælper løn, pædagogmedhjælper løn efter skat, pædagogmedhjælper nettoløn, pædagogmedhjælper overenskomst, pædagogmedhjælper anciennitet, lønsats pædagogmedhjælper"
      />
      <Header />
      <PageTitle title="Pædagogmedhjælper Løn Efter Skat – Din Komplette Guide" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Pædagogmedhjælper Løn Efter Skat – Din Komplette Guide</h1>
            
            <p className="lead">
              Vil du vide mere om, hvad en pædagogmedhjælper tjener, når skatten er trukket fra? Her får du et dybdegående indblik i pædagogmedhjælper løn efter skat med eksempler, typiske lønsatser, anciennitet, og gode råd til, hvordan du kan optimere din indtjening. Artiklen her henvender sig til dig, der overvejer at arbejde som pædagogmedhjælper – eller som allerede gør det og ønsker et bedre indblik i lønsedlen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad er en Pædagogmedhjælper?</h2>
            <p>
              En pædagogmedhjælper er ansat i daginstitutioner, vuggestuer, børnehaver, fritidsordninger eller lignende pædagogiske tilbud. Som pædagogmedhjælper støtter du børn i deres udvikling, leger og aktiverer dem, og sørger for at skabe en tryg hverdag i samarbejde med det øvrige personale. Du arbejder ofte på del- eller fuldtid, og lønnen kan variere efter overenskomst, kommunale takster og ikke mindst anciennitet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Pædagogmedhjælper – Før og Efter Skat</h2>
            <p>
              I eksemplerne her antager vi en fuldtidsstilling på 37 timer om ugen. Der kan være tillæg for skæve arbejdstider, kvalifikationer, erfaring osv. Tabellen giver et overblik over, hvordan lønnen kan se ud i forskellige byer – både før og efter skat.
            </p>

            <div className="my-6">
              <select 
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {Object.keys(cityData).map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border-b text-left">By</th>
                      <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                      <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(cityData).map(([city, data]) => (
                      <tr 
                        key={city} 
                        className={`hover:bg-gray-50 ${city === selectedCity ? 'bg-blue-50' : ''}`}
                        onClick={() => setSelectedCity(city)}
                      >
                        <td className="py-3 px-4 border-b">{city}</td>
                        <td className="py-3 px-4 border-b">{data.grossSalary.toLocaleString("da-DK")} kr.</td>
                        <td className="py-3 px-4 border-b">
                          {data.minNet.toLocaleString("da-DK")} - {data.maxNet.toLocaleString("da-DK")} kr.
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-gray-600 italic mt-2">
                Bemærk: Eksemplerne er vejledende og baserer sig på gennemsnitlige kommuneskatteprocenter. Din reelle udbetaling kan variere pga. pension, kirkeskat, eventuelle tillæg og personlige fradrag.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling Med Anciennitet</h2>
            <p>
              De fleste pædagogmedhjælpere er omfattet af en overenskomst, hvilket betyder, at man ofte får lønstigninger baseret på anciennitet (erfaring). Her er et generelt estimat af, hvordan bruttolønnen kan udvikle sig over tid – og hvad det cirka kan betyde for din løn efter skat.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Anciennitet</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{item.experience}</td>
                      <td className="py-3 px-4 border-b">{item.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {item.minNet.toLocaleString("da-DK")} - {item.maxNet.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p>
              Anciennitetstilleggene varierer efter overenskomst og kommune, men typisk stiger lønnen med et par hundrede kroner årligt eller for hvert anciennitetstrin.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad Påvirker Din Løn Efter Skat?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold mb-2">Kommuneskat</h5>
                <p>
                  Satserne er forskellige i hele landet. Det kan betyde flere hundrede kroners forskel i udbetaling.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold mb-2">Kirkeskat</h5>
                <p>
                  Er du medlem af folkekirken, betaler du en mindre ekstra skat.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold mb-2">Arbejdsmarkedsbidrag (AM-bidrag)</h5>
                <p>
                  8 % af din løn før skat.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold mb-2">Personfradrag</h5>
                <p>
                  Du får et årligt beløb (fordelt ud på måneder), som du ikke betaler skat af.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold mb-2">Pension</h5>
                <p>
                  Hvis du har en arbejdsmarkedspension indbetalt af arbejdsgiver (og eventuelt dig selv), vil det ofte være "før skat", og dermed få din nettoløn til at se mindre ud nu, men sikre dig bedre økonomisk på længere sigt.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel: Detaljeret Beregning på 23.000 kr.</h2>
            <p>
              Lad os tage udgangspunkt i en pædagogmedhjælper, der tjener 23.000 kr. pr. måned, bor i Aarhus og ikke betaler kirkeskat:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>AM-bidrag (8%):</strong> 23.000 kr. x 0,08 = 1.840 kr.
                </li>
                <li>
                  <strong>Skattepligtig indkomst:</strong> 23.000 kr. - 1.840 kr. = 21.160 kr.
                </li>
                <li>
                  <strong>A-skat (ca. 38% inkl. kommuneskat):</strong> 21.160 kr. x 0,38 ≈ 8.040 kr.
                </li>
                <li>
                  <strong>Udbetalt før pension:</strong> 21.160 kr. - 8.040 kr. ≈ 13.120 kr.
                </li>
                <li>
                  <strong>Pension:</strong> Har du fx 12 % pensionsindbetaling (hvor arbejdsgiver og du bidrager sammen), fratrækkes dette typisk inden A-skat. Her kan fradraget dog også påvirke AM-bidragets grundlag.
                </li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Hvis din overenskomst indebærer et fast pensionsbidrag, vil tallet i praksis se lidt anderledes ud, men det giver alligevel et indblik i, hvordan din løn efter skat håndteres.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode Råd til Pædagogmedhjælpere om Løn og Økonomi</h2>
            <div className="space-y-6 my-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Tjek din overenskomst</h3>
                <p>
                  Er du omfattet af en fagforening eller en kommunal overenskomst? Find de præcise løntrin og tillæg, så du er sikker på, at du får den rette løn.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Hold øje med dine fradrag</h3>
                <p>
                  Tjek SKATs hjemmeside eller brug en lønberegner til at justere eksempelvis kørselsfradrag, hvis du pendler langt.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Planlæg pension</h3>
                <p>
                  Selvom pensionsindbetalinger kan betyde lidt lavere udbetaling her og nu, får du glæde af det på længere sigt.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Forhandl tillæg</h3>
                <p>
                  Hvis du arbejder på skæve tidspunkter (weekend, aften, nat), eller har særlige kompetencer (eks. ekstra sproglige færdigheder), kan der være mulighed for individuelle tillæg.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Brug en lønberegner</h3>
                <p>
                  For at få et eksakt billede af din pædagogmedhjælper løn efter skat, kan du fx benytte <Link to="/" className="text-blue-600 hover:underline">beregn løn efter skat</Link>. Indtast din månedsløn, eventuel pensionsprocent, og din bopælskommune for et mere nøjagtigt resultat.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som pædagogmedhjælper i Danmark kan du forvente en løn før skat på omkring 22.000 – 25.000 kr. om måneden, afhængigt af kommune, anciennitet og eventuelle tillæg. Når skatter, AM-bidrag og pension er fratrukket, vil det ofte give dig 15.000 – 18.000 kr. efter skat, alt efter dine specifikke forhold og skatteprocenter.
            </p>
            <p className="mt-4">
              Ønsker du at vide præcis, hvad netop du kan få udbetalt, bør du tjekke din overenskomst, holde øje med dine fradrag og eventuelle tillæg – og eventuelt bruge en online lønberegner. På den måde sikrer du, at du kender din økonomi som pædagogmedhjælper og kan udnytte dine vilkår bedst muligt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-3 my-4">
              <li>
                <strong><a href="https://www.kl.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">KL – Kommunernes Landsforening</a></strong>
                <p className="text-sm text-gray-600">(Overenskomster for pædagogiske medarbejdere og kommunalt ansatte)</p>
              </li>
              <li>
                <strong><a href="https://www.dst.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Danmarks Statistik</a></strong>
                <p className="text-sm text-gray-600">(Data om lønniveauer i pædagogiske stillinger)</p>
              </li>
              <li>
                <strong><a href="https://www.foa.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FOA</a></strong>
                <p className="text-sm text-gray-600">(Fagforening med speciale i pædagogiske og kommunale områder)</p>
              </li>
            </ul>
            <p className="mt-4">
              Vær altid opmærksom på de nyeste overenskomstaftaler og opdaterede skatteprocenter for at få et nøjagtigt billede af din pædagogmedhjælper løn efter skat.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaedagogmedhjaelperPage; 