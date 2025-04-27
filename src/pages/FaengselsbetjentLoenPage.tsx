import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FaengselsbetjentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "Vestre Fængsel, København": { grossSalary: 34500, netMin: 23100, netMax: 23600 },
    "Storstrøm Fængsel, Guldborgsund": { grossSalary: 33800, netMin: 22700, netMax: 23200 },
    "Statsfængslet Østjylland, Horsens": { grossSalary: 33500, netMin: 22500, netMax: 23000 },
    "Arresthuset Aalborg": { grossSalary: 33000, netMin: 22100, netMax: 22600 },
    "Statsfængslet Nyborg, Odense": { grossSalary: 32800, netMin: 22000, netMax: 22400 },
    "Søbysøgård, Fyn": { grossSalary: 32300, netMin: 21600, netMax: 22000 },
    "Ringe Fængsel, Midtfyn": { grossSalary: 32300, netMin: 21600, netMax: 22000 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år, trin 25)", grossSalary: 30500, netMin: 20700, netMax: 21100 },
    { years: "3–5 år (trin 27)", grossSalary: 31800, netMin: 21600, netMax: 22000 },
    { years: "6–8 år (trin 29 + tillæg)", grossSalary: 33200, netMin: 22400, netMax: 22900 },
    { years: "9–11 år (trin 31 + tillæg)", grossSalary: 34600, netMin: 23300, netMax: 23800 },
    { years: "12+ år (trin 33 + seniortillæg)", grossSalary: 36000, netMin: 24100, netMax: 24600 }
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
        title="Fængselsbetjent Løn Efter Skat 2025 – Nettoløn & Anciennitet"
        description="Fængselsbetjent løn efter skat 2025: Se tabeller for byer og anciennitet, vagttillæg, skattefakta – og beregn løn efter skat på få sekunder."
        keywords="fængselsbetjent løn efter skat 2025, kriminalforsorgen løn, fængselsbetjent indkomst, uniformeret medarbejder løn, fængselsbetjent anciennitet, fængselsforbundet overenskomst"
      />
      <Header />
      <PageTitle title="Fængselsbetjent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Fængselsbetjent Løn Efter Skat 2025 – Din Komplette Guide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat fængselsbetjent kan i 2025 forvente ca. 20.500 – 23.500 kr. i løn efter skat pr. måned, afhængigt af tjenestested, anciennitet og vagttillæg. Få et personligt estimat på få sekunder med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en fængselsbetjent?</h2>
            <p>
              Fængselsbetjente – også kaldet uniformerede medarbejdere i Kriminalforsorgen – har ansvar for sikkerhed, orden og resocialisering i landets fængsler og arresthuse. Jobbet omfatter tilsyn, visitationer, transport samt samtaler med indsatte om uddannelse og løsladelse. Overenskomsten forhandles af Fængselsforbundet og omfatter løntrin, tillæg for skæve vagter, pension m.m.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Fængselsbetjent – Før og Efter Skat</h2>
            <p>
              Tabellen nedenfor viser gennemsnitlig grundløn (løntrin 25–33) og faste vagttillæg pr. 1. april 2025 for en 37‑timers uge. Eksemplerne indregner en pensionsprocent på 17 % (trækkes før A‑skat).
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Tjenestested (by/fængsel)</th>
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
              *Beregnede nettobeløb med kommuneskat 2025 uden kirkeskat. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for præcise tal med din kommune, fradrag og eventuel kirkeskat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Fængselsbetjente rykker på løntrappen via løntrin (trin 25 → 33) og har desuden et anciennitetstillæg efter 6 og 9 år. Nattillæg på 33 % og weekendtillæg på 50 % kan øge den reelle indtjening.
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
              *Beregnet med gennemsnitlig kommuneskat (25 %) og AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Horsens, 33.500 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag (8 %)</strong> 33.500 × 0,08 = 2.680 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 33.500 − 2.680 = 30.820 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 26.170 kr.</li>
                <li><strong>A‑skat (≈ 35 %)</strong> 26.170 × 0,35 ≈ 9.160 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 30.820 − 9.160 ≈ 21.660 kr.</li>
                <li><strong>Pension (17 %)</strong> 5.695 kr. indbetales før skat → løn efter skat ca. 21.600 kr.</li>
              </ul>
            </div>
            <p>
              Lav din egen beregning nu – <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">brug beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker fængselsbetjent løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat</strong>: 23,4 % i Vejle til 26,3 % i Brønderslev.</li>
              <li><strong>Vagttillæg</strong>: Nat (33 %), weekend (50 %), helligdage (100 %).</li>
              <li><strong>Rådighedsvagter</strong>: Giver typisk 2.000 – 3.500 kr. ekstra pr. måned.</li>
              <li><strong>Pension</strong>: 17 % arbejdsgiverbetalt (overenskomst).</li>
              <li><strong>Overtid</strong>: 50 – 100 % tillæg efter første 37 timer.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Hurtige svar</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en fængselsbetjent før skat?</p>
                <p>30.000 – 36.000 kr. + tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er fængselsbetjent løn efter skat?</p>
                <p>Ca. 20.500 – 23.500 kr. alt efter kommune og vagter.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med anciennitet?</p>
                <p>Ja, trin 25 → 33 + anciennitetstillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvilken fagforening?</p>
                <p>Fængselsforbundet.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode råd til at øge din løn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Søg specialfunktioner</strong>: Transporthold, skydeleder eller hundefører giver funktions­tillæg.</li>
              <li><strong>Udnyt fradrag</strong>: Fagforening, kørsels­fradrag og merudgifter til uniform.</li>
              <li><strong>Planlæg vagter</strong>: Flere natte‑ og weekendvagter giver markant højere nettoløn.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som fængselsbetjent i Danmark ligger bruttolønnen i 2025 på 30.000 – 36.000 kr. og nettolønnen på 20.500 – 23.500 kr.. Optimer din økonomi ved at udnytte tillæg, fradrag og pension, og find dit præcise tal via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Fængselsforbundet – Overenskomst 2024‑2026 (løntrin & tillæg)</li>
              <li><a href="https://www.kriminalforsorgen.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kriminalforsorgen – Job som fængselsbetjent: løn og vilkår (kriminalforsorgen.dk)</a></li>
              <li><a href="https://www.skm.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskatteprocenter 2025 (skm.dk)</a></li>
              <li><a href="https://www.dst.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønmodtagerindkomst, offentligt ansatte (dst.dk)</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 mt-8">
              Senest opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FaengselsbetjentLoenPage; 