import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SundhedsplejerskeLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 46000, netMin: 29200, netMax: 29700 },
    "Aarhus": { grossSalary: 44000, netMin: 27800, netMax: 28300 },
    "Odense": { grossSalary: 42000, netMin: 26600, netMax: 27100 },
    "Aalborg": { grossSalary: 41000, netMin: 26000, netMax: 26500 },
    "Esbjerg": { grossSalary: 40000, netMin: 25400, netMax: 25900 },
    "Randers": { grossSalary: 40000, netMin: 25400, netMax: 25900 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet sygeplejerske på sundhedspleje‑intro (0‑2 år)", grossSalary: 36000, netMin: 23400, netMax: 23900 },
    { type: "3‑5 år", grossSalary: 39000, netMin: 25300, netMax: 25800 },
    { type: "6‑8 år (IBCLC / amme­specialist)", grossSalary: 42000, netMin: 26600, netMax: 27100 },
    { type: "9‑11 år (faglig koordinator)", grossSalary: 45000, netMin: 28500, netMax: 29000 },
    { type: "12+ år (teamleder)", grossSalary: 48000, netMin: 30400, netMax: 30900 },
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
        title="Sundhedsplejerske Løn Efter Skat 2025 – Se Realistiske Estimate"
        description="Sundhedsplejerske løn efter skat 2025: Se tabeller for erfaring, tillæg og kommuner. Beregn hurtigt dit eget personlige estimat online."
        keywords="sundhedsplejerske løn, sundhedsplejerske løn efter skat, løn sundhedsplejerske, sundhedsplejerske indkomst, sundhedsplejerske udbetalt, baby sundhedsplejerske"
      />
      <Header />
      <PageTitle title="Sundhedsplejerske Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Sundhedsplejerske Løn Efter Skat 2025 – Fra Babyvejning til Bankkonto 🍼💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids sundhedsplejerske i Danmark kan i 2025 forvente en sundhedsplejerske løn efter skat på 23 000 – 29 000 kr. om måneden. Beløbet afhænger især af kommune, anciennitet, tillæg for aften / weekendbesøg og om du har specialist‑ eller koordinator­funktion. Beregn dit helt eget estimat på under ét minut via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en sundhedsplejerskes løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b">Kommunernes Landsforening (KL) & DSR‑overenskomsten sætter baseline.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommune / Grundskat</td>
                    <td className="py-3 px-4 border-b">Hovedstads‑kommuner betaler lidt højere før skat, men har også højere kommuneskat.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Ulempe‑ og møde­planstillæg</td>
                    <td className="py-3 px-4 border-b">Besøg efter kl. 17 og i weekender udløser 22–45 % ekstra på timebetalingen.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Funktions‑/kvalifikations­tillæg</td>
                    <td className="py-3 px-4 border-b">Specialist i nyfødte, projektkoordinator, IBCLC‑certificering (+1 500 – 2 500 kr./md. før skat).</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Pension 15 %</td>
                    <td className="py-3 px-4 border-b">Trækkes før skat, hvilket reducerer skatte­grundlaget og løfter den samlede pakke.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="italic text-gray-700 mb-8">
              Fun fact: Ét enkelt lørdags­besøg i barselsperioden kan dække bleudgifterne for en hel uge – efter skat!
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Sundhedsplejerske Løn – Før & Efter Skat i 2025</h2>

            {/* City-based salary table */}
            <h3 className="text-xl font-semibold mt-6 mb-3">By‑tabel – Sundhedsplejerske Løn Efter Skat 2025</h3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Kommune</th>
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
              *Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat 24,9 % + AM‑bidrag 8 %. Vil du se dit tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a>.
            </p>

            {/* Experience-based salary table */}
            <h3 className="text-xl font-semibold mt-6 mb-3">Erfaring & Funktion – Sundhedsplejerske Løn Efter Skat</h3>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense – 42 000 kr.)</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Løn før skat: 42 000 kr.</li>
              <li>AM‑bidrag 8 % → 3 360 kr.</li>
              <li>Skattepligtig indkomst → 38 640 kr.</li>
              <li>Personfradrag → 4 650 kr.</li>
              <li>Beskatningsgrundlag → 33 990 kr.</li>
              <li>A‑skat (~ 37 %) → 12 600 kr.</li>
              <li>Sundhedsplejerske løn efter skat ≈ 26 040 kr.</li>
            </ul>

            <p className="mb-8">
              Vil du regne med flere weekend­tillæg eller lavere kommuneskat? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> tager under ét minut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 Smutveje til en højere løn efter skat 🚀</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Tip</th>
                    <th className="py-3 px-4 text-left border-b">Potentiel nettoløns‑løft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Tag aften‑/weekend­besøg</td>
                    <td className="py-3 px-4 border-b">+700 – 2 000 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Bliv IBCLC‑certificeret</td>
                    <td className="py-3 px-4 border-b">+1 000 – 1 800 kr./md.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Søg koordinator‑ eller projekt­rolle</td>
                    <td className="py-3 px-4 border-b">+1 500 – 2 500 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til lav‑skat kommune</td>
                    <td className="py-3 px-4 border-b">+300 – 600 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Sundhedsplejerske Løn Efter Skat ℹ️</h2>
            <div className="mb-8">
              <p><strong>Hvad tjener en ny sundhedsplejerske efter skat?</strong> Cirka 24 000 kr./md. uden ulempe­tillæg.</p>
              <p><strong>Hvordan rammer man 30 000 kr. efter skat?</strong> Specialist- eller teamleder­funktion + regelmæssige weekend­besøg.</p>
              <p><strong>Tæller pension i løn efter skat?</strong> Nej – den 15 % pension udbetales før skat.</p>
              <p><strong>Topskat?</strong> Nåes først over ~63 000 kr. før skat – sjældent i kommunal sundhedspleje.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p className="mb-8">
              I 2025 svinger sundhedsplejerske løn efter skat fra ≈ 23 000 kr. (nyuddannet) til ≈ 31 000 kr. (teamleder). Ulempe­tillæg, certificeringer og lav kommuneskat er de hurtigste veje til et højere udbetalingstal. Tjek <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, og find ud af, hvor meget vejning af babyer, hjemmebesøg og trivselssamtaler egentlig giver på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc ml-6 mb-8">
              <li><a href="https://dsr.dk/loen-og-arbejdsvilkaar/ok24/ok24-kommune/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DSR & KL – Sundhedsplejerskeaftalen 2024‑26</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Sundhedsplejersker (maj 2025)</a></li>
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

export default SundhedsplejerskeLoenPage; 