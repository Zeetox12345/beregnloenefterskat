import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const HandelsokonomLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 44000, netMin: 21000, netMax: 35000 },
    "Aarhus": { grossSalary: 41000, netMin: 20000, netMax: 32000 },
    "Odense": { grossSalary: 39500, netMin: 19000, netMax: 31000 },
    "Aalborg": { grossSalary: 38000, netMin: 19000, netMax: 29500 },
    "Esbjerg": { grossSalary: 37000, netMin: 18000, netMax: 29000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (detail/grossist)", grossSalary: 30000, netMin: 19000, netMax: 19500 },
    { type: "3-5 år, indkøber/sælger", grossSalary: 35000, netMin: 22000, netMax: 22500 },
    { type: "Senior category manager", grossSalary: 42000, netMin: 26000, netMax: 27000 },
    { type: "Commercial manager, Kbh.", grossSalary: 52000, netMin: 32000, netMax: 33000 }
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
        title="Handelsøkonom Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en handelsøkonom løn efter skat i 2025? Typisk 18 000 – 33 000 kr. udbetalt – før skat 32 000 – 52 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="handelsøkonom løn, handelsøkonom løn efter skat, business economist salary, category manager løn, indkøber løn"
      />
      <Header />
      <PageTitle title="Handelsøkonom Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Handelsøkonom Løn Efter Skat 2025 – Fra Grossisttal til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids handelsøkonom (37 t/uge) tjener i 2025 typisk 28 000 – 52 000 kr. før skat – spændet dækker fra nyuddannet indkøbs- eller salgsassistent til senior category manager i København. Det giver en handelsøkonom løn efter skat på ca. 18 000 – 33 000 kr. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit præcise nettobeløb.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker handelsøkonom løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Lønfaktor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Betydning for nettobeløbet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Grundløn</td>
                    <td className="border border-gray-300 px-4 py-2">Typisk 28 280 – 43 350 kr./md. for færdiguddannede</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Erfaring & rolle</td>
                    <td className="border border-gray-300 px-4 py-2">Junior → indkøber/sælger → category manager: +3 000 – 9 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Branche</td>
                    <td className="border border-gray-300 px-4 py-2">B2B-indkøb, pharma og tech betaler 5 – 10 % over detail/national grossist</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Bonus & provision</td>
                    <td className="border border-gray-300 px-4 py-2">Salgsroller har ofte bonus på 5 – 15 % af årslønnen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Geografi</td>
                    <td className="border border-gray-300 px-4 py-2">København aflønner ≈ 7 % højere end landsgennemsnittet</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Pension 12 – 15 %</td>
                    <td className="border border-gray-300 px-4 py-2">Indbetales før skat – tæller ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Handelsøkonom</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Profil / erfaring</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Løn før skat</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">≈ Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">{item.type}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="border border-gray-300 px-4 py-2">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">By</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Typisk løn før skat</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">≈ Løn efter skat**</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Kommuneskat 2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">København</td>
                    <td className="border border-gray-300 px-4 py-2">33 000 – 55 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">21 000 – 35 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">23,5 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Aarhus</td>
                    <td className="border border-gray-300 px-4 py-2">32 000 – 50 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">20 000 – 32 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">24,52 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Odense</td>
                    <td className="border border-gray-300 px-4 py-2">31 000 – 48 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">19 000 – 31 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">25,50 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Aalborg</td>
                    <td className="border border-gray-300 px-4 py-2">30 000 – 46 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">19 000 – 29 500 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">25,60 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Esbjerg</td>
                    <td className="border border-gray-300 px-4 py-2">29 000 – 45 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">18 000 – 29 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">26,10 %</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              ** Nettobeløbene er beregnet efter samme metode som ovenfor; kun kommunesatsen varierer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Mid-level handelsøkonom (Aarhus)</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Post</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Løn før skat</td>
                    <td className="border border-gray-300 px-4 py-2 font-medium">35 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">AM-bidrag 8 %</td>
                    <td className="border border-gray-300 px-4 py-2">2 800 kr.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Skattepligtig indkomst</td>
                    <td className="border border-gray-300 px-4 py-2">32 200 kr.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Personfradrag</td>
                    <td className="border border-gray-300 px-4 py-2">4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Beskatningsgrundlag</td>
                    <td className="border border-gray-300 px-4 py-2">27 550 kr.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">A-skat (≈ 37 %)</td>
                    <td className="border border-gray-300 px-4 py-2">10 190 kr.</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Handelsøkonom løn efter skat</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">≈ 22 300 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🎯 Bliv category manager eller key account</h3>
                <p className="text-sm">Strategisk ansvar løfter fastlønnen markant.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">💊 Skift til højmargin-sektor</h3>
                <p className="text-sm">Pharma, IT-hardware eller energi betaler 5 – 10 % mere.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">📊 Certificér dig i data-analyse</h3>
                <p className="text-sm">Power BI / SQL – eftertragtet i indkøb & supply chain.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">🏡 Bosæt dig i lav-skat-kommune</h3>
                <p className="text-sm">Springet fra 26,1 % til 23,5 % kan spare ~700 kr. netto pr. måned.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Handelsøkonom Løn Efter Skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Spørgsmål</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Hvad får en ny handelsøkonom udbetalt?</td>
                    <td className="border border-gray-300 px-4 py-2">Ca. 19 000 kr./md. efter skat.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Kan jeg nå 30 000 kr. netto?</td>
                    <td className="border border-gray-300 px-4 py-2">Ja – som commercial manager i storby eller branchen med høj bonus.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Beskattes bonus som almindelig løn?</td>
                    <td className="border border-gray-300 px-4 py-2">Ja, bonus og provision beskattes som A-indkomst.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Indgår pension i nettolønnen?</td>
                    <td className="border border-gray-300 px-4 py-2">Nej – 12 – 15 % indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p className="mb-4">
              I 2025 ligger handelsøkonom løn efter skat typisk mellem 18 000 og 33 000 kr. pr. måned, svarende til 32 000 – 52 000 kr. før skat. Rolle, branche og kommune­sats er de tre største faktorer for nettobeløbet. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget der faktisk tikker ind, når næste supply-aftale er lukket.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="https://ucl.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">UCL.dk</a> – "Hvad tjener en handelsøkonom?" 28 280 – 43 350 kr./md.
              </li>
              <li>
                <a href="https://studentum.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Studentum.dk</a> – Løn & fremtidsudsigter for indkøbere (sammenligneligt job)
              </li>
              <li>
                <a href="https://salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SalaryExpert</a> – Gennemsnitsløn Danmark & lønforskel København
              </li>
              <li>
                <a href="https://skm.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet</a> – Oversigt over kommuneskatteprocenter 2025
              </li>
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

export default HandelsokonomLoenPage; 