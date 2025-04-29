import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FarmakonomerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 31000, netMin: 20800, netMax: 21300 },
    "Aarhus": { grossSalary: 30000, netMin: 20100, netMax: 20600 },
    "Odense": { grossSalary: 29500, netMin: 19700, netMax: 20200 },
    "Aalborg": { grossSalary: 29000, netMin: 19300, netMax: 19800 },
    "Esbjerg": { grossSalary: 28500, netMin: 18900, netMax: 19400 },
    "Randers": { grossSalary: 28500, netMin: 18900, netMax: 19400 },
    "Vejle": { grossSalary: 29500, netMin: 19900, netMax: 20400 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år)", grossSalary: 26000, netMin: 17900, netMax: 18300 },
    { years: "3–4 år", grossSalary: 27500, netMin: 18900, netMax: 19300 },
    { years: "5–7 år", grossSalary: 29000, netMin: 19900, netMax: 20300 },
    { years: "8–10 år", grossSalary: 30500, netMin: 20900, netMax: 21300 },
    { years: "11+ år (specialtillæg)", grossSalary: 32000, netMin: 22000, netMax: 22400 }
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
        title="Farmakonom Løn Efter Skat 2025 – Nettoløn & Tillæg"
        description="Farmakonom løn efter skat 2025: se nettoløn for byer og anciennitet, tillæg for vagt og ansvar – og få et hurtigt estimat med beregn løn efter skat."
        keywords="farmakonom løn efter skat 2025, apotekstekniker løn, farmakonomforeningen, hospitalsapotek, receptekspedition"
      />
      <Header />
      <PageTitle title="Farmakonom Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Farmakonom Løn Efter Skat 2025 – Alt du skal vide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat farmakonom (apotekstekniker) i 2025 kan forvente ca. 18.500 – 22.000 kr. i løn efter skat om måneden, afhængigt af kommune, anciennitet og tillæg for receptekspedition eller ansvar. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et hurtigt estimat af din egen farmakonom løn efter skat.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en farmakonom?</h2>
            <p>
              Farmakonomer rådgiver kunder om medicin, håndterer recepter, kontrollerer lager og udfører sundhedstjek (fx blodtryk, kolesterol) på apotek eller hospitalsapotek. Overenskomsten forhandles af Farmakonomforeningen med Danmarks Apotekerforening og Danske Regioner, og den fastsætter løntrin, pension (11,7 %) og vagttillæg.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Farmakonom Løn – Før og Efter Skat</h2>
            <p>
              Tabellen bygger på Farmakonomforeningens lønmagasin 2025 (grundløn + trintillæg) for 37 timer/uge. Pension er ikke fratrukket i nettobeløbet.
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
              *Estimater uden kirkeskat. Få dit personlige beløb via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Farmakonomer stiger automatisk i løntrin efter 2, 4 og 7 års erfaring. Tillæg kan opnås for recepthåndtering, dosispakning og driftsansvar.
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
              *Beregningsgrundlag: gennemsnitlig kommuneskat 25 % + AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Faktorer der påvirker farmakonom løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat</strong> varierer 23,4 % – 26,3 %.</li>
              <li><strong>Tillæg for driftsansvar:</strong> +1.200 – 1.800 kr./md.</li>
              <li><strong>Vagt‑ og lørdagstillæg:</strong> +25 % pr. time.</li>
              <li><strong>Pension:</strong> 11,7 % arbejdsgiverbetalt reducerer skattegrundlaget.</li>
              <li><strong>Kvalifikationstillæg</strong> for dosispak eller IT‑superbrugere: +600 – 900 kr./md.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense, 29.500 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag (8 %)</strong> 29.500 × 0,08 = 2.360 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 29.500 − 2.360 = 27.140 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 22.490 kr.</li>
                <li><strong>A‑skat (≈ 34,7 %)</strong> 22.490 × 0,347 ≈ 7.810 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 27.140 − 7.810 ≈ 19.330 kr.</li>
                <li><strong>Pension (11,7 %)</strong> 3.452 kr. indbetales før skat → løn efter skat ca. 19.300 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ om farmakonom løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en farmakonom før skat?</p>
                <p>26.000 – 32.000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er farmakonom løn efter skat 2025?</p>
                <p>Cirka 18.500 – 22.000 kr. afhængigt af kommune og tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, løntrin + funktions‑ og kvalifikationstillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Er der forskel på apotek og hospital?</p>
                <p>Hospitalsapoteker ligger ca. 1.200 kr. højere før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at øge din farmakonom løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Bliv dosispakker‑ansvarlig</strong> – tillæg op til 1.800 kr./md.</li>
              <li><strong>Tag overarbejde på lørdage</strong> med 50 % tillæg.</li>
              <li><strong>Udnyt fradrag:</strong> fagforening, befordring, efteruddannelse.</li>
              <li><strong>Søg efteruddannelse</strong> (GDP, GCP) for kvalifikationstillæg.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Farmakonomer i Danmark tjener 2025 en bruttoløn på 26.000 – 32.000 kr. og en nettoløn på 18.500 – 22.000 kr. Din præcise farmakonom løn efter skat afhænger af kommune, tillæg og pension. Få dit personlige estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.farmakonom.dk/nyheder/2025/%C3%A6ndringer-af-overenskomsten-pr-1-april-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Farmakonomforeningen – Lønmagasin 2025</a></li>
              <li><a href="https://www.farmakonom.dk/media/ky5hvszy/farmakonomoverenskomsten-2024-2026-marts-2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Apotekerforening – Lønoversigt 2025</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025 (skm.dk)</a></li>
              <li><a href="https://www.dst.dk/da/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, apoteksområdet (dst.dk)</a></li>
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

export default FarmakonomerLoenPage; 