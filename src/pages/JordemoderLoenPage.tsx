import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const JordemoderLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København – Rigshospitalet": { grossSalary: 46000, netMin: 29300, netMax: 29800 },
    "Aarhus – Skejby": { grossSalary: 44000, netMin: 27900, netMax: 28400 },
    "Odense – OUH": { grossSalary: 42000, netMin: 26700, netMax: 27200 },
    "Aalborg – Sygehus Nord": { grossSalary: 41000, netMin: 26100, netMax: 26600 },
    "Esbjerg – SVS": { grossSalary: 40000, netMin: 25400, netMax: 25900 },
    "Randers – Regionshospitalet": { grossSalary: 40000, netMin: 25400, netMax: 25900 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (basis)", grossSalary: 36000, netMin: 23400, netMax: 23900 },
    { type: "3-5 år", grossSalary: 39000, netMin: 25300, netMax: 25800 },
    { type: "6-8 år (scannings-tillæg)", grossSalary: 42000, netMin: 26700, netMax: 27200 },
    { type: "9-11 år (hjemmefødsels­team)", grossSalary: 45000, netMin: 28600, netMax: 29100 },
    { type: "Afdelings­jordemoder / koordinator", grossSalary: 48000, netMin: 30500, netMax: 31000 },
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
        title="Jordemoder Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Hvad er jordemoder løn efter skat i 2025? Få realistiske estimater baseret på erfaring, vagter og kommune – og beregn dit personlige tal."
        keywords="jordemoder løn, jordemoder løn efter skat, jordemoderløn, jordemoder indkomst, jordemoder udbetalt, løn jordemoder 2025"
      />
      <Header />
      <PageTitle title="Jordemoder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Jordemoder Løn Efter Skat 2025 – Fra Fødestue til Finanskonto </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids jordemoder kan i 2025 forvente en jordemoder løn efter skat på ca. 23 000 – 30 000 kr. pr. måned. Beløbet varierer med kommune, anciennitet, vagt- og fødsels­tilkald, samt eventuel special- eller lederfunktion. Tjek dit tal lynhurtigt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad styrer en jordemoders løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Lønfaktor</th>
                    <th className="py-3 px-4 text-left border-b">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Grundløn</td>
                    <td className="py-3 px-4 border-b">Fastlagt i Jordemoder­foreningens overenskomst med Danske Regioner.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Vagttillæg</td>
                    <td className="py-3 px-4 border-b">Aften + 20 %, nat + 30 %, weekend + 45 % – kejsersnit kl. 03 giver god nettoløn.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Fødsels­tilkald & beredskab</td>
                    <td className="py-3 px-4 border-b">Betalt pr. døgn + timebetaling ved udrykning.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Funktions-/kvalifikations­tillæg</td>
                    <td className="py-3 px-4 border-b">Scannings- eller hjemmefødsels­team, koordinator (+1 500 – 3 000 kr./md. før skat).</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Pension 15 %</td>
                    <td className="py-3 px-4 border-b">Trækkes før skat og øger den samlede pakke.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">± 0,8 pct.point → op til ± 600 kr./md. i løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="italic text-gray-700 mb-8">
              Fun fact: Ét nattefødsels­forløb kan finansiere alle bleer til barselsgavekurven – efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Jordemoder Løn Efter Skat 2025</h2>

            {/* City-based salary table */}
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Kommune / Sygehus</th>
                    <th className="py-3 px-4 text-left border-b">Løn før skat</th>
                    <th className="py-3 px-4 text-left border-b">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((example, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 border-b">{example.city}</td>
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-3 px-4 border-b">{example.netMin.toLocaleString()} – {example.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-8">
              *Beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %, uden kirkeskat. Vil du kende dit udbetalings­tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a>.
            </p>

            {/* Experience-based salary table */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaring & Funktion – Jordemoder Løn Efter Skat</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aarhus – nattevagt, 44 000 kr.)</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Løn før skat: 44 000 kr.</li>
              <li>AM-bidrag 8 % → 3 520 kr.</li>
              <li>Skattepligtig indkomst → 40 480 kr.</li>
              <li>Personfradrag → 4 650 kr.</li>
              <li>Beskatningsgrundlag → 35 830 kr.</li>
              <li>A-skat (~ 37 %) → 13 260 kr.</li>
              <li>Jordemoder løn efter skat ≈ 27 220 kr.</li>
            </ul>

            <p className="mb-8">
              Vil du regne med flere weekend­tillæg eller lavere kommuneskat? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> – hurtigere end en CTG-udskrift.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 fødselshjælpere til højere løn efter skat </h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Tip</th>
                    <th className="py-3 px-4 text-left border-b">Nettoløns-løft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Tag nat- og hellig­vagter</td>
                    <td className="py-3 px-4 border-b">+800 – 3 000 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Bliv scannings-certificeret</td>
                    <td className="py-3 px-4 border-b">+1 500 – 2 500 kr./md.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Indtræd i hjemmefødsels­team</td>
                    <td className="py-3 px-4 border-b">+1 000 – 1 800 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til lav-skat kommune</td>
                    <td className="py-3 px-4 border-b">+300 – 600 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Jordemoder Løn Efter Skat</h2>
            <div className="mb-8">
              <p><strong>Hvad tjener en ny jordemoder efter skat?</strong> Ca. 24 000 kr./md.</p>
              <p><strong>Hvordan når jeg 30 000 kr. efter skat?</strong> Kombinér koordinator­funktion med nattevagter.</p>
              <p><strong>Tæller pension med?</strong> Nej – de 15 % indbetales før skat.</p>
              <p><strong>Hvornår rammer jeg topskat?</strong> Over ~63 000 kr. før skat – sjældent i kliniske stillinger.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p className="mb-8">
              I 2025 ligger jordemoder løn efter skat typisk mellem 23 000 – 30 000 kr.. Ulempe­tillæg, faglige tillæg og lav kommuneskat giver hurtige løn­løft. Vil du se, hvad dine fødselsskemaer omsættes til på kontoen? Hop ind på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et personligt estimat på under ét minut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc ml-6 mb-8">
              <li><a href="https://jordemoderforeningen.dk/loen-og-ansaettelse/overenskomst-og-aftaler/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jordemoderforeningen & Danske Regioner – Overenskomst 2024-26</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Jordemødre (maj 2025)</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommuneskat 2025</a></li>
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

export default JordemoderLoenPage; 