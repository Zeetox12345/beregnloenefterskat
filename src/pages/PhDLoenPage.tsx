import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const PhDLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 35500, netMin: 24000, netMax: 24500 },
    "Aarhus": { grossSalary: 34800, netMin: 23400, netMax: 23900 },
    "Odense": { grossSalary: 34200, netMin: 22900, netMax: 23400 },
    "Aalborg": { grossSalary: 33600, netMin: 22400, netMax: 22900 },
    "Esbjerg": { grossSalary: 33200, netMin: 22100, netMax: 22600 }
  };

  const experienceData = [
    { years: "1. år", grossSalary: 33000, netMin: 22000, netMax: 22500 },
    { years: "2. år", grossSalary: 34000, netMin: 22700, netMax: 23200 },
    { years: "3. år", grossSalary: 35000, netMin: 23500, netMax: 24000 },
    { years: "Postdoc (efter ph.d.)", grossSalary: 39000, netMin: 26000, netMax: 26500 }
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
        title="Ph.d. Løn Efter Skat 2025 – Nettoløn, Overenskomst og Tillæg"
        description="Ph.d. løn efter skat 2025: Se realistiske nettoløn-estimater for ph.d.-studerende, afhængigt af by, erfaring og pensionsaftale."
        keywords="ph.d. løn efter skat 2025, ph.d.-studerende indkomst, ph.d.-stipendiat, universitetsansættelse, ph.d. nettoløn"
      />
      <Header />
      <PageTitle title="Ph.d. Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Ph.d. Løn Efter Skat 2025 – Alt du skal vide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En ph.d.-studerende i Danmark kan i 2025 forvente en ph.d. løn efter skat på ca. 23.000 – 25.500 kr. pr. måned. Beløbet afhænger af ansættelsessted (universitet, hospital eller privat), pensionsprocent og kommuneskat. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et hurtigt estimat.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad er en ph.d.-studerende, og hvordan lønnes de?</h2>
            <p>
              En ph.d.-studerende er ansat som videnskabelig assistent, forskningsassistent eller ph.d.-stipendiat ved universitet eller forskningsinstitution. Stillingen følger typisk en offentlig overenskomst (AC-overenskomsten). Ph.d.-lønniveauet er standardiseret, men afhænger af anciennitet, pensionsindbetaling og evt. tillæg (fx undervisning, klinisk tilknytning).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Ph.d. Løn – Før og Efter Skat i 2025</h2>
            <p>
              Tallene er baseret på Akademikernes (AC) løntrin 4–8, som anvendes ved universiteter i Danmark. 37 t/uge, inkl. pensionsbidrag 17,1 %. Tabellen inkluderer ikke evt. forskningsbonus eller tillæg.
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
              *Estimater uden kirkeskat. Få dit personlige beløb med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Ph.d.-Løn Efter Anciennitet</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">År som ph.d.-studerende</th>
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
              *Beregnet med gennemsnitlig kommuneskat og 8 % AM-bidrag.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Faktorer der påvirker ph.d. løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat:</strong> op til 3 % forskel</li>
              <li><strong>Pensionsprocent:</strong> 17,1 % reducerer skattepligtigt grundlag</li>
              <li><strong>Undervisningstillæg:</strong> typisk 1.500 – 2.000 kr./md. ekstra</li>
              <li><strong>Ekstern finansiering</strong> (fx Novo Nordisk Fonden) kan give højere grundløn</li>
              <li><strong>Dobbeltindskrivning med klinisk funktion</strong> giver ekstra honorar</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel: Ph.d. løn efter skat i Odense (34.200 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM-bidrag (8 %):</strong> 2.736 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 31.464 kr.</li>
                <li><strong>Fradrag:</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 26.814 kr.</li>
                <li><strong>A-skat (≈ 33,7 %):</strong> ca. 9.030 kr.</li>
                <li><strong>Udbetaling før pension:</strong> 31.464 − 9.030 ≈ 22.434 kr. i ph.d. løn efter skat</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Ph.d. Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en ph.d.-studerende før skat?</p>
                <p>Ca. 33.000 – 35.500 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er ph.d. løn efter skat i 2025?</p>
                <p>Typisk 23.000 – 25.500 kr./md. afhængig af kommune og pensionsvilkår</p>
              </div>
              <div>
                <p className="font-semibold">Får man pension som ph.d.-studerende?</p>
                <p>Ja, 17,1 % arbejdsgiverbidrag i statslig stilling</p>
              </div>
              <div>
                <p className="font-semibold">Er ph.d.-stillinger skattepligtige?</p>
                <p>Ja, fuld A-indkomst med AM-bidrag og A-skat</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at optimere din ph.d. løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Undervis ved siden af</strong> → tillæg på op til 2.000 kr./md.</li>
              <li><strong>Brug befordringsfradrag</strong> ved pendling</li>
              <li><strong>Undgå dobbeltbeskatning</strong> hvis du er stipendiat med udenlandsk finansiering</li>
              <li><strong>Justér forskudsopgørelsen</strong> ved ændringer i tillæg</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              En typisk ph.d. løn efter skat i Danmark i 2025 ligger mellem 23.000 – 25.500 kr. afhængigt af bopælskommune og pensionsaftale. For et præcist og hurtigt estimat, brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.akademikerne.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Akademikerne (AC) – Løntabel 2025</a></li>
              <li><a href="https://www.retsinformation.dk/eli/lta/2019/1443" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Retsinformation.dk Stillingsstruktur for videnskabeligt personale ved universiteter</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025 (skm.dk)</a></li>
              <li><a href="https://www.dst.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur for forskningsområdet (dst.dk)</a></li>
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

export default PhDLoenPage; 