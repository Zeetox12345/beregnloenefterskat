import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const PraestLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Københavns Stift");
  
  // City-specific salary data
  const cityData = {
    "Københavns Stift": { grossSalary: 50000, netMin: 30700, netMax: 31400 },
    "Aarhus Stift": { grossSalary: 47000, netMin: 29000, netMax: 29700 },
    "Fyens Stift": { grossSalary: 44000, netMin: 27400, netMax: 28000 },
    "Aalborg Stift": { grossSalary: 41000, netMin: 25600, netMax: 26200 },
    "Ribe Stift": { grossSalary: 38000, netMin: 23900, netMax: 24500 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet sognepræst (trin 1)", grossSalary: 29000, netMin: 19100, netMax: 19600 },
    { type: "4 år (trin 4)", grossSalary: 36000, netMin: 23800, netMax: 24300 },
    { type: "7 – 9 år + rådighedstillæg", grossSalary: 43000, netMin: 28300, netMax: 28900 },
    { type: "10+ år + funk./belastningstillæg", grossSalary: 48000, netMin: 31000, netMax: 31600 },
    { type: "Provst / Domprovst", grossSalary: 52000, netMin: 33000, netMax: 33600 }
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
        title="Præst Løn Efter Skat – Få Det Fuldstændige Overblik 2025"
        description="Få indsigt i præst løn efter skat med opdaterede tabeller, erfaringstrin, rådighedstillæg og geografiske forskelle. Beregn din nettoløn nemt."
        keywords="præst løn, præsteløn, sognepræst løn, præst løn efter skat, rådighedstillæg præst, folkekirken løn, præsteforeningen"
      />
      <Header />
      <PageTitle title="Præst Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Præst Løn Efter Skat 2025 – Fra prædikestol til nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids præst (sognepræst i folkekirken) kan i 2025 som hovedregel forvente en løn før skat på 29 000 – 52 000 kr. pr. måned – fra nyuddannet til erfaren sognepræst med rådighedstillæg. Det giver en præst løn efter skat på ca. 19 000 – 33 000 kr. efter AM-bidrag og almindelig A-skat. Få et hurtigt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger præst løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Lønfaktor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Grundløn & løngrupper</td>
                    <td className="border border-gray-300 px-4 py-2">Løngruppe 1 basisløn starter ved 29 311 kr., mens Løngruppe 2 sats I ligger på 42 467 kr. før skat<br />Præsteforeningen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Rådighedstillæg</td>
                    <td className="border border-gray-300 px-4 py-2">Fast tillæg på 4 419 kr./md. til de fleste sognepræster – pensionsgivende<br />Præsteforeningen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Belastnings- og funktions­tillæg</td>
                    <td className="border border-gray-300 px-4 py-2">Særlige pastorater kan udløse 3 370 kr./md. ekstra; kvalifikations-/funktionstillæg aftales lokalt<br />Præsteforeningen<br />Haderslev Stift</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Bolig (tjenestebolig)</td>
                    <td className="border border-gray-300 px-4 py-2">Præster betaler skat af et boligbidrag (loft 15 % af løn) – påvirker nettolønnen indirekte.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Stift / geografi</td>
                    <td className="border border-gray-300 px-4 py-2">Hovedstaden aflønner typisk 5-7 % over Vestdanmark, men har højere kommuneskat.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Kommuneskat</td>
                    <td className="border border-gray-300 px-4 py-2">Op til 0,8 pct.point forskel – svarer til ± 650 kr./md. i præst løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – regionale eksempler 2025</h2>
            <div className="my-6">
              <div className="md:w-3/4 mb-4">
                <label htmlFor="citySelect" className="block mb-2 font-medium">Vælg stift/region:</label>
                <select 
                  id="citySelect"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  {cityExamples.map((item) => (
                    <option key={item.city} value={item.city}>{item.city}</option>
                  ))}
                </select>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="text-xl font-semibold text-blue-800">{selectedCity}</h3>
                <div className="flex flex-col md:flex-row gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border border-blue-100 flex-1">
                    <p className="text-sm text-gray-600">Løn før skat</p>
                    <p className="text-2xl font-bold">{cityData[selectedCity].grossSalary.toLocaleString('da-DK')} kr.</p>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-blue-100 flex-1">
                    <p className="text-sm text-gray-600">Løn efter skat</p>
                    <p className="text-2xl font-bold">{cityData[selectedCity].netMin.toLocaleString('da-DK')} - {cityData[selectedCity].netMax.toLocaleString('da-DK')} kr.</p>
                    <p className="text-xs text-gray-500 mt-1">Afhængig af kommune og fradrag</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Stift / Region</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Løn før skat</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Løn efter skat*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cityExamples.map((item) => (
                      <tr key={item.city} className={selectedCity === item.city ? "bg-blue-50" : ""}>
                        <td className="border border-gray-300 px-4 py-2">{item.city}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                        <td className="border border-gray-300 px-4 py-2">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                * Beregnet uden kirkeskat; forudsætter gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – præst løn før og efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Erfaring / Rolle</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Løn før skat</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{item.type}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="border border-gray-300 px-4 py-2">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Fyens Stift, præst med rådighedstillæg</h2>
            <div className="bg-gray-100 p-5 rounded-lg my-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Løn før skat: 44 000 kr.</p>
                  <p className="mt-2">AM-bidrag 8 %: 3 520 kr.</p>
                  <p className="mt-2">Skattepligtig indkomst: 40 480 kr.</p>
                  <p className="mt-2">Personfradrag: 4 650 kr.</p>
                </div>
                <div>
                  <p className="font-medium">Beskatningsgrundlag: 35 830 kr.</p>
                  <p className="mt-2">A-skat (~ 37 %): 13 260 kr.</p>
                  <p className="mt-2 font-bold text-xl">Præst løn efter skat ≈ 27 220 kr.</p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                Test andre tillæg eller en lavere kommuneskat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se effekten på din egen udbetaling.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li className="pl-2">Forhandl kvalifikations- eller funktions­tillæg – fx ekstra sogne, skole- eller sygehuspræst.</li>
              <li className="pl-2">Søg pastorat med fribolig af høj kvalitet – reducerer dine private boligudgifter.</li>
              <li className="pl-2">Tag belastnings­tunge stillinger (storby- eller flersognspastorater) – udløser månedlige tillæg.</li>
              <li className="pl-2">Vælg lav-skat kommune – kan hæve præst løn efter skat med op til 650 kr./md. uden ekstra arbejde.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Præst Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Hvad tjener en ny præst efter skat?</p>
                <p>Cirka 19 000 kr./md.</p>
              </div>
              <div>
                <p className="font-medium">Hvornår når man 30 000 kr. efter skat?</p>
                <p>Typisk efter 7-10 års anciennitet plus rådigheds-/belastningstillæg.</p>
              </div>
              <div>
                <p className="font-medium">Tæller pension i løn efter skat?</p>
                <p>Nej – arbejdsgiverbetalt pension (ca. 17 %) indbetales før skat.</p>
              </div>
              <div>
                <p className="font-medium">Påvirker boligbidrag nettolønnen?</p>
                <p>Ja, værdien af tjenesteboligen beskattes, men boligen reducerer dine udgifter betydeligt.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger præst løn efter skat oftest mellem 19 000 og 33 000 kr. Rådigheds- og belastnings­tillæg, valg af pastorat og kommuneskat er de vigtigste håndtag til en højere nettoløn. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget dit kirkelige kald giver på kontoen, når klokken har ringet til næste tjeneste.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <div className="space-y-2">
              <p>
                Præsteforeningen – basisløn og løngrupper pr. 1. april 2024<br />
                <a href="https://www.praesteforening.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Præsteforeningen</a>
              </p>
              <p>
                Studentum.dk – gennemsnitlig præsteløn 2025<br />
                <a href="https://www.studentum.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Studentum</a>
              </p>
              <p>
                Præsteforeningen – rådighedstillæg og belastningstillæg 2025<br />
                <a href="https://www.praesteforening.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Præsteforeningen</a><br />
                <a href="https://www.haderslevstift.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Haderslev Stift</a>
              </p>
            </div>

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

export default PraestLoenPage; 