import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const GymnasielaererLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København (nørre G)");
  
  const cityData = {
    "København (nørre G)": { grossSalary: 41000, netMin: 27300, netMax: 27800 },
    "Aarhus Statsgymnasium": { grossSalary: 40500, netMin: 26900, netMax: 27400 },
    "Odense Katedralskole": { grossSalary: 40000, netMin: 26500, netMax: 27000 },
    "Aalborg Katedralskole": { grossSalary: 39500, netMin: 26100, netMax: 26600 },
    "Esbjerg Gymnasium": { grossSalary: 39000, netMin: 25700, netMax: 26200 },
    "Randers Statsskole": { grossSalary: 39000, netMin: 25700, netMax: 26200 },
    "Rosborg Gymnasium, Vejle": { grossSalary: 40000, netMin: 26400, netMax: 26900 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år)", grossSalary: 34000, netMin: 22700, netMax: 23200 },
    { years: "3–5 år", grossSalary: 35500, netMin: 23700, netMax: 24200 },
    { years: "6–8 år", grossSalary: 37000, netMin: 24800, netMax: 25300 },
    { years: "9–11 år", grossSalary: 38500, netMin: 25900, netMax: 26400 },
    { years: "12+ år (trin 8 + seniortillæg)", grossSalary: 40000, netMin: 26900, netMax: 27400 }
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
        title="Gymnasielærer Løn Efter Skat 2025 – Tabeller & Tips"
        description="Opdaterede 2025-tal for gymnasielærer løn efter skat: byer, anciennitet, bonus og fradrag. Beregn løn efter skat nemt og hurtigt."
        keywords="gymnasielærer løn efter skat 2025, gymnasieskolernes lærerforening, stx løn, hhx løn, htx løn, hf løn, gymnasielærer anciennitet, gymnasielærer tillæg"
      />
      <Header />
      <PageTitle title="Gymnasielærer Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Gymnasielærer Løn Efter Skat 2025 – Din Komplette Guide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat gymnasielærer (STX, HF, HHX, HTX) kan i 2025 forvente ca. 24.000 – 28.000 kr. i løn efter skat pr. måned – alt efter undervisnings­institution, kommune, anciennitet og tillæg. Vil du have dit eget tal på få sekunder? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en gymnasielærer?</h2>
            <p>
              Gymnasielærere underviser i ét eller flere fag på de almene og erhvervsgymnasiale uddannelser (STX, HF, HHX, HTX). Arbejdet omfatter planlægning af undervisning, feedback, prøveforberedelse, studieture, Pædagogikum og vejledning af SRP/SSO. Gymnasielærere er dækket af GL-overenskomsten (Gymnasieskolernes Lærerforening) forhandlet med Skatteministeriet/Moderniseringsstyrelsen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Gymnasielærer – Før og Efter Skat</h2>
            <p>
              Tallene bygger på GL's løntabel pr. 1. april 2025 (grundløn + undervisnings­tillæg + forberedelsesfaktor 1,35) for 1924 nettoårstimer ≈ 37 timer/uge. Pension (17,2 %) er ikke trukket fra nettobeløbet.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / Gymnasium</th>
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
              *Beregnet med kommuneskat 2025 uden kirkeskat. Din gymnasielærer løn efter skat afhænger af pension, 6. ferieuge, seniordage og individuelle funktions­tillæg. Lav din egen beregning: <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Gymnasielærere rykker fra basisløn (trin 4) til slutløn (trin 8) og kan opnå seniorbonus efter 8 år samt kvalifikations- og funktions­tillæg.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Anciennitet</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr 
                      key={exp.years} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{exp.years}</td>
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
              *Gennemsnitlig kommuneskat 25 % og AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense, 40.000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM-bidrag (8 %)</strong> 40.000 × 0,08 = 3.200 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 40.000 − 3.200 = 36.800 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 32.150 kr.</li>
                <li><strong>A-skat (≈ 34,5 %)</strong> 32.150 × 0,345 ≈ 11.090 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 36.800 − 11.090 ≈ 25.710 kr.</li>
                <li><strong>Pension (17,2 %)</strong> 6.880 kr. indbetales før skat → løn efter skat ca. 25.700 kr.</li>
              </ul>
            </div>
            <p>
              Prøv med dine egne tal – klik på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker gymnasielærer løn efter skat?</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Kommuneskat</h3>
            <p>23,4 % (Vejle) til 26,3 % (Brønderslev).</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Funktions- og kvalifikationstillæg</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Team- eller studieretnings­leder</strong>: +1.800 – 4.000 kr./md.</li>
              <li><strong>Pædagogikumvejleder, IT-vejleder</strong>: +1.500 – 3.000 kr.</li>
              <li><strong>SRP/SSO-vejledning</strong>: Honorar pr. elev + skriftlig censur.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Pension</h3>
            <p>17,2 % arbejdsgiverbetalt, hvilket reducerer skatte­grundlaget.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Seniordage og bonus</h3>
            <p>Efter 8 år kan seniordage konverteres til løn (0,8 % af årsløn pr. dag).</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">SEO-FAQ – Hurtige svar om gymnasielærer løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en gymnasielærer før skat?</p>
                <p>Omkring 34.000 – 41.000 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er gymnasielærer løn efter skat 2025?</p>
                <p>Cirka 24.000 – 28.000 kr. afhængigt af kommune og anciennitet.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, fra løntrin 4 til 8 + senior- og funktions­bonus.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan kan jeg øge min nettoløn?</p>
                <p>Tag funktionsroller, konverter seniordage og optimer fradrag for fagforening, befordring m.m.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at øge din løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Ansøg om holdbonus for store klasser</strong> ({'>'}28 elever) – op til 4.500 kr. årligt.</li>
              <li><strong>Efteruddan dig og forhandl kvalifikations­tillæg</strong> ved fx masteruddannelse.</li>
              <li><strong>Planlæg eksamensvagter</strong> – ca. 200 kr./time før skat.</li>
              <li><strong>Juster forskuds­opgørelsen</strong> – hæv befordrings­fradrag for studieture.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Gymnasielærere i Danmark tjener 2025 en bruttoløn på 34.000 – 41.000 kr. og en nettoløn på 24.000 – 28.000 kr.. Din reelle gymnasielærer løn efter skat afhænger af kommune, tillæg og pension. Beregn din præcise nettoløn nu med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>GL – Løntabel pr. 1/4‑2025 for gymnasielærere</li>
              <li>Moderniseringsstyrelsen – Statens lønoversigter 2025</li>
              <li><a href="https://www.skm.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskatteprocenter 2025 (skm.dk)</a></li>
              <li><a href="https://www.dst.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur for undervisnings­området (dst.dk)</a></li>
            </ul>
            
            <p className="text-sm text-gray-500 mt-8">
              Senest opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GymnasielaererLoenPage; 