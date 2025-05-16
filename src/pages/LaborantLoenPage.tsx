import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LaborantLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 44000, netMin: 28000, netMax: 28500 },
    "Aarhus": { grossSalary: 42000, netMin: 26600, netMax: 27100 },
    "Odense": { grossSalary: 40000, netMin: 25400, netMax: 25900 },
    "Aalborg": { grossSalary: 39000, netMin: 24800, netMax: 25300 },
    "Esbjerg": { grossSalary: 38000, netMin: 24200, netMax: 24700 },
    "Randers": { grossSalary: 38000, netMin: 24200, netMax: 24700 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Praktikant (3. semester)", grossSalary: 17000, netMin: 14400, netMax: 14700 },
    { type: "Nyuddannet (0‑2 år)", grossSalary: 32000, netMin: 20600, netMax: 21000 },
    { type: "3‑5 år", grossSalary: 36000, netMin: 23300, netMax: 23800 },
    { type: "6‑8 år (QA / mikrobiologi)", grossSalary: 40000, netMin: 25400, netMax: 25900 },
    { type: "9‑11 år (senior / teamkoordinator)", grossSalary: 44000, netMin: 28000, netMax: 28500 },
    { type: "12+ år (QC‑leder)", grossSalary: 48000, netMin: 30600, netMax: 31100 }
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
        title="Laborant Løn Efter Skat 2025 – Hvad Får Du Udbetalt?"
        description="Hvor meget får du som laborant efter skat? Se opdaterede tal og brug beregn løn efter skat til at finde dit eget udbetalingsbeløb."
        keywords="laborant løn, laborant løn efter skat, udbetalt løn, løn efter skat, laborant nettoløn, laborant indkomst, HK"
      />
      <Header />
      <PageTitle title="Laborant Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Laborant Løn Efter Skat 2025 – Fra Reagensglas til Rådighedsbeløb </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat laborant kan i 2025 forvente en laborant løn efter skat på ca. 23 000 – 29 000 kr. pr. måned. Intervallet skyldes branche (privat farma vs. offentlig kontrol), anciennitet og ulempetillæg for aften / weekendarbejde. Få et personligt estimat lynhurtigt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en laborants løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b">HK/Dansk Laborant‑Forening (OK24) – gennemsnit 42 000 kr. før skat i privat sektor 2024 → +2 % i 2025</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Branche</td>
                    <td className="py-3 px-4 border-b">Farma & food ≈ 8 % højere end offentlig reference­lab.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Ulempe‑/skifte­tillæg</td>
                    <td className="py-3 px-4 border-b">Aften + 15 %, nat + 30 %, weekend + 45 %.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Funktions‑/kvalifikations­tillæg</td>
                    <td className="py-3 px-4 border-b">QA, mikrobiologi, GLP‑auditor → +1 500 – 2 500 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension 13 %</td>
                    <td className="py-3 px-4 border-b">Stiger 1 % pr. 1/5‑25, sænker skatte­grundlaget</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel → ± 600 kr./md. netto.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="italic text-sm">
              Fun fact: Ét godkendt validerings­batch kan finansiere din laboratorie­kaffe i et helt år – efter skat!
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Laborant Løn Efter Skat – Byer 2025</h2>
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
              *Beregn med gennemsnitlig kommuneskat 24,9 % + AM‑bidrag 8 %, uden kirkeskat. Vil du kende dit tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaring & Speciale – Laborant Løn Efter Skat</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aarhus – QA‑laborant, 42 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 42 000 kr.</li>
                <li><strong>AM‑bidrag 8 % →</strong> 3 360 kr.</li>
                <li><strong>Skattepligtig indkomst →</strong> 38 640 kr.</li>
                <li><strong>Personfradrag →</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag →</strong> 33 990 kr.</li>
                <li><strong>A‑skat (~ 37 %) →</strong> 12 600 kr.</li>
                <li><strong>Laborant løn efter skat ≈</strong> 26 040 kr.</li>
              </ul>
            </div>
            <p className="text-sm">
              Vil du teste weekend­tillæg eller lavere kommuneskat? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> – det tager under ét minut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan hæver du din laborant løn efter skat </h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Tip</th>
                    <th className="py-3 px-4 border-b text-left">Typisk nettoløns‑løft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Tag nat‑/weekend­skift</td>
                    <td className="py-3 px-4 border-b">+700 – 2 200 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Specialisér dig i QC‑mikrobiologi</td>
                    <td className="py-3 px-4 border-b">+1 500 – 2 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Få GLP/ISO‑audit‑rolle</td>
                    <td className="py-3 px-4 border-b">+1 000 – 1 800 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til lav‑skat kommune</td>
                    <td className="py-3 px-4 border-b">+300 – 600 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Laborant Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny laborant efter skat?</p>
                <p>Cirka 21 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan rammer jeg 30 000 kr. efter skat?</p>
                <p>Senior‑/koordinator­stilling + nat/­weekend­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pensionen?</p>
                <p>Pension 13 % indbetales før skat og indgår ikke i løn efter skat, men øger din samlede pakke.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår triller topskatten ind?</p>
                <p>Først over ~63 000 kr. før skat – ses typisk kun hos QA‑chefer.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 spænder laborant løn efter skat fra ≈ 21 000 kr. (nyuddannet) til ≈ 31 000 kr. (QC‑leder). Ulempe­tillæg, specialist­certifikater og lavere kommuneskat kan løfte beløbet markant. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget dine pipetter, pH‑målinger og validerings­rapporter egentlig giver på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.hk.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dansk Laborant‑Forening / HK – Lønstats 2025</a></li>
              <li><a href="https://www.hk.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HK Industriforlig 2025 – Pensions­stigning</a></li>
              <li><a href="https://www.jobindex.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex Lønstatistik – Laboranter (maj 2025)</a></li>
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

export default LaborantLoenPage; 