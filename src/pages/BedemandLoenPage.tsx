import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BedemandLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Hovedstaden");
  
  // City-specific salary data
  const cityData = {
    "Hovedstaden": { grossSalary: 39000, netMin: 26300, netMax: 27000 },
    "Østjylland": { grossSalary: 37000, netMin: 24900, netMax: 25600 },
    "Fyn": { grossSalary: 34000, netMin: 23000, netMax: 23600 },
    "Vest- & Sydjylland": { grossSalary: 32000, netMin: 21600, netMax: 22200 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Bedemandsassistent (0-1 år)", grossSalary: 30000, netMin: 20000, netMax: 20600 },
    { type: "Uden lederansvar (2-4 år)", grossSalary: 33000, netMin: 22000, netMax: 22700 },
    { type: "Erfaren bedemand (5-8 år)", grossSalary: 36000, netMin: 24300, netMax: 24900 },
    { type: "Leder / filialchef", grossSalary: 40000, netMin: 27000, netMax: 27600 },
    { type: "Partner / medejer", grossSalary: 45000, netMin: 29000, netMax: 29700 }
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
        title="Bedemand Løn Efter Skat 2025 – Se Realistiske Nettobeløb"
        description="Hvad tjener en bedemand efter skat i 2025? Se løn før og efter skat, tillæg og byforskelle – og beregn din egen udbetaling på få sekunder."
        keywords="bedemand løn efter skat, bedemand nettoløn, bedemand løn, bedemandsassistent løn, filialchef bedemand løn"
      />
      <Header />
      <PageTitle title="Bedemand Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Bedemand Løn Efter Skat 2025 – økonomien bag den sidste rejse</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids bedemand i Danmark kan i 2025 forvente en løn før skat på 30 000 – 45 000 kr. pr. måned – fra ny assistent til erfaren bedemand med lederansvar. Det giver en bedemand løn efter skat på cirka 20 000 – 29 000 kr., afhængigt af erfaring, geografi, tillæg og kommuneskat. Få et præcist nettobeløb i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en bedemand løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Erfaring & ansvar</td>
                    <td className="py-3 px-4 border-b">Startløn som assistent: 27 700 – 32 000 kr.; bedemand uden lederansvar ≈ 31 600 kr.; lederstilling ≈ 37 000 kr. før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Branche & selskab</td>
                    <td className="py-3 px-4 border-b">Private kæder betaler typisk 2 – 4 % højere end mindre familievirksomheder</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">Nordjylland og Hovedstaden ligger i toppen; Fyn og Vestjylland i bunden</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Overtid & vagttillæg</td>
                    <td className="py-3 px-4 border-b">Aften- og weekendudrykninger giver 25 – 50 % timetillæg – kan løfte nettolønnen 1 000 – 1 800 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12–14 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat; vises ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spænd på 0,8 pct.point → ± ≈ 700 kr./md. i bedemand løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn før & efter skat – typiske niveauer 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
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
              * Beregnet uden kirkeskat; AM-bidrag 8 % + gennemsnitlig kommuneskat 24,9 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale gennemsnit (erfaren bedemand, 160 t/md.)</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Region</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Efter skat</th>
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
              Gennemsnittet matcher lønintervallet 27 700 – 36 600 kr. fra LønTjek.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – filialchef, Østjylland med weekendvagter</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 40 000 kr.</li>
                <li><strong>Aften/weekendtilæg:</strong> +2 500 kr.</li>
                <li><strong>Sum før skat:</strong> 42 500 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> –3 400 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 39 100 kr.</li>
                <li><strong>Personfradrag:</strong> –4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 34 450 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> –12 750 kr.</li>
                <li><strong>Bedemand løn efter skat ≈</strong> 26 350 kr.</li>
              </ul>
            </div>
            <p>
              Regn på dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Tag døgnvagter og weekender</strong> – tillæg løfter netto op til 1 800 kr./md.</li>
              <li><strong>Opbyg salgskompetencer</strong> – urner, kister og ceremonipakker giver ofte bonusordning.</li>
              <li><strong>Efteruddan dig i sorgstøtte eller ceremonimester</strong> – kan udløse funktionstillæg på 1 500 kr./md.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – op til 700 kr. mere i bedemand løn efter skat hver måned.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Bedemand Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nyuddannet bedemand efter skat?</p>
                <p>Ca. 20 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår runder man 30 000 kr. netto?</p>
                <p>Som leder eller medejer + aften/weekendtillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej, 12–14 % pension indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Kan overtid udløse topskat?</p>
                <p>Kun ved bruttoløn {'>'} 63 000 kr./md.; sjældent i branchen.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger bedemand løn efter skat typisk mellem 20 000 og 29 000 kr. Skifteholdstillæg, ceremoniansvar og kommuneskat er de vigtigste løftestænger. Indtast dine egne forudsætninger i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et konkret tal, før du siger ja til næste hvilested.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://lontjek.dk/danmark-jobs-lonforhold/danmark-bedemandsarbejde" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LønTjek – bedemandsarbejde 27 711 – 36 606 kr. før skat (maj 2025)</a></li>
              <li><a href="https://www.godafsked.dk/bedemand-loen/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Godafsked.dk lønstatistik 2025</a></li>
              <li><a href="https://www.studentum.dk/studieguiden/karriereguides/hvordan-bliver-man-bedemand-24030" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum karriereguide – 25 000 – 35 000 kr. gennemsnitsløn</a></li>
              <li><a href="https://www.studentum.dk/job-loen/bedemand" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobpatruljen tillægssatser aften/weekend (brancheoverblik)</a></li>
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

export default BedemandLoenPage; 