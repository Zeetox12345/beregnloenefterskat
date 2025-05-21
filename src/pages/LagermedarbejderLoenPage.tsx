import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LagermedarbejderLoenPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("Hovedstaden");
  
  // Region-specific salary data
  const regionData = {
    "Hovedstaden": { grossSalary: 33000, netMin: 21700, netMax: 22300 },
    "Midtjylland": { grossSalary: 31000, netMin: 20300, netMax: 20900 },
    "Syddanmark": { grossSalary: 30000, netMin: 19600, netMax: 20200 },
    "Nordjylland": { grossSalary: 29000, netMin: 19000, netMax: 19600 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyansat daghold", grossSalary: 26000, netMin: 17300, netMax: 17800 },
    { type: "2-3 år", grossSalary: 29000, netMin: 19200, netMax: 19700 },
    { type: "4-6 år + truck B", grossSalary: 32000, netMin: 21200, netMax: 21700 },
    { type: "7-9 år + aften/nat", grossSalary: 34000, netMin: 22500, netMax: 23000 },
    { type: "Teamleder på højlager", grossSalary: 36000, netMin: 23000, netMax: 23500 }
  ];

  const regionExamples = useMemo(() => {
    return Object.entries(regionData).map(([region, data]) => {
      return {
        region,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Lagermedarbejder Løn Efter Skat 2025 – Realistiske Eksempler og Beregning"
        description="Hvad tjener en lagermedarbejder efter skat i 2025? Se løn før og efter skat baseret på erfaring, vagter og kommune – og beregn din nettoløn hurtigt."
        keywords="lagermedarbejder løn efter skat, lagerarbejder nettoløn, lagermedarbejder løn, lagerarbejder løn efter skat, truck løn, højlager løn"
      />
      <Header />
      <PageTitle title="Lagermedarbejder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Lagermedarbejder Løn Efter Skat 2025 – fra stregkoder til bankkonto</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids lagermedarbejder (37 t/uge) kan i 2025 typisk forvente en løn før skat på 26 000 – 36 000 kr. pr. måned – fra nyansat til erfaren skifteholdsmedarbejder på et stort distributionscenter. Det svarer til en lagermedarbejder løn efter skat på ca. 17 000 – 23 500 kr. afhængigt af vagttider, tillæg og kommune. Få dit præcise nettobeløb i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger lagermedarbejder løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvad det betyder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Grundløn & anciennitet</td>
                    <td className="py-3 px-4 border-b">Gennemsnitslønnen for lagermedarbejdere ligger omkring 26 400 kr. før skat, men kan stige til 33 500 kr. med erfaring <a href="https://amujuul.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Amujuul</a>.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Overenskomst-satser</td>
                    <td className="py-3 px-4 border-b">3F/DI Transport- & Logistik­overenskomsten hæver timesatsen 5,00 kr. pr. 1. marts 2025 <a href="https://www.3f.dk/-/media/files/artikler/overenskomst/transportgruppen/transport-og-logistikoverenskomst-2025-2028---bog-i----overenskomst.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">3F Transport</a>.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Skifteholds- og genetillæg</td>
                    <td className="py-3 px-4 border-b">Aften + 18 %, nat + 30 %, weekend + 45 % – kan løfte nettolønnen 900 – 1 600 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certifikater</td>
                    <td className="py-3 px-4 border-b">Truck B, farligt gods (ADR) eller SAP-scanner giver ofte 1 000 – 1 500 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiver betaler før skat; forbedrer pakken, men fremgår ikke af nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spændet på 0,8 pct.-point koster/øger ca. ± 600 kr. i lagermedarbejder løn efter skat pr. måned.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – typiske niveauer 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
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
              * Beregnet uden kirkeskat; AM-bidrag 8 % og gennemsnitlig kommuneskat 24,9 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale gennemsnit (erfaren daghold, 160 t/md.)</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Region</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {regionExamples.map((example) => (
                    <tr 
                      key={example.region} 
                      className={`hover:bg-gray-50 ${example.region === selectedRegion ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedRegion(example.region)}
                    >
                      <td className="py-3 px-4 border-b">{example.region}</td>
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
              Kilde: DI Transport lønoversigt 1. maj 2025 <a href="https://www.danskindustri.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Dansk Industri</a>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – nat- og weekendrul, Midtjylland</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 34 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 720 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 31 280 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 26 630 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 9 850 kr.</li>
                <li><strong>Lagermedarbejder løn efter skat ≈</strong> 21 430 kr.</li>
              </ul>
            </div>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige hacks til højere nettoløn 🚀</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Tag nat- og weekendvagter</strong> – genetillæg kan løfte netto op til 1 600 kr./md.</li>
              <li><strong>Få truck- eller reachstacker-certifikat</strong> – løfter grundlønnen og gør dig attraktiv til højlager.</li>
              <li><strong>Sæt dig på WMS-roller (teamleder, superbruger)</strong> – typisk +1 000 – 1 500 kr./md. før skat.</li>
              <li><strong>Vælg lav-skat kommune</strong> – kan øge lagermedarbejder løn efter skat med op til 600 kr./md. uden ekstra timer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Lagermedarbejder Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-3 px-4 border-b text-left">Svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Hvad tjener en ny lagermedarbejder efter skat?</td>
                    <td className="py-3 px-4 border-b">Omkring 17 500 kr. pr. md. <a href="https://amujuul.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Amujuul</a></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kan jeg nå 23 000 kr. netto?</td>
                    <td className="py-3 px-4 border-b">Ja, med skifteholds­tillæg og 5-7 års erfaring eller teamlederansvar.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Indgår pension i nettoløn?</td>
                    <td className="py-3 px-4 border-b">Nej – 12 % pension indbetales før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Udløser overarbejde topskat?</td>
                    <td className="py-3 px-4 border-b">Først når brutto­løn {'>'}≈ 63 000 kr./md., hvilket er sjældent i lager­stillinger.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger lagermedarbejder løn efter skat oftest mellem 17 000 og 23 500 kr. pr. måned. Genetillæg, certifikater og kommuneskat er de hurtigste knapper at skrue på, hvis du vil hæve nettolønnen. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at måle, hvor meget din næste pallesurfer og pick-rate faktisk giver på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://amujuul.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AMUJuul – gennemsnitsløn 26 434 kr.</a></li>
              <li><a href="https://www.danskindustri.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DI Transport & 3F – Transport- & Logistik­overenskomst lønoversigt 1. maj 2025</a></li>
              <li><a href="https://www.3f.dk/-/media/files/artikler/overenskomst/transportgruppen/transport-og-logistikoverenskomst-2025-2028---bog-i----overenskomst.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F Transport – ny overenskomst 2025: +5 kr./time fra 1. marts 2025</a></li>
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

export default LagermedarbejderLoenPage; 