import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const WoltLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 24000, netMin: 16000, netMax: 18780 },
    "Aarhus": { grossSalary: 20000, netMin: 14000, netMax: 16000 },
    "Odense": { grossSalary: 18000, netMin: 13000, netMax: 14500 },
    "Aalborg": { grossSalary: 19000, netMin: 13500, netMax: 15000 },
    "Randers": { grossSalary: 17000, netMin: 12500, netMax: 14000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Deltid (60 timer/md)", grossSalary: 9600, netMin: 6940, netMax: 7800 },
    { type: "Deltid (100 timer/md)", grossSalary: 16000, netMin: 9630, netMax: 12000 },
    { type: "Fuld tid (150 timer/md)", grossSalary: 24000, netMin: 16000, netMax: 18780 }
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
        title="Wolt Løn Efter Skat 2025 – Realistiske Estimater og Eksempler"
        description="Hvad tjener en Wolt-kurér efter skat? Se opdaterede tal for 2025, inklusive timer, fradrag og byer – og beregn din Wolt løn efter skat med få klik."
        keywords="wolt løn, wolt kurér, wolt løn efter skat, wolt indkomst, wolt timeløn, wolt indtjening, wolt skat"
      />
      <Header />
      <PageTitle title="Wolt Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Wolt Løn Efter Skat 2025 – fra blå taske til bank­konto</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som selvstændig Wolt-kurér fakturerer du typisk 120 – 180 kr. pr. time (løn før skat). Wolt kommunikerer et gennemsnit omkring 160 kr./t og 200 kr./t i "peak". Det giver – alt efter hvor mange timer du kører – en månedlig løn før skat på 7.200 - 27.000 kr. Efter AM-bidrag (8%), person­fradrag og normal kommuneskat betyder det en Wolt løn efter skat på ca. 4.900 – 19.800 kr. pr. måned. Regn dit præcise nettobeløb i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – prøv igen, når dine timer eller fradrag ændrer sig.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Wolt Løn – Før & Efter Skat i 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Timer / md.</th>
                    <th className="py-2 px-4 border-b text-right">120 kr./t</th>
                    <th className="py-2 px-4 border-b text-right">160 kr./t</th>
                    <th className="py-2 px-4 border-b text-right">180 kr./t</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">60 t (deltid)</td>
                    <td className="py-2 px-4 border-b text-right">7.200 kr.</td>
                    <td className="py-2 px-4 border-b text-right">9.600 kr.</td>
                    <td className="py-2 px-4 border-b text-right">10.800 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">100 t</td>
                    <td className="py-2 px-4 border-b text-right">12.000 kr.</td>
                    <td className="py-2 px-4 border-b text-right">16.000 kr.</td>
                    <td className="py-2 px-4 border-b text-right">18.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">150 t (fuld tid)</td>
                    <td className="py-2 px-4 border-b text-right">18.000 kr.</td>
                    <td className="py-2 px-4 border-b text-right">24.000 kr.</td>
                    <td className="py-2 px-4 border-b text-right">27.000 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer din Wolt løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Faktor</th>
                    <th className="py-2 px-4 border-b text-left">Effekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Antal leveringer pr. time</td>
                    <td className="py-2 px-4 border-b">Høj urbant tæthed ⇒ flere drop pr. time og højere effektive timeløn.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Dynamisk takst</td>
                    <td className="py-2 px-4 border-b">Wolt betaler pr. distance + efterspørgsels­boost; "peak" kl. 17-20 kan ramme 200 kr./t.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">By & zone</td>
                    <td className="py-2 px-4 border-b">Randers-bud rapporterer ned til 110 kr./t, mens København ofte ligger 150-190 kr./t.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Transportmiddel</td>
                    <td className="py-2 px-4 border-b">Bil giver kilometergodtgørelse (3,79 kr./km) som skatte­fri indtægt; cykelbud kan fradrage slid.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Skattemodel</td>
                    <td className="py-2 px-4 border-b">Du får B-indkomst: 8% AM-bidrag + personlig skat; fradrag for drifts­udgifter og befordring kan skære 10-20% af skatte­grundlaget.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Kommuneskat</td>
                    <td className="py-2 px-4 border-b">Spændet 0,8 pct-point koster / giver ≈ 700 kr./md. i Wolt løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="my-4">
              Bemærk: Vil du bruge din Wolt-indtægt til A-kasse­dagepenge, skal timelønnen være "sædvanlig" – i 2025 mindst 142,15 kr./t.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tre realistiske scenarier 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Scenario</th>
                    <th className="py-2 px-4 border-b text-right">Timer / md.</th>
                    <th className="py-2 px-4 border-b text-right">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-right">Fradrag*</th>
                    <th className="py-2 px-4 border-b text-right">Skat**</th>
                    <th className="py-2 px-4 border-b text-right">Wolt løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Studiejob (cykel, Odense)</td>
                    <td className="py-2 px-4 border-b text-right">60</td>
                    <td className="py-2 px-4 border-b text-right">9.600 kr.</td>
                    <td className="py-2 px-4 border-b text-right">600 kr.</td>
                    <td className="py-2 px-4 border-b text-right">1.980 kr.</td>
                    <td className="py-2 px-4 border-b text-right">≈ 6.940 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Deltid (bil, Aarhus)</td>
                    <td className="py-2 px-4 border-b text-right">100</td>
                    <td className="py-2 px-4 border-b text-right">16.000 kr.</td>
                    <td className="py-2 px-4 border-b text-right">2.500 kr. (kørsel)</td>
                    <td className="py-2 px-4 border-b text-right">3.870 kr.</td>
                    <td className="py-2 px-4 border-b text-right">≈ 9.630 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Fuld tid (cykel, KBH)</td>
                    <td className="py-2 px-4 border-b text-right">150</td>
                    <td className="py-2 px-4 border-b text-right">27.000 kr.</td>
                    <td className="py-2 px-4 border-b text-right">1.500 kr.</td>
                    <td className="py-2 px-4 border-b text-right">6.720 kr.</td>
                    <td className="py-2 px-4 border-b text-right">≈ 18.780 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm italic mb-4">
              * Kørsel, slid, telefon mv. ** AM-bidrag + B-skat efter 25% samlet træk.
            </p>
            
            <p className="mb-6">
              Lav dine egne beregninger i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget fradrag ændrer bundlinjen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at hæve din Wolt løn efter skat</h2>
            
            <ol className="list-decimal pl-5 space-y-2 mb-6">
              <li>Kør "peak" fredag-søndag kl. 17-21 – taksterne topper {'>'} 200 kr./t.</li>
              <li>Samleleverance & bundles – flere drop per rute = højere kr./time.</li>
              <li>Optimer skat – træk cykelslid, regntøj, mobil­abonnement og revisor fra som drifts­udgifter.</li>
              <li>Vælg lav-skat kommune / forskuds­registrér – undgå restskat og spar op til 700 kr. netto pr. måned.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Wolt Løn Efter Skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-2 px-4 border-b text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Betaler Wolt min skat?</td>
                    <td className="py-2 px-4 border-b">Nej, du modtager B-indkomst og indberetter selv.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Er AM-bidrag obligatorisk?</td>
                    <td className="py-2 px-4 border-b">Ja, 8% af brutto­indtægten.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Skal jeg moms­registreres?</td>
                    <td className="py-2 px-4 border-b">Først hvis omsætningen {'>'} 50.000 kr./år med billevering (moms på fragt).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Kan jeg trække min cykel fra?</td>
                    <td className="py-2 px-4 border-b">Ja, som driftsmiddel afskrives over 5 år.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p className="mb-6">
              I 2025 ligger wolt løn efter skat typisk mellem 5.000 og 19.000 kr. om måneden – afhængigt af timer, by og skattemæssige fradrag. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> som din kalkulator, før du klikker "Go Online".
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Woltfakta – gennemsnit 160 kr./t, {'>'} 200 kr./t i peak (<a href="https://www.woltfakta.dk/sporgsmal-og-svar/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">woltfakta.dk</a>)</li>
              <li>Fagbladet 3F – gennemsnit 170 kr. (2021) og regional variation (<a href="https://fagbladet3f.dk/det-er-falsk-reklame/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Fagbladet3f</a>)</li>
              <li>Vice & Reddit-erfaringer – 500-700 kr. på 4-timers vagt (≈125-175 kr./t) (<a href="https://www.reddit.com/r/Denmark/comments/ok22p3/sp%C3%B8rgsm%C3%A5l_ang%C3%A5ende_l%C3%B8n_og_wolt_i_danmark/?tl=da" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Reddit</a>, VICE)</li>
              <li>Det Faglige Hus – krav om ≥ 142,15 kr./t for dagpenge­optjening (2025) (<a href="https://www.detfagligehus.dk/spoergsmaal-og-svar/ledig/hvornaar-har-jeg-ret-til-at-faa-dagpenge/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Det Faglige Hus</a>)</li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: oktober 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WoltLoenPage; 