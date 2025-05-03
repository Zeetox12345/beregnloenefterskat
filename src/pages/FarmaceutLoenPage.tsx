import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FarmaceutLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 52000, netMin: 32000, netMax: 33000 },
    "Aarhus": { grossSalary: 49000, netMin: 30400, netMax: 31000 },
    "Odense": { grossSalary: 47000, netMin: 29200, netMax: 29700 },
    "Aalborg": { grossSalary: 46000, netMin: 28600, netMax: 29200 },
    "Esbjerg": { grossSalary: 45000, netMin: 28000, netMax: 28500 },
    "Randers": { grossSalary: 45000, netMin: 28000, netMax: 28500 }
  };

  const experienceData = [
    { type: "Dimittend (0‑2 år)", grossSalary: 44000, netMin: 26000, netMax: 26500 },
    { type: "3‑5 år", grossSalary: 48000, netMin: 28400, netMax: 29000 },
    { type: "6‑8 år (senior)", grossSalary: 53000, netMin: 31000, netMax: 31600 },
    { type: "9‑11 år (projektleder)", grossSalary: 57000, netMin: 33000, netMax: 33600 },
    { type: "12+ år (QA manager / QP)", grossSalary: 62000, netMin: 35800, netMax: 36400 }
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
        title="Farmaceut Løn Efter Skat 2025 – Realistiske Estimater"
        description="Hvad tjener en farmaceut i 2025? Se løn efter skat baseret på erfaring og branche, og brug beregn løn efter skat for hurtigt estimat."
        keywords="farmaceut løn efter skat, farmaceut nettoløn, sygehusapotek løn, farmaceut overenskomst, QA manager løn, Pharmadanmark løn"
      />
      <Header />
      <PageTitle title="Farmaceut Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Farmaceut Løn Efter Skat 2025 – Fra Reagensglas til Realløn 💊💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som farmaceut i Danmark kan du i 2025 forvente en farmaceut løn efter skat på cirka 26 000 – 34 000 kr. pr. måned i en fuldtidsstilling på 37 timer. Spændet afhænger især af, om du arbejder på sygehusapotek, i privat industri eller i detailapoteks­kæder – og af din anciennitet. Tjek dit eget estimat lynhurtigt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvor tjener farmaceuter deres løn efter skat?</h2>
            <p>
              Farmaceuter bevæger sig fra laboratorier til apoteker og life‑science‑kontorer. De får basisløn + eventuelle projekt‑, tillægs‑ eller vagthonorarer via:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Apoteksoverenskomsten (detailapoteker)</li>
              <li>Pharmadanmark/DI‑aftaler (industrien)</li>
              <li>Regionale overenskomster (sygehusapoteker)</li>
            </ul>
            <p>
              Kollektive lønstigninger i 2024‑26 ramme aftalt af Pharmadanmark sikrer, at farmaceut‑lønnen løftes ~1,3 % 1. april 2025. <a href="https://www.pharmadanmark.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">pharmadanmark.dk</a>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn Efter Skat – Byer 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
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

            <p className="text-sm text-gray-600 italic">
              *Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat (24,9 %) + AM‑bidrag 8 %. Vil du se et tal, der matcher din indkomst? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> med din egen løn.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Anciennitet & Rolle – Farmaceut Løn Efter Skat</h2>
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
              *Beregnet med gennemsnitlig kommuneskat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker farmaceut løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Arbejdsplads</strong> – Industri & QA stillinger betaler 8‑12 % højere før skat end detailapoteker <a href="https://www.pharmadanmark.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">pharmadanmark.dk</a></li>
              <li><strong>Vagter & tillæg</strong> – Lørdagsvagt på apotek kan give +25 % på timeløn.</li>
              <li><strong>Pensionsvalg</strong> – Mulighed for at omlægge op til 3 % pension til løn fra maj 2025 <a href="https://www.pharmadanmark.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">pharmadanmark.dk</a></li>
              <li><strong>Kommuneskat</strong> – forskel op til 0,8 pct. point ≈ 650 kr./md. i løn efter skat.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense – 47 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag 8 % ⇒</strong> 3 760 kr.</li>
                <li><strong>Skattepligtig indkomst ⇒</strong> 43 240 kr.</li>
                <li><strong>Personfradrag ⇒</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag ⇒</strong> 38 590 kr.</li>
                <li><strong>A‑skat (≈ 37 %) ⇒</strong> 14 280 kr.</li>
                <li><strong>Farmaceut løn efter skat ≈</strong> 29 000 kr.</li>
              </ul>
            </div>
            
            <p>
              Prøv tal, der passer til dig, i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at hæve din farmaceut løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Specialiser dig</strong> i GxP, QP‑ansvar eller pharmaco­vigilance → +3‑5 % løntrin.</li>
              <li><strong>Forhandl vagt­tillæg tidligt</strong> – weekender og helligdage kan løfte nettolønnen markant.</li>
              <li><strong>Region vs. industri</strong> – overvej skifte til medicinal­firma for højere grundløn.</li>
              <li><strong>Reducer pendling</strong> – lavere kommuneskat = mere løn efter skat.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Farmaceut Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en farmaceut i 2025 efter skat?</p>
                <p>Typisk 26 000 – 34 000 kr./md. afhængig af branche og erfaring.</p>
              </div>
              <div>
                <p className="font-semibold">Hvilken branche betaler bedst?</p>
                <p>QA/RA i medicinalindustrien.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer jeg topskat?</p>
                <p>Omkring 63 000 kr. før skat; få når dette i senior QA‑roller.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg omlægge pension til løn?</p>
                <p>Ja, op til 3 % fra maj 2025, hvilket hæver din løn efter skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              En farmaceut i Danmark kan i 2025 forvente 26 000 – 34 000 kr. i løn efter skat hver måned. Udnævnelser til QA‑manager eller QP kan løfte beløbet yderligere. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et hurtigt, personligt estimat – og se, hvor meget der lander på kontoen, når laboratoriekittelen er hængt på knagen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.pharmadanmark.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pharmadanmark Lønoverenskomst 2024‑26</a></li>
              <li><a href="https://www.pharmadanmark.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Statens overenskomstforlig 2024‑25</a></li>
              <li><a href="https://www.pharmadanmark.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pharmadanmark Lønstatistik (privat sektor)</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FarmaceutLoenPage; 