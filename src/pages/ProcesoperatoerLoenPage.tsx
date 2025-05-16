import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ProcesoperatoerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");

  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 41000, netMin: 26100, netMax: 26600 },
    "Kalundborg (farma)": { grossSalary: 43000, netMin: 27400, netMax: 27900 },
    "Aarhus": { grossSalary: 39000, netMin: 24900, netMax: 25400 },
    "Odense": { grossSalary: 38000, netMin: 24200, netMax: 24700 },
    "Aalborg": { grossSalary: 37000, netMin: 23600, netMax: 24100 },
    "Esbjerg (energi)": { grossSalary: 36000, netMin: 23000, netMax: 23500 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Elev (2. hovedforløb)", grossSalary: 17500, netMin: 14900, netMax: 15200 },
    { type: "Nyuddannet (0-2 år)", grossSalary: 32000, netMin: 20700, netMax: 21100 },
    { type: "3-5 år", grossSalary: 35000, netMin: 22800, netMax: 23200 },
    { type: "6-8 år (cleanroom / skiftehold)", grossSalary: 39000, netMin: 24900, netMax: 25400 },
    { type: "9-11 år (proces­overvågning)", grossSalary: 42000, netMin: 26900, netMax: 27400 },
    { type: "12+ år (teamleder / lead tech)", grossSalary: 45000, netMin: 28700, netMax: 29200 },
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
        title="Procesoperatør Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Hvad er procesoperatør løn efter skat i 2025? Se realistiske estimater baseret på branche, erfaring og skiftehold. Beregn dit eget beløb online."
        keywords="procesoperatør løn efter skat 2025, procesoperatør nettoløn, industri overenskomst, farma procesoperatør, cleanroom tillæg"
      />
      <Header />
      <PageTitle title="Procesoperatør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Procesoperatør Løn Efter Skat 2025 – Fra Tank­system til Tilgodehavende ️</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids procesoperatør (37 t/uge) kan i 2025 forvente en procesoperatør løn efter skat på ca. 21 000 – 27 500 kr. pr. måned. Beløbet afhænger især af branche (fødevare, farma, kemi, energi), anciennitet, skifteholds­tillæg og bopælskommune. Tjek dit tal lynhurtigt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en procesoperatørs løn efter skat?</h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                  <th className="py-3 px-4 border-b text-left">Hvorfor det betyder noget</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-3 px-4 border-b">Grundløn</td><td className="py-3 px-4 border-b">Sættes af Industri­overenskomsten (3F Industri & DI) eller virksomhedsoverenskomst.</td></tr>
                <tr><td className="py-3 px-4 border-b">Branche</td><td className="py-3 px-4 border-b">Farma & kemi ligger 5-10 % højere før skat end fødevare & energi.</td></tr>
                <tr><td className="py-3 px-4 border-b">Skifteholds­tillæg</td><td className="py-3 px-4 border-b">Aften + 18 %, nat + 30 %, weekend + 45 %.</td></tr>
                <tr><td className="py-3 px-4 border-b">Funktions­tillæg</td><td className="py-3 px-4 border-b">Steril / Cleanroom, CIP / SIP-operatør, proces-overvågning (+1 000 – 2 500 kr./md. før skat).</td></tr>
                <tr><td className="py-3 px-4 border-b">Pension 13 %</td><td className="py-3 px-4 border-b">Betales før skat og øger den samlede pakke.</td></tr>
                <tr><td className="py-3 px-4 border-b">Kommuneskat</td><td className="py-3 px-4 border-b">Op til 0,8 pct.point → ± 600 kr./md. i løn efter skat.</td></tr>
              </tbody>
            </table>
            <p className="italic">Fun fact: Én nattebatch i steril fyldelinje kan give tillæg nok til at betale dit arbejdssko-budget for et helt år – efter skat.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Procesoperatør Løn Efter Skat 2025</h2>
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
                      <td className="py-3 px-4 border-b">{example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">*Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %. Beregn dit tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaring & Speciale – Procesoperatør Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Anciennitet / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr key={exp.type} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{exp.type}</td>
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">{exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aarhus – nat-skifte, 39 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 39 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 120 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 35 880 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 31 230 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 11 550 kr.</li>
                <li><strong>Procesoperatør løn efter skat ≈</strong> 24 330 kr.</li>
              </ul>
            </div>
            <p className="text-sm">Tjek løn efter skat lynhurtigt med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 hurtige hacks til højere løn efter skat </h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left">Tip</th>
                  <th className="py-3 px-4 border-b text-left">Nettoløns-løft</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-3 px-4 border-b">Tag nat- og helligdags­skift</td><td className="py-3 px-4 border-b">+800 – 2 500 kr./md.</td></tr>
                <tr><td className="py-3 px-4 border-b">Bliv CIP / SIP-specialist</td><td className="py-3 px-4 border-b">+1 200 – 2 000 kr./md.</td></tr>
                <tr><td className="py-3 px-4 border-b">Spring til teamleder</td><td className="py-3 px-4 border-b">+2 000 – 3 000 kr./md.</td></tr>
                <tr><td className="py-3 px-4 border-b">Flyt til lav-skat kommune</td><td className="py-3 px-4 border-b">+300 – 600 kr./md.</td></tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Procesoperatør Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny procesoperatør efter skat?</p>
                <p>Ca. 21 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 30 000 kr. efter skat?</p>
                <p>Senior­stilling + nat/­weekend­tillæg i farma eller offshore-energi.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i løn efter skat?</p>
                <p>Nej – 13 % pension indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer topskatten?</p>
                <p>Først over ~63 000 kr. før skat – sjældent i drift­stillinger.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger procesoperatør løn efter skat oftest mellem 21 000 – 27 500 kr. Skifteholds­tillæg, funktions­certifikater og valg af lav-skat kommune er de hurtigste veje til mere udbetaling. Besøg <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, indtast din månedsløn – og se, hvor meget der reelt kører ind, når ventilerne er lukket og batchen er godkendt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.3f.dk/-/media/files/artikler/overenskomst/industrigruppen/overenskomster/industri-og-vaerkstedsoverenskomsten.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F Industri & DI – Procesoperatør Lønaftale 2024-26</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen/procesoperatoer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex Lønstatistik – Procesoperatører (maj 2025)</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025</a></li>
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

export default ProcesoperatoerLoenPage; 