import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const MaskingenioerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 50000, netMin: 32000, netMax: 33000 },
    "Aarhus": { grossSalary: 46000, netMin: 29000, netMax: 30000 },
    "Odense": { grossSalary: 42000, netMin: 26500, netMax: 27000 },
    "Aalborg": { grossSalary: 40000, netMin: 25000, netMax: 25500 },
    "Vejle (produktion)": { grossSalary: 38000, netMin: 24000, netMax: 24500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet diplom/civil (0 – 2 år)", grossSalary: 35000, netMin: 23000, netMax: 23500 },
    { type: "3 – 5 år", grossSalary: 40000, netMin: 25500, netMax: 26000 },
    { type: "6 – 8 år (specialist)", grossSalary: 45000, netMin: 28500, netMax: 29000 },
    { type: "9 – 11 år (senior / projektleder)", grossSalary: 50000, netMin: 32000, netMax: 32500 },
    { type: "12 + år (lead / chefingeniør)", grossSalary: 55000, netMin: 34500, netMax: 35000 }
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
        title="Maskiningeniør Løn Efter Skat 2025 – Se Realistiske Nettobeløb"
        description="Hvad er maskiningeniør løn efter skat i 2025? Få konkrete tal før og efter skat, erfaringstabeller og mulighed for at beregne din egen nettoløn hurtigt."
        keywords="maskiningeniør løn efter skat, maskiningeniør nettoløn, ingeniør løn, mekanisk ingeniør løn, mechanical engineer danmark"
      />
      <Header />
      <PageTitle title="Maskiningeniør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Maskiningeniør Løn Efter Skat 2025 – Design Dit Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som fuldtids maskiningeniør kan du i 2025 forvente en løn før skat på cirka 35 000 – 55 000 kr. pr. måned. Det svarer til en maskiningeniør løn efter skat på omtrent 23 000 – 35 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut. Tallene bygger på IDA-lønstatistik, SalaryExpert-data og aktuelle ingeniørundersøgelser.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en maskiningeniør løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det har betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Løn før skat</td>
                    <td className="py-3 px-4 border-b">Gennemsnitligt 43–45 k kr./md. på tværs af brancher; juniorer fra 35 k, seniorer 50 k+.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Branche</td>
                    <td className="py-3 px-4 border-b">Offshore & energi &gt; medico & rådgivning &gt; traditionel produktion.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København ca. 8 % over landsgennemsnit; provins 5–10 % lavere.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & titel</td>
                    <td className="py-3 px-4 border-b">Graduate, ingeniør, lead engineer, specialist, projektleder – hvert trin har eget lønspænd.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certificeringer</td>
                    <td className="py-3 px-4 border-b">F.eks. FEA-software, projektledelse, ATEX – kan give 1 000–3 000 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension (17 %)</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og ses ikke i nettolønnen, men øger totalpakken.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regional oversigt – Maskiningeniør Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Område</th>
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
              * Beregnet med 8 % AM-bidrag og gennemsnitlig trækprocent. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Maskiningeniør Løn Efter Skat</h2>
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
            <p className="text-sm text-gray-600 italic">
              (Data fra IDA-lønstatistik og SalaryExpert)
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior maskiningeniør, Odense</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 42 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 360 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 38 640 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 33 990 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 12 600 kr.</li>
                <li><strong>Maskiningeniør løn efter skat ≈</strong> 26 400 kr.</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 italic">
              Indtast blot din egen løn før skat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit eksakte nettobeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere maskiningeniør løn efter skat</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Specialisér dig i højt ROI-områder</strong> – f.eks. FEM-simulering, termisk design eller grøn energi.</li>
              <li><strong>Certificér dig (Six Sigma, PMP, ATEX)</strong> – giver tit +2 – 3 k kr./md. før skat.</li>
              <li><strong>Skift til højmarginal branche</strong> – offshore, pharma eller vind betaler op til 10 % mere.</li>
              <li><strong>Forhandl projektbonus på leverede resultater</strong>; bonus beskattes, men øger nettolønnen mærkbart.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Maskiningeniør Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny maskiningeniør efter skat?</p>
                <p>Ca. 23 500 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når jeg 30 000 kr. efter skat?</p>
                <p>Typisk efter 6-8 års erfaring eller i energi/offshore-sektoren.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i nettoløn?</p>
                <p>Nej – 17 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Udløser bonus topskat?</p>
                <p>Kun hvis løn før skat overstiger ca. 63 000 kr./md.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger maskiningeniør løn efter skat oftest mellem 23 000 og 35 000 kr. pr. måned – afhængigt af branche, erfaring og specialisering. Indtast din egen løn før skat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget der lander på kontoen, når CAD-filerne er gemt og projektet er afleveret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.studentum.dk/job-loen/maskiningenioer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – "Maskiningeniør løn" (opdateret 2025)</a></li>
              <li><a href="https://ida.dk/raad-og-karriere/loen/idas-loenstatistik" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IDA – "Solide lønstigninger til IDA's medlemmer" (2025-lønstatistik)</a></li>
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

export default MaskingenioerLoenPage; 