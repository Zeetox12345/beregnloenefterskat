import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const HRLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 45000, netMin: 30000, netMax: 30600 },
    "Aarhus": { grossSalary: 42000, netMin: 28000, netMax: 28500 },
    "Odense": { grossSalary: 40000, netMin: 26500, netMax: 27000 },
    "Aalborg": { grossSalary: 38000, netMin: 25000, netMax: 25500 },
    "Esbjerg": { grossSalary: 36000, netMin: 24000, netMax: 24500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "HR-koordinator (0-2 år)", grossSalary: 32000, netMin: 21000, netMax: 21500 },
    { type: "HR Business Partner (3-5 år)", grossSalary: 38000, netMin: 25000, netMax: 25500 },
    { type: "HR Manager (6-9 år)", grossSalary: 45000, netMin: 30000, netMax: 30600 },
    { type: "HR Director / Head of People (Kbh.)", grossSalary: 55000, netMin: 36000, netMax: 36500 }
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
        title="HR Løn Efter Skat 2025 – Komplet Guide"
        description="HR løn efter skat ligger typisk mellem 21.000 og 36.000 kr./md. i 2025. Se realistiske lønbånd og beregn din nettoløn med beregn løn efter skat."
        keywords="hr løn efter skat, hr nettoløn, human resources løn, hr manager løn, hr business partner løn"
      />
      <Header />
      <PageTitle title="HR Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">HR Løn Efter Skat 2025 – Fra Policy til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids HR-medarbejder (37 t/uge) kan i 2025 forvente en løn før skat på ca. 32 000 – 55 000 kr. pr. måned – alt efter rolle (koordinator, partner, manager), branche og bonus. Det svarer til en hr løn efter skat på omtrent 21 000 – 36 000 kr. Få dit helt præcise nettobeløb på ét minut med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – indtast blot din bruttoløn.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker din HR løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Grundløn</td>
                    <td className="py-3 px-4 border-b">Finans & life-science ligger 5-10 % over detail og offentlige myndigheder.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Rolleniveau</td>
                    <td className="py-3 px-4 border-b">HR-koordinator &lt; HR Business Partner &lt; HR Manager &lt; HR Director.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">Hovedstaden betaler ca. 7 % over landsgennemsnittet.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus</td>
                    <td className="py-3 px-4 border-b">5-15 % årlig bonus for KPI'er som turnover-rate og head-count growth; beskattes som alm. løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certificeringer</td>
                    <td className="py-3 px-4 border-b">CIPD, SHRM-CP eller D-ESG giver typisk 1 500-3 000 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 17 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag indbetales før skat og vises ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">HR løn før & efter skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Titel / Erfaring</th>
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
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – HR Business Partner (38 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 38 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 040 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 34 960 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 30 310 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 11 220 kr.</li>
                <li><strong>HR løn efter skat ≈</strong> 24 300 kr.</li>
              </ul>
            </div>
            <p>
              Vil du teste din bruttoløn? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få svaret med det samme.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Certificér dig</strong> – CIPD eller SHRM øger markedsværdien 2-3 k/md.</li>
              <li><strong>Forhandl KPI-bonus</strong> – bund den til f.eks. engagement-score eller rekrutteringsmål.</li>
              <li><strong>Skift til høj-margen brancher</strong> – finans, tech og pharma betaler markant bedre.</li>
              <li><strong>Overvej storby-rolle</strong> – hovedstadsløn + højere bonuspuljer kan løfte nettolønnen 1-2 k/md.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – HR Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-3 px-4 border-b text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Hvad tjener en ny HR-koordinator efter skat?</td>
                    <td className="py-3 px-4 border-b">Omkring 21 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Hvordan når jeg 35 000 kr. efter skat?</td>
                    <td className="py-3 px-4 border-b">HR-manager/director-rolle i København + bonus.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Tæller bonus i nettoløn?</td>
                    <td className="py-3 px-4 border-b">Ja, bonus beskattes som almindelig løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Indgår pension i nettobeløbet?</td>
                    <td className="py-3 px-4 border-b">Nej – 17 % pension indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger hr løn efter skat typisk mellem 21 000 og 36 000 kr. om måneden – svarende til 32 000 – 55 000 kr. før skat. Certificeringer, branchevalg og bonus er de hurtigste veje til mere udbetaling. Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der reelt lander på kontoen, når rekrutteringen er lukket og trivsels­målingen er grøn.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://indkomsten.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Indkomsten.dk – HR-konsulent gennemsnitsløn, maj 2025</a></li>
              <li><a href="https://salaryexpert.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Human Resources Manager DK & Copenhagen løndata, 2025</a></li>
              <li><a href="https://randstad.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Randstad Tech & HR Salary Survey 2025 – lønintervaller for HR-roller</a></li>
              <li><a href="https://ida.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IDA Lønstatistik 2025 – HR og People Management løn og bonus</a></li>
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

export default HRLoenPage; 