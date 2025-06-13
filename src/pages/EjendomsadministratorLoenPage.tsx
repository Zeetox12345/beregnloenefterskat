import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const EjendomsadministratorLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 41000, netMin: 26500, netMax: 27000 },
    "Aarhus": { grossSalary: 39000, netMin: 25500, netMax: 26000 },
    "Odense": { grossSalary: 37000, netMin: 24500, netMax: 25000 },
    "Aalborg": { grossSalary: 36000, netMin: 24000, netMax: 24500 },
    "Esbjerg": { grossSalary: 35000, netMin: 23500, netMax: 24000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0-2 år)", grossSalary: 34000, netMin: 22000, netMax: 22500 },
    { type: "Administrator (3-6 år)", grossSalary: 40000, netMin: 26000, netMax: 26500 },
    { type: "Senior / Team Lead", grossSalary: 46000, netMin: 30000, netMax: 30500 },
    { type: "Porteføljechef (Kbh.)", grossSalary: 52000, netMin: 34000, netMax: 34500 },
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
        title="Ejendomsadministrator Løn Efter Skat 2025 – Fra Lejekontrakt til Nettobeløb"
        description="Hvad tjener en ejendomsadministrator efter skat i 2025? Se realistiske lønbånd før og efter skat – og beregn din præcise nettoløn med beregn løn efter skat."
        keywords="ejendomsadministrator løn, ejendomsadministrator løn efter skat, property manager løn, ejendomsadministration løn"
      />
      <Header />
      <PageTitle title="Ejendomsadministrator Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Ejendomsadministrator Løn Efter Skat 2025 – Fra Lejekontrakt til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids ejendomsadministrator (37 t/uge) kan i 2025 forvente en løn før skat på ca. 34 000 – 52 000 kr. pr. måned – afhængigt af porteføljestørrelse, branche (boligforening, pensionskasse, PropTech) og erfaring. Det svarer til en ejendomsadministrator løn efter skat på cirka 22 000 – 34 000 kr. Få dit helt præcise tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer en ejendomsadministrator løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Lønfaktor</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Hvorfor det gør en forskel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Grundløn</td>
                    <td className="px-4 py-3">Dansk Ejendomsadministrations lønstatistik 2025 viser gennemsnit ≈ 38 700 kr./md. før skat.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Geografi</td>
                    <td className="px-4 py-3">Hovedstaden betaler ca. 7 % mere end landsgennemsnittet (≈ 41 000 kr./md.).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Erfaring & titel</td>
                    <td className="px-4 py-3">Junior (0-2 år) ≈ 34 k; administrator (3-6 år) ≈ 40 k; senior/porteføljechef ≈ 52 k.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Bonus & incitament</td>
                    <td className="px-4 py-3">KPI-bonus for tomgangsreduktion eller effektiv inddrivelse: 5–10 % af årslønnen.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Certificeringer</td>
                    <td className="px-4 py-3">EA-uddannelsen fra EjendomDanmark giver typisk +1 500 – 3 000 kr./md. før skat.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Pension 15 %</td>
                    <td className="px-4 py-3">Indbetales før skat og løfter totalpakken, men vises ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Ejendomsadministrator Løn – Før & Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">By</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Løn før skat</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((city, index) => (
                    <tr
                      key={city.city}
                      className={`border-b cursor-pointer hover:bg-gray-50 ${
                        selectedCity === city.city ? "bg-blue-50" : ""
                      }`}
                      onClick={() => setSelectedCity(city.city)}
                    >
                      <td className="px-4 py-3 font-medium">{city.city}</td>
                      <td className="px-4 py-3">{city.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-3">{city.netMin.toLocaleString()} – {city.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Ejendomsadministrator 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Erfaring / Rolle</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Løn før skat</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((level, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{level.type}</td>
                      <td className="px-4 py-3">{level.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-3">{level.netMin.toLocaleString()} – {level.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic my-4">
              * Nettobeløb beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og typisk trækprocent på 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Administrator med 5 års erfaring</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Post</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Løn før skat</td>
                    <td className="px-4 py-3">40 000 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">AM-bidrag 8 %</td>
                    <td className="px-4 py-3">3 200 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Skattepligtig indkomst</td>
                    <td className="px-4 py-3">36 800 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Personfradrag</td>
                    <td className="px-4 py-3">4 650 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Beskatningsgrundlag</td>
                    <td className="px-4 py-3">32 150 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">A-skat (≈ 37 %)</td>
                    <td className="px-4 py-3">11 900 kr.</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-3 font-bold">Ejendomsadministrator løn efter skat</td>
                    <td className="px-4 py-3 font-bold">≈ 26 200 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="my-4">
            Indtast dit tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – resultatet kommer med det samme.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til højere nettoløn</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span><strong>Tag EA-uddannelsen</strong> – certificeret ejendomsadministrator hæver basislønnen 2-3 k/md.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <span><strong>Forhandl KPI-bonus</strong> – fx mål for inkassohastighed eller renoveringsbudgetter.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <span><strong>Skift til pensionskasse eller international asset-manager</strong> – ofte 5-10 % højere grundløn.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  <span><strong>Flyt til lav-skat kommune</strong> – kan øge nettolønnen 500-700 kr./md. uden ekstra arbejde.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en ejendomsadministrator løn efter skat?</h2>

            <p className="mb-4">
              Som ejendomsadministrator er du ansvarlig for den daglige drift af ejendomme – fra lejere og vedligeholdelse til økonomi og budgetter. Din løn afhænger primært af:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Porteføljestørrelse:</strong> Antal enheder og samlet værdi af de ejendomme, du administrerer</li>
              <li><strong>Geografisk placering:</strong> Københavnsområdet betaler generelt højest</li>
              <li><strong>Arbejdsgivertype:</strong> Pensionskasser og internationale selskaber betaler ofte mere end lokale boligforeninger</li>
              <li><strong>Uddannelse og certificeringer:</strong> EA-uddannelsen (Ejendomsadministrator) fra EjendomDanmark er værdsat</li>
              <li><strong>Specialisering:</strong> PropTech, REIT-forvaltning eller internationale porteføljer giver præmier</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Ejendomsadministrator Løn Efter Skat</h2>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg">Hvad tjener en ny ejendomsadministrator efter skat?</h3>
                <p className="text-gray-700">Ca. 22 000 kr. pr. måned.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg">Hvordan når jeg 30 000 kr. efter skat?</h3>
                <p className="text-gray-700">6-8 års erfaring, EA-certifikat, KPI-bonus og/eller job i hovedstaden.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg">Tæller bonus i nettoløn?</h3>
                <p className="text-gray-700">Ja, den beskattes som almindelig løn.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg">Indgår pension i nettobeløbet?</h3>
                <p className="text-gray-700">Nej – pensionsbidraget (≈ 15 %) indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en ejendomsadministrator?</h2>

            <p className="mb-4">
              En ejendomsadministrator står for den daglige drift af erhvervs- og boligejendomme. Det omfatter:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Kontakt til lejere og håndtering af klager</li>
              <li>Koordinering af vedligeholdelse og reparationer</li>
              <li>Budgetlægning og regnskabsopfølgning</li>
              <li>Huslejeopkrævning og restancehåndtering</li>
              <li>Kontraktforhandling med leverandører</li>
              <li>Rapportering til ejendomsejere eller bestyrelser</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til højere ejendomsadministrator løn</h2>

            <div className="bg-green-50 p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Boost din indkomst som ejendomsadministrator:</h3>
              <ul className="space-y-2">
                <li>✅ <strong>Specialiser dig:</strong> PropTech, REIT-forvaltning eller internationale porteføljer</li>
                <li>✅ <strong>Netværk aktivt:</strong> Deltag i EjendomDanmarks arrangementer</li>
                <li>✅ <strong>Målret dine ansøgninger:</strong> Pensionskasser og investeringsselskaber betaler ofte mest</li>
                <li>✅ <strong>Forhandl performance-bonus:</strong> Knyt løn til tomgangsreduktion eller effektiv drift</li>
                <li>✅ <strong>Overvej freelance:</strong> Mange mindre ejendomsejere har brug for part-time administration</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p className="mb-4">
              I 2025 ligger ejendomsadministrator løn efter skat typisk mellem 22 000 og 34 000 kr. om måneden – baseret på 34 000 – 52 000 kr. før skat. Certificeringer, porteføljestørrelse og KPI-bonus er de hurtigste veje til et større nettobeløb. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se det nøjagtige tal, når huslejen er indkrævet og balancerne stemmer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>EjendomDanmark Lønstatistik 2025 – Ejendomsadministratorer.</li>
              <li>SalaryExpert – Property Manager Denmark & Copenhagen (2025).</li>
              <li>Indkomsten.dk – Ejendomsadministrator gennemsnitsløn (maj 2025).</li>
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

export default EjendomsadministratorLoenPage; 