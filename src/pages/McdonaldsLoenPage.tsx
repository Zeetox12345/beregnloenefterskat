import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const McdonaldsLoenPage = () => {
  const [selectedPosition, setSelectedPosition] = useState("Crew, 18+ år");
  
  // Position-specific salary data
  const positionData = {
    "Crew, under 18": { grossSalary: 14000, netMin: 9800, netMax: 10200 },
    "Crew, 18+ år": { grossSalary: 23400, netMin: 15100, netMax: 15600 },
    "Crew Trainer": { grossSalary: 26000, netMin: 17000, netMax: 17500 },
    "Shift Leader": { grossSalary: 28000, netMin: 18700, netMax: 19200 },
    "Assistant Manager": { grossSalary: 32000, netMin: 20100, netMax: 20600 }
  };

  const positionExamples = useMemo(() => {
    return Object.entries(positionData).map(([position, data]) => {
      return {
        position,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="McDonald's Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad tjener du hos McDonald's efter skat i 2025? Se løn før og efter skat for crew, shift leaders og managers – og beregn din nettoløn hurtigt."
        keywords="mcdonalds løn efter skat, mcdonalds nettoløn, crew løn, shift leader løn, assistant manager løn, fastfood løn"
      />
      <Header />
      <PageTitle title="McDonald's Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">McDonald's Løn Efter Skat 2025 – Fra Pommes Frites til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsmedarbejder (37 t/uge) hos McDonald's kan i 2025 forvente en løn før skat på cirka 14 000 – 32 000 kr. pr. måned, afhængigt af alder og stillings­niveau. Det svarer til en mcdonalds løn efter skat på omtrent 9 800 – 20 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en McDonald's løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det gør en forskel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Overenskomst­løn</td>
                    <td className="py-3 px-4 border-b">3F-/HORESTA-overenskomsten fastsætter minimalløn: 145,7 kr./t (voksne) og 87,4 kr./t (under 18) fra marts 2025.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Vagttillæg</td>
                    <td className="py-3 px-4 border-b">Aften + 18 %, nat + 30 %, weekend + 45 % hæver bruttolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Stillings­niveau</td>
                    <td className="py-3 px-4 border-b">Crew → Crew Trainer → Shift Leader → Assistant Manager – hvert trin har højere løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">Storby-restauranter betaler typisk 3-5 % over landsgennemsnittet.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension & fritvalg</td>
                    <td className="py-3 px-4 border-b">9 % pension og fritvalgspulje udbetales før skat og ses ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønskala – McDonald's Løn Før & Efter Skat 2025*</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Stilling / Alder</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat**</th>
                  </tr>
                </thead>
                <tbody>
                  {positionExamples.map((example) => (
                    <tr 
                      key={example.position} 
                      className={`hover:bg-gray-50 ${example.position === selectedPosition ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedPosition(example.position)}
                    >
                      <td className="py-3 px-4 border-b">{example.position}</td>
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
              * Fuldtidsnorm 160,33 t/md. ** Nettotal beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Voksen Crew-medarbejder</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 23 400 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 1 872 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 21 528 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 16 878 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 6 245 kr.</li>
                <li><strong>McDonalds løn efter skat ≈</strong> 15 300 kr.</li>
              </ul>
            </div>

            <p className="my-4">
              Få dit helt eget tal – indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Tag aften-, nat- eller weekend­vagter</strong> – genetillæg kan løfte lønnen 1-2 k kr./md.</li>
              <li><strong>Bliv Crew Trainer eller Shift Leader</strong> – interne kurser åbner for løntrin +2-4 k kr./md. før skat.</li>
              <li><strong>Udnyt fritvalgspuljen</strong> – kan udbetales som løn i stedet for frihed.</li>
              <li><strong>Arbejd i en storby-restaurant</strong> – højere omsætning giver ofte 3-5 % ekstra i grundløn.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – McDonald's Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en under 18-årig efter skat?</p>
                <p>Cirka 10 000 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer jeg 20 000 kr. efter skat?</p>
                <p>Som assistant manager eller ved fast nat-/weekendarbejde.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i nettoløn?</p>
                <p>Nej, 9 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Udløser genetillæg topskat?</p>
                <p>Nej, topskat starter først omkring 63 300 kr./md. før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger mcdonalds løn efter skat normalt mellem 9 800 og 20 000 kr. om måneden – afhængigt af alder, stilling og vagttillæg. Tast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der faktisk ryger ind på kontoen, når burgerne er flip-pet og kunderne er serviceret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>3F/HORESTA – McDonald's-overenskomst 2023-25, lønbilag (timeløn 141,24 kr. voks­ne, 84,76 kr. unge)</li>
              <li>Jobpatruljen – Fastfood-satser under 18 år (77,55 kr. pr. time fra 1/5-2025)</li>
              <li>Jobpatruljen – HORESTA/3F overenskomst dækker alle McDonald's-restauranter</li>
              <li>Reddit /dkloenseddel – medarbejder timeløn 141,24 kr. (2024)</li>
              <li>Threads.com – Shift manager ≈ 30 $/t (~200 kr./t) (maj 2025)</li>
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

export default McdonaldsLoenPage; 