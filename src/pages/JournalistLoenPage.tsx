import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const JournalistLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 48000, netMin: 31500, netMax: 32300 },
    "Aarhus": { grossSalary: 44000, netMin: 28900, netMax: 29700 },
    "Odense": { grossSalary: 41000, netMin: 27000, netMax: 27800 },
    "Aalborg": { grossSalary: 39000, netMin: 25600, netMax: 26300 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Praktikant (DJ-aftale)", grossSalary: 15000, netMin: 12700, netMax: 13000 },
    { type: "Nyuddannet (< 2 år)", grossSalary: 32000, netMin: 21000, netMax: 21600 },
    { type: "3 – 5 år", grossSalary: 37000, netMin: 24400, netMax: 25000 },
    { type: "6 – 9 år + skiftehold", grossSalary: 43000, netMin: 28400, netMax: 29000 },
    { type: "10 + år / redaktør", grossSalary: 50000, netMin: 33000, netMax: 33800 }
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
        title="Journalist Løn Efter Skat 2025 – Se Realistiske Estimater"
        description="Hvad tjener en journalist efter skat i 2025? Få overblik over løn før og efter skat, erfaringstrin og tillæg – og beregn dit eget nettobeløb online."
        keywords="journalist løn efter skat, journalist nettoløn, journalist løn, mediebranchen løn, redaktør løn"
      />
      <Header />
      <PageTitle title="Journalist Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Journalist Løn Efter Skat 2025 – fra kildecheck til kontoudtog</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids journalist (37 t/uge) kan i 2025 som tommelfingerregel forvente en løn før skat på 32 000 – 50 000 kr. pr. måned – fra nyuddannet redaktionssekretær til erfaren featurejournalist på nationalt medie. Det svarer til en journalist løn efter skat på cirka 21 000 – 33 000 kr. afhængigt af medietype, anciennitet, overarbejde og kommune. Få dit præcise nettobeløb i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en journalist løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Medietype</td>
                    <td className="py-3 px-4 border-b">Landsdækkende dagblade, public service-tv og større fagblade ligger 8–12 % over lokal- og nichemedier.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & funktion</td>
                    <td className="py-3 px-4 border-b">DJ&apos;s lønstatistik 2025 viser 34 800 kr./md. før skat for &lt; 2 års erfaring, 43 600 kr. efter 10 år.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Skifteholds- & weekendtillæg</td>
                    <td className="py-3 px-4 border-b">Radio/TV-vagter giver 25–50 % tillæg; kan løfte nettolønnen 1 000 – 1 800 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Funktionstillæg</td>
                    <td className="py-3 px-4 border-b">Vært, redaktør, SoMe-teamleder: +1 500 – 3 500 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 14 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og ses ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spænd på 0,8 pct.point → ± ≈ 700 kr./md. i journalist løn efter skat.</td>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale gennemsnit (erfaren journalist, dagvagt, 160 t/md.)</h2>
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
                  {cityExamples.map((example) => (
                    <tr 
                      key={example.city} 
                      className={`hover:bg-gray-50 ${example.city === selectedCity ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedCity(example.city)}
                    >
                      <td className="py-3 px-4 border-b">{example.city}</td>
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – aften-/weekendvagter, regionalt tv</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 44 000 kr.</li>
                <li><strong>Vagttillæg (1 500 kr.):</strong> +1 500 kr.</li>
                <li><strong>Samlet før skat:</strong> 45 500 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> –3 640 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 41 860 kr.</li>
                <li><strong>Personfradrag:</strong> –4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 37 210 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> –13 760 kr.</li>
                <li><strong>Journalist løn efter skat ≈</strong> 28 100 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Tag skiftehold på radio/TV eller deadlinetunge desk-vagter</strong> – de højeste tillæg.</li>
              <li><strong>Specialisér dig</strong> (datajournalistik, undersøgende, podcast-værtskab) – giver funktionstillæg.</li>
              <li><strong>Forhandl rettigheds- eller meritbonus</strong> ved større produktioner.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – op til 700 kr. ekstra i journalist løn efter skat hver måned.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Journalist Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Betaler journalister topskat?</p>
                <p>Først ved brutto­løn {'>'} 63 000 kr./md.; relevant for chef- og værtstillinger.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej – 14 % arbejdsgiverpension indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Gælder overarbejdsbetaling?</p>
                <p>Ja, DJ-overenskomsten giver 50 % ekstra for godkendte overtimer.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger journalist løn efter skat typisk mellem 21 000 og 33 000 kr. Skifteholds­tillæg, specialfunktioner og kommuneskat er de store løftestænger. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> før du forhandler næste kontrakt eller tager flere weekendvagter.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://journalistforbundet.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dansk Journalistforbund (DJ) – Lønstatistik 2025</a></li>
              <li><a href="https://dmjx.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medie- og Journalisthøjskolen – Karrierebarometer 2025</a></li>
              <li><a href="https://www.jobindex.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex Lønguide – Journalister, maj 2025</a></li>
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

export default JournalistLoenPage; 