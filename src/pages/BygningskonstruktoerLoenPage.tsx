import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BygningskonstruktoerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 46000, netMin: 30000, netMax: 30500 },
    "Aarhus": { grossSalary: 44000, netMin: 28700, netMax: 29200 },
    "Odense": { grossSalary: 42000, netMin: 27400, netMax: 27900 },
    "Aalborg": { grossSalary: 41000, netMin: 26700, netMax: 27200 },
    "Esbjerg": { grossSalary: 40000, netMin: 26000, netMax: 26500 },
    "Randers": { grossSalary: 40000, netMin: 26000, netMax: 26500 },
    "Vejle": { grossSalary: 42000, netMin: 27500, netMax: 28000 }
  };

  const experienceData = [
    { type: "Nyuddannet (0–2 år)", grossSalary: 35000, netMin: 23300, netMax: 23800 },
    { type: "3–5 år", grossSalary: 38000, netMin: 25300, netMax: 25800 },
    { type: "6–8 år", grossSalary: 41000, netMin: 27300, netMax: 27800 },
    { type: "9–11 år (projektleder)", grossSalary: 44000, netMin: 29100, netMax: 29600 },
    { type: "12+ år (chefkonstruktør)", grossSalary: 48000, netMin: 31600, netMax: 32100 }
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
        title="Bygningskonstruktør Løn 2025 – Se Din Løn Efter Skat Nu"
        description="Hvad får du som bygningskonstruktør efter skat? Se løntabeller for 2025 og få et estimat med beregn løn efter skat. Opdateret med nye overenskomster."
        keywords="bygningskonstruktør løn efter skat, projektleder tillæg, BIM-specialist løn, bygningskonstruktør overenskomst, site supervisor løn"
      />
      <Header />
      <PageTitle title="Bygningskonstruktør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Bygningskonstruktør Løn Efter Skat 2025 – Fra Tegnebræt til Trækonto</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som fuldtidsansat bygningskonstruktør kan du i 2025 forvente en bygningskonstruktør løn efter skat på ca. 24.000 – 29.000 kr. pr. måned. Beløbet afhænger af by, erfaring, om du arbejder i rådgiverbranchen eller som entreprenør, samt eventuelle projekt‑ og ledertillæg. Få dit eget estimat lynhurtigt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvor kommer pengene fra?</h2>
            <p>
              Bygningskonstruktører kombinerer praktik og projektering: de tegner BIM‑modeller, sikrer myndighedsgodkendelser og koordinerer byggepladsen. Lønnen følger typisk Teknik & Design‑overenskomsten (KF & DI) hos rådgivende ingeniører eller entreprenører, men stiger markant med projektleder‑ og KS‑roller.
            </p>
            <p className="italic text-gray-600">
              Fun fact: Ét veludført energiramme‑beregning kan betale din kaffemaskine – efter skatten er betalt, vel at mærke.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk By / Branche – Løn Før & Løn Efter Skat 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((example) => (
                    <tr 
                      key={example.city} 
                      className={`hover:bg-gray-50 ${example.city === selectedCity ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedCity(example.city)}
                    >
                      <td className="py-3 px-4 border-b">{example.city}</td>
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              *Estimater uden kirkeskat. Vil du se et personligt tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> efter din bruttoløn.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – sådan udvikler bygningskonstruktør løn efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr 
                      key={exp.type} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{exp.type}</td>
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              *Gennemsnitlig kommuneskat 25 % + AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Værktøj til højere bygningskonstruktør løn efter skat 🔧</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Projektleder‑tillæg</strong> – 3‑7 % ekstra pr. projekt.</li>
              <li><strong>BIM‑specialist</strong> – Revit/Navisworks certifikat ⇒ +1.500‑2.500 kr./md.</li>
              <li><strong>Site supervisor nattillæg</strong> – op til +50 % på skæve timer.</li>
              <li><strong>Kommuneskat</strong> – forskel op til 650 kr./md. på nettoløn.</li>
              <li><strong>Pension 10 %</strong> – indbetales før skat og sænker skatte­grundlaget.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aalborg – 41 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag 8 % ⇒</strong> 3 280 kr.</li>
                <li><strong>Skattepligtig indkomst ⇒</strong> 37 720 kr.</li>
                <li><strong>Personfradrag ⇒</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag ⇒</strong> 33 070 kr.</li>
                <li><strong>A‑skat (≈ 36 %) ⇒</strong> 11 900 kr.</li>
                <li><strong>Bygningskonstruktør løn efter skat ≈</strong> 25 820 kr.</li>
              </ul>
            </div>
            
            <p>
              Regn med dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et øjeblikkeligt estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Bygningskonstruktør Løn Efter Skat 🏗️</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en bygningskonstruktør før skat?</p>
                <p>35 000 – 48 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er bygningskonstruktør løn efter skat 2025?</p>
                <p>Omkring 24 000 – 30 500 kr., afhængigt af by og rolle.</p>
              </div>
              <div>
                <p className="font-semibold">Giver privat byggeri bedre løn?</p>
                <p>Ja, især med bonus for overskud og tid.</p>
              </div>
              <div>
                <p className="font-semibold">Topskat?</p>
                <p>Nåes typisk først omkring chefkonstruktør‑niveau.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 Trin til en stærkere løn efter skat 🚀</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Bliv BIM‑ninja</strong> – softwarecertifikater giver løft.</li>
              <li><strong>Forhandl projektleder‑tillæg tidligt.</strong></li>
              <li><strong>Registrér fradrag</strong> – befordring mellem byggepladser, fagforening.</li>
              <li><strong>Tag komplekse renoveringsprojekter</strong> – højere honorar.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 får en bygningskonstruktør typisk 24 000 – 29 000 kr. i løn efter skat. Med projektleder‑tillæg og BIM‑certifikater kan tallet komme over 30 000 kr. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for dit personlige estimat og se, hvor meget dine tegninger faktisk indbringer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.kf.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Teknik & Design‑overenskomst – KF & DI 2024‑2026</a></li>
              <li><a href="https://www.jobindex.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex – Bygningskonstruktør lønstatistik 2025</a></li>
              <li><a href="https://www.dst.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, bygge & anlæg</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025 (skm.dk)</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BygningskonstruktoerLoenPage; 