import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const StatsministerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 163181, netMin: 87500, netMax: 88500 },
    "Aarhus": { grossSalary: 163181, netMin: 88000, netMax: 89000 },
    "Odense": { grossSalary: 163181, netMin: 88500, netMax: 89500 },
    "Aalborg": { grossSalary: 163181, netMin: 89000, netMax: 90000 },
  };

  // Ministerial position salary data
  const ministerData = [
    { type: "Statsminister (125%)", grossSalary: 163181, netMin: 88000, netMax: 88000 },
    { type: "Finans-/Udenrigsminister (110%)", grossSalary: 143596, netMin: 78000, netMax: 78000 },
    { type: "Øvrige ministre (100%)", grossSalary: 130542, netMin: 71000, netMax: 71000 },
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
        title="Statsminister Løn Efter Skat 2025 – Se Det Reelle Beløb"
        description="Hvad tjener statsministeren efter skat i 2025? Se realistiske estimater og detaljeret beregning af løn efter skat – opdateret med nyeste satser."
        keywords="statsminister løn, statsminister løn efter skat, minister vederlag, ministerlønninger, statsministerløn"
      />
      <Header />
      <PageTitle title="Statsminister Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Statsminister Løn Efter Skat 2025 – Fra Folketing til Finansstatus 🇩🇰💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Med den seneste regulering (1. april 2025) er statsministerens årsløn før skat ≈ 1,96 mio. kr. (= 163 181 kr. pr. måned). Når AM-bidrag, kommune-, bund- og topskat er trukket, lander statsminister løn efter skat på cirka 88 000 kr. pr. måned. Få dit personlige efter-skat-tal – uanset lønniveau – via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvor kommer tallene fra?</h2>
            <p>
              Lov om ministervederlag fastsætter statsministerens vederlag til 125 % af minister-grundbeløbet <a href="https://www.medst.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">medst.dk</a>.
            </p>
            <p>
              Med reguleringsprocent pr. 1. april 2025 svarer det til 1 958 176 kr. årligt (163 181 kr./md.) <a href="https://www.regeringen.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Regeringen</a> <a href="https://www.nyheder24.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Nyheder24</a>.
            </p>
            <p>
              Tallene her er ekskl. pension (ca. 15 % før skat) og skattefri kørsels-/repræsentations­ydelser.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan beregnes statsminister løn efter skat (København 2025)</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    <th className="py-2 px-4 text-left">Post</th>
                    <th className="py-2 px-4 text-left">Beløb / sats</th>
                    <th className="py-2 px-4 text-left">Beregning</th>
                    <th className="py-2 px-4 text-left">Resultat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">Bruttoløn pr. md.</td>
                    <td className="py-2 px-4">163 181 kr.</td>
                    <td className="py-2 px-4">100 %</td>
                    <td className="py-2 px-4 font-semibold">163 181 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">AM-bidrag</td>
                    <td className="py-2 px-4">8 %</td>
                    <td className="py-2 px-4">163 181 × 0,08</td>
                    <td className="py-2 px-4">13 055 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">Skattepligtig indkomst</td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4">163 181 − 13 055</td>
                    <td className="py-2 px-4">150 126 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">Personfradrag</td>
                    <td className="py-2 px-4">4 650 kr.</td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4">− 4 650 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">Beskatningsgrundlag</td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4">145 476 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">A-skat*</td>
                    <td className="py-2 px-4">≈ 41 % total</td>
                    <td className="py-2 px-4">145 476 × 0,41</td>
                    <td className="py-2 px-4">59 600 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Løn efter skat</td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4">150 126 − 59 600</td>
                    <td className="py-2 px-4 font-semibold">≈ 88 000 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic mt-2">
              *A-skat samler kommune- (24,9 %), bund- (8,4 %) og topskat (12,1 % over 55 900 kr.) plus sundhedsbidrag. Kirkeskat er ikke medregnet.
            </p>

            <p className="mt-4">
              Vil du se effekten af en lavere kommuneskat eller topskat-grænsen på din løn? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et øjeblikkeligt estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Statsminister vs. andre ministre – Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    <th className="py-2 px-4 text-left">Ministerpost</th>
                    <th className="py-2 px-4 text-left">Bruttoløn/md.</th>
                    <th className="py-2 px-4 text-left">Estimeret løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">Statsminister</td>
                    <td className="py-2 px-4">163 181 kr.</td>
                    <td className="py-2 px-4 font-semibold">≈ 88 000 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4">Finans- / Udenrigsminister (110 %)</td>
                    <td className="py-2 px-4">143 596 kr.</td>
                    <td className="py-2 px-4">≈ 78 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Øvrige ministre (100 %)</td>
                    <td className="py-2 px-4">130 542 kr.</td>
                    <td className="py-2 px-4">≈ 71 000 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic mt-2">
              *Samme skatteforudsætninger som ovenfor.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker statsminister løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kommuneskat</strong> – ændrer nettolønnen ± 600 kr. pr. pct.point.</li>
              <li><strong>Pension 15 % før skat</strong> – sænker skatte­grundlaget, men udbetales først ved pension.</li>
              <li><strong>Topskat-satser</strong> – ændres hvis Folketinget vedtager nye grænser.</li>
              <li><strong>Reguleringsprocenten</strong> – regulerer alle offentlige lønninger årligt; næste justering 1. apr 2026.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Statsminister Løn Efter Skat ℹ️</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener statsministeren før skat?</p>
                <p>≈ 163 000 kr./md. i 2025.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er statsminister løn efter skat?</p>
                <p>≈ 88 000 kr./md. ved bopæl i København uden kirkeskat.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej – pensionsbidraget trækkes før skat og udbetales ved pensionering.</p>
              </div>
              <div>
                <p className="font-semibold">Rammer statsministeren topskat?</p>
                <p>Ja – hele indkomsten over 55 900 kr./md. beskattes med 12,1 % i topskat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Med en bruttoløn omkring 1,96 mio. kr. årligt betyder skatter og bidrag, at den reelle statsminister løn efter skat ligger lige under 90 000 kr. pr. måned. Vil du vide, hvordan din indkomst ser ud i samme skatte­system? Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Regeringen.dk – "Hvad tjener en minister?" (06.01.2025) <a href="https://www.regeringen.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Regeringen</a>
              </li>
              <li>
                Faktaark om ministervederlag 2025 (PDF, Medarbejder- og Kompetencestyrelsen) <a href="https://www.medst.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">medst.dk</a>
              </li>
              <li>
                Nyheder24 – Lønsats 163 181 kr./md. (maj 2025) <a href="https://www.nyheder24.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Nyheder24</a>
              </li>
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

export default StatsministerLoenPage; 