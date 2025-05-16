import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FinansoekomonLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 42000, netMin: 27000, netMax: 27500 },
    "Aarhus": { grossSalary: 40000, netMin: 25700, netMax: 26200 },
    "Odense": { grossSalary: 38000, netMin: 24400, netMax: 24900 },
    "Aalborg": { grossSalary: 37000, netMin: 23800, netMax: 24300 },
    "Esbjerg": { grossSalary: 36000, netMin: 23200, netMax: 23700 },
    "Randers": { grossSalary: 36000, netMin: 23200, netMax: 23700 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Trainee / bankelev", grossSalary: 25000, netMin: 18000, netMax: 18400 },
    { type: "Nyuddannet (0-2 år)", grossSalary: 32000, netMin: 20500, netMax: 20900 },
    { type: "3-5 år (certificeret rådgiver)", grossSalary: 36000, netMin: 23200, netMax: 23700 },
    { type: "6-8 år (senior)", grossSalary: 40000, netMin: 25700, netMax: 26200 },
    { type: "9-11 år (teamleder)", grossSalary: 45000, netMin: 28900, netMax: 29400 }
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
        title="Finansøkonom Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Hvad er finansøkonom løn efter skat i 2025? Få realistiske estimater for forskellige byer og erfaringstrin – og beregn dit personlige beløb."
        keywords="finansøkonom løn efter skat, finansøkonom indkomst, finansøkonom lønniveau, finansøkonom udbetaling, finansøkonom startløn, finansøkonom karriere, finansøkonom løntabel"
      />
      <Header />
      <PageTitle title="Finansøkonom Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Finansøkonom Løn Efter Skat 2025 – Fra Excel-ark til Udbetaling </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som fuldtids­ansat finansøkonom kan du i 2025 forvente en finansøkonom løn efter skat på ca. 22 000 – 28 000 kr. om måneden. Beløbet varierer efter branche (bank, forsikring, ejendom), anciennitet og bonus for salgsmål. Få dit hurtige estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad afgør din finansøkonom løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det tæller</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Grundløn</td>
                    <td className="py-3 px-4 border-b">Fastlagt af Finansforbundet/FA (bank & realkredit) eller HK Finans (forsikring, ejendom).</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Bonus / incitament</td>
                    <td className="py-3 px-4 border-b">Oftest 5-10 % af årsløn for nåede salgsmål.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Certificeringer</td>
                    <td className="py-3 px-4 border-b">Bolig­finansiering, investerings­rådgivning → funktions­tillæg på 1 000 – 2 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Brancheskift</td>
                    <td className="py-3 px-4 border-b">Ejendoms­administration betaler 5-7 % mindre før skat end bank, men kræver færre skæve timer.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension 15 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat – sænker skatte­grundlag og øger totalpakke.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til ± 600 kr. pr. md. i forskel på løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-blue-400">
              <p className="italic">
                Fun fact: Én solgt boligkreditpakke kan finansiere din streaming­tjeneste i et år – efter skat.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Finansøkonom Løn Efter Skat 2025</h2>

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
              *Beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %, uden kirkeskat. Beregn løn efter skat for at se, hvad din kommune gør ved tallene.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – Finansøkonom Løn Efter Skat vs. erfaring</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aarhus – senior finansøkonom, 40 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 40 000 kr.</li>
                <li><strong>AM-bidrag 8 % →</strong> 3 200 kr.</li>
                <li><strong>Skattepligtig indkomst →</strong> 36 800 kr.</li>
                <li><strong>Personfradrag →</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag →</strong> 32 150 kr.</li>
                <li><strong>A-skat (~ 37 %) →</strong> 11 900 kr.</li>
                <li><strong>Finansøkonom løn efter skat ≈</strong> 24 950 kr.</li>
              </ul>
            </div>
            
            <p>
              Vil du teste bonus eller lavere kommuneskat? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – hurtigere end at gennemgå en kundes kredithistorik.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad kan øge din finansøkonom løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Løftestrategi</th>
                    <th className="py-3 px-4 border-b text-left">Typisk nettogevinst</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Salgsbonus (mål {'>'} 110 %)</td>
                    <td className="py-3 px-4 border-b">+1 000 – 3 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Certifikat i investerings­rådgivning</td>
                    <td className="py-3 px-4 border-b">+1 200 – 2 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Teamleder­rolle</td>
                    <td className="py-3 px-4 border-b">+2 000 – 3 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Lav-skat kommune</td>
                    <td className="py-3 px-4 border-b">+300 – 600 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Finansøkonom Løn Efter Skat ℹ️</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny finansøkonom efter skat?</p>
                <p>Cirka 21 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 30 000 kr. efter skat?</p>
                <p>Ja, som teamleder med bonus i storbank.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i løn efter skat?</p>
                <p>Nej, de 15 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer jeg topskat?</p>
                <p>Over ca. 63 000 kr. før skat – sjældent i basis­stillinger, men muligt i compliance- eller treasury-roller.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger finansøkonom løn efter skat typisk mellem 22 000 – 28 000 kr. Bonus for salgsmål, certificeringer og lavere kommuneskat er de hurtigste veje til mere udbetaling. Tjek <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget dine budgetter, nøgletal og kundemøder egentlig giver på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://finansforbundet.dk/dk/dine-rettigheder/overenskomster/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Finansforbundet & FA – Overenskomst 2024-26</a></li>
              <li><a href="https://www.hk.dk/raadogstoette/loen/loen-kommune-region" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">HK Finans – Løntabel 2025</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen/finansoekonom" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Finansøkonomer (maj 2025)</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommuneskat 2025</a></li>
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

export default FinansoekomonLoenPage; 