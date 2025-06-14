import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ITKonsulentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 48700, netMin: 32000, netMax: 32500 },
    "Aarhus": { grossSalary: 45000, netMin: 29800, netMax: 30300 },
    "Odense": { grossSalary: 42000, netMin: 28000, netMax: 28500 },
    "Aalborg": { grossSalary: 40000, netMin: 26500, netMax: 27000 },
    "Vejle": { grossSalary: 38000, netMin: 25000, netMax: 25500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0–2 år)", grossSalary: 38000, netMin: 25000, netMax: 25500 },
    { type: "Konsulent (3–5 år)", grossSalary: 45000, netMin: 29800, netMax: 30300 },
    { type: "Senior (6–9 år)", grossSalary: 55000, netMin: 36300, netMax: 36800 },
    { type: "Principal / Lead (10+ år, Kbh.)", grossSalary: 65000, netMin: 43000, netMax: 43500 }
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
        title="IT-konsulent Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad tjener en IT-konsulent efter skat? Typisk 25.000-43.000 kr./md. i 2025. Se lønbånd og bonusser – og beregn din præcise nettoløn med beregn løn efter skat på få sekunder."
        keywords="it konsulent løn efter skat, it konsulent nettoløn, it konsulent løn, teknisk konsulent løn, cloud konsulent løn"
      />
      <Header />
      <PageTitle title="IT-Konsulent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">IT-Konsulent Løn Efter Skat 2025 – Fra Faktura til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids IT-konsulent (37 t/uge) kan i 2025 forvente en løn før skat på 38 000 – 65 000 kr. pr. måned afhængigt af erfaring, specialisering og branche. Det giver en it konsulent løn efter skat på omtrent 25 000 – 43 000 kr. Få dit præcise beløb på under ét minut med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – indtast blot din bruttoløn.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en it konsulent løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvad betyder det?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Grundløn</td>
                    <td className="py-3 px-4 border-b">Indkomsten.dk viser 2025-gennemsnit ≈ 45 500 kr./md. for IT-konsulenter.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Speciale & certificeringer</td>
                    <td className="py-3 px-4 border-b">Cloud, cybersecurity og dataplatforme betaler 5–15 % højere end klassisk infrastruktur.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København betaler ca. 7 % over landsgns. (SalaryExpert: 48 700 kr./md.).</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring / titel</td>
                    <td className="py-3 px-4 border-b">Junior &lt; Consultant &lt; Senior &lt; Principal / Lead.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & overtid</td>
                    <td className="py-3 px-4 border-b">Konsulenthuse udbetaler 5–20 % performance-bonus – beskattes som almindelig løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 17 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag indbetales før skat og ses ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – IT-konsulent Løn Før & Efter Skat 2025</h2>
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
              * Efter 8 % AM-bidrag, personfradrag 4 650 kr. og typisk trækprocent ≈ 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior IT-konsulent (55 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium">Post</td>
                      <td className="py-2 text-right font-medium">Beløb</td>
                    </tr>
                    <tr>
                      <td className="py-1">Løn før skat</td>
                      <td className="py-1 text-right">55 000 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">AM-bidrag 8 %</td>
                      <td className="py-1 text-right">4 400 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">Skattepligtig indkomst</td>
                      <td className="py-1 text-right">50 600 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">Personfradrag</td>
                      <td className="py-1 text-right">4 650 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">Beskatningsgrundlag</td>
                      <td className="py-1 text-right">45 950 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">A-skat (≈ 37 %)</td>
                      <td className="py-1 text-right">17 000 kr.</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-2 font-bold">IT-konsulent løn efter skat</td>
                      <td className="py-2 text-right font-bold">≈ 33 600 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p>
              Indtast din egen bruttoløn – i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et nøjagtigt nettobeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk IT-Konsulent Løn – Før & Efter Skat i 2025</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at øge din nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Certificér dig</strong> – AWS Solutions Architect, Azure AZ-305 eller CISSP udløser ofte +2-4 k kr./md. før skat.</li>
              <li><strong>Søg projekter med overtidstillæg</strong> – fx migrationer uden for normal driftstid (1,5-2,0 timebetaling).</li>
              <li><strong>Bliv branchespecialist</strong> – finans, pharma og energi betaler 10-15 % over gennemsnittet.</li>
              <li><strong>Forhandl KPI-bonus</strong> – mål på leverance, kundenps eller salg af ekstra ydelser.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – It konsulent løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny it-konsulent efter skat?</p>
                <p>Cirka 25 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 40 000 kr. efter skat?</p>
                <p>Lead-rolle i København + bonus og cloud-speciale.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller bonus i nettoløn?</p>
                <p>Ja, beskattes som almindelig løn.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettobeløbet?</p>
                <p>Nej – de 17 % indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger it konsulent løn efter skat typisk mellem 25 000 og 43 000 kr. om måneden – svarende til 38 000 – 65 000 kr. før skat. Certificeringer, storbyløn og bonus er de hurtigste veje til et større nettobeløb. Tjek din egen udbetaling med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der reelt lander på kontoen, når sprinten er lukket og kunden er glad.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ol className="list-decimal pl-6 space-y-1 text-sm">
              <li>Indkomsten.dk – IT-konsulent gennemsnitsløn, juni 2025</li>
              <li>SalaryExpert – IT Consultant, Copenhagen: 584 k kr./år (≈ 48 700 kr./md.)</li>
              <li>Randstad Lønstatistik 2025 – Tech & Consulting lønintervaller</li>
              <li>IDA & PROSA Lønundersøgelse 2025 – Senior vs. junior it-konsulentlønner</li>
            </ol>

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

export default ITKonsulentLoenPage; 