import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const TandlaegeLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København (privat klinik)");
  
  const cityData = {
    "København (privat klinik)": { grossSalary: 70000, netMin: 45500, netMax: 46000 },
    "Aarhus": { grossSalary: 65000, netMin: 42700, netMax: 43200 },
    "Odense": { grossSalary: 60000, netMin: 39300, netMax: 39800 },
    "Aalborg": { grossSalary: 57000, netMin: 37200, netMax: 37700 },
    "Esbjerg": { grossSalary: 55000, netMin: 35900, netMax: 36400 },
    "Randers (kommunal)": { grossSalary: 50000, netMin: 32800, netMax: 33300 }
  };

  const experienceData = [
    { type: "Nyuddannet tandlæge (0–2 år)", grossSalary: 50000, netMin: 32800, netMax: 33300 },
    { type: "3–5 år", grossSalary: 60000, netMin: 39300, netMax: 39800 },
    { type: "6–8 år", grossSalary: 65000, netMin: 42700, netMax: 43200 },
    { type: "9–11 år", grossSalary: 70000, netMin: 45500, netMax: 46000 },
    { type: "Klinikejer / partner (12+ år)", grossSalary: 85000, netMin: 54900, netMax: 55400 }
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
        title="Hvad er Tandlæge Løn Efter Skat i 2025? Realistisk Overblik"
        description="Se realistiske estimater for tandlæge løn efter skat i 2025. Sammenlign byer, erfaring og ansættelsesformer – og beregn din nettoløn hurtigt."
        keywords="tandlæge løn efter skat 2025, tandlæge nettoløn, klinikejers indkomst, omsætningsbonus tandlæge, overenskomst tandlæge"
      />
      <Header />
      <PageTitle title="Tandlæge Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Tandlæge Løn Efter Skat 2025 – Fra Bor til Bankkonto 🦷💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat tandlæge i Danmark kan i 2025 forvente en tandlæge løn efter skat på cirka 30.000 – 46.000 kr. pr. måned. Nettolønnen afhænger af by, om du er kommunal, privat ansat eller klinikejer – samt din erfaring. Få et hurtigt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvor kommer pengene fra?</h2>
            <p>
              Tandlægers bruttoløn spænder fra den kommunale børne‑ og ungdomstandpleje over privat klinik til egen praksis med overskudsandel. Lønnen følger overenskomst mellem Tandlægeforeningen og Danske Regioner/KL for offentligt ansatte, mens private klinikker typisk lønner efter omsætning + bonus.
            </p>
            <p className="italic text-gray-600">
              Fun fact: En gennemsnitlig 30‑minutters fyldning kan betale din streamingtjeneste i to måneder – når skat og pension er fratrukket.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Tandlæge Løn – Før & Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / ansættelse</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Tandlæge løn efter skat*</th>
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
              *Estimater uden kirkeskat. Vil du have et personligt tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> efter din bruttoløn.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løntrappe – Fra kandidat til klinikejer</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / rolle</th>
                    <th className="py-3 px-4 border-b text-left">Brutto</th>
                    <th className="py-3 px-4 border-b text-left">Netto*</th>
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
              *Gns. kommuneskat 25 % + AM‑bidrag 8 %. Klinikejer‑netto kan variere efter selskabsskat/udbytte.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad kan booste (eller bore hul i) din tandlæge løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Omsætningsbonus</strong> – procent af faktureret arbejde (typisk 35–45 %).</li>
              <li><strong>Kommuneskat</strong> – op til 3 % forskel på nettolønnen.</li>
              <li><strong>Pension</strong> – 10–12 % arbejdsgiverbetalt sænker skattegrundlaget.</li>
              <li><strong>Efteruddannelse</strong> – implantologer og kirurger får +7–10 % i grundløn.</li>
              <li><strong>Egen praksis</strong> – overskudsandel, men du betaler selv forsikring & udstyr.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel: Tandlæge i Odense (60 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag 8 % ⇒</strong> 4 800 kr.</li>
                <li><strong>Skattepligtig indkomst ⇒</strong> 55 200 kr.</li>
                <li><strong>Personfradrag 4 650 kr. ⇒</strong> Beskatningsgrundlag 50 550 kr.</li>
                <li><strong>A‑skat ≈ 39 % ⇒</strong> 19 715 kr.</li>
                <li><strong>Tandlæge løn efter skat ≈</strong> 35 485 kr. (før pension)</li>
              </ul>
            </div>
            
            <p>
              Test dine egne tal på få sekunder i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Tandlæge Løn Efter Skat 🦷</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en tandlæge før skat?</p>
                <p>50 000 – 85 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er tandlæge løn efter skat 2025?</p>
                <p>Omkring 30 000 – 46 000 kr., afhængigt af kommune og ansættelsesform.</p>
              </div>
              <div>
                <p className="font-semibold">Er privat praksis bedre betalt?</p>
                <p>Ja, men risiko og udgifter er højere.</p>
              </div>
              <div>
                <p className="font-semibold">Betaler tandlæger topskat?</p>
                <p>De fleste passerer topskattegrænsen (618 400 kr./år, 2025).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 Boremaskine‑tips til højere nettoløn 📈</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag implantat‑ og kirurgisk efteruddannelse</strong> – +10 % lønløft.</li>
              <li><strong>Forhandl omsætningsprocent</strong> i privat klinik.</li>
              <li><strong>Optimer fradrag</strong> – befordring mellem klinikker, fagforening, kurser.</li>
              <li><strong>Overvej holdingselskab</strong> ved partnerskab for gunstig udbyttebeskatning.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger tandlæge løn efter skat typisk mellem 30 000 kr. og 46 000 kr. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at få et hurtigt, personligt estimat – og se, hvor meget der faktisk lander på din bankkonto, efter du har lagt borret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.tandlaegeforeningen.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tandlægeforeningen – Lønstatistik 2025</a></li>
              <li><a href="https://www.kl.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KL & Danske Regioner – Overenskomst 2024‑2026</a></li>
              <li><a href="https://www.jobindex.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex – Tandlæge lønbarometer 2025</a></li>
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

export default TandlaegeLoenPage; 