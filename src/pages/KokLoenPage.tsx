import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const KokLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 36500, netMin: 24000, netMax: 24600 },
    "Aarhus": { grossSalary: 34000, netMin: 22400, netMax: 23000 },
    "Odense": { grossSalary: 32000, netMin: 21100, netMax: 21600 },
    "Aalborg": { grossSalary: 31000, netMin: 20500, netMax: 21000 },
    "Esbjerg": { grossSalary: 30000, netMin: 19800, netMax: 20300 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet kok", grossSalary: 28000, netMin: 19000, netMax: 19500 },
    { type: "Erfaren linjekok", grossSalary: 32000, netMin: 21500, netMax: 22000 },
    { type: "Sous-chef (3–5 år)", grossSalary: 36000, netMin: 24000, netMax: 24600 },
    { type: "Køkkenchef, provins", grossSalary: 40000, netMin: 26600, netMax: 27200 },
    { type: "Gourmet-køkkenchef, Kbh.", grossSalary: 45000, netMin: 29800, netMax: 30300 }
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
        title="Kok Løn Efter Skat 2025 – Komplet guide"
        description="Hvad tjener en kok efter skat i 2025? Se lønbånd før og efter skat, inkl. tillæg og erfaring – og brug beregn løn efter skat til at finde dit præcise nettobeløb."
        keywords="kok løn efter skat 2025, køkkenchef nettoløn, sous chef løn, restaurant tillæg, køkken overenskomst"
      />
      <Header />
      <PageTitle title="Kok Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Kok Løn Efter Skat 2025 – Fra Mise en Place til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids kok arbejder typisk 160 timer om måneden. I 2025 ligger løn før skat på omtrent 28 000 – 45 000 kr. afhængigt af erfaring, køkken­type og arbejdstider. Det svarer til en kok løn efter skat på ca. 19 000 – 30 000 kr. Få dit personlige nettobeløb lynhurtigt med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – indtast blot din bruttoløn.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad afgør en kok løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Grundløn i overenskomst</td>
                    <td className="py-3 px-4 border-b">3F/HORESTA-satser 2025 starter omkring 175 kr./t (≈ 28 000 kr./md.).</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Geografi</td>
                    <td className="py-3 px-4 border-b">Chef i København tjener i snit 438 000 kr./år (≈ 36 500 kr./md.) – ca. 7 % over lands­gennemsnittet.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Erfaring & titel</td>
                    <td className="py-3 px-4 border-b">Entry-level kok ≈ 28 k; sous-chef ≈ 36 k; køkkenchef i gourmet­restaurant ≈ 45 k.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Ulempe- og weekendtillæg</td>
                    <td className="py-3 px-4 border-b">Aften + 18 %, nat + 30 %, weekend + 45 % – almindelige i hotel- & eventkøkkener.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Bonus & drikkepenge</td>
                    <td className="py-3 px-4 border-b">Omsætnings­provision eller service­charge kan lægge 1–3 k på lønnen – beskattes som løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Pension 9–11 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat; forbedrer pakken, men vises ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Kok Løn – Før & Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Kok løn efter skat*</th>
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
              *Estimater uden kirkeskat. Beregn dit præcise tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Kok Løn Før & Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Rolle / erfaring</th>
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
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              * Nettobeløb beregnet med AM-bidrag 8 %, personfradrag 4 650 kr. og gennemsnitlig trækprocent ≈ 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Sous-chef aften & weekend (36 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-1 font-semibold">Løn før skat</td>
                    <td className="py-1 text-right">36 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">AM-bidrag 8 %</td>
                    <td className="py-1 text-right">2 880 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Skattepligtig indkomst</td>
                    <td className="py-1 text-right">33 120 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Personfradrag</td>
                    <td className="py-1 text-right">4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Beskatningsgrundlag</td>
                    <td className="py-1 text-right">28 470 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">A-skat (≈ 37 %)</td>
                    <td className="py-1 text-right">10 540 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300 font-semibold">
                    <td className="py-1">Kok løn efter skat</td>
                    <td className="py-1 text-right">≈ 24 100 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>
              Vil du teste højere tillæg eller lavere kommuneskat? Prøv selv i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire opskrifter på højere nettoløn</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">🌙 Tag nat- og weekend­vagter</h3>
                <p>Genetillæg på op til 45 % løfter brutto­beløbet markant.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">🍣 Specialisér dig</h3>
                <p>Sushi, pastry eller saucier-kompetencer kan give 2–4 k ekstra før skat.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">🏨 Ryk til gourmet- eller hotelkøkken</h3>
                <p>Højere menukort = højere basisløn + service­charge.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">💰 Forhandl drikkepenge-pool</h3>
                <p>En fast %-deling af card-tips beskattes, men øger nettolønnen.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Kok Løn Efter Skat</h2>
            <div className="space-y-4 my-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Hvad tjener en ny kok efter skat?</h3>
                <p>Cirka 19 500 kr./md.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Hvordan når jeg 30 000 kr. efter skat?</h3>
                <p>Køkkenchef-stilling i storby + tillæg og bonus.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Tæller drikkepenge i nettoløn?</h3>
                <p>Ja – de indberettes som A-indkomst og beskattes.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Er pension med i nettoløn?</h3>
                <p>Nej, 9–11 % pension betales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger kok løn efter skat typisk mellem 19 000 og 30 000 kr. om måneden – baseret på 28 000 – 45 000 kr. før skat. Geografi, specialisering og tillæg er de hurtigste veje til mere udbetaling. Beregn din egen nettoløn på få sekunder med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der reelt ryger på kontoen, når sidste service er slut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <div className="text-sm space-y-2">
              <p>
                <strong>Studentum.dk</strong> – gennemsnitsløn kok 36 819 kr. 
                <a href="https://www.studentum.dk/job-loen/kok" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  studentum.dk
                </a>
              </p>
              <p>
                <strong>SalaryExpert</strong> – Chef, København (438 k/år; entry 320 k; senior 503 k) 
                <a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Chef&loc=Copenhagen,%20Denmark&rtype=4&smsg=1" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  salaryexpert.com
                </a>
              </p>
              <p>
                <strong>Indkomsten.dk</strong> – kok løn påvirkningsfaktorer (ca. 26 500 kr./md.) 
                <a href="https://indkomsten.dk/hvad-tjener-en/kok-2/" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  indkomsten.dk
                </a>
              </p>
              <p>
                <strong>SalaryExpert</strong> – Chef Danmark 411 k/år (≈ 34 k/md.) 
                <a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Chef&loc=Denmark&rtype=4&smsg=1" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  salaryexpert.com
                </a>
              </p>
            </div>

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

export default KokLoenPage; 