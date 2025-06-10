import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BartenderLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 30000, netMin: 19600, netMax: 20100 },
    "Aarhus": { grossSalary: 28000, netMin: 18400, netMax: 18900 },
    "Odense": { grossSalary: 27000, netMin: 17700, netMax: 18200 },
    "Aalborg": { grossSalary: 26500, netMin: 17400, netMax: 17900 },
    "Esbjerg": { grossSalary: 25500, netMin: 16700, netMax: 17200 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Ny bartender (timeløn 150 kr.)", grossSalary: 23000, netMin: 15200, netMax: 15600 },
    { type: "Erfaren cafébartender", grossSalary: 26000, netMin: 17100, netMax: 17600 },
    { type: "Cocktailbar (Kbh.) + nat", grossSalary: 30000, netMin: 19600, netMax: 20100 },
    { type: "Head bartender + tips", grossSalary: 34000, netMin: 22000, netMax: 22500 }
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
        title="Bartender Løn Efter Skat 2025 – Komplet Guide"
        description="Hvor meget får du som bartender udbetalt i 2025? Se løn før og efter skat, tillæg for nat/weekend og drikkepenge – og beregn din nettoløn på få sekunder."
        keywords="bartender løn efter skat 2025, bartender nettoløn, drikkepenge beskatning, natarbejde tillæg, cocktailbar løn"
      />
      <Header />
      <PageTitle title="Bartender Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Bartender Løn Efter Skat 2025 – Shakeren, Skatten & Salgsbonussen</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som fuldtids bartender (ca. 160 t/md.) kan du i 2025 forvente en løn før skat på 23 000 – 34 000 kr. pr. måned – alt efter timeløn, sted, tillæg og drikkepenge. Det lander på en bartender løn efter skat på ca. 15 000 – 22 000 kr. Få dit helt præcise nettobeløb med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad afgør en bartender løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-semibold">Timeløn i overenskomst</td>
                    <td className="py-3 px-4 border-b">3F/HORESTA-satser 2025: min. 150,25 kr./t for café/bar, 171-176 kr./t i restaurant­overenskomsten.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Geografi</td>
                    <td className="py-3 px-4 border-b">København betaler ~7 % højere – gennemsnit 260 k kr./år (≈ 21 700 kr./md.) før tips.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Erfaring & venue</td>
                                         <td className="py-3 px-4 border-b">Hotel- og cocktailbarer &gt; caféer; senior bartendere op mod 286 k kr./år.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Tillæg & tider</td>
                    <td className="py-3 px-4 border-b">Nat + 30 %, weekend + 45 %, overarbejde + 75 % på diskoteks­overenskomst.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Drikkepenge</td>
                    <td className="py-3 px-4 border-b">Typisk 500-3 000 kr./md.; A-indkomst og beskattes.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Pension 9-11 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiver­bidrag indbetales før skat – forbedrer totalpakken, men ses ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Bartender Løn – Før & Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Bartender løn efter skat*</th>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Bartender 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Profil / Erfaring</th>
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
              * Nettotal beregnet med 8 % AM-bidrag, 4 650 kr. personfradrag og gennemsnitlig trækprocent (≈ 37 %).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Cocktailbar i København</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-1 font-semibold">Løn før skat</td>
                    <td className="py-1 text-right">30 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">AM-bidrag 8 %</td>
                    <td className="py-1 text-right">2 400 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Skattepligtig indkomst</td>
                    <td className="py-1 text-right">27 600 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Personfradrag</td>
                    <td className="py-1 text-right">4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Beskatningsgrundlag</td>
                    <td className="py-1 text-right">22 950 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">A-skat (≈ 37 %)</td>
                    <td className="py-1 text-right">8 490 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300 font-semibold">
                    <td className="py-1">Bartender løn efter skat</td>
                    <td className="py-1 text-right">≈ 19 100 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>
              Tast dine egne tal – i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se det nøjagtige nettobeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige trin til højere nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag nat- og weekend­vagter</strong> – genetillæg på 30-45 % løfter bruttolønnen markant.</li>
              <li><strong>Specialiser dig i craft-cocktails eller vin</strong> – premium­steder betaler 2-3 k kr. mere pr. måned.</li>
              <li><strong>Optimer drikkepenge</strong> – brug mobile tip-apps, god præsentation og hurtig service.</li>
              <li><strong>Ryk op som head bartender</strong> – ansvar for bestilling og menu giver fast tillæg.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Bartender Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny bartender efter skat?</p>
                <p>Omkring 15 500 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 22 000 kr. efter skat?</p>
                <p>Ja, med nat- og weekend­vagter + populære cocktail-shifts og tips.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller drikkepenge i nettoløn?</p>
                <p>Ja, de indberettes som A-indkomst og beskattes.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettobeløbet?</p>
                <p>Nej, 9-11 % arbejdsgiver­pension indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger Bartender løn efter skat typisk mellem 15 000 og 22 000 kr. pr. måned – på basis af 23 000 – 34 000 kr. før skat. Geografi, arbejdstider og drikkepenge er de største løftestænger. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget der reelt lander på kontoen, når den sidste drink er shaket.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Bartender København: 260 k kr./år (≈ 21 700 kr./md.)</a></li>
              <li><a href="https://salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Bartender Danmark: 244 k kr./år (≈ 20 300 kr./md.)</a></li>
              <li><a href="https://3f.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HORESTA/3F Restaurantoverenskomst 2023-25 – timeløn 171-176 kr.</a></li>
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

export default BartenderLoenPage; 