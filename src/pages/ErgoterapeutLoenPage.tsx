import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ErgoterapeutLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 35200, netMin: 23400, netMax: 23900 },
    "Aarhus": { grossSalary: 34600, netMin: 22900, netMax: 23400 },
    "Odense": { grossSalary: 34100, netMin: 22500, netMax: 23000 },
    "Aalborg": { grossSalary: 33600, netMin: 22100, netMax: 22600 },
    "Esbjerg": { grossSalary: 33100, netMin: 21700, netMax: 22200 },
    "Randers": { grossSalary: 33100, netMin: 21700, netMax: 22200 },
    "Vejle": { grossSalary: 34100, netMin: 22600, netMax: 23100 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år)", grossSalary: 30500, netMin: 20800, netMax: 21200 },
    { years: "3–5 år", grossSalary: 32000, netMin: 21900, netMax: 22300 },
    { years: "6–8 år", grossSalary: 33500, netMin: 22900, netMax: 23300 },
    { years: "9–11 år", grossSalary: 35000, netMin: 23900, netMax: 24300 },
    { years: "12+ år (specialist)", grossSalary: 36500, netMin: 24800, netMax: 25200 }
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
        title="Ergoterapeut Løn Efter Skat 2025 – Nettoløn & Tillæg"
        description="Ergoterapeut løn efter skat 2025: se nettoløn på tværs af byer og anciennitet, specialist- og funktionstillæg – og få et hurtigt estimat i beregneren."
        keywords="ergoterapeut løn efter skat 2025, ergoterapeut indkomst, ergoterapeutforeningen, specialisttillæg, håndterapi, neurorehabilitering"
      />
      <Header />
      <PageTitle title="Ergoterapeut Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Ergoterapeut Løn Efter Skat 2025 – Alt du skal vide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat ergoterapeut i 2025 kan forvente ca. 21.000 – 24.500 kr. i løn efter skat pr. måned, afhængigt af kommune, anciennitet og specialfunktioner (fx neurorehabilitering eller geriatri). Få et hurtigt estimat på få sekunder med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en ergoterapeut?</h2>
            <p>
              Ergoterapeuter hjælper borgere med at genvinde funktionsevne efter sygdom, skade eller handicap ved at tilpasse aktiviteter og omgivelser. De er ansat i kommunal genoptræning, hospitaler, psykiatri, bosteder og private klinikker. Lønnen fastsættes i Ergoterapeutforeningens overenskomster (KL og Danske Regioner), som indeholder løntrin og specialisttillæg.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Ergoterapeut Løn – Før og Efter Skat</h2>
            <p>
              Nedenstående tal er baseret på Ergoterapeutforeningens grundløn pr. 1. april 2025 (løntrin 4–8) med 37 t/uge. Pension (16,7 %) er ikke fratrukket i nettolønnen.
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
              *Estimater uden kirkeskat. Få et personligt estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Ergoterapeuter avancerer fra grundløn (trin 4) til slutløn (trin 8) og kan opnå specialist- eller funktions­tillæg.
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
              *Gns. kommuneskat 25 % + AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Faktorer der påvirker ergoterapeut løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat</strong> varierer fra 23,4 % til 26,3 %.</li>
              <li><strong>Specialistgodkendelse</strong> i fx håndterapi eller børneergoterapi → +1.500–3.000 kr./md.</li>
              <li><strong>Funktions­tillæg</strong> for koordinator, klinisk vejleder eller forflytnings­instruktør.</li>
              <li><strong>Pension</strong> 16,7 % arbejdsgiverbetalt reducerer skattegrundlaget.</li>
              <li><strong>Vagttillæg</strong> i psykiatrien: +2.000–3.500 kr./md.</li>
            </ul>
            <p>
              Når du bruger <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, kan du indtaste specialist­tillæg og vagter for at få et realistisk nettobeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aalborg, 33.600 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM­-bidrag (8 %)</strong> 33.600 × 0,08 = 2.688 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 33.600 − 2.688 = 30.912 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 26.262 kr.</li>
                <li><strong>A­-skat (≈ 34,7 %)</strong> 26.262 × 0,347 ≈ 9.110 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 30.912 − 9.110 ≈ 21.802 kr.</li>
                <li><strong>Pension (16,7 %)</strong> 5.611 kr. indbetales før skat → løn efter skat ca. 21.800 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ om ergoterapeut løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en ergoterapeut før skat?</p>
                <p>30.500 – 36.500 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er ergoterapeut løn efter skat?</p>
                <p>Cirka 21.000 – 24.500 kr. afhængigt af kommune og specialist­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, løntrin + specialist- og funktions­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Er der forskel på region og kommune?</p>
                <p>Regionsansatte ligger typisk 800–1.200 kr. højere før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at øge din ergoterapeut løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Opnå specialistgodkendelse</strong> – løfter lønnen 5–8 %.</li>
              <li><strong>Forhandl funktions­tillæg</strong> for undervisning, forflytning eller IT.</li>
              <li><strong>Udnyt fradrag:</strong> fagforening, befordring, efteruddannelse.</li>
              <li><strong>Justér forskuds­opgørelsen</strong> ved vagt / rådigheds­tillæg.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Ergoterapeuter i Danmark tjener 2025 en bruttoløn på 30.500 – 36.500 kr. og en nettoløn på 21.000 – 24.500 kr.. Din præcise ergoterapeut løn efter skat afhænger af kommune, specialist­tillæg og pension. Få et hurtigt, personligt estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.etf.dk/Loen-og-vilkaar/Loen/ergoterapeuters-loen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ergoterapeutforeningen (ETF) – Løntabel 2025</a></li>
              <li><a href="https://www.kl.dk/media/3hfcnsvt/aftale-mellem-kl-og-forhandlingsfaellesskabet-om-overenskomst-og-aftalefornyelsen-pr-1-april-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KL & Danske Regioner – Overenskomst 2024–2026</a></li>
              <li><a href="https://www.dst.dk/da/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, sundhedsprofessionelle (dst.dk)</a></li>
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

export default ErgoterapeutLoenPage; 