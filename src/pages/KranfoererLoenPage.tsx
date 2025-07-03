import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const KranfoererLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 46500, netMin: 29500, netMax: 36000 },
    "Aarhus": { grossSalary: 44500, netMin: 28000, netMax: 34000 },
    "Odense": { grossSalary: 43000, netMin: 27000, netMax: 33000 },
    "Aalborg": { grossSalary: 41500, netMin: 26500, netMax: 32000 },
    "Esbjerg": { grossSalary: 41000, netMin: 25500, netMax: 31000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Ny kranfører (A-certifikat)", grossSalary: 34000, netMin: 22000, netMax: 22500 },
    { type: "3–5 år, mobilkran C", grossSalary: 39000, netMin: 25000, netMax: 25500 },
    { type: "Offshore / tårnkran, nat", grossSalary: 46000, netMin: 29500, netMax: 30000 },
    { type: "Senior mobilkran, Kbh.", grossSalary: 55000, netMin: 34000, netMax: 35000 }
  ];

  const cityExamples = useMemo(() => {
    return Object.entries(cityData).map(([city, data]) => {
      const taxRate = city === "København" ? "23,5 %" : 
                     city === "Aarhus" ? "24,52 %" :
                     city === "Odense" ? "25,50 %" :
                     city === "Aalborg" ? "25,60 %" : "26,10 %";
      
      return {
        city,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax,
        taxRate
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Kranfører Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en kranfører løn efter skat i 2025? Typisk 22 000 – 35 000 kr. udbetalt – før skat 34 000 – 55 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="kranfører løn, kranfører løn efter skat, kranoperatør løn, mobilkranfører løn, tårnkranfører løn"
      />
      <Header />
      <PageTitle title="Kranfører Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Kranfører Løn Efter Skat 2025 – Fra Tonnage til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids kranfører (37 t/uge) tjener i 2025 typisk 34 000 – 55 000 kr. før skat, afhængigt af kran-type, branche og vagttillæg. Det giver en kranfører løn efter skat på cirka 22 000 – 35 000 kr. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit præcise nettobeløb.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Kranførerarbejdet kræver teknisk kunnen og ansvarlighed – og det afspejles i lønnen. Men hvad bliver der tilbage på kontoen efter skat og afgifter? Vi har analyseret de nyeste tal fra 3F, indkomsten.dk og SalaryExpert for at give dig det komplette overblik over kranfører løn efter skat i 2025.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker kranfører løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Lønfaktor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Betydning
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Timeløn – normalløn
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      153,70 kr./t fra 1. marts 2025 ifølge 3F-overenskomsten
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Kran-type & certifikater
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Mobil- eller tårnkran C/E-certifikat løfter lønnen 2 000 – 4 000 kr./md.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Natte- & weekendtillæg
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      +95,60 kr./t kl. 21-04; +49,45 kr./t kl. 04-06
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Branche
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Offshore, vind & stål betaler 5 – 10 % over byggepladser
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Geografi
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Løn i København ligger ca. 7 % over landsgennemsnittet
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      Pension 12 – 14 %
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Indbetales før skat – tæller ikke i nettolønnen
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Kranfører</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider border-b">
                      Profil / erfaring
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider border-b">
                      Løn før skat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider border-b">
                      ≈ Løn efter skat*
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {experienceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {item.grossSalary.toLocaleString()} kr.
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">
                        {item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og en trækprocent på 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-900 uppercase tracking-wider border-b">
                      By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-900 uppercase tracking-wider border-b">
                      Typisk løn før skat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-900 uppercase tracking-wider border-b">
                      ≈ Løn efter skat**
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-900 uppercase tracking-wider border-b">
                      Kommuneskat 2025
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cityExamples.map((city, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} ${selectedCity === city.city ? "ring-2 ring-blue-500" : ""} cursor-pointer hover:bg-blue-50 transition-colors`}
                      onClick={() => setSelectedCity(city.city)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        {city.city}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {Math.round(city.grossSalary * 0.75).toLocaleString()} – {Math.round(city.grossSalary * 1.25).toLocaleString()} kr.
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">
                        {city.netMin.toLocaleString()} – {city.netMax.toLocaleString()} kr.
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {city.taxRate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">
              ** Nettobeløb efter samme metode; kommune­satsen varierer. Kommunesatser 2025 spænder 23,4 – 26,3 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Mobilkranfører med natte­tillæg (Aarhus)</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-blue-200">
                    <td className="py-2 font-medium text-blue-900">Post</td>
                    <td className="py-2 text-right font-medium text-blue-900">Beløb</td>
                  </tr>
                  <tr>
                    <td className="py-2">Løn før skat</td>
                    <td className="py-2 text-right">39 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2">AM-bidrag 8 %</td>
                    <td className="py-2 text-right text-red-600">-3 120 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2">Skattepligtig indkomst</td>
                    <td className="py-2 text-right">35 880 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2">Personfradrag</td>
                    <td className="py-2 text-right text-green-600">-4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2">Beskatningsgrundlag</td>
                    <td className="py-2 text-right">31 230 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2">A-skat (≈ 37 %)</td>
                    <td className="py-2 text-right text-red-600">-11 540 kr.</td>
                  </tr>
                  <tr className="border-t-2 border-blue-300 font-bold">
                    <td className="py-2 text-blue-900">Kranfører løn efter skat</td>
                    <td className="py-2 text-right text-green-600 text-lg">≈ 24 800 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">🎯 Opgradér certifikatet</h3>
                <p className="text-green-700">Fra A/B til C/E giver hurtig fastlønsstigning.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🌙 Tag nat- og weekendvagter</h3>
                <p className="text-blue-700">Tillæg op til 95 kr./t kan løfte månedslønnen markant.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">⚡ Skift til offshore eller vind</h3>
                <p className="text-purple-700">Projekter betaler 5 – 10 % mere i grundløn.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">🏠 Bosæt dig i lav-skat-kommune</h3>
                <p className="text-orange-700">Forskellen 26,1 % → 23,5 % sparer ~700 kr./md. netto.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Kranfører Løn Efter Skat</h2>

            <div className="space-y-4 my-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Hvad tjener en ny kranfører efter skat?</h3>
                <p className="text-gray-700">Cirka 22 000 kr./md.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Kan jeg nå 35 000 kr. netto?</h3>
                <p className="text-gray-700">Ja – som senior mobilkran­fører i storby med nat- og offshore­tillæg.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Beskattes tillæg og bonus som løn?</h3>
                <p className="text-gray-700">Ja, alle tillæg beskattes som A-indkomst.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Indgår pension i nettolønnen?</h3>
                <p className="text-gray-700">Nej – 12 – 14 % indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              I 2025 ligger kranfører løn efter skat typisk mellem 22 000 og 35 000 kr. pr. måned, svarende til 34 000 – 55 000 kr. før skat. Certifikater, arbejdstid og kommune­sats er de hurtigste håndtag til et højere nettobeløb. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der faktisk lander på kontoen, når krogen er sat på sidste løft.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>3F & DI – Transport- og logistikoverenskomst 2025 (normalløn, tillæg)</li>
              <li>Studentum.dk – Gennemsnitsløn kran- & truckfører 48 921 kr./md.</li>
              <li>SalaryExpert – Crane Operator København 530 606 kr./år (+7 %)</li>
              <li>SalaryExpert – Mobile Crane Operator Danmark 526 744 kr./år</li>
              <li>Indkomsten.dk – Kranfører gennemsnitsløn 33 500 kr./md.</li>
              <li>CEPOS – Kommuneskat 2025 spænder 23,4 – 26,3 %</li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: juli 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KranfoererLoenPage; 