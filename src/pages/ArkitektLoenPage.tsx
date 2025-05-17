import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ArkitektLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 58000, netMin: 37200, netMax: 38000 },
    "Aarhus": { grossSalary: 55000, netMin: 35800, netMax: 36400 },
    "Odense": { grossSalary: 52000, netMin: 33800, netMax: 34500 },
    "Aalborg": { grossSalary: 50000, netMin: 32500, netMax: 33200 },
    "Esbjerg (industribyggeri)": { grossSalary: 48000, netMin: 31100, netMax: 31800 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet cand.arch. (0-1 år)", grossSalary: 38000, netMin: 25300, netMax: 25900 },
    { type: "Assistent-arkitekt (2-3 år)", grossSalary: 42000, netMin: 27900, netMax: 28500 },
    { type: "Projektarkitekt (4-6 år)", grossSalary: 48000, netMin: 31100, netMax: 31800 },
    { type: "Senior / Projektleder (7-9 år)", grossSalary: 55000, netMin: 35800, netMax: 36400 },
    { type: "Chefarkitekt / Associate (10-12 år)", grossSalary: 60000, netMin: 38000, netMax: 38600 },
    { type: "Partner / Design Director (13+ år)", grossSalary: 75000, netMin: 48500, netMax: 49200 }
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
        title="Arkitekt Løn Efter Skat 2025 – Se Realistiske Eksempler"
        description="Hvad er arkitekt løn efter skat i 2025? Se løn før og efter skat for nyuddannede, projektledere og chefer. Beregn din egen nettoløn her."
        keywords="arkitekt løn efter skat, arkitekt nettoløn, cand.arch løn, tegnestueløn, projektarkitekt løn"
      />
      <Header />
      <PageTitle title="Arkitekt Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Arkitekt Løn Efter Skat 2025 – Fra skitse til nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat arkitekt kan i 2025 typisk forvente løn før skat på 38 000 – 60 000 kr. (nyuddannet → senior). Det svarer til en arkitekt løn efter skat på ca. 25 000 – 38 500 kr. Beløbet afhænger især af sektor (privat tegnestue, totalentreprenør, kommune), erfaring, specialetillæg og bopælskommune. Brug vores <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> værktøj for at se dit præcise tal.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger arkitekt løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Grundløn & lønbånd</td>
                    <td className="py-3 px-4 border-b">DI-overenskomstens bånd er pr. 1. maj 2025 hævet til 33 241, 39 241 og 46 241 kr. for arkitekter.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Sektor & projektform</td>
                    <td className="py-3 px-4 border-b">Private virksomheder betaler i snit 5-10 % mere end det offentlige, men bonusandelen er større.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Specialisering</td>
                    <td className="py-3 px-4 border-b">BIM-lead, bæredygtigheds­certificering (DGNB) eller projektlederrolle kan give 2 000-4 000 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & resultatløn</td>
                    <td className="py-3 px-4 border-b">Typisk 5-15 % af årsløn i større total- og rådgiverfirmaer; beskattes som almindelig løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 11-17 %</td>
                    <td className="py-3 px-4 border-b">Bidraget trækkes før skat og øger den samlede pakke væsentligt.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel – ≈ ± 700 kr./md. i arkitekt løn efter skat.</td>
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
              * Estimater uden kirkeskat; forudsætter gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %. Det landsdækkende gennemsnit for arkitekter ligger omkring 56 000 kr. før skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrieretrappen – arkitekt løn før og efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, senior projektarkitekt</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 55 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 4 400 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 50 600 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 45 950 kr.</li>
                <li><strong>A-skat (~ 38 %):</strong> 17 460 kr.</li>
                <li><strong>Arkitekt løn efter skat ≈</strong> 33 140 kr.</li>
              </ul>
            </div>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire greb til højere arkitekt nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Certificér dig i DGNB, LEED eller Passivhus</strong> – giver ofte +5-10 % løn før skat.</li>
              <li><strong>Tag projektlederansvar</strong> – mange firmaer belønner P- eller K-lederroller med funktionsti­llæg.</li>
              <li><strong>Forhandl bonus for overskudsgrad eller kundesalg</strong> – særligt i totalrådgivning.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – op til 700 kr. ekstra i arkitekt løn efter skat hver måned.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Arkitekt Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny arkitekt efter skat?</p>
                <p>Typisk 25 000-26 000 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når man 35 000 kr. efter skat?</p>
                <p>Som senior projektleder eller specialist ved løn før skat ≈ 55 000 kr.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej – arbejdsgiverbetalt pension (11-17 %) indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Udløser bonus topskat?</p>
                <p>Først når samlet månedsløn før skat overstiger ca. 63 000 kr.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger arkitekt løn efter skat typisk mellem 25 000 og 38 500 kr. afhængigt af erfaring, sektor og kommuneskat. Specialisering, bonusaftaler og bopælskommune er de hurtigste veje til en højere nettoløn. Indtast dine egne tal via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget dine streger på tegnebrættet realt giver på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.danskindustri.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DI & Dansk Ark – Lønbånd pr. 1. maj 2025</a></li>
              <li><a href="https://www.studentum.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Gennemsnitlig arkitektløn 2025</a></li>
              <li><a href="https://faod.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FAOD – Råd og Jura, lønstatistik for arkitekter 2024</a></li>
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

export default ArkitektLoenPage; 