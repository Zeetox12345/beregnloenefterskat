import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const MekanikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 36000, netMin: 24000, netMax: 24500 },
    "Aarhus": { grossSalary: 35000, netMin: 23300, netMax: 23800 },
    "Odense": { grossSalary: 34000, netMin: 22600, netMax: 23100 },
    "Aalborg": { grossSalary: 33500, netMin: 22200, netMax: 22700 },
    "Esbjerg": { grossSalary: 33000, netMin: 21800, netMax: 22300 },
    "Randers": { grossSalary: 33000, netMin: 21800, netMax: 22300 },
    "Vejle": { grossSalary: 34000, netMin: 22700, netMax: 23200 }
  };

  const experienceData = [
    { type: "Nyuddannet (0–2 år)", grossSalary: 28000, netMin: 19200, netMax: 19600 },
    { type: "3–5 år", grossSalary: 30500, netMin: 20700, netMax: 21100 },
    { type: "6–8 år", grossSalary: 32000, netMin: 22000, netMax: 22400 },
    { type: "9–11 år", grossSalary: 34000, netMin: 23400, netMax: 23800 },
    { type: "12+ år (mastertech)", grossSalary: 36000, netMin: 24400, netMax: 24800 }
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
        title="Mekaniker Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Få realistiske estimater på mekaniker løn efter skat 2025. Sammenlign byer, erfaring og tillæg – og beregn dit eget lønresultat hurtigt."
        keywords="mekaniker løn efter skat, mekaniker nettoløn, mekaniker overenskomst, elbil-certifikat løn, akkord mekaniker, autobranche lønstatistik"
      />
      <Header />
      <PageTitle title="Mekaniker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Mekaniker Løn Efter Skat 2025 – Fra Skruenøgle til Sparekonto </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat mekaniker kan i 2025 regne med en mekaniker løn efter skat på cirka 20.000 – 24.500 kr. pr. måned. Beløbet varierer med by, erfaring, akkord og special‐certifikater. Tag to minutter og få dit eget estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvor kommer mekaniker‐lønnen fra?</h2>
            <p>
              Mekanikere arbejder på autoriserede værksteder, frie værksteder, lastbilservice eller som mobile udkaldsmontører. Lønnen følger oftest 3F Industri & DI Bilbranchens overenskomst, men kan boostes af akkord, aftenarbejde eller elbil‐certifikater.
            </p>
            <p className="italic text-gray-600">
              Fun fact: Ét skift af tandrem hos en premiumbil kan dække din mobilregning i et helt år – når skatten først er betalt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Mekaniker Løn – Før & Løn Efter Skat 2025</h2>

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
              *Estimater uden kirkeskat. Vil du se et personligt tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> efter din bruttoløn.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – sådan stiger mekaniker løn efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring</th>
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
              *Gns. kommuneskat 25 % + AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad kan skrue din mekaniker løn efter skat i vejret?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Akkord</strong> – store servicepakker kan give 10‑20 % ekstra løn.</li>
              <li><strong>Certifikater</strong> – klimaanlæg, elbil (Volt), hybrid (HV) ⇒ +1.000‑2.000 kr./md.</li>
              <li><strong>Skiftehold</strong> – aften +22 %, weekend +50 %.</li>
              <li><strong>Kommuneskat</strong> – forskel på op til 600 kr./md.</li>
              <li><strong>Pension 12 %</strong> – betales før skat og mindsker skattegrundlaget.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aarhus – 35 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag 8 % ⇒</strong> 2 800 kr.</li>
                <li><strong>Skattepligtig indkomst ⇒</strong> 32 200 kr.</li>
                <li><strong>Personfradrag ⇒</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag ⇒</strong> 27 550 kr.</li>
                <li><strong>A‑skat ≈ 34,5 % ⇒</strong> 9 500 kr.</li>
                <li><strong>Mekaniker løn efter skat ≈</strong> 22 700 kr.</li>
              </ul>
            </div>
            
            <p>
              Lav dit eget regnestykke med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Mekaniker Løn Efter Skat </h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en mekaniker før skat?</p>
                <p>28 000 – 36 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er mekaniker løn efter skat 2025?</p>
                <p>Omkring 20 000 – 24 500 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Er akkord bedre end timeløn?</p>
                <p>Ja, hvis du kan holde et højt output.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg få mere i løn efter skat?</p>
                <p>Ja – tag specialcertifikater, aftenhold og forhandl akkord.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 Hestekræfter til højere løn efter skat </h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Certificér dig i el- og hybridteknik</strong> → +1‑2 k netto.</li>
              <li><strong>Kør akkord på bremse‑ og koblingsjobs.</strong></li>
              <li><strong>Udnyt fradrag</strong> – værktøj, arbejds­beklædning, fagforening.</li>
              <li><strong>Tag aften‑ eller weekendvagter</strong> for høje tillæg.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger mekaniker løn efter skat typisk mellem 20 000 kr. og 24 500 kr. – men de rette certifikater og akkorder kan hæve beløbet. Få dit præcise estimat nu via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad dine skruenøgler giver på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.3f.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F Industri & DI Bilbranchen – Overenskomst 2024‑2026</a></li>
              <li><a href="https://www.jobindex.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex – Mekaniker lønstatistik 2025</a></li>
              <li><a href="https://www.dst.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, autobranchens servicefag</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025 (skm.dk)</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MekanikerLoenPage; 