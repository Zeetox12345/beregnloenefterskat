import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LokomotivfoererLoenPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("Hovedstaden");
  
  // Region-specific salary data
  const regionData = {
    "Hovedstaden": { grossSalary: 48000, netMin: 31700, netMax: 32400 },
    "Midtjylland": { grossSalary: 44000, netMin: 29100, netMax: 29800 },
    "Syddanmark": { grossSalary: 42000, netMin: 27600, netMax: 28200 },
    "Nordjylland": { grossSalary: 40000, netMin: 26300, netMax: 26900 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Elev (lokomotivfører-aspirant)", grossSalary: 29000, netMin: 18800, netMax: 19300 },
    { type: "Nyuddannet (0 – 2 år)", grossSalary: 35000, netMin: 23200, netMax: 23800 },
    { type: "3 – 5 år", grossSalary: 40000, netMin: 26300, netMax: 26900 },
    { type: "6 – 9 år + skiftehold", grossSalary: 45000, netMin: 29700, netMax: 30300 },
    { type: "Senior / instruktør", grossSalary: 50000, netMin: 33000, netMax: 33700 },
    { type: "Toptrin + funktions­tillæg", grossSalary: 55000, netMin: 35000, netMax: 35700 },
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
        title="Lokomotivfører Løn Efter Skat 2025 – Realistiske Tal og Eksempler"
        description="Hvad er lokomotivfører løn efter skat i 2025? Se løn før og efter skat, genetillæg og byforskelle – og beregn din egen nettoløn online."
        keywords="lokomotivfører løn, løn efter skat, DSB løn, togfører løn, lokomotivfører nettoløn, jernbane løn"
      />
      <Header />
      <PageTitle title="Lokomotivfører Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Lokomotivfører Løn Efter Skat 2025 – Fra Aspirant til Toptrin</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids lokomotivfører (37 t/uge + skiftehold) kan i 2025 som hovedregel forvente en løn før skat på 35 000 – 55 000 kr. pr. måned – fra nyuddannet til erfaren senior med højeste tjenestetillæg. Det giver en lokomotivfører løn efter skat på ca. 23 000 – 35 000 kr. afhængigt af tjenestested, vagttillæg og kommune. Vil du vide præcis, hvad der lander på din konto? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad tjener en lokomotivfører i 2025?</h2>
            <p>
              Lokomotivførere i Danmark har en attraktiv lønpakke, der afspejler det store ansvar og de skiftende arbejdstider. 
              Lønnen påvirkes af flere faktorer, herunder erfaring, arbejdssted, og ikke mindst tillæg for nat- og weekendarbejde.
              Her får du det komplette overblik over lokomotivfører løn efter skat i 2025.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønniveauer 2025 – Fra Aspirant til Erfaren Fører</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-2 px-4 border-b text-right">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-right">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((level, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-4 border-b">{level.type}</td>
                      <td className="py-2 px-4 border-b text-right">{level.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-2 px-4 border-b text-right">{level.netMin.toLocaleString()} – {level.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              * Beregnet uden kirkeskat; AM-bidrag 8 % og gennemsnitlig kommuneskat 24,9 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale Lønforskelle for Lokomotivførere</h2>
            
            <p>
              Din lokomotivfører løn efter skat varierer også afhængigt af, hvor i landet du arbejder. 
              Her er en oversigt over regionale gennemsnit for en erfaren fører med dagskema (160 timer/md):
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Region</th>
                    <th className="py-2 px-4 border-b text-right">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-right">Efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {regionExamples.map((region, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? "bg-gray-50" : ""} ${region.region === selectedRegion ? "bg-blue-50" : ""}`}
                      onClick={() => setSelectedRegion(region.region)}
                    >
                      <td className="py-2 px-4 border-b">{region.region}</td>
                      <td className="py-2 px-4 border-b text-right">{region.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-2 px-4 border-b text-right">{region.netMin.toLocaleString()} – {region.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Nat- og Weekendrul, Midtjylland</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Løn før skat:</strong> 45.000 kr.</p>
              <p><strong>AM-bidrag 8 %:</strong> 3.600 kr.</p>
              <p><strong>Skattepligtig indkomst:</strong> 41.400 kr.</p>
              <p><strong>Personfradrag:</strong> 4.650 kr.</p>
              <p><strong>Beskatningsgrundlag:</strong> 36.750 kr.</p>
              <p><strong>A-skat (≈ 37 %):</strong> 13.600 kr.</p>
              <p><strong>Lokomotivfører løn efter skat ≈ 28.750 kr.</strong></p>
            </div>
            


            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire Veje til Højere Nettoløn</h2>
            <ol className="list-decimal pl-6">
              <li className="mb-2"><strong>Sig ja til nat- og weekendvagter</strong> – genetillæg giver op til 2.400 kr. ekstra efter skat pr. måned.</li>
              <li className="mb-2"><strong>Bliv kørelærer eller simulator-instruktør</strong> – funktions­tillæg løfter grundlønnen 1.500 – 3.000 kr./md. før skat.</li>
              <li className="mb-2"><strong>Søg fjerntrafik eller Øresundsstrækninger</strong> – højere kompleksitets-tillæg end lokalbaner.</li>
              <li className="mb-2"><strong>Vælg lav-skat kommune</strong> – op til 700 kr. ekstra i lokomotivfører løn efter skat uden ekstra timer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Lokomotivfører Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-2 px-4 border-b text-left">Svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Hvad tjener en ny lokomotivfører efter skat?</td>
                    <td className="py-2 px-4 border-b">Ca. 23.000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Hvornår når man 30.000 kr. netto?</td>
                    <td className="py-2 px-4 border-b">Med 6+ års anciennitet plus nat- og weekendrul.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Indgår pension i nettoløn?</td>
                    <td className="py-2 px-4 border-b">Nej – 14 % arbejdsgiverpension indbetales før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Kan genetillæg udløse topskat?</td>
                    <td className="py-2 px-4 border-b">Først når samlet brutto {'>'} 63.000 kr./md.; sjældent, men muligt ved meget overarbejde.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger lokomotivfører løn efter skat som regel mellem 23.000 og 35.000 kr. pr. måned. 
              Skifteholds­tillæg, funktions­tillæg og kommuneskat er de vigtigste løftestænger for en højere netto. 
              Få de præcise tal for din egen tjenesteplan i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – før du sætter toget i gear.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2"><a href="https://www.djf.dk/overenskomster-og-aftaler/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Dansk Jernbaneforbund / DSB Overenskomst 2024-26 – løntrin og genetillæg</a></li>
              <li className="mb-2"><a href="https://www.jobindex.dk/jobsoegning?q=lokomotivf%C3%B8rer" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Lokomotivførere, maj 2025</a></li>
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

export default LokomotivfoererLoenPage; 