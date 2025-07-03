import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const IndustrioperatoerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 43500, netMin: 28000, netMax: 35000 },
    "Aarhus": { grossSalary: 40500, netMin: 25500, netMax: 32000 },
    "Odense": { grossSalary: 39000, netMin: 25000, netMax: 31000 },
    "Aalborg": { grossSalary: 37500, netMin: 24250, netMax: 29500 },
    "Esbjerg": { grossSalary: 37000, netMin: 23500, netMax: 29000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (daghold)", grossSalary: 30000, netMin: 19000, netMax: 19500 },
    { type: "3-5 år + aftenhold", grossSalary: 35000, netMin: 22000, netMax: 22500 },
    { type: "Nat- eller weekendskift", grossSalary: 42000, netMin: 26000, netMax: 27000 },
    { type: "Senior procesoperatør, Kbh.", grossSalary: 52000, netMin: 32000, netMax: 33000 }
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
        title="Industrioperatør Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en industrioperatør løn efter skat i 2025? Typisk 19 000 – 33 000 kr. udbetalt – før skat 30 000 – 52 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="industrioperatør løn, industrioperatør løn efter skat, procesoperatør løn, skifteholdstillæg, industri løn 2025"
      />
      <Header />
      <PageTitle title="Industrioperatør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Industrioperatør Løn Efter Skat 2025 – Maskinkraft omsat til Nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids industrioperatør (37 t/uge) tjener i 2025 typisk 30 000 – 52 000 kr. før skat – fra nyuddannet procesmedarbejder til erfaren skifteholdsoperatør i pharma eller vind. Det giver en industrioperatør løn efter skat på cirka 19 000 – 33 000 kr. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se det præcise nettobeløb.
              </p>
            </div>

            <p className="mb-6">
              Industrioperatører er rygraden i dansk produktion – fra medicinalfabrikker til vindmølleindustri. Men hvad lander der rent faktisk på kontoen efter skat og fradrag? I denne guide får du det fulde overblik over industrioperatør løn efter skat i 2025, herunder hvordan skifteholdstillæg, certificeringer og geografi påvirker dit månedlige nettobeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker industrioperatør løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Lønfaktor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Betydning for nettobeløbet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Timeløn (normalløn)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">153,70 kr./t fra 1. marts 2025 ifølge Industriens Overenskomst</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Skiftehold & tillæg</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Aften +22 %, nat +30 %, weekend +45 % – lægges direkte oven i bruttolønnen</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Certifikater & proceserfaring</td>
                    <td className="px-6 py-4 text-sm text-gray-500">GMP-kursus, LEAN-black-belt eller truckkort: +1 500 – 3 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Branche</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Pharma, fødevarer og vind betaler 5 – 10 % over metal/standardproduktion</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Geografi</td>
                    <td className="px-6 py-4 text-sm text-gray-500">København aflønner ≈ 7 % højere end landsgennemsnittet</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pension 12 – 14 %</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Arbejdsgiverbidrag indbetales før skat – vises ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Industrioperatør</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Profil / erfaring</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Løn før skat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">≈ Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {experienceData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %.
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
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">København</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32 000 – 55 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21 000 – 35 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23,5 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aarhus</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31 000 – 50 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20 000 – 32 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24,52 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Odense</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30 000 – 48 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">19 000 – 31 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25,50 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aalborg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">29 000 – 46 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">19 000 – 29 500 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25,60 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Esbjerg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">29 000 – 45 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18 000 – 29 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">26,10 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              ** Nettobeløbene er beregnet som ovenfor; kun kommunesatsen varierer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Industrioperatør på nathold (Aarhus)</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Løn før skat</td>
                    <td className="py-2 text-right">42 000 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">AM-bidrag 8 %</td>
                    <td className="py-2 text-right">3 360 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Skattepligtig indkomst</td>
                    <td className="py-2 text-right">38 640 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Personfradrag</td>
                    <td className="py-2 text-right">4 650 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Beskatningsgrundlag</td>
                    <td className="py-2 text-right">33 990 kr.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">A-skat (≈ 37 %)</td>
                    <td className="py-2 text-right">12 570 kr.</td>
                  </tr>
                  <tr className="bg-blue-100">
                    <td className="py-2 font-bold">Industrioperatør løn efter skat</td>
                    <td className="py-2 text-right font-bold">≈ 26 100 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🌙 Tag fast nat- eller weekendskift</h3>
                <p className="text-sm">Tillæg kan løfte bruttolønnen 20 – 45 %.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">📜 Opgradér til GMP eller LEAN Black Belt</h3>
                <p className="text-sm">Giver ofte funktionstillæg på 1 500 – 3 000 kr./md.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🏭 Søg job i højmargins-brancher</h3>
                <p className="text-sm">Pharma og fødevarer betaler typisk 5 – 10 % mere.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">📍 Flyt til lav-skat-kommune</h3>
                <p className="text-sm">Forskellen fra 26,1 % til 23,5 % sparer ~700 kr. netto pr. måned.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Industrioperatør Løn Efter Skat</h2>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Hvad tjener en ny industrioperatør efter skat?</h3>
                <p className="text-gray-600">Omkring 19 000 kr./md.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Kan jeg nå 30 000 kr. netto?</h3>
                <p className="text-gray-600">Ja – med nat/weekend og seniortillæg i storby.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Beskattes skifteholdstillæg?</h3>
                <p className="text-gray-600">Ja, tillæg beskattes som almindelig løn.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Indgår pension i nettolønnen?</h3>
                <p className="text-gray-600">Nej – 12 – 14 % indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p className="mb-6">
              I 2025 ligger industrioperatør løn efter skat typisk mellem 19 000 og 33 000 kr. pr. måned, svarende til 30 000 – 52 000 kr. før skat. Skiftehold, certificeringer og kommunesats er de hurtigste veje til mere i hånden. Tjek dit eget tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der lander på kontoen, når sidste batch er kørt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>Studentum.dk – Gennemsnitsløn industrioperatør 49 542 kr./md.</li>
              <li>SalaryExpert – Production Operator Danmark (347 990 kr./år = 29 000 kr./md.)</li>
              <li>3F/DI – Industriens Overenskomst 2025 (normalløn 153,70 kr./t + tillæg)</li>
              <li>SalaryExpert – CNC Machine Operator København +7 % over nationalt snit</li>
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

export default IndustrioperatoerLoenPage; 