import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SoftwareIngenioerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 56000, netMin: 34200, netMax: 34700 },
    "Aarhus": { grossSalary: 53000, netMin: 32400, netMax: 32900 },
    "Odense": { grossSalary: 51000, netMin: 31100, netMax: 31600 },
    "Aalborg": { grossSalary: 49000, netMin: 29900, netMax: 30400 },
    "Esbjerg": { grossSalary: 48000, netMin: 29300, netMax: 29800 },
    "Randers": { grossSalary: 48000, netMin: 29300, netMax: 29800 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (Junior)", grossSalary: 51000, netMin: 30800, netMax: 31300 },
    { type: "3-5 år (Mid-level)", grossSalary: 56000, netMin: 34200, netMax: 34700 },
    { type: "6-8 år (Senior / Specialist)", grossSalary: 60000, netMin: 36300, netMax: 36800 },
    { type: "9-11 år (Tech Lead)", grossSalary: 65000, netMin: 39400, netMax: 39900 },
    { type: "Engineering Manager / Architect", grossSalary: 72000, netMin: 43800, netMax: 44300 },
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
        title="Software Ingeniør Løn Efter Skat – Realistiske Estimater for 2025"
        description="Få overblik over software ingeniør løn efter skat i 2025. Se eksempler for nyuddannede og seniorer, og brug vores beregner til dit eget tal."
        keywords="software ingeniør løn efter skat, softwareudvikler løn, programmør løn, it-løn, tech-løn danmark, softwareløn netto, udviklerløn københavn, software-ingeniør løn"
      />
      <Header />
      <PageTitle title="Software Ingeniør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Software Ingeniør Løn Efter Skat 2025 – Fra GitHub-Push til Girokort 💻💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som fuldtids software ingeniør i Danmark ligger software ingeniør løn efter skat i 2025 normalt på ca. 28 000 – 42 000 kr. pr. måned. Spændet afhænger af by, senioritet, teknologistak, bonus og kommuneskat. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, så ved du på ét minut, hvad dine commits giver på kontoen.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad driver en software ingeniør løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Løndriver</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor den rykker netto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Grundløn (IDA: 51 000 kr. nyuddannet på Sjælland)</td>
                    <td className="py-3 px-4 border-b">Sætter hele pakken</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Tech-stack & branche</td>
                    <td className="py-3 px-4 border-b">FinTech/AI +12 %, embedded −5 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Erfaring & certificeringer</td>
                    <td className="py-3 px-4 border-b">AWS Solutions Architect eller Kubernetes CKA: +1 – 3 k/md før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Bonus/RSU'er</td>
                    <td className="py-3 px-4 border-b">5 – 20 % af årsløn i scale-ups</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension (12 – 17 %)</td>
                    <td className="py-3 px-4 border-b">Trækkes før skat – øger totalpakke</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat (gns. 25,1 %)</td>
                    <td className="py-3 px-4 border-b">±0,6 pct.point → ±650 kr./md netto</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 text-right italic">Kilde: skm.dk</p>

            <p className="my-4 font-medium italic">
              Fun fact: Én lukket kritisk bug fredag aften kan finansiere din streaming-pakke et helt år – efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Software Ingeniør Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / Økosystem</th>
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
                      <td className="py-3 px-4 border-b">
                        {example.city}
                        {example.city === "København" && " (FinTech/SaaS)"}
                        {example.city === "Aarhus" && " (e-commerce/IoT)"}
                        {example.city === "Odense" && " (robotics)"}
                        {example.city === "Aalborg" && " (cloud/network)"}
                        {example.city === "Esbjerg" && " (offshore IT)"}
                        {example.city === "Randers" && " (produktions-IT)"}
                      </td>
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
              *Beregnet med AM-bidrag 8 %, månedsfradrag 4 300 kr. og gennemsnitlig kommuneskat 25,1 %.
            </p>
            <p className="text-sm text-gray-600 italic">
              Kilde til lønintervaller: Levels.fyi medianer for Danmark & CPH.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – Software Ingeniør Løn Efter Skat vs. Erfaring</h2>
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
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic mb-4">
              Tallene harmonerer med FagforeningsGuide's 450 k – 1 m kr. årlige spænd og IDA/Levels-data.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel</h2>
            <p className="mb-2 font-medium">(Senior i Odense – 60 000 kr.)</p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 60 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 4 800 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 55 200 kr.</li>
                <li><strong>Personfradrag:</strong> 4 300 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 50 900 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 18 800 kr.</li>
                <li><strong>Software ingeniør løn efter skat ≈ 36 400 kr.</strong></li>
              </ul>
            </div>
            <p>
              Vil du teste RSU-bonus eller flytning til lav-skat-kommune? Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – hurtigere end din næste CI-pipeline.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire turbo-tricks til højere software ingeniør løn efter skat 🚀</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Strategi</th>
                    <th className="py-3 px-4 border-b text-left">Typisk nettoløft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Skift til høj-margin branche (pharma/FinTech)</td>
                    <td className="py-3 px-4 border-b">+1 500 – 4 000 kr./md</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Certificér dig (AWS, Azure, GCP)</td>
                    <td className="py-3 px-4 border-b">+1 000 – 2 500 kr./md</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Forhandl RSU'er eller resultatløn</td>
                    <td className="py-3 px-4 border-b">Op til +15 % årligt</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til kommune &lt; 24 % skat</td>
                    <td className="py-3 px-4 border-b">+300 – 650 kr./md</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Software Ingeniør Løn Efter Skat ℹ️</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny software ingeniør efter skat?</p>
                <p>Ca. 31 000 kr./md ved IDA's anbefalede minimalløn.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg ramme 40 000 kr. netto?</p>
                <p>Ja – som Tech Lead/EM med bonus i højlønnet branche.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i "løn efter skat"?</p>
                <p>Nej, de 12-17 % indbetales før skat og øger kun din samlede pakke.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer jeg topskatten?</p>
                <p>Over ca. 55 400 kr. brutto pr. md. (665 000 kr./år).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Software ingeniør løn efter skat lander i 2025 typisk mellem 28 000 og 42 000 kr. Bonus, certifikater og lav kommuneskat giver hurtige løft. Tjek din egen kode-til-konto-konvertering i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – så ved du præcist, hvad der står på banken næste deploydag.
            </p>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: maj 2025. Kilder: IDA Lønstatistik 2024/25, Levels.fyi, Skatteministeriet, Dinero.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SoftwareIngenioerLoenPage; 