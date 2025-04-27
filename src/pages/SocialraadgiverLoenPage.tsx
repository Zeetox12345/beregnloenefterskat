import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SocialraadgiverLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 36000, netMin: 24100, netMax: 24600 },
    "Aarhus": { grossSalary: 35500, netMin: 23700, netMax: 24200 },
    "Odense": { grossSalary: 35000, netMin: 23300, netMax: 23800 },
    "Aalborg": { grossSalary: 34500, netMin: 22900, netMax: 23400 },
    "Esbjerg": { grossSalary: 34000, netMin: 22500, netMax: 23000 },
    "Randers": { grossSalary: 34000, netMin: 22500, netMax: 23000 },
    "Vejle": { grossSalary: 35000, netMin: 23100, netMax: 23600 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år)", grossSalary: 31000, netMin: 20900, netMax: 21400 },
    { years: "3–5 år", grossSalary: 32500, netMin: 21900, netMax: 22400 },
    { years: "6–8 år", grossSalary: 34000, netMin: 22900, netMax: 23400 },
    { years: "9–11 år", grossSalary: 35500, netMin: 23900, netMax: 24400 },
    { years: "12+ år", grossSalary: 37000, netMin: 24900, netMax: 25400 }
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
        title="Socialrådgiver Løn Efter Skat 2025 | Tabeller & Beregning"
        description="Få overblik over socialrådgiver løn efter skat 2025 med tabeller, beregningseksempel og nyttige skatte- og fradragstips."
        keywords="socialrådgiver løn efter skat 2025, kommunal socialrådgiver løn, dansk socialrådgiverforening, socialrådgiver nettoløn, socialrådgiver anciennitet, socialrådgiver overenskomst"
      />
      <Header />
      <PageTitle title="Socialrådgiver Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Socialrådgiver Løn Efter Skat 2025 – Tabeller & Beregning</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat socialrådgiver i 2025 kan forvente ca. 21.000 – 25.000 kr. i løn efter skat pr. måned, afhængigt af kommune, anciennitet og særlige tillæg. Få et personligt estimat på få sekunder med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en socialrådgiver?</h2>
            <p>
              Socialrådgivere udreder sociale problemstillinger, udarbejder handleplaner og støtter borgere inden for fx udsatte børn og unge, beskæftigelse, psykiatri og misbrugsområdet. De fleste er ansat i kommuner, mens andre arbejder i regioner, kriminalforsorgen eller private NGO'er. Overenskomsten forhandles af Dansk Socialrådgiverforening (DS) og KL.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Socialrådgiver – Før og Efter Skat</h2>
            <p>
              Tabellen bygger på DS‑KL-løntabellen pr. 1. april 2025 (grundløn + central lønregulering) for en 37‑timers uge. Pension (16,5 %) er ikke fratrukket i nettobeløbet.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Kommune/By</th>
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
              *Eksemplerne bruger kommuneskat 2025 uden kirkeskat. Din faktiske socialrådgiver løn efter skat varierer med personfradrag, pension og eventuelle funktionstillæg. Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et personligt estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Der er garanterede løntrin efter 3, 6 og 8 år samt kvalifikations‑ og funktionstillæg.
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
              *Beregnet med gennemsnitlig kommuneskat (25 %) og AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aalborg, 34.500 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag (8 %)</strong> 34.500 × 0,08 = 2.760 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 34.500 − 2.760 = 31.740 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 27.090 kr.</li>
                <li><strong>A‑skat (≈ 34,6 %)</strong> 27.090 × 0,346 ≈ 9.380 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 31.740 − 9.380 ≈ 22.360 kr.</li>
                <li><strong>Pension (16,5 %)</strong> 5.693 kr. indbetales før skat → løn efter skat ca. 22.300 kr.</li>
              </ul>
            </div>
            <p>
              Lav din egen beregning på få sekunder – <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">klik på beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker socialrådgiver løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat</strong>: 23,4 % (Vejle) til 26,3 % (Brønderslev).</li>
              <li><strong>Funktions‑ og specialiseringstillæg</strong>: Familieafdeling, udsatte børn, jobcenter m.m.</li>
              <li><strong>Tillæg for rådighedsvagter</strong>: 1.500 – 3.000 kr./md.</li>
              <li><strong>Pension</strong>: 16,5 % arbejdsgiverbetalt.</li>
              <li><strong>Overtid</strong>: 50 % tillæg ved merarbejde.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Hurtige svar</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en socialrådgiver før skat?</p>
                <p>31.000 – 37.000 kr.+ tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er socialrådgiver løn efter skat?</p>
                <p>Ca. 21.000 – 25.000 kr. ved fuldtid.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, trin og tillæg efter 3, 6 og 8 års anciennitet.</p>
              </div>
              <div>
                <p className="font-semibold">Hvilken fagforening?</p>
                <p>Dansk Socialrådgiverforening.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode råd til at øge din løn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Søg specialfunktioner</strong>: Misbrugsbehandling, familieret, psykiatri.</li>
              <li><strong>Opdater fradrag</strong>: Fagforening, a‑kasse, befordring.</li>
              <li><strong>Planlæg rådighedsvagter</strong>: Flere vagter = højere nettoløn.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som socialrådgiver i Danmark ligger bruttolønnen i 2025 på 31.000 – 37.000 kr. og nettolønnen på 21.000 – 25.000 kr.. Optimer din økonomi via tillæg, fradrag og pension, og brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for dit eget tal.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Dansk Socialrådgiverforening (DS) – Løntabel 2025</li>
              <li>KL – Kommunale lønreguleringer 2025</li>
              <li><a href="https://www.skm.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskatteprocenter 2025 (skm.dk)</a></li>
              <li><a href="https://www.dst.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønindeks for offentligt ansatte (dst.dk)</a></li>
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

export default SocialraadgiverLoenPage; 