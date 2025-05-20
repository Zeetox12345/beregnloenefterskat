import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const KonsulentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 65000, netMin: 42000, netMax: 42800 },
    "Aarhus": { grossSalary: 60000, netMin: 38500, netMax: 39300 },
    "Odense": { grossSalary: 55000, netMin: 35100, netMax: 35800 },
    "Aalborg": { grossSalary: 52000, netMin: 33200, netMax: 33900 },
    "Esbjerg": { grossSalary: 49000, netMin: 31300, netMax: 32000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Graduate / Analyst", grossSalary: 38000, netMin: 24000, netMax: 24600 },
    { type: "Consultant (2-3 år)", grossSalary: 45000, netMin: 28600, netMax: 29300 },
    { type: "Senior Consultant", grossSalary: 55000, netMin: 35100, netMax: 35800 },
    { type: "Manager", grossSalary: 65000, netMin: 42000, netMax: 42800 },
    { type: "Principal / Partner-track", grossSalary: 75000, netMin: 47000, netMax: 47800 },
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
        title="Konsulent Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Hvad er konsulent løn efter skat i 2025? Se realistiske estimater baseret på erfaring, branche og bonus – og beregn dit eget nettobeløb hurtigt og nemt."
        keywords="konsulent løn, løn efter skat, konsulent nettoløn, management konsulent løn, IT-konsulent løn, konsulentlønninger 2025"
      />
      <Header />
      <PageTitle title="Konsulent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Konsulent Løn Efter Skat 2025 – Tal, Tendenser og Beregning</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids konsulent (37 t/uge) kan i 2025 som tommelfingerregel forvente en løn før skat på 38.000 – 75.000 kr. pr. måned, afhængigt af branche (management, IT, public), anciennitet og bonus. Det giver en konsulent løn efter skat på ca. 24.000 – 47.000 kr. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et nøjagtigt nettobeløb.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker konsulent løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Lønfaktor</th>
                    <th className="px-4 py-2 text-left border-b">Relevans</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Branche</td>
                    <td className="px-4 py-2 border-b">Management / strategi betaler 8-12 % over IT-konsulenter; offentlig rådgivning ligger lavere.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Erfaring & rolle</td>
                    <td className="px-4 py-2 border-b">Associate → Consultant → Senior → Manager → Principal; hvert hop ≈ 10-15 % lønløft.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Bonus & provision</td>
                    <td className="px-4 py-2 border-b">10-30 % af årsløn ved målopfyldelse; beskattes som almindelig løn.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Certificeringer</td>
                    <td className="px-4 py-2 border-b">PMP, Scrum, Azure, SAP kan give 1.500-3.000 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Pension 12-15 %</td>
                    <td className="px-4 py-2 border-b">Betales før skat og indgår ikke i nettolønnen.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Kommuneskat</td>
                    <td className="px-4 py-2 border-b">Spænder 0,8 pct.point → ± ≈ 700 kr./md. i konsulent løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn Efter Skat – Byoversigt 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">By / Region</th>
                    <th className="px-4 py-2 text-left border-b">Løn før skat</th>
                    <th className="px-4 py-2 text-left border-b">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((example, index) => (
                    <tr key={index} className={selectedCity === example.city ? "bg-blue-50" : ""}>
                      <td 
                        className="px-4 py-2 border-b font-medium cursor-pointer hover:text-blue-600"
                        onClick={() => setSelectedCity(example.city)}
                      >
                        {example.city}
                      </td>
                      <td className="px-4 py-2 border-b">{example.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-2 border-b">{example.netMin.toLocaleString('da-DK')} – {example.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-gray-600 mt-2">* Estimater uden kirkeskat; forudsætter AM-bidrag 8 % og gennemsnitlig kommuneskat 24,9 %.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrieretrappen – Konsulent Løn Før og Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Erfaring / Titel</th>
                    <th className="px-4 py-2 text-left border-b">Løn før skat</th>
                    <th className="px-4 py-2 text-left border-b">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((level, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border-b font-medium">{level.type}</td>
                      <td className="px-4 py-2 border-b">{level.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-2 border-b">{level.netMin.toLocaleString('da-DK')} – {level.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – IT-konsulent, Odense med 10 % bonus</h2>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <ul className="list-none pl-0 space-y-2">
                <li><strong>Løn før skat:</strong> 55.000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 4.400 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 50.600 kr.</li>
                <li><strong>Personfradrag:</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 45.950 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 17.000 kr.</li>
                <li><strong>Konsulent løn efter skat ≈</strong> 34.550 kr.</li>
              </ul>
              <p className="mt-4">
                Test selv andre bonusprocenter eller kommunesatser i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget din nettoløn svinger.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere konsulent nettoløn</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Specialisér dig i høj-margin sektorer</strong> (medico, fintech, cloud) – +8-12 % grundløn.</li>
              <li><strong>Forhandl bonustrappe</strong> koblet til faktureringsgrad eller EBIT-mål.</li>
              <li><strong>Tag certificeringer</strong> (PMP, AWS, SAP) – giver typisk 1.500-3.000 kr./md. før skat.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – op til 700 kr. mere i konsulent løn efter skat uden ekstra arbejde.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Konsulent Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Spørgsmål</th>
                    <th className="px-4 py-2 text-left border-b">Svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Hvad tjener en ny konsulent efter skat?</td>
                    <td className="px-4 py-2 border-b">Ca. 24.000-25.000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Hvornår når man 40.000 kr. netto?</td>
                    <td className="px-4 py-2 border-b">Typisk på manager-niveau med bonus i storbyer.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Indgår pension i nettoløn?</td>
                    <td className="px-4 py-2 border-b">Nej, 12-15 % indbetales før skat.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Udløser bonus topskat?</td>
                    <td className="px-4 py-2 border-b">Ja, når samlet bruttoløn {'>'}  ≈ 63.000 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger konsulent løn efter skat normalt mellem 24.000 og 47.000 kr. Grundløn, bonusmodel og kommuneskat er de største drivere. Udfyld dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad din rådgivning reelt giver på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://www.djoef.dk/loenoversigt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Djøf Lønstatistik 2025 – Konsulenter i privat sektor</a></li>
              <li><a href="https://businessdanmark.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Business Danmark Lønanalyse 2024 – Consulting & Advisory</a></li>
              <li><a href="https://www.jobindex.dk/jobsoegning?q=konsulent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex Lønindex – Konsulentstillinger, maj 2025</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatteaendringer-i-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommunale skatteprocenter 2025</a></li>
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

export default KonsulentLoenPage; 