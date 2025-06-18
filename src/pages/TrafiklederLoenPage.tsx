import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const TrafiklederLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 45000, netMin: 29500, netMax: 30000 },
    "Aarhus": { grossSalary: 42000, netMin: 27600, netMax: 28100 },
    "Odense": { grossSalary: 38000, netMin: 25000, netMax: 25500 },
    "Aalborg": { grossSalary: 37000, netMin: 24300, netMax: 24800 },
    "Esbjerg": { grossSalary: 35000, netMin: 23000, netMax: 23500 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Ny trafikleder (vejgods)", grossSalary: 32000, netMin: 21000, netMax: 21500 },
    { type: "3–5 år (disponent med vagt)", grossSalary: 36000, netMin: 23600, netMax: 24100 },
    { type: "Senior / ruteansvarlig", grossSalary: 42000, netMin: 27600, netMax: 28100 },
    { type: "Skift- & rådighedsvagt, Kbh.", grossSalary: 48000, netMin: 31500, netMax: 32000 },
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
        title="Trafikleder Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad tjener en trafikleder efter skat i 2025? Se realistiske estimater for trafikleder løn efter skat, og få overblik over forskelle mellem erfaring, tillæg og geografi. Beregn selv din nettoløn med beregn løn efter skat."
        keywords="trafikleder løn efter skat, trafikleder løn, disponent løn, logistik løn efter skat, transport løn"
      />
      <Header />
      <PageTitle title="Trafikleder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Trafikleder Løn Efter Skat 2025 – Ruteplan til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids trafikleder (37 t/uge) – fx i gods-, bus- eller bane-drift – har i 2025 en løn før skat på cirka 32 000 – 48 000 kr. pr. måned. Det giver en trafikleder løn efter skat på omtrent 21 000 – 32 000 kr. Få dit helt præcise nettobeløb via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer trafikleder løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Lønfaktor</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Hvorfor det påvirker lønnen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Overenskomst & løntrin</td>
                    <td className="px-4 py-3">3F Transport / Dansk Industri sætter grundlønnen til 190 – 205 kr./t (≈ 31 000 – 34 000 kr./md.).</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Branche</td>
                    <td className="px-4 py-3">Jernbane- og lufthavns-trafikledelse betaler 8–12 % mere end vejgodstransport.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Ulempe- & rådighedstillæg</td>
                    <td className="px-4 py-3">Aften + 18 %, nat + 30 %, weekend + 45 %. Vagttelefon kan give fast rådighedstillæg på 1 000 – 1 800 kr./md.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Erfaring & certifikater</td>
                    <td className="px-4 py-3">ADR-, CARGO-IMP- eller C-vognmandscertifikat udløser 1 500 – 3 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Geografi</td>
                    <td className="px-4 py-3">Storkøbenhavn og Østjylland ligger ca. 7 % over landsgennemsnittet; yderkommuner ca. 5 % under.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Pension 14 %</td>
                    <td className="px-4 py-3">Arbejdsgiverbidraget indbetales før skat – vises ikke i nettolønnen, men forbedrer totalpakken.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Trafikleder</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Erfaring / Rolle</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Løn før skat</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{item.type}</td>
                      <td className="px-4 py-3">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-3">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %. Justér selv for din kommune i beregneren.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior trafikleder med nat- og weekendtillæg</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Post</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Løn før skat</td>
                    <td className="px-4 py-3">42 000 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">AM-bidrag 8 %</td>
                    <td className="px-4 py-3">3 360 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Skattepligtig indkomst</td>
                    <td className="px-4 py-3">38 640 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Personfradrag</td>
                    <td className="px-4 py-3">4 650 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Beskatningsgrundlag</td>
                    <td className="px-4 py-3">33 990 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">A-skat (≈ 37 %)</td>
                    <td className="px-4 py-3">12 570 kr.</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-3 font-bold">Trafikleder løn efter skat</td>
                    <td className="px-4 py-3 font-bold">≈ 28 100 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Tag vagtordning</h3>
                <p className="text-blue-700">Rådighed og nat gavner bruttolønnen 20–45 %.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Certificér dig</h3>
                <p className="text-green-700">ADR-sikkerhedsrådgiver, IATA-DGR eller TIA-dispatch giver hurtigt 1 500 – 3 000 kr./md. ekstra før skat.</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Skift til infrastruktur-segment</h3>
                <p className="text-purple-700">Bane- og lufthavnsposter betaler markant højere grundløn.</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Forhandl KPI-bonus</h3>
                <p className="text-orange-700">Bind den til rettidighed (OTIF) eller kapacitetsudnyttelse.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Trafikleder Løn Efter Skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Spørgsmål</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Hvor meget tjener en ny trafikleder efter skat?</td>
                    <td className="px-4 py-3">Cirka 21 000 kr./md.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Hvordan når jeg 32 000 kr. efter skat?</td>
                    <td className="px-4 py-3">Storbyrolle + nat/weekend og specialcertifikater.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Er rådighedstillæg skattepligtige?</td>
                    <td className="px-4 py-3">Ja, de beskattes som A-indkomst.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Indgår pension i nettolønnen?</td>
                    <td className="px-4 py-3">Nej, pensionen (≈ 14 %) indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Trafikleder Løn – Før & Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">By</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Løn før skat</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((city, index) => (
                    <tr 
                      key={index} 
                      className={`border-b hover:bg-gray-50 cursor-pointer ${
                        selectedCity === city.city ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedCity(city.city)}
                    >
                      <td className="px-4 py-3 font-medium">{city.city}</td>
                      <td className="px-4 py-3">{city.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-3">{city.netMin.toLocaleString()} – {city.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p className="mb-4">
              I 2025 ligger trafikleder løn efter skat generelt mellem 21 000 og 32 000 kr. pr. måned – baseret på 32 000 – 48 000 kr. før skat. Ulempe­tillæg, branchevalg og certifikater er de hurtigste veje til mere i hånden. Beregn din egen nettoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få styr på, hvor meget der lander på kontoen, når sidste last er distribueret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>3F Transport & DI – Vognmands- og logistikoverenskomst 2024-26</li>
              <li>Dansk Jernbaneforbund – Lønstatistik for trafikledere 2025</li>
              <li>SalaryExpert – Dispatcher/Traffic Controller, Denmark & Copenhagen (2025)</li>
              <li>Indkomsten.dk – Trafikleder gennemsnitsløn, maj 2025</li>
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

export default TrafiklederLoenPage;