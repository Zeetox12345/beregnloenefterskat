import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const TekniskDesignerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalaryMin: 34000, grossSalaryMax: 55000, netMin: 21000, netMax: 35000, taxRate: "23,5%" },
    "Aarhus": { grossSalaryMin: 33000, grossSalaryMax: 50000, netMin: 21000, netMax: 32000, taxRate: "24,52%" },
    "Odense": { grossSalaryMin: 32000, grossSalaryMax: 48000, netMin: 20000, netMax: 31000, taxRate: "25,50%" },
    "Aalborg": { grossSalaryMin: 31000, grossSalaryMax: 46000, netMin: 19500, netMax: 29500, taxRate: "25,60%" },
    "Esbjerg": { grossSalaryMin: 30000, grossSalaryMax: 45000, netMin: 19000, netMax: 29000, taxRate: "26,10%" }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0 – 2 år)", grossSalary: 32000, netMin: 20000, netMax: 20500 },
    { type: "Mid-level (3 – 5 år)", grossSalary: 37000, netMin: 23000, netMax: 23500 },
    { type: "Senior / BIM-koordinator", grossSalary: 44000, netMin: 27000, netMax: 27500 },
    { type: "Lead Technical Designer, Kbh.", grossSalary: 52000, netMin: 32000, netMax: 33000 }
  ];

  const cityExamples = useMemo(() => {
    return Object.entries(cityData).map(([city, data]) => {
      return {
        city,
        grossSalaryMin: data.grossSalaryMin,
        grossSalaryMax: data.grossSalaryMax,
        netMin: data.netMin,
        netMax: data.netMax,
        taxRate: data.taxRate
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Teknisk Designer Løn Efter Skat 2025 – Se Din Nettoløn Her"
        description="Hvad er en teknisk designer løn efter skat i 2025? Typisk 20 000 – 33 000 kr. udbetalt – før skat 32 000 – 52 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="teknisk designer løn, CAD designer løn, BIM koordinator løn, teknisk designer løn efter skat, teknisk designer nettoløn"
      />
      <Header />
      <PageTitle title="Teknisk Designer Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Teknisk Designer Løn Efter Skat 2025 – CAD-filer, Konstruktion og Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids teknisk designer (37 t/uge) tjener i 2025 typisk 32 000 – 52 000 kr. før skat, afhængigt af branche, softwarekompetencer og geografi. Det giver en teknisk designer løn efter skat på cirka 20 000 – 33 000 kr. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit præcise nettobeløb.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker teknisk designer løn efter skat?</h2>

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
                    <td className="px-6 py-4 text-sm text-gray-900">Nationalt gennemsnit ≈ 36 – 38 k kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Erfaring & rolle</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Junior → Senior → Lead BIM: +2 000 – 6 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CAD/CAE-specialer</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Revit, Inventor eller SolidWorks Simulation giver 1 500 – 3 000 kr./md. ekstra</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Branche</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Energi, pharma & offshore betaler 5 – 10 % over byggeri/offentlig</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Geografi</td>
                    <td className="px-6 py-4 text-sm text-gray-900">København aflønner ≈ 7 % højere end landsgennemsnittet</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pension 12 – 14 %</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Indbetales før skat – vises ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Teknisk Designer</h2>

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
                    <tr key={experience.type} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{experience.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{experience.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{experience.netMin.toLocaleString()} – {experience.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mb-6">* Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %.</p>

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
                  {cityExamples.map((city, index) => (
                    <tr 
                      key={city.city} 
                      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} ${selectedCity === city.city ? "ring-2 ring-blue-500" : ""}`}
                      onClick={() => setSelectedCity(city.city)}
                      style={{ cursor: 'pointer' }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{city.city}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{city.grossSalaryMin.toLocaleString()} – {city.grossSalaryMax.toLocaleString()} kr.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{city.netMin.toLocaleString()} – {city.netMax.toLocaleString()} kr.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{city.taxRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mb-6">** Nettobeløb beregnet som ovenfor; kun kommunesatsen varierer.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Mid-level teknisk designer (Aarhus)</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Post</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Beløb</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Løn før skat</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">37 000 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">AM-bidrag 8 %</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2 960 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Skattepligtig indkomst</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">34 040 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Personfradrag</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Beskatningsgrundlag</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29 390 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">A-skat (≈ 37 %)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10 860 kr.</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-900">Teknisk designer løn efter skat</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-900">≈ 24 500 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <ol className="list-decimal list-inside space-y-3">
                <li><strong>Opgradér software-stack</strong> – BIM-koordinator med Revit/IFC scorer +2 – 3 k kr./md.</li>
                <li><strong>Søg offshore- eller pharma-projekter</strong> – 5 – 10 % højere grundløn og projektbonus.</li>
                <li><strong>Tag seniorsporet til Lead Designer</strong> – ledelsesansvar giver typisk +6 k kr./md.</li>
                <li><strong>Flyt til lav-skat-kommune</strong> – forskellen 23,5 % vs. 26,1 % sparer ~700 kr./md. netto.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Teknisk Designer Løn Efter Skat</h2>

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
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Hvad tjener en ny teknisk designer efter skat?</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Ca. 20 000 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Kan jeg nå 30 000 kr. netto?</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Ja – som Lead/BIM-specialist i storby med højt projekttryk.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Beskattes projektbonusser som almindelig løn?</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Ja, som A-indkomst.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Indgår pension i nettolønnen?</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Nej – 12 – 14 % indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p className="mb-6">
              I 2025 ligger teknisk designer løn efter skat typisk mellem 20 000 og 33 000 kr. pr. måned, svarende til 32 000 – 52 000 kr. før skat. Softwarekompetencer, branchevalg og geografi er de hurtigste håndtag til at hæve nettobeløbet. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se præcist, hvad der lander på kontoen, når modellen er afleveret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Studentum.dk – Gennemsnitsløn teknisk designer 46 944 kr./md.</li>
              <li>SalaryExpert – Technical Designer Esbjerg 487 151 kr./år (~40 k kr./md.)</li>
              <li>SalaryExpert – CAD Designer København 535 398 kr./år (+7 %)</li>
              <li>Indkomsten.dk – Teknisk designer ca. 34 500 kr./md.</li>
              <li>CEPOS – Kommuneskat 2025 (Kbh. 23,5 %, Aarhus 24,52 %, Odense 25,50 % m.fl.)</li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: juni 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TekniskDesignerLoenPage; 