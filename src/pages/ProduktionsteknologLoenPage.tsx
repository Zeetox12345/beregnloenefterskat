import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ProduktionsteknologLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 52000, netMin: 34000, netMax: 34500 },
    "Aarhus": { grossSalary: 46000, netMin: 30500, netMax: 31000 },
    "Odense": { grossSalary: 42000, netMin: 27500, netMax: 28000 },
    "Aalborg": { grossSalary: 40000, netMin: 26000, netMax: 26500 },
    "Esbjerg": { grossSalary: 38000, netMin: 25000, netMax: 25500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Graduate (0-2 år)", grossSalary: 34000, netMin: 23000, netMax: 23500 },
    { type: "Procestekniker (3-5 år)", grossSalary: 40000, netMin: 26000, netMax: 26500 },
    { type: "Senior / CI-ingeniør", grossSalary: 46000, netMin: 30500, netMax: 31000 },
    { type: "Lead / TPM-manager (Kbh.)", grossSalary: 52000, netMin: 34000, netMax: 34500 }
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
        title="Produktionsteknolog Løn Efter Skat 2025 – Hvad Får Du Udbetalt?"
        description="Produktionsteknolog løn efter skat ligger typisk mellem 23.000–34.000 kr./md. i 2025. Se realistiske lønbånd og brug beregn løn efter skat til at finde din præcise nettoløn."
        keywords="produktionsteknolog løn efter skat, produktionsteknolog nettoløn, procestekniker løn, lean ingeniør løn, TPM manager løn"
      />
      <Header />
      <PageTitle title="Produktionsteknolog Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Produktionsteknolog Løn Efter Skat 2025 – Fra Lean-diagram til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids produktionsteknolog (37 t/uge) tjener i 2025 typisk 34 000 – 52 000 kr. før skat. Det svarer til en produktionsteknolog løn efter skat på ca. 23 000 – 34 000 kr. Vil du vide det helt præcist for din egen løn? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – du skal blot indtaste din bruttoløn. Prøv også at lægge evt. bonus oveni i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se forskellen med det samme.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en produktionsteknolog løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det rykker netto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Grundløn</td>
                    <td className="py-3 px-4 border-b">IDA-tal viser gennemsnit ≈ 40 600 kr./md. efter 3-5 års erfaring.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Branche</td>
                    <td className="py-3 px-4 border-b">Medico, vind og fødevareautomation ligger 8-12 % højere end klassisk metal.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">Hovedstad & Trekantområdet betaler ca. 7 % over landsgns.; Nord- & Vestjylland ca. 5 % under.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus/Overtid</td>
                    <td className="py-3 px-4 border-b">Lean-gevinst-bonus på 5-10 % og 1,5× timebetaling ved weekendomstillinger.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certificeringer</td>
                    <td className="py-3 px-4 border-b">Six Sigma Green/Black Belt, IATF-auditor eller CE-mærkningskursus giver +1 500–3 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 17 %</td>
                    <td className="py-3 px-4 border-b">Betales før skat, ligger altså oveni nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Produktionsteknolog</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Rolle / Erfaring</th>
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
              * Nettobeløb beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Produktionsteknolog Løn – Før & Efter Skat i 2025</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior CI-ingeniør (46 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 46 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 680 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 42 320 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 37 670 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 13 940 kr.</li>
                <li><strong>Produktionsteknolog løn efter skat:</strong> ≈ 30 200 kr.</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 italic mt-2">
              Vil du se, hvad en projektbonus eller lavere kommunesats betyder? Indtast tallet i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få svaret straks.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige måder at hæve nettolønnen</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Tag Six Sigma-certificering</strong> – Green/Black Belt kaster 2-3 k før skat af sig hver måned.</li>
              <li><strong>Vælg højmargen-brancher</strong> – medico og offshore-vind betaler op til 12 % over gennemsnit.</li>
              <li><strong>Forhandl Lean-bonus</strong> – bind den til OEE-forbedring eller scrap-reduktion.</li>
              <li><strong>Udnyt weekend-omstillinger</strong> – 1,5-2 × timebetaling ryger direkte i bruttolønnen.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Produktionsteknolog løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nyuddannet efter skat?</p>
                <p>Cirka 23 500 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 34 000 kr. efter skat?</p>
                <p>Lead-rolle i storby + bonus og certificeringer.</p>
              </div>
              <div>
                <p className="font-semibold">Er bonus skattepligtig?</p>
                <p>Ja, udbetales som almindelig løn.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej, de 17 % betales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger produktionsteknolog løn efter skat typisk mellem 23 000 og 34 000 kr. pr. måned – baseret på 34 000 – 52 000 kr. før skat. Branchevalg, certificeringer og bonus er de hurtigste knapper at dreje på. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se dit nøjagtige nettobeløb, når sidste Kaizen-tavle er opdateret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>IDA Lønstatistik 2025 – Produktionsteknologer (maj 2025)</li>
              <li>Randstad Salary Survey 2025 – Manufacturing & Process Engineering</li>
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

export default ProduktionsteknologLoenPage; 