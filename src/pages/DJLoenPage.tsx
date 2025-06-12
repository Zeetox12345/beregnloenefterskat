import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const DJLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 30000, netMin: 19500, netMax: 20000 },
    "Aarhus": { grossSalary: 28000, netMin: 18400, netMax: 18900 },
    "Odense": { grossSalary: 27000, netMin: 17700, netMax: 18200 },
    "Aalborg": { grossSalary: 26500, netMin: 17400, netMax: 17900 },
    "Esbjerg": { grossSalary: 25500, netMin: 16700, netMax: 17200 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Entry-level bar-DJ", grossSalary: 25000, netMin: 16300, netMax: 16700 },
    { type: "Club-DJ 2-4 år", grossSalary: 30000, netMin: 19500, netMax: 20000 },
    { type: "Radio-DJ (fast ansat)", grossSalary: 34000, netMin: 22000, netMax: 22500 },
    { type: "Resident / event-DJ + nat/weekend", grossSalary: 40000, netMin: 25800, netMax: 26300 }
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
        title="DJ Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad tjener en DJ efter skat i 2025? Se eksempler på løn før og efter skat – inkl. tillæg og drikkepenge. Beregn din nettoløn nemt og hurtigt online."
        keywords="dj løn efter skat 2025, dj nettoløn, disc jockey løn, natarbejde tillæg, drikkepenge beskatning, radio dj løn"
      />
      <Header />
      <PageTitle title="DJ Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">DJ Løn Efter Skat 2025 – Fra Bass-drop til Bankkonto</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som professionel DJ (fuldtid svarende til ca. 160 t/ md.) kan du i 2025 forvente en løn før skat på 25 000 – 40 000 kr. pr. måned – afhængigt af spillested, erfaring, spilletid og drikkepenge/bonus. Det giver en DJ løn efter skat på omtrent 16 000 – 26 000 kr. Få dit helt præcise tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en DJ løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Betydning for nettolønnen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Timeløn / overenskomst</td>
                    <td className="py-3 px-4 border-b">3F-/HORESTA-satser for "speakerarbejde" viser 150-185 kr./t → 24 000-29 000 kr./md. før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Spillested & geografi</td>
                    <td className="py-3 px-4 border-b">København betaler ~7 % højere; gennemsnit 524 k kr./år (≈ 43 700 kr./md.) for club-DJ's</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Erfaring & brand</td>
                    <td className="py-3 px-4 border-b">SalaryExpert: entry-level 377 k kr./år → 31 k/md.; senior DJ 630 k kr./år → 52 k/md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Spilletidstillæg</td>
                    <td className="py-3 px-4 border-b">Nat + 30 %, weekend + 45 % (diskoteks-overenskomst)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Drikkepenge / booking-fee</td>
                    <td className="py-3 px-4 border-b">500 – 5 000 kr./md. ekstra – beskattes som almindelig indkomst</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Pension 9-11 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag indbetales før skat og ses ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løntabel – DJ Løn Før & Efter Skat 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Profil / Erfaring</th>
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
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              * Beregnet med arbejdsmarkedsbidrag 8 %, personfradrag 4 650 kr. og gennemsnitlig trækprocent ≈ 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Club-DJ i København</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-1 font-semibold">Løn før skat</td>
                    <td className="py-1 text-right">30 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">AM-bidrag 8 %</td>
                    <td className="py-1 text-right">2 400 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Skattepligtig indkomst</td>
                    <td className="py-1 text-right">27 600 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Personfradrag</td>
                    <td className="py-1 text-right">4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">Beskatningsgrundlag</td>
                    <td className="py-1 text-right">22 950 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1">A-skat (≈ 37 %)</td>
                    <td className="py-1 text-right">8 490 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300 font-semibold">
                    <td className="py-1">DJ løn efter skat</td>
                    <td className="py-1 text-right">≈ 19 100 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>
              Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se nettobeløbet for netop dit setup.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at skrue nettolønnen op</h2>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Book nat- og weekend­slots</strong> – genetillæg på 30-45 % løfter brutto direkte.</li>
              <li><strong>Byg dit brand</strong> – sociale medier + mixtapes → højere booking-fee.</li>
              <li><strong>Specialiser dig i nichegenrer eller vinyl-sets</strong> – premium venues betaler mere.</li>
              <li><strong>Forhandl drikkepenge-pool eller % af baromsætning</strong> – beskattes, men øger udbetalingen.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – DJ Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-3 px-4 border-b text-left">Svar kort</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Hvad tjener en ny DJ efter skat?</td>
                    <td className="py-3 px-4 border-b">Omkring 16 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Hvordan når jeg 25 000 kr. efter skat?</td>
                    <td className="py-3 px-4 border-b">Fast natte­klubslot + weekend­job og stærkt brand.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Indgår pension i nettoløn?</td>
                    <td className="py-3 px-4 border-b">Nej – pensionen indbetales før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Skal drikkepenge beskattes?</td>
                    <td className="py-3 px-4 border-b">Ja, de er A-indkomst og beskattes som løn.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 spænder DJ løn efter skat fra ca. 16 000 til 26 000 kr. om måneden – svarende til 25 000 - 40 000 kr. før skat. Nat/vagt­tillæg, brandværdi og drikkepenge er de hurtigste veje til et større nettobeløb. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget der lander på kontoen, når sidste track fader ud.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc list-inside space-y-2 my-4 text-sm text-gray-600">
              <li>ERI Economic Research Institute – Disc Jockey løn, DK - <a href="https://www.erieri.com/salary/job/disc-jockey/denmark" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">erieri.com</a></li>
              <li>LønTjek.dk – Speakerarbejde/DJ timeløn - <a href="https://lontjek.dk/danmark-jobs-lonforhold/danmark-speakerarbejde-pa-radio-tv-og-andre-medier" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">lontjek.dk</a></li>
              <li>SalaryExpert – Radio DJ Danmark - <a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Radio%20DJ&loc=Denmark&rtype=4&smsg=1" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salaryexpert.com</a></li>
              <li>HORESTA/3F Diskoteks­overenskomst, tillæg - <a href="https://journalistforbundet.dk/tjek-din-loen-med-djs-loenberegner" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">journalistforbundet.dk</a></li>
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

export default DJLoenPage; 