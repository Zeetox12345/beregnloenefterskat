import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const DiplomingeniørLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 47000, netMin: 30500, netMax: 31100 },
    "Aarhus": { grossSalary: 45000, netMin: 29200, netMax: 29800 },
    "Odense": { grossSalary: 43000, netMin: 28100, netMax: 28600 },
    "Aalborg": { grossSalary: 42000, netMin: 27400, netMax: 27900 },
    "Esbjerg": { grossSalary: 41000, netMin: 26700, netMax: 27200 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Graduate (0–2 år)", grossSalary: 37000, netMin: 24200, netMax: 24700 },
    { type: "Ingeniør 3–5 år", grossSalary: 43000, netMin: 28100, netMax: 28600 },
    { type: "Senior (6–8 år)", grossSalary: 49000, netMin: 32000, netMax: 32500 },
    { type: "Lead / Specialist (Kbh.)", grossSalary: 55000, netMin: 36000, netMax: 36500 }
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
        title="Diplomingeniør Løn Efter Skat 2025 – Komplet Guide"
        description="Diplomingeniør løn efter skat ligger typisk på 24.000–36.000 kr./md. i 2025. Se realistiske lønbånd og brug beregn løn efter skat til at finde din præcise udbetaling."
        keywords="diplomingeniør løn efter skat, diplomingeniør nettoløn, ingeniør løn, teknisk løn"
      />
      <Header />
      <PageTitle title="Diplomingeniør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Diplomingeniør Løn Efter Skat 2025 – Fra Design Review til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids diplomingeniør (37 t/uge) ligger i 2025 typisk på en løn før skat på 37 000 – 55 000 kr. pr. måned. Det giver en diplomingeniør løn efter skat på cirka 24 000 – 36 000 kr. Beregn præcis, hvad der lander på din konto i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – og test både bonus- og overtidsscenarier på under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer en diplomingeniør løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det påvirker beløbet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Grundløn</td>
                    <td className="py-3 px-4 border-b">IDA-lønstatistik viser gennemsnit ≈ 43 800 kr./md. for diplomingeniører med 3–5 års erfaring.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Speciale & branche</td>
                    <td className="py-3 px-4 border-b">Pharma, vindenergi og SaaS ligger 8–12 % over klassisk produktion og offentlige funktioner.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København betaler ca. 7 % over landsgennemsnittet; Østjylland 3–4 % over.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & overtid</td>
                    <td className="py-3 px-4 border-b">Projektbonus på 5–15 % og 1½-2 × timebetaling ved site-installation beskattes som løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certificeringer</td>
                    <td className="py-3 px-4 border-b">PMP, Scrum Master eller TÜV-sikkerhed giver typisk +2 000 – 3 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 17 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og fremgår ikke af nettolønnen, men løfter totalpakken.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Diplomingeniør Løn – Før & Efter Skat i 2025</h2>
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
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og en gennemsnitlig trækprocent på 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Diplomingeniør 2025</h2>
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
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og en gennemsnitlig trækprocent på 37 %. Test dit eget bruttobeløb direkte i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior diplomingeniør (49 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-4 font-semibold">Trin</th>
                      <th className="text-left py-2 px-4 font-semibold">Beløb</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4">Løn før skat</td>
                      <td className="py-2 px-4">49 000 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">AM-bidrag 8 %</td>
                      <td className="py-2 px-4">3 920 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Skattepligtig indkomst</td>
                      <td className="py-2 px-4">45 080 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Personfradrag</td>
                      <td className="py-2 px-4">4 650 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Beskatningsgrundlag</td>
                      <td className="py-2 px-4">40 430 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">A-skat (≈ 37 %)</td>
                      <td className="py-2 px-4">14 960 kr.</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="py-2 px-4">Diplomingeniør løn efter skat</td>
                      <td className="py-2 px-4">≈ 31 000 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Certificér dig</strong> – PMP- eller Scrum-certifikater udløser ofte 2–3 k ekstra før skat.</li>
              <li><strong>Søg høj­margin-brancher</strong> – pharma, offshore-vind og med-tech betaler 8–12 % over gennemsnittet.</li>
              <li><strong>Forhandl bonus</strong> – bind den til projektleverancer eller OEE-forbedringer.</li>
              <li><strong>Flyt til lav-skat-kommune</strong> – kan øge nettolønnen 600–800 kr./md. uden flere arbejdstimer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Diplomingeniør Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-3 px-4 border-b text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Hvad tjener en ny diplomingeniør efter skat?</td>
                    <td className="py-3 px-4 border-b">Ca. 24 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Hvordan når jeg 35 000 kr. efter skat?</td>
                    <td className="py-3 px-4 border-b">Lead-rolle i storby + bonus og niche­certificering.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Tæller overtid i nettoløn?</td>
                    <td className="py-3 px-4 border-b">Ja, udbetales som A-indkomst og beskattes som løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Indgår pension i nettobeløbet?</td>
                    <td className="py-3 px-4 border-b">Nej – 17 % arbejdsgiver­pension indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger diplomingeniør løn efter skat typisk mellem 24 000 og 36 000 kr. om måneden – svarende til 37 000 – 55 000 kr. før skat. Branchevalg, certificeringer og bonusordninger er de hurtigste veje til et større nettobeløb. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der reelt lander på kontoen, når test­protokollen er godkendt og release­mødet er afsluttet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>IDA Lønstatistik 2025 – Diplomingeniørers grundløn og bonus (<a href="https://ida.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ida.dk</a>)</li>
              <li>SalaryExpert – Engineer, Copenhagen & Denmark (2025) (<a href="https://www.salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.salaryexpert.com</a>)</li>
              <li>Indkomsten.dk – Diplomingeniør gennemsnitsløn, maj 2025 (<a href="https://indkomsten.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://indkomsten.dk</a>)</li>
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

export default DiplomingeniørLoenPage; 