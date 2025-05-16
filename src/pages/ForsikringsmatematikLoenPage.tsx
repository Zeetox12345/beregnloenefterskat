import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ForsikringsmatematikLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");

  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 60000, netMin: 38200, netMax: 38800 },
    "Aarhus": { grossSalary: 57000, netMin: 36300, netMax: 36900 },
    "Odense": { grossSalary: 54000, netMin: 34400, netMax: 34900 },
    "Aalborg": { grossSalary: 52000, netMin: 33200, netMax: 33700 },
    "Kolding": { grossSalary: 51000, netMin: 32500, netMax: 33000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Graduate Actuary (0-2 år)", grossSalary: 48000, netMin: 30500, netMax: 31000 },
    { type: "3-5 år (Associate / CERA)", grossSalary: 55000, netMin: 35000, netMax: 35500 },
    { type: "6-8 år (FIA / SII-specialist)", grossSalary: 62000, netMin: 39300, netMax: 39900 },
    { type: "9-11 år (Senior / Team Lead)", grossSalary: 68000, netMin: 42900, netMax: 43500 },
    { type: "12+ år (Chief Actuary)", grossSalary: 80000, netMin: 50000, netMax: 50600 },
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
        title="Forsikringsmatematik Løn Efter Skat 2025 – Se Realistiske Estimater"
        description="Hvad er løn efter skat for en aktuar eller forsikringsmatematiker i 2025? Se by- og erfaringstabeller og få et præcist estimat med din egen løn."
        keywords="forsikringsmatematik, aktuar, løn efter skat, 2025, lønberegner"
      />
      <Header />
      <PageTitle title="Forsikringsmatematik Løn Efter Skat 2025" />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Forsikringsmatematik Løn Efter Skat 2025 – Analyse, Risiko og Resultat</h1>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En cand.actuar eller cand.scient.oecon, der arbejder med forsikringsmatematik, kan i 2025 forvente en forsikringsmatematik løn efter skat på cirka 30 000 – 42 000 kr. pr. måned som fuldtidsansat i Danmark. Niveauet afhænger af erfaring, speciale (life, non-life, pensions-ALM) og om du arbejder i forsikringsselskab, konsulenthus eller FinTech. Beregn et præcist estimat med dine egne tal via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en forsikringsmatematikers løn efter skat?</h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg mb-6">
              <thead>
                <tr>
                  <th className="px-4 py-2">Lønfaktor</th>
                  <th className="px-4 py-2">Betydning</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Grundløn</td><td>Fastlagt i individuel kontrakt; Djøf-lønstatistik viser 50 000–80 000 kr./md. før skat for 0-10 års erfaring.</td></tr>
                <tr><td>Branchespænd</td><td>Konsulenthuse og FinTech starter 5-8 % højere før skat end klassiske selskaber, men bonusdelen er større.</td></tr>
                <tr><td>Bonus og overskudsdeling</td><td>5–15 % af årsløn ved målopfyldelse – varierer meget.</td></tr>
                <tr><td>Specialisering</td><td>Solvency II, IFRS 17 eller datavidenskab medfører funktions­tillæg på 3 000–5 000 kr./md. før skat.</td></tr>
                <tr><td>Pension 17 %</td><td>Arbejdsgiverbidrag trækkes før skat og forbedrer den samlede pakke.</td></tr>
                <tr><td>Kommuneskat</td><td>± 0,8 pct.point svarer til ± 700 kr./md. i løn efter skat.</td></tr>
              </tbody>
            </table>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn Efter Skat i de største byer – Forsikringsmatematik 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2">By</th>
                    <th className="px-4 py-2">Løn før skat</th>
                    <th className="px-4 py-2">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((row) => (
                    <tr key={row.city}>
                      <td className="px-4 py-2">{row.city}</td>
                      <td className="px-4 py-2">{row.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-2">{row.netMin.toLocaleString()} – {row.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic mb-8">
              *Beregnet med gennemsnitlig kommuneskat 24,9 % og AM-bidrag 8 %, uden kirkeskat. Få dit tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Forsikringsmatematik Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Erfaring / Rolle</th>
                    <th className="px-4 py-2">Løn før skat</th>
                    <th className="px-4 py-2">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((row) => (
                    <tr key={row.type}>
                      <td className="px-4 py-2">{row.type}</td>
                      <td className="px-4 py-2">{row.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-2">{row.netMin.toLocaleString()} – {row.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, senior aktuar</h2>
            <ul>
              <li>Bruttoløn: 57 000 kr.</li>
              <li>AM-bidrag 8 % → 4 560 kr.</li>
              <li>Skattepligtig indkomst → 52 440 kr.</li>
              <li>Personfradrag → 4 650 kr.</li>
              <li>Beskatningsgrundlag → 47 790 kr.</li>
              <li>A-skat (≈ 38 %) → 18 160 kr.</li>
              <li><strong>Forsikringsmatematik løn efter skat ≈ 34 280 kr.</strong></li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan øger du din nettoløn</h2>
            <ul>
              <li>Certificér dig (FIA, CERA): typisk +10 % før skat.</li>
              <li>Tag SII-rapportering eller IFRS 17-projekter – højt funktions­tillæg.</li>
              <li>Forhandl bonus baseret på Combined Ratio eller ROE-mål.</li>
              <li>Overvej bopæl i lav-skat kommune uden for hovedstaden.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Forsikringsmatematik Løn Efter Skat</h2>
            <ul>
              <li><strong>Hvad tjener en ny kandidat efter skat?</strong> Cirka 31 000 kr. pr. måned.</li>
              <li><strong>Hvornår når man 40 000 kr. efter skat?</strong> Typisk efter 6-8 års erfaring med specialiseret rolle eller ledelsesansvar.</li>
              <li><strong>Indgår pensionen i løn efter skat?</strong> Nej. 17 % arbejdsgiver­pension indbetales før skat.</li>
              <li><strong>Kan bonus påvirke topskat?</strong> Ja, bonus udbetales som almindelig løn og kan udløse topskat.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>I 2025 ligger forsikringsmatematik løn efter skat mellem 30 000 og 43 000 kr. afhængigt af erfaring, branche og kommune. Certificeringer, bonusordninger og lavere kommuneskat bidrager til en højere nettoløn. Indtast dine egne oplysninger i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget dine risikoanalyser og aktuarmodeller reelt giver på kontoen hver måned.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul>
              <li><a href="https://www.djoef.dk/loen-og-loenforhandling/djoefs-loenstatistikker" target="_blank" rel="noopener noreferrer">Djøf Lønstatistik 2025 – Aktuarer og finansielle analytikere</a></li>
              <li><a href="https://fogp.dk/nyheder/ny-overenskomst-for-medarbejderne-i-forsikrings-og-pensionsbranchen/" target="_blank" rel="noopener noreferrer">Forsikring & Pension – Lønundersøgelse 2025</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommuneskat 2025</a></li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-8">Opdateret: maj 2025.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForsikringsmatematikLoenPage; 