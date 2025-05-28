import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const CroupierLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 27000, netMin: 18000, netMax: 18500 },
    "Aarhus": { grossSalary: 25000, netMin: 16500, netMax: 17000 },
    "Odense": { grossSalary: 24000, netMin: 15900, netMax: 16300 },
    "Aalborg": { grossSalary: 23000, netMin: 15200, netMax: 15700 },
    "Esbjerg": { grossSalary: 22000, netMin: 14600, netMax: 15100 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Trainee / < 1 år", grossSalary: 21000, netMin: 14000, netMax: 14400 },
    { type: "Dealer 2-4 år", grossSalary: 24000, netMin: 15900, netMax: 16300 },
    { type: "Senior Dealer", grossSalary: 27000, netMin: 18000, netMax: 18500 },
    { type: "Pit Boss / Supervisor", grossSalary: 33000, netMin: 22000, netMax: 22500 }
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
        title="Croupier Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad tjener en croupier efter skat i 2025? Se lønintervaller før og efter skat, vagttillæg og stilling – og beregn din nettoløn med få klik."
        keywords="croupier løn efter skat, croupier nettoløn, kasino løn, dealer løn, pit boss løn"
      />
      <Header />
      <PageTitle title="Croupier Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Croupier Løn Efter Skat 2025 – Casinoets Kolde Kontanter i Nettotal</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids croupier (37 t/uge) kan i 2025 forvente en løn før skat på cirka 21 000 – 33 000 kr. pr. måned, afhængigt af erfaring, kasino og vagttillæg. Det svarer til en croupier løn efter skat på omtrent 14 000 – 22 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en croupier løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Overenskomstløn</td>
                    <td className="py-3 px-4 border-b">Start 20 891 – 29 324 kr./md. før skat ifølge LønTjek</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København betaler ca. 7 % over landsgennemsnittet (274-290 k kr./år)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & stilling</td>
                    <td className="py-3 px-4 border-b">Trainee → Dealer → Senior Dealer → Pit Boss – hvert trin løfter lønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Vagter & tillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, nat +30 %, weekend +45 %; tippooling kan give ekstra skattepligtig indkomst.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension / fritvalg</td>
                    <td className="py-3 px-4 border-b">8-10 % pension og fritvalgspulje indbetales før skat – øger totalpakke, men ikke nettoløn.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – byoversigt 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / Region</th>
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
              * Normeret til 160,33 t/md. Nettotal beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Croupier Løn Før & Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                    <th className="py-3 px-4 border-b text-left">Kilde</th>
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
                      <td className="py-3 px-4 border-b text-sm text-gray-600">
                        {exp.type === "Trainee / < 1 år" ? "LønTjek.dk" : 
                         exp.type === "Dealer 2-4 år" ? "Salary Expert" :
                         exp.type === "Senior Dealer" ? "Salary Expert" :
                         "Branchenorm + vagttillæg"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior Dealer, København</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 27 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 160 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 24 840 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 20 190 kr.</li>
                <li><strong>A-skat (≈ 35 %):</strong> 7 070 kr.</li>
                <li><strong>Croupier løn efter skat ≈</strong> 18 000 kr.</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Indtast din egen løn før skat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit eksakte nettobeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Arbejd nat- eller weekendshifts</strong> – genetillæg kan løfte lønnen 1-2 k kr./md.</li>
              <li><strong>Opgrader til Pit Boss</strong> – intern uddannelse og baneovervågning giver +4-6 k kr./md. før skat.</li>
              <li><strong>Fokusér på high-stakes borde</strong> – flere drikkepenge i tippuljen, som beskattes, men øger nettolønnen.</li>
              <li><strong>Udnyt fritvalgspuljen</strong> – vælg udbetaling frem for frihed, hvis du ønsker kontant nettoløft.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Croupier Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny croupier efter skat?</p>
                <p>Cirka 14 000 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når jeg 20 000 kr. efter skat?</p>
                <p>Som Pit Boss eller Senior Dealer med faste nattetillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej – 8-10 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Skal tippen beskattes?</p>
                <p>Ja, tip indberettes som A-indkomst og påvirker nettobeløbet.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger croupier løn efter skat typisk mellem 14 000 og 22 000 kr. pr. måned – svarende til 21 000 – 33 000 kr. før skat. Vagttillæg, erfaringsniveau og tipudbetaling er de vigtigste faktorer for at hæve udbetalingen. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der lander på kontoen, når kuglen standser på det rigtige tal.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://lontjek.dk/danmark-jobs-lonforhold/danmark-bookmaker-og-croupierarbejde-samt-beslaegtede-funktioner" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LønTjek.dk – "Bookmaker- og croupierarbejde" løninterval 20 891 – 29 324 kr./md.</a></li>
              <li><a href="https://www.salaryexpert.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Gambling dealer, København: 274 k – 290 k kr./år (≃ 22-24 k kr./md.)</a></li>
              <li><a href="https://www.studentum.dk/job-loen/croupier" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Job & Løn for Croupier (2025)</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: januar 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CroupierLoenPage; 