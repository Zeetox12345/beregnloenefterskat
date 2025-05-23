import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ParamedicinerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 42000, netMin: 27000, netMax: 27600 },
    "Aarhus": { grossSalary: 40000, netMin: 25400, netMax: 25900 },
    "Odense": { grossSalary: 38000, netMin: 24200, netMax: 24700 },
    "Aalborg": { grossSalary: 37000, netMin: 23500, netMax: 24000 },
    "Esbjerg": { grossSalary: 36000, netMin: 22900, netMax: 23400 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Elev, 3. udd.år", grossSalary: 24000, netMin: 17100, netMax: 17500 },
    { type: "Ambulancebehandler (0-2 år)", grossSalary: 33000, netMin: 21500, netMax: 22000 },
    { type: "Paramediciner 3-5 år", grossSalary: 36000, netMin: 23300, netMax: 23800 },
    { type: "Paramediciner 6-8 år (PHTLS / supervisor)", grossSalary: 40000, netMin: 25600, netMax: 26100 },
    { type: "Senior Paramediciner 9-11 år", grossSalary: 43000, netMin: 27400, netMax: 27900 },
    { type: "Operations- / uddannelsesansvarlig 12+ år", grossSalary: 46000, netMin: 29200, netMax: 29700 },
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
        title="Paramediciner Løn Efter Skat 2025 – Se Realistiske Tal"
        description="Hvad er paramediciner løn efter skat i 2025? Få by- og erfaringstabeller, beregningseksempel og link til beregner for dit personlige nettoløn-estimat."
        keywords="paramediciner løn efter skat, paramediciner løn 2025, paramediciner nettoløn, ambulanceredder løn, redder løn, akutberedskab løn"
      />
      <Header />
      <PageTitle title="Paramediciner Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Paramediciner Løn Efter Skat 2025 – Akut Overblik</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids paramediciner (37 t/uge plus rådigheds- og beredskabsvagter) kan i 2025 forvente en løn før skat på ca. 33 000 – 46 000 kr. pr. måned. Efter AM-bidrag og normal A-skat giver det en paramediciner løn efter skat på omtrent 21 000 – 29 500 kr. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at regne dit præcise tal på under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en paramediciner løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Løn før skat</td>
                    <td className="py-3 px-4 border-b">Sættes af FOA/3F-overenskomster og lokale Falck/regionstillæg.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">Hovedstaden og Region Sjælland ligger 5-8 % højere før skat, men har også lidt højere kommuneskat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Vagttillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, nat +30 %, weekend +45 %.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kvalifikationstillæg</td>
                    <td className="py-3 px-4 border-b">Specialkompetencer (PHTLS, avanceret luftvej, mellemleder) 1 500 – 3 500 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus for ekstra beredskab</td>
                    <td className="py-3 px-4 border-b">Rådighedsvagter og overarbejde kan løfte månedsnettogrundlaget markant.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension (11 % arbejdsgiver + 2 % egen)</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og forbedrer pakken, men ses ikke i nettoløn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">± 0,8 pct.point → op til ± 650 kr./md. i løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Paramediciner Løn Efter Skat 2025</h2>

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
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Beregnet ved gennemsnitlig kommuneskat 24,9 % og AM-bidrag 8 %, uden kirkeskat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karriere- & Erfaringstrin – Paramediciner Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Anciennitet / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((data) => (
                    <tr 
                      key={data.type} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{data.type}</td>
                      <td className="py-3 px-4 border-b">{data.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {data.netMin.toLocaleString("da-DK")} – {data.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, Paramediciner med nat- og weekendvagter</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 40 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 200 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 36 800 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 32 150 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 11 900 kr.</li>
                <li><strong>Paramediciner løn efter skat ≈</strong> 25 000 kr.</li>
              </ul>
            </div>

            <p className="mt-4">
               Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 hurtige veje til højere nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag nat- og weekendvagter</strong> – +1 000 – 3 500 kr./md. netto.</li>
              <li><strong>Bliv PHTLS- eller ITLS-instruktør</strong> – funktions­tillæg op til 3 000 kr./md. før skat.</li>
              <li><strong>Søg uddannelses- eller Team Leader-funktion</strong> – +2 000 – 3 500 kr./md. før skat.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – kan løfte nettolønnen 300 – 650 kr./md.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Paramediciner Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny paramediciner efter skat?</p>
                <p>Omkring 22 000 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når man 30 000 kr. efter skat?</p>
                <p>Typisk som operations- eller uddannelsesansvarlig med mange nat- og weekendvagter.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i løn efter skat?</p>
                <p>Nej – 13 % pension indbetales før skat og vises ikke som nettoløn.</p>
              </div>
              <div>
                <p className="font-semibold">Rammer topskatten?</p>
                <p>Først over ~ 63 000 kr. før skat – sjældent i operative paramediciner-stillinger.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger paramediciner løn efter skat normalt mellem 21 000 og 29 500 kr. Løn før skat spænder fra cirka 33 000 til 46 000 kr. Vagttillæg, kvalifikations­certifikater og bopæl i lav-skat kommune er de hurtigste håndtag, hvis du vil øge udbetalingen. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der reelt lander på kontoen, når sirenen slukkes og patienten er afleveret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.foa.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FOA – Ambulancebehandler- og paramediciner overenskomst 2024-26 (lønsatser pr. 1. 4. 2025)</a></li>
              <li><a href="https://www.lontjek.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LønTjek.dk "Redningsarbejde (Ambulancebehandler)" – bruttoløn-spænd 30 880 – 42 777 kr.</a></li>
              <li><a href="https://www.3f.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F Transport: OK25-aftale om lønstigning til reddere (marts 2025)</a></li>
            </ul>
            
            <p className="text-sm text-gray-500 mt-8">
              Opdateret: maj 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ParamedicinerLoenPage; 