import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ButiksassistentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 30000, netMin: 20100, netMax: 20600 },
    "Aarhus": { grossSalary: 28000, netMin: 18800, netMax: 19300 },
    "Odense": { grossSalary: 27000, netMin: 18100, netMax: 18600 },
    "Aalborg": { grossSalary: 26000, netMin: 17500, netMax: 18000 },
    "Esbjerg": { grossSalary: 25000, netMin: 16800, netMax: 17300 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyansat (0-1 år)", grossSalary: 24000, netMin: 16500, netMax: 17000 },
    { type: "2-3 år erfaring", grossSalary: 26000, netMin: 17500, netMax: 18000 },
    { type: "4-6 år (faglært)", grossSalary: 28000, netMin: 18800, netMax: 19300 },
    { type: "7-9 år (nøglebærer)", grossSalary: 30000, netMin: 20100, netMax: 20600 },
    { type: "Afdelingsansvarlig", grossSalary: 32000, netMin: 21000, netMax: 21500 }
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
        title="Butiksassistent Løn Efter Skat 2025 – Realistiske Tal og Eksempler"
        description="Se hvad du som butiksassistent får udbetalt efter skat i 2025. Få indsigt i løn før og efter skat, erfaringstrin og tillæg. Beregn din løn online."
        keywords="butiksassistent løn efter skat, butiksassistent nettoløn, detailhandel løn, butik løn, salgsassistent løn"
      />
      <Header />
      <PageTitle title="Butiksassistent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Butiksassistent Løn Efter Skat 2025 – Nettobeløb, Overenskomst og Karrieretrapper</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids butiksassistent (37 t/uge) kan i 2025 som hovedregel forvente en løn før skat på 24 000 – 32 000 kr. pr. måned. Efter AM-bidrag og normal A-skat giver det en butiksassistent løn efter skat på ca. 16 500 – 21 500 kr. Spændet afhænger af kommune, anciennitet, arbejdstider og personlige tillæg. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> til at se dit præcise tal på under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger butiksassistent løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Grundløn & minimalløn</td>
                    <td className="py-3 px-4 border-b">Den nye butiksoverenskomst hæver minimallønnen med 3,75 kr./time (≈ 601 kr./md.) pr. 1. maj 2025.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & uddannelse</td>
                    <td className="py-3 px-4 border-b">Faglærte detailassistenter ligger 8-12 % over minimalløn; ufaglærte på mindsteløn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Ulempe- & weekendtillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, lørdag efter 15:00 +45 %, søndag +70 %.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & omsætning</td>
                    <td className="py-3 px-4 border-b">Mange butikskæder har månedlig salgsbonus på 500-2 000 kr. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12,5 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat – øger pakken, men vises ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel → ± 550-650 kr./md. i butiksassistent løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – byoversigt 2025</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – butiksassistent løn før og efter skat</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Odense, faglært butiksassistent</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 27 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 160 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 24 840 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 20 190 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 7 470 kr.</li>
                <li><strong>Butiksassistent løn efter skat ≈</strong> 18 210 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Tag lørdags- og søndagsskift</strong> – weekendtillæg kan løfte nettolønnen 800-1 500 kr./md.</li>
              <li><strong>Bliv nøglebærer eller teamleder</strong> – typisk +1 000-1 800 kr./md. før skat.</li>
              <li><strong>Opnå faglært detailuddannelse</strong> – giver 8-12 % højere løn før skat.</li>
              <li><strong>Vælg lav-skat kommune</strong> – op til 650 kr./md. gratis på bundlinjen.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Butiksassistent Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny butiksassistent efter skat?</p>
                <p>Omkring 16 700 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når man 20 000 kr. efter skat?</p>
                <p>Med 5-7 års erfaring, faglært baggrund og jævnligt weekendarbejde.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i løn efter skat?</p>
                <p>Nej – pensionsbidraget på 12,5 % trækkes før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Udløser bonus topskat?</p>
                <p>Kun hvis samlet månedsløn før skat overstiger ca. 63 000 kr., hvilket er sjældent i detailhandlen.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger butiksassistent løn efter skat typisk mellem 16 500 og 21 500 kr. Overenskomststigninger, weekendtillæg og faglært status er de hurtigste veje til mere udbetaling. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, indtast din løn før skat – og se præcis, hvor meget du får, når dagens sidste kunde har betalt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.danskerhverv.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dansk Erhverv / HK Handel – OK25-aftale, minimalløn pr. 1. maj 2025</a></li>
              <li><a href="https://fagforeningsguide.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fagforeningsguide.dk – Butiksassistent løn 2025 (300-320 t.kr. årligt)</a></li>
              <li><a href="https://www.hk.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HK Handel – Pensionsstigning og lønudvikling 2025</a></li>
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

export default ButiksassistentLoenPage; 