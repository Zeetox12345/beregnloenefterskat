import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LaegesekretaerLoenPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("Hovedstaden (Rigshospitalet)");

  // Region-specific salary data
  const regionData = {
    "Hovedstaden (Rigshospitalet)": { grossSalary: 40000, netMin: 25200, netMax: 25700 },
    "Midtjylland (Skejby)": { grossSalary: 38000, netMin: 24000, netMax: 24500 },
    "Syddanmark (OUH)": { grossSalary: 36500, netMin: 23100, netMax: 23600 },
    "Nordjylland (Aalborg)": { grossSalary: 35500, netMin: 22400, netMax: 22900 },
    "Sjælland (Roskilde)": { grossSalary: 35000, netMin: 22100, netMax: 22600 },
    "Bornholm (Rønne)": { grossSalary: 34000, netMin: 21400, netMax: 21900 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (trin 1)", grossSalary: 31000, netMin: 20600, netMax: 21000 },
    { type: "3-4 år", grossSalary: 33000, netMin: 21900, netMax: 22300 },
    { type: "5-7 år", grossSalary: 35000, netMin: 23000, netMax: 23500 },
    { type: "8-10 år (kodningstillæg)", grossSalary: 37000, netMin: 24200, netMax: 24700 },
    { type: "11+ år (senior / koordinator)", grossSalary: 40000, netMin: 25200, netMax: 25700 },
  ];

  const regionExamples = useMemo(() => {
    return Object.entries(regionData).map(([region, data]) => {
      return {
        region,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Lægesekretær Løn Efter Skat 2025 – Tal, Tillæg og Estimater"
        description="Hvad er din løn efter skat som lægesekretær? Få opdaterede tal for 2025 med byer, tillæg og funktioner. Beregn hurtigt dit eget estimat."
        keywords="lægesekretær løn, lægesekretær løn efter skat, lægesekretær indkomst, lægesekretær 2025"
      />
      <Header />
      <PageTitle title="Lægesekretær Løn Efter Skat 2025" />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Lægesekretær Løn Efter Skat 2025 – Det Fuldstændige Overblik</h1>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat lægesekretær kan i 2025 forvente en lægesekretær løn efter skat på ca. 19 000 – 24 000 kr. pr. måned. Niveauet afhænger af region, anciennitet, funktionstillæg (fx kodning eller bookingsupport) samt skifteholds- og ulempetillæg. Få et præcist estimat for din situation via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en lægesekretærs løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Lønfaktor</th>
                    <th className="py-3 px-4 text-left border-b">Betydning for udbetaling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Grundløn</td>
                    <td className="py-3 px-4 border-b">Fastlagt af HK Kommunal/Regionernes overenskomst.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Funktionstillæg</td>
                    <td className="py-3 px-4 border-b">Særligt for DRG-kodning, EPJ-superbruger, forskning eller kontaktperson-rolle (1 000 – 2 500 kr./md. før skat).</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Ulempe-/skifteholds­tillæg</td>
                    <td className="py-3 px-4 border-b">Aften +17 %, nat +30 %, weekend +45 %.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Erfaring</td>
                    <td className="py-3 px-4 border-b">Automatiske løntrin hvert andet år de første 8 år.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Pension 15 %</td>
                    <td className="py-3 px-4 border-b">Betales før skat og forbedrer den samlede pakke.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel – ≈ ± 600 kr./md. i løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionstabel – Lægesekretær Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Region / Sygehus</th>
                    <th className="py-3 px-4 text-left border-b">Løn før skat</th>
                    <th className="py-3 px-4 text-left border-b">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {regionExamples.map((example, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 border-b">{example.region}</td>
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-3 px-4 border-b">{example.netMin.toLocaleString()} – {example.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-8">
              * Beregnet ved gennemsnitlig kommuneskat 24,9 % og AM-bidrag 8 %, uden kirkeskat. For dit eksakte tal: <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Lægesekretær Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Erfaring / Rolle</th>
                    <th className="py-3 px-4 text-left border-b">Løn før skat</th>
                    <th className="py-3 px-4 text-left border-b">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 border-b">{item.type}</td>
                      <td className="py-3 px-4 border-b">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-3 px-4 border-b">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Region Syddanmark, dagvagt</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Bruttoløn: 36 500 kr.</li>
              <li>AM-bidrag 8 %: 2 920 kr.</li>
              <li>Skattepligtig indkomst: 33 580 kr.</li>
              <li>Personfradrag: 4 650 kr.</li>
              <li>Beskatningsgrundlag: 28 930 kr.</li>
              <li>A-skat (~ 37 %): 10 700 kr.</li>
              <li>Lægesekretær løn efter skat: ≈ 22 800 kr.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan kan du løfte din lægesekretær løn efter skat</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Opnå DRG-kodningscertifikat – værdifuldt for sygehuse, giver tillæg.</li>
              <li>Påtag dig skifteholds­vagter – nat og weekend øger udbetalingen markant.</li>
              <li>Søg koordinator-/EPJ-superbruger­rolle – typisk 1 500 – 2 000 kr./md. før skat.</li>
              <li>Vælg lav kommuneskat, hvis mobiliteten tillader det.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Lægesekretær Løn Efter Skat</h2>
            <div className="mb-8">
              <p><strong>Hvad tjener en ny lægesekretær efter skat?</strong> Omkring 21 000 kr. pr. måned.</p>
              <p><strong>Hvornår kan jeg nå 25 000 kr. efter skat?</strong> Med 8-10 års erfaring, funktions­tillæg og eventuelt nat- eller weekendarbejde.</p>
              <p><strong>Indgår pension i løn efter skat?</strong> Nej, pensions­bidraget på 15 % indbetales før skat.</p>
              <p><strong>Rammer jeg topskat?</strong> Kun ved leder-eller specialiststillinger over ca. 63 000 kr. før skat, hvilket er usædvanligt i denne funktion.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p className="mb-8">
              I 2025 ligger lægesekretær løn efter skat typisk mellem 19 000 og 24 000 kr. Skifteholds­tillæg, certificeringer og lave kommuneskatte­procenter er de hurtigste veje til en højere udbetaling. Indtast din egen løn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et nøjagtigt billede af, hvad der lander på kontoen hver måned.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc ml-6 mb-8">
              <li><a href="https://www.hk.dk/omhk/sektor/kommunal/overenskomstforhandlinger" target="_blank" rel="noopener noreferrer">HK Kommunal & Danske Regioner – Overenskomst 2024-26</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen/laegesekretaer" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Lægesekretærer, maj 2025</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommunesatser 2025</a></li>
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

export default LaegesekretaerLoenPage; 