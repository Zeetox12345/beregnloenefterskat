import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ITSupporterLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 36000, netMin: 23300, netMax: 23900 },
    "Aarhus": { grossSalary: 34000, netMin: 22000, netMax: 22600 },
    "Odense": { grossSalary: 32000, netMin: 20900, netMax: 21500 },
    "Aalborg": { grossSalary: 31000, netMin: 20200, netMax: 20800 },
    "Esbjerg": { grossSalary: 30000, netMin: 19500, netMax: 20000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior helpdesk (0-1 år)", grossSalary: 27000, netMin: 17000, netMax: 17500 },
    { type: "2-3 år, Servicedesk", grossSalary: 30000, netMin: 19500, netMax: 20000 },
    { type: "4-6 år + certifikater", grossSalary: 33000, netMin: 21300, netMax: 21900 },
    { type: "Onsite-support (6-8 år)", grossSalary: 36000, netMin: 23300, netMax: 23900 },
    { type: "Senior / Team lead", grossSalary: 38000, netMin: 24000, netMax: 24600 }
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
        title="IT Supporter Løn Efter Skat 2025 – Se Realistiske Eksempler"
        description="Hvad er it supporter løn efter skat i 2025? Se løn før og efter skat, erfaringstrin og vagttillæg – og beregn din nettoløn på få sekunder."
        keywords="it supporter løn efter skat, it-support løn, servicedesk løn, helpdesk løn, it arbejde løn"
      />
      <Header />
      <PageTitle title="IT Supporter Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">IT Supporter Løn Efter Skat 2025 – Praktisk guide til din nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids IT-supporter (37 t/uge) kan i 2025 som hovedregel forvente en løn før skat på 27 000 – 38 000 kr. pr. måned – fra helpdesk-junior til erfaren onsite-supporter. Det giver en IT supporter løn efter skat på cirka 17 000 – 24 000 kr. alt efter kommune, vagter og personlige tillæg. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad der lander på din konto – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer IT supporter løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Grundløn & erfaring</td>
                    <td className="py-3 px-4 border-b">Juniors starter omkring 27 000 kr.; erfarne onsite-supportere ligger op mod 35 000 kr. før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Sektor</td>
                    <td className="py-3 px-4 border-b">Private virksomheder betaler typisk 8-10 % over det offentlige</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Vagt- og forskudttidstillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, nat +30 %, weekend +45 %; kan løfte nettolønnen 1 000-1 800 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certifikater</td>
                    <td className="py-3 px-4 border-b">CompTIA A+, Microsoft 365, ITIL – giver ofte 1 000-2 000 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & resultatløn</td>
                    <td className="py-3 px-4 border-b">Servicedesk KPI-bonus på 3-8 % af årsløn hos enkelte outsourcings­partnere.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12–14 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og indgår ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel – ≈ ± 600 kr./md. i IT supporter løn efter skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">OK25-regulering</td>
                    <td className="py-3 px-4 border-b">Minimallønnen stiger 3,75 kr./time pr. 1. maj 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – byoversigt 2025</h2>
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
              * Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrieretrappen – IT supporter løn før og efter skat</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Odense, 32 000 kr. før skat</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 32 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 560 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 29 440 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 24 790 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 9 170 kr.</li>
                <li><strong>IT supporter løn efter skat ≈</strong> 20 270 kr.</li>
              </ul>
            </div>
            <p>
              Test weekend­tillæg eller lavere kommuneskat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget tallene ændrer sig.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire greb til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Certificér dig</strong> – CompTIA, Microsoft eller ITIL giver typisk 5-10 % lønløft før skat.</li>
              <li><strong>Tag vagtplan med aften/nat</strong> – ulempe­tillæg giver op til 1 800 kr. ekstra efter skat pr. måned.</li>
              <li><strong>Skift til outsourcing- eller konsulenthus</strong> – ofte 8-12 % højere grundløn end internt IT.</li>
              <li><strong>Vælg lav-skat kommune</strong> – op til 600 kr. ekstra i IT supporter løn efter skat hver måned.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – IT Supporter Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny IT-supporter efter skat?</p>
                <p>Ca. 17 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når man 23 000 kr. netto?</p>
                <p>Med 5-7 års erfaring, certifikater og regelmæssige aften- eller nattevagter.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej – 12-14 % arbejdsgiverpension indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Udløser bonus topskat?</p>
                <p>Først når samlet månedsløn før skat overstiger ca. 63 000 kr.; sjældent i supportroller.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger it supporter løn efter skat typisk mellem 17 000 og 24 000 kr. Certifikater, vagttillæg og kommuneskatte­procent er de hurtigste veje til en højere nettoløn. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et præcist billede af, hvor meget din support-ekspertise reelt giver på kontoen hver måned.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.randstad.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Randstad – lønspænd 26 500-35 000 kr. for IT-supportere</a></li>
              <li><a href="https://www.indkomsten.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Indkomsten.dk – gennemsnitsløn 35 500 kr. for IT-supportere</a></li>
              <li><a href="https://www.hk.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HK Privat – OK25 minimalløns­stigning 3,75 kr./time</a></li>
            </ul>
            
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

export default ITSupporterLoenPage; 