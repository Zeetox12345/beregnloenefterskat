import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const StewardesseLoenPage = () => {
  const [selectedBase, setSelectedBase] = useState("København (CPH)");
  
  const baseData = {
    "København (CPH)": { grossSalary: 33000, netMin: 22000, netMax: 22500 },
    "Billund (BLL)": { grossSalary: 32000, netMin: 21200, netMax: 21700 },
    "Aalborg (AAL)": { grossSalary: 31000, netMin: 20400, netMax: 20900 },
    "Aarhus": { grossSalary: 30000, netMin: 19800, netMax: 20300 }
  };

  const experienceData = [
    { years: "Nyansat (0–1 år)", grossSalary: 27000, netMin: 18300, netMax: 18800 },
    { years: "2–4 år", grossSalary: 30000, netMin: 19800, netMax: 20300 },
    { years: "5–7 år", grossSalary: 32000, netMin: 21200, netMax: 21700 },
    { years: "8+ år", grossSalary: 34000, netMin: 22400, netMax: 22900 }
  ];

  const baseExamples = useMemo(() => {
    return Object.entries(baseData).map(([base, data]) => {
      return {
        base,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Stewardesse Løn Efter Skat 2025 – Nettoløn, Tillæg & Diæter"
        description="Stewardesse løn efter skat 2025: Se realistiske nettoløn-estimater med tillæg, erfaring og baser i CPH, BLL og AAL."
        keywords="stewardesse løn efter skat 2025, stewardesse nettoløn, flyvertinde løn, cabin crew løn, diæter, flyselskaber, SAS, CAU"
      />
      <Header />
      <PageTitle title="Stewardesse Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Stewardesse Løn Efter Skat 2025 – Realistiske Nettoløn Estimater</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En stewardesse i Danmark kan i 2025 forvente en typisk løn efter skat på ca. 19.000 – 23.000 kr. pr. måned, afhængigt af erfaring, base, selskab og tillæg for natflyvninger og diæter. Få et hurtigt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad tjener en stewardesse i 2025?</h2>
            <p>
              Lønnen som stewardesse afhænger af flyselskab (SAS, DAT, Ryanair, Norwegian m.fl.), antal timer, base (CPH, BLL, AAL) samt anciennitet og tillæg. Mange stewardesser er dækket af overenskomst via CAU (Cabin Attendants Union), og arbejder i skiftehold, hvilket betyder højere udbetaling via aften/nattillæg.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Stewardesse Løn – Før og Efter Skat</h2>
            <p>
              Tabellen nedenfor viser gennemsnitlige månedslønninger for stewardesser i Danmark i 2025. Antal flytimer pr. måned antages til 80–100. Pension (8–12 %) er ikke fratrukket i nettolønnen.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Base/by</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {baseExamples.map((example) => (
                    <tr 
                      key={example.base} 
                      className={`hover:bg-gray-50 ${example.base === selectedBase ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedBase(example.base)}
                    >
                      <td className="py-3 px-4 border-b">{example.base}</td>
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
              *Estimater uden kirkeskat. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et hurtigt, personligt estimat af din stewardesse løn efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter anciennitet</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr 
                      key={exp.years} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{exp.years}</td>
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
              *Gennemsnitlig kommuneskat 25 % og AM-bidrag 8 % er anvendt i beregningerne.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker stewardesse løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tillæg for aften-, nat- og weekendarbejde</strong> (+10–50 %)</li>
              <li><strong>Flytimer</strong> – overtimer eller standbyvagter honoreres særskilt</li>
              <li><strong>Diæter & per diem</strong> – beskattes kun delvist og kan give +1.500–3.000 kr./md.</li>
              <li><strong>Pension</strong> – ofte 8–12 % af lønnen</li>
              <li><strong>Basens kommuneskat</strong> – påvirker nettoudbetaling</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel: Beregning af stewardesse løn efter skat</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <p className="font-medium mb-2">Udgangspunkt: Løn på 32.000 kr. i Billund uden kirkeskat</p>
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM-bidrag (8 %)</strong> = 2.560 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 29.440 kr.</li>
                <li><strong>Personfradrag:</strong> 4.650 kr. → Beskatningsgrundlag: 24.790 kr.</li>
                <li><strong>A-skat (≈ 34,5 %)</strong> = ca. 8.550 kr.</li>
                <li><strong>Udbetalt:</strong> 29.440 − 8.550 = ca. 20.890 kr. i stewardesse løn efter skat</li>
              </ul>
            </div>

            <p>
              Beregn din løn selv med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Stewardesse Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en stewardesse før skat?</p>
                <p>27.000 – 34.000 kr./md. afhængig af erfaring og selskab</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er stewardesse løn efter skat i 2025?</p>
                <p>Cirka 19.000 – 23.000 kr. for de fleste fuldtidsansatte</p>
              </div>
              <div>
                <p className="font-semibold">Hvad kan øge nettolønnen?</p>
                <p>Diæter, aften- og natarbejde, senioritet, overtid</p>
              </div>
              <div>
                <p className="font-semibold">Er der stor forskel på selskaber?</p>
                <p>Ja – SAS og DAT har typisk bedre overenskomster end lavprisselskaber</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at øge din stewardesse løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag ekstra standby-vagter</strong> og mellemlange ruter</li>
              <li><strong>Brug dine fradrag korrekt</strong> – fx befordring, fagforening</li>
              <li><strong>Forhandl specialfunktioner</strong> (instruktør, safety trainer)</li>
              <li><strong>Hold øje med pension</strong> og overenskomstsatser</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Stewardesser i Danmark tjener i 2025 typisk mellem 27.000 – 34.000 kr. før skat, og 19.000 – 23.000 kr. i løn efter skat. Du kan få dit eget nettolønsestimat hurtigt og nemt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://cau.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cabin Attendants Union (CAU) – Overenskomster 2025</a></li>
              <li><a href="https://www.dst.dk/da/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur for luftfart (dst.dk)</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025 (skm.dk)</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Senest opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StewardesseLoenPage; 