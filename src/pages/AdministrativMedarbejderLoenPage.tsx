import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AdministrativMedarbejderLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 37000, netMin: 24300, netMax: 24800 },
    "Aarhus": { grossSalary: 35000, netMin: 23000, netMax: 23500 },
    "Odense": { grossSalary: 33000, netMin: 21800, netMax: 22300 },
    "Aalborg": { grossSalary: 32000, netMin: 21200, netMax: 21700 },
    "Esbjerg": { grossSalary: 31000, netMin: 20600, netMax: 21100 },
    "Randers": { grossSalary: 30000, netMin: 20000, netMax: 20500 },
    "Kolding": { grossSalary: 31500, netMin: 20800, netMax: 21300 },
    "Horsens": { grossSalary: 30500, netMin: 20300, netMax: 20800 },
    "Vejle": { grossSalary: 32000, netMin: 21200, netMax: 21700 },
    "Roskilde": { grossSalary: 35500, netMin: 23300, netMax: 23800 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Ny i job (trin 19)", grossSalary: 29000, netMin: 19000, netMax: 19400 },
    { type: "3–5 års erfaring (trin 24)", grossSalary: 33000, netMin: 21800, netMax: 22300 },
    { type: "Specialist / projektkoordinator", grossSalary: 37000, netMin: 24300, netMax: 24800 },
    { type: "Senior / teamansvarlig (storby)", grossSalary: 42000, netMin: 27400, netMax: 27900 }
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
        title="Administrativ Medarbejder Løn Efter Skat 2025 – Se Din Nettoløn"
        description="Hvad er en administrativ medarbejder løn efter skat i 2025? Typisk 19.000–27.000 kr. udbetalt. Før skat: 29.000–42.000 kr. Beregn din egen nettoløn hurtigt på beregn løn efter skat."
        keywords="administrativ medarbejder løn, løn efter skat, nettoløn, kontorassistent, administrativ assistent"
      />
      <Header />
      <PageTitle title="Administrativ Medarbejder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Administrativ Medarbejder Løn Efter Skat 2025 – Fra Indbakke til Nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids administrativ medarbejder (37 t/uge) kan i 2025 forvente en løn før skat på cirka 29 000 – 42 000 kr. pr. måned, alt efter branche, anciennitet og funktionstillæg. Det svarer til en administrativ medarbejder løn efter skat på omtrent 19 000 – 27 000 kr. Vil du kende din præcise nettoløn? Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en administrativ medarbejder løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Lønfaktor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Hvorfor det ændrer nettobeløbet
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Overenskomst & løntrin
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      HK Privat/KL‐skalaen spænder fra løntrin 19 til 31, svarende til 29 000 – 38 000 kr./md. før skat.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Branche
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Finans, pharma og tech betaler 5–10 % over detail og non-profit; offentlige stillinger ligger ofte 3–5 % under privat.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Tillæg & bonus
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Funktions- eller projekt­tillæg kan give 1 000 – 2 500 kr./md.; kontorbonus 2–5 % af årlig KPI‐målopfyldelse.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Geografi
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Storkøbenhavn og Østjylland betaler ca. 7 % mere end landsgennemsnittet; yderkommuner 4 % mindre.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Pension 12–15 %
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Arbejdsgiverbidraget indbetales før skat – ses ikke i nettolønnen, men øger den samlede værdi.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Administrativ Medarbejder</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Erfaring / Rolle
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Løn før skat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Løn efter skat*
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {experienceData.map((level, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {level.type}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {level.grossSalary.toLocaleString()} kr.
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {level.netMin.toLocaleString()} – {level.netMax.toLocaleString()} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %. Justér for din kommune i beregneren.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Projektkoordinator på trin 27</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-900">Post</td>
                      <td className="py-2 text-sm font-medium text-gray-900 text-right">Beløb</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm text-gray-700">Løn før skat</td>
                      <td className="py-2 text-sm text-gray-700 text-right">37 000 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm text-gray-700">AM-bidrag 8 %</td>
                      <td className="py-2 text-sm text-gray-700 text-right">2 960 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm text-gray-700">Skattepligtig indkomst</td>
                      <td className="py-2 text-sm text-gray-700 text-right">34 040 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm text-gray-700">Personfradrag</td>
                      <td className="py-2 text-sm text-gray-700 text-right">4 650 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm text-gray-700">Beskatningsgrundlag</td>
                      <td className="py-2 text-sm text-gray-700 text-right">29 390 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm text-gray-700">A-skat (≈ 37 %)</td>
                      <td className="py-2 text-sm text-gray-700 text-right">10 860 kr.</td>
                    </tr>
                    <tr className="border-t-2 border-blue-300">
                      <td className="py-2 text-sm font-bold text-gray-900">Administrativ medarbejder løn efter skat</td>
                      <td className="py-2 text-sm font-bold text-gray-900 text-right">≈ 24 500 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til en højere nettoløn</h2>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Tag specialist­opgaver</h3>
                <p className="text-sm text-gray-700">
                  F.eks. SAP-superbruger, GDPR-koordinator eller ESG-rapportering; udløser funktions­tillæg.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Forhandl KPI-bonus</h3>
                <p className="text-sm text-gray-700">
                  Bind den til sags­behandlingstid, kunde­tilfredshed eller proces­forbedringer.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Udnyt overtid og flextimer</h3>
                <p className="text-sm text-gray-700">
                  Timer over 37 aflønnes med 50–100 % tillæg i mange overenskomster.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Søg stilling i lav-skat-kommune</h3>
                <p className="text-sm text-gray-700">
                  Kan løfte nettolønnen 400–600 kr./md. uden flere arbejdsopgaver.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Administrativ Medarbejder Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Spørgsmål
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Kort svar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Hvad tjener en ny administrativ medarbejder efter skat?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Omkring 19 000 kr. pr. måned.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Hvordan når jeg 27 000 kr. efter skat?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      7+ års erfaring, funktions­tillæg og storby-løntrin.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Beskattes bonus og overtid normalt?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Ja – de udbetales som A-indkomst og beskattes som fast løn.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Indgår pension i nettoløn?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Nej – pensionen indbetales før skat.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p className="mb-4">
              I 2025 ligger administrativ medarbejder løn efter skat typisk mellem 19 000 og 27 000 kr. pr. måned – baseret på 29 000 – 42 000 kr. før skat. Funktions­tillæg, branche og bonus­ordninger er de hurtigste veje til en højere nettoløn. Beregn dit egen udbetaling i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få styr på, hvad der reelt lander på kontoen, når indbakken er tømt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <a href="https://www.hk.dk/raadogstoette/loen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  HK Privat – Lønstatistik og løntrin 2025
                </a>
              </li>
              <li className="mb-2">
                <a href="https://indkomsten.dk/hvad-tjener-en/administrativ-medarbejder/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Indkomsten.dk – Administrativ medarbejder gennemsnitsløn, maj 2025
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.salaryexpert.com/salary/job/administrator-assistant/denmark/copenhagen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  SalaryExpert – Administrative Assistant, Denmark & Copenhagen (2025)
                </a>
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

export default AdministrativMedarbejderLoenPage; 