import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ProjektlederLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København (FinTech / Pharma)": { grossSalary: 65000, netMin: 40400, netMax: 40900 },
    "Aarhus (e-commerce / Wind)": { grossSalary: 60000, netMin: 37200, netMax: 37700 },
    "Odense (Robotics)": { grossSalary: 57000, netMin: 35200, netMax: 35700 },
    "Aalborg (Energy / Telecom)": { grossSalary: 55000, netMin: 34000, netMax: 34500 },
    "Esbjerg (Offshore)": { grossSalary: 52000, netMin: 32100, netMax: 32600 },
    "Randers (SMV-projekter)": { grossSalary: 50000, netMin: 30700, netMax: 31200 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Projektassistent (0-2 år)", grossSalary: 38000, netMin: 25600, netMax: 26100 },
    { type: "Junior Projektleder", grossSalary: 42000, netMin: 27000, netMax: 27500 },
    { type: "Mid-level (3-5 år)", grossSalary: 50000, netMin: 30700, netMax: 31200 },
    { type: "Senior / IT-Projektleder", grossSalary: 60000, netMin: 37200, netMax: 37700 },
    { type: "Porteføljechef / Program Manager", grossSalary: 70000, netMin: 42700, netMax: 43200 },
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
        title="Projektleder Løn Efter Skat 2025 | Realistisk Guide 2025"
        description="Få overblik over projektleder løn efter skat i 2025. Sammenlign stillinger, erfaring og bonus – og få dit eget nettobeløb med vores beregner."
        keywords="projektleder løn, projektleder løn efter skat, projektledelse, løn efter skat, it-projektleder, PMP certificering, PRINCE2, karriere i projektledelse"
      />
      <Header />
      <PageTitle title="Projektleder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Projektleder Løn Efter Skat 2025 – Fra Gantt-tavle til Girokort 📊💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – I 2025 ligger projektleder løn efter skat i Danmark som tommelfinger­regel mellem 30.000 og 45.000 kr. pr. måned. En ny projektleder med 42.000 kr. i bruttoløn står med ca. 27.000 kr. netto, mens en erfaren senior- eller IT-projektleder med 70.000 kr. brutto typisk får omkring 43.000 kr. udbetalt. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se dit eget tal hurtigere, end du kan tegne en kritisk vej i MS Project.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad styrer en projektleder løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Løn-driver</th>
                    <th className="py-2 px-4 border-b text-left">Hvorfor den rykker netto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Grundløn & branche</td>
                    <td className="py-2 px-4 border-b">Bygge-, IT- og pharma-projekter betaler ofte 5-10 % mere end gennemsnittet.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Certificeringer</td>
                    <td className="py-2 px-4 border-b">PMP®, PRINCE2® Practitioner eller SAFe® giver typisk +1.000 - 3.000 kr./md. før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Anciennitet & ansvar</td>
                    <td className="py-2 px-4 border-b">Fra junior projektkoordinator til porteføljechef kan spændet være over 25.000 kr. brutto.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Bonus / resultatløn</td>
                    <td className="py-2 px-4 border-b">5-20 % af årsløn i private virksomheder, især ved KPI-baserede kontrakter.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Skiftehold / rejse­dage</td>
                    <td className="py-2 px-4 border-b">Udetillæg eller turnus kan løfte bruttolønnen 2-4 %.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-2 px-4 border-b">Op til 0,6 pct-point i forskel – svarer til ±650 kr./md. i nettoløn.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm italic">Tip: Én PMI-certificering kan give større netto­løft end seks måneders standard merit­stigning.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Projektleder Løn Efter Skat 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">By / Økosystem</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((example, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-2 px-4 border-b font-medium">{example.city}</td>
                      <td className="py-2 px-4 border-b">{example.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="py-2 px-4 border-b">{example.netMin.toLocaleString('da-DK')} – {example.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm italic">* Beregnet med 8 % AM-bidrag, måneds­fradrag 4.300 kr. og gennemsnitlig kommuneskat 25,1 %.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – Projektleder Løn Efter Skat vs. Erfaring</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((data, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-2 px-4 border-b font-medium">{data.type}</td>
                      <td className="py-2 px-4 border-b">{data.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="py-2 px-4 border-b">{data.netMin.toLocaleString('da-DK')} – {data.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior Projektleder i Odense</h2>
            
            <ul className="list-disc ml-6 mb-6">
              <li>Bruttoløn: 57.000 kr.</li>
              <li>AM-bidrag 8 % → 4.560 kr.</li>
              <li>Skattepligtig indkomst → 52.440 kr.</li>
              <li>Personfradrag → 4.300 kr.</li>
              <li>Beskatningsgrundlag → 48.140 kr.</li>
              <li>A-skat (~37 %) → 17.800 kr.</li>
              <li><strong>Projektleder løn efter skat ≈ 35.400 kr.</strong></li>
            </ul>

            <p className="mb-8">
              Vil du teste din egen projektleder-indkomst med forskellige tillæg? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> og få et personligt estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire lynhurtige boosts til højere projektleder løn efter skat 🚀</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Strategi</th>
                    <th className="py-2 px-4 border-b text-left">Typisk nettoløft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Hent en international certi­ficering (PMP®, PMI-ACP, SAFe®)</td>
                    <td className="py-2 px-4 border-b">+1.000 - 3.000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Skift til højmargin-branche (pharma, grøn energi, AI)</td>
                    <td className="py-2 px-4 border-b">+1.500 - 4.000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Forhandl KPI-baseret bonus / RSU'er</td>
                    <td className="py-2 px-4 border-b">+5 - 15 % af årslønnen</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Flyt til kommune &lt; 24 % skat</td>
                    <td className="py-2 px-4 border-b">+300 - 650 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Projektleder Løn Efter Skat ℹ️</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium">Hvad tjener en ny projektleder efter skat?</h3>
              <p>Cirka 27.000 kr./md. ved 42.000 kr. brutto.</p>
              
              <h3 className="text-lg font-medium mt-4">Kan jeg nå 45.000 kr. netto?</h3>
              <p>Ja – som porteføljechef eller IT-projektleder med høj bonus i storby og lav kommuneskat.</p>
              
              <h3 className="text-lg font-medium mt-4">Tæller pension med i "løn efter skat"?</h3>
              <p>Nej, de 12-17 % pensions­bidrag betales før skat og øger kun din samlede pakke.</p>
              
              <h3 className="text-lg font-medium mt-4">Hvornår rammer man topskat?</h3>
              <p>Når bruttolønnen passerer ca. 55.400 kr. pr. måned (665.000 kr. årligt).</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p>
              I 2025 spænder projektleder løn efter skat fra ca. 30.000 til 45.000 kr. om måneden. Branchevalg, certifi­ceringer, bonusmodeller og kommuneskat er de hurtigste sprintbaner mod et større nettobeløb. Tag et personligt tjek på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, og få sort på hvidt, hvad dine mile-stones omsættes til, når budgettet rammer bankkontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc pl-5">
              <li>
                <a href="https://ida.dk/raad-og-karriere/loen/idas-loenstatistik?" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  IDA Lønstatistik 2024/25
                </a> – ingeniør- og IT-projektledernes lønniveau.
              </li>
              <li>
                <a href="https://www.djoef.dk/loen-og-loenforhandling/loenberegner-og-loentjek" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  DJØF Lønberegner (2025)
                </a> – projektledere i privat og offentlig sektor.
              </li>
              <li>
                <a href="https://blivprojektleder.dk/projektleder-loen/?" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Jobindex "Tjek din løn: Projektleder" (maj 2025)
                </a> – gennemsnittet for 4.138 lønprofiler.
              </li>
              <li>
                <a href="https://www.dst.dk/da/Statistik/emner/arbejde-og-indkomst/indkomst-og-loen?" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Danmarks Statistik – Indkomst og Løn
                </a> – officielle lønstrukturtal for ledere.
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

export default ProjektlederLoenPage; 