import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BorgmesterLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data based on population groups
  const cityData = {
    "København": { grossSalary: 115400, netMin: 61000, netMax: 62000 },
    "Aarhus": { grossSalary: 115400, netMin: 61000, netMax: 62000 },
    "Odense": { grossSalary: 103100, netMin: 55000, netMax: 57000 },
    "Aalborg": { grossSalary: 103100, netMin: 55000, netMax: 57000 },
    "Esbjerg": { grossSalary: 92100, netMin: 49000, netMax: 51000 },
    "Randers": { grossSalary: 83900, netMin: 44000, netMax: 46000 },
    "Kolding": { grossSalary: 83900, netMin: 44000, netMax: 46000 },
    "Horsens": { grossSalary: 83900, netMin: 44000, netMax: 46000 },
    "Vejle": { grossSalary: 83900, netMin: 44000, netMax: 46000 },
    "Roskilde": { grossSalary: 83900, netMin: 44000, netMax: 46000 },
    "Herning": { grossSalary: 83900, netMin: 44000, netMax: 46000 },
    "Silkeborg": { grossSalary: 83900, netMin: 44000, netMax: 46000 },
    "Næstved": { grossSalary: 73700, netMin: 39000, netMax: 41000 },
    "Fredericia": { grossSalary: 73700, netMin: 39000, netMax: 41000 },
    "Viborg": { grossSalary: 73700, netMin: 39000, netMax: 41000 },
    "Køge": { grossSalary: 73700, netMin: 39000, netMax: 41000 },
  };

  // Population-based salary progression
  const populationData = [
    { type: "≤ 12 500 indb.", grossSalary: 73700, netMin: 39000, netMax: 41000 },
    { type: "12 501 – 25 000", grossSalary: 83900, netMin: 44000, netMax: 46000 },
    { type: "25 001 – 40 000", grossSalary: 92100, netMin: 49000, netMax: 51000 },
    { type: "40 001 – 80 000", grossSalary: 103100, netMin: 55000, netMax: 57000 },
    { type: "> 80 000 indb.", grossSalary: 115400, netMin: 61000, netMax: 62000 },
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
        title="Borgmester Løn Efter Skat 2025 – Se Reelle Nettobeløb"
        description="Hvad er borgmester løn efter skat i 2025? Få overblik over vederlag, topskat og kommunestørrelser. Beregn dit nettobeløb hurtigt og præcist online."
        keywords="borgmester løn, borgmester løn efter skat, borgmestervederlag, kommunal løn, borgmester nettoløn"
      />
      <Header />
      <PageTitle title="Borgmester Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Borgmester Løn Efter Skat 2025 – Offentlig Topløn i Nettotal</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – I 2025 ligger en løn før skat for danske borgmestre på cirka 74 000 – 115 000 kr. pr. måned alt efter kommunens størrelse. Efter AM-bidrag og normal indkomst- + topskat giver det en borgmester løn efter skat på omtrent 39 000 – 62 000 kr. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at finde din præcise nettoløn – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en borgmester løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    <th className="py-2 px-4 text-left">Lønfaktor</th>
                    <th className="py-2 px-4 text-left">Hvorfor det gør en forskel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4 font-semibold">Løn før skat</td>
                    <td className="py-2 px-4">Fast "borgmestervederlag" reguleret af staten og opdelt i fem befolknings­grupper.</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4 font-semibold">Kommunestørrelse</td>
                    <td className="py-2 px-4">Flere indbyggere → højere vederlag (op til 1,38 mio. kr. årligt i de største kommuner).</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4 font-semibold">AM-bidrag & topskat</td>
                    <td className="py-2 px-4">Hele vederlaget er A-indkomst: 8 % arbejdsmarkeds­bidrag + kommuneskat + topskat på al indkomst over topskattegrænsen.</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4 font-semibold">Pension (15 %)</td>
                    <td className="py-2 px-4">Kommunen indbetaler ca. 15 % oven i lønnen – forbedrer pakken, men ses ikke i nettoløn.</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2 px-4 font-semibold">Kommuneskat</td>
                    <td className="py-2 px-4">± 0,8 pct-point svarer til ± 650 kr./md. i nettoløn.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Eftervederlag</td>
                    <td className="py-2 px-4">Ved fratrædelse kan der udbetales op til 12 måneder ekstra, men det beskattes som almindelig løn.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Borgmester Løn Før & Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    <th className="py-2 px-4 text-left">Befolknings­gruppe</th>
                    <th className="py-2 px-4 text-left">Løn før skat (år)</th>
                    <th className="py-2 px-4 text-left">Løn før skat (md.)</th>
                    <th className="py-2 px-4 text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {populationData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="py-2 px-4">{item.type}</td>
                      <td className="py-2 px-4">{(item.grossSalary * 12).toLocaleString("da-DK")} kr.</td>
                      <td className="py-2 px-4">{item.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-2 px-4 font-semibold">{item.netMin.toLocaleString("da-DK")} – {item.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic mt-2">
              * Nettotal beregnet med 8 % AM-bidrag, gennemsnitlig kommuneskat 24,9 % og fuld topskat på resterende beløb. Kør dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et nøjagtigt resultat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel – Borgmester i en mellemstor kommune (ca. 50 000 indbyggere)</h2>
            <div className="bg-gray-50 p-4 rounded-lg my-6">
              <p><strong>Løn før skat:</strong> 1 236 945 kr./år = 103 078 kr./md.</p>
              <p><strong>AM-bidrag 8 %</strong> → 8 246 kr.</p>
              <p><strong>Skattepligtig indkomst</strong> → 94 832 kr.</p>
              <p><strong>Personfradrag</strong> → 4 650 kr.</p>
              <p><strong>Beskatningsgrundlag</strong> → 90 182 kr.</p>
              <p><strong>A-skat & topskat (≈ 43 %)</strong> → 38 478 kr.</p>
              <p className="font-semibold text-lg mt-2"><strong>Borgmester løn efter skat ≈ 56 400 kr.</strong></p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at optimere nettolønnen</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flyt bopæl til lav-skat kommune</strong> – kan løfte nettolønnen med op til 650 kr./md.</li>
              <li><strong>Udnyt pensions­loftet</strong> – ekstra pensionsindbetalinger beskattes lempeligere end kontant løn.</li>
              <li><strong>Fradrag for erhvervsudgifter</strong> – fx egenfinansieret repræsentation eller efteruddannelse.</li>
              <li><strong>Planlæg eftervederlag</strong> – overgang til nyt job efter valg kan times for at undgå dobbelt topskat.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Borgmester Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en lille-kommunes borgmester efter skat?</p>
                <p>Omkring 40 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Og en Københavns-borgmester?</p>
                <p>Cirka 62 000 kr./md. med nuværende satser.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej – pension (≈ 15 %) indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Er borgmestervederlag topskatte-pligtigt?</p>
                <p>Ja, hele beløbet over topskattegrænsen på 63 300 kr./md. beskattes med 15 % ekstra.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 spænder borgmester løn efter skat fra ca. 39 000 til 62 000 kr. pr. måned, baseret på en løn før skat på 74 000 – 115 000 kr. Kommunens indbyggertal, lokal skatteprocent og pensionsaftale er de største variabler. Indtast dine egne tallene i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få det konkrete nettobeløb – så ved du, hvor meget der er tilbage, når byrådet er lukket og budgettet er vedtaget.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indenrigs- og Sundhedsministeriet – "Oversigter over vederlag til kommunal- og regionalpolitikere, pr. 1. april 2025"</li>
              <li>Aarhus Kommune – Årligt borgmestervederlag 1 384 513 kr. (2025-niveau)</li>
              <li>Assens Kommune – Borgmestervederlag 1 236 945 kr. (1/4-2025)</li>
              <li>Silkeborg Kommune – Borgmestervederlag fastsat efter indbyggertal 1 384 513 kr.</li>
              <li>Danske Kommuner – Artikel om eftervederlag for fratrædte borgmestre (23-10-2024)</li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: januar 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BorgmesterLoenPage; 