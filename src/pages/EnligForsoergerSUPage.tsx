import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const EnligForsoergerSUPage = () => {
  const [selectedCity, setSelectedCity] = useState('København');

  // Data for SU after tax by city
  const cityData = {
    'Vejle': { min: 10600, max: 10800 },
    'København': { min: 10550, max: 10750 },
    'Aarhus': { min: 10350, max: 10550 },
    'Odense': { min: 10250, max: 10450 },
    'Aalborg': { min: 10150, max: 10350 },
    'Brønderslev': { min: 10000, max: 10200 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Enlig Forsørger SU Efter Skat 2025 – Sats, Skat og Tips"
        description="Få overblik over enlig forsørger SU efter skat 2025: satser, løn efter skat-tal for forskellige kommuner og praktiske råd om fradrag, fribeløb og SU-lån."
        keywords="enlig forsørger SU, SU efter skat, forsørgertillæg, SU-sats 2025, fribeløb SU, studiejob, SU udbetaling, studerende økonomi, enlig forsørger"
      />
      <Header />
      <PageTitle title="Enlig Forsørger SU Efter Skat – Din Komplette Guide" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Enlig Forsørger SU Efter Skat 2025 – Din Komplette Guide</h1>
            
            <p className="lead">
              Som enlig forsørger på videregående uddannelse har du ret til en betydelig højere støtte end andre studerende. Denne guide giver dig et komplet overblik over SU for enlige forsørgere, hvor meget du får udbetalt efter skat, og hvordan du optimerer din økonomi under studiet.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                Hurtigt overblik: Er du enlig forsørger på en videregående uddannelse, får du i 2025 14.172 kr. før skat (7.086 kr. i basis‑SU + 7.086 kr. i forsørgertillæg). Efter skat lander det typisk på 10.000 – 10.800 kr. Vil du have en hurtig estimering? <Link to="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline">Beregn løn efter skat</Link> på få sekunder.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg my-6">
              <h2 className="text-2xl font-semibold mb-4">Hvad er SU for enlige forsørgere?</h2>
              <p>
                Når du modtager Statens Uddannelsesstøtte (SU) og samtidig er enlig forsørger, kan du få et forsørgertillæg. 
                I 2025 lyder tillægget på 7.086 kr. før skat pr. måned – oveni den normale SU‑sats. Du kan derudover vælge supplerende SU‑lån til forsørgere (1.813 kr.), 
                som er skattefrit men skal betales tilbage.
              </p>
              
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border-b text-left">SU‑komponent</th>
                      <th className="py-3 px-4 border-b text-left">2025‑sats (før skat)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">Basis‑SU (videregående, udeboende)</td>
                      <td className="py-3 px-4 border-b">7.086 kr.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">Forsørgertillæg (enlig)</td>
                      <td className="py-3 px-4 border-b">7.086 kr.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 font-semibold">
                      <td className="py-3 px-4 border-b">Samlet før skat</td>
                      <td className="py-3 px-4 border-b">14.172 kr.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">Supplerende SU‑lån (valgfrit)</td>
                      <td className="py-3 px-4 border-b">+1.813 kr. (ikke beskattet)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 italic mt-2">
                Kilde: <a href="https://www.su.dk/satser/satser-for-stoette-til-foraeldre" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Styrelsen for Institutioner og Uddannelsesstøtte (SU.dk)</a>
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Enlig Forsørger SU – Før og Efter Skat i Udvalgte Byer</h2>
            <p>
              SU er ens i hele landet før skat, men den løn efter skat varierer, fordi kommuneskatten gør. Tabellen nedenfor bruger personfradrag på 4.650 kr./md. (2025) og antager, at du ikke betaler kirkeskat.
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
                      <th className="py-3 px-4 border-b text-left">SU før skat</th>
                      <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
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
                        <td className="py-3 px-4 border-b">14.172 kr.</td>
                        <td className="py-3 px-4 border-b">
                          {data.min} – {data.max} kr.
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-gray-600 italic mt-2">
                *Vejledende beløb. SU beskattes som almindelig A‑indkomst uden AM‑bidrag. Brug <Link to="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline">beregn løn efter skat</Link> for nøjagtige tal med/uden kirkeskat og SU‑lån.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan regner vi løn efter skat</h2>
            <div className="bg-gray-50 p-4 rounded-lg my-6">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Bruttobeløb:</strong> 14.172 kr.</li>
                <li><strong>Personfradrag:</strong> 4.650 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 9.522 kr.</li>
                <li><strong>Kommuneskat + bundskat:</strong> (≈ 32–38 % afhængigt af kommune). Eksempel København 35,6 % → 3.390 kr.</li>
                <li><strong>Løn efter skat:</strong> 14.172 kr. − 3.390 kr. = 10.782 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ om Enlig Forsørger SU</h2>
            <div className="space-y-4 my-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">Kan jeg få SU‑lån uden at betale skat?</h3>
                <p>Ja, SU‑lån beskattes ikke – men skal betales tilbage med rente.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">Hvad hvis jeg arbejder ved siden af?</h3>
                <p>Hele din SU (inkl. forsørgertillæg) tæller med i fribeløbet. Overskrider du fribeløbet, får du skattesmæk. Tjek derfor altid fribeløbsgrænsen og <Link to="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline">beregn løn efter skat</Link>, før du siger ja til ekstra vagter.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold">Er barnetilskud beskattet?</h3>
                <p>Ekstra børnetilskud fra Udbetaling Danmark er skattefrit og kommer oven i SU‑beløbet.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at få mest muligt ud af din SU</h2>
            <div className="bg-gray-50 p-4 rounded-lg my-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Udnyt fradrag</h3>
                <p>A‑kasse, fagforening og renteudgifter kan sænke skatten og hæve din løn efter skat.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Planlæg dit fribeløb</h3>
                <p>Tilpas din arbejdstid, så du ikke kommer over grænsen.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Spar på lånet</h3>
                <p>Lånet er skattefrit men gæld. Overvej kun at tage det delvis i måneder med ekstra udgifter.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som enlig forsørger på SU i 2025 kan du forvente ca. 10.000 – 10.800 kr. i løn efter skat for dine SU‑ydelser alene – eller mere, 
              hvis du tager SU‑lån. Brug <Link to="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline">beregn løn efter skat</Link>, 
              opdater dine fradrag og hold øje med fribeløb for at optimere din økonomi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-3 my-4">
              <li>
                <strong><a href="https://www.su.dk/satser/satser-for-stoette-til-foraeldre" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Styrelsen for Institutioner og Uddannelsesstøtte (SU.dk) – Satser 2025</a></strong>
                <p className="text-sm text-gray-600">(Officiel information om SU-satser, fribeløb og forsørgertillæg)</p>
              </li>
              <li>
                <strong><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatteprocenter-og-grundskyldspromiller-top-20-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommuneskatteprocenter 2025</a></strong>
                <p className="text-sm text-gray-600">(Officielle kommuneskatteprocenter)</p>
              </li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Senest opdateret: April 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EnligForsoergerSUPage; 