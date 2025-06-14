import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AutomationsteknologLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 42000, netMin: 28000, netMax: 28500 },
    "Østjylland (Aarhus)": { grossSalary: 40000, netMin: 26500, netMax: 27000 },
    "Odense": { grossSalary: 38000, netMin: 25000, netMax: 25500 },
    "Aalborg": { grossSalary: 37000, netMin: 24500, netMax: 25000 },
    "Esbjerg": { grossSalary: 36000, netMin: 24000, netMax: 24500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (0-2 år)", grossSalary: 33000, netMin: 22000, netMax: 22500 },
    { type: "Projektingeniør (3-5 år)", grossSalary: 38000, netMin: 25000, netMax: 25500 },
    { type: "Senior / Site Engineer", grossSalary: 44000, netMin: 29500, netMax: 30000 },
    { type: "Specialist / Team Lead (Kbh.)", grossSalary: 50000, netMin: 33000, netMax: 33500 }
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
        title="Automationsteknolog Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad tjener en automationsteknolog efter skat i 2025? Typisk mellem 22.000–33.000 kr./md. Brug beregn løn efter skat og få præcist estimat ud fra din bruttoløn."
        keywords="automationsteknolog løn efter skat, automationsteknolog nettoløn, PLC programmør løn, industritekniker løn"
      />
      <Header />
      <PageTitle title="Automationsteknolog Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Automationsteknolog Løn Efter Skat 2025 – PLC-Kode til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids automationsteknolog (37 t/u) kan i 2025 forvente en løn før skat på 33 000 – 50 000 kr. pr. måned – afhængigt af erfaring, branche (vind, pharma, robotik) og service-tillæg. Det svarer til en automationsteknolog løn efter skat på cirka 22 000 – 33 000 kr. Få dit helt præcise nettobeløb på under ét minut i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – indtast blot din bruttoløn.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Derfor varierer automationsteknolog løn efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvad gør forskellen?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Grundløn</td>
                    <td className="py-3 px-4 border-b">Indkomsten.dk viser gennemsnit ≈ 38 500 kr./md. for automationsteknologer med 3-5 års erfaring.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Branche</td>
                    <td className="py-3 px-4 border-b">Wind & pharma betaler 8-12 % over klassisk maskinproduktion.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København og Østjylland ligger ca. 7 % over landsgennemsnittet.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Service- & vagt­tillæg</td>
                    <td className="py-3 px-4 border-b">Rejse/commissioning, nat- og weekendvagter giver 1 500-4 000 kr./md. ekstra.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certificeringer</td>
                    <td className="py-3 px-4 border-b">TÜV-SIL, Siemens TIA Portal eller UR Certified udløser ofte +1 500-3 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 17 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat; vises ikke i nettolønnen, men øger den samlede pakke.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Automationsteknolog</h2>
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
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior automationsteknolog (44 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    <tr>
                      <td className="py-1 font-medium">Løn før skat</td>
                      <td className="py-1 text-right">44 000 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-medium">AM-bidrag 8 %</td>
                      <td className="py-1 text-right">3 520 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-medium">Skattepligtig indkomst</td>
                      <td className="py-1 text-right">40 480 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-medium">Personfradrag</td>
                      <td className="py-1 text-right">4 650 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-medium">Beskatningsgrundlag</td>
                      <td className="py-1 text-right">35 830 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-medium">A-skat (≈ 37 %)</td>
                      <td className="py-1 text-right">13 260 kr.</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-1 font-bold">Løn efter skat</td>
                      <td className="py-1 text-right font-bold">≈ 29 200 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Test din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se forskellen straks.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Automationsteknolog Løn – Før & Efter Skat i 2025</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Certificér dig i sikkerhed og robotik</strong> – SIL-godkendelser og UR-certificering giver premium-løn.</li>
              <li><strong>Tag site- og commissioning-opgaver</strong> – rejse­dage og service­vagter honoreres 30-50 % over normal time.</li>
              <li><strong>Skift til high-margin brancher</strong> – pharma og offshore-vind betaler markant bedre end traditionel industri.</li>
              <li><strong>Forhandl bonus på OEE-forbedring</strong> – bind din løn til den dokumenterede output-stigning, du leverer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Automationsteknolog Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny automationsteknolog efter skat?</p>
                <p>Ca. 22 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 33 000 kr. efter skat?</p>
                <p>Specialistrolle i storby + rejse­tillæg og certificeringer.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller service-bonus i nettoløn?</p>
                <p>Ja, beskattes som almindelig løn.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettobeløbet?</p>
                <p>Nej – 17 % arbejdsgiver­pension indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger automationsteknolog løn efter skat typisk mellem 22 000 og 33 000 kr. pr. måned – baseret på 37 000 – 55 000 kr. før skat. Branchevalg, certificeringer og service­tillæg er de hurtigste veje til et større nettobeløb. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der faktisk tikker ind, når PLC-koden er deployeret og anlægget kører i green status.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>IDA Lønstatistik 2025 – Automationsteknologer & tekniske bachelorer</li>
              <li>SalaryExpert – Automation Engineer, Denmark & Copenhagen (2025)</li>
              <li>Indkomsten.dk – Automationsteknolog gennemsnitsløn, maj 2025</li>
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

export default AutomationsteknologLoenPage; 