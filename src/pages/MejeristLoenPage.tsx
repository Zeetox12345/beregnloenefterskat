import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const MejeristLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København (specialoste)");

  const cityData = {
    "København (specialoste)": { grossSalary: 48000, netMin: 29400, netMax: 29900 },
    "Aarhus (innovation & R&D)": { grossSalary: 46000, netMin: 28200, netMax: 28700 },
    "Odense (robot-mejeri)": { grossSalary: 45000, netMin: 27600, netMax: 28100 },
    "Aalborg (export-pulver)": { grossSalary: 43000, netMin: 26500, netMax: 27000 },
    "Esbjerg (offshore nutrition)": { grossSalary: 42000, netMin: 25900, netMax: 26400 },
    "Randers (SMV-mejeri)": { grossSalary: 42000, netMin: 25900, netMax: 26400 }
  };

  const experienceData = [
    { type: "Udlært (0–1 år)", grossSalary: 35000, netMin: 21800, netMax: 22300 },
    { type: "2–4 år (procesoperatør)", grossSalary: 40000, netMin: 24500, netMax: 25000 },
    { type: "5–7 år (skifteholdsleder)", grossSalary: 45000, netMin: 27600, netMax: 28100 },
    { type: "8+ år (mester / QA-specialist)", grossSalary: 50000, netMin: 31000, netMax: 31500 },
    { type: "Produktionskoordinator", grossSalary: 55000, netMin: 34300, netMax: 34800 }
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
        title="Mejerist Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Hvad er mejerist løn efter skat i 2025? Se realistiske nettolønninger baseret på erfaring, arbejdstider og by – og beregn din egen løn på få sekunder."
        keywords="mejerist løn efter skat 2025, mejerist nettoløn, mejerist indkomst, procesoperatør løn, mejeribranchens overenskomst"
      />
      <Header />
      <PageTitle title="Mejerist Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Mejerist Løn Efter Skat 2025 – Fra Pasteurisering til PayDay </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids mejerist kan i 2025 forvente en mejerist løn efter skat på cirka 22 000 – 30 000 kr. om måneden. Startlønnen (ca. 35 000 kr. før skat) giver ~22 000 kr. udbetalt, mens erfarne mejerister og procesoperatører med 48 000 kr. brutto står med knap 30 000 kr. netto. Forskellene skyldes overenskomst­trin, akkord/­tillæg, skiftehold og kommuneskat. Vil du kende dit præcise tal? Hop ind på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det er hurtigere end at køre CIP-rengøringen færdig.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad driver en mejerist løn efter skat?</h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left">Løndriver</th>
                  <th className="py-3 px-4 border-b text-left">Hvorfor den rykker netto</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-3 px-4 border-b">Overenskomst-grundløn</td><td className="py-3 px-4 border-b">Timeløn 215,47 kr. efter 12 mdr. pr. 1. marts 2024 (≈ 34 600 kr./md.) <br/>Fødevareforbundet NNF</td></tr>
                <tr><td className="py-3 px-4 border-b">Anciennitet & trin</td><td className="py-3 px-4 border-b">Lønhop efter 6 og 12 måneder + personlige tillæg</td></tr>
                <tr><td className="py-3 px-4 border-b">Akkord & skiftehold</td><td className="py-3 px-4 border-b">Aften/nattillæg 61–83 kr./time + weekend 115 kr./time <br/>Fødevareforbundet NNF</td></tr>
                <tr><td className="py-3 px-4 border-b">Branche & specialer</td><td className="py-3 px-4 border-b">Ostekældre og premium-mejerier betaler 5–10 % mere</td></tr>
                <tr><td className="py-3 px-4 border-b">Bonuser & produktionsmål</td><td className="py-3 px-4 border-b">3–6 % af årsløn i store koncerner</td></tr>
                <tr><td className="py-3 px-4 border-b">Kommuneskat (gns. 25,1 %)</td><td className="py-3 px-4 border-b">± 0,6 pct.point → ± 650 kr./md. netto</td></tr>
              </tbody>
            </table>
            <p className="italic">Fun fact: Ét enkelt nattevagt under højsæsonen kan betale din næste barista-kursus – efter skat.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Mejerist Løn Efter Skat 2025</h2>
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
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">{example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">* Beregnet med 8 % AM-bidrag, 4 300 kr. månedsfradrag og gennemsnitlig kommuneskat 25,1 %.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – Mejerist Løn Efter Skat vs. Erfaring</h2>
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
                    <tr key={exp.type} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{exp.type}</td>
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">{exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">Studentum.dk viser en gennemsnitsløn på 47 844 kr./md., hvilket flugter med tabellens midterfelt.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus Skifteholds­leder (45 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Bruttoløn:</strong> 45 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 600 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 41 400 kr.</li>
                <li><strong>Personfradrag:</strong> 4 300 kr.</li>
                <li><strong>Beskatnings­grundlag:</strong> 37 100 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 13 700 kr.</li>
                <li><strong>Mejerist løn efter skat ≈</strong> 27 400 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til højere mejerist løn efter skat </h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left">Strategi</th>
                  <th className="py-3 px-4 border-b text-left">Typisk nettoløft</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-3 px-4 border-b">Tag akkord på højsæsonens flaskehalser</td><td className="py-3 px-4 border-b">+1 500 – 3 000 kr./md.</td></tr>
                <tr><td className="py-3 px-4 border-b">Søg nat- og weekendarbejde</td><td className="py-3 px-4 border-b">+1 000 – 2 500 kr./md.</td></tr>
                <tr><td className="py-3 px-4 border-b">Bliv procesteknolog / mejeritekniker</td><td className="py-3 px-4 border-b">+2 000 – 3 500 kr./md.</td></tr>
                <tr><td className="py-3 px-4 border-b">Flyt til kommune &lt; 24 % skat</td><td className="py-3 px-4 border-b">+300 – 650 kr./md.</td></tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Mejerist Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nyudlært mejerist efter skat?</p>
                <p>Ca. 22 000 kr./md. ved 35 000 kr. brutto.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 30 000 kr. netto?</p>
                <p>Kombinér høj anciennitet, skifteholds­tillæg og specialist­rolle i storby-mejeri.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension med i "løn efter skat"?</p>
                <p>Nej, de 13 % pensionsbidrag trækkes før skat og øger kun din samlede pakke.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer jeg topskat?</p>
                <p>Ved ca. 55 400 kr. brutto pr. måned (665 000 kr. årligt).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger mejerist løn efter skat typisk mellem 22 000 og 30 000 kr.. Overenskomst­trin, aften-/nattillæg og lav kommuneskat løfter hurtigst netto. Vil du se, hvad dine pasteuriseringer omsættes til på kontoen? Tjek <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – så er facit klart, før næste tank er fyldt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.nnf.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fødevareforbundet NNF – Lønsatser Mejeribranchens Fællesoverenskomst, marts 2024 Fødevareforbundet NNF</a></li>
              <li><a href="https://www.studentum.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Gennemsnitsløn for Mejerist 2025 Studentum</a></li>
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

export default MejeristLoenPage; 