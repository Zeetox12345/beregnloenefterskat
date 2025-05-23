import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const OverlaegeLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "Aalborg (Region Nord)": { grossSalary: 95000, netMin: 55000, netMax: 56000 },
    "København": { grossSalary: 90000, netMin: 52000, netMax: 54000 },
    "Aarhus": { grossSalary: 85000, netMin: 49000, netMax: 50000 },
    "Odense": { grossSalary: 82000, netMin: 48000, netMax: 49000 },
    "Kolding": { grossSalary: 78000, netMin: 45000, netMax: 46000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Ny overlæge (0-2 år)", grossSalary: 70000, netMin: 43000, netMax: 44000 },
    { type: "3-5 år", grossSalary: 80000, netMin: 47000, netMax: 48000 },
    { type: "6-8 år (faglig leder)", grossSalary: 88000, netMin: 51000, netMax: 52000 },
    { type: "9-11 år (ledende overlæge)", grossSalary: 95000, netMin: 55000, netMax: 56000 },
    { type: "Cheflæge / klinik-chef", grossSalary: 100000, netMin: 58000, netMax: 59000 },
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
        title="Overlæge Løn Efter Skat 2025 – Se Realistiske Tal"
        description="Hvad er overlæge løn efter skat i 2025? Se by- og erfaringstabeller, beregningseksempel og link til beregner for dit personlige nettoløns­estimat."
        keywords="overlæge løn, overlæge løn efter skat, overlæge nettoløn, lægeløn, speciallæge løn, cheflæge løn, hospitalsløn, læge indkomst"
      />
      <Header />
      <PageTitle title="Overlæge Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Overlæge Løn Efter Skat 2025 – Diagnose på Din Nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat overlæge kan i 2025 forvente en løn før skat på ca. 70 000 – 100 000 kr. pr. måned. Det svarer til en overlæge løn efter skat på omtrent 43 000 – 59 000 kr. afhængigt af region, vagt­belastning, funktionstillæg og kommuneskat. Tjek dit nøjagtige beløb med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en overlæge løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-2 px-4 border-b text-left">Hvorfor det gør en forskel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Løn før skat</td>
                    <td className="py-2 px-4 border-b">Regions- og cheflønskala + lokale kvalifikations- og funktionstillæg. Standard ≈ 77 000 kr. <br /><span className="text-sm text-gray-600">Lægeforeningen</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Geografi</td>
                    <td className="py-2 px-4 border-b">Region Nordjylland ligger 8-10 % højere pga. flere vagt­timer. <br /><span className="text-sm text-gray-600">Ugeskriftet.dk</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Vagter & genetillæg</td>
                    <td className="py-2 px-4 border-b">Aften + 18 %, nat + 30 %, weekend + 45 % – kan løfte nettolønnen 5-10 k/måned.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Forskning / professorat</td>
                    <td className="py-2 px-4 border-b">Tillæg 3 000-7 000 kr. før skat for ph.d., professor eller forskningsledelse.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Resultataflønning</td>
                    <td className="py-2 px-4 border-b">Kvalitet-/effektivitetstillæg op til 10 % af årsløn ved mål­opfyldelse.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Pension 18 %</td>
                    <td className="py-2 px-4 border-b">Arbejdsgiver indbetaler før skat; forbedrer totalpakken, men ses ikke i nettoløn.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-2 px-4 border-b">± 0,8 pct.point ⇒ ± 650 kr./md. i løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regions­oversigt – Overlæge Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Region / By</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((item, index) => (
                    <tr 
                      key={index}
                      className={selectedCity === item.city ? "bg-blue-50" : ""}
                      onClick={() => setSelectedCity(item.city)}
                    >
                      <td className="py-2 px-4 border-b font-medium">{item.city}</td>
                      <td className="py-2 px-4 border-b">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-2 px-4 border-b">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className="py-2 px-4 text-sm text-gray-600 italic">
                      * Beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %, uden kirkeskat. Se dit eget tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karriere­trin – Overlæge Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Anciennitet / Rolle</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b font-medium">{item.type}</td>
                      <td className="py-2 px-4 border-b">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-2 px-4 border-b">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="my-4">
              Tallene hviler på Lægeforeningens gennemsnits­statistik og faglige lønportaler, hvor overenskomstansatte overlæger rapporterer 72 000-77 000 kr. som basisspænd <a href="https://laeger.dk/foreninger/overlaegeforeningen/loen-overlaeger-ansat-i-region/gennemsnitsloenninger" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Lægeforeningen</a> <a href="https://fagforeningsguide.dk/hvad-tjener-en-laege/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FagforeningsGuide</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Odense, 82 000 kr. før skat</h2>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <ul className="list-none space-y-2">
                <li><strong>Løn før skat:</strong> 82 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> → 6 560 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> → 75 440 kr.</li>
                <li><strong>Personfradrag:</strong> → 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> → 70 790 kr.</li>
                <li><strong>A-skat (~ 38 %):</strong> → 26 900 kr.</li>
                <li><strong>Overlæge løn efter skat:</strong> ≈ 48 500 kr.</li>
              </ul>
              <p className="text-sm mt-3">
                Prøv selv med andre vagttal eller lavere kommuneskat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige strategier til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Flere nat-/weekendvagter</strong> – genetillæg kan løfte nettolønnen 5-7 k kr./md.</li>
              <li><strong>Påtag dig forsknings- eller kvalitetsansvar</strong> – funktions­tillæg 3-7 k kr./md. før skat.</li>
              <li><strong>Forhandl lokal resultatløn</strong> – bonus ved opfyldte DRG- eller effektivitetstal.</li>
              <li><strong>Overvej bopæl i lav-skat kommune</strong> – +300-650 kr./md. netto, uden ekstra arbejde.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Overlæge Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-2 px-4 border-b text-left">Svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Hvad tjener en ny overlæge efter skat?</td>
                    <td className="py-2 px-4 border-b">Ca. 43 000 kr. pr. måned.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Hvornår når man 60 000 kr. efter skat?</td>
                    <td className="py-2 px-4 border-b">Typisk som cheflæge eller klinikchef med høj vagt­belastning + resultatbonus.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Indgår pension i løn efter skat?</td>
                    <td className="py-2 px-4 border-b">Nej, 18 % pension indbetales før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Rammer overlæger topskat?</td>
                    <td className="py-2 px-4 border-b">Ja – næsten hele lønnen over 63 300 kr./md. før skat beskattes med topskat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p className="my-4">
              I 2025 ligger overlæge løn efter skat oftest mellem 43 000 og 59 000 kr. pr. måned, baseret på en løn før skat på 70 000-100 000 kr. Vagt­tillæg, forsknings-/leder­funktioner og lav kommuneskat er de hurtigste måder at hæve nettolønnen. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad der faktisk lander på kontoen, når journalerne er signeret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Læger.dk – "Overlægers gennemsnits­lønninger, Netto gns. Q4 2024" <a href="https://laeger.dk/foreninger/overlaegeforeningen/loen-overlaeger-ansat-i-region/gennemsnitsloenninger" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Lægeforeningen</a></li>
              <li>Fagforeningsguide.dk – "Speciallæger tjener … overlæger ligger på 72-74 k" (27-01-2025) <a href="https://fagforeningsguide.dk/hvad-tjener-en-laege/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FagforeningsGuide</a></li>
              <li>Ugeskrift for Læger – "Nordjyske overlæger tjener mest" (02-12-2016) <a href="https://ugeskriftet.dk/nyhed/nordjyske-overlaeger-tjener-mest" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ugeskriftet.dk</a></li>
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

export default OverlaegeLoenPage; 