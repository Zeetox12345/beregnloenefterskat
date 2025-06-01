import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const DataanalytikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data (converting from the provided information)
  const cityData = {
    "København": { grossSalary: 55000, netMin: 35000, netMax: 35500 },
    "Aarhus": { grossSalary: 50000, netMin: 32000, netMax: 32500 },
    "Odense": { grossSalary: 47000, netMin: 30000, netMax: 30500 },
    "Aalborg": { grossSalary: 45000, netMin: 29000, netMax: 29500 },
    "Vejle": { grossSalary: 42000, netMin: 27000, netMax: 27500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0-2 år)", grossSalary: 35000, netMin: 23000, netMax: 23500 },
    { type: "Analyst 3-5 år", grossSalary: 42000, netMin: 27000, netMax: 27500 },
    { type: "Senior / Lead", grossSalary: 50000, netMin: 32000, netMax: 32500 },
    { type: "Copenhagen top-tier", grossSalary: 55000, netMin: 35000, netMax: 35500 }
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
        title="Dataanalytiker Løn Efter Skat 2025 – Se Din Nettoløn Her"
        description="Hvad tjener en dataanalytiker efter skat i 2025? Se realistiske eksempler på løn før og efter skat – og beregn din nettoløn hurtigt med beregningsværktøj online."
        keywords="dataanalytiker løn efter skat, dataanalytiker nettoløn, data analyst løn, business intelligence løn, sql developer løn"
      />
      <Header />
      <PageTitle title="Dataanalytiker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Dataanalytiker Løn Efter Skat 2025 – Fra SQL-Query til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids dataanalytiker kan i 2025 forvente en løn før skat på cirka 35 000 – 55 000 kr. pr. måned, afhængigt af branche, erfaring og bonus. Det svarer til en dataanalytiker løn efter skat på omtrent 23 000 – 35 000 kr. Få dit helt præcise tal lynhurtigt med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en dataanalytiker løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Basisløn</td>
                    <td className="py-3 px-4 border-b">Indkomsten.dk viser gennemsnit ≈ 45 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & rolle</td>
                    <td className="py-3 px-4 border-b">Randstad angiver 40–50 k kr./md. for 0-5 års erfaring; seniorer i storbanker ligger 55 k kr.+.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">SalaryExpert: København-gennemsnit 1 009 k kr./år → 84 k kr./md. (≈ 7 % over landsgns.). Vejle ligger 8 % under.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & KPI</td>
                    <td className="py-3 px-4 border-b">5–20 % af års­løn for leverede business-cases; beskattes som almindelig løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certificeringer</td>
                    <td className="py-3 px-4 border-b">Google DP, Azure DP-203 eller CFA L1 giver typisk +2 000-4 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 17 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og ses ikke i nettolønnen, men løfter totalpakken.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Dataanalytiker Løn – Før & Efter Skat i 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / Region</th>
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
              * Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Dataanalytiker 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
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
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent (~37 %).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior dataanalytiker (50 000 kr. før skat)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 50 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 4 000 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 46 000 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 41 350 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 15 300 kr.</li>
                <li><strong>Dataanalytiker løn efter skat:</strong> ≈ 31 000 kr.</li>
              </ul>
            </div>
            <p>
              Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit nøjagtige nettobeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Certificér dig i cloud-platforme (AWS, Azure) eller BI-værktøjer</strong> – +2-4 k kr./md. før skat.</li>
              <li><strong>Specialisér dig i høj-ROI områder som pricing-analytics eller fraud-detection.</strong></li>
              <li><strong>Forhandl performance-bonus baseret på datadrevne besparelser/mer­salg.</strong></li>
              <li><strong>Flyt til lav-skat kommune</strong> – kan give 600 kr./md. ekstra uden flere queries.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Dataanalytiker Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny dataanalytiker efter skat?</p>
                <p>Cirka 23 500 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når jeg 35 000 kr. efter skat?</p>
                <p>Som lead-analytiker i København med bonus eller certificeringer.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i nettoløn?</p>
                <p>Nej – arbejdsgiverens 17 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Rammer bonus topskat?</p>
                <p>Kun hvis samlet løn før skat overstiger ca. 63 300 kr./md.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger Dataanalytiker løn efter skat oftest mellem 23 000 og 35 000 kr. pr. måned – svarende til 35 000 – 55 000 kr. før skat. Certificeringer, geografisk placering og performance-bonusser er de hurtigste veje til et større nettobeløb. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – og se, hvor meget der lander på kontoen, når scriptet er kørt og rapporten er sendt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://indkomsten.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Indkomsten.dk – Data Analyst gennemsnit 45 500 kr./md.</a></li>
              <li><a href="https://randstad.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Randstad.dk – Data Analyst 40 000-50 000 kr./md. (0-5 års erfaring)</a></li>
              <li><a href="https://salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Data Analyst Danmark 946 k kr./år; København 1 009 k kr./år</a></li>
              <li><a href="https://salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Accounting Data Analyst, Vejle: 488 k kr./år</a></li>
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

export default DataanalytikerLoenPage; 