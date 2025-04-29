import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ToemrerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 35000, netMin: 23400, netMax: 23900 },
    "Aarhus": { grossSalary: 34200, netMin: 22800, netMax: 23300 },
    "Odense": { grossSalary: 33700, netMin: 22400, netMax: 22900 },
    "Aalborg": { grossSalary: 33200, netMin: 21900, netMax: 22400 },
    "Esbjerg": { grossSalary: 32700, netMin: 21500, netMax: 22000 },
    "Randers": { grossSalary: 32700, netMin: 21500, netMax: 22000 },
    "Vejle": { grossSalary: 33700, netMin: 22600, netMax: 23100 }
  };

  const experienceData = [
    { years: "Nyuddannet svend (0–2 år)", grossSalary: 29000, netMin: 20000, netMax: 20400 },
    { years: "3–5 år", grossSalary: 30500, netMin: 21100, netMax: 21500 },
    { years: "6–8 år", grossSalary: 32000, netMin: 22200, netMax: 22600 },
    { years: "9–11 år", grossSalary: 33500, netMin: 23200, netMax: 23600 },
    { years: "12+ år", grossSalary: 35000, netMin: 24200, netMax: 24600 }
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
        title="Tømrer Løn Efter Skat 2025 – Realistiske Nettoløn Estimater"
        description="Tømrer løn efter skat 2025: Se nettoløn for tømrere i byer og med erfaring, inkl. akkord, overtid og pension. Beregn din løn efter skat hurtigt og nemt."
        keywords="tømrer løn efter skat 2025, tømrer nettoløn, akkordløn, 3F bygge og anlæg, tømrersvend"
      />
      <Header />
      <PageTitle title="Tømrer Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Tømrer Løn Efter Skat 2025 – Alt du skal vide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat tømrer kan i 2025 forvente ca. 20.000 – 23.500 kr. i tømrer løn efter skat om måneden. Nettolønnen varierer med kommune, anciennitet og akkord. Få et hurtigt, personligt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor tjekke tømrer løn efter skat?</h2>
            <p>
              Som håndværker er akkord og tillæg en stor del af lønnen. Ved at kende din tømrer løn efter skat kan du bedre planlægge økonomi, ferieopsparing og fradrag for værktøj. Denne guide giver realistiske 2025-tal, så du kan sammenligne byer, erfaring og akkordniveau.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Tømrer Løn – Før og Efter Skat (2025)</h2>
            <p>
              Tallene bygger på 3F Bygge & Anlægs minimallønsoverenskomst (grundløn 183,65 kr./t) samt Jobindex-lønstatistik Q1‑2025. Antager 37 t/uge uden akkordtillæg. Pension 12 % er ikke trukket fra nettobeløbet.
            </p>

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
              *Estimater uden kirkeskat. Indtast din løn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et hurtig, personligt estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet (tømrersvend)</h2>

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
              *Beregnet med gennemsnitlig kommuneskat 25 % + AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Akkord – sådan booster du tømrer løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Akkordtakst:</strong> 240–280 kr./t ved høj produktivitet → 10‑25 % over minimalløn.</li>
              <li><strong>Skattepligtig:</strong> Akkord er A‑indkomst, men øger ikke AM‑bidrag i procent.</li>
              <li><strong>Planlæg projekter:</strong> lange facader og tagværk giver bedst akkordrate.</li>
            </ul>
            <p>
              Når du bruger <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, så indtast minimal løn for mere realistisk tømrer nettoløn.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aarhus, 34.200 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag (8 %)</strong> 34.200 × 0,08 = 2.736 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 34.200 − 2.736 = 31.464 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 26.814 kr.</li>
                <li><strong>A‑skat (≈ 34,7 %)</strong> 26.814 × 0,347 ≈ 9.310 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 31.464 − 9.310 ≈ 22.154 kr.</li>
                <li><strong>Pension (12 %)</strong> 4.104 kr. indbetales før skat → løn efter skat ca. 22.100 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ om tømrer løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en tømrer før skat?</p>
                <p>29.000 – 35.000 kr. + akkord.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er tømrer løn efter skat 2025?</p>
                <p>Cirka 20.000 – 23.500 kr. afhængigt af kommune og akkord.</p>
              </div>
              <div>
                <p className="font-semibold">Gælder overtidstillæg?</p>
                <p>Ja, 50 % de første 3 timer, derefter 100 %.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan stiger lønnen med erfaring?</p>
                <p>Automatisk sats + højere akkordrate.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at øge din tømrer løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Forhandl akkord</strong> på facade‐ og tagprojekter.</li>
              <li><strong>Få certifikat til stillads/kran</strong> → +1.000‑1.500 kr./md.</li>
              <li><strong>Udnyt værktøjsfradrag</strong> og befordringsfradrag.</li>
              <li><strong>Tag kurser i klimaskærm/CLT</strong> for kvalifikationstillæg.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Tømrere i Danmark tjener 2025 en bruttoløn på 29.000 – 35.000 kr. og en nettoløn på 20.000 – 23.500 kr. Din præcise tømrer løn efter skat afhænger af kommune, akkord og tillæg. Få et personligt estimat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.3f.dk/-/media/files/artikler/overenskomst/byggegruppen/overenskomster/bygge--og-anlaegsoverenskomsten-2024-2026---2,-d-,-version.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F Bygge & Anlæg – Overenskomst 2024‑2026</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen/toemrer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex – Tømrer lønstatistik 2025</a></li>
              <li><a href="https://www.dst.dk/da/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, byggefag (dst.dk)</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025 (skm.dk)</a></li>
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

export default ToemrerLoenPage; 