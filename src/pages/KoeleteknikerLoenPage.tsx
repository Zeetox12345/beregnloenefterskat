import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const KoeleteknikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Hovedstaden");
  
  // City-specific salary data
  const cityData = {
    "Hovedstaden": { grossSalary: 42000, netMin: 27200, netMax: 27900 },
    "Midtjylland": { grossSalary: 38000, netMin: 24600, netMax: 25300 },
    "Syddanmark": { grossSalary: 36000, netMin: 23300, netMax: 24000 },
    "Nordjylland": { grossSalary: 34000, netMin: 22000, netMax: 22700 },
    "Sjælland": { grossSalary: 33000, netMin: 21300, netMax: 22000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Lærling (voksen)", grossSalary: 25000, netMin: 16300, netMax: 16800 },
    { type: "Nyuddannet (0-2 år)", grossSalary: 28000, netMin: 18300, netMax: 18800 },
    { type: "3-5 år", grossSalary: 32000, netMin: 20900, netMax: 21400 },
    { type: "6-8 år + vagter", grossSalary: 35000, netMin: 22800, netMax: 23400 },
    { type: "Senior / projektspecialist", grossSalary: 40000, netMin: 26000, netMax: 26700 },
    { type: "Off-shore / pharma lead", grossSalary: 45000, netMin: 28500, netMax: 29200 }
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
        title="Køletekniker Løn Efter Skat 2025 – Realistiske Tal og Beregning"
        description="Hvad er køletekniker løn efter skat i 2025? Se løn før og efter skat, erfaringstrin og tillæg – og beregn din nettoløn hurtigt og præcist."
        keywords="køletekniker løn efter skat, kølemontør løn, varmepumpe tekniker, F-gas Kat. I, amoniak køleanlæg, køleservice løn, kølebranche"
      />
      <Header />
      <PageTitle title="Køletekniker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Køletekniker Løn Efter Skat 2025 – fra frost­kompressor til nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids køletekniker (37 t/uge) kan i 2025 som hovedregel regne med en løn før skat på 28 000 – 45 000 kr. pr. måned. Det giver en køletekniker løn efter skat på cirka 18 000 – 29 000 kr., afhængigt af erfaring, branche, vagttillæg og kommune. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger køletekniker løn efter skat?</h2>

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
                    <td className="py-3 px-4 border-b">Overenskomster (Tekniq Arbejdsgiverne/3F) hæver minimalløn årligt; erfarne teknikere ligger 15-25 % over minimalløn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Certifikater</td>
                    <td className="py-3 px-4 border-b">F-gas Kat. I, varmepumpe-certifikat eller amoniak-køleanlæg ⇒ +1 500 – 3 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Branche</td>
                    <td className="py-3 px-4 border-b">Off-shore og pharma betaler 8-12 % over dagligvare & retail køl.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Vagttillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, nat +30 %, weekend +45 % – kan løfte nettolønnen 1 000 – 2 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension 12,5 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat – forbedrer totalpakken, men ses ikke som nettoløn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spænd på 0,8 pct-point svarer til ± ≈ 600 kr./md. i køletekniker løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – typiske niveauer 2025</h2>
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
              * Estimeret uden kirkeskat; AM-bidrag 8 % + gennemsnitlig kommuneskat 24,9 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale intervaller (erfaren tekniker, 160 timers måned)</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Region</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Efter skat</th>
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

            <p className="italic">
              Lønspændet matcher LønTjek 2025 (23 683 – 43 512 kr./md.)
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – senior køletekniker, nat- og weekendvagt</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 38 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 040 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 34 960 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 30 310 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 11 220 kr.</li>
                <li><strong>Køletekniker løn efter skat ≈ 23 740 kr.</strong></li>
              </ul>
            </div>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Hack</th>
                    <th className="py-3 px-4 border-b text-left">Effekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Certificér dig i F-gas Kat. I + amoniak</td>
                    <td className="py-3 px-4 border-b">Typisk +8-10 % før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Sig ja til nat- / weekendvagter</td>
                    <td className="py-3 px-4 border-b">Ulempe­tillæg giver op til 2 000 kr. ekstra netto.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Spring til pharma eller off-shore service</td>
                    <td className="py-3 px-4 border-b">Brancheskift kan løfte grundlønnen 10-15 %.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til lav-skat kommune</td>
                    <td className="py-3 px-4 border-b">Op til 600 kr. mere i køletekniker løn efter skat hver måned.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Køletekniker Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nyudlært køletekniker efter skat?</p>
                <p>Ca. 18 500 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 30 000 kr. netto?</p>
                <p>Ja, i off-shore eller pharma-service med skiftehold og senior­ansvar.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej, arbejdsgiverpension (ca. 12,5 %) indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer topskatten?</p>
                <p>Først ved {`>`} 63 000 kr. før skat pr. måned.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger køletekniker løn efter skat normalt mellem 18 000 og 29 000 kr. Erfaring, special­certifikater, vagttillæg og kommuneskat er de hurtigste måder at flytte netto­beløbet på. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se præcis, hvor meget din køle­ekspertise giver på kontoen, når kompressoren kører optimalt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://www.studentum.dk/job-loen/koeletekniker" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Studentum.dk – køletekniker gennemsnitsløn og jobudsigter</a></li>
              <li><a href="https://www.koeleteknik.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Dansk Køl & Varme (DAKV) – typisk indtægt 50 700 kr./md. inkl. pension</a></li>
              <li><a href="https://lontjek.dk/danmark-jobs-lonforhold/danmark-montorarbejde-inden-for-klima-og-koleteknik" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LønTjek 2025 – montørarbejde klima & køleteknik 23 683 – 43 512 kr./md.</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – kommunale skatteprocenter 2025 (maj 2025)</a></li>
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

export default KoeleteknikerLoenPage; 