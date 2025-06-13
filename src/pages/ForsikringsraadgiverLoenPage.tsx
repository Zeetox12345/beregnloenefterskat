import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ForsikringsraadgiverLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");

  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 41000, netMin: 26500, netMax: 27000 },
    "Aarhus": { grossSalary: 38500, netMin: 25000, netMax: 25500 },
    "Odense": { grossSalary: 37000, netMin: 24000, netMax: 24500 },
    "Aalborg": { grossSalary: 36000, netMin: 23500, netMax: 24000 },
    "Kolding": { grossSalary: 35500, netMin: 23000, netMax: 23500 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0–2 år)", grossSalary: 33000, netMin: 22000, netMax: 22500 },
    { type: "Rådgiver 3–5 år", grossSalary: 38000, netMin: 25000, netMax: 25500 },
    { type: "Senior (6–9 år)", grossSalary: 44000, netMin: 29000, netMax: 29500 },
    { type: "Team Lead / Key Account (Kbh.)", grossSalary: 50000, netMin: 33000, netMax: 33500 },
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
        title="Forsikringsrådgiver Løn Efter Skat 2025 – Komplet guide"
        description="Hvad er forsikringsrådgiver løn efter skat i 2025? Typisk 22.000–34.000 kr./md. Få realistiske estimater og brug beregn løn efter skat til at finde din præcise udbetaling."
        keywords="forsikringsrådgiver, løn efter skat, 2025, lønberegner, forsikring, bonus"
      />
      <Header />
      <PageTitle title="Forsikringsrådgiver Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Forsikringsrådgiver Løn Efter Skat 2025 – Fra Præmie til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                <strong>TL;DR</strong> — En fuldtids forsikringsrådgiver (37 t/uge) kan i 2025 forvente en løn før skat på cirka 33 000 – 50 000 kr. pr. måned, alt efter erfaring, porteføljestørrelse og bonus. Det giver en forsikringsrådgiver løn efter skat på omtrent 22 000 – 33 000 kr. Få et helt præcist, personligt tal på under ét minut med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – og test både fastløn og bonus-scenarier.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer din forsikringsrådgiver løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Lønfaktor</th>
                    <th className="px-4 py-2 border-b">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b"><strong>Grundløn</strong></td>
                    <td className="px-4 py-2 border-b">Branchegennemsnittet i 2025 ligger omkring 38 500 kr./md. for rådgivere med 3–5 års erfaring.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b"><strong>Bonus & incitament</strong></td>
                    <td className="px-4 py-2 border-b">5 – 15 % af års­lønnen baseret på opsalg, fastholdelse og kundetilfredshed – beskattes som almindelig løn.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b"><strong>Certificeringer</strong></td>
                    <td className="px-4 py-2 border-b">Finanstilsynets "Rådgiver i Skade" eller EU IDD-krav kan give 1 500 – 3 000 kr./md. oveni.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b"><strong>Geografi</strong></td>
                    <td className="px-4 py-2 border-b">København/Øst­sjælland betaler typisk 7 % mere end lands­gennemsnittet.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b"><strong>Erfaring & rolle</strong></td>
                    <td className="px-4 py-2 border-b">Junior­rådgiver &lt; rådgiver &lt; senior­rådgiver &lt; team lead / key account.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2"><strong>Pension 17 %</strong></td>
                    <td className="px-4 py-2">Indbetales før skat og ses ikke i nettolønnen, men løfter din samlede pakke.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Forsikringsrådgiver 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Erfaring / Titel</th>
                    <th className="px-4 py-2 border-b">Løn før skat</th>
                    <th className="px-4 py-2 border-b">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((row) => (
                    <tr key={row.type}>
                      <td className="px-4 py-2 border-b">{row.type}</td>
                      <td className="px-4 py-2 border-b">{row.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-2 border-b">{row.netMin.toLocaleString()} – {row.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 italic mb-8">
              * Efter AM-bidrag 8 %, personfradrag 4 650 kr. og en typisk trækprocent på 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Rådgiver 3–5 år (38 000 kr.)</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Post</th>
                    <th className="px-4 py-2 border-b">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b">Løn før skat</td>
                    <td className="px-4 py-2 border-b">38 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">AM-bidrag 8 %</td>
                    <td className="px-4 py-2 border-b">3 040 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Skattepligtig indkomst</td>
                    <td className="px-4 py-2 border-b">34 960 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Personfradrag</td>
                    <td className="px-4 py-2 border-b">4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Beskatningsgrundlag</td>
                    <td className="px-4 py-2 border-b">30 310 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">A-skat (≈ 37 %)</td>
                    <td className="px-4 py-2 border-b">11 220 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2"><strong>Forsikringsrådgiver løn efter skat</strong></td>
                    <td className="px-4 py-2"><strong>≈ 24 300 kr.</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="my-6">
              Prøv selv – indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se nettobeløbet med det samme.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige måder at hæve nettolønnen</h2>
            
            <ol className="list-decimal list-inside space-y-2 my-6">
              <li><strong>Opsøg certifikater</strong> – fx IDD-modul eller skade­certificering giver typisk +2–3 k/md. i fastløn.</li>
              <li><strong>Forhandl KPI-bonus</strong> – mål på kundetilfredshed (NPS) og krydssalg kan udløse 5–10 % ekstra brutto.</li>
              <li><strong>Specialisér dig</strong> – arbejd med erhvervs­forsikring eller high-net-worth-kunder, hvor provisionerne er større.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – kan løfte nettolønnen 500–700 kr./md. uden flere salgsmøder.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Forsikringsrådgiver Løn Efter Skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Spørgsmål</th>
                    <th className="px-4 py-2 border-b">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b">Hvad tjener en ny rådgiver efter skat?</td>
                    <td className="px-4 py-2 border-b">Omkring 22 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Hvordan når jeg 30 000 kr. efter skat?</td>
                    <td className="px-4 py-2 border-b">Senior­rolle i storby + bonus og certificeringer.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Tæller bonus i nettoløn?</td>
                    <td className="px-4 py-2 border-b">Ja, den beskattes som almindelig løn.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Indgår pension i nettobeløbet?</td>
                    <td className="px-4 py-2">Nej – pensionsbidraget (17 %) indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><a href="https://www.salaryexpert.com/salary/job/insurance-sales-representative/denmark" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SalaryExpert – Insurance Sales Representative, Denmark (opdateret 2025)</a></li>
              <li>Indkomsten.dk – Gennemsnitsløn for forsikringsrådgivere, maj 2025</li>
              <li>Randstad Lønstatistik 2025 – Forsikringsbranchen: rådgiver-, specialist- og team-lead-niveauer</li>
              <li>Finans Danmark / Finanstilsynet – IDD-krav til forsikringsdistribution og certificering (2025)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p className="my-6">
              I 2025 ligger forsikringsrådgiver løn efter skat typisk mellem 22 000 og 34 000 kr. pr. måned – baseret på 34 000 – 52 000 kr. før skat. Certificeringer, performance-bonus og geografi er de hurtigste løftestænger. Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se det nøjagtige beløb, der lander på kontoen, når policerne er lukket.
            </p>

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

export default ForsikringsraadgiverLoenPage; 