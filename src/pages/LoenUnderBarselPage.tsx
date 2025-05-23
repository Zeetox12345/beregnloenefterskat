import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LoenUnderBarselPage = () => {
  const [selectedScenario, setSelectedScenario] = useState("Kun barselsdagpenge");
  
  // Scenario-specific salary data
  const scenarioData = {
    "Kun barselsdagpenge": { grossSalary: 21105, netMin: 14200, netMax: 14600 },
    "Fuld løn (offentlig)": { grossSalary: 37000, netMin: 24000, netMax: 24500 },
    "Fuld løn (privat HK/DI)": { grossSalary: 45000, netMin: 29000, netMax: 29500 },
  };

  // Factors affecting salary
  const factorsData = [
    { factor: "Barselsdagpenge", impact: "Statens kompensation (maks. 4.865 kr./uge = 21.105 kr./md.) danner gulvet under indkomsten.", source: "Tjek Fagforening", url: "https://tjekfagforening.dk/artikler/" },
    { factor: "Fuld løn via overenskomst", impact: "Mange offentlige og HK/DI-aftaler giver løn fra 4 uger før fødsel til 10-14 uger efter + deleuger på forældreorloven.", source: "HK, Dansk Industri", url: "https://www.hk.dk/raadogstoette/barsel/barselsrettigheder/barselsrettigheder-i-handel" },
    { factor: "Refusion til arbejdsgiver", impact: "Virksomheden får barselsdagpengene i refusion og kan derfor udbetale fuld løn.", source: "DM", url: "https://dm.dk/raad-og-svar/boern-og-barsel/loen-under-barsel/" },
    { factor: "Tillæg & pension", impact: "Kvalifikationstillæg og 12-18 % pension indbetales før skat, men øger den samlede pakke.", source: "", url: "" },
    { factor: "Kommuneskat", impact: "Op til 0,8 pct-point forskel → ± 600 kr./md. i nettoløn.", source: "", url: "" },
  ];

  const scenarioExamples = useMemo(() => {
    return Object.entries(scenarioData).map(([scenario, data]) => {
      return {
        scenario,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Løn Under Barsel Efter Skat 2025 – Komplet Guide"
        description="Hvad er løn under barsel efter skat i 2025? Scenarier, tabeller og beregnerlink giver dig dit nøjagtige nettobeløb."
        keywords="løn under barsel, barselsdagpenge, barsel efter skat, barselsorlov løn, fuld løn under barsel, barsel overenskomst"
      />
      <Header />
      <PageTitle title="Løn Under Barsel Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Løn Under Barsel Efter Skat 2025 – Fra Dagpenge til Fuld Løn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Din løn før skat under barsel spænder i 2025 fra ca. 21.105 kr. (maksimal barsels-dagpengesats) til 45.000 kr. ved fuld løn fra arbejdsgiver. Det giver en løn under barsel efter skat på omtrent 14.000 – 29.000 kr. pr. måned, afhængigt af overenskomst, anciennitet og kommuneskat. Tjek dit nøjagtige beløb med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad afgør din løn under barsel efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-2 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  {factorsData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-4 border-b font-medium">{item.factor}</td>
                      <td className="py-2 px-4 border-b">
                        {item.impact}
                        {item.source && (
                          <span className="block text-sm text-blue-600">
                            {item.url ? (
                              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.source}</a>
                            ) : (
                              item.source
                            )}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tre typiske scenarier – løn under barsel før & efter skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Scenario</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn under barsel efter skat*</th>
                    <th className="py-2 px-4 border-b text-left">Hvem gælder det for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b font-medium">Kun barselsdagpenge</td>
                    <td className="py-2 px-4 border-b">21.105 kr.</td>
                    <td className="py-2 px-4 border-b">14.200 – 14.600 kr.</td>
                    <td className="py-2 px-4 border-b">
                      Selvstændige, freelancere og ansatte uden barselsaftale
                      <span className="block text-sm text-blue-600">
                        <a href="https://bm.dk/satser/satser-for-2025" target="_blank" rel="noopener noreferrer">Beskæftigelsesministeriet</a>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Fuld løn (offentlig)</td>
                    <td className="py-2 px-4 border-b">37.000 kr.</td>
                    <td className="py-2 px-4 border-b">24.000 – 24.500 kr.</td>
                    <td className="py-2 px-4 border-b">
                      Kommune/region-ansatte – op til 43 uger med løn
                      <span className="block text-sm text-blue-600">
                        <a href="https://www.hk.dk/raadogstoette/barsel/barselsrettigheder/barselsrettigheder-i-det-kommunale" target="_blank" rel="noopener noreferrer">HK</a>
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b font-medium">Fuld løn (privat HK/DI)</td>
                    <td className="py-2 px-4 border-b">45.000 kr.</td>
                    <td className="py-2 px-4 border-b">29.000 – 29.500 kr.</td>
                    <td className="py-2 px-4 border-b">
                      Industri, handel & kontor med ny barselsaftale
                      <span className="block text-sm text-blue-600">
                        <a href="https://www.hk.dk/raadogstoette/barsel/barselsrettigheder/barselsrettigheder-i-handel" target="_blank" rel="noopener noreferrer">HK</a>
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4} className="py-2 px-4 text-sm italic">
                      * Beregnet m. AM-bidrag 8 % og gennemsnitlig kommuneskat 24,9 %, uden kirkeskat.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="my-8">
              <h2 className="text-2xl font-semibold mb-4">Beregningseksempel – Privatansat med fuld løn, 40.000 kr.</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <table className="min-w-full">
                  <tbody>
                    <tr>
                      <td className="py-1 font-medium">Løn før skat</td>
                      <td className="py-1 text-right">40.000 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-medium">AM-bidrag 8 %</td>
                      <td className="py-1 text-right">3.200 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-medium">Skattepligtig indkomst</td>
                      <td className="py-1 text-right">36.800 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-medium">Personfradrag</td>
                      <td className="py-1 text-right">4.650 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-medium">Beskatningsgrundlag</td>
                      <td className="py-1 text-right">32.150 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-medium">A-skat (≈ 37 %)</td>
                      <td className="py-1 text-right">11.900 kr.</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="py-2 font-bold">Løn under barsel efter skat</td>
                      <td className="py-2 text-right font-bold">≈ 24.250 kr.</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til en højere løn under barsel efter skat</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-medium">Forhandl fuld løn i hele forældreorloven</span> – tjek om ny overenskomst giver ekstra deleuger.
              </li>
              <li>
                <span className="font-medium">Spar feriedage op</span> – læg betalt ferie oven på barselsperioder med dagpenge.
              </li>
              <li>
                <span className="font-medium">Skift bopæl til lav-skat kommune</span> – +300-600 kr./md. netto uden yderligere indsats.
              </li>
              <li>
                <span className="font-medium">Udnyt pensionsbidraget</span> – arbejdsgiverens 12-18 % ryger ind før skat og øger den samlede værdi.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – løn under barsel efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-2 px-4 border-b text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Hvad er maks. barselsdagpenge efter skat?</td>
                    <td className="py-2 px-4 border-b">Cirka 14.400 kr. pr. måned.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Får jeg pension under barsel med dagpenge?</td>
                    <td className="py-2 px-4 border-b">Nej, kun hvis din overenskomst giver fuld løn.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Kan bonus udløse topskat under barsel?</td>
                    <td className="py-2 px-4 border-b">Ja, hvis fuld løn + bonus {'>'} 63.000 kr./md. før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Hvor mange uger med løn kan jeg få i kommunen?</td>
                    <td className="py-2 px-4 border-b">
                      Op til 43 uger samlet, hvis begge forældre er ansat i kommuner.
                      <span className="block text-sm text-blue-600">
                        <a href="https://www.hk.dk/raadogstoette/barsel/barselsrettigheder/barselsrettigheder-i-det-kommunale" target="_blank" rel="noopener noreferrer">HK</a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 svinger løn under barsel efter skat fra ca. 14.000 kr. ved ren barselsdagpenge til næsten 30.000 kr. ved fuld løn i en privat overenskomst. Tjek dine egne tal, kommunesats og pensionstilskud på under ét minut i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – så ved du præcist, hvad der lander på kontoen, mens du er hjemme med den lille.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Beskæftigelsesministeriet – Barselsdagpengesatser 2025
                <span className="block text-sm text-blue-600">
                  <a href="https://bm.dk/satser/satser-for-2025" target="_blank" rel="noopener noreferrer">Beskæftigelsesministeriet</a>
                </span>
              </li>
              <li>
                TjekFagforening.dk – Maksimal barselsdagpengesats 2025
                <span className="block text-sm text-blue-600">
                  <a href="https://tjekfagforening.dk/artikler/" target="_blank" rel="noopener noreferrer">Tjek Fagforening</a>
                </span>
              </li>
              <li>
                DM – Løn under barsel (refusions­krav)
                <span className="block text-sm text-blue-600">
                  <a href="https://dm.dk/raad-og-svar/boern-og-barsel/loen-under-barsel/" target="_blank" rel="noopener noreferrer">DM</a>
                </span>
              </li>
              <li>
                Dansk Industri – Betaling ved graviditet og barsel, overenskomster 2025
                <span className="block text-sm text-blue-600">
                  <a href="https://www.danskindustri.dk/vi-radgiver-dig/personale/graviditet-og-barsel/betaling-ved-graviditet-og-barsel/" target="_blank" rel="noopener noreferrer">Dansk Industri</a>
                </span>
              </li>
              <li>
                HK Handel – Barselsrettigheder, fuld løn i 14 + 16 uger
                <span className="block text-sm text-blue-600">
                  <a href="https://www.hk.dk/raadogstoette/barsel/barselsrettigheder/barselsrettigheder-i-handel" target="_blank" rel="noopener noreferrer">HK</a>
                </span>
              </li>
              <li>
                HK Kommunal – Løn under barsel i kommuner/regioner, 43 ugers model
                <span className="block text-sm text-blue-600">
                  <a href="https://www.hk.dk/raadogstoette/barsel/barselsrettigheder/barselsrettigheder-i-det-kommunale" target="_blank" rel="noopener noreferrer">HK Kommunal</a>
                </span>
              </li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: juni 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoenUnderBarselPage; 