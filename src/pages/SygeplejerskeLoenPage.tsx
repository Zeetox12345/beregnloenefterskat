import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SygeplejerskeLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 44000, netMin: 28000, netMax: 28500 },
    "Aarhus": { grossSalary: 42000, netMin: 26800, netMax: 27300 },
    "Odense": { grossSalary: 40000, netMin: 25600, netMax: 26100 },
    "Aalborg": { grossSalary: 39000, netMin: 24900, netMax: 25400 },
    "Esbjerg": { grossSalary: 38000, netMin: 24300, netMax: 24800 },
    "Randers": { grossSalary: 38000, netMin: 24300, netMax: 24800 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (0-2 år)", grossSalary: 33000, netMin: 21400, netMax: 21800 },
    { type: "3-5 år", grossSalary: 36500, netMin: 23600, netMax: 24100 },
    { type: "6-8 år (special-tillæg)", grossSalary: 40000, netMin: 25600, netMax: 26100 },
    { type: "9-11 år (kandidat + tillæg)", grossSalary: 44000, netMin: 28000, netMax: 28500 },
    { type: "Afdelingssygeplejerske", grossSalary: 48000, netMin: 30700, netMax: 31200 },
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
        title="Din Sygeplejerske Løn Efter Skat 2025 – Hvad Får Du Udbetalt?"
        description="Hvor meget får en sygeplejerske efter skat? Se løntal og tillæg for 2025, og brug beregn løn efter skat til dit personlige estimat."
        keywords="sygeplejerske løn, sygeplejerske løn efter skat, sygeplejerskeløn, sygeplejerske indkomst, sygeplejerske udbetalt, løn sygeplejerske 2025"
      />
      <Header />
      <PageTitle title="Sygeplejerske Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Sygeplejerske Løn Efter Skat 2025 – Fra Stetoskop til Sparekonto 🩺💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat sygeplejerske får i 2025 en sygeplejerske løn efter skat på cirka 21 000 – 29 000 kr. pr. måned. Spændet afhænger af by, anciennitet, ulempe­tillæg (aften/nat/helligdag) og om du er special‑ eller afdelings­sygeplejerske. Beregn dit eget estimat lynhurtigt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad afgør din sygeplejerske løn efter skat?</h2>
            <ul className="list-disc ml-6 mb-6">
              <li><strong>Grundløn</strong> – reguleret af Dansk Sygeplejeråd (DSR) & Regionerne.</li>
              <li><strong>Ulempe‑ og vagt­tillæg</strong> – aften + 15 %, nat + 30 %, weekend + 45 %.</li>
              <li><strong>Funktions‑/kvalifikations­tillæg</strong> – intensiv, anæstesi eller stomisygepleje (+1 500 – 3 000 kr./md. før skat).</li>
              <li><strong>Ledelses­tillæg</strong> – afdelings‑/kliniksygeplejerske (+2 500 – 4 500 kr./md.).</li>
              <li><strong>Pension 15 %</strong> – trækkes før skat og øger din samlede pakke.</li>
              <li><strong>Region & kommuneskat</strong> – op til 0,8 pct.point forskel = ± 650 kr. i løn efter skat.</li>
            </ul>

            <p className="italic text-gray-700 mb-8">
              Fun fact: Én nattevagt hen over 1. januar kan give et tillæg svarende til hele januar‑licensen på dit streamingabonnement – efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Sygeplejerske Løn – Før & Efter Skat i 2025</h2>

            {/* City-based salary table */}
            <h3 className="text-xl font-semibold mt-6 mb-3">Løn Efter Skat – Byer 2025</h3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">By</th>
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
              *Beregn med gennemsnitlig kommuneskat (24,9 %) + AM‑bidrag 8 %, uden kirkeskat. Vil du kende dit tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a>.
            </p>

            {/* Experience-based salary table */}
            <h3 className="text-xl font-semibold mt-6 mb-3">Anciennitet & Rolle – Sygeplejerske Løn Efter Skat</h3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Erfaring / Funktion</th>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense – nattevagt, 40 000 kr.)</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Løn før skat: 40 000 kr.</li>
              <li>AM‑bidrag 8 % → 3 200 kr.</li>
              <li>Skattepligtig indkomst → 36 800 kr.</li>
              <li>Personfradrag → 4 650 kr.</li>
              <li>Beskatningsgrundlag → 32 150 kr.</li>
              <li>A‑skat (~ 37 %) → 11 900 kr.</li>
              <li>Sygeplejerske løn efter skat ≈ 24 900 kr.</li>
            </ul>

            <p className="mb-8">
              Vil du teste flere nattevagter eller lavere kommuneskat? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> og få et personligt estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 genveje til en større sygeplejerske løn efter skat 🚀</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Løftestrategi</th>
                    <th className="py-3 px-4 text-left border-b">Typisk nettoløns­gevinst</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Flere nat‑ & helligdags‑vagter</td>
                    <td className="py-3 px-4 border-b">+1 000 – 3 500 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Specialuddannelse (anæstesi, ICU)</td>
                    <td className="py-3 px-4 border-b">+1 500 – 2 500 kr./md.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Afdelings‑/kliniksygeplejerske</td>
                    <td className="py-3 px-4 border-b">+2 500 – 4 500 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til lav‑skat kommune</td>
                    <td className="py-3 px-4 border-b">+300 – 650 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Sygeplejerske Løn Efter Skat ℹ️</h2>
            <div className="mb-8">
              <p><strong>Hvor meget får en ny sygeplejerske udbetalt?</strong> Ca. 21 500 kr./md.</p>
              <p><strong>Kan jeg nå 30 000 kr. efter skat?</strong> Ja, med special­tillæg + faste nattevagter.</p>
              <p><strong>Tæller pension med i løn efter skat?</strong> Nej, de 15 % indbetales før skat.</p>
              <p><strong>Hvornår rammer man topskat?</strong> Først over ca. 63 000 kr. før skat – nås sjældent i basisstillinger.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p className="mb-8">
              I 2025 svinger sygeplejerske løn efter skat fra ≈ 21 000 kr. (nyuddannet dagvagt) til ≈ 31 000 kr. (afdelings­sygeplejerske med nattevagter). Vagt­tillæg, special­uddannelse og lavere kommuneskat er de hurtigste veje til flere penge på kontoen. Beregn dit eget beløb på under ét minut med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc ml-6 mb-8">
              <li>DSR & Regionerne – Overenskomst 2024‑26</li>
              <li>Jobindex Lønstatistik – Sygeplejersker (maj 2025)</li>
              <li>Skatteministeriet – Kommuneskat 2025</li>
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

export default SygeplejerskeLoenPage; 