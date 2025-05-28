import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SpecialkonsulentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 52000, netMin: 33100, netMax: 33600 },
    "Aarhus": { grossSalary: 51000, netMin: 32700, netMax: 33200 },
    "Odense": { grossSalary: 50000, netMin: 32100, netMax: 32600 },
    "Aalborg": { grossSalary: 49000, netMin: 31400, netMax: 31900 },
    "Esbjerg": { grossSalary: 48000, netMin: 30800, netMax: 31300 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "AC-trin 8 (ny i rollen)", grossSalary: 44000, netMin: 28200, netMax: 28700 },
    { type: "AC-trin 11", grossSalary: 49000, netMin: 31400, netMax: 31900 },
    { type: "AC-trin 13 + funktionstillæg", grossSalary: 53000, netMin: 33800, netMax: 34300 },
    { type: "AC-trin 15 + departementstillæg", grossSalary: 58000, netMin: 36800, netMax: 37300 },
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
        title="Specialkonsulent Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad tjener en specialkonsulent efter skat i 2025? Se løn før og efter skat baseret på AC-trin og tillæg – og beregn din nettoløn hurtigt og præcist."
        keywords="specialkonsulent løn, specialkonsulent løn efter skat, AC-trin, offentlig ansættelse, departementstillæg, statstillæg, embedsværk, lønniveau staten"
      />
      <Header />
      <PageTitle title="Specialkonsulent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Specialkonsulent Løn Efter Skat 2025 – Offentlig Ekspertdragt i Nettotal</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids specialkonsulent i staten kan i 2025 forvente en løn før skat på ca. 44 000 – 58 000 kr. pr. måned (ekskl. pension). Det svarer til en specialkonsulent løn efter skat på omtrent 28 000 – 37 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <p>
              Tallene bygger på Medarbejder- og Kompetencestyrelsens lønoversigt, DM/IDA-tabeller og det fællesakademiske cirkulære.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer specialkonsulent løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-2 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Basisløn (AC-skalatrin 8-15)</td>
                    <td className="py-2 px-4 border-b">Statens tabel giver ca. 44-49 k kr./md. før pension på de nederste trin og op til 55-58 k kr./md. på de øverste.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Individuelle tillæg</td>
                    <td className="py-2 px-4 border-b">Funktion-, kvalifikations- og resultattillæg kan lægge 2-7 k kr./md. oveni.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Departementstillæg (fra 1/4-2025)</td>
                    <td className="py-2 px-4 border-b">Fast 20 000 kr. årligt til special- og chefkonsulenter i ministerier.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Pension 18 %</td>
                    <td className="py-2 px-4 border-b">17-18 % arbejdsgiverbidrag indbetales før skat og løfter totalpakken, men ses ikke i nettolønnen.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Kommuneskat</td>
                    <td className="py-2 px-4 border-b">± 0,8 pct-point giver ± 650 kr./md. i nettoløn.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Specialkonsulent 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Trin / Niveau*</th>
                    <th className="py-2 px-4 border-b text-right">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-right">Løn efter skat**</th>
                    <th className="py-2 px-4 border-b text-left">Kilde</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-4 border-b">{item.type}</td>
                      <td className="py-2 px-4 border-b text-right">{item.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-2 px-4 border-b text-right">{item.netMin.toLocaleString("da-DK")} – {item.netMax.toLocaleString("da-DK")} kr.</td>
                      <td className="py-2 px-4 border-b text-left">
                        {index === 0 && <span>medst.dk</span>}
                        {index === 1 && <span>IDA</span>}
                        {index === 2 && <span>medst.dk</span>}
                        {index === 3 && <span>Retsinformation</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50 text-xs">
                  <tr>
                    <td colSpan={4} className="py-2 px-4 border-t">
                      * AC-trin 8-15 er de mest brugte for specialkonsulenter.<br />
                      ** Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Specialkonsulent Løn – Før & Efter Skat i 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">By</th>
                    <th className="py-2 px-4 border-b text-right">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-right">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((example, index) => (
                    <tr 
                      key={example.city}
                      className={`${selectedCity === example.city ? "bg-blue-50" : index % 2 === 0 ? "bg-gray-50" : ""} 
                                 hover:bg-blue-50 cursor-pointer transition-colors`}
                      onClick={() => setSelectedCity(example.city)}
                    >
                      <td className="py-2 px-4 border-b font-medium">{example.city}</td>
                      <td className="py-2 px-4 border-b text-right">{example.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-2 px-4 border-b text-right">{example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – AC-trin 11 med funktionstillæg (København)</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Post</th>
                    <th className="py-2 px-4 border-b text-right">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Løn før skat</td>
                    <td className="py-2 px-4 border-b text-right">49 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">AM-bidrag 8 %</td>
                    <td className="py-2 px-4 border-b text-right">3 920 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Skattepligtig indkomst</td>
                    <td className="py-2 px-4 border-b text-right">45 080 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Personfradrag</td>
                    <td className="py-2 px-4 border-b text-right">4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Beskatningsgrundlag</td>
                    <td className="py-2 px-4 border-b text-right">40 430 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">A-skat (≈ 37 %)</td>
                    <td className="py-2 px-4 border-b text-right">14 960 kr.</td>
                  </tr>
                  <tr className="bg-gray-50 font-medium">
                    <td className="py-2 px-4 border-b">Specialkonsulent løn efter skat</td>
                    <td className="py-2 px-4 border-b text-right">≈ 31 000 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="my-4">
              Vil du se tal med andre tillæg eller kommunesats? Indtast din egen løn før skat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Forhandl kvalifikationstillæg</strong> – dokumentér unikke kompetencer (fx projektledelse eller dataanalyse).
              </li>
              <li>
                <strong>Søg departements- eller myndighedsstillinger</strong> – giver fast 20 000 kr. årligt før skat.
              </li>
              <li>
                <strong>Tag resultatbaserede opgaver</strong> – resultattillæg kan lægges oveni basisløn.
              </li>
              <li>
                <strong>Udnyt lav kommuneskat</strong> – flytning fra Hovedstaden til lav-skat kommune kan give + 600 kr./md. i nettoløn.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Specialkonsulent Løn Efter Skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-2 px-4 border-b text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Hvad tjener en ny specialkonsulent efter skat?</td>
                    <td className="py-2 px-4 border-b">Omkring 28 500 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Hvornår når man 35 000 kr. efter skat?</td>
                    <td className="py-2 px-4 border-b">På AC-trin 13-15 med faste tillæg og/eller departementstillæg.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Tæller pension i nettoløn?</td>
                    <td className="py-2 px-4 border-b">Nej – 18 % indbetales før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Rammer specialkonsulenter topskat?</td>
                    <td className="py-2 px-4 border-b">Først når løn før skat overstiger ca. 63 300 kr./md., hvilket er usædvanligt uden cheftillæg.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p>
              I 2025 ligger specialkonsulent løn efter skat typisk mellem 28 000 og 37 000 kr. pr. måned, baseret på en løn før skat på 44 000 – 58 000 kr. Tillæg, AC-trin og kommuneskat er de vigtigste håndtag til at hæve nettobeløbet. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der reelt lander på kontoen, når notatet er afleveret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Medarbejder- og Kompetencestyrelsen – Lønoversigt 1. april 2025 (specialkonsulent basisløn)<br />
                <a href="https://www.medst.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">medst.dk</a>
              </li>
              <li>
                IDA/Djøf – Offentlige løntabeller 2025 (AC-trin 8-15)<br />
                <a href="https://ida.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">IDA</a>
              </li>
              <li>
                Retsinformation – Cirkulære om akademikeroverenskomsten (departementstillæg 20 000 kr.)<br />
                <a href="https://www.retsinformation.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Retsinformation</a>
              </li>
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

export default SpecialkonsulentLoenPage; 