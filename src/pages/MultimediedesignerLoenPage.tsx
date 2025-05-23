import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const MultimediedesignerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Landsgennemsnit");
  
  // City-specific salary data
  const cityData = {
    "Landsgennemsnit": { grossSalary: 40300, netMin: 25500, netMax: 26000 },
    "Aarhus (Østjylland)": { grossSalary: 37300, netMin: 23800, netMax: 24300 },
    "Nedre kvartil (25%)": { grossSalary: 25800, netMin: 16700, netMax: 17100 },
    "Øvre kvartil (75%)": { grossSalary: 38700, netMin: 24500, netMax: 25000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Praktikant / Junior (0-1 år)", grossSalary: 26000, netMin: 17300, netMax: 17700 },
    { type: "2-3 år (Web-designer)", grossSalary: 30000, netMin: 19700, netMax: 20100 },
    { type: "4-6 år (UX/UI-specialist)", grossSalary: 34000, netMin: 22300, netMax: 22800 },
    { type: "7-9 år (Senior / Motion-designer)", grossSalary: 38000, netMin: 24900, netMax: 25400 },
    { type: "10+ år (Lead / Digital Art Director)", grossSalary: 42000, netMin: 27600, netMax: 28100 },
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
        title="Multimediedesigner Løn Efter Skat 2025 – Se Realistiske Tal"
        description="Hvad er multimediedesigner løn efter skat i 2025? By- og erfaringstabeller, beregningseksempel og link til beregner for dit personlige nettoløn-estimat."
        keywords="multimediedesigner løn, multimediedesigner løn efter skat, UX designer løn, web designer løn, motion designer løn, digital designer løn"
      />
      <Header />
      <PageTitle title="Multimediedesigner Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Multimediedesigner Løn Efter Skat 2025 – Design Dit Nettotal</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som fuldtids multimediedesigner (37 t/uge) kan du i 2025 forvente en løn før skat på ca. 26 000 – 40 000 kr. pr. måned. Efter AM-bidrag og normal A-skat svarer det til en multimediedesigner løn efter skat på omtrent 17 000 – 26 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer multimediedesigner løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-2 px-4 border-b text-left">Hvorfor det gør en forskel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Løn før skat</td>
                    <td className="py-2 px-4 border-b">HK/Privat-overenskomster + individuel forhandling. Nationalt gennemsnit ≈ 40 300 kr. <a href="https://www.erieri.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ERI Economic Research Institute</a></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Geografi</td>
                    <td className="py-2 px-4 border-b">Hovedstad/Østsjælland ligger typisk 5-8 % højere end lands­gennemsnittet; Vest- og Sydjylland lidt lavere.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Erfaring & rolle</td>
                    <td className="py-2 px-4 border-b">Junior web-designer, digital grafiker, UX-specialist, lead multimediedesigner – hvert trin har eget lønspænd.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Teknisk niche</td>
                    <td className="py-2 px-4 border-b">Frontend-frameworks, motion-graphics, UX research, 3D/AR kan give 1 000 – 3 000 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Bonus / freelancetimer</td>
                    <td className="py-2 px-4 border-b">Performance-bonus eller fakturering af overarbejde kan løfte nettoløn markant.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Pension 12–15 %</td>
                    <td className="py-2 px-4 border-b">Indbetales før skat og forbedrer pakken, men ses ikke i nettoløn.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-2 px-4 border-b">± 0,8 pct.point → ± 600 kr./md. netto.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Område­oversigt – Multimediedesigner Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Område</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((item, index) => (
                    <tr 
                      key={index} 
                      className={selectedCity === item.city ? "bg-blue-50" : ""}
                      onClick={() => setSelectedCity(item.city)}
                    >
                      <td className="py-2 px-4 border-b font-medium">{item.city}</td>
                      <td className="py-2 px-4 border-b">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-2 px-4 border-b">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">* Estimater med kommuneskat 24,9 % og AM-bidrag 8 %, uden kirkeskat.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Multimediedesigner Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Erfaring / Funktion</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b font-medium">{item.type}</td>
                      <td className="py-2 px-4 border-b">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-2 px-4 border-b">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – København, UX-specialist</h2>
            <div className="bg-gray-50 p-5 rounded-lg my-6">
              <p className="mb-2">Løn før skat: 34 000 kr.</p>
              <p className="mb-2">AM-bidrag 8 % → 2 720 kr.</p>
              <p className="mb-2">Skattepligtig indkomst → 31 280 kr.</p>
              <p className="mb-2">Personfradrag → 4 650 kr.</p>
              <p className="mb-2">Beskatningsgrundlag → 26 630 kr.</p>
              <p className="mb-2">A-skat (~ 37 %) → 9 850 kr.</p>
              <p className="font-bold">Multimediedesigner løn efter skat ≈ 21 430 kr.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Certificér dig i Google UX-Design, Figma Advanced eller Adobe After Effects – giver ofte 1-2 k kr./md. før skat.</li>
              <li>Skift branche til SaaS, FinTech eller e-commerce – 5-10 % højere løn før skat end bureau-gennemsnittet.</li>
              <li>Forhandl projekt- eller performancebonus (fx KPI-baseret ROAS eller konverteringsmål).</li>
              <li>Flyt til lav-skat kommune – op til 600 kr./md. mere i hånden uden ekstra timer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Multimediedesigner Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-2 px-4 border-b text-left">Svar kort</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Hvad tjener en ny multimediedesigner efter skat?</td>
                    <td className="py-2 px-4 border-b">Ca. 17 500 kr. pr. måned.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Hvornår når man 25 000 kr. efter skat?</td>
                    <td className="py-2 px-4 border-b">Typisk efter 6-8 års erfaring som UX- eller motion-specialist i privat sektor.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Tæller pension i løn efter skat?</td>
                    <td className="py-2 px-4 border-b">Nej, 12-15 % indbetales før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Kan bonus udløse topskat?</td>
                    <td className="py-2 px-4 border-b">Kun hvis samlet løn før skat overstiger ca. 63 000 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger multimediedesigner løn efter skat normalt mellem 17 000 og 26 000 kr., svarende til en løn før skat på 26 000 – 40 000 kr. Certificeringer, branchevalg og lav kommuneskat er de hurtigste håndtag, hvis du vil øge nettolønnen. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der reelt lander på kontoen for hvert pixel du sætter.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a href="https://www.indkomsten.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Indkomsten.dk</a> – Multimediedesigner gennemsnit 33 000 kr./md., lav/høj spænd 25,8 k/38,7 k (opdateret feb 2025)
              </li>
              <li>
                <a href="https://www.erieri.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ERI SalaryExpert</a> – Multimedia Designer, Denmark: gennemsnit 483 785 kr./år (≈ 40 315 kr./md.)
              </li>
              <li>
                <a href="https://www.erieri.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ERI SalaryExpert</a> – Multimedia Designer, Aarhus: gennemsnit 447 168 kr./år (≈ 37 264 kr./md.)
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

export default MultimediedesignerLoenPage; 