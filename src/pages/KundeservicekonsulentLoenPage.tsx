import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const KundeservicekonsulentLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 34700, netMin: 22200, netMax: 22700 },
    "Aarhus": { grossSalary: 32000, netMin: 20700, netMax: 21200 },
    "Odense": { grossSalary: 30000, netMin: 19300, netMax: 19800 },
    "Aalborg": { grossSalary: 29000, netMin: 18600, netMax: 19100 },
    "Esbjerg": { grossSalary: 28000, netMin: 18000, netMax: 18500 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0-2 år)", grossSalary: 28000, netMin: 18300, netMax: 18800 },
    { type: "Konsulent 3-5 år", grossSalary: 32000, netMin: 20700, netMax: 21200 },
    { type: "Senior / Coach", grossSalary: 36000, netMin: 23300, netMax: 23800 },
    { type: "Specialist (København, flere sprog)", grossSalary: 40000, netMin: 25800, netMax: 26300 },
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
        title="Kundeservicekonsulent Løn Efter Skat 2025 – Se Din Nettoløn"
        description="Hvad får du udbetalt som kundeservicekonsulent? Se realistiske lønninger før og efter skat i 2025 – og beregn din præcise nettoløn hurtigt online."
        keywords="kundeservicekonsulent løn, kundeservice løn efter skat, customer service løn, support konsulent løn, callcenter løn 2025"
      />
      <Header />
      <PageTitle title="Kundeservicekonsulent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Kundeservicekonsulent Løn Efter Skat 2025 – Fra Ticket-Trend til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids kundeservicekonsulent (37 t/uge) kan i 2025 forvente en løn før skat på ca. 28 000 – 40 000 kr. pr. måned – afhængigt af branche, erfaring og bonus. Det lander på en kundeservicekonsulent løn efter skat på omtrent 18 000 – 26 000 kr. Få et præcist tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer kundeservicekonsulent løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Lønfaktor</th>
                    <th className="px-4 py-2 text-left border-b">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Basisløn</td>
                    <td className="px-4 py-2 border-b">Indkomsten.dk viser 29 000 kr./md. for kundeservice­medarbejdere og 35 000 kr./md. for kundekonsulenter.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Geografi</td>
                    <td className="px-4 py-2 border-b">SalaryExpert estimerer 417 071 kr./år (≈ 34 700 kr./md.) i København – ca. 7 % over landsgennemsnittet.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Erfaring & rolle</td>
                    <td className="px-4 py-2 border-b">Junior → Konsulent → Senior / Team Coach – hvert spring løfter lønnen 2-4 k kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Sprog & systemkompetencer</td>
                    <td className="px-4 py-2 border-b">Tysk/­svensk hotline eller Zendesk/SAP-erfaring udløser 1-3 k kr./md. i funktions­tillæg.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Bonus & KPI</td>
                    <td className="px-4 py-2 border-b">NPS- eller mersalgsbonus kan give 5-10 % oveni basisløn – beskattes som almindelig løn.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Pension 12-15 %</td>
                    <td className="px-4 py-2 border-b">Arbejdsgiver­bidrag indbetales før skat og ses ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Kundeservicekonsulent 2025*</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Erfaring / Rolle</th>
                    <th className="px-4 py-2 text-left border-b">Løn før skat</th>
                    <th className="px-4 py-2 text-left border-b">Løn efter skat**</th>
                    <th className="px-4 py-2 text-left border-b">Kilde</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((level, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border-b font-medium">{level.type}</td>
                      <td className="px-4 py-2 border-b">{level.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-2 border-b">{level.netMin.toLocaleString('da-DK')} – {level.netMax.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-2 border-b">Indkomsten.dk</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-sm text-gray-600 mt-2">
                <p>* 160,33 t fuldtidsnorm; eventuel bonus indregnet som månedsgennemsnit.</p>
                <p>** Nettotal beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent.</p>
              </div>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior konsulent med bonus</h2>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <ul className="list-none pl-0 space-y-2">
                <li><strong>Løn før skat:</strong> 36 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 880 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 33 120 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 28 470 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 10 540 kr.</li>
                <li><strong>Kundeservicekonsulent løn efter skat ≈</strong> 23 400 kr.</li>
              </ul>
              <p className="mt-4">
                Tjek dit eget tal – indtast bruttolønnen i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til højere nettoløn</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Lær et ekstra sprog</strong> – tysk, hollandsk eller norsk hotline giver ofte +1-2 k kr./md. før skat.</li>
              <li><strong>Bliv KPI-topscorer</strong> – mange centre belønner høj NPS eller mersalg med 5-10 % bonus.</li>
              <li><strong>Opgradér systemkompetencer</strong> – certificering i Zendesk, Salesforce Service Cloud eller SAP CRM kan udløse funktions­tillæg.</li>
              <li><strong>Sigt efter senior- eller coachrolle</strong> – ledelses­ansvar hæver basislønnen 3-4 k kr./md.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Kundeservicekonsulent Løn Efter Skat</h2>
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
                    <td className="px-4 py-2 border-b font-medium">Hvad tjener en ny konsulent efter skat?</td>
                    <td className="px-4 py-2 border-b">Cirka 18 500 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Hvordan når jeg 25 000 kr. efter skat?</td>
                    <td className="px-4 py-2 border-b">Fokus på storbyløb, sprog­tillæg og KPI-bonus.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Tæller pension i nettoløn?</td>
                    <td className="px-4 py-2 border-b">Nej – 12-15 % indbetales før skat.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Rammer bonus topskat?</td>
                    <td className="px-4 py-2 border-b">Kun hvis samlet bruttoløn overstiger ca. 63 000 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger Kundeservicekonsulent løn efter skat typisk mellem 18 000 og 26 000 kr. pr. måned – svarende til 28 000 – 40 000 kr. før skat. Sprog­tillæg, KPI-bonus og storbyløn er de hurtigste måder at øge nettobeløbet. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se præcis, hvad der tikker ind på kontoen, når den sidste ticket er lukket.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Indkomsten.dk – Kundeservicemedarbejder 29 000 kr./md.</li>
              <li>Indkomsten.dk – Kundekonsulent 35 000 kr./md.</li>
              <li>Indkomsten.dk – Kundesupport 32 000 kr./md.</li>
              <li>SalaryExpert – Customer Service Agent, København: 417 071 kr./år (≈ 34 700 kr./md.)</li>
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

export default KundeservicekonsulentLoenPage; 