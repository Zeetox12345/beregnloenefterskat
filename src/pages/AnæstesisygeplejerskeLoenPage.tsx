import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AnæstesisygeplejerskeLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Hovedstaden");
  
  // City-specific salary data
  const cityData = {
    "Hovedstaden": { grossSalary: 58000, netMin: 37000, netMax: 37800 },
    "Midtjylland": { grossSalary: 56000, netMin: 35800, netMax: 36600 },
    "Syddanmark": { grossSalary: 53000, netMin: 34000, netMax: 34700 },
    "Nordjylland": { grossSalary: 51000, netMin: 32700, netMax: 33400 },
    "Sjælland": { grossSalary: 50000, netMin: 32000, netMax: 32700 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet specialist (0 – 2 år)", grossSalary: 45000, netMin: 29400, netMax: 30000 },
    { type: "3 – 5 år", grossSalary: 50000, netMin: 32500, netMax: 33200 },
    { type: "6 – 8 år + vagt", grossSalary: 55000, netMin: 35600, netMax: 36300 },
    { type: "9 + år / koordinator", grossSalary: 60000, netMin: 38000, netMax: 38800 },
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
        title="Anæstesisygeplejerske Løn Efter Skat 2025 – Realistiske Eksempler"
        description="Se hvad du som anæstesisygeplejerske får udbetalt efter skat i 2025. Løntabeller, vagttillæg og regionale forskelle – beregn din egen nettoløn hurtigt."
        keywords="anæstesisygeplejerske løn, løn efter skat, sygeplejerske løn, narkosesygeplejerske, vagttillæg, specialsygeplejerske løn"
      />
      <Header />
      <PageTitle title="Anæstesisygeplejerske Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Anæstesisygeplejerske Løn Efter Skat 2025 – tallene bag narkosen</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids anæstesisygeplejerske (37 t/uge) kan i 2025 forvente en løn før skat på 45 000 – 60 000 kr. pr. måned – fra nyuddannet specialistsygeplejerske til erfaren koordinator. Det giver en anæstesisygeplejerske løn efter skat på cirka 29 000 – 38 000 kr. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> til at få et præcist nettobeløb – og husk at tjekke igen, hvis dine vagter eller tillæg ændrer sig.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer anæstesisygeplejerske løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-2 px-4 border-b text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Grundløn & anciennitet</td>
                    <td className="py-2 px-4 border-b">DSR‐overenskomsten giver trin­stigninger hvert andet år; interval 43 000 → 55 000 kr. før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Vagtstruktur</td>
                    <td className="py-2 px-4 border-b">Aften +17 %, nat +30 %, weekend +45 % – kan løfte nettolønnen 1 200 – 2 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Funktionstillæg</td>
                    <td className="py-2 px-4 border-b">Traumeteam, pædiatrisk anæstesi eller transport­sygeplejerske: +1 500 – 3 000 kr./md. før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Region</td>
                    <td className="py-2 px-4 border-b">Hovedstaden og Midtjylland ligger 5 – 8 % over øvrige regioner (rekrutterings­tillæg).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Pension 17 %</td>
                    <td className="py-2 px-4 border-b">Arbejdsgiverbidrag trækkes før skat og ses ikke i nettolønnen.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-2 px-4 border-b">Spænd på 0,8 pct.point ⇒ ± ≈ 700 kr./md. i anæstesisygeplejerske løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn før & efter skat – typiske niveauer 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-4 border-b font-medium">{item.type}</td>
                      <td className="py-2 px-4 border-b">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-2 px-4 border-b">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className="py-2 px-4 text-sm italic">
                      * Beregnet uden kirkeskat; AM‐bidrag 8 % + gennemsnitlig kommuneskat 24,9 %.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale gennemsnit (erfaren fag­sygeplejerske, 160 t/md.)</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Region</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((item, index) => (
                    <tr 
                      key={index} 
                      className={selectedCity === item.city ? "bg-blue-50" : index % 2 === 0 ? "bg-gray-50" : ""}
                      onClick={() => setSelectedCity(item.city)}
                    >
                      <td className="py-2 px-4 border-b font-medium cursor-pointer">{item.city}</td>
                      <td className="py-2 px-4 border-b cursor-pointer">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-2 px-4 border-b cursor-pointer">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – nattevagt + weekend, Midtjylland</h2>
            <div className="bg-gray-50 p-4 rounded-lg my-6">
              <p className="mb-2"><strong>Løn før skat:</strong> 56 000 kr.</p>
              <p className="mb-2"><strong>AM‐bidrag 8 %:</strong> –4 480 kr.</p>
              <p className="mb-2"><strong>Skattepligtig indkomst:</strong> 51 520 kr.</p>
              <p className="mb-2"><strong>Personfradrag:</strong> –4 650 kr.</p>
              <p className="mb-2"><strong>Beskatningsgrundlag:</strong> 46 870 kr.</p>
              <p className="mb-2"><strong>A‐skat (~ 37 %):</strong> –17 340 kr.</p>
              <p className="font-bold">Anæstesisygeplejerske løn efter skat ≈ 34 700 kr.</p>

            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Tag højt prioriterede nat‐ og traumekald – giver de største tillæg.</li>
              <li>Certificér dig i pædiatrisk eller thorax­anæstesi – typisk +1 500 – 2 500 kr./md. før skat.</li>
              <li>Søg rekrutterings­tillæg i pressede regioner (fx capital eller yderområder).</li>
              <li>Flyt til lav‐skat kommune – kan øge nettolønnen op mod 700 kr./md. uden ekstra timer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Anæstesisygeplejerske Løn Efter Skat</h2>
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
                    <td className="py-2 px-4 border-b font-medium">Betaler jeg topskat?</td>
                    <td className="py-2 px-4 border-b">Kun hvis brutto­løn inkl. tillæg overstiger ca. 63 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Tæller pension i nettoløn?</td>
                    <td className="py-2 px-4 border-b">Nej, 17 % arbejdsgiverpension indbetales før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Får jeg vagttillæg ved rådighed hjemme?</td>
                    <td className="py-2 px-4 border-b">Ja, satser på 14 – 18 % af timeløn – beskattes som almindelig løn.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger anæstesisygeplejerske løn efter skat typisk mellem 29 000 og 38 000 kr. Skifteholds­tillæg, funktions­certifikater og kommuneskat er de største løftestænger. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> før du skifter afdeling eller forhandler nye vagter.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://dsr.dk/media/5n0pfhqw/24-51-loenvejledning-1102024-5.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Dansk Sygeplejeråd – løntrin og tillæg 2024-26</a></li>
              <li><a href="https://dsr.dk/loen-og-arbejdsvilkaar/regionale-overenskomster-og-aftaler/loen-ifoelge-overenskomsten-regionalt-ansatte/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Regions­lønstatistik 2025 – Specialsygeplejersker</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønbarometer – Anæstesisygeplejerske (maj 2025)</a></li>
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

export default AnæstesisygeplejerskeLoenPage; 