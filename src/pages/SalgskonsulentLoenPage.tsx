import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SalgskonsulentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 48500, netMin: 31000, netMax: 40000 },
    "Aarhus": { grossSalary: 45500, netMin: 29000, netMax: 37000 },
    "Odense": { grossSalary: 43500, netMin: 27500, netMax: 35000 },
    "Aalborg": { grossSalary: 41500, netMin: 26250, netMax: 33500 },
    "Esbjerg": { grossSalary: 40000, netMin: 25500, netMax: 32000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0-2 år, detail)", grossSalary: 32000, netMin: 20000, netMax: 20500 },
    { type: "Mid-level (3-5 år, B2B)", grossSalary: 38000, netMin: 23500, netMax: 24000 },
    { type: "Senior / Key Account", grossSalary: 46000, netMin: 28500, netMax: 29000 },
    { type: "Top performer, Cph. (fast + provision)", grossSalary: 60000, netMin: 37000, netMax: 38000 },
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
        title="Salgskonsulent Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en salgskonsulent løn efter skat i 2025? Typisk 20 000 – 38 000 kr. udbetalt – før skat 32 000 – 60 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="salgskonsulent løn, løn efter skat, salgskonsulent løn 2025, nettoløn salgskonsulent"
      />
      <Header />
      <PageTitle title="Salgskonsulent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Salgskonsulent Løn Efter Skat 2025 – Fra Pipeline til Nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids salgskonsulent (37 t/uge) tjener i 2025 typisk 32 000 – 60 000 kr. før skat, afhængigt af erfaring, branche og provision. Det giver en salgskonsulent løn efter skat på ca. 20 000 – 38 000 kr. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit præcise nettobeløb.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker salgskonsulent løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold border-b">Lønfaktor</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Grundløn</td>
                    <td className="px-4 py-3">Gennemsnit ≈ 36 000 – 38 500 kr./md.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Provision & bonus</td>
                    <td className="px-4 py-3">10 – 30 % af årslønnen; top-performere kan nå 70 000 kr.+ på gode kvartaler</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Branche</td>
                    <td className="px-4 py-3">IT-/tech-salg betaler ca. 10 % over detail; FMCG og telemarketing ligger 5 % under</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Geografi</td>
                    <td className="px-4 py-3">København aflønner ≈ 7 % højere end landsgennemsnittet</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Erfaring & rolle</td>
                    <td className="px-4 py-3">Junior → Key Account / BDM kan løfte fastlønnen 5 000 – 12 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Pension 12 – 15 %</td>
                    <td className="px-4 py-3">Indbetales før skat – ses ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Salgskonsulent</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold border-b">Profil / erfaring</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Løn før skat</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">≈ Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{item.type}</td>
                      <td className="px-4 py-3">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-3">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold border-b">By</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Typisk løn før skat</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">≈ Løn efter skat**</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Kommuneskat 2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">København</td>
                    <td className="px-4 py-3">34 000 – 63 000 kr.</td>
                    <td className="px-4 py-3">22 000 – 40 000 kr.</td>
                    <td className="px-4 py-3">23,5 %</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Aarhus</td>
                    <td className="px-4 py-3">33 000 – 58 000 kr.</td>
                    <td className="px-4 py-3">21 000 – 37 000 kr.</td>
                    <td className="px-4 py-3">24,52 %</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Odense</td>
                    <td className="px-4 py-3">32 000 – 55 000 kr.</td>
                    <td className="px-4 py-3">20 000 – 35 000 kr.</td>
                    <td className="px-4 py-3">25,50 %</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Aalborg</td>
                    <td className="px-4 py-3">31 000 – 52 000 kr.</td>
                    <td className="px-4 py-3">19 500 – 33 500 kr.</td>
                    <td className="px-4 py-3">25,60 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Esbjerg</td>
                    <td className="px-4 py-3">30 000 – 50 000 kr.</td>
                    <td className="px-4 py-3">19 000 – 32 000 kr.</td>
                    <td className="px-4 py-3">26,10 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">
              ** Nettobeløb beregnet som ovenfor; kun kommunesats varierer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Mid-level salgskonsulent (Aarhus)</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold border-b">Post</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Løn før skat</td>
                    <td className="px-4 py-3">38 000 kr.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">AM-bidrag 8 %</td>
                    <td className="px-4 py-3">3 040 kr.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Skattepligtig indkomst</td>
                    <td className="px-4 py-3">34 960 kr.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Personfradrag</td>
                    <td className="px-4 py-3">4 650 kr.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Beskatningsgrundlag</td>
                    <td className="px-4 py-3">30 310 kr.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">A-skat (≈ 37 %)</td>
                    <td className="px-4 py-3">11 220 kr.</td>
                  </tr>
                  <tr className="bg-blue-50 font-semibold">
                    <td className="px-4 py-3">Salgskonsulent løn efter skat</td>
                    <td className="px-4 py-3">≈ 23 700 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">💼 Optimer provisionen</h3>
                <p>Forhandle højere % eller lavere tærskler; små ændringer giver store nettobeløb.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">🚀 Skift til højmargin-branche</h3>
                <p>SaaS, medico og energi betaler typisk 10 % mere fast samt større bonuspuljer.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">📈 Bliv Key Account / BDM</h3>
                <p>Større portefølje og strategisk ansvar hæver fastlønnen 5 000 – 8 000 kr./md.</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">🏛️ Vælg kommune med lavere skat</h3>
                <p>Et hop fra 26,1 % til 23,5 % kan spare ca. 700 kr. netto om måneden.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Salgskonsulent Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold border-b">Spørgsmål</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Hvad tjener en ny salgskonsulent efter skat?</td>
                    <td className="px-4 py-3">Cirka 20 000 kr./md.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Kan jeg nå 40 000 kr. netto?</td>
                    <td className="px-4 py-3">Ja – som topsælger i storby med høj provision.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Beskattes provision som løn?</td>
                    <td className="px-4 py-3">Ja, provision og bonus beskattes som almindelig A-indkomst.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Indgår pension i nettolønnen?</td>
                    <td className="px-4 py-3">Nej – 12 – 15 % indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p className="mb-6">
              I 2025 ligger salgskonsulent løn efter skat oftest mellem 20 000 og 38 000 kr. pr. måned, svarende til 32 000 – 60 000 kr. før skat. Provision, branche og kommune­sats er de største gear, du kan dreje på for at øge din nettoløn. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der faktisk lander på kontoen, når sidste kvartal er lukket.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Indkomsten.dk – Gennemsnitsløn salgskonsulent 38 500 kr./md. <a href="https://indkomsten.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">indkomsten.dk</a></li>
              <li>Randstad.dk – Salgskonsulent løn ca. 36 000 kr./md. inkl. tillæg (2025) <a href="https://randstad.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">randstad.dk</a></li>
              <li>Business Danmark – Lønstatistik: salgskonsulent typisk 45 000 kr./md. før provision (2025) <a href="https://businessdanmark.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">businessdanmark.dk</a></li>
              <li>SalaryExpert – Sales advisor København 365 k kr./år (≈ 30 k kr./md.) <a href="https://salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salaryexpert.com</a></li>
              <li>SalaryExpert – Account manager København 726 k kr./år (≈ 60 k kr./md.) <a href="https://salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salaryexpert.com</a></li>
              <li>CEPOS – Kommuneskat 2025 spænder fra 23,4 % til 26,3 % <a href="https://cepos.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">cepos.dk</a></li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: juni 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SalgskonsulentLoenPage; 