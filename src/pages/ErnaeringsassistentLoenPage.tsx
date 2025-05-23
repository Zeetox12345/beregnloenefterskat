import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ErnaeringsassistentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Hovedstaden");
  
  // Regional salary data
  const regionData = {
    "Hovedstaden": { grossSalary: 38500, netMin: 25000, netMax: 25700 },
    "Midtjylland": { grossSalary: 36000, netMin: 23400, netMax: 24100 },
    "Syddanmark": { grossSalary: 34000, netMin: 22100, netMax: 22800 },
    "Nordjylland": { grossSalary: 32000, netMin: 20900, netMax: 21500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (0-2 år)", grossSalary: 28000, netMin: 18300, netMax: 18800 },
    { type: "3-5 år", grossSalary: 32000, netMin: 20900, netMax: 21500 },
    { type: "6-8 år + tillæg", grossSalary: 35000, netMin: 22800, netMax: 23400 },
    { type: "9 + år / eneansvar", grossSalary: 38000, netMin: 24700, netMax: 25400 },
    { type: "Toptrin / teamleder", grossSalary: 41000, netMin: 26500, netMax: 27200 }
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
        title="Ernæringsassistent Løn Efter Skat 2025 – Realistiske Estimater"
        description="Hvad er ernæringsassistent løn efter skat i 2025? Se opdaterede løntabeller for erfaring og region – og beregn din nettoløn nemt med få klik."
        keywords="ernæringsassistent løn efter skat, ernæringsassistent nettoløn, køkkendrift, kostfaglig, ernæring"
      />
      <Header />
      <PageTitle title="Ernæringsassistent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Ernæringsassistent Løn Efter Skat 2025 – fra køkkendrift til kontant nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids ernæringsassistent (37 t/uge) kan i 2025 som tommelfingerregel forvente en løn før skat på 28 000 – 41 000 kr. pr. måned – fra nyuddannet ansat på et plejecenter til erfaren ernæringsassistent på et regionshospital. Det giver en ernæringsassistent løn efter skat på cirka 18 000 – 27 000 kr. Benyt <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at få dit helt personlige nettobeløb – og prøv igen, når din kommune eller vagtskema ændrer sig.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker ernæringsassistent løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Grundløn & anciennitet</td>
                    <td className="py-3 px-4 border-b">Kost- og Ernæringsforbundets OK24-forlig giver et interval på ca. 28 000 → 38 000 kr./md. før skat <br/><span className="text-sm text-gray-600">Kost og Ernæringsforbundet</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Arbejdsgiver</td>
                    <td className="py-3 px-4 border-b">Regioner og store kommunekøkkener betaler 5-8 % over små private kantiner <br/><span className="text-sm text-gray-600">Studentum</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Tillæg</td>
                    <td className="py-3 px-4 border-b">Aften +17 %, nat +30 %, weekend +45 % – kan løfte nettolønnen 700 – 1 300 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Certifikater & ansvar</td>
                    <td className="py-3 px-4 border-b">Kostfagligt eneansvarlig eller diætetik-bistand udløser 1 000 – 2 000 kr./md. ekstra før skat <br/><span className="text-sm text-gray-600">FOA</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension 13 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og fremgår ikke af nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spændet på 0,8 pct.point svarer til ca. ± 600 kr./md. i ernæringsassistent løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn før & efter skat – typiske niveauer 2025</h2>
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
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              * Beregnet uden kirkeskat; AM-bidrag 8 % + gennemsnitlig kommuneskat 24,9 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale gennemsnit (erfaren ernæringsassistent, 160 t/md.)</h2>
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
                      className={`hover:bg-gray-50 ${example.region === selectedCity ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedCity(example.region)}
                    >
                      <td className="py-3 px-4 border-b">{example.region}</td>
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – nat- og weekendvagter, regionshospital</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 35 000 kr.</li>
                <li><strong>Vagttillæg (1 500 kr.):</strong> +1 500 kr.</li>
                <li><strong>Sum før skat:</strong> 36 500 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> –2 920 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 33 580 kr.</li>
                <li><strong>Personfradrag:</strong> –4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 28 930 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> –10 700 kr.</li>
                <li><strong>Ernæringsassistent løn efter skat ≈</strong> 22 880 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag flere weekend- eller nattevagter</strong> – tillæg løfter netto op til 1 300 kr./md.</li>
              <li><strong>Bliv kostfagligt eneansvarlig</strong> – funktionstillæg på 1 000-2 000 kr./md. før skat.</li>
              <li><strong>Læg billet ind på hospitals- eller storkøkken-stillinger</strong> – regionerne ligger i toppen af lønspændet.</li>
              <li><strong>Vælg lav-skat kommune</strong> – kan øge ernæringsassistent løn efter skat med 600 kr./md. uden ekstra arbejdstimer.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Ernæringsassistent Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-3 px-4 border-b text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Hvornår betaler jeg topskat?</td>
                    <td className="py-3 px-4 border-b">Først ved brutto­løn {'>'} 63 000 kr./md.; sjældent i denne faggruppe.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Indgår pension i nettoløn?</td>
                    <td className="py-3 px-4 border-b">Nej, 13 % arbejdsgiverpension indbetales før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Er der elevløn?</td>
                    <td className="py-3 px-4 border-b">Ja, FOA-tabel giver 14 800 → 18 600 kr./md. før skat for ernæringsassistentelever <br/><span className="text-sm text-gray-600">FOA</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger ernæringsassistent løn efter skat typisk mellem 18 000 og 27 000 kr. pr. måned. Vagt­tillæg, funktions­ansvar og kommuneskat er de hurtigste håndtag, hvis du vil hæve nettolønnen. Udfyld dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget dit næste grøntsagsfad reelt giver på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.kost.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kost- & Ernæringsforbundet / FOA OK24 – lønforlig 2025</a></li>
              <li><a href="https://www.studentum.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – gennemsnitsløn 39 100 kr./md. for ernæringsassistenter (maj 2025)</a></li>
              <li><a href="https://www.indkomsten.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Indkomsten.dk – gennemsnitsløn 24 500 kr./md. (privat kantine)</a></li>
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

export default ErnaeringsassistentLoenPage; 