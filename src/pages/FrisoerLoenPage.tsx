import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FrisoerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 31000, netMin: 20000, netMax: 20400 },
    "Aarhus": { grossSalary: 29500, netMin: 19100, netMax: 19500 },
    "Odense": { grossSalary: 28000, netMin: 18100, netMax: 18500 },
    "Aalborg": { grossSalary: 27000, netMin: 17500, netMax: 17900 },
    "Esbjerg": { grossSalary: 26000, netMin: 17000, netMax: 17400 },
    "Randers": { grossSalary: 26000, netMin: 17000, netMax: 17400 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Frisør-elev (2. år)", grossSalary: 15500, netMin: 12800, netMax: 13100 },
    { type: "Nyuddannet (0-2 år)", grossSalary: 24000, netMin: 16200, netMax: 16600 },
    { type: "3-5 år", grossSalary: 27500, netMin: 17800, netMax: 18200 },
    { type: "6+ år (senior)", grossSalary: 30500, netMin: 19800, netMax: 20200 },
    { type: "Salonleder / indehaver", grossSalary: 38000, netMin: 24700, netMax: 25300 }
  ];

  const cityExamples = useMemo(() => {
    return Object.entries(cityData).map(([city, data]) => {
      return {
        city,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Frisør Løn Efter Skat 2025 – Se Din Udbetaling"
        description="Frisør løn efter skat 2025: Se realistiske estimater med provision og tillæg. Brug beregn løn efter skat og få dit eget tal hurtigt."
        keywords="frisør løn efter skat, frisør indkomst, frisørløn, frisør provision, frisørsalon, frisørbonus, frisør timeløn"
      />
      <Header />
      <PageTitle title="Frisør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Frisør Løn Efter Skat 2025 – Fra Saks til Saldo ✂️💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsfrisør i Danmark kan i 2025 forvente en frisør løn efter skat på cirka 17.000 – 22.000 kr. pr. måned. Beløbet svinger med by, anciennitet, provision og weekendåbninger. Få dit eget, hurtige estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en frisørs løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Timeløn + provision</strong> (normalt 10-20 % af egen omsætning)</li>
              <li><strong>Weekend-/aftentillæg</strong> – op til +50 % på helligdage</li>
              <li><strong>Kundebooking & mersalg</strong> – farve, kur og produkter booster provision</li>
              <li><strong>Geografi</strong> – saloner i hovedstaden betaler 5-10 % mere før skat</li>
              <li><strong>Pension 8 %</strong> – indbetales før skat og løfter din totalpakke</li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-blue-400">
              <p className="italic">
                Fun fact: Sælger du to luksushårkure om dagen, kan det øge din frisør løn efter skat med 600-900 kr. om måneden.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Frisør Løn Efter Skat – Byer 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
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
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              *Beregnet med gennemsnitlig kommuneskat (24,9 %) + AM-bidrag 8 %, uden kirkeskat. Vil du se din egen salonløn? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Frisør løn efter skat vs. anciennitet</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr 
                      key={exp.type} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{exp.type}</td>
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              *Indehavertal er gennemsnit efter ejerudbytte og feriepenge.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aarhus – 29.500 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 29.500 kr.</li>
                <li><strong>AM-bidrag 8 % ➜</strong> 2.360 kr.</li>
                <li><strong>Skattepligtig indkomst ➜</strong> 27.140 kr.</li>
                <li><strong>Personfradrag ➜</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag ➜</strong> 22.490 kr.</li>
                <li><strong>A-skat (~ 35 %) ➜</strong> 7.870 kr.</li>
                <li><strong>Frisør løn efter skat ≈</strong> 19.270 kr.</li>
              </ul>
            </div>
            
            <p>
              Skal du teste provision eller færre timer? Hop ind og <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker frisør løn efter skat mest?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Faktor</th>
                    <th className="py-3 px-4 border-b text-left">Typisk udsving</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Provision / produktsalg</td>
                    <td className="py-3 px-4 border-b">+700 – 3.000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Weekend- & helligdagstillæg</td>
                    <td className="py-3 px-4 border-b">+500 – 1.500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Geografi / kommuneskat</td>
                    <td className="py-3 px-4 border-b">± 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Salonlederbonus</td>
                    <td className="py-3 px-4 border-b">+2.000 – 4.000 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 Tips til at hæve din løn efter skat 🚀</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Sats på farve & balayage-kunder</strong> – højere snitomsætning → mere provision.</li>
              <li><strong>Book "tiggetimer" (aftner/lørdage)</strong> med forhøjet timeløn.</li>
              <li><strong>Fradrag for arbejdstøj & befordring</strong> – sænker skatten, ikke indsatsen.</li>
              <li><strong>Kurser i barbering & extensions</strong> – specialydelser giver større ticket-price.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Frisør Løn Efter Skat ℹ️</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en frisør efter skat som nyuddannet?</p>
                <p>Cirka 16.500 kr./md. uden provision.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan øges lønnen mest?</p>
                <p>Gennem produktsalg og aften-/weekendvagter.</p>
              </div>
              <div>
                <p className="font-semibold">Betaler elever skat?</p>
                <p>Ja, men de fleste holder sig under personfradraget.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer man topskat?</p>
                <p>Sjældent – først over ca. 63.000 kr. før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger frisør løn efter skat typisk på 17.000 – 22.000 kr. Med produktsalg, kurser og weekendtillæg kan det snige sig mod 25.000 kr. Vil du kende dit tal præcist? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under et minut, og så ved du, hvor meget der lander på kontoen, når sidste hårtot er klippet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.dfkf.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dansk Frisør & Kosmetiker Forbund – Lønoversigt 2025</a></li>
              <li><a href="https://www.jobindex.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex Lønstatistik – Frisører (apr 2025)</a></li>
              <li><a href="https://www.skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: maj 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FrisoerLoenPage; 