import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SouschefLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 45000, netMin: 30000, netMax: 30500 },
    "Aarhus": { grossSalary: 42000, netMin: 28000, netMax: 28500 },
    "Odense": { grossSalary: 39000, netMin: 26000, netMax: 26500 },
    "Aalborg": { grossSalary: 37000, netMin: 24700, netMax: 25200 },
    "Esbjerg": { grossSalary: 35000, netMin: 23300, netMax: 23800 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior souschef (0–2 år)", grossSalary: 30000, netMin: 20000, netMax: 20500 },
    { type: "Souschef 3–5 år", grossSalary: 35000, netMin: 23200, netMax: 23700 },
    { type: "Senior souschef / afdelingsansvarlig", grossSalary: 41000, netMin: 27300, netMax: 27800 },
    { type: "Storby + høj omsætning", grossSalary: 47000, netMin: 31000, netMax: 31500 }
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
        title="Souschef Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="En souschef tjener typisk 30.000–47.000 kr. før skat i 2025. Se hvad det svarer til i udbetalt løn. Brug beregn løn efter skat til at få præcise estimater på din nettoløn og find ud af, hvad der påvirker din løn mest."
        keywords="souschef løn efter skat 2025, souschef nettoløn, sous chef løn, detail butik løn, hospitality løn"
      />
      <Header />
      <PageTitle title="Souschef Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Souschef Løn Efter Skat 2025 – Fra Budgetansvar til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids souschef – typisk stedfortræder i detail, foodservice eller hospitality – kan i 2025 forvente en løn før skat på 30 000 – 47 000 kr. pr. måned. Det svarer til en souschef løn efter skat på cirka 20 000 – 31 000 kr. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, og få nettobeløbet på under ét minut. Prøv også at tilføje bonusordninger i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se forskellen med det samme.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger souschef løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvad det betyder i praksis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Branche & kæde</td>
                    <td className="py-3 px-4 border-b">Dagligvare- og byggemarkeder betaler 5–10 % mere end non-food detail; hotel/restaurant ligger 8–12 % lavere.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Geografi</td>
                    <td className="py-3 px-4 border-b">Københavnsområdet og Østjylland betaler ca. 7 % over landsgennemsnittet; tyndt befolkede områder 5 % under.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Omsætningsbonus</td>
                    <td className="py-3 px-4 border-b">5–12 % af brutto­indtjeningen – beskattes som almindelig løn og påvirker nettobeløbet direkte.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Erfaring & teamstørrelse</td>
                    <td className="py-3 px-4 border-b">Større butik/hotel + ledelse af 15+ medarbejdere giver typisk 2–4 k kr./md. ekstra før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Pension 8–10 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag indbetales før skat og ses ikke i løn efter skat, men øger den samlede værdi.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Souschef</h2>
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
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %. Justér selv i beregneren, hvis din kommune­skat afviger.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior souschef (41 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-1 font-semibold">Post</td>
                    <td className="py-1 text-right font-semibold">Beløb</td>
                  </tr>
                  <tr>
                    <td className="py-1">Løn før skat</td>
                    <td className="py-1 text-right">41 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">AM-bidrag 8 %</td>
                    <td className="py-1 text-right">3 280 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Skattepligtig indkomst</td>
                    <td className="py-1 text-right">37 720 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Personfradrag</td>
                    <td className="py-1 text-right">4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Beskatningsgrundlag</td>
                    <td className="py-1 text-right">33 070 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">A-skat (≈ 37 %)</td>
                    <td className="py-1 text-right">12 230 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300 font-semibold">
                    <td className="py-1">Souschef løn efter skat</td>
                    <td className="py-1 text-right">≈ 27 000 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige trin til højere nettoløn</h2>
            <div className="space-y-4 my-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold mb-2">1. Forhandl omsætnings- eller bruttoavancebonus</h3>
                <p>Et par procentpoint kan løfte udbetalingen markant.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold mb-2">2. Tag kategori- eller driftscertifikater</h3>
                <p>Fx WSET (vin), fødevaresikkerhed eller Lean Retail; giver ofte 1–2 k kr./md. ekstra før skat.</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-semibold mb-2">3. Dæk aften- og weekend­vagter</h3>
                <p>Tillæg på 18–45 % går direkte i bruttolønnen.</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold mb-2">4. Sigt mod større omsætning</h3>
                <p>Skift til flagship-butik eller højsæsonhotel for højere grundløn.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Souschef Løn Efter Skat</h2>
            <div className="space-y-4 my-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Hvad tjener en ny souschef efter skat?</h3>
                <p>Omkring 20 000 kr./md.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Kan jeg nå 31 000 kr. efter skat?</h3>
                <p>Ja – i storby med høj omsætning, bonus og skiftetillæg.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Er bonus skattepligtig?</h3>
                <p>Ja, bonus og provision beskattes som almindelig løn.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Indgår pension i nettolønnen?</h3>
                <p>Nej, pension indbetales før skat og vises ikke som nettobeløb.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <div className="space-y-2 my-6">
              <p>• HK Handel Lønstatistik 2025 – Souschef / stedfortræder i detail</p>
              <p>• SalaryExpert – Assistant Store Manager, Denmark & Copenhagen, 2025</p>
              <p>• HORESTA Lønbarometer 2025 – Souschef hotel/restaurant</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg my-6">
              <p className="font-medium">
                Vil du finpudse tallene for din egen situation? Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der lander på kontoen, når dagens nøgletal er lukket.
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

export default SouschefLoenPage; 