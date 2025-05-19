import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const TogfoererLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 34000, netMin: 22000, netMax: 22500 },
    "Aarhus": { grossSalary: 33000, netMin: 21300, netMax: 21800 },
    "Odense": { grossSalary: 32000, netMin: 20500, netMax: 21000 },
    "Aalborg": { grossSalary: 31000, netMin: 19900, netMax: 20400 },
    "Esbjerg": { grossSalary: 30000, netMin: 19300, netMax: 19800 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Elev (togføreraspirant)", grossSalary: 25000, netMin: 16800, netMax: 17200 },
    { type: "Nyuddannet (0-2 år)", grossSalary: 32000, netMin: 20300, netMax: 20700 },
    { type: "3-5 års erfaring", grossSalary: 35000, netMin: 22200, netMax: 22600 },
    { type: "6-9 år + skiftehold", grossSalary: 38000, netMin: 24100, netMax: 24500 },
    { type: "Senior (10+ år + togfører-instruktør)", grossSalary: 42000, netMin: 26800, netMax: 27200 }
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
        title="Togfører Løn Efter Skat 2025 – Se Realistiske Eksempler"
        description="Hvad er togfører løn efter skat i 2025? Få overblik over løn før og efter skat, skifteholdstillæg og erfaringstrin – og beregn dit nettobeløb hurtigt."
        keywords="togfører løn efter skat, togfører løn 2025, togførerløn, DSB løn, skifteholdstillæg, Dansk Jernbaneforbund overenskomst"
      />
      <Header />
      <PageTitle title="Togfører Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Togfører Løn Efter Skat 2025 – Nettobeløb, Skifteholdstillæg og Karrieretrin</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids togfører (37 t/uge + skiftehold) kan i 2025 som hovedregel forvente:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-3 border-b text-left">Niveau</th>
                      <th className="py-2 px-3 border-b text-left">Løn før skat</th>
                      <th className="py-2 px-3 border-b text-left">Togfører løn efter skat*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border-b">Elev (togføreraspirant)</td>
                      <td className="py-2 px-3 border-b">25 000 kr.</td>
                      <td className="py-2 px-3 border-b">ca. 17 000 kr.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border-b">Nyuddannet (0-2 år)</td>
                      <td className="py-2 px-3 border-b">32 000 kr.</td>
                      <td className="py-2 px-3 border-b">ca. 20 500 kr.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border-b">3-5 års erfaring</td>
                      <td className="py-2 px-3 border-b">35 000 kr.</td>
                      <td className="py-2 px-3 border-b">ca. 22 400 kr.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border-b">6-9 år + skiftehold</td>
                      <td className="py-2 px-3 border-b">38 000 kr.</td>
                      <td className="py-2 px-3 border-b">ca. 24 300 kr.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 border-b">Senior (10+ år + togfører-instruktør)</td>
                      <td className="py-2 px-3 border-b">42 000 kr.</td>
                      <td className="py-2 px-3 border-b">ca. 27 000 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 italic">
                * Efter AM-bidrag 8 %, personfradrag 4 650 kr. og gennemsnitlig kommuneskat 24,9 %.
              </p>

            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad driver forskellene i togfører løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Grundløn & anciennitet</td>
                    <td className="py-3 px-4 border-b">Sættes i Dansk Jernbaneforbunds overenskomst (DJ/DSB). Trinløft ca. hvert andet år.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Skifteholdstillæg</td>
                    <td className="py-3 px-4 border-b">Aften + 18 %, nat + 30 %, weekend + 45 % – kan øge nettolønnen 1 000-1 800 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Funktionstillæg</td>
                    <td className="py-3 px-4 border-b">Instruktør, sikkerhedsansvarlig eller togfører på fjernstrækning: +1 500-3 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension 13 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag trækkes før skat – forbedrer totalpakken, men ses ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spænd på 0,8 pct-point ⇒ ± ≈ 650 kr./md. i togfører løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionalt overblik – månedsløn efter skat 2025</h2>
            <p className="text-sm text-gray-600 italic mb-4">
              (nyuddannet togfører, 160 timer + 2 weekender/kvartal)
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By/Region</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaring & karrieretrin – togfører løn efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Niveau</th>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, instruktør med nat/weekend-rul</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 38 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 040 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 34 960 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 30 310 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 11 220 kr.</li>
                <li><strong>Togfører løn efter skat ≈</strong> 24 300 kr.</li>
              </ul>
            </div>
            <p>
              Lav dine egne scenarier (flere weekender, lavere kommunesats) i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at løfte din nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Sig ja til nat- og weekendvagter</strong> – ulempetillæg giver op til 1 800 kr. ekstra netto pr. måned.</li>
              <li><strong>Bliv togfører-instruktør eller sikkerhedsrevisor</strong> – funktionstillæg 1 500-3 000 kr./md. før skat.</li>
              <li><strong>Optimer fradrag</strong> – kørsel ud over 24 km dagligt og overenskomstmæssige værdifradrag reducerer skatten direkte.</li>
              <li><strong>Vælg lav-skat kommune</strong> – kan øge togfører løn efter skat med op mod 650 kr./md. uden ekstra timer.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Togfører Løn Efter Skat</h2>
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
                    <td className="py-3 px-4 border-b">Hvornår rammer en togfører topskat?</td>
                    <td className="py-3 px-4 border-b">Når bruttoløn inkl. tillæg overstiger ca. 63 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Er elevlønnen skattepligtig?</td>
                    <td className="py-3 px-4 border-b">Ja, fuld A-indkomst (typisk ca. 25 000 kr. før skat).</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Tæller pension i nettoløn?</td>
                    <td className="py-3 px-4 border-b">Nej, 13 % arbejdsgiverpension indbetales før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kan kørsel til depot fradrages?</td>
                    <td className="py-3 px-4 border-b">Ja, befordringsfradrag for daglig transport over 24 km.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger togfører løn efter skat normalt mellem 20 000 og 27 000 kr. Skifteholdstillæg, funktionsroller og kommuneskat er de største håndtag til en højere nettoløn. <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> med dine egne tal – så ved du, hvad der lander på kontoen, når fløjten lyder.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.djf.dk/wp-content/uploads/2023/06/Endelig-794631-Jernbaneoverenskomsten-2023-2025-3.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Dansk Jernbaneforbund & DSB – Overenskomstsatser 2024-2026</a></li>
              <li><a href="https://www.jobindex.dk/jobsoegning?q=lokomotivf%C3%B8rer" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Togførere, maj 2025</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatteaendringer-i-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommunale indkomstskatter 2025</a></li>
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

export default TogfoererLoenPage; 