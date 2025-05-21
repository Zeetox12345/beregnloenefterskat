import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FinancialControllerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 65000, netMin: 42000, netMax: 42800 },
    "Aarhus": { grossSalary: 60000, netMin: 39000, netMax: 39800 },
    "Odense": { grossSalary: 55000, netMin: 35600, netMax: 36300 },
    "Aalborg": { grossSalary: 52000, netMin: 33600, netMax: 34300 },
    "Esbjerg": { grossSalary: 50000, netMin: 32300, netMax: 33000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior / Assistant (0-2 år)", grossSalary: 40000, netMin: 26000, netMax: 26600 },
    { type: "Financial Controller (3-5 år)", grossSalary: 48000, netMin: 31500, netMax: 32200 },
    { type: "Senior Controller (6-8 år)", grossSalary: 57000, netMin: 37000, netMax: 37700 },
    { type: "Team Lead / Manager", grossSalary: 65000, netMin: 42000, netMax: 42800 },
    { type: "Head of Controlling", grossSalary: 70000, netMin: 45000, netMax: 45700 },
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
        title="Financial Controller Løn Efter Skat 2025 – Se Realistiske Eksempler"
        description="Hvad tjener en financial controller efter skat i 2025? Se løn før og efter skat for alle erfaringsniveauer – og beregn din nettoløn hurtigt og præcist."
        keywords="financial controller løn, controller løn efter skat, financial controller nettoløn, controller lønstatistik, erhvervsøkonom løn"
      />
      <Header />
      <PageTitle title="Financial Controller Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Financial Controller Løn Efter Skat 2025 – tallene bag regnearket</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids financial controller (37 t/uge) kan i 2025 som tommelfingerregel forvente en løn før skat på 40 000 – 70 000 kr. pr. måned – fra entry level til senior/gruppeansvarlig. Det svarer til en financial controller løn efter skat på ca. 26 000 – 45 000 kr. afhængigt af branche, erfaring, bonus og kommune. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et præcist nettobeløb på under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger financial controller løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Betydning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Branche</td>
                    <td className="py-3 px-4 border-b text-sm">Life-science, energi og SaaS betaler 8 – 12 % højere grundløn end detail og non-profit.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Erfaring & rolle</td>
                    <td className="py-3 px-4 border-b text-sm">Assistant → Controller → Senior → Lead/Manager; hvert hop giver typisk 10 – 15 % lønlyft.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Bonus</td>
                    <td className="py-3 px-4 border-b text-sm">5 – 15 % af årslønnen ved KPI-opfyldelse; beskattes som almindelig løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Certificeringer</td>
                    <td className="py-3 px-4 border-b text-sm">CMA, ACCA eller SAP FI/CO kan udløse 1 500 – 3 000 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Pension 12 – 15 %</td>
                    <td className="py-3 px-4 border-b text-sm">Betales før skat; forbedrer totalpakken, men ses ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Kommuneskat</td>
                    <td className="py-3 px-4 border-b text-sm">Op til 0,8 pct-point forskel svarer til ± ≈ 700 kr./md. i financial controller løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              Kilde: Jobindex Lønstatistik – Financial Controller, maj 2025 (median 56 900 kr./md.)
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – byoversigt 2025</h2>
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
              * Beregnet uden kirkeskat; forudsætter AM-bidrag 8 % og gennemsnitlig kommuneskat 24,9 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrieretrappen – financial controller løn før og efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Titel / Erfaring</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item) => (
                    <tr key={item.type} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{item.type}</td>
                      <td className="py-3 px-4 border-b">{item.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {item.netMin.toLocaleString("da-DK")} – {item.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, senior controller med 10 % bonus</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 57 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 4 560 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 52 440 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 47 790 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 17 700 kr.</li>
                <li><strong>Financial controller løn efter skat ≈</strong> 34 140 kr.</li>
              </ul>
            </div>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Strategi</th>
                    <th className="py-3 px-4 border-b text-left">Effekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Certificér dig (CMA, ACCA, SAP S/4HANA)</td>
                    <td className="py-3 px-4 border-b">Typisk +5 – 8 % lønløft før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Forhandl bonusmål koblet til cash-flow eller EBITDA</td>
                    <td className="py-3 px-4 border-b">10 – 15 % af årsløn er almindeligt</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Gå efter high-margin brancher (medico, vedvarende energi, software)</td>
                    <td className="py-3 px-4 border-b">Lønspændet ligger i toppen</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til lav-skat kommune</td>
                    <td className="py-3 px-4 border-b">Kan øge financial controller løn efter skat med op mod 700 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Financial Controller Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny financial controller efter skat?</p>
                <p>Omkring 26 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer jeg 40 000 kr. nettoløn?</p>
                <p>På manager-niveau med bonus i Hovedstaden.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej, arbejdsgiver­pension på 12-15 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Kan bonus udløse topskat?</p>
                <p>Ja, hvis samlet månedsløn før skat overstiger ca. 63 000 kr.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger financial controller løn efter skat typisk mellem 26 000 og 45 000 kr. Grundløn, bonusmodel og kommuneskat er de vigtigste løftestænger. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> som dit regneark til netto­beløbet, før du siger ja til næste stilling eller lønforhandling.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.jobindex.dk/tjek-din-loen/financial-controller" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Financial Controller, maj 2025</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: august 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FinancialControllerLoenPage; 