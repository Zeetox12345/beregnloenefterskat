import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LaegeLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 52000, netMin: 32500, netMax: 33000 },
    "Aarhus": { grossSalary: 50000, netMin: 31000, netMax: 31500 },
    "Odense": { grossSalary: 60000, netMin: 37300, netMax: 38000 },
    "Aalborg": { grossSalary: 58000, netMin: 36000, netMax: 36600 },
    "Rigshospitalet": { grossSalary: 92000, netMin: 56000, netMax: 57000 },
    "Randers": { grossSalary: 86000, netMin: 52000, netMax: 53000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "KBU (0-1 år)", grossSalary: 50000, netMin: 31000, netMax: 31500 },
    { type: "Intro-læge (1-3 år)", grossSalary: 55000, netMin: 34000, netMax: 34600 },
    { type: "HU, midtvejs (3-5 år)", grossSalary: 60000, netMin: 37300, netMax: 38000 },
    { type: "Ny speciallæge (5-8 år)", grossSalary: 74000, netMin: 45500, netMax: 46200 },
    { type: "Overlæge / teamleder (8+ år)", grossSalary: 92000, netMin: 56000, netMax: 57000 },
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
        title="Læge Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Læge løn efter skat 2025: Få realistiske estimater for KBU-læger, speciallæger og overlæger. Brug beregn løn efter skat for dit personlige tal."
        keywords="læge løn, læge løn efter skat, lægeløn, KBU løn, speciallæge løn, overlæge løn, lægeløn 2025"
      />
      <Header />
      <PageTitle title="Læge Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Læge Løn Efter Skat 2025 – Fra Stetoskop til Saldo </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat læge i Danmark kan i 2025 forvente en læge løn efter skat på omkring 32.000 – 58.000 kr. pr. måned, afhængigt af stilling (KBU, hoveduddannelse, speciallæge), vagter og region. Få et hurtigt, personligt estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvordan sammensættes lægelønnen?</h2>
            <p>
              Danske læger er omfattet af overenskomsten mellem Yngre Læger / Foreningen af Speciallæger og Regionerne. Lønnen består af:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Grundløn (trin 1-5 for yngre læger, 6-8 for speciallæger)</li>
              <li>Vagttillæg & timebank (aften, nat, weekend)</li>
              <li>Funktionstillæg (fx akutlæge, forskning, ledelse)</li>
              <li>Pension 17,2 % – indbetales før skat og påvirker din løn efter skat positivt</li>
            </ul>
            <p className="italic">
              Fun fact: Vagttillæg på en enkelt lørdagsnat kan dække din Netflix-konto et år – efter skat!
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn Efter Skat – Byer & Trin 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left border-b text-sm font-semibold">By / Stillingskategori</th>
                    <th className="px-4 py-3 text-left border-b text-sm font-semibold">Løn før skat</th>
                    <th className="px-4 py-3 text-left border-b text-sm font-semibold">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b">KBU-læge – København</td>
                    <td className="px-4 py-3 border-b">52.000 kr.</td>
                    <td className="px-4 py-3 border-b">32.500 – 33.000 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-b">KBU – Aarhus</td>
                    <td className="px-4 py-3 border-b">50.000 kr.</td>
                    <td className="px-4 py-3 border-b">31.000 – 31.500 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b">Hovedudd. læge – Odense</td>
                    <td className="px-4 py-3 border-b">60.000 kr.</td>
                    <td className="px-4 py-3 border-b">37.300 – 38.000 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-b">HU – Aalborg</td>
                    <td className="px-4 py-3 border-b">58.000 kr.</td>
                    <td className="px-4 py-3 border-b">36.000 – 36.600 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b">Speciallæge – Rigshospitalet</td>
                    <td className="px-4 py-3 border-b">92.000 kr.</td>
                    <td className="px-4 py-3 border-b">56.000 – 57.000 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-b">Speciallæge – Randers</td>
                    <td className="px-4 py-3 border-b">86.000 kr.</td>
                    <td className="px-4 py-3 border-b">52.000 – 53.000 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm italic">*Beregnet med gennemsnitlig kommuneskat (24,9 %) og AM-bidrag 8 %, uden kirkeskat. Se dit eget tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline">beregn løn efter skat</a>.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – læge løn efter skat vs. erfaring</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left border-b text-sm font-semibold">Stillings­trin / Erfaring</th>
                    <th className="px-4 py-3 text-left border-b text-sm font-semibold">Løn før skat</th>
                    <th className="px-4 py-3 text-left border-b text-sm font-semibold">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? 'bg-gray-50' : ''}>
                      <td className="px-4 py-3 border-b">{item.type}</td>
                      <td className="px-4 py-3 border-b">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-3 border-b">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aarhus – HU-læge)</h2>
            <div className="bg-gray-50 p-5 rounded-lg my-4">
              <ul className="list-none space-y-2">
                <li><strong>Løn før skat:</strong> 58.000 kr.</li>
                <li><strong>AM-bidrag 8 % ⇒</strong> 4.640 kr.</li>
                <li><strong>Skattepligtig indkomst ⇒</strong> 53.360 kr.</li>
                <li><strong>Personfradrag ⇒</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag ⇒</strong> 48.710 kr.</li>
                <li><strong>A-skat ≈ 37 % ⇒</strong> 18.000 kr.</li>
                <li><strong>Læge løn efter skat ≈</strong> 35.360 kr.</li>
              </ul>
              <p className="mt-3 text-sm">Vil du se effekten af flere vagter? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline">Beregn løn efter skat</a> med dine egne tal.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker læge løn efter skat mest?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left border-b text-sm font-semibold">Faktor</th>
                    <th className="px-4 py-3 text-left border-b text-sm font-semibold">Typisk udsving på løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b">Vagttimer</td>
                    <td className="px-4 py-3 border-b">+1.500 – 12.000 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-b">Region / kommuneskat</td>
                    <td className="px-4 py-3 border-b">± 650 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b">Ledelsesfunktion</td>
                    <td className="px-4 py-3 border-b">+3.000 – 5.000 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border-b">Privat praksis</td>
                    <td className="px-4 py-3 border-b">20-30 % højere før skat, men større udsving</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 måder at hæve din læge løn efter skat </h2>
            <ol className="list-decimal pl-6 my-4">
              <li className="mb-2"><strong>Tag højintensive vagter</strong> – helligdage & nat giver mest nettoløn pr. time.</li>
              <li className="mb-2"><strong>Subs. kursus & forskning</strong> – udløser funktionstillæg + indirekte karriereboost.</li>
              <li className="mb-2"><strong>Pendler mindre</strong> – flyt til lavere-skat kommune for +300-650 kr./md.</li>
              <li><strong>Bliv teamleder / overlæge</strong> – det store spring i løn efter skat kommer her.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Læge Løn Efter Skat</h2>
            <div className="space-y-4 my-6">
              <div className="border-b pb-3">
                <p className="font-semibold">Hvor meget får en nyuddannet læge efter skat?</p>
                <p>Ca. 32.000 kr./md. i KBU.</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-semibold">Hvad er læge løn efter skat som speciallæge?</p>
                <p>Typisk 52.000 – 57.000 kr./md., uden ydernummer.</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-semibold">Tæller pension med?</p>
                <p>Nej, de 17,2 % går før skat og påvirker ikke din løn efter skat direkte, men øger din langsigtede formue.</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-semibold">Hvordan når man 60.000 kr. efter skat?</p>
                <p>Kombinér overlæge­stillingen med privat sektor / ydre vagter eller partnerskab i klinik.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 spænder læge løn efter skat fra omkring 32.000 kr. (KBU) til 57.000 kr. (overlæge i hovedstaden). Med vagter og private honorarer kan beløbet ryge højere. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline">beregn løn efter skat</a> for et lynhurtigt estimat – og se, hvad der lander på kontoen, når kitlen hænges på knagen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 my-4">
              <li><a href="https://laeger.dk/foreninger/yngre-laeger/arbejdsliv-yngre-laeger/overenskomster-aftaler-yngre-laeger/region-overenskomst-yngre-laeger" target="_blank" rel="noopener noreferrer">Yngre Læger & FAS Overenskomst 2024-26</a></li>
              <li><a href="https://www.dst.dk/da/Statistik/emner/arbejde-og-indkomst/indkomst-og-loen/loen" target="_blank" rel="noopener noreferrer">Regionernes Lønstatistik 2025</a></li>
              <li><a href="https://www.jobindex.dk/jobsoegning/social/laege" target="_blank" rel="noopener noreferrer">Jobindex Lægeløn (feb 2025)</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommuneskat 2025</a></li>
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

export default LaegeLoenPage; 