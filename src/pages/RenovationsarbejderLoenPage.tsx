import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const RenovationsarbejderLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 42000, netMin: 26500, netMax: 33000 },
    "Aarhus": { grossSalary: 39500, netMin: 25000, netMax: 31000 },
    "Odense": { grossSalary: 38000, netMin: 24000, netMax: 30000 },
    "Aalborg": { grossSalary: 37000, netMin: 23500, netMax: 29000 },
    "Esbjerg": { grossSalary: 36500, netMin: 23000, netMax: 28000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyansat (offentlig rute)", grossSalary: 29000, netMin: 18000, netMax: 18500 },
    { type: "3-5 år + tidligt indmøde", grossSalary: 34000, netMin: 21500, netMax: 22000 },
    { type: "Offentlig rute, tillidsrepræsentant", grossSalary: 41000, netMin: 26000, netMax: 26500 },
    { type: "Privat akkord (storby)", grossSalary: 48000, netMin: 30000, netMax: 31000 }
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
        title="Renovationsarbejder Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en renovationsarbejder løn efter skat i 2025? Typisk 18 000 – 31 000 kr. udbetalt – før skat 29 000 – 48 000 kr. Beregn din præcise nettoløn hurtigt på beregn løn efter skat."
        keywords="renovationsarbejder løn, skraldemand løn, renovation løn efter skat, affaldshåndtering løn"
      />
      <Header />
      <PageTitle title="Renovationsarbejder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Renovationsarbejder Løn Efter Skat 2025 – Fra Skraldevogn til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids renovationsarbejder (37 t/uge) tjener i 2025 typisk 29 000 – 48 000 kr. før skat – afhængigt af overenskomst, akkord og geografi. Det svarer til en renovationsarbejder løn efter skat på ca. 18 000 – 31 000 kr. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at få din præcise nettoløn – hurtigere end en morgenrute.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker renovationsarbejder løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Lønfaktor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Grundløn & tillæg</td>
                    <td className="border border-gray-300 px-4 py-2">Overenskomst (3F/ATL) giver 149,90 kr./t + renovationstillæg 30,85 kr./t = ≈ 180,75 kr./t</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Akkord & spandbetaling</td>
                    <td className="border border-gray-300 px-4 py-2">Private ruter på akkord kan løfte bruttolønnen til 50 000+ kr./md.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Tidlige morgentimer</td>
                    <td className="border border-gray-300 px-4 py-2">Indmøde før 06:00: +49,15 kr./t; søn- & helligdage +103,12 kr./t</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Geografi</td>
                    <td className="border border-gray-300 px-4 py-2">København betaler ca. 7 % over landsgennemsnittet</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Erfaring & rolle</td>
                    <td className="border border-gray-300 px-4 py-2">Chauffør med C-kørekort eller holdleder får 2 000 – 4 000 kr. ekstra pr. måned</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Pension 10 – 12 %</td>
                    <td className="border border-gray-300 px-4 py-2">Arbejdsgiverbidraget indbetales før skat – vises ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Renovationsarbejder</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Profil / anciennitet</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Løn før skat</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">≈ Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-4 py-2 font-medium">{exp.type}</td>
                      <td className="border border-gray-300 px-4 py-2">{exp.grossSalary.toLocaleString()} kr.</td>
                      <td className="border border-gray-300 px-4 py-2">{exp.netMin.toLocaleString()} – {exp.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Nettobeløbene er beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og en trækprocent på 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">By</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Typisk løn før skat</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">≈ Løn efter skat**</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Kommuneskat 2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-2 font-medium">København</td>
                    <td className="border border-gray-300 px-4 py-2">32 000 – 52 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">20 000 – 33 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">23,5 %</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Aarhus</td>
                    <td className="border border-gray-300 px-4 py-2">31 000 – 48 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">20 000 – 31 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">24,5 %</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Odense</td>
                    <td className="border border-gray-300 px-4 py-2">30 000 – 46 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">19 000 – 30 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">25,5 %</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Aalborg</td>
                    <td className="border border-gray-300 px-4 py-2">29 000 – 45 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">19 000 – 29 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">25,6 %</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Esbjerg</td>
                    <td className="border border-gray-300 px-4 py-2">29 000 – 44 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">18 000 – 28 000 kr.</td>
                    <td className="border border-gray-300 px-4 py-2">26,1 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              ** Nettotal beregnet efter samme metode som ovenfor – kun de lokale kommunesatser varierer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – 4 års erfaring med morgentillæg (Aarhus)</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-1 font-medium">Løn før skat</td>
                    <td className="py-1 text-right">36 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">AM-bidrag 8 %</td>
                    <td className="py-1 text-right">2 880 kr.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-1 font-medium">Skattepligtig indkomst</td>
                    <td className="py-1 text-right">33 120 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">Personfradrag</td>
                    <td className="py-1 text-right">4 650 kr.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-1 font-medium">Beskatningsgrundlag</td>
                    <td className="py-1 text-right">28 470 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">A-skat (≈ 37 %)</td>
                    <td className="py-1 text-right">10 540 kr.</td>
                  </tr>
                  <tr className="border-t border-blue-300">
                    <td className="py-2 font-bold text-lg">Renovationsarbejder løn efter skat</td>
                    <td className="py-2 text-right font-bold text-lg">≈ 22 600 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til højere nettoløn</h2>

            <div className="space-y-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p><strong>Tag akkordruter</strong> – betaling pr. tømt spand kan løfte bruttolønnen markant.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p><strong>Udnyt tidligt indmøde & søn-/helligdagstillæg</strong> – op til 100 kr./t ekstra.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p><strong>Bliv chauffør med C-kørekort</strong> – typisk 2 000 – 3 000 kr. mere pr. måned.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p><strong>Søg ruter i storby med lav kommuneskat</strong> – forskellen på 23,5 % og 26,1 % giver ~700 kr. netto om måneden.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Renovationsarbejder Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Spørgsmål</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Hvad tjener en ny renovationsarbejder efter skat?</td>
                    <td className="border border-gray-300 px-4 py-2">Cirka 18 000 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Kan jeg nå 30 000 kr. netto?</td>
                    <td className="border border-gray-300 px-4 py-2">Ja – på privat akkord, storbyrute og høj spandvolumen.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Skattes ekstra tillæg?</td>
                    <td className="border border-gray-300 px-4 py-2">Ja, alle tillæg beskattes som A-indkomst.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Indgår pension i nettolønnen?</td>
                    <td className="border border-gray-300 px-4 py-2">Nej, 10 – 12 % indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>
              I 2025 ligger renovationsarbejder løn efter skat typisk mellem 18 000 og 31 000 kr. pr. måned, svarende til 29 000 – 48 000 kr. før skat. Akkord, tidlige vagter og storbyløn er de hurtigste måder at "tømme" lidt flere kroner ned i egen lomme. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der reelt lander, når dagens rute er kørt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="space-y-2">
              <li>Studentum.dk – Gennemsnitsløn 42 825 kr./md. (<a href="https://studentum.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">studentum.dk</a>)</li>
              <li>JUUL Danmark – 30 000 kr. pr. md. (renovationsarbejder) + tillægseksempler (<a href="https://juuldanmark.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">juuldanmark.dk</a>)</li>
              <li>DEKRA – 30 000 kr. gennemsnit + timeløn 156,95 kr. (<a href="https://dekra.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">dekra.dk</a>)</li>
              <li>SalaryExpert – Nationalløn 345 962 kr./år (≈ 28 800 kr./md.) (<a href="https://salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salaryexpert.com</a>)</li>
              <li>SalaryExpert – København +7 % (368 794 kr./år) (<a href="https://salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salaryexpert.com</a>)</li>
              <li>Fagbladet 3F – Offentlig løn 41 000 kr., privat akkord 52 – 55 000 kr. (<a href="https://fagbladet3f.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">fagbladet3f.dk</a>)</li>
              <li>CEPOS / Folketinget – Kommuneskat 2025 (spænder 23,4 – 26,3 %) (<a href="https://cepos.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">cepos.dk</a>, <a href="https://ft.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ft.dk</a>)</li>
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

export default RenovationsarbejderLoenPage; 