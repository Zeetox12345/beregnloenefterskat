import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LeasingkonsulentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 47000, netMin: 29800, netMax: 30400 },
    "Aarhus": { grossSalary: 43000, netMin: 27300, netMax: 27900 },
    "Odense": { grossSalary: 40000, netMin: 25500, netMax: 26000 },
    "Aalborg": { grossSalary: 38000, netMin: 24100, netMax: 24700 },
    "Esbjerg": { grossSalary: 36000, netMin: 22900, netMax: 23400 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior / Trainee", grossSalary: 33000, netMin: 21500, netMax: 22000 },
    { type: "Konsulent 3-5 år + provision", grossSalary: 40000, netMin: 25500, netMax: 26000 },
    { type: "Senior (Key Account)", grossSalary: 45000, netMin: 28600, netMax: 29100 },
    { type: "Team Lead / Head of Leasing", grossSalary: 50000, netMin: 32000, netMax: 32500 },
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
        title="Leasingkonsulent Løn Efter Skat 2025 – Se Din Nettoløn"
        description="Hvad får du udbetalt som leasingkonsulent? Se realistiske lønninger før og efter skat – og brug beregneren til at finde din præcise nettoløn i 2025."
        keywords="leasingkonsulent løn, løn efter skat, leasing konsulent nettoløn, finanskonsulent løn, leasingkonsulent 2025"
      />
      <Header />
      <PageTitle title="Leasingkonsulent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Leasingkonsulent Løn Efter Skat 2025 – Gear Din Nettoløn i Gearkassen</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids leasingkonsulent (37 t/uge) kan i 2025 forvente en løn før skat på ca. 33.000 – 50.000 kr. pr. måned, afhængigt af erfaring, porteføljestørrelse og provision. Det svarer til en leasingkonsulent løn efter skat på omtrent 21.000 – 32.000 kr. Få et helt præcist nettotal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer en leasingkonsulent løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Lønfaktor</th>
                    <th className="px-4 py-2 text-left border-b">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Basisløn</td>
                    <td className="px-4 py-2 border-b">Glassdoor angiver gennemsnit ≈ 45.000 kr./md. for konsulenter i finans/leasing.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Provision & bonus</td>
                    <td className="px-4 py-2 border-b">Typisk 5 – 15 % af dækningsbidrag; top-performere kan fordoble månedslønnen i højsæson.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Portefølje (B2B vs. B2C)</td>
                    <td className="px-4 py-2 border-b">Bil- og materiel-leasing til erhverv betaler 8-10 % mere end privatleasing.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Certificeringer</td>
                    <td className="px-4 py-2 border-b">F&I-certifikat eller Finanstilsynets fit-&-proper-godkendelse kan udløse 1 – 3 k kr./md. i funktionstillæg.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Geografi</td>
                    <td className="px-4 py-2 border-b">København ≈ 7 % over landsgennemsnit, men trækprocenten er også lidt højere.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Pension 15 %</td>
                    <td className="px-4 py-2 border-b">Arbejdsgiverbidrag indbetales før skat og øger totalpakken, men ses ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Leasingkonsulent Løn – Før & Efter Skat i 2025</h2>

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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Leasingkonsulent 2025*</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Erfaring / Rolle</th>
                    <th className="px-4 py-2 text-left border-b">Løn før skat</th>
                    <th className="px-4 py-2 text-left border-b">Løn efter skat**</th>
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
              <p className="text-sm text-gray-600 mt-2">* 160,33 t fuldtid, provision indregnet som gennemsnit.</p>
              <p className="text-sm text-gray-600">** Nettotal beregnet med 8 % AM-bidrag, personfradrag 4.650 kr. og gennemsnitlig trækprocent.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Konsulent med provision</h2>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <ul className="list-none pl-0 space-y-2">
                <li><strong>Løn før skat:</strong> 40.000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3.200 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 36.800 kr.</li>
                <li><strong>Personfradrag:</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 32.150 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 11.900 kr.</li>
                <li><strong>Leasingkonsulent løn efter skat ≈</strong> 25.000 kr.</li>
              </ul>
              <p className="mt-4">
                Prøv andre bonus-scenarier i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire gear til højere nettoløn</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Skru op for provisionen</strong> – fokusér på high-margin erhvervsleasing eller grønne firmabiler.</li>
              <li><strong>Tag F&I-certifikat</strong> – dokumenteret compliance giver ofte +2 k kr./md. i basis.</li>
              <li><strong>Forhandl KPI-bonus</strong> på porteføljens restværdi eller renewal-rate.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – +600 kr./md. netto uden ekstra kontrakter.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Leasingkonsulent Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Spørgsmål</th>
                    <th className="px-4 py-2 text-left border-b">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Hvad tjener en ny leasingkonsulent efter skat?</td>
                    <td className="px-4 py-2 border-b">Ca. 22.000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Kan jeg nå 30.000 kr. efter skat?</td>
                    <td className="px-4 py-2 border-b">Ja, som senior med høj provision eller team-lead-tillæg.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Tæller provision i nettoløn?</td>
                    <td className="px-4 py-2 border-b">Ja, den beskattes som almindelig løn hver måned.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Rammer bonus topskat?</td>
                    <td className="px-4 py-2 border-b">Først når samlet løn før skat overstiger ca. 63.000 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger leasingkonsulent løn efter skat typisk mellem 21.000 og 32.000 kr. pr. måned – svarende til 33.000 – 50.000 kr. før skat. Provision, certificeringer og geografi er de vigtigste gear, hvis du vil køre nettolønnen op. Test din egen løn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se med det samme, hvor meget der lander på kontoen, når leasingaftalerne er lukket.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://www.glassdoor.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Glassdoor – Løndata for konsulenter i Danmark</a></li>
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

export default LeasingkonsulentLoenPage; 