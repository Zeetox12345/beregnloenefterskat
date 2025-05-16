import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BygningsingenioerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 50000, netMin: 32000, netMax: 32600 },
    "Aarhus": { grossSalary: 48000, netMin: 30700, netMax: 31200 },
    "Odense": { grossSalary: 46000, netMin: 29500, netMax: 30000 },
    "Aalborg": { grossSalary: 45000, netMin: 28800, netMax: 29300 },
    "Esbjerg": { grossSalary: 44000, netMin: 28100, netMax: 28600 },
    "Randers": { grossSalary: 44000, netMin: 28100, netMax: 28600 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Graduate (0‑2 år)", grossSalary: 38000, netMin: 24400, netMax: 24900 },
    { type: "3‑5 år", grossSalary: 42000, netMin: 26800, netMax: 27300 },
    { type: "6‑8 år (BIM/Statik)", grossSalary: 47000, netMin: 29800, netMax: 30300 },
    { type: "9‑11 år (Projektleder)", grossSalary: 52000, netMin: 33000, netMax: 33600 },
    { type: "12+ år (Chefingeniør)", grossSalary: 58000, netMin: 36700, netMax: 37300 }
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
        title="Bygningsingeniør Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Bygningsingeniør løn efter skat 2025: Se realistiske estimater for erfaring, stilling og branche. Beregn hurtigt dit eget tal online."
        keywords="bygningsingeniør løn efter skat, ingeniør løn, bygningsingeniør nettoløn, projektleder ingeniør løn, bygningsingeniør anciennitet"
      />
      <Header />
      <PageTitle title="Bygningsingeniør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Bygningsingeniør Løn Efter Skat 2025 – Fra Blueprint til Bankkonto </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids bygningsingeniør i 2025 kan forvente en bygningsingeniør løn efter skat på 24 000 – 33 000 kr. pr. måned. Beløbet afhænger især af by, anciennitet, projektleder‑tillæg og branche (rådgiver vs. entreprenør). Tjek dit eget estimat lynhurtigt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad driver lønnen for en bygningsingeniør?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Overenskomst</strong> – IDA/Dansk Industri "Teknik & Design" sætter basisløntrin.</li>
              <li><strong>Projektleder‑tillæg</strong> – 3‑7 % ekstra når du styrer tidsplan & økonomi.</li>
              <li><strong>BIM‑/Statik‑certificeringer</strong> – giver funktions­tillæg eller hurtigere spring til næste løntrin.</li>
              <li><strong>Branche</strong> – entreprenørled betaler gennemsnitligt 5‑8 % mere før skat end rådgiverhusene.</li>
              <li><strong>Region</strong> – kommuneskat kan variere op til 0,8 pct.point = ± 650 kr. i løn efter skat.</li>
            </ul>

            <p className="italic">
              Fun fact: Ét vel­afsluttet bæredygtigt DGNB‑Guld projekt kan give bonus svarende til en måneds bygningsingeniør løn efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By‑tabel – Bygningsingeniør Løn Efter Skat 2025</h2>

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
              *Beregnet med gennemsnitlig kommuneskat 24,9 % og AM‑bidrag 8 %. Vil du kende dit eget tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> – det tager under ét minut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Bygningsingeniør Løn Efter Skat</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense – 46 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 46 000 kr.</li>
                <li><strong>AM‑bidrag 8 %:</strong> → 3 680 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> → 42 320 kr.</li>
                <li><strong>Personfradrag:</strong> → 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> → 37 670 kr.</li>
                <li><strong>A‑skat (~ 37 %):</strong> → 13 930 kr.</li>
                <li><strong>Bygningsingeniør løn efter skat:</strong> ≈ 28 390 kr.</li>
              </ul>
            </div>

            <p>
              Vil du se effekten af projektleder‑tillæg eller lavere kommuneskat? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> og få dit personlige estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 Hacks til en højere bygningsingeniør løn efter skat </h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Hack</th>
                    <th className="py-3 px-4 border-b text-left">Typisk løft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">BIM‑specialistcertifikat (Revit/Navisworks)</td>
                    <td className="py-3 px-4 border-b">+1 500 – 2 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Spring til projektleder tidligt</td>
                    <td className="py-3 px-4 border-b">+3 000 – 4 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Lav‑skat kommune</td>
                    <td className="py-3 px-4 border-b">+300 – 650 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Green Building / DGNB‑auditor</td>
                    <td className="py-3 px-4 border-b">+5 % funktions­tillæg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Bygningsingeniør Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny bygningsingeniør efter skat?</p>
                <p>Cirka 24 500 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer man 35 000 kr. efter skat?</p>
                <p>Typisk som projektleder efter 8‑10 års erfaring eller med chefingeniør‑titel.</p>
              </div>
              <div>
                <p className="font-semibold">Hvilken branche betaler bedst?</p>
                <p>Entreprenørled & offshore konstruktion giver 5‑10 % højere før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Pension tæller ikke med?</p>
                <p>De 12 % arbejdsgiver­betalt pension går før skat og øger din samlede værdipakke, men vises ikke som løn efter skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger bygningsingeniør løn efter skat mellem 24 000 kr. (graduate) og ≈ 37 000 kr. (chefingeniør). Projektleder‑tillæg, certificeringer og valg af lav‑skat kommune kan øge nettolønnen markant. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad dine tegninger og statik­beregninger præcist indbringer pr. måned.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://ida.dk/raad-og-karriere/loen/idas-loenprognose" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IDA & DI Teknik & Design Lønoversigt 2025</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen/bygningsingenioer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex Lønstatistik – Bygningsingeniører (maj 2025)</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025</a></li>
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

export default BygningsingenioerLoenPage; 