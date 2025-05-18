import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const KeyAccountManagerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 60000, netMin: 38400, netMax: 39200 },
    "Aarhus": { grossSalary: 56000, netMin: 35800, netMax: 36600 },
    "Odense": { grossSalary: 52000, netMin: 33400, netMax: 34100 },
    "Aalborg": { grossSalary: 50000, netMin: 32100, netMax: 32800 },
    "Esbjerg": { grossSalary: 48000, netMin: 30800, netMax: 31500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior KAM / Account Exec. (0-2 år)", grossSalary: 40000, netMin: 26000, netMax: 26600 },
    { type: "3-5 år + mindre kundeportefølje", grossSalary: 46000, netMin: 29800, netMax: 30400 },
    { type: "6-8 år + strategiske kunder", grossSalary: 53000, netMin: 34000, netMax: 34600 },
    { type: "Senior KAM (8-10 år)", grossSalary: 60000, netMin: 38400, netMax: 39200 },
    { type: "Key Account Director / Team Lead", grossSalary: 65000, netMin: 41100, netMax: 41800 }
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
        title="Key Account Manager Løn Efter Skat 2025 – Realistiske Estimater"
        description="Hvad er key account manager løn efter skat i 2025? Se løn før og efter skat, bonus og byforskelle – og beregn din nettoløn hurtigt online."
        keywords="key account manager løn efter skat, key account manager nettoløn, KAM løn, bonus, salgsjob løn, kundeansvarlig løn, lønpakke, account manager løn"
      />
      <Header />
      <PageTitle title="Key Account Manager Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Key Account Manager Løn Efter Skat 2025 – Nettobeløb, Bonus og Karrierestige</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids Key Account Manager (37 t/uge) kan i 2025 som tommelfingerregel forvente en løn før skat på 40 000 – 65 000 kr. pr. måned – fra junior-KAM til senior med stort kundebudget. Det svarer til en key account manager løn efter skat på ca. 26 000 – 41 000 kr. alt efter branche, bonus, kommuneskat og fradrag. Tjek din præcise nettoløn på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer key account manager løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Grundløn & erfaring</td>
                    <td className="py-3 px-4 border-b">Juniors ligger omkring 40 000 kr.; erfarne KAM'er {'>'}  60 000 kr. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Branche & kundetype</td>
                    <td className="py-3 px-4 border-b">FMCG, pharma og tech betaler 8-12 % højere end detail/SMV.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & provision</td>
                    <td className="py-3 px-4 border-b">10-25 % af årsløn ved målopfyldelse – beskattes som alm. løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Uddannelse & certifikater</td>
                    <td className="py-3 px-4 border-b">Strategic Account Management, SPIN, Miller Heiman kan udløse tillæg på 2 000-4 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12-15 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag trækkes før skat og øger totalpakken.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel – ≈ ± 700 kr./md. i key account manager løn efter skat.</td>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karriere­trappen – key account manager løn før og efter skat</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, senior KAM med bonus</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 56 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 4 480 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 51 520 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 46 870 kr.</li>
                <li><strong>A-skat (~ 38 %):</strong> 17 810 kr.</li>
                <li><strong>Key account manager løn efter skat ≈</strong> 33 230 kr.</li>
              </ul>
            </div>
            <p>Se effekten af bonus eller lavere kommuneskat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at løfte din nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Forhandl KPI-bonus på 15-25 % af årsløn</strong> – baseret på GM, ARR eller markedsandel.</li>
              <li><strong>Specialisér dig i high-margin brancher</strong> (medico, software, energi) – typisk +10 % grundløn.</li>
              <li><strong>Certificér dig i strategisk account management</strong> – giver hurtigt 2 000-4 000 kr./md. før skat.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – op til 700 kr. ekstra i key account manager løn efter skat hver måned.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Key Account Manager Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en junior KAM efter skat?</p>
                <p>Ca. 26 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan runder jeg 40 000 kr. netto?</p>
                <p>Senior-rolle + bonus + lav kommuneskat; kræver {'>'} 65 000 kr. før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej – 12-15 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Kan bonus udløse topskat?</p>
                <p>Ja, hvis samlet løn før skat {'>'} 63 000 kr./md.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger key account manager løn efter skat typisk mellem 26 000 og 41 000 kr. Grundløn, bonusmodel og kommuneskat er de største løftestænger. Indtast dine egne tal på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget din kundeportefølje egentlig giver, når kontrakterne er lukket.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.payscale.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PayScale – gennemsnit 479 323 kr./år (≈ 40 000 kr./md.)</a></li>
              <li><a href="https://www.businessdanmark.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Business Danmark lønstatistik 2022 – 59 405 kr./md.</a></li>
              <li><a href="https://www.salaryexpert.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert Danmark – 680 926 kr./år (≈ 56 700 kr./md.)</a></li>
              <li><a href="https://www.glassdoor.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Glassdoor København – 37 500 kr./md. grundløn (2025 estimat)</a></li>
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

export default KeyAccountManagerLoenPage; 