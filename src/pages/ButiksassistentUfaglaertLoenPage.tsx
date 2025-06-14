import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ButiksassistentUfaglaertLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 30000, netMin: 19700, netMax: 20200 },
    "Aarhus": { grossSalary: 26000, netMin: 17600, netMax: 18000 },
    "Odense": { grossSalary: 24000, netMin: 16300, netMax: 16700 },
    "Aalborg": { grossSalary: 22000, netMin: 15000, netMax: 15400 },
    "Esbjerg": { grossSalary: 22000, netMin: 15000, netMax: 15400 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Startløn (0-1 år)", grossSalary: 22000, netMin: 15000, netMax: 15400 },
    { type: "2-3 års erfaring", grossSalary: 24000, netMin: 16300, netMax: 16700 },
    { type: "Aften-/weekendskema", grossSalary: 26000, netMin: 17600, netMax: 18000 },
    { type: "Storby + kædetillæg", grossSalary: 30000, netMin: 19700, netMax: 20200 }
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
        title="Løn Butiksassistent Ufaglært Efter Skat 2025 – Komplet Guide"
        description="Løn butiksassistent ufaglært efter skat ligger typisk på 15.000–20.000 kr./md. i 2025. Få realistiske tal og brug beregn løn efter skat til at finde din nettoløn hurtigt."
        keywords="butiksassistent ufaglært løn efter skat, ufaglært butiksassistent nettoløn, detailhandel løn, butik løn ufaglært"
      />
      <Header />
      <PageTitle title="Løn Butiksassistent Ufaglært Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Løn Butiksassistent Ufaglært Efter Skat 2025 – Fra Timepris til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids ufaglært butiksassistent (160 t/md.) kan i 2025 forvente en løn før skat på cirka 22 000 – 30 000 kr. pr. måned – afhængigt af butikskæde, geografi og arbejdstider. Det svarer til en løn butiksassistent ufaglært efter skat på omtrent 15 000 – 20 000 kr. Tjek dit præcise nettobeløb lynhurtigt i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – og prøv både dag- og aftenscenarier.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker løn butiksassistent ufaglært efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Overenskomsttimeløn</td>
                    <td className="py-3 px-4 border-b">HK Handel & DI detail: mindsteløn ≈ 138,35 kr./t fra marts 2025 (≈ 22 100 kr./md.).</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">Hovedstadsområdet betaler 5-8 % mere end landsgennemsnittet.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Aften-, nat- og weekendtillæg</td>
                    <td className="py-3 px-4 border-b">Aften + 18 %, nat + 30 %, weekend + 45 %.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & kædetillæg</td>
                    <td className="py-3 px-4 border-b">2-3 års anciennitet eller pluskæde (byggeri, elektronik) giver 1 000-2 000 kr./md. ekstra.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus / provision</td>
                    <td className="py-3 px-4 border-b">Enkelte non-food-kæder udbetaler 3-5 % af personlig omsætning – beskattes som løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 8-10 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat; løfter pakken, men ses ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Butiksassistent Ufaglært 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
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
              * AM-bidrag 8 %, personfradrag 4 650 kr., gennemsnitlig trækprocent ≈ 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aften & lørdag, 26 000 kr. før skat</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium">Post</td>
                      <td className="py-2 text-right font-medium">Beløb</td>
                    </tr>
                    <tr>
                      <td className="py-1">Løn før skat</td>
                      <td className="py-1 text-right">26 000 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">AM-bidrag 8 %</td>
                      <td className="py-1 text-right">2 080 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">Skattepligtig indkomst</td>
                      <td className="py-1 text-right">23 920 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">Personfradrag</td>
                      <td className="py-1 text-right">4 650 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">Beskatningsgrundlag</td>
                      <td className="py-1 text-right">19 270 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">A-skat (≈ 37 %)</td>
                      <td className="py-1 text-right">7 130 kr.</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-2 font-bold">Løn efter skat</td>
                      <td className="py-2 text-right font-bold">≈ 17 800 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4">
              Prøv dit eget bruttotal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – resultatet kommer med det samme.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at hæve nettolønnen</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Tag flere weekendvagter</strong> – 45 % tillæg løfter bruttolønnen markant.</li>
              <li><strong>Skift til non-food med provision</strong> – elektronik & byggemarked giver ofte 2-3 k ekstra før skat.</li>
              <li><strong>Bliv salgsansvarlig</strong> – nøglebærer eller afdelingskoordinator udløser 1-2 k/md. plus.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – kan øge nettolønnen 400-600 kr./md. uden ekstra timer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Løn Butiksassistent Ufaglært Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Spørgsmål</p>
                <p className="font-semibold">Kort svar</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Hvad tjener en ny ufaglært butiksassistent efter skat?</p>
                  <p>Ca. 15 000 kr./md.</p>
                </div>
                <div>
                  <p className="font-semibold">Kan jeg nå 20 000 kr. efter skat?</p>
                  <p>Ja, med storbyløn, weekendtillæg og provision.</p>
                </div>
                <div>
                  <p className="font-semibold">Tæller bonus i nettoløn?</p>
                  <p>Ja, provision beskattes som almindelig løn.</p>
                </div>
                <div>
                  <p className="font-semibold">Får jeg pension oveni?</p>
                  <p>Ja, 8-10 % indbetales før skat og fremgår ikke af nettolønnen.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger løn butiksassistent ufaglært efter skat typisk mellem 15 000 og 20 000 kr. pr. måned – på basis af 22 000 – 30 000 kr. før skat. Tillæg, provision og geografi er de hurtigste veje til en højere nettoløn. Beregn dit nøjagtige beløb i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, og se hvad der reelt lander på kontoen, når kasseoptællingen er slut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>HK Handel & DI Detail – Overenskomstsatser 2024-26</li>
              <li>SalaryExpert – Retail Salesperson, Denmark & Copenhagen, 2025</li>
              <li>Indkomsten.dk – Gennemsnitsløn, butiksassistent (ufaglært), maj 2025</li>
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

export default ButiksassistentUfaglaertLoenPage; 