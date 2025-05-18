import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SalgsassistentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 31000, netMin: 20600, netMax: 21100 },
    "Aarhus": { grossSalary: 29000, netMin: 19300, netMax: 19800 },
    "Odense": { grossSalary: 28000, netMin: 18600, netMax: 19100 },
    "Aalborg": { grossSalary: 27000, netMin: 18000, netMax: 18500 },
    "Esbjerg": { grossSalary: 26000, netMin: 17400, netMax: 17900 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyansat (0-1 år)", grossSalary: 24000, netMin: 16000, netMax: 16500 },
    { type: "2-3 år", grossSalary: 26000, netMin: 17400, netMax: 17900 },
    { type: "4-6 år (faglært)", grossSalary: 29000, netMin: 19300, netMax: 19800 },
    { type: "7-9 år (nøglebærer)", grossSalary: 31000, netMin: 20600, netMax: 21100 },
    { type: "Afdelingsansvarlig", grossSalary: 34000, netMin: 22000, netMax: 22500 }
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
        title="Salgsassistentens Løn Efter Skat – Opdateret Guide 2025"
        description="Få indsigt i salgsassistent løn efter skat baseret på erfaring, ansvarsområder og vagttyper. Beregn din egen nettoløn på under ét minut."
        keywords="salgsassistent løn efter skat, salgsassistent nettoløn, detailhandel løn, salgsassistent, butiksansættelse, overenskomst, nøglebærer, afdelingsansvarlig"
      />
      <Header />
      <PageTitle title="Salgsassistent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Salgsassistent Løn Efter Skat 2025 – Nettobeløb, Overenskomst og Karrieresteg</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids salgsassistent (37 t/uge) kan i 2025 forvente en løn før skat på 24 000 – 34 000 kr. pr. måned – fra nyansat til erfaren med afdelingstillæg. Det giver en salgsassistent løn efter skat på cirka 16 000 – 22 500 kr. afhængigt af kommune, ulempe­tillæg og anciennitet. Beregn dit præcise nettobeløb i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger salgsassistent løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b">Overenskomsten HK Handel / Dansk Erhverv hæver minimallønnen til 24 600 kr./md. 1. maj 2025.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Faglært vs. ufaglært</td>
                    <td className="py-3 px-4 border-b">Faglærte salgsassistenter ligger 8 – 12 % over minimalløn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Ulempe- og weekendtillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, lørdag efter 15 +45 %, søndag +70 %; kan løfte nettolønnen 1 000 – 1 800 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Afdelings- og nøgle­bærertillæg</td>
                    <td className="py-3 px-4 border-b">1 200 – 2 000 kr./md. før skat for ansvar i kasse-, fresh- eller non-food-områder.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12,5 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og forbedrer totalpakken.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel svarer til ± 600 kr./md. i salgsassistent løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn Efter Skat – Byoversigt 2025</h2>
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
              * Beregnet uden kirkeskat; forudsætter gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – salgsassistent løn før og efter skat</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, faglært salgsassistent</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 29 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 320 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 26 680 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 22 030 kr.</li>
                <li><strong>A-skat (~ 35 %):</strong> 7 710 kr.</li>
                <li><strong>Salgsassistent løn efter skat ≈</strong> 18 970 kr.</li>
              </ul>
            </div>
            <p className="mt-2">
              Prøv med eget tillæg eller anden kommuneskat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Dæk weekender og sene vagter</strong> – ulempe­tillæg kan øge nettolønnen 1 000 – 1 800 kr./md.</li>
              <li><strong>Tag afdeling- eller nøgle­bæreransvar</strong> – giver typisk +1 200 – 2 000 kr./md. før skat.</li>
              <li><strong>Færdiggør detailuddannelsen</strong> – faglærte satser er 8 – 12 % højere.</li>
              <li><strong>Vælg lav-skat kommune</strong> – kan løfte salgsassistent løn efter skat med op til 600 kr./md.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Salgsassistent Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny salgsassistent efter skat?</p>
                <p>Omkring 16 300 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når man 21 000 kr. efter skat?</p>
                <p>Med 6-8 års erfaring, faglært status og regelmæssige weekendvagter.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i løn efter skat?</p>
                <p>Nej – pensionsbidraget (12,5 %) indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Udløser bonus topskat?</p>
                <p>Kun hvis samlet månedsløn før skat overstiger ca. 63 000 kr., hvilket er usædvanligt i detailhandlen.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger salgsassistent løn efter skat som regel mellem 16 000 og 22 500 kr. Overenskomst­stigninger, ulempe­tillæg og faglært status er de vigtigste faktorer for en højere nettoløn. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget du får udbetalt, når kasseapparatet tæller dagens omsætning.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.hk.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HK Handel & Dansk Erhverv – Overenskomst 2024-26 (minimalløn og tillæg)</a></li>
              <li><a href="https://www.jobindex.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex Lønstatistik – Detailhandel, maj 2025</a></li>
              <li><a href="https://www.skm.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommunesatser 2025</a></li>
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

export default SalgsassistentLoenPage; 