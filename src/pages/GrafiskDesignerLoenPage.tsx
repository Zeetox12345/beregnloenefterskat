import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const GrafiskDesignerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossMin: 33000, grossMax: 55000, netMin: 20000, netMax: 34000, taxRate: "23,5 %" },
    "Aarhus": { grossMin: 32000, grossMax: 50000, netMin: 20000, netMax: 32000, taxRate: "24,52 %" },
    "Odense": { grossMin: 30000, grossMax: 48000, netMin: 19000, netMax: 31000, taxRate: "25,50 %" },
    "Aalborg": { grossMin: 29000, grossMax: 46000, netMin: 18000, netMax: 29000, taxRate: "25,60 %" },
    "Esbjerg": { grossMin: 29000, grossMax: 45000, netMin: 18000, netMax: 28000, taxRate: "26,10 %" }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0 – 2 år)", grossSalary: 31000, netMin: 19000, netMax: 19500 },
    { type: "Mid-level (3 – 5 år)", grossSalary: 36000, netMin: 22000, netMax: 22500 },
    { type: "Senior / Lead", grossSalary: 42000, netMin: 26000, netMax: 26500 },
    { type: "Art Director, Cph.", grossSalary: 52000, netMin: 32000, netMax: 33000 }
  ];

  const cityExamples = useMemo(() => {
    return Object.entries(cityData).map(([city, data]) => {
      return {
        city,
        grossMin: data.grossMin,
        grossMax: data.grossMax,
        netMin: data.netMin,
        netMax: data.netMax,
        taxRate: data.taxRate
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Grafisk Designer Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en grafisk designer løn efter skat i 2025? Typisk 19 000 – 33 000 kr. udbetalt – før skat 31 000 – 52 000 kr. Beregn dit præcise nettotal hurtigt på beregn løn efter skat."
        keywords="grafisk designer løn, grafisk designer løn efter skat, designer løn, kreativ løn, grafiker løn"
      />
      <Header />
      <PageTitle title="Grafisk Designer Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Grafisk Designer Løn Efter Skat 2025 – Kreativitet der Betaler sig</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids grafisk designer (37 t/uge) tjener i 2025 typisk 31 000 – 52 000 kr. før skat. Det giver en grafisk designer løn efter skat på ca. 19 000 – 33 000 kr. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit præcise nettobeløb.
              </p>
            </div>

            <p>
              Grafisk design er en kreativ branche, hvor talent møder teknologi. Men hvor meget lander der egentlig på kontoen, når skattefar har taget sin del? I 2025 varierer grafisk designer løn efter skat betydeligt afhængigt af erfaring, specialisering og geografisk placering.
            </p>

            <p>
              Fra junior designere til erfarne art directors er der stor forskel på, hvad kreativiteten kaster af sig. Denne guide giver dig det fulde overblik over lønninger i designbranchen og viser, hvordan du kan optimere din nettoløn.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker grafisk designer løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Lønfaktor</th>
                    <th className="px-4 py-2 text-left border-b">Betydning for nettobeløbet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Grundløn</td>
                    <td className="px-4 py-2">National gennemsnit ≈ 38 600 kr./md.</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2 font-medium">Erfaring & rolle</td>
                    <td className="px-4 py-2">Junior → Senior: 30 k → 42 k; Art Director: 50 k +</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Specialkompetencer</td>
                    <td className="px-4 py-2">UI/UX, motion graphics eller 3D: +2 000 – 5 000 kr./md.</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2 font-medium">Branche</td>
                    <td className="px-4 py-2">Reklame & tech betaler 5 – 10 % over NGO/offentlig sektor</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Geografi</td>
                    <td className="px-4 py-2">København ligger ≈ 7 % højere end landsgennemsnittet</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2 font-medium">Bonus & freelance</td>
                    <td className="px-4 py-2">Projektbonus eller side-hustle kan øge brutto med 10 – 20 %</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">Pension 12 – 15 %</td>
                    <td className="px-4 py-2">Indbetales før skat – tæller ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Grafisk Designer</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Profil / erfaring</th>
                    <th className="px-4 py-2 text-left border-b">Løn før skat</th>
                    <th className="px-4 py-2 text-left border-b">≈ Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-2 font-medium">{item.type}</td>
                      <td className="px-4 py-2">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-2">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">By</th>
                    <th className="px-4 py-2 text-left border-b">Typisk løn før skat</th>
                    <th className="px-4 py-2 text-left border-b">≈ Løn efter skat**</th>
                    <th className="px-4 py-2 text-left border-b">Kommuneskat 2025</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((city, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? "bg-gray-50" : ""} ${selectedCity === city.city ? "ring-2 ring-blue-300" : ""} cursor-pointer hover:bg-blue-50`}
                      onClick={() => setSelectedCity(city.city)}
                    >
                      <td className="px-4 py-2 font-medium">{city.city}</td>
                      <td className="px-4 py-2">{city.grossMin.toLocaleString()} – {city.grossMax.toLocaleString()} kr.</td>
                      <td className="px-4 py-2">{city.netMin.toLocaleString()} – {city.netMax.toLocaleString()} kr.</td>
                      <td className="px-4 py-2">{city.taxRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              ** Nettobeløbene er beregnet på samme måde som ovenfor; kun kommunesatsen varierer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Mid-level designer (Aarhus)</h2>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left border-b">Post</th>
                      <th className="px-4 py-2 text-left border-b">Beløb</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-2 font-medium">Løn før skat</td>
                      <td className="px-4 py-2">36 000 kr.</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-2">AM-bidrag 8 %</td>
                      <td className="px-4 py-2">2 880 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">Skattepligtig indkomst</td>
                      <td className="px-4 py-2">33 120 kr.</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-2">Personfradrag</td>
                      <td className="px-4 py-2">4 650 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">Beskatningsgrundlag</td>
                      <td className="px-4 py-2">28 470 kr.</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-2">A-skat (≈ 37 %)</td>
                      <td className="px-4 py-2">10 540 kr.</td>
                    </tr>
                    <tr className="bg-green-100">
                      <td className="px-4 py-2 font-bold">Grafisk designer løn efter skat</td>
                      <td className="px-4 py-2 font-bold">≈ 22 600 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">1. Specialisér dig</h3>
                <p>UI/UX eller motion graphics – giver ofte 2 – 5 k ekstra pr. måned.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">2. Freelance-projekter</h3>
                <p>Timesatser på 450 – 700 kr. booster bruttolønnen.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">3. Opgradér til Art Director</h3>
                <p>Ledelsesansvar giver +8 – 10 k.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">4. Strategisk flytning</h3>
                <p>23,5 % vs. 26,1 % kan spare ~700 kr./md. netto.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Grafisk Designer Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Spørgsmål</th>
                    <th className="px-4 py-2 text-left border-b">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Hvad tjener en ny grafisk designer efter skat?</td>
                    <td className="px-4 py-2">Omkring 19 000 kr./md.</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2 font-medium">Kan jeg nå 30 000 kr. netto?</td>
                    <td className="px-4 py-2">Ja – som Art Director i storby + bonus/freelance.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Er freelance-indtægt skattepligtig?</td>
                    <td className="px-4 py-2">Ja, beskattes efter SKATs B-indkomst-regler.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">Indgår pension i nettolønnen?</td>
                    <td className="px-4 py-2">Nej – 12 – 15 % indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>
              I 2025 ligger grafisk designer løn efter skat oftest mellem 19 000 og 33 000 kr. pr. måned, svarende til 31 000 – 52 000 kr. før skat. Specialisering, storbyløn og side-projekter er de hurtigste knapper at dreje på for at hæve nettobeløbet. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget kreativiteten egentlig kaster af sig, når skatten er betalt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc pl-6">
              <li>SalaryExpert – Gennemsnitsløn grafisk designer Danmark (463 k kr./år)</li>
              <li>SalaryExpert – København +7 % over nationalt gennemsnit</li>
              <li>Studentum.dk – Grafisk designer gennemsnitsløn 45 008 kr./md.</li>
              <li>Indkomsten.dk – Grafiker løn ca. 34 500 kr./md.</li>
              <li>Skatteministeriet – Kommuneskat top 20 (2025): København 23,5 %, Aarhus 24,52 %, Esbjerg 26,10 % m.fl.</li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: juni 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GrafiskDesignerLoenPage; 