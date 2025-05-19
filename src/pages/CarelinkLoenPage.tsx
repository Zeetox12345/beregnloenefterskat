import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const CarelinkLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Hovedstaden");
  
  // City-specific salary data
  const cityData = {
    "Hovedstaden": { grossSalary: 48000, netMin: 31500, netMax: 32200 },
    "Midtjylland": { grossSalary: 45000, netMin: 29500, netMax: 30200 },
    "Syddanmark": { grossSalary: 43000, netMin: 28200, netMax: 28900 },
    "Nordjylland": { grossSalary: 41000, netMin: 27000, netMax: 27700 },
    "Sjælland": { grossSalary: 40000, netMin: 26300, netMax: 27000 },
  };

  // Experience-based salary progression (roles)
  const experienceData = [
    { type: "Sygeplejerske", hourlyRate: "240 - 310", grossSalary: "38.000 - 49.000", netMin: 24000, netMax: 32000 },
    { type: "Social- og sundhedsassistent", hourlyRate: "200 - 260", grossSalary: "32.000 - 41.000", netMin: 20000, netMax: 27000 },
    { type: "Social- og sundhedshjælper", hourlyRate: "180 - 230", grossSalary: "29.000 - 36.000", netMin: 18500, netMax: 23500 },
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
        title="Carelink Løn Efter Skat 2025 – Realistiske Eksempler og Beregning"
        description="Hvad er carelink løn efter skat i 2025? Se timeløn, månedsløn og udbetaling efter skat for SOSU'er og sygeplejersker. Beregn dit nettobeløb hurtigt online."
        keywords="carelink løn, carelink løn efter skat, vikarbureau løn, sygeplejerske timeløn, sosu løn, sosu-assistent løn, sundhedsvikar løn"
      />
      <Header />
      <PageTitle title="Carelink Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Carelink Løn Efter Skat 2025 – Guide til vikarer i sundhedssektoren</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som Carelink-vikar kan du i 2025 typisk forvente mellem 16.000 og 32.000 kr. udbetalt afhængigt af din faggruppe og arbejdstid. Get en præcis beregning med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Som Carelink-vikar kan du i 2025 typisk forvente:</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Stillingskategori</th>
                    <th className="py-2 px-4 border-b text-left">Timeløn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Månedsløn før skat*</th>
                    <th className="py-2 px-4 border-b text-left">Carelink løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Sygeplejerske</td>
                    <td className="py-2 px-4 border-b">240 – 310 kr.</td>
                    <td className="py-2 px-4 border-b">38.000 – 49.000 kr.</td>
                    <td className="py-2 px-4 border-b">ca. 24.000 – 32.000 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Social- og sundhedsassistent</td>
                    <td className="py-2 px-4 border-b">200 – 260 kr.</td>
                    <td className="py-2 px-4 border-b">32.000 – 41.000 kr.</td>
                    <td className="py-2 px-4 border-b">ca. 20.000 – 27.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Social- og sundhedshjælper</td>
                    <td className="py-2 px-4 border-b">180 – 230 kr.</td>
                    <td className="py-2 px-4 border-b">29.000 – 36.000 kr.</td>
                    <td className="py-2 px-4 border-b">ca. 18.500 – 23.500 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm">*Beregnet ved 160 arbejdstimer pr. måned. Nettobeløb forudsætter AM-bidrag 8 %, personfradrag 4.650 kr. og gennemsnitlig kommuneskat 24,9 %. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> til at få din helt personlige Carelink løn efter skat – justér antal timer, kommune og fradrag på under ét minut.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker Carelink løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Faktor</th>
                    <th className="py-2 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Timeløn & vagttype</td>
                    <td className="py-2 px-4 border-b">Højest på akutte vagter, helligdage og i Region Hovedstaden.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b font-medium">Speciale</td>
                    <td className="py-2 px-4 border-b">Intensiv, psykiatri og opvågning giver 5-15 % højere timeløn end plejehjem.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Vagtballoon</td>
                    <td className="py-2 px-4 border-b">Stjernetime- og akuttillæg kan lægge 40-80 kr./time oven i grundsatsen.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b font-medium">Arbejdstimer</td>
                    <td className="py-2 px-4 border-b">Som vikar styrer du selv timetallet – flere timer = højere bruttobeløb, men progressiv skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-2 px-4 border-b">Op til 0,8 pct.point forskel ⇒ ± ≈ 650 kr. netto pr. måned.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b font-medium">Kilometergodtgørelse</td>
                    <td className="py-2 px-4 border-b">Skattefri (3,79 kr./km) – påvirker ikke Carelink løn efter skat, men øger din disponible indkomst.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – regionale eksempler 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Region</th>
                    <th className="py-2 px-4 border-b text-left">Timeløn (sygeplejerske)</th>
                    <th className="py-2 px-4 border-b text-left">Måned før skat*</th>
                    <th className="py-2 px-4 border-b text-left">Efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((item, index) => (
                    <tr key={item.city} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-4 border-b font-medium">{item.city}</td>
                      <td className="py-2 px-4 border-b">
                        {item.city === "Hovedstaden" ? "300 kr." : 
                         item.city === "Midtjylland" ? "280 kr." :
                         item.city === "Syddanmark" ? "270 kr." :
                         item.city === "Nordjylland" ? "260 kr." : "250 kr."}
                      </td>
                      <td className="py-2 px-4 border-b">{Math.floor(item.grossSalary / 1000)}.000 kr.</td>
                      <td className="py-2 px-4 border-b">{Math.floor(item.netMin / 1000)}.{Math.floor((item.netMin % 1000) / 100)} – {Math.floor(item.netMax / 1000)}.{Math.floor((item.netMax % 1000) / 100)} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm">*Ved 160 t/mnd.; uden kirkeskat.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – SOSU-assistent, weekend- & nattevagter</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
              <div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Timeløn før skat: 240 kr.</li>
                  <li>Timer pr. måned: 144 (3 uger á 48 t)</li>
                  <li>Løn før skat: 34.560 kr.</li>
                  <li>AM-bidrag 8 %: 2.765 kr.</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Skattepligtig indkomst: 31.795 kr.</li>
                  <li>Personfradrag: 4.650 kr.</li>
                  <li>Beskatningsgrundlag: 27.145 kr.</li>
                  <li>A-skat (~ 37 %): 10.040 kr.</li>
                  <li className="font-bold">Carelink løn efter skat ≈ 21.755 kr.</li>
                </ul>
              </div>
            </div>

            <p className="mt-4">Lav din egen beregning med præcise timesatser og fradrag i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire strategier til at løfte din Carelink nettoløn</h2>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold">1. Tag akutte og stjernetime-vagter</h3>
                <p>+40-80 kr./time før skat.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold">2. Specialisér dig</h3>
                <p>Intensiv, psykiatri eller anæstesi – højere grundsats.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold">3. Planlæg vagter i lav-skat kommuner</h3>
                <p>Fx Hedensted eller Lemvig – kan spare ≈ 650 kr./md. netto.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold">4. Optimer fradrag</h3>
                <p>Kørsel, fagforening og evt. dobbelt husførelse reducerer din skat direkte.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Carelink Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-2 px-4 border-b text-left">Svar kort</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Udbetaler Carelink løn hver 14. dag?</td>
                    <td className="py-2 px-4 border-b">Nej, månedsvis bagud.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Tæller pension?</td>
                    <td className="py-2 px-4 border-b">Ja, 12 % arbejdsgiver​pension indbetales før skat (ses ikke i nettoløn).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Er kørsels​godtgørelse skattefri?</td>
                    <td className="py-2 px-4 border-b">Ja, op til 25.000 km/år.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Påvirker mange timer topskat?</td>
                    <td className="py-2 px-4 border-b">Topskat rammer først ved ca. 63.000 kr. før skat pr. måned.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>I 2025 ligger carelink løn efter skat oftest mellem 16.000 og 32.000 kr. pr. måned – afhængigt af faggruppe, vagttyper og kommuneskat. Akutte vagter, specialiserede afdelinger og strategisk fradrags​udnyttelse er de hurtigste veje til en højere nettoløn. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget der lander på kontoen, når din vagt er slut.</p>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: Maj 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CarelinkLoenPage; 