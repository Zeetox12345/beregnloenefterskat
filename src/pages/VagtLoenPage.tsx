import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const VagtLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 32000, netMin: 21300, netMax: 21800 },
    "Aarhus": { grossSalary: 30000, netMin: 20000, netMax: 20500 },
    "Odense": { grossSalary: 29000, netMin: 19400, netMax: 19900 },
    "Aalborg": { grossSalary: 28000, netMin: 18700, netMax: 19200 },
    "Esbjerg": { grossSalary: 27000, netMin: 18100, netMax: 18600 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet stationær vagt", grossSalary: 26000, netMin: 17100, netMax: 17600 },
    { type: "Mobilpatrulje / 3 – 5 år", grossSalary: 30000, netMin: 19600, netMax: 20100 },
    { type: "Industrivagt + nattillæg", grossSalary: 34000, netMin: 22300, netMax: 22800 },
    { type: "Teamleder / koordinator", grossSalary: 38000, netMin: 24900, netMax: 25400 }
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
        title="Vagt Løn Efter Skat 2025 – Se Din Nettoløn Her"
        description="Hvad tjener en vagt efter skat i 2025? Se realistiske lønintervaller før og efter skat – inkl. tillæg for nat og weekend. Beregn din nettoløn med ét klik."
        keywords="vagt løn efter skat, sikkerhedsvagt nettoløn, vagt overenskomst, vagt tillæg, nattillæg vagt, weekend vagt"
      />
      <Header />
      <PageTitle title="Vagt Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Vagt Løn Efter Skat 2025 – Sikker Indkomst, Sikkert Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids vagt/sikkerhedsvagt (37 t/uge) kan i 2025 forvente en løn før skat på cirka 26 000 – 38 000 kr. pr. måned, alt efter branche (butik, industri, event), erfaring og tillæg for skæve timer. Det svarer til en vagt løn efter skat på omtrent 17 000 – 25 000 kr. Få dit personlige nettotal lynhurtigt med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6 faktorer der bestemmer en vagt løn efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det påvirker din udbetaling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Overenskomsttimeløn</td>
                    <td className="py-3 px-4 border-b">Vagt & Sikkerhedsoverenskomsten (3F/SBV) giver 171,05 kr./t fra 1. marts 2025 ≈ 27 500 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Tillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, nat +30 %, weekend +45 % – populære hos industrianlæg og alarmpatruljer.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Arbejdsområde</td>
                    <td className="py-3 px-4 border-b">Offshore- eller nuklear-site betaler 5 – 10 % over detail- og butiks­vagter.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certifikater</td>
                    <td className="py-3 px-4 border-b">Vagt AKT-bevis, ADR-sikkerhed, hundefører eller CCTV-certifikat kan give 1 000 – 2 000 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & rolle</td>
                    <td className="py-3 px-4 border-b">Stationær vagt → Mobilpatrulje → Sikkerhedskoordinator → Teamleder; hvert trin løfter lønnen 2 – 4 k.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension & fritvalg</td>
                    <td className="py-3 px-4 border-b">10 % pension + 9 % fritvalg i 2025 – indbetales før skat, men øger den samlede pakke.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – eksempler fra danske byer 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
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
              * Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat og AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Vagt Løn Før & Efter Skat 2025*</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat**</th>
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
            <p className="text-sm text-gray-600 italic">
              * Beregnet ved 160,33 t/måned; nattillæg indregnet i tredje kolonne.<br/>
              ** Nettotal med 8 % AM-bidrag, 4 650 kr. personfradrag og gennemsnitlig 37 % trækprocent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Industrivagt på nat (34 000 kr. før skat)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 34 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 720 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 31 280 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 26 630 kr.</li>
                <li><strong>A-skat ≈ 37 %:</strong> 9 850 kr.</li>
                <li><strong>Vagt løn efter skat ≈</strong> 22 000 kr.</li>
              </ul>
            </div>
            
            <p>
              Vil du teste weekendtillæg eller lavere kommuneskat? Tast dine tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige måder at skrue nettolønnen op</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Vælg nat- eller weekend­vagter</strong> – 18 – 45 % genetillæg ryger direkte i bruttolønnen.</li>
              <li><strong>Tag hundefører- eller CCTV-certifikat</strong> – udløser funktions­tillæg på 1 – 2 k før skat.</li>
              <li><strong>Søg industri- eller offshore-sites</strong> – højere risikotillæg og kost-/logiordning.</li>
              <li><strong>Ryk op som teamleder</strong> – ledelses­tillæg på 3 – 4 k før skat og bedre bonus.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Vagt Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny vagt efter skat?</p>
                <p>Ca. 17 500 kr. om måneden.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 25 000 kr. efter skat?</p>
                <p>Ja, som teamleder eller fast nattevagt med tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej, 10 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Rammer genetillæg topskat?</p>
                <p>Kun hvis samlet løn før skat rammer ca. 63 300 kr./md. – sjældent i vagtbranchen.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 svinger Vagt løn efter skat fra 17 000 til 25 000 kr. pr. måned – svarende til 26 000 – 38 000 kr. før skat. Skæve timer, special­certifikater og stillingsniveau er dine bedste værktøjer til et højere nettobeløb. Få dit eget tal på under ét minut i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>3F & SikkerhedsBranchen – Vagt- & Sikkerhedsoverenskomst, satser 2025 (171,05 kr./t)</li>
              <li>SalaryExpert – Security Guard, Copenhagen: 278 k kr./år (≈ 23 k kr./md.)</li>
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

export default VagtLoenPage; 