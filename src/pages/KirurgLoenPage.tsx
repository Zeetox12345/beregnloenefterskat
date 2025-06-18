import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const KirurgLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 90000, netMin: 56000, netMax: 72000 },
    "Aarhus": { grossSalary: 85000, netMin: 53000, netMax: 69000 },
    "Odense": { grossSalary: 81500, netMin: 51000, netMax: 66000 },
    "Aalborg": { grossSalary: 78500, netMin: 49000, netMax: 63000 },
    "Esbjerg": { grossSalary: 77000, netMin: 47500, netMax: 61000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Uddannelseslæge (kirurgisk intro)", grossSalary: 52000, netMin: 32000, netMax: 33000 },
    { type: "Speciallæge, hospital", grossSalary: 75000, netMin: 46000, netMax: 47000 },
    { type: "Overlæge, regionalt hospital", grossSalary: 90000, netMin: 56000, netMax: 57000 },
    { type: "Privat topkirurg, Kbh.", grossSalary: 105000, netMin: 65000, netMax: 66000 }
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
        title="Kirurg Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en kirurg løn efter skat i 2025? Typisk 36 000 – 66 000 kr. udbetalt – før skat 60 000 – 105 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="kirurg løn, kirurg løn efter skat, overlæge løn, speciallæge løn, læge løn"
      />
      <Header />
      <PageTitle title="Kirurg Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Kirurg Løn Efter Skat 2025 – Skalpel, Skiftehold og Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                <strong>TL;DR</strong> – En fuldtids kirurg (37 t/uge) tjener i 2025 typisk 60 000 – 105 000 kr. før skat – fra reservelæge under specialisering til overlæge eller privat topkirurg. Det svarer til en kirurg løn efter skat på omtrent 36 000 – 66 000 kr. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit præcise nettobeløb.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker kirurg løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Lønfaktor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Betydning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Grundløn & overenskomst</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Basisløn for overlæger 76 960 – 100 956 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Erfaring & titel</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Uddannelseslæge → speciallæge → overlæge/topkirurg: +20 000 – 45 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Subspeciale & privat sektor</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Ortopædi, karkirurgi og plastikkirurgi i privathospital kan ligge 15 % + over offentligt niveau</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Vagt- og rådighedstillæg</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Natte- og weekendvagter giver typisk 18 – 45 % oven i timelønnen (regionale satser)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Geografi</td>
                    <td className="px-6 py-4 text-sm text-gray-700">København betaler ca. 7 % over landsgennemsnittet</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Pension 18 %</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Indbetales før skat – ses ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Kirurg</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Stilling / erfaring</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Løn før skat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">≈ Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {experienceData.map((level, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{level.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{level.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{level.netMin.toLocaleString('da-DK')} – {level.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Udregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">By</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Typisk løn før skat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">≈ Løn efter skat**</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Kommuneskat 2025</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">København</td>
                    <td className="px-6 py-4 text-sm text-gray-700">65 000 – 115 000 kr.</td>
                    <td className="px-6 py-4 text-sm text-gray-700">41 000 – 72 000 kr.</td>
                    <td className="px-6 py-4 text-sm text-gray-700">23,5 %</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Aarhus</td>
                    <td className="px-6 py-4 text-sm text-gray-700">60 000 – 110 000 kr.</td>
                    <td className="px-6 py-4 text-sm text-gray-700">38 000 – 69 000 kr.</td>
                    <td className="px-6 py-4 text-sm text-gray-700">24,52 %</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Odense</td>
                    <td className="px-6 py-4 text-sm text-gray-700">58 000 – 105 000 kr.</td>
                    <td className="px-6 py-4 text-sm text-gray-700">36 000 – 66 000 kr.</td>
                    <td className="px-6 py-4 text-sm text-gray-700">25,50 %</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Aalborg</td>
                    <td className="px-6 py-4 text-sm text-gray-700">57 000 – 100 000 kr.</td>
                    <td className="px-6 py-4 text-sm text-gray-700">35 000 – 63 000 kr.</td>
                    <td className="px-6 py-4 text-sm text-gray-700">25,60 %</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Esbjerg</td>
                    <td className="px-6 py-4 text-sm text-gray-700">56 000 – 98 000 kr.</td>
                    <td className="px-6 py-4 text-sm text-gray-700">34 000 – 61 000 kr.</td>
                    <td className="px-6 py-4 text-sm text-gray-700">26,10 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              ** Nettobeløb beregnet efter samme metode som ovenfor; kun kommunesatser varierer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Speciallæge i Aarhus</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium text-gray-900">Løn før skat</td>
                      <td className="py-2 text-right text-gray-700">75 000 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-900">AM-bidrag 8 %</td>
                      <td className="py-2 text-right text-gray-700">6 000 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-900">Skattepligtig indkomst</td>
                      <td className="py-2 text-right text-gray-700">69 000 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-900">Personfradrag</td>
                      <td className="py-2 text-right text-gray-700">4 650 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-900">Beskatningsgrundlag</td>
                      <td className="py-2 text-right text-gray-700">64 350 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-900">A-skat (≈ 37 %)</td>
                      <td className="py-2 text-right text-gray-700">23 810 kr.</td>
                    </tr>
                    <tr className="border-t-2 border-blue-200">
                      <td className="py-2 font-bold text-gray-900">Kirurg løn efter skat</td>
                      <td className="py-2 text-right font-bold text-green-600">≈ 45 190 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">🎯 Subspecialisér dig</h3>
                <p className="text-sm text-green-700">fx ortopædi eller plastikkirurgi; giver ofte +10 % – 15 % i grundløn.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">🌙 Tag høje vagtbelastninger</h3>
                <p className="text-sm text-blue-700">natte- og weekendvagter løfter bruttolønnen markant.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-2">🏥 Skift til privathospital</h3>
                <p className="text-sm text-purple-700">honorar- og operationsbonus kan fordoble indkomsten.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-bold text-orange-800 mb-2">📍 Vælg kommune med lav skat</h3>
                <p className="text-sm text-orange-700">et spring fra 26,1 % til 23,5 % kan give {">"} 1 000 kr./md. ekstra netto.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Kirurg Løn Efter Skat</h2>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hvor meget tjener en ny kirurg efter skat?</h3>
                  <p className="text-gray-700">Ca. 32 000 kr./md.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kan jeg nå 60 000 kr. netto?</h3>
                  <p className="text-gray-700">Ja – som privat overlæge/topkirurg i storby plus vagter.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Er vagt- og rådighedstillæg skattepligtige?</h3>
                  <p className="text-gray-700">Ja, de beskattes som A-indkomst.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Indgår pension i nettolønnen?</h3>
                  <p className="text-gray-700">Nej – 18 % indbetales før skat.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p className="text-gray-700 leading-relaxed">
              I 2025 ligger kirurg løn efter skat typisk mellem 36 000 og 66 000 kr. pr. måned, svarende til 60 000 – 105 000 kr. før skat. Titel, subspeciale, vagter og geografi er de hurtigste knapper at dreje på for at hæve nettobeløbet. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget der faktisk lander på kontoen efter næste operationsprogram.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <div className="text-sm text-gray-600 space-y-2">
              <p>Læger.dk – Overlægers gennemsnitsløn 2025</p>
              <p>Studentum.dk – Speciallæge (kirurg) gennemsnitsløn 96 858 kr./md.</p>
              <p>SalaryExpert – General & Top Surgeon løn, DK & København</p>
              <p>SalaryExpert – Ortopædkirurg Danmark & København</p>
              <p>Yngre Læger / Danske Regioner – Løntabel 1. apr 2025</p>
              <p>CEPOS – Kommuneskat 2025 (23,4 – 26,3 %)</p>
            </div>

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

export default KirurgLoenPage; 