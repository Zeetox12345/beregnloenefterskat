import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const DatamatikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 48000, netMin: 29500, netMax: 30000 },
    "Aarhus": { grossSalary: 45000, netMin: 27600, netMax: 28100 },
    "Odense": { grossSalary: 43000, netMin: 26300, netMax: 26800 },
    "Aalborg": { grossSalary: 41000, netMin: 25100, netMax: 25600 },
    "Esbjerg": { grossSalary: 40000, netMin: 24500, netMax: 25000 },
    "Randers": { grossSalary: 40000, netMin: 24500, netMax: 25000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Praktikant / junior support", grossSalary: 26000, netMin: 18000, netMax: 18400 },
    { type: "Nyuddannet (junior developer)", grossSalary: 38000, netMin: 26000, netMax: 26500 },
    { type: "3-5 år (full-stack dev)", grossSalary: 45000, netMin: 27600, netMax: 28100 },
    { type: "6-8 år (senior / tech lead)", grossSalary: 50000, netMin: 31000, netMax: 31500 },
    { type: "9+ år (architect / team lead)", grossSalary: 55000, netMin: 34300, netMax: 34800 },
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
        title="Datamatiker Løn Efter Skat 2025 – Se Realistiske Nettobeløb"
        description="Hvad tjener en datamatiker efter skat i 2025? Sammenlign nyuddannet til senior-niveau, se by-forskelle og beregn din nettoløn på få sekunder."
        keywords="datamatiker løn efter skat, datamatiker løn, datamatiker startløn, it-løn, programmør løn danmark, developer løn, datamatiker løn nyuddannet, datamatiker løn erfaring"
      />
      <Header />
      <PageTitle title="Datamatiker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Datamatiker Løn Efter Skat 2025 – Fra SQL-Query til Spendable Kroner 💾💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som fuldtids datamatiker i Danmark ligger datamatiker løn efter skat i 2025 typisk mellem 24 000 – 35 000 kr. om måneden. Nyuddannede med 35 000–40 000 kr. i startløn får ca. 24 000–27 000 kr. udbetalt, mens erfarne udviklere med specialcertificeringer kan lande 50 000 kr. brutto og ca. 35 000 kr. netto. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det går hurtigere end din næste npm install.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad driver en datamatiker løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Løndriver</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor den gør en forskel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Grundløn / startløn</td>
                    <td className="py-3 px-4 border-b">Median startløn 38 525 kr. øst for Storebælt</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Stack & niche</td>
                    <td className="py-3 px-4 border-b">Cloud, DevOps, AI kan give +8–15 % før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Erfaring & certificeringer</td>
                    <td className="py-3 px-4 border-b">AWS Certified Developer = +1 000–2 500 kr./md. brutto</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Branche</td>
                    <td className="py-3 px-4 border-b">FinTech & pharma betaler op til +7 % over gennemsnittet</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Bonus / overtid</td>
                    <td className="py-3 px-4 border-b">Typisk 5–10 % af årsløn i software-huse</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension (12–17 %)</td>
                    <td className="py-3 px-4 border-b">Trækkes før skat – øger totalpakke</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat (gns. 25,1 %)</td>
                    <td className="py-3 px-4 border-b">±0,6 pct-point → ±650 kr./md. netto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="my-4 font-medium italic">
              Fun fact: Én vellykket refaktorering, der sparer 200 ms i svartid, kan finansiere dit kode-konference-pas – efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Datamatiker Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / Økosystem</th>
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
                      <td className="py-3 px-4 border-b">
                        {example.city}
                        {example.city === "København" && " (SaaS / FinTech)"}
                        {example.city === "Aarhus" && " (e-commerce / IoT)"}
                        {example.city === "Odense" && " (robotics)"}
                        {example.city === "Aalborg" && " (cloud / telecom)"}
                        {example.city === "Esbjerg" && " (offshore IT)"}
                        {example.city === "Randers" && " (SMV-løsninger)"}
                      </td>
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
              * Beregnet med AM-bidrag 8 %, månedsfradrag 4 300 kr. og gennemsnitlig kommuneskat 25,1 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – Datamatiker Løn Efter Skat vs. Erfaring</h2>
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
            <p className="text-sm text-gray-600 italic mb-4">
              Indkomsten.dk anslår gennemsnitslønnen til ca. 41 000 kr. pr. md. før skat – tallene ovenfor følger samme leje.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior i Odense (50 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Bruttoløn:</strong> 50 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 4 000 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 46 000 kr.</li>
                <li><strong>Personfradrag:</strong> 4 300 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 41 700 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 15 400 kr.</li>
                <li><strong>Datamatiker løn efter skat ≈ 31 100 kr.</strong></li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige boosts til højere datamatiker løn efter skat 🚀</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Strategi</th>
                    <th className="py-3 px-4 border-b text-left">Typisk nettoløft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Få cloud- eller sikkerheds-certificering</td>
                    <td className="py-3 px-4 border-b">+1 000 – 2 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Skift til højmargen-branche (FinTech, pharma)</td>
                    <td className="py-3 px-4 border-b">+1 500 – 3 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Forhandl bonus / aktieprogram (RSU'er)</td>
                    <td className="py-3 px-4 border-b">+5–10 % årligt</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til kommune &lt; 24 % skat</td>
                    <td className="py-3 px-4 border-b">+300 – 650 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Datamatiker Løn Efter Skat ℹ️</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny datamatiker efter skat?</p>
                <p>Ca. 26 000 kr./md. ved 38 000 kr. brutto.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 35 000 kr. netto?</p>
                <p>Senior-niveau + nichecertificering + bonusordning i højlønnet branche.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension med i "løn efter skat"?</p>
                <p>Nej, de 12–17 % indbetales før skat og ses ikke på nettolønnen.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer jeg topskat?</p>
                <p>Ved ca. 55 400 kr. brutto pr. md. (665 000 kr. årligt).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Datamatiker løn efter skat spænder i 2025 fra 24 000 kr. for juniors til cirka 35 000 kr. for erfarne specialister. Stack-valg, certificeringer og kommuneskat er de hurtigste skripter til et større nettobeløb. Vil du kende dit helt eget tal? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – færdig på under et minut, helt uden syntaksfejl.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul>
              <li><a href="https://www.prosa.dk/raad-og-svar/loenstatistik-2024/startloen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PROSA – Startlønstatistik 2024/25 (median 38 525 kr. for datamatiker)</a></li>
              <li><a href="https://indkomsten.dk/hvad-tjener-en/datamatiker/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Indkomsten.dk – Gennemsnitsløn datamatiker ≈ 41 000 kr. pr. md.</a></li>
              <li><a href="https://www.prosa.dk/raad-og-svar/loenstatistik-2024/startloen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PROSA – Nationale startlønninger 2024 (gns. 41 794 kr.)</a></li>
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

export default DatamatikerLoenPage; 