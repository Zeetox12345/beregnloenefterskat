import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FysioterapeutLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 36500, netMin: 24200, netMax: 24700 },
    "Aarhus": { grossSalary: 35800, netMin: 23700, netMax: 24200 },
    "Odense": { grossSalary: 35200, netMin: 23200, netMax: 23700 },
    "Aalborg": { grossSalary: 34600, netMin: 22800, netMax: 23300 },
    "Esbjerg": { grossSalary: 34000, netMin: 22300, netMax: 22800 },
    "Randers": { grossSalary: 34000, netMin: 22300, netMax: 22800 },
    "Vejle": { grossSalary: 35200, netMin: 23300, netMax: 23800 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år)", grossSalary: 31000, netMin: 20900, netMax: 21400 },
    { years: "3–5 år", grossSalary: 33000, netMin: 22200, netMax: 22700 },
    { years: "6–8 år", grossSalary: 35000, netMin: 23500, netMax: 24000 },
    { years: "9–11 år", grossSalary: 36500, netMin: 24600, netMax: 25100 },
    { years: "12+ år (specialfunktion)", grossSalary: 38000, netMin: 25600, netMax: 26100 }
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
        title="Fysioterapeut Løn Efter Skat 2025 – Nettoløn, Tillæg og Eksempler"
        description="Fysioterapeut løn efter skat 2025: Se realistiske nettoløn-estimater, anciennitet og tillæg. Beregn din egen løn på få sekunder."
        keywords="fysioterapeut løn efter skat 2025, fysioterapeut nettoløn, fysioterapeut anciennitet, fysioterapeut kommune løn, privat fysioterapeut løn"
      />
      <Header />
      <PageTitle title="Fysioterapeut Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Fysioterapeut Løn Efter Skat 2025 – Alt du skal vide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat fysioterapeut i Danmark kan i 2025 forvente ca. 21.000 – 25.500 kr. i fysioterapeut løn efter skat om måneden. Nettolønnen afhænger af kommune, anciennitet, arbejdssted (kommune, region eller privat), og tillæg. Få et hurtigt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en fysioterapeut?</h2>
            <p>
              Fysioterapeuter arbejder med genoptræning, behandling og forebyggelse af skader og bevægelsesproblemer hos patienter. De er ansat i kommuner, regioner, privat praksis og sundhedshuse. Lønnen er baseret på overenskomster fra Danske Fysioterapeuter og varierer efter erfaring, arbejdssted og funktion.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Fysioterapeut Løn – Før og Efter Skat</h2>
            <p>
              Tabellen her viser gennemsnitlig fysioterapeut løn for 2025 ved 37 t/uge. Pension (16,7 %) er ikke fratrukket i nettolønnen.
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
              *Estimater uden kirkeskat. Indtast din egen løn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et hurtigt, personligt estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter anciennitet</h2>
            <p>
              Fysioterapeuter stiger løbende i løntrin. Tabellen her viser, hvordan din fysioterapeut løn efter skat udvikler sig med erfaring:
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker fysioterapeut løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat:</strong> op til 2.000 kr. forskel pr. måned</li>
              <li><strong>Specialfunktioner:</strong> som neurologi eller ledende terapeut → +1.000 – 3.000 kr./md.</li>
              <li><strong>Aften- og weekendtillæg:</strong> op til 50 % ekstra</li>
              <li><strong>Privat praksis:</strong> kan give højere brutto, men med egne udgifter</li>
              <li><strong>Pension (16,7 %):</strong> indbetales før skat</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempelberegning (Odense, 35.200 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM-bidrag (8 %):</strong> 2.816 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 32.384 kr.</li>
                <li><strong>Fradrag:</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 27.734 kr.</li>
                <li><strong>A-skat (≈ 33,5 %):</strong> 9.290 kr.</li>
                <li><strong>Løn efter skat:</strong> ca. 23.094 kr.</li>
                <li><strong>Pension (16,7 %) før skat:</strong> 5.878 kr. → udbetalt løn ca. 23.000 kr.</li>
              </ul>
            </div>

            <p>
              Vil du finde din præcise fysioterapeut løn efter skat? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> på få sekunder.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Fysioterapeut Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en fysioterapeut i 2025?</p>
                <p>31.000 – 38.000 kr. før skat afhængigt af erfaring og funktion.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er fysioterapeut løn efter skat?</p>
                <p>Ca. 21.000 – 25.500 kr. i gennemsnit for fuldtidsstillinger.</p>
              </div>
              <div>
                <p className="font-semibold">Er der forskel på kommune og privat praksis?</p>
                <p>Ja, privat praksis kan give højere løn, men også højere udgifter og ingen pensionsindbetaling.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan kan jeg få mere i løn?</p>
                <p>Forhandl funktions- og kvalifikationstillæg, og søg specialistopgaver.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at øge din fysioterapeut løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Forhandl tillæg</strong> ved efteruddannelse eller ekstra funktioner</li>
              <li><strong>Specialisér dig</strong> i fx neurologi, geriatri eller sportsskader</li>
              <li><strong>Udnyt fradrag:</strong> befordring, fagforening, kurser</li>
              <li><strong>Overvej vikarbureau</strong> med højere bruttoløn</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Fysioterapeuter i Danmark tjener i 2025 en bruttoløn på 31.000 – 38.000 kr. og en typisk fysioterapeut løn efter skat på 21.000 – 25.500 kr.. Du kan finde dit eget estimat på få sekunder med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.fysio.dk/globalassets/documents/raadgivning/loen/statslige-lonsatser-01-04-2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danske Fysioterapeuter – Lønstatistik 2025</a></li>
              <li><a href="https://www.kl.dk/media/3hfcnsvt/aftale-mellem-kl-og-forhandlingsfaellesskabet-om-overenskomst-og-aftalefornyelsen-pr-1-april-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KL & Danske Regioner – Overenskomst 2024–2026</a></li>
              <li><a href="https://www.dst.dk/da/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, sundhedsfaglige stillinger (dst.dk)</a></li>
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

export default FysioterapeutLoenPage; 