import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const RadiografLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 40500, netMin: 25200, netMax: 25700 },
    "Aarhus": { grossSalary: 38500, netMin: 24000, netMax: 24500 },
    "Odense": { grossSalary: 37000, netMin: 23000, netMax: 23400 },
    "Aalborg": { grossSalary: 36000, netMin: 22400, netMax: 22800 },
    "Esbjerg": { grossSalary: 35000, netMin: 21800, netMax: 22200 },
    "Randers": { grossSalary: 35000, netMin: 21800, netMax: 22200 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (0-2 år)", grossSalary: 33500, netMin: 20800, netMax: 21200 },
    { type: "3-5 år", grossSalary: 36000, netMin: 22400, netMax: 22800 },
    { type: "6-8 år (CT/MR-cert.)", grossSalary: 39000, netMin: 24000, netMax: 24500 },
    { type: "9-11 år (senior)", grossSalary: 41500, netMin: 25400, netMax: 25900 },
    { type: "12+ år (teamleder)", grossSalary: 44000, netMin: 26800, netMax: 27300 }
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
        title="Radiograf Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Radiograf løn efter skat 2025: Tabeller for byer, erfaring & vagter. Beregn dit personlige beløb på få sekunder."
        keywords="radiograf løn, radiograf løn efter skat, radiograf løntrin, røntgensygeplejerske løn, CT radiograf løn, MR radiograf løn"
      />
      <Header />
      <PageTitle title="Radiograf Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Radiograf Løn Efter Skat 2025 – Fra Røntgen til Rådighedsbeløb 💰</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – I 2025 ligger en radiograf løn efter skat typisk på 20.000 – 26.000 kr. pr. måned i fuldtidsstilling (37 t). Spændet afhænger især af region, erfaring, vagttillæg (aften/nat) og CT/MR-certificeringer. Få dit eget estimat lynhurtigt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en radiografs lønseddel?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Basisløntrin (0-5) i Radiografoverenskomsten (DSR & Danske Regioner)</li>
              <li>Vagt- og beredskabstillæg – aften + 22 %, nat + 35 %, weekend + 45 %</li>
              <li>Funktionstillæg for CT, MR eller interventionelle procedurer</li>
              <li>Pension 14,59 % indbetalt før skat (sænker skattegrundlaget)</li>
            </ul>
            
            <p className="italic mt-4">Fun fact: Én nattevagt i CT – efter skat – dækker ca. tre måneders streamingabonnementer.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Radiograf Løn Efter Skat – Byer 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border-b">By</th>
                    <th className="py-3 px-4 text-left border-b">Løn før skat</th>
                    <th className="py-3 px-4 text-left border-b">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 border-b">{item.city}</td>
                      <td className="py-3 px-4 border-b">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-3 px-4 border-b">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 mt-2 mb-6">
              *Estimater uden kirkeskat. Tallene antager gennemsnitlig kommuneskat (24,9 %) + AM-bidrag 8 %. Indtast din egen løn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et personligt estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Radiograf løn efter skat vs. anciennitet</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border-b">Erfaring / Rolle</th>
                    <th className="py-3 px-4 text-left border-b">Løn før skat</th>
                    <th className="py-3 px-4 text-left border-b">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 border-b">{item.type}</td>
                      <td className="py-3 px-4 border-b">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-3 px-4 border-b">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense – CT-radiograf, 37.000 kr.)</h2>
            <div className="bg-gray-50 p-5 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Løn før skat:</strong> 37.000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2.960 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 34.040 kr.</li>
                <li><strong>Personfradrag:</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 29.390 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 10.860 kr.</li>
                <li><strong>Radiograf løn efter skat:</strong> ≈ 23.180 kr.</li>
              </ul>
              <p className="mt-3 text-sm">
                Vil du teste nattillæg eller lavere kommuneskat? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> og få et øjeblikkeligt estimat.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker radiograf løn efter skat mest?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border-b">Faktor</th>
                    <th className="py-3 px-4 text-left border-b">Typisk udsving</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Nat- & weekendvagter</td>
                    <td className="py-3 px-4 border-b">+700 – 3.500 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">CT/MR-specialetillæg</td>
                    <td className="py-3 px-4 border-b">+1.000 – 1.500 kr./md.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Region / kommuneskat</td>
                    <td className="py-3 px-4 border-b">± 600 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Funktion som teamleder</td>
                    <td className="py-3 px-4 border-b">+2.000 – 3.000 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 hurtige hacks til en højere løn efter skat 🚀</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Certificér dig i MR, CT eller angio – funktionstillæg og flere vagter.</li>
              <li>Byt vagter til højtillægstider (nat/helligdag) – bedst betalt efter skat.</li>
              <li>Overvej pendling til lav-skat kommune (fx moving til Faxe frem for København).</li>
              <li>Dokumentér befordring – fradraget skærer yderligere af skatten hver måned.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Radiograf Løn Efter Skat ℹ️</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Hvad tjener en nyuddannet radiograf efter skat?</p>
                <p>Cirka 21.000 kr./md. uden vagter.</p>
              </div>
              <div>
                <p className="font-medium">Hvad er løn efter skat med CT/MR-tillæg?</p>
                <p>Typisk 24.000 – 25.000 kr./md. afhængigt af vagter.</p>
              </div>
              <div>
                <p className="font-medium">Hvornår udløses topskat?</p>
                <p>Først over ~63.000 kr. før skat – de færreste radiografer når dette.</p>
              </div>
              <div>
                <p className="font-medium">Pensionen tæller vel også?</p>
                <p>Ja, 14,59 % indbetales før skat – godt for fremtiden, men vises ikke som løn efter skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger radiograf løn efter skat normalt i intervallet 20.000 – 26.000 kr. Aften- og nattevagter, specialisering i billeddiagnostik og evt. teamlederansvar kan trække beløbet nær 27.000 kr. Skal du kende din egen udbetaling? Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under et minut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://radiograf.dk/loen-og-vilkaar/overenskomst/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Radiograf Rådets løntabel 2025</a></li>
              <li><a href="https://www.regioner.dk/aftaler-og-oekonomi/arbejdsgiver/aftaler-og-overenskomster/ok-24/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Danske Regioner & AC-overenskomst 2024-26</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Radiografer (marts 2025)</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommuneskat 2025</a></li>
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

export default RadiografLoenPage; 