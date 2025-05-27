import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const IndkoeberLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 47000, netMin: 30000, netMax: 31000 },
    "Aarhus": { grossSalary: 43000, netMin: 27000, netMax: 28000 },
    "Odense": { grossSalary: 40000, netMin: 25000, netMax: 26000 },
    "Aalborg": { grossSalary: 37000, netMin: 23500, netMax: 24000 },
    "Esbjerg": { grossSalary: 35000, netMin: 22300, netMax: 22800 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior Buyer (0–2 år)", grossSalary: 30000, netMin: 19000, netMax: 19500 },
    { type: "Buyer 3–5 år", grossSalary: 35000, netMin: 22300, netMax: 22800 },
    { type: "Strategic Buyer 6–8 år", grossSalary: 40000, netMin: 25000, netMax: 26000 },
    { type: "Category Manager 9–11 år", grossSalary: 45000, netMin: 28500, netMax: 29000 },
    { type: "Procurement Manager 12+ år", grossSalary: 50000, netMin: 31500, netMax: 32000 }
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
        title="Indkøber Løn Efter Skat 2025 – Se Realistiske Nettobeløb"
        description="Hvad er indkøber løn efter skat i 2025? Se løn før og efter skat baseret på erfaring, branche og rolle – og beregn dit eget nettobeløb online."
        keywords="indkøber løn efter skat, buyer løn, category manager løn, procurement manager løn, indkøber nettoløn"
      />
      <Header />
      <PageTitle title="Indkøber Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Indkøber Løn Efter Skat 2025 – Fra Forhandling til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids indkøber tjener i 2025 typisk en løn før skat på 30 000 – 50 000 kr. pr. måned. Det svarer til en indkøber løn efter skat på cirka 19 000 – 32 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut. Tallene bygger på Studentum-, Indkomsten-, SalaryExpert- og Paylab-data.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer indkøber løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det har betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Løn før skat</td>
                    <td className="py-3 px-4 border-b">Gennemsnit 39–53 k kr./md.; juniorer fra 30 k, seniorer 45 k+.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Branche & kategori</td>
                    <td className="py-3 px-4 border-b">Pharma, energi og industriproduktion betaler 5–10 % mere end detail & offentlige indkøb.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København ligger ~8 % over landsgennemsnit; provins 5–10 % lavere.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & ansvar</td>
                    <td className="py-3 px-4 border-b">Buyer, strategic buyer, category manager, procurement manager – hvert trin har eget lønspænd.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & KPI-tillæg</td>
                    <td className="py-3 px-4 border-b">Cost-savings-bonus eller supplier-rebate kan løfte bruttolønnen 5–15 %.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension (12–15 %)</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og ses ikke som nettoløn, men øger totalpakken.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionalt overblik – Indkøber Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Område</th>
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
              * Beregnet med 8 % AM-bidrag og gennemsnitlig trækprocent. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              (Kilder: <a href="https://www.salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SalaryExpert</a>, <a href="https://www.paylab.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Paylab</a>, <a href="https://www.glassdoor.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Glassdoor</a>)
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Indkøber Løn Efter Skat</h2>
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
              (Data: <a href="https://www.studentum.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Studentum</a>, <a href="https://www.indkomsten.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Indkomsten</a>, <a href="https://www.jobicy.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobicy</a>)
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Category Manager, Odense</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 40 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 200 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 36 800 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 32 150 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 11 900 kr.</li>
                <li><strong>Indkøber løn efter skat ≈</strong> 25 000 kr.</li>
              </ul>
            </div>
            <p className="text-sm mt-2">
              Indtast blot din egen løn før skat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få nettobeløbet på få sekunder.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Bliv Category- eller Commodity-specialist</strong> – avancerede kategorier (metaller, elektroniske komponenter) betaler 2–3 k kr./md. mere.</li>
              <li><strong>Forhandl KPI-bonus på cost-savings eller service-level</strong> – giver målbar værdiskabelse.</li>
              <li><strong>Certificér dig i CIPS, Lean Six Sigma eller SRM-værktøjer</strong> – virksomheder belønner dokumenteret metodik.</li>
              <li><strong>Skift til højmarginal branche</strong> – pharma, offshore eller vind betaler typisk 5–10 % over detail.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Indkøber Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny indkøber efter skat?</p>
                <p>Omkring 19 500 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når man 30 000 kr. efter skat?</p>
                <p>Typisk som category manager eller procurement manager med bonusordning.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej – arbejdsgiverens 12–15 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Udløser bonus topskat?</p>
                <p>Kun hvis løn før skat overstiger ca. 63 000 kr./md.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger indkøber løn efter skat oftest mellem 19 000 og 32 000 kr. pr. måned – svarende til 30 000 – 50 000 kr. før skat. Branchevalg, erfaringsniveau og bonusordninger er de store løftestænger. Indtast din egen månedsløn før skat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad der reelt tikker ind på kontoen, når den sidste leverandøraftale er lukket.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="https://www.studentum.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Studentum.dk</a> – Indkøber gennemsnitsløn 52 833 kr./md.</li>
              <li><a href="https://www.indkomsten.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Indkomsten.dk</a> – Indkøber gennemsnit ca. 39 000 kr./md.</li>
              <li><a href="https://www.paylab.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Paylab.com</a> – 80 % af procurement-specialister tjener 28 943 – 56 351 kr./md.</li>
              <li><a href="https://www.jobicy.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobicy.com</a> – Procurement manager gennemsnit 77 500 $ ≈ 50 k kr./md.</li>
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

export default IndkoeberLoenPage; 