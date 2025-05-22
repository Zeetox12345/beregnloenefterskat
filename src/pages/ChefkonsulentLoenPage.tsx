import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ChefkonsulentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 70000, netMin: 44500, netMax: 45300 },
    "Aarhus": { grossSalary: 64000, netMin: 40500, netMax: 41300 },
    "Odense": { grossSalary: 60000, netMin: 38000, netMax: 38800 },
    "Aalborg": { grossSalary: 57000, netMin: 36000, netMax: 36800 },
    "Esbjerg": { grossSalary: 55000, netMin: 34800, netMax: 35600 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior / nyudnævnt (0-2 år)", grossSalary: 50000, netMin: 32000, netMax: 32800 },
    { type: "Chefkonsulent (3-5 år)", grossSalary: 58000, netMin: 37000, netMax: 37800 },
    { type: "Senior / specialist (6-8 år)", grossSalary: 65000, netMin: 41000, netMax: 41900 },
    { type: "Lead / ansvar for team", grossSalary: 72000, netMin: 45000, netMax: 45800 },
    { type: "Direktions-nær partnertrack", grossSalary: 75000, netMin: 47000, netMax: 47800 }
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
        title="Chefkonsulent Løn Efter Skat 2025 – Se Realistiske Estimater"
        description="Hvad får en chefkonsulent udbetalt efter skat? Se opdaterede tal for 2025 baseret på erfaring, branche og bonus – og beregn din egen nettoløn online."
        keywords="chefkonsulent løn, chefkonsulent løn efter skat, chefkonsulent nettoløn, chefkonsulent indkomst, chefkonsulent bonus"
      />
      <Header />
      <PageTitle title="Chefkonsulent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Chefkonsulent Løn Efter Skat 2025 – tallene bag titlen</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids chefkonsulent (37 t/uge) kan i 2025 som tommelfingerregel forvente en løn før skat på 50 000 – 75 000 kr. pr. måned – fra nyudnævnt til erfaren senior i den private sektor. Det svarer til en chefkonsulent løn efter skat på cirka 32 000 – 47 000 kr. afhængigt af branche, bonus, personaleansvar og kommune. Vil du kende dit præcise nettobeløb? Test det på under ét minut i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – og husk at prøve igen, når din bonus eller kommuneskat ændrer sig.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger chefkonsulent løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-2 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Sektor & branche</td>
                    <td className="py-2 px-4 border-b">Chefkonsulenter i det offentlige ligger i intervallet 52 000 – 62 000 kr./md. før skat, mens private life-science, IT og energi betaler 5-10 % over gennemsnittet</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Erfaring & ansvar</td>
                    <td className="py-2 px-4 border-b">DM's 2025-tal viser 51 900 kr. før skat som nettoløn for kommunale chefkonsulenter; toplaget i staten runder 62 000 kr./md. før skat</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Bonus & resultatløn</td>
                    <td className="py-2 px-4 border-b">10-20 % af årsløn i private konsulenthuse – beskattes som almindelig A-indkomst.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Kvalifikations- og funktionstillæg</td>
                    <td className="py-2 px-4 border-b">Lokale tillæg kan udgøre 4-6 000 kr./md. før skat – mænd får i gennemsnit større tillæg end kvinder</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Pension 12-17 %</td>
                    <td className="py-2 px-4 border-b">Arbejdsgiver­bidrag trækkes før skat; forbedrer totalpakken, men ses ikke i nettolønnen.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-2 px-4 border-b">Spænd på 0,8 pct-point → ± ≈ 700 kr./md. i chefkonsulent løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn før & efter skat – typiske niveauer 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Titel / Erfaring</th>
                    <th className="py-2 px-4 border-b text-right">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-right">Chef­konsulent løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-4 border-b">{item.type}</td>
                      <td className="py-2 px-4 border-b text-right">{item.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-2 px-4 border-b text-right">{item.netMin.toLocaleString("da-DK")} – {item.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={3} className="py-2 px-4 border-t text-sm italic">
                      * Beregnet uden kirkeskat; AM-bidrag 8 % og gennemsnitlig kommuneskat 24,9 %.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale gennemsnit 2025 (senior chefkonsulent, 160 t/md.)</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Region</th>
                    <th className="py-2 px-4 border-b text-right">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-right">Efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((city, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? "bg-gray-50" : ""} ${
                        city.city === selectedCity ? "bg-blue-50" : ""
                      } hover:bg-blue-50 cursor-pointer transition-colors`}
                      onClick={() => setSelectedCity(city.city)}
                    >
                      <td className="py-2 px-4 border-b font-medium">{city.city}</td>
                      <td className="py-2 px-4 border-b text-right">{city.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-2 px-4 border-b text-right">{city.netMin.toLocaleString("da-DK")} – {city.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – privat life-science, Aarhus med 12 % bonus</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2"><span className="font-medium">Grundløn før skat:</span> 64 000 kr.</p>
                  <p className="mb-2"><span className="font-medium">Månedlig bonus (12 % af årsløn):</span> 7 680 kr.</p>
                  <p className="mb-2"><span className="font-medium">Samlet før skat:</span> 71 680 kr.</p>
                  <p className="mb-2"><span className="font-medium">AM-bidrag 8 %:</span> 5 734 kr.</p>
                </div>
                <div>
                  <p className="mb-2"><span className="font-medium">Skattepligtig indkomst:</span> 65 946 kr.</p>
                  <p className="mb-2"><span className="font-medium">Personfradrag:</span> 4 650 kr.</p>
                  <p className="mb-2"><span className="font-medium">Beskatningsgrundlag:</span> 61 296 kr.</p>
                  <p className="mb-2"><span className="font-medium">A-skat (ca. 37%):</span> 22 680 kr.</p>
                  <p className="mt-4 font-bold">Chef­konsulent løn efter skat ca. 43 530 kr.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>Certificér dig (PMP, Prince2, SAP, CFA) – udløser ofte 3-5 % lønlyft.</li>
              <li>Forhandl resultatbonus koblet til EBIT eller projektmargin – 10-20 % er ikke usædvanligt i private konsulenthuse.</li>
              <li>Skift branche til life-science, energi eller IT-SaaS – her ligger spidserne 5-10 % over medianen.</li>
              <li>Flyt til lav-skat kommune – kan give op til 700 kr. ekstra i chefkonsulent løn efter skat hver måned uden ekstra arbejde.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Chefkonsulent Løn Efter Skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-2 px-4 border-b text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Betaler alle chefkonsulenter topskat?</td>
                    <td className="py-2 px-4 border-b">De fleste gør – topskat rammer ved brutto­løn 63 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Indgår pension i nettoløn?</td>
                    <td className="py-2 px-4 border-b">Nej. 12-17 % pension indbetales før skat og ses ikke i udbetalingen.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Er bonus beskattet anderledes?</td>
                    <td className="py-2 px-4 border-b">Nej, bonus beskattes som almindelig A-indkomst og påvirker topskatten.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p>
              I 2025 ligger chefkonsulent løn efter skat typisk mellem 32 000 og 47 000 kr. Grundløn, bonus og kommuneskat er de vigtigste løftestænger. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et stærkt udgangspunkt, før du går ind til næste lønforhandling.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><a href="https://dm.dk/din-loen/loenstatistik-og-loentabeller/kommunalt-ansat/special-og-chefkonsulent/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DM Lønstatistik 2025 – Kommunale special- og chefkonsulenter</a></li>
              <li><a href="https://www.djoef.dk/loenoversigt" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Djøf Lønoversigt 2025 – statslige chefkonsulenttrinsatser</a></li>
              <li><a href="https://indkomsten.dk/hvad-tjener-en/chefkonsulent/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Indkomsten.dk – gennemsnit 57 000 kr./md. for chefkonsulenter</a></li>
              <li><a href="https://www.djoef.dk/-/media/documents/a/analyser/ligelnsanalyse-2023.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Djøfbladet 2023 – forskel i lokale tillæg mellem køn</a></li>
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

export default ChefkonsulentLoenPage; 