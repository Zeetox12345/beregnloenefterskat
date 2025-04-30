import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const TaxachauffoerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København (myldretid + nat)");
  
  const cityData = {
    "København (myldretid + nat)": { grossSalary: 33000, netMin: 22000, netMax: 22500 },
    "Aarhus": { grossSalary: 32000, netMin: 21200, netMax: 21700 },
    "Odense": { grossSalary: 31000, netMin: 20500, netMax: 21000 },
    "Aalborg": { grossSalary: 30000, netMin: 19800, netMax: 20300 },
    "Esbjerg": { grossSalary: 29500, netMin: 19400, netMax: 19900 }
  };

  const experienceData = [
    { type: "Rookie (2 000 km)", grossSalary: 28000, netMin: 18500, netMax: 19000 },
    { type: "Erfaren (3 000 km)", grossSalary: 31000, netMin: 20500, netMax: 21000 },
    { type: "Myldretids‑mester (3 800 km)", grossSalary: 34000, netMin: 22300, netMax: 22800 }
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
        title="Hvad er Taxachauffør Løn Efter Skat i 2025? Se Realistiske Estimater Her"
        description="Få overblik over din taxachauffør løn efter skat 2025 – med eksempler for byer, skiftehold og kilometertal. Beregn dit eget estimat på få sekunder."
        keywords="taxachauffør løn efter skat 2025, taxi indkomst, taxa nettoløn, procent af omsætning, chauffør nattetillæg"
      />
      <Header />
      <PageTitle title="Taxachauffør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Taxachauffør Løn Efter Skat 2025 – Fra Rat til Resultat 🚕📊</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – De fleste danske taxachauffører tjener i 2025 en taxachauffør løn efter skat på cirka 18.000 – 22.000 kr. pr. måned. Nettolønnen afhænger af by, vognmandssystem (fast timeløn vs. procent), skiftehold og drikkepenge. Få et hurtigt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvordan fastsættes en taxachaufførs løn?</h2>
            <p>
              Taxachauffører aflønnes typisk på én af to måder:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Fast timeløn</strong> – overenskomst via 3F Transport (175–190 kr./t) + tillæg.</li>
              <li><strong>Procent af omsætning</strong> – du beholder fx 42 % af taksameteret efter brændstof.</li>
            </ul>
            <p>
              Nettolønnen svinger derfor mere end ved klassiske 37‑timers jobs, og taxachauffør løn efter skat varierer markant mellem myldretid i København og natkørsel i provinsen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typiske 2025‑tal – Før & Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Base/by</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Taxachauffør løn efter skat*</th>
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
              *Estimater uden kirkeskat. Vil du se et personligt tal? Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> med din løn.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn vs. kilometertal – (erfaring × turvolumen)</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / km pr. måned</th>
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
              *Gns. kommuneskat 25 % + AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad booster (eller bremser) din taxachauffør løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Skiftehold</strong> – nattillæg +35 %, weekend +50 %.</li>
              <li><strong>Drikkepenge</strong> – beskattes, men hæver nettoløn 500–1.200 kr./md.</li>
              <li><strong>Brændstofaftale</strong> – lav dieselpris = højere procentløn.</li>
              <li><strong>Kommuneskat</strong> – forskel på 3 % mellem billig og dyr kommune.</li>
              <li><strong>El‑taxi 🚗⚡</strong> – lavere brændstof → højere andel til chaufføren.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel: Netto på natkørsel i Odense (31.000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag 8 % ⇒</strong> 2.480 kr.</li>
                <li><strong>Skattepligtig indkomst ⇒</strong> 28.520 kr.</li>
                <li><strong>Personfradrag 4.650 kr. ⇒</strong> Beskatningsgrundlag 23.870 kr.</li>
                <li><strong>A‑skat ≈ 34,5 % ⇒</strong> 8.230 kr.</li>
                <li><strong>Taxachauffør løn efter skat ≈</strong> 20.290 kr.</li>
              </ul>
            </div>
            
            <p>
              Vil du have dit eget estimat? Klik på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Taxachauffør Løn Efter Skat 🚖</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en taxachauffør før skat?</p>
                <p>28.000 – 34.000 kr./md. afhængigt af omsætning.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er taxachauffør løn efter skat 2025?</p>
                <p>Ca. 18.000 – 23.000 kr. for fuldtidskørsel.</p>
              </div>
              <div>
                <p className="font-semibold">Er procentløn bedre end timeløn?</p>
                <p>Det kan den være i storbyer med høj turvolumen.</p>
              </div>
              <div>
                <p className="font-semibold">Kan man trække kørselsfradrag fra?</p>
                <p>Nej, bilen er erhverv, men du kan fradrage fagforening og A‑kasse.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 Tips til at få meteret til at tikke 📈</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kør nat‑ og weekendvagter</strong> – høje tillæg + færre pauser.</li>
              <li><strong>Skift til el‑taxi</strong> – brændstofbesparelse kan øge procentlønnen.</li>
              <li><strong>App‑tur integration</strong> – brug Bolt/Uber for at fylde dødtid.</li>
              <li><strong>Hold styr på fradrag</strong> – fagforening, vask, uniform.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 svinger taxachauffør løn efter skat typisk mellem 18.000 og 23.000 kr. Den afhænger især af vagtplan, kilometer og kommuneskat. Få et hurtigt, personligt estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – og se hvad dine køreture reelt giver i lommen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.3f.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F Transport – Taxi‑overenskomst 2024‑2026</a></li>
              <li><a href="https://www.danskpersontransport.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Brancheorganisation Dansk PersonTransport – Omsætningsstatistik 2025</a></li>
              <li><a href="https://www.dst.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, transportservice (dst.dk)</a></li>
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

export default TaxachauffoerLoenPage; 