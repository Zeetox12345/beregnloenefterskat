import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const IndustriteknikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Hovedstaden");
  
  // City-specific salary data
  const cityData = {
    "Hovedstaden": { grossSalary: 43000, netMin: 28000, netMax: 28700 },
    "Midtjylland": { grossSalary: 40000, netMin: 26100, netMax: 26800 },
    "Syddanmark": { grossSalary: 38000, netMin: 24800, netMax: 25400 },
    "Nordjylland": { grossSalary: 36000, netMin: 23500, netMax: 24100 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Lærling (4. hovedforløb)", grossSalary: 25000, netMin: 16200, netMax: 16700 },
    { type: "Nyuddannet (0-2 år)", grossSalary: 30000, netMin: 19400, netMax: 20000 },
    { type: "3-5 år", grossSalary: 34000, netMin: 22100, netMax: 22700 },
    { type: "6-8 år + skiftehold", grossSalary: 38000, netMin: 24800, netMax: 25400 },
    { type: "Senior / 5-akset programmør", grossSalary: 42000, netMin: 27400, netMax: 28000 },
    { type: "Teamleder / proces­optimering", grossSalary: 45000, netMin: 28100, netMax: 28700 }
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
        title="Industritekniker Løn Efter Skat 2025 – Realistiske Tal og Beregning"
        description="Hvad tjener en industritekniker efter skat i 2025? Se løn før og efter skat baseret på erfaring, branche og tillæg – og beregn din egen nettoløn."
        keywords="industritekniker løn efter skat, industritekniker nettoløn, cnc-programmør løn, cnc-operatør løn, maskinarbejder løn"
      />
      <Header />
      <PageTitle title="Industritekniker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Industritekniker Løn Efter Skat 2025 – CNC-præcision omsat til nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids industritekniker (37 t/uge) kan i 2025 generelt forvente en løn før skat på 30 000 – 45 000 kr. pr. måned – fra nyudlært til erfaren CNC-programmør på metal- eller plastfabrik. Det giver en industritekniker løn efter skat på ca. 19 000 – 28 500 kr. afhængigt af kommune, skifteholds­tillæg og branche. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> (det tager under ét minut) – og brug værktøjet igen, når du forhandler næste gang.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer industritekniker løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvad det betyder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Grundløn & anciennitet</td>
                    <td className="py-3 px-4 border-b">Gennemsnits­lønnen for industriteknikere ligger omkring 42 900 kr. før skat (<a href="https://www.studentum.dk/job-loen/industritekniker" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum</a>); ny på faget tjener ca. 33 500 kr. (<a href="https://indkomsten.dk/hvad-tjener-en/industritekniker/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Indkomsten.dk</a>).</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Branche & kunde­krav</td>
                    <td className="py-3 px-4 border-b">Fly-, medico- og offshore-komponenter betaler 8-12 % mere end traditionel maskin­bearbejdning.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Skifteholds­tillæg</td>
                    <td className="py-3 px-4 border-b">Aften + 18 %, nat + 30 %, weekend + 45 % – løfter nettolønnen 1 000 – 1 800 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certificeringer</td>
                    <td className="py-3 px-4 border-b">CAD/CAM, 5-akset CNC, ISO-programmering: +1 500 – 3 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12 %</td>
                    <td className="py-3 px-4 border-b">Betales før skat og forbedrer total­pakken, men ses ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct-point forskel – ± ≈ 700 kr./md. i industritekniker løn efter skat.</td>
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
              * Estimeret uden kirkeskat, AM-bidrag 8 % og gennemsnitlig kommuneskat 24,9 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale intervaller (erfaren industritekniker, 160 timer/md.)</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Region</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Nettoløn</th>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Midtjylland, aften- og weekendrul</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 38 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 040 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 34 960 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 30 310 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 11 220 kr.</li>
                <li><strong>Industritekniker løn efter skat ≈</strong> 23 740 kr.</li>
              </ul>
            </div>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere industritekniker nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Opgrader til 5-akset CNC & CAM-programmering</strong> – normalt +8-10 % grundløn.</li>
              <li><strong>Sig ja til nat- og weekendhold</strong> – ulempe­tillæg kan øge netto op til 1 800 kr./md.</li>
              <li><strong>Certificér dig i ISO 9001/13485</strong> – eftertragtet i medico- og flyindustri.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – op til 700 kr. ekstra i industritekniker løn efter skat hver måned.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Industritekniker Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-3 px-4 border-b text-left">Svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Hvad tjener en nyuddannet industritekniker efter skat?</td>
                    <td className="py-3 px-4 border-b">Ca. 19 500 kr./md. (<a href="https://indkomsten.dk/hvad-tjener-en/industritekniker/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Indkomsten.dk</a>)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Hvornår rammer man 25 000 kr. netto?</td>
                    <td className="py-3 px-4 border-b">Med 6-8 års erfaring + skifteholds­tillæg eller branche­skift til medicoteknik.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Indgår pension i nettoløn?</td>
                    <td className="py-3 px-4 border-b">Nej, 12 % pension indbetales før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kan overarbejde give topskat?</td>
                    <td className="py-3 px-4 border-b">Først når brutto­løn overstiger ca. 63 000 kr./md. – sjældent i denne stilling.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger industritekniker løn efter skat typisk mellem 19 000 og 28 500 kr. Skifteholds­tillæg, avanceret CNC-kompetence og kommuneskat er de hurtigste veje til et højere nettobeløb. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad netop din præcisionsbearbejdning giver på kontoen hver måned.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.studentum.dk/job-loen/industritekniker" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Gennemsnitsløn for industritekniker 42 944 kr. (maj 2025)</a></li>
              <li><a href="https://indkomsten.dk/hvad-tjener-en/industritekniker/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Indkomsten.dk – Industritekniker løn ca. 33 500 kr./md. (2025)</a></li>
              <li><a href="https://www.danskmetal.dk/lokalafdelinger/metal-hovedstaden/udgivelser/mh-0121-2-kvartal-2024" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dansk Metal Lønstatistik Industri 2024 Q4 (download)</a></li>
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

export default IndustriteknikerLoenPage; 