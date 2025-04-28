import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ElektrikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 35500, netMin: 23700, netMax: 24200 },
    "Aarhus": { grossSalary: 34800, netMin: 23100, netMax: 23600 },
    "Odense": { grossSalary: 34300, netMin: 22700, netMax: 23200 },
    "Aalborg": { grossSalary: 33800, netMin: 22300, netMax: 22800 },
    "Esbjerg": { grossSalary: 33300, netMin: 21900, netMax: 22400 },
    "Randers": { grossSalary: 33300, netMin: 21900, netMax: 22400 },
    "Vejle": { grossSalary: 34300, netMin: 22900, netMax: 23400 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–1 år)", grossSalary: 30500, netMin: 20600, netMax: 21000 },
    { years: "2–3 år", grossSalary: 32000, netMin: 21600, netMax: 22100 },
    { years: "4–6 år", grossSalary: 33500, netMin: 22600, netMax: 23100 },
    { years: "7–9 år", grossSalary: 35000, netMin: 23600, netMax: 24100 },
    { years: "10+ år", grossSalary: 36500, netMin: 24500, netMax: 25000 }
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
        title="Elektriker Løn Efter Skat 2025 – Tabeller & Tips"
        description="Opdaterede 2025-tal for elektriker løn efter skat: byer, lærling-, svende- og overmontør­løn. Beregn løn efter skat hurtigt."
        keywords="elektriker løn efter skat 2025, elektriker indkomst, elektriker branche, elektriker anciennitet, DEF overenskomst, elektrikerløn"
      />
      <Header />
      <PageTitle title="Elektriker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Elektriker Løn Efter Skat 2025 – Din Komplette Guide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat elektriker kan i 2025 forvente cirka 20.000 – 24.500 kr. i løn efter skat pr. måned, afhængigt af branche, kommune og anciennitet. Vil du have et hurtigt estimat på få sekunder? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en elektriker?</h2>
            <p>
              Elektrikere installerer, vedligeholder og reparerer el‑installationer i boliger, industri, offshore, energisektoren og infrastruktur. Stillingerne er typisk dækket af Dansk El-Forbunds overenskomst (DEF) med DI Byggeri eller Tekniq. Lønnen kan være timeløn, akkord eller minimalløn med tillæg.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Elektriker – Før og Efter Skat</h2>
            <p>
              Tallene herunder er baseret på DEF‑lønstatistik (Q1 2025) og Danmarks Statistiks lønindeks for elektrikere. Eksemplerne antager 37 timer/uge og pension på 12,5 % (ikke fratrukket i nettobeløbet).
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
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
              *Beregnet med kommuneskat 2025 uden kirkeskat. Din faktiske elektriker løn efter skat varierer med pension, kørselsfradrag og akkord. Få et hurtigt estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Overenskomsten giver et garantiløft efter 2, 4 og 7 års erfaring. Akkord kan øge lønnen 10–25 %.
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aarhus, 34.800 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM-bidrag (8 %)</strong> 34.800 × 0,08 = 2.784 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 34.800 − 2.784 = 32.016 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 27.366 kr.</li>
                <li><strong>A‑skat (≈ 34,8 %)</strong> 27.366 × 0,348 ≈ 9.530 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 32.016 − 9.530 ≈ 22.486 kr.</li>
                <li><strong>Pension (12,5 %)</strong> 4.313 kr. indbetales før skat → løn efter skat ca. 22.400 kr.</li>
              </ul>
            </div>
            <p>
              Lav din egen beregning med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker elektriker løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat & kirkeskat</strong> – Lav kommuneskat giver højere nettoløn.</li>
              <li><strong>Akkord og bonus</strong> – Aftal akkord på byggepladser – 10‑30 % over minimallønnen.</li>
              <li><strong>Branchespecifikke tillæg</strong> 
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>Offshore & vind: +10‑15 % risikotillæg.</li>
                  <li>Alarm/brand: +1.500 kr./md.</li>
                  <li>Servicevagt: +250 kr./vagt.</li>
                </ul>
              </li>
              <li><strong>Pension</strong> – 12,5 % arbejdsgiverbetalt (DEF × DI) – sænker skatte­grundlaget.</li>
              <li><strong>Fradrag</strong> – Værktøjsfradrag, kilometergodtgørelse, fagforening (DEF) og A‑kasse.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale lønforskelle – Sjælland vs. Jylland</h2>
            <p>
              I hovedstadsområdet ligger elektrikerbruttolønnen typisk 1.500‑2.000 kr. højere end i Østjylland på grund af højere akkordtakster og zonetillæg. Nettolønnen påvirkes dog af den lavere kommuneskat i fx Vejle sammenlignet med København. Når du beregner løn efter skat, så indtast både bruttoløn og bopælskommune for at se din reelle udbetaling – forskellen kan være 300‑600 kr. om måneden.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lærling, svend eller overmontør – løn efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Stillingsniveau</th>
                    <th className="py-3 px-4 border-b text-left">Typisk løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Elektrikerlærling (4. hovedforløb)</td>
                    <td className="py-3 px-4 border-b">18.500 kr</td>
                    <td className="py-3 px-4 border-b">13.200 – 13.600 kr</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Nyudlært svend</td>
                    <td className="py-3 px-4 border-b">30.500 kr</td>
                    <td className="py-3 px-4 border-b">20.600 – 21.000 kr</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Overmontør / Formand</td>
                    <td className="py-3 px-4 border-b">38.000 kr</td>
                    <td className="py-3 px-4 border-b">25.800 – 26.300 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              *Beregn et hurtigt estimat med vores <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> beregner.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Hurtige svar</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en elektriker før skat?</p>
                <p>30.500 – 36.500 kr. + akkord.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er elektriker løn efter skat?</p>
                <p>Ca. 20.000 – 24.500 kr. afhængigt af kommune og akkord.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, overenskomsttrins + højere akkord.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan forhandles lønnen?</p>
                <p>Via Dansk El‑Forbund og lokale akkorder.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at øge din nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Certifikater:</strong> KLS, EX, solcelleinstallatør – giver +1.000‑3.000 kr./md.</li>
              <li><strong>Planlæg akkordprojekter</strong> for høj output.</li>
              <li><strong>Optimer fradrag</strong> i forskuds­opgørelsen.</li>
              <li><strong>Forhandl servicevagter</strong> – giver fast rådigheds­betaling.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Elektrikere i Danmark tjener 2025 en bruttoløn på 30.000 – 36.500 kr. og en nettoløn på 20.000 – 24.500 kr.. Din præcise elektriker løn efter skat afhænger af kommune, akkord og tillæg. Få dit eget tal via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://def.dk/globale-nyheder/vestsjaelland/loenstatistik-2025-vestsjaelland" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dansk El‑Forbund – Lønstatistik Q1 2025</a></li>
              <li><a href="https://dst.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønindeks for el‑teknisk branche</a></li>
              <li><a href="https://randstad.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Randstad – Lønprofil elektriker 2024</a></li>
              <li><a href="https://www.studentum.dk/job-loen/elektriker" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Elektriker gennemsnitsløn 2025</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/oversigt-over-kommuneskatter" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskatteprocenter 2025</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Senest opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ElektrikerLoenPage; 