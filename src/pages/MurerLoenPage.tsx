import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const MurerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 43700, netMin: 27000, netMax: 27500 },
    "Aarhus": { grossSalary: 41000, netMin: 25700, netMax: 26200 },
    "Odense": { grossSalary: 38000, netMin: 24200, netMax: 24700 },
    "Aalborg": { grossSalary: 36000, netMin: 23000, netMax: 23500 },
  } as Record<string, { grossSalary: number; netMin: number; netMax: number }>;

  // Experience-based salary progression
  const experienceData = [
    { type: "Lærling (4. hovedforløb)", grossSalary: 20000, netMin: 14000, netMax: 14400 },
    { type: "Nyuddannet murer", grossSalary: 30000, netMin: 20000, netMax: 20500 },
    { type: "3–5 år + akkord", grossSalary: 36000, netMin: 24000, netMax: 24600 },
    { type: "6–8 år (restaurering)", grossSalary: 40000, netMin: 26600, netMax: 27200 },
    { type: "Senior energimurer (Kbh.)", grossSalary: 48000, netMin: 31800, netMax: 32300 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO
        title="Murer Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Hvad tjener en murer efter skat i 2025? Få realistiske lønbånd før og efter skat – og brug beregneren til at finde din nettoløn som murer i Danmark."
        keywords="murer løn, murer løn efter skat, akkordmurer løn, murer lærling løn, murer løn 2025"
      />
      <Header />
      <PageTitle title="Murer Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Murer Løn Efter Skat 2025 – Fra Fugebakke til Nettobeløb</h1>

            {/* TL;DR */}
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids murer (≈ 160 t/ md.) kan i 2025 forvente en løn før skat på 30 000 – 48 000 kr. afhængigt af akkord, erfaring og overenskomst. Det svarer til en murer løn efter skat på ca. 20 000 – 32 000 kr. Få dit helt præcise nettotal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            {/* Faktorer */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer en murer løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Lønfaktor</th>
                    <th className="px-4 py-2 text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Overenskomst­timeløn</td>
                    <td className="px-4 py-2">3F/DI-overenskomsten 2025 sætter minimallønnen til 176,25 kr./t (≈ 28 200 kr./md.).<br /><span className="text-xs text-gray-500">Kilde: 3F, Dansk Industri</span></td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">Akkord &amp; priskurant</td>
                    <td className="px-4 py-2">På nybyg kan murere via akkord nå 10 – 20 % over minimallønnen.<br /><span className="text-xs text-gray-500">Kilde: Lovguiden</span></td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Erfaring &amp; speciale</td>
                    <td className="px-4 py-2">Nyuddannet ≈ 30 k; senior restaurerings- eller energimurer op til 48 k.<br /><span className="text-xs text-gray-500">Kilde: Fagforeningsguide</span></td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">Geografi</td>
                    <td className="px-4 py-2">København betaler ~7 % over landsgns.: ca. 43 700 kr./md. før skat.<br /><span className="text-xs text-gray-500">Kilde: Salary Expert</span></td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Pension &amp; fritvalg</td>
                    <td className="px-4 py-2">12 % pension + 7 % fritvalg indbetales før skat – øger totalpakken, men vises ikke som nettoløn.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">Sæson &amp; skiftehold</td>
                    <td className="px-4 py-2">Vinterbyggeri, høje bygninger og weekendakkorder giver tillæg på 18 – 45 %.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Byoversigt */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – eksempler fra danske byer 2025</h2>
            <div className="bg-blue-50 p-4 rounded-lg my-6 border border-blue-100">
              <p className="font-medium mb-3">Se hvad en murer tjener i forskellige byer:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.keys(cityData).map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedCity === city
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
              {selectedCity && (
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Murer løn i {selectedCity}</h3>
                  <p className="mb-1"><span className="font-medium">Løn før skat:</span> {cityData[selectedCity].grossSalary.toLocaleString()} kr./md.</p>
                  <p className="mb-1"><span className="font-medium">Løn efter skat:</span> {cityData[selectedCity].netMin.toLocaleString()} – {cityData[selectedCity].netMax.toLocaleString()} kr./md.</p>
                  <p className="text-sm text-gray-600 mt-2">*Beregnet uden kirkeskat; standardfradrag og 8 % AM-bidrag.</p>
                </div>
              )}
            </div>

            {/* Lønbånd */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Murer Løn Før &amp; Efter Skat 2025*</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Erfaring / Rolle</th>
                    <th className="px-4 py-2 text-left">Løn før skat</th>
                    <th className="px-4 py-2 text-left">Løn efter skat**</th>
                    <th className="px-4 py-2 text-left">Kilder</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp, idx) => (
                    <tr key={exp.type} className={`border-t border-gray-300 ${idx % 2 ? "bg-gray-50" : ""}`}>
                      <td className="px-4 py-2 font-medium">{exp.type}</td>
                      <td className="px-4 py-2">{exp.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-2">{exp.netMin.toLocaleString()} – {exp.netMax.toLocaleString()} kr.</td>
                      <td className="px-4 py-2 text-sm text-gray-600">
                        {idx === 0 ? "3F" : idx === 1 ? "Fagforeningsguide" : idx === 2 ? "Lovguiden" : idx === 3 ? "Studentum" : "Salary Expert"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-gray-600 mt-2">* 160,33 timers norm pr. måned.<br />** Nettotal med 8 % AM-bidrag, 4 650 kr. personfradrag og gennemsnitlig trækprocent (≈ 37 %).</p>
            </div>

            {/* Beregningseksempel */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Akkordmurer, 36 000 kr. før skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Post</th>
                    <th className="px-4 py-2 text-left">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Løn før skat</td>
                    <td className="px-4 py-2">36 000 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">AM-bidrag 8 %</td>
                    <td className="px-4 py-2">2 880 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Skattepligtig indkomst</td>
                    <td className="px-4 py-2">33 120 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">Personfradrag</td>
                    <td className="px-4 py-2">4 650 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Beskatningsgrundlag</td>
                    <td className="px-4 py-2">28 470 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">A-skat (≈ 37 %)</td>
                    <td className="px-4 py-2">10 530 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Murer løn efter skat</td>
                    <td className="px-4 py-2">≈ 24 000 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Indtast bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
            </p>

            {/* Tips */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire solide sten til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Kør akkord på nybyg</strong> – produktive teams tjener 3 – 6 k mere før skat hver måned.</li>
              <li><strong>Tag energirenoverings-certifikat</strong> – byg-&-boligpuljer driver højere timepriser.</li>
              <li><strong>Arbejd vinter- og weekend­skifte</strong> – genetillæg på 18 – 45 % går direkte i brutto.</li>
              <li><strong>Forhandl fritvalg som løn</strong> – konverter en del af de 7 % fritvalgspenge til kontant udbetaling.</li>
            </ol>

            {/* FAQ */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Murer Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny murer efter skat?</p>
                <p>Omkring 20 000 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når jeg 30 000 kr. efter skat?</p>
                <p>Som senior akkordmurer i København med højsæson- eller weekendtillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller akkordbonus i nettoløn?</p>
                <p>Ja, det beskattes som almindelig løn.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej – 12 % arbejdsgiver­pension indbetales før skat.</p>
              </div>
            </div>

            {/* Konklusion */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger murer løn efter skat typisk mellem 20 000 og 32 000 kr. om måneden – svarende til 30 000 – 48 000 kr. før skat. Akkord, specialisering og geografisk placering er de stærkeste mursten i din løn­væg. Tjek dit eget scenarie på få sekunder i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der reelt lander på kontoen, når den sidste sten er lagt.
            </p>

            {/* Kilder */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Bricklayer&loc=Denmark&rtype=4&smsg=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Bricklayer, Denmark</a></li>
              <li><a href="https://fagforeningsguide.dk/hvad-tjener-en-murer/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fagforeningsguide – Hvad tjener en murer?</a></li>
              <li><a href="https://www.studentum.dk/job-loen/murer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Job &amp; Løn: Murer</a></li>
              <li><a href="https://www.danskindustri.dk/vi-radgiver-dig/di-dokumenter-for-personale/personalejuras-dokumenter/overenskomster/murer--og-murerarbejdsmandsoverenskomsten/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F/DI Murer-overenskomst 2025-2028</a></li>
            </ul>

            <p className="text-sm text-gray-500 mt-8">Opdateret: juni 2025.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MurerLoenPage; 