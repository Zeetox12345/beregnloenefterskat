import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ReceptionistLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 30000, netMin: 20000, netMax: 20500 },
    "Aarhus": { grossSalary: 28000, netMin: 18800, netMax: 19300 },
    "Odense": { grossSalary: 27000, netMin: 18100, netMax: 18600 },
    "Aalborg": { grossSalary: 26000, netMin: 17400, netMax: 17900 },
    "Esbjerg": { grossSalary: 25000, netMin: 16800, netMax: 17300 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyansat (0-1 år)", grossSalary: 24000, netMin: 16000, netMax: 16500 },
    { type: "2-3 år", grossSalary: 26000, netMin: 17400, netMax: 17900 },
    { type: "4-6 år (faglært)", grossSalary: 28000, netMin: 18800, netMax: 19300 },
    { type: "7-9 år + ansvar", grossSalary: 30000, netMin: 20000, netMax: 20500 },
    { type: "Front Office Supervisor", grossSalary: 32000, netMin: 21000, netMax: 21500 }
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
        title="Receptionist Løn Efter Skat 2025 – Se Realistiske Eksempler"
        description="Hvad er receptionist løn efter skat i 2025? Se løn før og efter skat, tillæg og byforskelle – og beregn din nettoløn hurtigt online."
        keywords="receptionist løn efter skat, receptionist nettoløn, hotel receptionist løn, kontor receptionist løn, frontdesk løn"
      />
      <Header />
      <PageTitle title="Receptionist Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Receptionist Løn Efter Skat 2025 – Nettobeløb, Overenskomst og Karriere­muligheder</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids receptionist (37 t/uge) kan i 2025 som hovedregel forvente en løn før skat på 24 000 – 32 000 kr. pr. måned – fra nyansat i hotelbranchen til erfaren receptionist i kontorhus eller advokatfirma. Det giver en receptionist løn efter skat på ca. 16 000 – 21 000 kr. afhængigt af kommune, branche, vagttillæg og personlige tillæg. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut, og du kan ændre kommunesats og tillæg, til det passer præcist til din situation.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer receptionist løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Grundløn & minimalløn</td>
                    <td className="py-3 px-4 border-b">Overenskomsten HK Privat / Dansk Erhverv hæver minimallønnen til 24 600 kr./md. pr. 1. maj 2025.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Branche</td>
                    <td className="py-3 px-4 border-b">Kontor-/corporate receptioner betaler 8 – 12 % højere end hotel- og turistbranchen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & uddannelse</td>
                    <td className="py-3 px-4 border-b">Faglærte kontorrecep­tionister ligger typisk 1 500 – 2 500 kr./md. over ufaglærte.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Ulempe- og weekendtillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, nat +30 %, weekend +45 % kan hæve nettolønnen 800 – 1 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Sprog- og ansvars­tillæg</td>
                    <td className="py-3 px-4 border-b">Ekstra sprog, bookingansvar eller kasseansvar giver ofte 800 – 1 200 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12,5 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiver­bidrag trækkes før skat og forbedrer totalpakken, men ses ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel – ± ≈ 600 kr./md. i receptionist løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn Efter Skat – Byoversigt 2025</h2>
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
              * Beregnet uden kirkeskat; forudsætter gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Receptionist Løn Før og Efter Skat</h2>
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
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, faglært receptionist med aftenvagter</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 28 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 240 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 25 760 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 21 110 kr.</li>
                <li><strong>A-skat (~ 35 %):</strong> 7 390 kr.</li>
                <li><strong>Receptionist løn efter skat ≈</strong> 18 370 kr.</li>
              </ul>
            </div>
            <p>Prøv selv med weekendtillæg eller lavere kommuneskat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget din nettoløn ændrer sig.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Dæk aften- og weekendvagter</strong> – ulempe­tillæg kan løfte nettolønnen op til 1 500 kr./md.</li>
              <li><strong>Tag kasse-, bookingsystem- eller sprog­ansvar</strong> – giver ofte 800 – 1 200 kr./md. før skat.</li>
              <li><strong>Færdiggør kontoruddannelsen</strong> – faglærte satser er 8 – 12 % højere.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – kan hæve receptionist løn efter skat med op til 600 kr./md.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Receptionist Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny receptionist efter skat?</p>
                <p>Omkring 16 300 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 20 000 kr. efter skat?</p>
                <p>5-7 års erfaring, faglært status og aften-/weekend­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension med i løn efter skat?</p>
                <p>Nej – arbejdsgiverpensionen indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Udløser tillæg topskat?</p>
                <p>Først når samlet løn før skat overstiger ca. 63 000 kr./md., hvilket er sjældent i receptionist­stillinger.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger receptionist løn efter skat typisk mellem 16 000 og 21 000 kr. Grundløn, vagttillæg og kommuneskat er de vigtigste løftestænger. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget din gæsteservice omsættes til på bank­kontoen hver måned.
            </p>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: maj 2025 – baseret på HK Privat & Dansk Erhverv minimalløn 2024-26, Jobindex lønstatistik og Skatteministeriets kommunesatser 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReceptionistLoenPage; 