import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FlyvelederLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København ACC");
  
  // City-specific salary data
  const cityData = {
    "København ACC": { grossSalary: 80000, netMin: 47000, netMax: 48000 },
    "Billund TWR": { grossSalary: 60000, netMin: 38000, netMax: 39000 },
    "Aalborg TWR": { grossSalary: 55000, netMin: 35000, netMax: 36000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Elev (praktik)", grossSalary: 21000, netMin: 15000, netMax: 15400 },
    { type: "Nyuddannet (tårn)", grossSalary: 50000, netMin: 31000, netMax: 32000 },
    { type: "Områdekontrol (3-5 år)", grossSalary: 60000, netMin: 38000, netMax: 39000 },
    { type: "Senior controller (7-10 år)", grossSalary: 70000, netMin: 42000, netMax: 43000 },
    { type: "Instruktør / leder", grossSalary: 80000, netMin: 47000, netMax: 48000 },
    { type: "Top senior (højeste skala)", grossSalary: 90000, netMin: 48000, netMax: 49000 },
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
        title="Flyveleder Løn Efter Skat 2025 – Realistiske Tal og Beregning"
        description="Hvad er flyveleder løn efter skat i 2025? Se løn før og efter skat, erfaringstrin og vagttillæg – og beregn dit personlige nettobeløb online."
        keywords="flyveleder løn, flyveleder løn efter skat, air traffic controller løn, områdekontrol løn, tårn løn, Naviair løn"
      />
      <Header />
      <PageTitle title="Flyveleder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Flyveleder Løn Efter Skat 2025 – fra cockpit-koordinering til nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En flyveleder (air traffic controller) i Danmark kan i 2025 forvente løn før skat på 50 000 – 90 000 kr. pr. måned, afhængigt af arbejdssted (tårn vs. områdekontrol), anciennitet og vagttillæg. Det svarer til en flyveleder løn efter skat på ca. 31 000 – 49 000 kr. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for præcist nettobeløb.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger flyveleder løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Grundløn & anciennitet</td>
                    <td className="py-3 px-4 border-b">Naviair oplyser 50 000-90 000 kr./md. før skat for færdiguddannede flyveledere; elever får ca. 21 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Arbejdssted</td>
                    <td className="py-3 px-4 border-b">Områdekontrol (København ACC) betaler i toppen af intervallet; små tårne ligger lavere.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Vagttillæg</td>
                    <td className="py-3 px-4 border-b">Aften + 18 %, nat + 30 %, weekend + 45 % – kan løfte nettolønnen 2-4 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Skifteholdsplan</td>
                    <td className="py-3 px-4 border-b">4-døgns rul med 2 nattevagter giver flere ulempetimer (og højere netto) end dag-rul.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension 17 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag trækkes før skat og forbedrer totalpakken, men ses ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct-point forskel → ± ≈ 700 kr./md. i flyveleder løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – typiske niveauer 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Karrieretrin</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr 
                      key={exp.type} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{exp.type}</td>
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Estimater uden kirkeskat; beregnet med AM-bidrag 8 % og gennemsnitlig kommuneskat 24,9 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionalt snapshot (områdekontrol-vagter, 160 aktive t/mnd.)</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Location</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Efter skat</th>
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
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              Københavns kontrolcenter ligger højest pga. høj trafik- og kompleksitetstillæg.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – områdekontroller, nat/weekend-rul</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 70 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 5 600 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 64 400 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 59 750 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 22 100 kr.</li>
                <li><strong>Flyveleder løn efter skat ≈</strong> 42 300 kr.</li>
              </ul>
            </div>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at løfte nettolønnen</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Metode</th>
                    <th className="py-3 px-4 border-b text-left">Effekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Specialiser dig til instruktør eller supervisor</td>
                    <td className="py-3 px-4 border-b">+5-10 % før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Tag flere nat- og weekendvagter</td>
                    <td className="py-3 px-4 border-b">Højeste ulempetillæg giver ekstra 3-4 000 kr./md. netto.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Overvej ACC-trafik (områdekontrol)</td>
                    <td className="py-3 px-4 border-b">Højere grundløn og kompleksitetstillæg.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til lav-skat kommune</td>
                    <td className="py-3 px-4 border-b">Kan øge flyveleder løn efter skat med op mod 700 kr./md. uden ekstra timer.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Flyveleder Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvornår rammer en flyveleder topskat?</p>
                <p>Omkring 63 000 kr. før skat pr. måned – de fleste seniorer betaler topskat.</p>
              </div>
              <div>
                <p className="font-semibold">Er elevlønnen skattepligtig?</p>
                <p>Ja, hele elevlønnen (ca. 21 000 kr.) er A-indkomst og beskattes som almindelig løn.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej – 17 % arbejdsgiverpension indbetales før skat og vises ikke som nettoløn.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan påvirker overarbejde nettoløn?</p>
                <p>Overtid aflønnes 50-100 % ekstra og beskattes som normal løn – kan hurtigt skubbe dig over topskattegrænsen.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger flyveleder løn efter skat typisk mellem 31 000 og 49 000 kr. pr. måned. Grundløn, vagttillæg og kommuneskat er de store løftestænger; specialfunktioner og områdekontrol giver de højeste bruttobeløb. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad der reelt lander på kontoen, når den sidste flyplan er guidet sikkert hjem.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <div className="space-y-4">
              <div>
                <p><strong>Naviair – FAQ & Uddannelsesinfo:</strong> <a href="https://www.naviair.dk/karriere/flyvelederaspirant/uddannelsen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">21 000 kr. elevløn; 50 000-90 000 kr. som færdiguddannet</a></p>
              </div>
              <div>
                <p><strong>Transportministeriets svar om Naviair årsløn:</strong> <a href="https://www.ft.dk/samling/20222/almdel/tru/spm/200/svar/1963438/2718493/index.htm" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">650-780 000 kr. årligt (≈ 54-65 000 kr./md.)</a></p>
              </div>
              <div>
                <p><strong>SalaryExpert – gennemsnitlig ATC-årsløn:</strong> <a href="https://www.salaryexpert.com/salary/job/airport-air-traffic-controller/denmark" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">444 000 kr.</a></p>
              </div>
            </div>

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

export default FlyvelederLoenPage; 