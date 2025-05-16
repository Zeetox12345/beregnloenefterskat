import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const PilotLoenPage = () => {
  const [selectedBase, setSelectedBase] = useState("CPH – SAS (kaptajn, A350)");
  
  // Base-specific salary data
  const baseData = {
    "CPH – SAS (kaptajn, A350)": { grossSalary: 83000, netMin: 49000, netMax: 50000 },
    "Billund – Ryanair (FO, B737)": { grossSalary: 40000, netMin: 25000, netMax: 27000 },
    "Aalborg – DAT (kaptajn, ATR72)": { grossSalary: 55000, netMin: 33000, netMax: 34000 },
    "Karup – Forsvaret (nyuddannet)": { grossSalary: 43600, netMin: 27800, netMax: 28300 },
    "Dubai – Emirates (FO, B777)†": { grossSalary: 90000, netMin: 90000, netMax: 90000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Cadet (trainee)", grossSalary: 30000, netMin: 20400, netMax: 20800 },
    { type: "First Officer 0-3 år", grossSalary: 40000, netMin: 25000, netMax: 27000 },
    { type: "Senior FO / Relief Captain", grossSalary: 55000, netMin: 33000, netMax: 34500 },
    { type: "Kaptajn (short-haul)", grossSalary: 65000, netMin: 39000, netMax: 40000 },
    { type: "Kaptajn (long-haul)", grossSalary: 75000, netMin: 45000, netMax: 46000 },
    { type: "Fleet/Training Captain", grossSalary: 100000, netMin: 58000, netMax: 59000 }
  ];

  const baseExamples = useMemo(() => {
    return Object.entries(baseData).map(([base, data]) => {
      return {
        base,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Pilot Løn Efter Skat 2025 - Realistisk Lønguide 2025"
        description="Få overblik over pilot løn efter skat – fra cadet til kaptajn. Sammenlign stillinger, selskaber og baser, og få dit eget nettobeløb beregnet på få sekunder."
        keywords="pilot løn efter skat, kaptajn løn, flyver løn, SAS pilot løn, flytype tillæg, pilot løn danmark, Emirates pilot løn"
      />
      <Header />
      <PageTitle title="Pilot Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Pilot Løn Efter Skat 2025 – Fra Cockpit til Kontoudtog ️</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – I 2025 ligger pilot løn efter skat i Danmark typisk mellem 26 000 – 59 000 kr. pr. måned. En ny first-officer i et regionalt selskab (40 000 kr. brutto) får ca. 25-27 000 kr. udbetalt, mens en langrutekaptajn i SAS eller et Gulf-selskab (100 000 kr. brutto) når omkring 59 000 kr. Netto afhænger af flytype (short- vs. long-haul), anciennitet, lufthjemmebase, tillæg + bonus og kommuneskat. Vil du kende din præcise pilot løn efter skat? Tjek det på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – hurtigere end boarding completed.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad styrer en pilot løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Løndriver</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor den rykker på netto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Grundløn (SAS gennemsnit ca. 995 000 kr./år)</td>
                    <td className="py-3 px-4 border-b">Sætter hele pakken</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flytype & rute</td>
                    <td className="py-3 px-4 border-b">Long-haul = højere basis + diæter; short-haul betaler lavere men flere cycles</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Seniority & rang</td>
                    <td className="py-3 px-4 border-b">Kaptajn/kontrolleder ± 20-40 % oven på FO-lønnen</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Tillæg (blok-timer, nat, diæter)</td>
                    <td className="py-3 px-4 border-b">4-10 % før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Bonus / options</td>
                    <td className="py-3 px-4 border-b">0-15 % afhængigt af selskab & performance</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension 12-17 %</td>
                    <td className="py-3 px-4 border-b">Betales før skat og øger totalpakken</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat (gns. 25,1 %)</td>
                    <td className="py-3 px-4 border-b">± 0,6 pct-point → ± 650 kr./md. netto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="italic">Fun fact: Én ekstra long-haul rotation til New York kan betale et helt ATPL-afdrag – efter skat.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvor lander pilot løn efter skat? – Typiske baser 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Base / Selskab</th>
                    <th className="py-3 px-4 border-b text-left">Flytype</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {baseExamples.map((example) => (
                    <tr 
                      key={example.base} 
                      className={`hover:bg-gray-50 ${example.base === selectedBase ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedBase(example.base)}
                    >
                      <td className="py-3 px-4 border-b">{example.base}</td>
                      <td className="py-3 px-4 border-b">
                        {example.base.includes("SAS") ? "Long-haul widebody" : 
                         example.base.includes("Ryanair") ? "Short-haul narrowbody" :
                         example.base.includes("DAT") ? "Regional turboprop" :
                         example.base.includes("Forsvaret") ? "Transport/helikopter" :
                         example.base.includes("Emirates") ? "Long-haul" : ""}
                      </td>
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
              * Beregnet med AM-bidrag 8 %, personfradrag 4 300 kr./md. og gennemsnitlig kommuneskat 25,1 %.
            </p>
            <p className="text-sm text-gray-600 italic">
              † Udenrigsposter er ofte skattefri i UAE – råt tal med for at sætte danske nettoniveauer i perspektiv.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – Pilot Løn Efter Skat vs. Erfaring</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rang</th>
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

            <p className="text-sm text-gray-600 italic">
              Data bygger på FagforeningsGuide 2025-tal, SAS-opgørelser og Forsvarets lønrammer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – SAS long-haul kaptajn (CPH)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 83 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 6 640 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 76 360 kr.</li>
                <li><strong>Personfradrag:</strong> 4 300 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 72 060 kr.</li>
                <li><strong>A-skat (~37 %):</strong> 26 860 kr.</li>
                <li><strong>Pilot løn efter skat ≈</strong> 49 500 kr.</li>
              </ul>
            </div>

            <p>
              Vil du regne din egne bloktimer eller flyselskab? Smut over på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – hurtigere end du kan programmere FMS'en.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire turbo-tjek til højere pilot løn efter skat </h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Move</th>
                    <th className="py-3 px-4 border-b text-left">Typisk nettoløft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Skift short → long-haul</td>
                    <td className="py-3 px-4 border-b">+4 000 – 8 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Bliv type-rating-instruktør (TRI/TRE)</td>
                    <td className="py-3 px-4 border-b">+2 000 – 4 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Forhandl diæter & bloktime-bonus</td>
                    <td className="py-3 px-4 border-b">+1 000 – 3 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til lav-skat-kommune</td>
                    <td className="py-3 px-4 border-b">+300 – 650 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Pilot Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny pilot efter skat?</p>
                <p>Omkring 25-27 000 kr. pr. md. ved 40 000 kr. brutto.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan rammer jeg 50 000 kr. netto?</p>
                <p>Langdistancekaptajn, senior-tillæg + bloktime-bonus i højlønnet selskab (fx SAS widebody eller Mellemøst-carrier).</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension med i "løn efter skat"?</p>
                <p>Nej – pensionsbidrag (12-17 %) indbetales før skat og vises ikke i netto.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer piloter topskat?</p>
                <p>Over ca. 55 400 kr. før AM-bidrag pr. md. (611 800 kr./år).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Pilot løn efter skat spænder i 2025 fra ca. 26 000 til 59 000 kr. pr. måned afhængigt af rute, rang og flyselskab. Long-haul, senioritet og tekniske tillæg løfter hurtigst netto, mens lav kommuneskat giver et mindre men sikkert boost. Vil du se, hvad dine take-offs omsættes til på bankkontoen? Kør et personligt tjek på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager mindre tid end en walk-around.
            </p>

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

export default PilotLoenPage; 