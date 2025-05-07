import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const CivilingeniørLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København (pharma & tech)": { grossSalary: 55000, netMin: 33300, netMax: 33800 },
    "Aarhus (IT & byggeri)": { grossSalary: 52000, netMin: 31500, netMax: 32000 },
    "Odense (robotics)": { grossSalary: 50000, netMin: 30400, netMax: 30900 },
    "Aalborg (energi)": { grossSalary: 48000, netMin: 29300, netMax: 29800 },
    "Esbjerg (offshore)": { grossSalary: 47000, netMin: 28700, netMax: 29200 },
    "Randers (produktion)": { grossSalary: 47000, netMin: 28700, netMax: 29200 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (basis)", grossSalary: 47400, netMin: 28900, netMax: 29400 },
    { type: "3-5 år (projektingeniør)", grossSalary: 52000, netMin: 31500, netMax: 32000 },
    { type: "6-8 år (senior / specialist)", grossSalary: 57000, netMin: 34300, netMax: 34800 },
    { type: "9-11 år (projektleder)", grossSalary: 62000, netMin: 37200, netMax: 37700 },
    { type: "Afdelingschef / teknisk leder", grossSalary: 68000, netMin: 40700, netMax: 41200 },
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
        title="Civilingeniør Løn Efter Skat 2025 – Hvad Får Du Udbetalt?"
        description="Se realistiske tal for civilingeniør løn efter skat i 2025. Sammenlign løn efter erfaring, by og branche – og beregn din egen udbetaling hurtigt."
        keywords="civilingeniør løn, løn efter skat, ingeniør løn, civilingeniør udbetalt løn, ingeniør løn efter skat, IDA løn, løn ingeniør"
      />
      <Header />
      <PageTitle title="Civilingeniør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Civilingeniør Løn Efter Skat 2025 – Fra CAD-skærm til Kontoudtog 💼📐💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – I 2025 ligger civilingeniør løn efter skat typisk mellem 29 000 – 41 000 kr. pr. måned. En nyuddannet med 47 400 kr. i startløn får ca. 29 000 kr. udbetalt, mens en erfaren leder med 68 000 kr. brutto rammer omkring 41 000 kr. Forskellen skyldes branche, anciennitet, bonus, pension og kommuneskat. Vil du kende dit præcise tal? Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – hurtigere end din næste FEM-simulering.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad styrer en civilingeniør løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Løn-driver</th>
                    <th className="px-4 py-2 border">Hvorfor den rykker på netto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Grundløn (IDA minimalløn: 47 400 kr.)</td>
                    <td className="px-4 py-2 border">Udgangspunkt for alle tillæg</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Branche</td>
                    <td className="px-4 py-2 border">Vind & energi +8 %, rådgivende ingeniør −4 %</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Anciennitet & specialistviden</td>
                    <td className="px-4 py-2 border">Certificering i fx Eurocodes giver 1 000–3 000 kr./md. før skat</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Bonus / resultatløn</td>
                    <td className="px-4 py-2 border">5 – 15 % af årsløn i privat sektor</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Pension (12–17 %)</td>
                    <td className="px-4 py-2 border">Betales før skat og sænker skattegrund­laget</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Kommuneskat (gns. 25,1 %)</td>
                    <td className="px-4 py-2 border">± 0,6 pct.point → op til 650 kr./md. netto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="italic">Fun fact: Ét vellykket bro-design kan finansiere din årlige softwarepakke – efter skat.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Civilingeniør Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">By / Region</th>
                    <th className="px-4 py-2 border">Løn før skat</th>
                    <th className="px-4 py-2 border">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-2 border">{item.city}</td>
                      <td className="px-4 py-2 border">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-2 border">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm">* Beregnet med AM-bidrag 8 %, personfradrag 4 300 kr./md. og gennemsnitlig kommuneskat 25,1 %. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for dine egne satser.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – Civilingeniør Løn Efter Skat vs. Erfaring</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Erfaring / Rolle</th>
                    <th className="px-4 py-2 border">Løn før skat</th>
                    <th className="px-4 py-2 border">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-2 border">{item.type}</td>
                      <td className="px-4 py-2 border">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-2 border">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm">Tallene er baseret på IDA's lønstatistik 2024/25 og AU-Engineering anbefalinger.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel</h2>
            <p className="font-medium">(Aalborg, senior specialist – 57 000 kr.)</p>

            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p>Løn før skat: 57 000 kr.</p>
              <p>AM-bidrag 8 %: 4 560 kr.</p>
              <p>Skattepligtig indkomst: 52 440 kr.</p>
              <p>Personfradrag: 4 300 kr.</p>
              <p>Beskatningsgrundlag: 48 140 kr.</p>
              <p>A-skat (~ 37 %): 17 800 kr.</p>
              <p className="font-bold">Civilingeniør løn efter skat ≈ 34 600 kr.</p>
            </div>

            <p>Vil du teste nat-tillæg eller lav-skat-kommune? Hop ind på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregneren</a> – hurtigere end at kompilere din næste Python-script.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 hurtige veje til højere civilingeniør løn efter skat 🚀</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Tip</th>
                    <th className="px-4 py-2 border">Nettoløft (typisk)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Spring på offshore-rotation eller nat-site</td>
                    <td className="px-4 py-2 border">+1 200 – 4 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Tag PMP eller PRINCE2-certifikat</td>
                    <td className="px-4 py-2 border">+1 500 – 2 500 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Specialisér dig i grøn energi / Power-to-X</td>
                    <td className="px-4 py-2 border">+1 000 – 3 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Flyt til kommune &lt; 24 % skat</td>
                    <td className="px-4 py-2 border">+300 – 650 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Civilingeniør Løn Efter Skat ℹ️</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Hvad tjener en ny civilingeniør efter skat?</h3>
                <p>Omkring 29 000 kr. pr. måned ved vejledende minimalløn.</p>
              </div>
              <div>
                <h3 className="font-semibold">Hvordan når jeg 40 000 kr. efter skat?</h3>
                <p>Ledelsesrolle + branchebonus (fx offshore, pharma) og eventuelt resultatløn.</p>
              </div>
              <div>
                <h3 className="font-semibold">Tæller pension med i løn efter skat?</h3>
                <p>Nej – de 12-17 % indbetales før skat og øger kun din samlede pakke.</p>
              </div>
              <div>
                <h3 className="font-semibold">Hvornår rammer jeg topskat?</h3>
                <p>Ved ca. 55 400 kr. pr. måned før AM-bidrag (665 000 kr. årligt).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger civilingeniør løn efter skat typisk 29 000 – 41 000 kr.. Ulempe­tillæg, specialist­viden og lavere kommuneskat løfter hurtigt netto. Vil du se, hvad dine FEM-modeller og Gantt-planer omsættes til på kontoen? Kør et personligt tjek på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – på under ét minut ved du, hvor meget der rent faktisk tikker ind hver måned.
            </p>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: maj 2025. Kilder: AU Engineering, IDA Lønstatistik 2024/25, Skatteministeriet.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CivilingeniørLoenPage; 