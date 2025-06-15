import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BilsaelgerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 47000, netMin: 31000, netMax: 31500 },
    "Aarhus": { grossSalary: 44000, netMin: 29000, netMax: 29500 },
    "Odense": { grossSalary: 41000, netMin: 27000, netMax: 27500 },
    "Aalborg": { grossSalary: 40000, netMin: 26500, netMax: 27000 },
    "Esbjerg": { grossSalary: 38000, netMin: 25000, netMax: 25500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0–2 år)", grossSalary: 30000, netMin: 20000, netMax: 20500 },
    { type: "Bilsælger 3–5 år", grossSalary: 37000, netMin: 24500, netMax: 25000 },
    { type: "Senior (premium-brand)", grossSalary: 45000, netMin: 29700, netMax: 30200 },
    { type: "Top performer / El-specialist (Kbh.)", grossSalary: 55000, netMin: 36200, netMax: 36700 }
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
        title="Bilsælger Løn Efter Skat 2025 – Se Din Nettoløn med Provision"
        description="Hvad er en bilsælger løn efter skat i 2025? Typisk 20.000–36.000 kr./md. efter skat – afhængigt af provision og mærke. Brug beregn løn efter skat og se, hvad du reelt får udbetalt."
        keywords="bilsælger løn, bilsælger løn efter skat, bilsælger løn 2025, provision bilsælger, bilsælger grundløn"
      />
      <Header />
      <PageTitle title="Bilsælger Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Bilsælger Løn Efter Skat 2025 – Fra Provisionssats til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids bilsælger (160 t/md.) kan i 2025 forvente en løn før skat på 30 000 – 55 000 kr. pr. måned, hvoraf 30–50 % ofte er provision. Det giver en bilsælger løn efter skat på cirka 20 000 – 36 000 kr. Vil du kende dit nøjagtige nettobeløb? Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – indtast din bruttoløn og se resultatet med det samme. Test også provisions­scenarier i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget ekstra der reelt tikker ind.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en bilsælger løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Lønfaktor</th>
                    <th className="px-4 py-3 text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Fast grundløn</td>
                    <td className="px-4 py-3">Mindsteløn i HK Auto/DI-overenskomsten ligger omkring 24 300 kr./md. før skat.</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium">Provision & bonus</td>
                    <td className="px-4 py-3">3–10 % af bruttoavance eller 1–2 % af omsætning; topsælgere kan fordoble grundlønnen.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Biltype</td>
                    <td className="px-4 py-3">Premium-, el- og varebiler har højere bruttoavance → større provision.</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium">Geografi</td>
                    <td className="px-4 py-3">Storkøbenhavn og Østjylland betaler 6–8 % højere fastløn end landsgennemsnittet.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Erfaring & certifikater</td>
                    <td className="px-4 py-3">Finansierings- og leasing­certifikater (Finans Danmark) giver +1 000–2 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Pension 8–10 %</td>
                    <td className="px-4 py-3">Indbetales før skat og ses ikke i nettolønnen, men løfter totalpakken.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Bilsælger</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Niveau / Rolle</th>
                    <th className="px-4 py-3 text-right">Løn før skat</th>
                    <th className="px-4 py-3 text-right">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                      <td className="px-4 py-3 font-medium">{item.type}</td>
                      <td className="px-4 py-3 text-right">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-3 text-right">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior sælger, premium-brand</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Post</th>
                    <th className="px-4 py-3 text-right">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Løn før skat</td>
                    <td className="px-4 py-3 text-right">45 000 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3">AM-bidrag 8 %</td>
                    <td className="px-4 py-3 text-right">3 600 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">Skattepligtig indkomst</td>
                    <td className="px-4 py-3 text-right">41 400 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3">Personfradrag</td>
                    <td className="px-4 py-3 text-right">4 650 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">Beskatningsgrundlag</td>
                    <td className="px-4 py-3 text-right">36 750 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3">A-skat (≈ 37 %)</td>
                    <td className="px-4 py-3 text-right">13 600 kr.</td>
                  </tr>
                  <tr className="bg-green-50 border-2 border-green-200">
                    <td className="px-4 py-3 font-bold text-green-800">Bilsælger løn efter skat</td>
                    <td className="px-4 py-3 text-right font-bold text-green-800">≈ 29 300 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="my-6">
              Indtast dit eget brutto­beløb i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se effekten af højere provision med det samme.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at løfte nettolønnen</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <ol className="list-decimal list-inside space-y-3">
                <li><strong>Fokusér på high-margin modeller</strong> – el- og premium­salg øger brutto­avancen og dermed provisionen.</li>
                <li><strong>Tag leasing- og finansierings­certifikat</strong> – giver adgang til bedre kommissionssatser.</li>
                <li><strong>Optimer kundeopfølgning</strong> – høj konverterings­rate udløser bonus på KPI'er.</li>
                <li><strong>Arbejd lørdage & kampagne­aftener</strong> – timetillæg + flere salgsmuligheder.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Bilsælger Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Spørgsmål</th>
                    <th className="px-4 py-3 text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Hvad tjener en ny bilsælger efter skat?</td>
                    <td className="px-4 py-3">Omkring 20 000 kr./md.</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium">Kan jeg nå 35 000 kr. efter skat?</td>
                    <td className="px-4 py-3">Ja, med høje premium-salg, leasingbonus og storbyløn.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Er provision skattepligtig?</td>
                    <td className="px-4 py-3">Ja, den beskattes som almindelig løn.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Indgår pension i nettolønnen?</td>
                    <td className="px-4 py-3">Nej – pensionen indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p className="mb-6">
              I 2025 ligger bilsælger løn efter skat typisk mellem 20 000 og 36 000 kr. om måneden – baseret på 30 000 – 55 000 kr. før skat. Provisions­struktur, biltype og geografisk placering er de vigtigste løftestænger. Beregn dit præcise nettobeløb nu i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – og se, hvad næste salg betyder for din bankkonto.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>HK Auto & DI – Detailoverenskomst 2024-26 – mindsteløn og provision</li>
              <li>Indkomsten.dk – Bilsælger gennemsnitsløn, maj 2025</li>
              <li>SalaryExpert – Car Sales Consultant, Denmark & Copenhagen (2025)</li>
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

export default BilsaelgerLoenPage; 