import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LoenUnderSygdomPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Løn Under Sygdom Efter Skat 2025 – Hvad Får Du Udbetalt?"
        description="Få overblik over løn under sygdom efter skat i 2025 – både med fuld løn og ved sygedagpenge. Se realistiske tal og beregn dit eget beløb online."
        keywords="løn under sygdom, sygedagpenge efter skat, sygdom løn, sygeløn, sygemelding løn, sygedagpenge 2025, funktionærløn sygdom"
      />
      <Header />
      <PageTitle title="Løn Under Sygdom Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Løn Under Sygdom Efter Skat 2025 – sådan ser kontoen ud, når du er sygemeldt</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Hvis din overenskomst eller funktionærloven giver fuld løn under sygdom, er din løn før skat præcis den samme som normalt – det vil sige fx 35 000 kr. før skat. For timelønnede uden fuld løn erstattes indkomsten ofte af sygedagpenge på maksimalt 4 820 kr. pr. uge (≈ 20 900 kr./md.) før skat. Efter AM-bidrag og almindelig A-skat betyder det typisk en løn under sygdom efter skat på ca. 22 500 – 23 100 kr./md. ved fuld løn (35 000 kr. før skat) eller ca. 13 500 – 14 000 kr./md. ved sygedagpenge-maksimum.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Reglerne kort fortalt</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Situation</th>
                    <th className="py-2 px-4 border-b text-left">Hvem betaler?</th>
                    <th className="py-2 px-4 border-b text-left">Hvor længe?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Funktionær / overenskomst med fuld løn</td>
                    <td className="py-2 px-4 border-b">Arbejdsgiver</td>
                    <td className="py-2 px-4 border-b">Som regel hele sygdoms­perioden (dog mulighed for 4-ugers arbejdsgiver­refusion)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Timelønnet uden fuld løn</td>
                    <td className="py-2 px-4 border-b">Arbejdsgiver de første 30 dage (syge­løn) → derefter sygedagpenge fra kommunen</td>
                    <td className="py-2 px-4 border-b">Op til 22 uger inden for 9 måneder, kan forlænges</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Dagpenge­forsikring (A-kasse)</td>
                    <td className="py-2 px-4 border-b">Kommunen (sygedagpenge)</td>
                    <td className="py-2 px-4 border-b">Hvis du opfylder beskæftigelses­kravet og ikke får fuld løn</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-medium">Sygedagpenge 2025-maksimum: 4 820 kr. pr. uge / 130,59 kr. pr. time</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bliver lønnen under sygdom efter skat?</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. Eksempel – fuld løn (funktionær, 35 000 kr.)</h3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Post</th>
                    <th className="py-2 px-4 border-b text-left">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Løn før skat</td>
                    <td className="py-2 px-4 border-b">35 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">AM-bidrag 8 %</td>
                    <td className="py-2 px-4 border-b">–2 800 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Skattepligtig indkomst</td>
                    <td className="py-2 px-4 border-b">32 200 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Personfradrag</td>
                    <td className="py-2 px-4 border-b">–4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Beskatningsgrundlag</td>
                    <td className="py-2 px-4 border-b">27 550 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">A-skat (~ 37 %)</td>
                    <td className="py-2 px-4 border-b">–10 200 kr.</td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="py-2 px-4 border-b">Løn under sygdom efter skat</td>
                    <td className="py-2 px-4 border-b">≈ 22 900 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Eksempel – sygedagpenge-maksimum</h3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Post</th>
                    <th className="py-2 px-4 border-b text-left">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Sygedagpenge før skat</td>
                    <td className="py-2 px-4 border-b">20 900 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">AM-bidrag 8 %</td>
                    <td className="py-2 px-4 border-b">–1 670 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Skattepligtig indkomst</td>
                    <td className="py-2 px-4 border-b">19 230 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Personfradrag</td>
                    <td className="py-2 px-4 border-b">–4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Beskatningsgrundlag</td>
                    <td className="py-2 px-4 border-b">14 580 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">A-skat (~ 35 %)</td>
                    <td className="py-2 px-4 border-b">–5 100 kr.</td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="py-2 px-4 border-b">Sygedagpenge efter skat</td>
                    <td className="py-2 px-4 border-b">≈ 13 800 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan sikrer du en bedre netto under sygdom</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tjek din overenskomst – nogle timelønnede har løn under sygdom i op til 8 uger.</li>
              <li>Supplér med løn- eller sundheds­forsikring – flere selskaber dækker forskellen mellem sygedagpenge og fuld løn.</li>
              <li>Udnyt fradrag – kørsel til behandling, sundheds­udgifter eller fagforening kan sænke skatten.</li>
              <li>Undgå karens – meld dig syg med det samme; karensdage findes ikke i DK, men manglende rettidig anmeldelse kan koste løn.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Løn Under Sygdom Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-2 px-4 border-b text-left">Svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Mister jeg pensionen under sygdom?</td>
                    <td className="py-2 px-4 border-b">Nej, ved fuld løn fortsætter pension; ved sygedagpenge stopper arbejdsgiver­bidraget typisk.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Skal jeg betale topskat af sygedagpenge?</td>
                    <td className="py-2 px-4 border-b">Kun hvis andre skattepligtige indtægter gør, at du samlet når over topskatte­grænsen.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Hvad hvis jeg er deltid?</td>
                    <td className="py-2 px-4 border-b">Sygedagpenge beregnes ud fra gennemsnitlige timer; fuld løn følger din kontraktmæssige tid.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              For 2025 svarer løn under sygdom efter skat til din normale nettoløn, hvis du har ret til fuld løn. Uden fuld løn falder indtægten til cirka 13 – 15 000 kr. netto på sygedagpenge-maksimum. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at få de præcise tal, før du planlægger budget under en sygdomsperiode.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Borger.dk – <a href="https://www.borger.dk/arbejde-dagpenge-ferie/Dagpenge-kontanthjaelp-og-sygedagpenge/sygedagpenge/sygedagpenge-hvis-du-er-ledig" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Sygedagpenge 2025 satser</a></li>
              <li>Arbejdsmarkeds­styrelsen – <a href="https://www.ams.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Overblik over sygdomsbetaling for timelønnede (jan. 2025)</a></li>
              <li>Jobindex & Djøf – <a href="https://www.djoef.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Gennemsnitlige funktionærlønninger 2025 (referencer)</a></li>
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

export default LoenUnderSygdomPage; 