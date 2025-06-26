import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AuPairLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 4900, netMin: 4500, netMax: 4500 },
    "Aarhus": { grossSalary: 4900, netMin: 4400, netMax: 4400 },
    "Odense": { grossSalary: 4900, netMin: 4450, netMax: 4450 },
    "Aalborg": { grossSalary: 4900, netMin: 4480, netMax: 4480 },
    "Esbjerg": { grossSalary: 4900, netMin: 4520, netMax: 4520 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Første år som au pair", grossSalary: 4900, netMin: 3000, netMax: 4500 },
    { type: "Au pair med tidligere erfaring", grossSalary: 4900, netMin: 3000, netMax: 4500 },
    { type: "Med ekstra ansvar", grossSalary: 4900, netMin: 3000, netMax: 4500 },
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
        title="Au Pair Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Den officielle au pair-løn er 4 900 kr. før skat i 2025. Se hvor meget en au pair løn efter skat er – typisk 3 000 – 4 500 kr. Brug beregn løn efter skat for præcise tal."
        keywords="au pair løn, au pair løn efter skat, lommepenge au pair, au pair 2025, stipendium au pair"
      />
      <Header />
      <PageTitle title="Au Pair Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Au Pair Løn Efter Skat 2025 – Stipendiet, Skatten og Dit Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — I 2025 skal en dansk værtsfamilie udbetale 4 900 kr. før skat om måneden til deres au pair – det officielle lommepenge­beløb fastsat af Udlændinge­styrelsen. Efter arbejdsmarkeds­bidrag (8 %) og almindelig trækprocent (≈ 37 %) står en au pair løn efter skat på ca. 3 000 kr. tilbage. Indtast 4 900 kr. i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at få det nøjagtige nettobeløb, hvis din kommune­sats eller trækprocent afviger.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker au pair løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Faktor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Betydning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lovpligtigt lommepenge­beløb</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Minimum 4 900 kr./md. (pr. 1. januar 2025)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kost & logi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Stillet af familien – skattepligtig værdi sat til 2 000 kr./md., men videre­faktureres ikke til au pairen</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Arbejdstimer</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Maks. 30 t/uge; ingen over­arbejds­tillæg eller bonus</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Feriegodtgørelse</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,08 feriedage/md. med løn – ikke et decideret tillæg</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pension</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ingen pensions­indbetaling i ordningen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønberegning 2025 – Au Pair</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Post</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Beløb</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lommepenge før skat</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 900 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">AM-bidrag 8 %</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">392 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Skattepligtig indkomst</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 508 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Personfradrag (4 650 kr.)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">– 4 508 kr. (dækker fuldt)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Beskatningsgrundlag</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">A-skat</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0 kr.</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Au pair løn efter skat</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">≈ 4 508 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6">
              Det gennemsnitlige nettobeløb ender omkring 3 000 – 4 500 kr./md. afhængigt af, om au pairen allerede har opbrugt sit person­fradrag på andet arbejde i Danmark.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Au Pair Løn – Før & Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">By</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Bruttoløn (månedlig)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Nettoløn (ca.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cityExamples.map((example) => (
                    <tr 
                      key={example.city}
                      className={selectedCity === example.city ? "bg-blue-50" : "hover:bg-gray-50"}
                      onClick={() => setSelectedCity(example.city)}
                      style={{ cursor: 'pointer' }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{example.city}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{example.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{example.netMin.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel – Au Pair i København</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <p className="mb-2"><strong>Lommepenge før skat:</strong> 4 900 kr.</p>
              <p className="mb-2"><strong>Kommunesats:</strong> 23,5 %</p>
              <p className="mb-4"><strong>Netto udbetaling:</strong> ≈ 4 500 kr.</p>
              <p>
                Indtast blot 4 900 kr. i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se præcist tal for din kommune.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige fakta om au pair økonomi</h2>

            <ul className="list-disc pl-6 mb-6">
              <li className="mb-3">
                <strong>Skattefri?</strong> Kun hvis hele årslønnen + værdi af kost & logi holder sig under personfradraget (≈ 55 800 kr.). I praksis beskattes de fleste au pairer kun af AM-bidraget.
              </li>
              <li className="mb-3">
                <strong>Gratis bolig & mad</strong> svarer til en bruttoværdi rundt 2 000 kr./md., men familierne betaler skatten af den del.
              </li>
              <li className="mb-3">
                <strong>Ingen overarbejde</strong> – au pairen må max arbejde 5 timer pr. dag.
              </li>
              <li className="mb-3">
                <strong>Sygesikring</strong> følger CPR-registrering; der er ingen særskilt sundheds­forsikring indregnet i lønnen.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad Gør Du for at Maksimere Din Au Pair Løn Efter Skat?</h2>

            <p className="mb-4">
              Som au pair har du begrænsede muligheder for at påvirke din nettoløn, da lommepenge­beløbet er lovbestemt. Her er dog nogle tips:
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>Forstå dit personfradrag:</strong> Hvis du ikke har anden indtægt i Danmark, vil hele dit personfradrag kunne bruges til au pair-indkomsten.
              </li>
              <li className="mb-2">
                <strong>Sørg for korrekt skattetræk:</strong> Kontakt SKAT hvis trækprocenten synes for høj eller lav.
              </li>
              <li className="mb-2">
                <strong>Dokumentér alle fradrag:</strong> Transport til danskundervisning og andre nødvendige udgifter kan muligvis fratrækkes.
              </li>
              <li className="mb-2">
                <strong>Forstå værdien af kost & logi:</strong> Selvom det beskattes, betaler familien denne del – du får real værdi uden egenudgift.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Au Pair Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Spørgsmål</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Svar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Hvad er den officielle au pair løn før skat i 2025?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">4 900 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Hvor meget får jeg udbetalt efter skat?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Ca. 3 000 – 4 500 kr., afhængig af om personfradraget er opbrugt.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Skal jeg betale skat af kost & logi?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Nej, værtsfamilien indberetter og betaler skatten af den skønnede værdi.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Kan en au pair tjene ekstra hos andre familier?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Nej, bistands­aftalen forbyder andet arbejde end hos værts­familien.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p className="mb-6">
              Au pair løn efter skat ender i 2025 som regel på omkring 3 000 – 4 500 kr. pr. måned, når det lov­pligtige lommepenge­beløb på 4 900 kr. reguleres for AM-bidrag og eventuel indkomst­skat. Derudover dækker familien bolig, mad, rejse­kort og dansk­kursus, hvilket øger den samlede værdi væsentligt. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> til at se præcist, hvordan skatten påvirker nettopengene i din kommune.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                Udlændinge- og Integrations­ministeriet – Au pair-bekendtgørelsen 2025 (lommepenge­sats 4 900 kr.)
              </li>
              <li className="mb-2">
                Skat.dk – Vejledning om beskatning af au pair-ophold (AM-bidrag, kost & logi-værdi)
              </li>
              <li className="mb-2">
                FOA – Oversigt over skat og fradrag for au pairer 2025
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

export default AuPairLoenPage; 