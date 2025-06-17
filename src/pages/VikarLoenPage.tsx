import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const VikarLoenPage = () => {
  const [selectedProfile, setSelectedProfile] = useState("Kontorvikar (HK)");
  
  // Profile-specific salary data
  const profileData = {
    "Kontorvikar (HK)": { grossSalary: 23000, netMin: 16000, netMax: 16500 },
    "Lager-/logistikvikar (3F)": { grossSalary: 27000, netMin: 18500, netMax: 19000 },
    "Plejevikar (FOA aften/nat)": { grossSalary: 31000, netMin: 21000, netMax: 21500 },
    "Industrivikar m. nat/weekend": { grossSalary: 38000, netMin: 24500, netMax: 25000 },
  };

  // Factors affecting salary
  const salaryFactors = [
    { 
      factor: "Grundtimeløn", 
      impact: "Overenskomst­mindste­løn i HK, FOA eller 3F ligger i 2025 på 145 – 165 kr./t (≈ 23 000 – 26 000 kr./md.)."
    },
    { 
      factor: "Branche", 
      impact: "Lager & produktion topper som regel mindstelønnen med 5 – 8 %, mens kontor­vikarer ofte ligger på tarif."
    },
    { 
      factor: "Ulempe­tillæg", 
      impact: "Aften + 18 %, nat + 30 %, weekend + 45 % – direkte plus på bruttolønnen."
    },
    { 
      factor: "Vikarbureauets kontrakt", 
      impact: "Nogle bureauer giver ferietillæg (12,5 %) ugentligt frem for feriepenge."
    },
    { 
      factor: "Erfaring & certifikater", 
      impact: "Truckkort, sygepleje­autorisation eller stærke IT-kompetencer kan give 5 – 10 kr./t ekstra."
    },
    { 
      factor: "Pension 8 – 10 %", 
      impact: "Betales før skat – ses ikke i løn efter skat, men tæller i din samlede pakke."
    },
  ];

  const profileExamples = useMemo(() => {
    return Object.entries(profileData).map(([profile, data]) => {
      return {
        profile,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Vikar Løn Efter Skat 2025 – Se Hvad Du Reelt Får Udbetalt"
        description="En vikar tjener typisk 23.000–38.000 kr. før skat i 2025. Se hvad det giver i nettoløn med eller uden tillæg. Brug beregn løn efter skat og få præcise tal for din udbetaling."
        keywords="vikar løn, vikar løn efter skat, vikarjob løn, vikarbureau løn, temp worker salary denmark"
      />
      <Header />
      <PageTitle title="Vikar Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Vikar Løn Efter Skat 2025 – Fleksible Timer, Faste Tal</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids vikar (typisk 160 timer pr. måned) kan i 2025 forvente en løn før skat på 23 000 – 38 000 kr. afhængigt af branche (lager, kontor, pleje), overenskomst og vagttillæg. Det giver en vikar løn efter skat på cirka 16 000 – 25 000 kr. Få dit helt præcise nettobeløb via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – tag også højde for weekend‐ eller aftentillæg direkte i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad afgør vikar løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Lønfaktor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Betydning for din udbetaling
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {salaryFactors.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                        {item.factor}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b">
                        {item.impact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk vikar løn 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Vikarprofil
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Løn før skat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Løn efter skat*
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {profileExamples.map((profile, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} ${
                        profile.profile === selectedProfile ? "ring-2 ring-blue-500" : ""
                      } cursor-pointer hover:bg-blue-50`}
                      onClick={() => setSelectedProfile(profile.profile)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                        {profile.profile}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b">
                        {profile.grossSalary.toLocaleString('da-DK')} kr.
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b">
                        {profile.netMin.toLocaleString('da-DK')} – {profile.netMax.toLocaleString('da-DK')} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">
              * Beregnet med AM-bidrag 8 %, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %. Justér i beregneren, hvis din kommune­sats er lavere/højere.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Lagervikar aftenhold</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Post
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Beløb
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                      Løn før skat
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b">
                      27 000 kr.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                      AM-bidrag 8 %
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b">
                      2 160 kr.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                      Skattepligtig indkomst
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b">
                      24 840 kr.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                      Personfradrag
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b">
                      4 650 kr.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                      Beskatningsgrundlag
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b">
                      20 190 kr.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                      A-skat (≈ 37 %)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b">
                      7 470 kr.
                    </td>
                  </tr>
                  <tr className="bg-white border-t-2 border-gray-300">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      Vikar løn efter skat
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                      ≈ 18 100 kr.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn som vikar</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">1. Tag vagter med genetillæg</h3>
                <p className="text-sm">Aften, nat og weekend kan løfte brutto­lønnen 15 – 45 %.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">2. Skaf certifikat(-er)</h3>
                <p className="text-sm">Truckkort, pleje­autorisation eller SAP-kursus giver straks højere timeløn.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">3. Negociér bureau­bonus</h3>
                <p className="text-sm">Enkelte bureauer tilbyder månedlig performance-bonus.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">4. Vælg lav-skat-kommune</h3>
                <p className="text-sm">Flytning kan øge nettolønnen 400 – 600 kr./md. uden flere timer.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Vikar Løn Efter Skat</h2>

            <div className="space-y-4 my-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Hvor meget tjener en ufaglært vikar efter skat?</h3>
                <p className="text-sm">Typisk 16 000 – 18 000 kr./md.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Kan jeg nå 25 000 kr. efter skat som vikar?</h3>
                <p className="text-sm">Ja, med nat- eller weekend-tillæg i højtlønsbranche som industri eller lager.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Udbetales feriepenge hver uge?</h3>
                <p className="text-sm">Nogle bureauer udbetaler 12,5 % ferietillæg løbende – ellers optjener du feriepenge.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Indgår pension i nettoløn?</h3>
                <p className="text-sm">Nej – pensionen indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>I 2025 ligger vikar løn efter skat oftest mellem 16 000 og 25 000 kr. pr. måned – svarende til 23 000 – 38 000 kr. før skat. Genetillæg, branche og relevante certifikater er de hurtigste genveje til en højere udbetaling. Tjek dit eget tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der faktisk tikker ind, når timesedlen er godkendt.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>HK Handel & DI – Overenskomst 2024-26 (kontor- og butiksvikarer)</li>
              <li>3F Industri – Vikaroverenskomst 2025 (lager & produktion)</li>
              <li>FOA – Vikar-timeløn og genetillæg i ældre­plejen 2025</li>
              <li>Jobindex Lønstatistik – Vikarjob, maj 2025</li>
              <li>Adecco Danmark – Timesatsguide 2025</li>
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

export default VikarLoenPage; 