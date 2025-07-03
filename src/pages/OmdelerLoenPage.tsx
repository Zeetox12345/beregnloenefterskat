import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const OmdelerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 28000, netMin: 18000, netMax: 22000 },
    "Aarhus": { grossSalary: 26500, netMin: 17250, netMax: 21000 },
    "Odense": { grossSalary: 25000, netMin: 16250, netMax: 19500 },
    "Aalborg": { grossSalary: 24500, netMin: 15750, netMax: 19000 },
    "Esbjerg": { grossSalary: 23500, netMin: 15000, netMax: 18000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Ny omdeler (dagrute)", grossSalary: 20000, netMin: 13000, netMax: 13500 },
    { type: "Erfaren + aftentillæg", grossSalary: 24000, netMin: 15500, netMax: 16000 },
    { type: "Teamleder / storrute", grossSalary: 28000, netMin: 18000, netMax: 18500 },
    { type: "Nat- & weekendrute, Kbh.", grossSalary: 32000, netMin: 20500, netMax: 21000 },
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
        title="Omdeler Løn Efter Skat 2025 – Se Din Nettoløn Her"
        description="Hvad er en omdeler løn efter skat i 2025? Typisk 13 000 – 21 000 kr. udbetalt – før skat 20 000 – 32 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="omdeler løn efter skat, avis omdeler løn, reklame omdeler løn, budnet løn, omdeler løn 2025"
      />
      <Header />
      <PageTitle title="Omdeler Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Omdeler Løn Efter Skat 2025 – Fra Ruter til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids omdeler (37 t/uge) – fx avis- eller reklame­omdeler – aflønnes i 2025 med ca. 20 000 – 32 000 kr. før skat. Det giver en omdeler løn efter skat på omtrent 13 000 – 21 000 kr. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se det præcise nettobeløb.
              </p>
            </div>

            <p>Som omdeler i 2025 kan du forvente en månedlig nettoløn på mellem 13 000 og 21 000 kroner, afhængigt af din erfaring, rutetype og geografiske placering. Jobbet som omdeler omfatter distribution af aviser, reklamer og post til private husstande, og lønnen varierer betydeligt baseret på faktorer som tidspunkt på dagen, rutevolumen og overenskomstforhold.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker omdeler løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Lønfaktor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Betydning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Timeløn (mindstesats)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18 år+: 124,75 kr./t (fra 1. marts 2025)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Brancheoverenskomst</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Budnet-aftale 1. maj 2025: 128,50 kr./t</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Natte- & søndagstillæg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">+25,89 kr./t for ruter, der starter 23-06</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Rutevolumen / spandbetaling</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Flere husstande per time løfter bruttolønnen 5 – 15 %</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Geografi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Løn i København ligger ≈ 7 % over landsgennemsnittet</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pension 10 – 12 %</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Indbetales før skat – vises ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Omdeler</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Profil / erfaring</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Løn før skat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">≈ Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {experienceData.map((experience, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{experience.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{experience.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{experience.netMin.toLocaleString()} – {experience.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">* Beregnet med 8 % AM-bidrag, person­fradrag 4 650 kr. og trækprocent 37 %.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">By</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Typisk løn før skat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">≈ Løn efter skat**</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Kommuneskat 2025</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className={selectedCity === "København" ? "bg-blue-50" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">København</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">22 000 – 34 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14 000 – 22 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23,5 %</td>
                  </tr>
                  <tr className={selectedCity === "Aarhus" ? "bg-blue-50" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aarhus</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21 000 – 32 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13 500 – 21 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24,52 %</td>
                  </tr>
                  <tr className={selectedCity === "Odense" ? "bg-blue-50" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Odense</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20 000 – 30 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13 000 – 19 500 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25,50 %</td>
                  </tr>
                  <tr className={selectedCity === "Aalborg" ? "bg-blue-50" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aalborg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20 000 – 29 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 500 – 19 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25,60 %</td>
                  </tr>
                  <tr className={selectedCity === "Esbjerg" ? "bg-blue-50" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Esbjerg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">19 000 – 28 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 000 – 18 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">26,10 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">** Nettobeløb beregnet som ovenfor; kun kommune­satsen varierer.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aftenomdeler med tillæg (Aarhus)</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium">Post</div>
                <div className="font-medium">Beløb</div>
                
                <div>Løn før skat</div>
                <div>24 000 kr.</div>
                
                <div>AM-bidrag 8 %</div>
                <div>1 920 kr.</div>
                
                <div>Skattepligtig indkomst</div>
                <div>22 080 kr.</div>
                
                <div>Personfradrag</div>
                <div>4 650 kr.</div>
                
                <div>Beskatningsgrundlag</div>
                <div>17 430 kr.</div>
                
                <div>A-skat (≈ 37 %)</div>
                <div>6 450 kr.</div>
                
                <div className="font-bold text-lg">Omdeler løn efter skat</div>
                <div className="font-bold text-lg">≈ 15 400 kr.</div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>

            <div className="bg-green-50 p-6 rounded-lg my-6">
              <ol className="list-decimal list-inside space-y-3">
                <li><strong>Tag nat- eller søndagsruter</strong> – tillæg på op til 26 kr./t.</li>
                <li><strong>Optimer ruteplanen</strong> – flere husstande pr. time øger akkorden.</li>
                <li><strong>Bliv rute- eller teamleder</strong> – giver typisk +2 000 kr./md. fast.</li>
                <li><strong>Bosæt dig i lav-skat-kommune</strong> – springet 26,1 % → 23,5 % sparer ≈ 700 kr./md. netto.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Omdeler Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Spørgsmål</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Kort svar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Hvad tjener en ny omdeler efter skat?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Cirka 13 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Kan jeg nå 20 000 kr. netto?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Ja – med nat-/weekendtillæg og storrute i storby.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Er nattillæg skattepligtige?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Ja, de beskattes som A-indkomst.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Indgår pension i nettolønnen?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Nej – 10 – 12 % indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>I 2025 ligger omdeler løn efter skat typisk mellem 13 000 og 21 000 kr. pr. måned, svarende til 20 000 – 32 000 kr. før skat. Tillæg, rutevolumen og kommune­sats er de hurtigste håndtag til et højere nettobeløb. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad der faktisk lander på kontoen, når sidste husstand har fået reklamerne.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Jobpatruljen – Avisbud mindstesats 124,75 kr./t (fra 1. 03 2025) - jobpatruljen.dk</li>
              <li>Budnet.dk – Overenskomstsatser 18 år: 128,50 kr./t (1. 05 2025) - budnet.dk</li>
              <li>SalaryExpert – Courier gennemsnitsløn Danmark 279 276 kr./år (≈ 23 300 kr./md.) - salaryexpert.com</li>
              <li>BlivOmdeler.nu – Løn afhænger af rutevolumen og timetal - blivomdeler.nu</li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: juli 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OmdelerLoenPage;