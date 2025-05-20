import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const KosmetiskSygeplejerskeLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København & Nordsjælland": { grossSalary: 52000, netMin: 34000, netMax: 34700 },
    "Aarhus": { grossSalary: 45000, netMin: 29500, netMax: 30100 },
    "Odense": { grossSalary: 42000, netMin: 27400, netMax: 28000 },
    "Aalborg": { grossSalary: 40000, netMin: 26000, netMax: 26600 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (0-2 år)", grossSalary: 35000, netMin: 23200, netMax: 23800 },
    { type: "3-5 år + certifikater", grossSalary: 40000, netMin: 26400, netMax: 27000 },
    { type: "6-8 år + provision", grossSalary: 45000, netMin: 29500, netMax: 30100 },
    { type: "Senior / klinikansvarlig", grossSalary: 50000, netMin: 32700, netMax: 33300 },
    { type: "Partner / selvstændig klinik", grossSalary: 55000, netMin: 35700, netMax: 36300 },
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
        title="Kosmetisk Sygeplejerske Løn Efter Skat 2025 – Realistiske Estimater"
        description="Hvad er kosmetisk sygeplejerske løn efter skat i 2025? Se løn før og efter skat baseret på erfaring, provision og kommune – og beregn dit eget beløb online."
        keywords="kosmetisk sygeplejerske løn, sygeplejerske løn efter skat, kosmetisk sygeplejerske, æstetisk sygeplejerske, filler sygeplejerske, botox sygeplejerske"
      />
      <Header />
      <PageTitle title="Kosmetisk Sygeplejerske Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Kosmetisk Sygeplejerske Løn Efter Skat 2025 – fra filler-sprøjte til nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids kosmetisk sygeplejerske kan i 2025 som tommelfingerregel forvente en løn før skat på 35 000 – 55 000 kr. pr. måned (nyuddannet → senior/klinik­ansvarlig). Det svarer til en kosmetisk sygeplejerske løn efter skat på cirka 23 000 – 36 000 kr. afhængigt af kommune, provision og erfaring. Tjek dit præcise beløb i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad afgør en kosmetisk sygeplejerskes løn efter skat?</h2>
            
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
                    <td className="px-4 py-2 border-b font-medium">Grundløn & anciennitet</td>
                    <td className="px-4 py-2 border-b">Dansk Sygeplejeråd oplyser, at nyuddannede kosmetiske sygeplejersker starter omkring 35 000 kr./md. før skat <a href="https://www.euronews.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">euronews</a>.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Kliniktype</td>
                    <td className="px-4 py-2 border-b">Privathospitaler og high-end kæder betaler 8-15 % mere end små klinikker.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Provision / bonus</td>
                    <td className="px-4 py-2 border-b">5-20 % af omsætningen pr. behandling; højere ved filler/Botox end laser.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Certificeringer</td>
                    <td className="px-4 py-2 border-b">IPL, laser, avanceret filler → +1 500-3 000 kr./md. før skat.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Geografi</td>
                    <td className="px-4 py-2 border-b">Aarhus-gennemsnit ~259 000 kr./år (≈21 600 kr./md.) viser lavere lønniveau end Hovedstaden <a href="https://www.salaryexpert.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Salary Expert</a>.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Kommuneskat</td>
                    <td className="px-4 py-2 border-b">Spænd på 0,8 pct.point koster/øger netto med op til 700 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-medium">Pension 12-15 %</td>
                    <td className="px-4 py-2 border-b">Indbetales før skat og ses ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – typiske niveauer 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Erfaring / Rolle</th>
                    <th className="px-4 py-2 text-left border-b">Løn før skat</th>
                    <th className="px-4 py-2 text-left border-b">Kosmetisk sygeplejerske løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-2 border-b font-medium">{item.type}</td>
                      <td className="px-4 py-2 border-b">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-2 border-b">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className="px-4 py-2 text-sm italic">
                      * Estimater uden kirkeskat; AM-bidrag 8 % og gennemsnitlig kommuneskat 24,9 %.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale intervaller (erfaren sygeplejerske, 160 behandlingstimer/md.)</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Region</th>
                    <th className="px-4 py-2 text-left border-b">Løn før skat</th>
                    <th className="px-4 py-2 text-left border-b">Efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((item, index) => (
                    <tr 
                      key={index} 
                      className={selectedCity === item.city ? "bg-blue-50" : index % 2 === 0 ? "bg-gray-50" : ""}
                      onClick={() => setSelectedCity(item.city)}
                    >
                      <td className="px-4 py-2 border-b font-medium">{item.city}</td>
                      <td className="px-4 py-2 border-b">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-2 border-b">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className="px-4 py-2 text-sm italic">
                      Kilde-intervaller baseret på DSR, branchedata og SalaryExpert <a href="https://www.euronews.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">euronews</a> <a href="https://www.salaryexpert.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Salary Expert</a>.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – certificeret filler-specialist, Odense</h2>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm my-4">
              <ul className="list-none space-y-2">
                <li><strong>Løn før skat:</strong> 42 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 360 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 38 640 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 33 990 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 12 600 kr.</li>
                <li><strong>Kosmetisk sygeplejerske løn efter skat ≈</strong> 26 040 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Sælg højmargin-behandlinger</strong> (filler, profhilo, IPL-pakker) – provisionen er ofte 10-20 %.
              </li>
              <li>
                <strong>Tag avancerede certificeringer</strong> – klinikker betaler typisk +2 000 kr./md. for laser/F-gas-certifikat.
              </li>
              <li>
                <strong>Vælg lav-skat kommune</strong> – kan øge kosmetisk sygeplejerske løn efter skat med op til 700 kr./md.
              </li>
              <li>
                <strong>Opbyg egen kundebase</strong> – selvstændige eller partner­modeller kan give 60 000 kr.+ før skat.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Kosmetisk Sygeplejerske Løn Efter Skat</h2>
            
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
                    <td className="px-4 py-2 border-b">Hvad tjener en ny kosmetisk sygeplejerske efter skat?</td>
                    <td className="px-4 py-2 border-b">Omkring 23 000 kr./md. <a href="https://www.euronews.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">euronews</a></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Hvornår når man 30 000 kr. netto?</td>
                    <td className="px-4 py-2 border-b">Med 5-8 års erfaring, bonus og højt behandlings­volume.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Indgår pension i nettoløn?</td>
                    <td className="px-4 py-2 border-b">Nej – 12-15 % arbejdsgiverpension indbetales før skat.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Udløser provision topskat?</td>
                    <td className="px-4 py-2 border-b">Først når samlet brutto­løn overstiger ca. 63 000 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p>
              I 2025 ligger kosmetisk sygeplejerske løn efter skat typisk mellem 23 000 og 36 000 kr. pr. måned. Provision, certificeringer og kommuneskat er de største løftestænger – brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at finde dit nøjagtige nettobeløb og se, hvor meget din æstetiske ekspertise kaster af sig.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Euronews, 16. feb. 2024 – DSR: ny kosmetisk sygeplejerske ≈ €4 700/md. <a href="https://www.euronews.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">euronews</a>
              </li>
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

export default KosmetiskSygeplejerskeLoenPage; 