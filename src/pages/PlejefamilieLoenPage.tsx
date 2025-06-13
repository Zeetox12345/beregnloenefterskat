import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const PlejefamilieLoenPage = () => {
  const [selectedVederlag, setSelectedVederlag] = useState("3 vederlag");
  
  // Vederlag-specific salary data
  const vederlagData = {
    "1 vederlag": { grossSalary: 9200, netMin: 6200, netMax: 6500 },
    "2 vederlag": { grossSalary: 18400, netMin: 12400, netMax: 13000 },
    "3 vederlag": { grossSalary: 27600, netMin: 18400, netMax: 19000 },
    "4 vederlag": { grossSalary: 36800, netMin: 24600, netMax: 25300 },
    "5 vederlag": { grossSalary: 46000, netMin: 30800, netMax: 31400 },
  };

  // Experience-based salary progression
  const vederlagSteps = [
    { type: "1 vederlag", grossSalary: 9200, netMin: 6200, netMax: 6500, description: "Almindeligt plejebarn med lav indsats" },
    { type: "2 vederlag", grossSalary: 18400, netMin: 12400, netMax: 13000, description: "Barn med lettere støttebehov" },
    { type: "3 vederlag", grossSalary: 27600, netMin: 18400, netMax: 19000, description: "Fx barn med skoleudfordringer" },
    { type: "4 vederlag", grossSalary: 36800, netMin: 24600, netMax: 25300, description: "Forstærket familiepleje" },
    { type: "5 vederlag", grossSalary: 46000, netMin: 30800, netMax: 31400, description: "Specialiseret eller flerhandicappet barn" },
  ];

  const vederlagExamples = useMemo(() => {
    return Object.entries(vederlagData).map(([vederlag, data]) => {
      return {
        vederlag,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Plejefamilie Løn Efter Skat 2025 – Få Overblik Over Vederlag"
        description="Hvad er plejefamilie løn efter skat i 2025? Typisk 6.000–31.000 kr./md. afhængigt af antal vederlag. Få realistiske beregninger og brug beregn løn efter skat til at se dit nøjagtige nettobeløb."
        keywords="plejefamilie løn efter skat, plejefamilie vederlag, familiepleje løn, plejefamilie indkomst 2025"
      />
      <Header />
      <PageTitle title="Plejefamilie Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Plejefamilie Løn Efter Skat 2025 – Vederlag, Fradrag og Realistisk Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En plejefamilie modtager i 2025 et månedligt vederlag før skat på cirka 9 200 – 46 000 kr. (1-5 vederlagstrin). Det giver en plejefamilie løn efter skat på omtrent 6 000 – 31 000 kr., alt efter antal vederlag, fradrag og kommune­sats. Tjek det nøjagtige nettobeløb på under ét minut i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – indtast blot det samlede vederlag.
              </p>
            </div>

            <p className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
              <strong>Husk:</strong> Omkostnings‐ og kørsels­godtgørelser er skattefrie og indgår ikke i løn efter skat. Tabellerne her gælder kun det skattepligtige vederlag.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer plejefamilie løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Faktor</th>
                    <th className="py-3 px-4 border-b text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Antal vederlag</td>
                    <td className="py-3 px-4 border-b">Kommunen fastsætter 1-7 vederlag efter opgavens kompleksitet; ét vederlag er ≈ 9 200 kr. før skat i 2025.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & uddannelse</td>
                    <td className="py-3 px-4 border-b">Godkendelse som forstærket plejefamilie eller specialiseret opholdssted kan udløse ekstra vederlag.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Skattefradrag</td>
                    <td className="py-3 px-4 border-b">Almindeligt personfradrag (4 650 kr./md.) + eventuelt beskæftigelses­fradrag, hvis plejeforholdet er hoved­beskæftigelse.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spænder ca. 24-26 % – forskellen kan udgøre 400-600 kr. på nettolønnen pr. vederlag.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Skattefrie godtgørelser</td>
                    <td className="py-3 px-4 border-b">Kost, logi, fritids­midler og transport erstattes skattefrit og påvirker ikke løn efter skat, men forbedrer total­økonomien.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løntabel – Plejefamilie Vederlag 2025</h2>
            <p>
              Tabellen viser de typiske vederlagstrin for plejefamilier i 2025 baseret på opgavens kompleksitet og barnets behov:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Vederlagstrin</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                    <th className="py-3 px-4 border-b text-left">Typisk målgruppe</th>
                  </tr>
                </thead>
                <tbody>
                  {vederlagSteps.map((step) => (
                    <tr 
                      key={step.type} 
                      className={`hover:bg-gray-50 ${step.type === selectedVederlag ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedVederlag(step.type)}
                    >
                      <td className="py-3 px-4 border-b font-medium">{step.type}</td>
                      <td className="py-3 px-4 border-b">{step.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {step.netMin.toLocaleString("da-DK")} – {step.netMax.toLocaleString("da-DK")} kr.
                      </td>
                      <td className="py-3 px-4 border-b">{step.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mt-4">
              * Eksempelberegnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %. Justér tallet i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for din kommune.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – 3 vederlag (standardkommune)</h2>
            <p>
              Her er et konkret eksempel på, hvordan plejefamilie løn efter skat beregnes for en familie med 3 vederlag:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    <tr className="border-b border-blue-200">
                      <td className="py-2 pr-4 font-medium">Vederlag før skat</td>
                      <td className="py-2 text-right">27 600 kr.</td>
                    </tr>
                    <tr className="border-b border-blue-200">
                      <td className="py-2 pr-4">AM-bidrag 8 %</td>
                      <td className="py-2 text-right">2 208 kr.</td>
                    </tr>
                    <tr className="border-b border-blue-200">
                      <td className="py-2 pr-4">Skattepligtig indkomst</td>
                      <td className="py-2 text-right">25 392 kr.</td>
                    </tr>
                    <tr className="border-b border-blue-200">
                      <td className="py-2 pr-4">Personfradrag</td>
                      <td className="py-2 text-right">4 650 kr.</td>
                    </tr>
                    <tr className="border-b border-blue-200">
                      <td className="py-2 pr-4">Beskatningsgrundlag</td>
                      <td className="py-2 text-right">20 742 kr.</td>
                    </tr>
                    <tr className="border-b border-blue-200">
                      <td className="py-2 pr-4">A-skat (≈ 37 %)</td>
                      <td className="py-2 text-right">7 670 kr.</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="py-3 pr-4 font-bold">Plejefamilie løn efter skat</td>
                      <td className="py-3 text-right font-bold">≈ 18 000 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tre hurtige måder at løfte nettolønnen</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h3 className="font-semibold mb-2">💼 Mere komplekse anbringelser</h3>
                <p className="text-sm">Flere vederlag for søskendegrupper eller børn med særlige behov.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h3 className="font-semibold mb-2">📚 Efteruddannelse</h3>
                <p className="text-sm">Fx diplom­moduler i socialpædagogik; kan udløse højere vederlagstrin.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h3 className="font-semibold mb-2">🌙 Nat-/rådighedstillæg</h3>
                <p className="text-sm">Forhandl om tillæg hvis barnet kræver døgnopsyn – tillægget er skattepligtigt, men løfter nettolønnen.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Plejefamilie Løn Efter Skat</h2>

            <div className="space-y-4 my-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Er omkostnings­godtgørelse skattefri?</h3>
                <p>Ja – udgifter til tøj, fritid m.m. er skattefrie og ikke medregnet i løn efter skat.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Får vi pension af vederlag?</h3>
                <p>Nej, der indbetales normalt ikke pension – læg evt. selv til side.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Kan vi få flere end fem vederlag?</h3>
                <p>Ja, ved særligt krævende opgaver (op til syv), men det godkendes individuelt.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Skal vi betale topskat?</h3>
                <p>Kun hvis samlet vederlag overstiger ca. 63 300 kr./md.; det er usædvanligt.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger plejefamilie løn efter skat mellem cirka 6 000 og 31 000 kr. pr. måned, alt efter antal vederlag og kommune­sats. Da omkostnings­godtgørelser er skattefrie, er din disponible indkomst højere end nettolønnen alene. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> til at se dit nøjagtige beløb, når alle aftaler er på plads.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Social- og Boligstyrelsen – Vejledning om vederlag og omkostningsgodtgørelse til plejefamilier (2025): <a href="https://socialstyrelsen.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://socialstyrelsen.dk</a></li>
              <li>KL & Socialpædagogerne – Takster for familiepleje 2025</li>
              <li>Indkomsten.dk – Gennemsnitlige vederlag for plejefamilier (juni 2025)</li>
              <li>Skat.dk – Personfradrag og AM-bidrag (opdateret 2025)</li>
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

export default PlejefamilieLoenPage; 