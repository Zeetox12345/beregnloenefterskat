import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FlymekanikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 46500, netMin: 29500, netMax: 36000 },
    "Aarhus": { grossSalary: 44500, netMin: 28000, netMax: 34000 },
    "Odense": { grossSalary: 43000, netMin: 27000, netMax: 33000 },
    "Aalborg": { grossSalary: 41500, netMin: 26500, netMax: 32000 },
    "Esbjerg": { grossSalary: 41000, netMin: 25500, netMax: 31000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Trainee / ny Part-66 A", grossSalary: 34000, netMin: 22000, netMax: 22500 },
    { type: "Line mechanic, B1/B2 daghold", grossSalary: 40000, netMin: 25000, netMax: 25500 },
    { type: "Certifying staff nat-/weekendvagt", grossSalary: 46000, netMin: 29500, netMax: 30000 },
    { type: "Senior B1/B2 + type rating, CPH", grossSalary: 55000, netMin: 34000, netMax: 35000 },
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
        title="Flymekaniker Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en flymekaniker løn efter skat i 2025? Typisk 22 000 – 35 000 kr. udbetalt – før skat 34 000 – 55 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="flymekaniker løn, flymekaniker løn efter skat, flytekniker løn, aircraft mechanic løn, Part-66 løn"
      />
      <Header />
      <PageTitle title="Flymekaniker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Flymekaniker Løn Efter Skat 2025 – Hold Flyet i Luften og Nettolønnen Høj</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids flymekaniker (37 t/uge) tjener i 2025 typisk 34 000 – 55 000 kr. før skat – fra nyuddannet Part-66-tekniker til erfaren certifying staff på stor hub i København. Det giver en flymekaniker løn efter skat på cirka 22 000 – 35 000 kr. Tjek den præcise nettosum: indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <p>
              At arbejde som flymekaniker kræver præcision, teknisk ekspertise og ansvar for flysikkerheden. Men hvad kan du forvente at få udbetalt efter skat? I denne guide gennemgår vi lønforhold for flymekanikerarbejde i Danmark i 2025 – fra trainee til senior certifying staff.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker flymekaniker løn efter skat?</h2>

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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Grundløn</td>
                    <td className="px-6 py-4 text-sm text-gray-500">National gennemsnit ≈ 56 500 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Certifikat & ansvar</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Part-66 B1/B2 "certifying staff" giver 3 000 – 5 000 kr./md. ekstra</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Skiftehold & tillæg</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Aften +18 %, nat +30 %, weekend +45 % – lægges direkte oven i brutto</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Branche & flåde</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Wide-body line-maintenance, cargo og defense betaler 5 – 10 % over charter/MRO</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Geografi</td>
                    <td className="px-6 py-4 text-sm text-gray-500">København aflønner ≈ 7 % over landsgennemsnittet</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pension 12 – 14 %</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Indbetales før skat – vises ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Flymekaniker</h2>
            
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
                  {experienceData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %.
            </p>

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
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">København</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">36 000 – 57 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23 000 – 36 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23,5 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aarhus</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35 000 – 54 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">22 000 – 34 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24,52 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Odense</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34 000 – 52 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21 000 – 33 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25,50 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aalborg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">33 000 – 50 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21 000 – 32 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25,60 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Esbjerg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">33 000 – 49 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20 000 – 31 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">26,10 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              ** Nettobeløbene er regnet som ovenfor; kun kommunesatsen varierer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Line mechanic med nattevagter (Aarhus)</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="font-medium">Post</div>
                <div className="font-medium">Beløb</div>
                
                <div>Løn før skat</div>
                <div>46 000 kr.</div>
                
                <div>AM-bidrag 8 %</div>
                <div>3 680 kr.</div>
                
                <div>Skattepligtig indkomst</div>
                <div>42 320 kr.</div>
                
                <div>Personfradrag</div>
                <div>4 650 kr.</div>
                
                <div>Beskatningsgrundlag</div>
                <div>37 670 kr.</div>
                
                <div>A-skat (≈ 37 %)</div>
                <div>13 940 kr.</div>
                
                <div className="font-bold text-lg">Flymekaniker løn efter skat</div>
                <div className="font-bold text-lg">≈ 28 400 kr.</div>
              </div>
            </div>

            <p>
              Dette eksempel viser, hvordan skatter og afgifter påvirker nettolønnen. For at få en præcis beregning tilpasset din situation, kan du bruge <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>

            <div className="bg-green-50 p-6 rounded-lg my-6">
              <ol className="list-decimal list-inside space-y-3">
                <li><strong>Tag B1+B2-licens og type-ratings</strong> – giver hurtigt 3 000 – 5 000 kr./md. ekstra.</li>
                <li><strong>Vælg fast nat- og weekendvagt</strong> – tillæg kan hæve bruttolønnen 20 – 45 %.</li>
                <li><strong>Skift til wide-body eller cargo-line</strong> – højere timepris og bonusordninger.</li>
                <li><strong>Bosæt dig i lav-skat-kommune</strong> – springet 26,1 % → 23,5 % sparer ~700 kr. netto pr. måned.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Flymekaniker Løn Efter Skat</h2>

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
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Hvad tjener en ny flymekaniker efter skat?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Omkring 22 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Kan jeg nå 35 000 kr. netto?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Ja – som senior certifying staff i CPH med nat-/weekendtillæg.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Er nat- og weekendtillæg skattepligtige?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Ja, de beskattes som almindelig A-indkomst.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Indgår pension i nettolønnen?</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Nej – pensionen indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>
              I 2025 ligger flymekaniker løn efter skat typisk mellem 22 000 og 35 000 kr. pr. måned, svarende til 34 000 – 55 000 kr. før skat. Licensniveau, skiftehold og kommunesats er de hurtigste gear til at løfte nettobeløbet. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget der faktisk lander på kontoen, når sidste A-check er signeret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>Studentum.dk – Gennemsnitsløn flytekniker 56 512 kr./md.</li>
              <li>SalaryExpert – Aircraft Mechanic Danmark 605 052 kr./år (≈ 50 000 kr./md.)</li>
              <li>SalaryExpert – Aircraft Mechanic København (≈ 7 % over landsgennemsnit)</li>
              <li>Løntjek.dk – Flymekanikerarbejde lønbånd 29 177 – 51 485 kr./md.</li>
              <li>CEPOS – Kommuneskat spænder 23,4 – 26,3 % i 2025</li>
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

export default FlymekanikerLoenPage; 