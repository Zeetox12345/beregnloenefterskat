import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AssurandorLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0–2 år, privatsalg)", grossSalary: 35000, netMin: 23000, netMax: 23500 },
    { type: "Assurandør 3–5 år", grossSalary: 42000, netMin: 27500, netMax: 28000 },
    { type: "Senior (erhverv + portefølje)", grossSalary: 52000, netMin: 34000, netMax: 34500 },
    { type: "Elite performer / storby", grossSalary: 62000, netMin: 40500, netMax: 41000 },
  ];

  const factors = [
    {
      factor: "Fastløn",
      impact: "HK/Finans-forliget giver typisk 28 000 – 32 000 kr./md. som fast grundløn for nye assurandører."
    },
    {
      factor: "Provision & bonus",
      impact: "5 – 15 % af præmieindtægten eller nytegnet volumen; top-performere kan fordoble grundlønnen."
    },
    {
      factor: "Porteføljestørrelse",
      impact: "Stor renewal-portefølje (erhverv eller landbrug) giver højere månedlig residualprov."
    },
    {
      factor: "Certificeringer",
      impact: "Autorisation (Finans Danmark IDD-moduler) samt specialtillæg for pension/erhverv hæver fastlønnen 1 500 – 3 000 kr./md."
    },
    {
      factor: "Region",
      impact: "Hovedstaden og Østjylland betaler ca. 8 % over landsgennemsnit; yderområder 5 % under."
    },
    {
      factor: "Pension 17 %",
      impact: "Indbetales før skat og vises ikke i nettolønnen, men løfter totalpakken."
    }
  ];

  const tips = [
    "Udbyg erhvervsporteføljen – renewal-provision på erhvervspolicer er højere end private.",
    "Certificér dig i pension & investering – udløser funktions­tillæg og bedre kommission.",
    "Forhandl højere bonus­trapper – lav skalerede satser, fx 12 % over budget.",
    "Fokusér på krydssalg – bolig + bil + pension giver ekstra multi-discount-bonus hos de fleste selskaber."
  ];

  const faqData = [
    {
      question: "Hvad tjener en ny assurandør efter skat?",
      answer: "Cirka 23 500 kr./md."
    },
    {
      question: "Hvordan når jeg 40 000 kr. efter skat?",
      answer: "Storkundeteam + høje provisionstrin og IDD-certificering i storby."
    },
    {
      question: "Er provision skattepligtig?",
      answer: "Ja, udbetales som A-indkomst og beskattes på linje med fastløn."
    },
    {
      question: "Indgår pension i nettoløn?",
      answer: "Nej – 17 % arbejdsgiverpension indbetales før skat."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Assurandør Løn Efter Skat 2025 – Komplet Guide"
        description="En assurandør tjener typisk 35.000–62.000 kr. før skat. Se hvad det giver i nettoløn i 2025. Brug beregn løn efter skat og få et præcist overblik over, hvad du får udbetalt – med og uden provision."
        keywords="assurandør løn, forsikringsrådgiver løn, provision løn, løn efter skat"
      />
      <Header />
      <PageTitle title="Assurandør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Assurandør Løn Efter Skat 2025 – Provision, Portefølje og Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids assurandør (37 t/uge) kan i 2025 forvente en løn før skat på 35 000 – 62 000 kr. pr. måned. Det svarer til en assurandør løn efter skat på cirka 23 000 – 41 000 kr. afhængigt af fastløn, provision og geografisk område. Beregn din egen nettoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – og test et scenarie med højere bonus i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> på under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en assurandør løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Lønfaktor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Hvorfor det rykker nettobeløbet
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {factors.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Assurandør 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Niveau / erfaring
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Løn før skat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Løn efter skat*
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {experienceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b">
                        {item.grossSalary.toLocaleString('da-DK')} kr.
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b">
                        {item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior assurandør (52 000 kr.)</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Løn før skat:</span>
                    <span>52 000 kr.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AM-bidrag 8 %:</span>
                    <span>4 160 kr.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Skattepligtig indkomst:</span>
                    <span>47 840 kr.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Personfradrag:</span>
                    <span>4 650 kr.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Beskatningsgrundlag:</span>
                    <span>43 190 kr.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A-skat (≈ 37 %):</span>
                    <span>15 980 kr.</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-bold">Assurandør løn efter skat:</span>
                    <span className="font-bold">≈ 32 700 kr.</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere assurandør nettoløn</h2>

            <div className="space-y-4 my-6">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Assurandør Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Spørgsmål
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Svar kort
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {faqData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b">
                        {item.question}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b">
                        {item.answer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p className="mb-4">
              I 2025 ligger assurandør løn efter skat typisk mellem 23 000 og 41 000 kr. om måneden – baseret på 35 000 – 62 000 kr. før skat. Provisionstrin, kunde­segment og certificeringer er de hurtigste løftestænger. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget salgsmøderne reelt giver på din konto.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Finansforbundet & FA – Assurandør overenskomst 2024-26</li>
              <li>SalaryExpert – Insurance Sales Agent, Denmark & Copenhagen (2025)</li>
              <li>Indkomsten.dk – Assurandør gennemsnitsløn, maj 2025</li>
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

export default AssurandorLoenPage; 