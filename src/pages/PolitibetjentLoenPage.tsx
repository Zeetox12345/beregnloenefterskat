import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const PolitibetjentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "Københavns Politi": { grossSalary: 35500, netMin: 23700, netMax: 24200 },
    "Østjyllands Politi (Aarhus)": { grossSalary: 34800, netMin: 23100, netMax: 23600 },
    "Fyns Politi (Odense)": { grossSalary: 34400, netMin: 22800, netMax: 23300 },
    "Nordjyllands Politi (Aalborg)": { grossSalary: 34000, netMin: 22500, netMax: 22900 },
    "Syd- og Sønderjyllands Politi (Esbjerg)": { grossSalary: 33500, netMin: 22200, netMax: 22600 },
    "Midt- og Vestjyllands Politi (Herning)": { grossSalary: 33500, netMin: 22200, netMax: 22600 },
    "Sydsjælland & Lolland‑Falster Politi (Næstved)": { grossSalary: 33000, netMin: 21900, netMax: 22300 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år)", grossSalary: 30800, netMin: 20900, netMax: 21300 },
    { years: "3–5 år", grossSalary: 32200, netMin: 21900, netMax: 22300 },
    { years: "6–8 år", grossSalary: 33600, netMin: 22700, netMax: 23100 },
    { years: "9–11 år", grossSalary: 35000, netMin: 23600, netMax: 24000 },
    { years: "12+ år (PA5 + senior)", grossSalary: 36400, netMin: 24400, netMax: 24800 }
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
        title="Politibetjent Løn Efter Skat 2025 – Fulde Overblik"
        description="Hvad får en politibetjent udbetalt? Løn efter skat 2025: nettotal, vagttillæg og fradrag forklaret. Beregn løn efter skat med ét klik."
        keywords="politibetjent løn efter skat 2025, politi indkomst, politiassistent løn, politiets lønramme, politibetjent anciennitet, politiforbundet overenskomst"
      />
      <Header />
      <PageTitle title="Politibetjent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Politibetjent Løn Efter Skat 2025 –  Få Det Fuldstændige Overblik</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat politibetjent kan i 2025 forvente ca. 20.800 – 24.200 kr. i løn efter skat pr. måned, afhængigt af politikreds, anciennitet og tillæg for skæve vagter. Få et hurtigt estimat på få sekunder med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            {/* Min A-kasse Affiliate Section */}


            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en politibetjent?</h2>
            <p>
              Politibetjente arbejder med at forebygge og efterforske kriminalitet, patruljere, udføre beredskabs­opgaver, trafik­kontrol og borger­service. Stillingerne er organiseret gennem Politiforbundet og er dækket af statens overenskomst (Moderniseringsstyrelsen), som indeholder løntrin, pension og vagttillæg.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Politibetjent – Før og Efter Skat</h2>
            <p>
              Tabellen herunder viser gennemsnitlig grundløn for politiassistent (trin PA1–PA5) pr. 1. april 2025 ved 37 timer/uge. Pension (17,1 %) er ikke fratrukket i nettobeløbet.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Politikreds (by)</th>
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
              *Eksemplerne anvender kommuneskat 2025 uden kirkeskat. For nøjagtige tal i din kommune kan du <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Politibetjente rykker fra politiassistent 1 (PA1) til politiassistent 5 (PA5) og kan derudover få funktions- og specialist­tillæg (f.eks. hundefører, beredskab, efterforskning).
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Anciennitet</th>
                    <th className="py-3 px-4 border-b text-left">Løntrin</th>
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
                      <td className="py-3 px-4 border-b">{
                        exp.years === "Nyuddannet (0–2 år)" ? "PA1" :
                        exp.years === "3–5 år" ? "PA2" :
                        exp.years === "6–8 år" ? "PA3" :
                        exp.years === "9–11 år" ? "PA4" : "PA5"
                      }</td>
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
              *Beregnet med gennemsnitlig kommuneskat (25 %) og AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense, 34.400 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM-bidrag (8 %)</strong> 34.400 × 0,08 = 2.752 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 34.400 − 2.752 = 31.648 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatnings‑grundlag</strong> 26.998 kr.</li>
                <li><strong>A‑skat (≈ 34,85 %)</strong> 26.998 × 0,3485 ≈ 9.420 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 31.648 − 9.420 ≈ 22.228 kr.</li>
                <li><strong>Pension (17,1 %)</strong> 5.888 kr. indbetales før skat → løn efter skat ca. 22.200 kr.</li>
              </ul>
            </div>
            <p>
              Test dine egne tal på få sekunder i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker politibetjent løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat</strong>: 23,4 % → 26,3 %.</li>
              <li><strong>Udetillæg og rådighedsvagter</strong>: +1.500‑4.000 kr. pr. måned.</li>
              <li><strong>Skæve vagter</strong>: Nat + 35 %, weekend + 50 %.</li>
              <li><strong>Pension</strong>: 17,1 % arbejdsgiverbetalt.</li>
              <li><strong>Overtid</strong>: 50 – 100 % tillæg.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Hurtige svar</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en politibetjent før skat?</p>
                <p>31.000 – 36.000 kr. + tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er politibetjent løn efter skat?</p>
                <p>Omkring 20.800 – 24.200 kr. ved fuldtid.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, PA1 → PA5 + funktions‑ og senior­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvem forhandler lønnen?</p>
                <p>Politiforbundet.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode råd til at øge din løn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Søg specialistroller</strong>: MC‑betjent, hundefører, livvagt.</li>
              <li><strong>Planlæg vagter</strong>: Flere nat‑ og weekend­timer giver højere nettoløn.</li>
              <li><strong>Udnyt fradrag</strong>: Fagforening, kørsels­fradrag, uniform og våbenvedligehold.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som politibetjent i Danmark ligger bruttolønnen i 2025 på 31.000 – 36.000 kr. og nettolønnen på 20.800 – 24.200 kr. Optimer dine tillæg, fradrag og pension, og find dit præcise tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Politiforbundet – Lønrammer og overenskomst 2024‑2026</li>
              <li>Moderniserings­styrelsen – Statens lønoversigter 2025</li>
              <li><a href="https://www.skm.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskatte­procenter 2025 (skm.dk)</a></li>
              <li><a href="https://www.dst.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Offentlig lønstruktur, politi og retsvæsen (dst.dk)</a></li>
            </ul>
            
            <p className="text-sm text-gray-500 mt-8">
              Senest opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PolitibetjentLoenPage; 