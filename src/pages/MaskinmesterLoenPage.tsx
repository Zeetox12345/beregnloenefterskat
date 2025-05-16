import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const MaskinmesterLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København (kraftværk)": { grossSalary: 52000, netMin: 33300, netMax: 33900 },
    "Aarhus (industri)": { grossSalary: 49000, netMin: 31200, netMax: 31700 },
    "Esbjerg (offshore)": { grossSalary: 58000, netMin: 36700, netMax: 37300 },
    "Aalborg (fjernvarme)": { grossSalary: 47000, netMin: 29900, netMax: 30400 },
    "Odense (hospital‑drift)": { grossSalary: 45000, netMin: 28600, netMax: 29100 },
    "Randers (skib)": { grossSalary: 50000, netMin: 32000, netMax: 32500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (0‑2 år)", grossSalary: 40000, netMin: 25600, netMax: 26100 },
    { type: "3‑5 år", grossSalary: 44000, netMin: 28100, netMax: 28600 },
    { type: "6‑8 år (skiftehold)", grossSalary: 48000, netMin: 30700, netMax: 31200 },
    { type: "9‑11 år (driftleder)", grossSalary: 52000, netMin: 33000, netMax: 33600 },
    { type: "12+ år (chefmester / teknisk chef)", grossSalary: 60000, netMin: 38100, netMax: 38700 }
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
        title="Maskinmester Løn Efter Skat 2025 – Hvad Får Du Udbetalt?"
        description="Få indblik i maskinmester løn efter skat 2025: byer, offshore‑tillæg og ledelses­roller. Beregn dit personlige tal nu."
        keywords="maskinmester løn efter skat, offshore maskinmester, driftleder løn, skibsmester løn, el-autorisation, vagt tillæg maskinmester"
      />
      <Header />
      <PageTitle title="Maskinmester Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Maskinmester Løn Efter Skat 2025 – Fra Turbiner til Tilgodehavende ️</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids maskinmester i Danmark kan i 2025 forvente en maskinmester løn efter skat på 26 000 – 38 000 kr. om måneden. Spændet bestemmes af branche (kraftværk / offshore / skib), anciennitet, vagt­tillæg og om du har ledelses­ansvar. Få et lynhurtigt, personligt estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad driver din maskinmester løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b">IDA‑ og Maskinmestrenes Forening‑overenskomster sætter basis.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Brancher</td>
                    <td className="py-3 px-4 border-b">Offshore & vind ≈ 10 % højere før skat end landbaserede værker.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Vagt‑/skifte­tillæg</td>
                    <td className="py-3 px-4 border-b">3‑holds­skift: aften +15 %, nat +30 %, weekend +40 %.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Funktions­tillæg</td>
                    <td className="py-3 px-4 border-b">Driftleder, QHSE, el‑autorisation  +1 500 – 3 500 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension 13 %</td>
                    <td className="py-3 px-4 border-b">Betales før skat → lidt lavere skat, større samlet pakke.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">± 0,8 pct.point = ± 650 kr./md. i løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="italic">
              Fun fact: Én offshore‑tur på 14 dage kan give vagt­tillæg nok til at dække din næste ferie – efter skat!
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By‑tabel – Maskinmester Løn Efter Skat 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / Sektor</th>
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
              *Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat 24,9 % + AM‑bidrag 8 %. For dine tal → <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaring & Stillingsniveau – Maskinmester Løn Efter Skat</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Esbjerg – offshore, 58 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 58 000 kr.</li>
                <li><strong>AM‑bidrag 8 %:</strong> → 4 640 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> → 53 360 kr.</li>
                <li><strong>Personfradrag:</strong> → 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> → 48 710 kr.</li>
                <li><strong>A‑skat (~ 37 %):</strong> → 18 000 kr.</li>
                <li><strong>Maskinmester løn efter skat:</strong> ≈ 36 360 kr.</li>
              </ul>
            </div>

            <p>
              Test andre scenarier på under ét minut i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Boost din maskinmester løn efter skat – 4 hurtige hacks </h2>
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
                    <td className="py-3 px-4 border-b">Tag vagterne – nat/helligdag</td>
                    <td className="py-3 px-4 border-b">+1 000 – 4 000 kr./md. efter skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Få el‑autorisation</td>
                    <td className="py-3 px-4 border-b">Giver funktions­tillæg og større ansvar</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Skift til offshore‑rotation</td>
                    <td className="py-3 px-4 border-b">Højere grundløn + fridagsrotation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til lav‑skat kommune</td>
                    <td className="py-3 px-4 border-b">Spar op til 650 kr./md. netto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Maskinmester Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny maskinmester efter skat?</p>
                <p>Omkring 26 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 38 000 kr. efter skat?</p>
                <p>Offshore, driftleder‑niveau + nattevagter.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej, de 13 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Rammer jeg topskat?</p>
                <p>Muligt i chef­stillinger ({'>'}63 000 kr. før skat).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 spænder maskinmester løn efter skat fra ≈ 26 000 kr. til ≈ 38 700 kr. Branchevalg, skifteholds­tillæg og tekniske certifikater gør den største forskel. Indtast din løn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – så ser du præcis, hvad dine turbiner, kedler og kontrolrum omsættes til på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://www.mmf.dk/publikationer/loenstatistik/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Maskinmestrenes Forening – Lønoversigt 2025</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen/maskinmester" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Maskinmestre (maj 2025)</a></li>
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

export default MaskinmesterLoenPage; 