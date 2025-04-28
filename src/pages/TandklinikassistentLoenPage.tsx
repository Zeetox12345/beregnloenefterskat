import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const TandklinikassistentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 31000, netMin: 21200, netMax: 21700 },
    "Aarhus": { grossSalary: 30500, netMin: 20900, netMax: 21400 },
    "Odense": { grossSalary: 30000, netMin: 20500, netMax: 21000 },
    "Aalborg": { grossSalary: 29500, netMin: 20100, netMax: 20600 },
    "Esbjerg": { grossSalary: 29000, netMin: 19700, netMax: 20200 },
    "Randers": { grossSalary: 29000, netMin: 19700, netMax: 20200 },
    "Vejle": { grossSalary: 30000, netMin: 20700, netMax: 21200 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år)", grossSalary: 27000, netMin: 18700, netMax: 19100 },
    { years: "3–4 år", grossSalary: 28500, netMin: 19700, netMax: 20100 },
    { years: "5–7 år", grossSalary: 30000, netMin: 20600, netMax: 21000 },
    { years: "8–10 år", grossSalary: 31500, netMin: 21500, netMax: 21900 },
    { years: "11+ år", grossSalary: 33000, netMin: 22400, netMax: 22800 }
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
        title="Tandklinikassistent Løn Efter Skat 2025 – Alt du skal vide"
        description="Tandklinikassistent løn efter skat 2025: Se by- og anciennitetstal, tillæg og eksempler, og få et hurtigt estimat af din løn efter skat."
        keywords="tandklinikassistent løn efter skat 2025, tandklinikassistent indkomst, HK overenskomst, tandplejerpersonale løn, klinikassistent løn"
      />
      <Header />
      <PageTitle title="Tandklinikassistent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Tandklinikassistent Løn Efter Skat 2025 – Alt du skal vide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat tandklinikassistent i 2025 kan forvente ca. 19.000 – 22.500 kr. i løn efter skat om måneden, afhængigt af klinik, kommune og anciennitet. Vil du have et hurtigt estimat på få sekunder? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en tandklinikassistent?</h2>
            <p>
              Tandklinikassistenter assisterer tandlæger og tandplejere ved behandling, steriliserer instrumenter, tager røntgenbilleder, håndterer journaler og giver patientinformation. Stillingen er omfattet af HK Privat–Tandlægeforeningen-overenskomsten (seneste OK24), som fastsætter løntrin, pension og tillæg.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Tandklinikassistent – Før og Efter Skat</h2>
            <p>
              Tabellen bygger på HK's overenskomstsats pr. 1. februar 2025 samt Den Danske Tandlægeforenings lønstatistik (grundløn + anciennitetstillæg) for 37 timer/uge. Pension 10,8 % er ikke trukket fra nettobeløbet.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Kommune/By</th>
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
              *Estimater uden kirkeskat. Vil du se, hvad din tandklinikassistent løn efter skat er? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> med din kommune og fradrag.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Overenskomsten giver løntrin efter 2, 4, 7 og 10 år. Extra tillæg for røntgen­licens og udvidet operationserfaring.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Anciennitet</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr 
                      key={exp.years} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{exp.years}</td>
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
              *Beregnet med gennemsnitlig kommuneskat 25 % og AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale variationer – privat vs. kommunal klinik</h2>
            <p>
              Privatklinikker i hovedstaden betaler ofte 2–3 % over overenskomsten for at tiltrække personale, mens kommunale skoletandklinikker tilbyder højere pensionsbidrag (12 %). Nettolønnen påvirkes af lavere kommuneskat i f.eks. Vejle. Indtast din bruttoløn og bopæl i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et hurtigt, kommunespecifikt estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense, 30.000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM-bidrag (8 %)</strong> 30.000 × 0,08 = 2.400 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 30.000 − 2.400 = 27.600 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 22.950 kr.</li>
                <li><strong>A‑skat (≈ 34,7 %)</strong> 22.950 × 0,347 ≈ 7.965 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 27.600 − 7.965 ≈ 19.635 kr.</li>
                <li><strong>Pension (10,8 %)</strong> 3.240 kr. indbetales før skat → løn efter skat ca. 19.600 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker tandklinikassistent løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat & kirkeskat:</strong> forskel på op til 600 kr./md.</li>
              <li><strong>Røntgentillæg:</strong> +650 kr./md. efter kursus.</li>
              <li><strong>Aftentillæg:</strong> +25 % ved klinikåben aften.</li>
              <li><strong>Overtid:</strong> 50 % de første to timer, derefter 100 %.</li>
              <li><strong>Pension:</strong> 10,8 % (privat) – 12 % (kommunal).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ om tandklinikassistent løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en tandklinikassistent før skat?</p>
                <p>27.000 – 33.000 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er tandklinikassistent løn efter skat 2025?</p>
                <p>Cirka 19.000 – 22.500 kr. afhængigt af kommune og erfaring.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, løntrin hvert 2.–3. år samt funktions­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvilken fagforening?</p>
                <p>HK Privat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at hæve din nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag røntgenlicens</strong> – giver ekstra +650 kr./md.</li>
              <li><strong>Søg skoletandpleje</strong> – højere pension sænker skattegrundlaget.</li>
              <li><strong>Udnyt fradrag:</strong> Fagforening, befordring og kurser.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Tandklinikassistenter i Danmark tjener i 2025 en bruttoløn på 27.000 – 33.000 kr. og en nettoløn på 19.000 – 22.500 kr.. Din præcise tandklinikassistent løn efter skat afhænger af kommune, tillæg og pension. Beregn dit eget lønbillede via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.hk.dk/-/media/dokumenter/overenskomst/privat/11000/10919_tandlaegeforeningen_2023_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HK Privat & Tandlægeforeningen – Overenskomst 2023‑2025</a></li>
              <li><a href="https://www.tandlaegeforeningen.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tandlægeforeningen – Lønstatistik 2025</a></li>
              <li><a href="https://dst.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, odontologisk område</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Senest opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TandklinikassistentLoenPage; 