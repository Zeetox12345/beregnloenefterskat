import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FolkeskolelaererLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 38000, netMin: 25300, netMax: 25800 },
    "Aarhus": { grossSalary: 37300, netMin: 24800, netMax: 25300 },
    "Odense": { grossSalary: 36800, netMin: 24400, netMax: 24900 },
    "Aalborg": { grossSalary: 36300, netMin: 24000, netMax: 24400 },
    "Esbjerg": { grossSalary: 35800, netMin: 23600, netMax: 24000 },
    "Randers": { grossSalary: 35800, netMin: 23600, netMax: 24000 },
    "Vejle": { grossSalary: 36800, netMin: 24200, netMax: 24700 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år)", grossSalary: 32500, netMin: 21800, netMax: 22300 },
    { years: "3–5 år", grossSalary: 34000, netMin: 22800, netMax: 23300 },
    { years: "6–8 år", grossSalary: 35500, netMin: 23800, netMax: 24300 },
    { years: "9–11 år", grossSalary: 37000, netMin: 24800, netMax: 25300 },
    { years: "12+ år (senior- og klasselærertillæg)", grossSalary: 38500, netMin: 25800, netMax: 26300 }
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
        title="Folkeskolelærer Løn Efter Skat 2025 | Guide & Beregner"
        description="Se folkeskolelærer løn efter skat 2025 med detaljerede tabeller, beregningseksempel, fradrag og højrelevante tips til at øge nettolønnen."
        keywords="folkeskolelærer løn efter skat 2025, lærer nettoløn, danmarks lærerforening, lærer anciennitet, undervisningstillæg, folkeskole løntrin"
      />
      <Header />
      <PageTitle title="Folkeskolelærer Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Folkeskolelærer Løn Efter Skat 2025 – Din Komplette Guide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat folkeskolelærer i 2025 kan forvente ca. 22.000 – 26.500 kr. i løn efter skat pr. måned afhængigt af kommune, anciennitet, undervisningstillæg og eventuelle funktioner som klasselærer eller vejleder. Få dit personlige estimat på få sekunder: <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en folkeskolelærer?</h2>
            <p>
              Folkeskolelærere planlægger, gennemfører og evaluerer undervisning fra 0.–10. klassetrin. Jobbet omfatter differentieret undervisning, forældresamarbejde, inklusion, klasseledelse samt tværfaglige projekter. Lærere er normalt ansat af kommunen og er dækket af LC/CO10-overenskomsten forhandlet af Danmarks Lærerforening (DLF).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Folkeskolelærer – Før og Efter Skat</h2>
            <p>
              Tabellen nedenfor bygger på LC/CO10-løntabellen pr. 1. april 2025 (grundløn + undervisningstillæg 71/t​) ved en 37‑timers uge. Pension (17,3 %) er ikke trukket fra nettobeløbet.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Kommune/By</th>
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
              *Beregnet med kommuneskat 2025 uden kirkeskat. For et personligt estimat med din kommune og fradrag, <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Folkeskolelærerens løn stiger via løntrin og kvalifikationstillæg. Tabellen inkluderer garanterede trin (løntrin 4 → 8), plus senior- og funktionstillæg.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Anciennitet</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr 
                      key={exp.years} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{exp.years}</td>
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
              *Gennemsnitlig kommuneskat (25 %) & AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Faktorer der påvirker folkeskolelærer løn efter skat</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Kommuneskat</h3>
            <p>Svinger fra 23,4 % (Vejle) til 26,3 % (Brønderslev).</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Funktions- og kvalifikationstillæg</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Klasselærer</strong>: +1.200 kr./md.</li>
              <li><strong>Uddannelsesvejleder, IT‑vejleder, læsevejleder</strong>: +1.500 – 3.000 kr./md.</li>
              <li><strong>Specialundervisning</strong>: +2.000 kr./md.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Senior- og undervisningstillæg</h3>
            <p>Efter 8 år udløses senior‑trins tillæg (2,5 % af grundlønnen). Undervisningstillæg justeres årligt.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Pension</h3>
            <p>17,3 % arbejdsgiverbetalt (for lærere under 62 år). Pensionsbidraget trækkes før A‑skat og sænker skattegrundlaget.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense, 36.800 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag (8 %)</strong> 36.800 × 0,08 = 2.944 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 36.800 − 2.944 = 33.856 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 29.206 kr.</li>
                <li><strong>A‑skat (≈ 34,5 %)</strong> 29.206 × 0,345 ≈ 10.080 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 33.856 − 10.080 ≈ 23.776 kr.</li>
                <li><strong>Pension (17,3 %)</strong> 6.376 kr. indbetales før skat → løn efter skat ca. 23.700 kr.</li>
              </ul>
            </div>
            <p>
              Beregn dine egne tal på få sekunder – besøg <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Hurtige svar</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en folkeskolelærer før skat?</p>
                <p>32.000 – 38.000 kr. pr. md. + tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er folkeskolelærer løn efter skat?</p>
                <p>Omkring 22.000 – 26.500 kr. alt efter kommune og anciennitet.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, løntrin hvert 2.–3. år og senior‑ samt funktions­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan forhandles lønnen?</p>
                <p>Via Danmarks Lærerforening og kommunerne.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at øge din løn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag diplomuddannelse</strong>: Udløser kvalifikationstillæg.</li>
              <li><strong>Søg funktioner</strong>: Læsevejleder, inklusionsmentor, TR.</li>
              <li><strong>Planlæg skæve timer</strong>: Undervisning efter kl. 17 giver 50 % tillæg.</li>
              <li><strong>Hæv fradrag</strong>: Befordrings­fradrag, A‑kasse, fagforening.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som folkeskolelærer i Danmark ligger bruttolønnen i 2025 på 32.000 – 38.500 kr. og nettolønnen på 22.000 – 26.500 kr. Udnyt tillæg, fradrag og pension, og find dit præcise nettobeløb via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Danmarks Lærerforening (DLF) – LC/CO10 Løntabel 2025</li>
              <li>KL – Kommunale lønforhandlinger 2025</li>
              <li><a href="https://www.skm.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskatteprocenter 2025 (skm.dk)</a></li>
              <li><a href="https://www.dst.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Offentlig lønstruktur, undervisning (dst.dk)</a></li>
            </ul>
            
            <p className="text-sm text-gray-500 mt-8">
              Senest opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FolkeskolelaererLoenPage; 