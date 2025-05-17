import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const PortoerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Region Hovedstaden");
  
  // City-specific salary data
  const cityData = {
    "Region Hovedstaden": { grossSalary: 32000, netMin: 21300, netMax: 21800 },
    "Region Midtjylland": { grossSalary: 30000, netMin: 20000, netMax: 20500 },
    "Region Syddanmark": { grossSalary: 29000, netMin: 19400, netMax: 19900 },
    "Region Nordjylland": { grossSalary: 28000, netMin: 18700, netMax: 19200 },
    "Region Sjælland": { grossSalary: 27000, netMin: 18100, netMax: 18600 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Portøraspirant (udd.)", grossSalary: 21000, netMin: 15500, netMax: 15900 },
    { type: "Nyuddannet (0-2 år)", grossSalary: 25000, netMin: 17000, netMax: 17500 },
    { type: "3-5 års erfaring", grossSalary: 28000, netMin: 18700, netMax: 19200 },
    { type: "6-8 år + nat/weekend", grossSalary: 32000, netMin: 21300, netMax: 21800 },
    { type: "9+ år (team- eller område­ansvar)", grossSalary: 35000, netMin: 23000, netMax: 23500 }
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
        title="Portør Løn Efter Skat 2025 – Realistiske Eksempler og Beregning"
        description="Se hvad du som portør får udbetalt efter skat i 2025. Sammenlign løn før og efter skat, og brug beregneren til at finde dit personlige nettobeløb."
        keywords="portør løn efter skat, portør nettoløn, portør overenskomst, portør tillæg, hospital portør, sygehus portør"
      />
      <Header />
      <PageTitle title="Portør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Portør Løn Efter Skat 2025 – Nettobeløb, Overenskomst og Tillæg</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids portør (37 t/uge) kan i 2025 forvente en løn før skat på 25 000 – 37 000 kr. pr. måned. Efter AM-bidrag og almindelig A-skat svarer det til en portør løn efter skat på cirka 17 000 – 24 000 kr. Spændet afhænger især af region, anciennitet, ulempe­tillæg og bopælskommune. Få et hurtigt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer portør løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Grundløn & minimalløn</td>
                    <td className="py-3 px-4 border-b">FOA-overenskomsten 2024-26 hæver minimallønnen til 154,74 kr./time pr. 1. april 2025 (≈ 25 000 kr./md.)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Region & trin</td>
                    <td className="py-3 px-4 border-b">Regionerne aflønner på forskellige løntrin; hovedstaden ligger 5-7 % over Vestdanmark.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Ulempe- og weekendtillæg</td>
                    <td className="py-3 px-4 border-b">Aften +17 %, nat +30 %, weekend +45 %. Kan løfte nettolønnen 1 000-2 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Special- og funktions­tillæg</td>
                    <td className="py-3 px-4 border-b">Akutmodtagelse, obduktion, lagerlogistik m.m. giver 800-2 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 13 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiver­bidrag indbetales før skat og forbedrer den samlede pakke.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel – ≈ ± 600 kr./md. i portør løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – regionale eksempler 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Region / Hospital</th>
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
              * Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %. Lands­gennemsnittet for portører ligger omkring 37 000 kr. før skat
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – portør løn før og efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, portør på fast nat-skema</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 30 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 400 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 27 600 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 22 950 kr.</li>
                <li><strong>A-skat (~ 35 %):</strong> 8 030 kr.</li>
                <li><strong>Portør løn efter skat ≈</strong> 19 570 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire greb til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Tag nat-, weekend- og helligdags­vagter</strong> – de højeste ulempe­tillæg giver op til 2 000 kr. ekstra efter skat.</li>
              <li><strong>Bliv specialportør</strong> i fx akutmodtagelse, sterile enheder eller patient­transport – funktions­tillæg øger løn før skat 800-2 000 kr./md.</li>
              <li><strong>Oparbejd anciennitet</strong> – FOA-overenskomsten udløser automatiske trin hvert andet år de første 8 år.</li>
              <li><strong>Vælg lav-skat kommune</strong> – kan tilføje 300-600 kr. i portør løn efter skat hver måned uden at skifte job.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Portør Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en portøraspirant efter skat?</p>
                <p>Omkring 15 500 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer man 22 000 kr. efter skat?</p>
                <p>Typisk efter 6-8 års erfaring kombineret med nat- og weekend­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej – pensions­bidraget (ca. 13 %) indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Kan bonus udløse topskat?</p>
                <p>Det kræver, at samlet månedsløn før skat overstiger ca. 63 000 kr., hvilket er usædvanligt i portørstillinger.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger portør løn efter skat som regel mellem 17 000 og 24 000 kr. Overenskomster, ulempe­tillæg og kommuneskat er de vigtigste faktorer. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> til at se, præcis hvor meget din indsats for patient­logistik og sikker transport giver på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.jobpatruljen.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobpatruljen – minimalløn 154,74 kr./time pr. 1.4.2025</a></li>
              <li><a href="https://www.studentum.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – gennemsnitlig portørløn 37 000 kr.</a></li>
              <li><a href="https://www.foa.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FOA – Sygehusportører overenskomst 2024-26 (PDF)</a></li>
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

export default PortoerLoenPage; 