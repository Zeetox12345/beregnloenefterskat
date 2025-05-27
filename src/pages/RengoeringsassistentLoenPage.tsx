import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const RengoeringsassistentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data for cleaning assistants
  const cityData = {
    "København": { grossSalary: 26000, netMin: 17800, netMax: 18200 },
    "Aarhus": { grossSalary: 25000, netMin: 17400, netMax: 17800 },
    "Odense": { grossSalary: 24500, netMin: 17100, netMax: 17500 },
    "Aalborg": { grossSalary: 24000, netMin: 16800, netMax: 17200 },
    "Esbjerg": { grossSalary: 23500, netMin: 16500, netMax: 16900 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyansat (0-2 år)", grossSalary: 23000, netMin: 16000, netMax: 16400 },
    { type: "3-5 års erfaring", grossSalary: 25000, netMin: 17400, netMax: 17800 },
    { type: "6-8 år + aftenhold", grossSalary: 27000, netMin: 18600, netMax: 19100 },
    { type: "9-11 år + nat/weekend", grossSalary: 29000, netMin: 19800, netMax: 20300 }
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
        title="Rengøringsassistent Løn Efter Skat 2025 - Komplet Guide"
        description="Hvad får en rengøringsassistent udbetalt i 2025? Se løn før og efter skat, tillæg og erfaring – og beregn din nettoløn hurtigt og nemt."
        keywords="rengøringsassistent løn efter skat, rengøring nettoløn, serviceoverenskomst, aftenhold tillæg, nat weekend tillæg"
      />
      <Header />
      <PageTitle title="Rengøringsassistent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Rengøringsassistent Løn Efter Skat 2025 – Sæt Beløb på Gulvspanden</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids rengøringsassistent (37 t/uge) kan i 2025 forvente en løn før skat på ca. 23 000 – 29 000 kr. pr. måned. Det giver en rengøringsassistent løn efter skat på omtrent 16 000 – 20 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut. Tallene bygger på Serviceoverenskomsten 2025, 3F-aftalen og lønstatistik fra Indkomsten.dk og Studentum.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer rengøringsassistent løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Løn før skat</td>
                    <td className="py-3 px-4 border-b">Serviceoverenskomsten fastsætter 162,75 kr./t som startløn pr. 15. marts 2025 ≈ 26 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Branche & arbejdsgiver</td>
                    <td className="py-3 px-4 border-b">Offentlige institutioner ligger 3-5 % over private kontor-/butiksopgaver.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Vagter & tillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, nat +30 %, weekend +45 % – kan løfte bruttolønnen mærkbart.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & arbejdsområde</td>
                    <td className="py-3 px-4 border-b">Special-/industrirengøring og hospitalsrengøring betaler 1 000-1 500 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Fritvalg & pension</td>
                    <td className="py-3 px-4 border-b">Fritvalgsordning stiger til 11 % i 2025; pension typisk 9 % – begge indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Niveautabel – Rengøringsassistent Løn Efter Skat 2025</h2>
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
              * Beregnet med 8 % AM-bidrag og en gennemsnitlig trækprocent. Få dit eksakte tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>. (Data: Indkomsten.dk gennemsnit 24-25 k kr./md., Studentum & DI-satser)
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aftenrengøring, 27 000 kr. før skat</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 27 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 160 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 24 840 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 20 190 kr.</li>
                <li><strong>A-skat (≈ 35 %):</strong> 7 070 kr.</li>
                <li><strong>Rengøringsassistent løn efter skat ≈</strong> 18 000 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire trin til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Tag nat- eller weekendvagter</strong> – genetillæg løfter lønnen 1 000-2 000 kr./md. før skat.</li>
              <li><strong>Specialiser dig i hospitals- eller industrirengøring</strong> for funktionstillæg.</li>
              <li><strong>Udnyt fritvalgspuljen (11 %)</strong> – kan udbetales som løn.</li>
              <li><strong>Arbejd i lav-skat kommune</strong> – kan øge nettolønnen 300-600 kr./md. uden ekstra timer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Rengøringsassistent Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny rengøringsassistent efter skat?</p>
                <p>Ca. 16 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 20 000 kr. efter skat?</p>
                <p>Nat-/weekendhold + flere års erfaring.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i nettoløn?</p>
                <p>Nej, pensionen indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Udløser tillæg topskat?</p>
                <p>Nej, topskat rammer først over ca. 63 000 kr./md. før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger rengøringsassistent løn efter skat typisk mellem 16 000 og 20 000 kr. pr. måned – svarende til 23 000 – 29 000 kr. før skat. Vagttillæg, speciale og fritvalgspuljen er dine vigtigste håndtag til en højere udbetaling. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der lander på kontoen, når gulvene skinner.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.danskindustri.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dansk Industri – Satser Serviceoverenskomsten 2025 (startløn 162,75 kr./t)</a></li>
              <li><a href="https://fagbladet3f.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fagbladet 3F – Overenskomst 2025: timeløn stiger 5 kr. i 2025</a></li>
              <li><a href="https://www.indkomsten.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Indkomsten.dk – Gennemsnitsløn rengøringsassistent ≈ 24 000 kr./md.</a></li>
              <li><a href="https://www.studentum.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Løn og udsigt for rengøringsassistenter</a></li>
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

export default RengoeringsassistentLoenPage; 