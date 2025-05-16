import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BuschauffoerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 34000, netMin: 22000, netMax: 22400 },
    "Aarhus": { grossSalary: 32500, netMin: 21000, netMax: 21400 },
    "Odense": { grossSalary: 31000, netMin: 20000, netMax: 20400 },
    "Aalborg": { grossSalary: 30000, netMin: 19300, netMax: 19700 },
    "Esbjerg": { grossSalary: 29000, netMin: 18700, netMax: 19100 },
    "Randers": { grossSalary: 29000, netMin: 18700, netMax: 19100 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Lærling (2. år)", grossSalary: 20000, netMin: 16000, netMax: 16300 },
    { type: "Nyuddannet (0‑2 år, bybus)", grossSalary: 28000, netMin: 18300, netMax: 18700 },
    { type: "3‑5 år (regional)", grossSalary: 31000, netMin: 20000, netMax: 20400 },
    { type: "6‑8 år (natbus)", grossSalary: 34000, netMin: 22000, netMax: 22400 },
    { type: "9‑11 år (turist / langdistance)", grossSalary: 36000, netMin: 23300, netMax: 23700 },
    { type: "12+ år (rutemester / instruktør)", grossSalary: 38000, netMin: 24500, netMax: 24900 }
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
        title="Buschauffør Løn Efter Skat 2025 – Hvad Får Du Udbetalt?"
        description="Hvor meget får du som buschauffør efter skat? Se løntal og tillæg for 2025, og brug beregn løn efter skat til dit eget realistiske beløb."
        keywords="buschauffør løn efter skat 2025, bus chauffør løn, buschaufførløn, bybus løn, nattillæg, weekendtillæg, chauffør overenskomst"
      />
      <Header />
      <PageTitle title="Buschauffør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Buschauffør Løn Efter Skat 2025 – Fra Rat til Rådighedsbeløb </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids buschauffør får i 2025 en buschauffør løn efter skat på cirka 18 000 – 24 000 kr. pr. måned. Spændet afhænger især af by, anciennitet, rute­type (by / regional / nat) og overenskomst­tillæg for skæve timer. Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et lynhurtigt, personligt estimat.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad styrer din løn på køreplanen?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Grundløn</strong> – fastsat af 3F Transport & DI Branche­fællesskab Overenskomsten.</li>
              <li><strong>Ulempe‑/vagt­tillæg</strong> – aften + 18 %, nat + 35 %, weekend + 40 %.</li>
              <li><strong>Rute­type</strong> – bybusser betaler mindre grundløn, men flere skæve timer giver højere løn efter skat; fjern­bus / turistbus = højere kilometertillæg.</li>
              <li><strong>Pension 12 %</strong> + indefrosset SH‑opsparing 7 %.</li>
              <li><strong>Region & kommuneskat</strong> – op til 0,8 pct.point forskel → ± 600 kr. i løn efter skat.</li>
            </ul>

            <p className="italic mt-4">
              Fun fact: Én nattetur gennem København kan give et tillæg, der dækker både kaffe og wienerbrød til hele morgenholdet – efter skat!
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By‑tabel – Buschauffør Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
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
              *Beregnet med gennemsnitlig kommuneskat 24,9 % + AM‑bidrag 8 %, uden kirkeskat. Vil du kende dit tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaring & Rute – Buschauffør Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rute</th>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aalborg – natbus, 30 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 30 000 kr.</li>
                <li><strong>AM‑bidrag 8 % →</strong> 2 400 kr.</li>
                <li><strong>Skattepligtig indkomst →</strong> 27 600 kr.</li>
                <li><strong>Personfradrag →</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag →</strong> 22 950 kr.</li>
                <li><strong>A‑skat (~ 35 %) →</strong> 8 030 kr.</li>
                <li><strong>Buschauffør løn efter skat ≈</strong> 19 570 kr.</li>
              </ul>
            </div>
            <p>
              Vil du teste flere weekend­tillæg eller lavere kommuneskat? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> – det tager mindre tid end at køre én busrunde.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker buschauffør løn efter skat mest?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Faktor</th>
                    <th className="py-3 px-4 border-b text-left">Typisk nettoløns­effekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Nat‑ & weekend­tillæg</td>
                    <td className="py-3 px-4 border-b">+700 – 2 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Turist‑/fjern­rutetillæg</td>
                    <td className="py-3 px-4 border-b">+800 – 1 800 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Lav‑skat kommune</td>
                    <td className="py-3 px-4 border-b">+300 – 600 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Instruktør‑ eller rutemester­rolle</td>
                    <td className="py-3 px-4 border-b">+1 000 – 2 000 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 hurtige tips til at forbedre din løn efter skat </h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag de skæve timer</strong> – nat / helligdage giver de højeste tillæg.</li>
              <li><strong>Fokusér på langdistance / turist</strong> – højere kilometertillæg → mere efter skat.</li>
              <li><strong>Pendlerkort & fradrag</strong> – registrér lange tomkørsler for ekstra fradrag.</li>
              <li><strong>Sig ja til instruktør‑kursus</strong> – giver både tillæg og bedre karriere­trin.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Buschauffør Løn Efter Skat ℹ️</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny buschauffør efter skat?</p>
                <p>Cirka 18 500 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 25 000 kr. efter skat?</p>
                <p>Ja – med nattevagter, turist­kørsel og instruktør‑tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pensionen med?</p>
                <p>Nej, de 12 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer man topskat?</p>
                <p>Sjældent – først over ca. 63 000 kr. før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger buschauffør løn efter skat typisk på 18 000 – 24 000 kr. Bonus for skæve timer, turist / langdistance­ruter og instruktør­tillæg kan skubbe den nær 25 000 kr. Vil du kende dit exakte udbetalingstal? Hop ind på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, indtast din løn og få et hurtigt estimat – hurtigere end en bus på A‑ruten!
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.3f.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F Transport & DI Overenskomst 2024‑26</a></li>
              <li><a href="https://www.jobindex.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex Lønstatistik – Buschauffører (maj 2025)</a></li>
              <li><a href="https://www.skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025</a></li>
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

export default BuschauffoerLoenPage; 