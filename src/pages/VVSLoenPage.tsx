import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const VVSLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 42000, netMin: 26600, netMax: 27100 },
    "Aarhus": { grossSalary: 40000, netMin: 25400, netMax: 25900 },
    "Odense": { grossSalary: 38000, netMin: 24200, netMax: 24700 },
    "Aalborg": { grossSalary: 38000, netMin: 24200, netMax: 24700 },
    "Esbjerg": { grossSalary: 37000, netMin: 23600, netMax: 24100 },
    "Randers": { grossSalary: 36000, netMin: 23000, netMax: 23500 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Lærling (4. hovedforløb)", grossSalary: 18000, netMin: 13000, netMax: 13400 },
    { type: "Nyudlært montør", grossSalary: 30000, netMin: 19300, netMax: 19800 },
    { type: "3-5 år + akkord", grossSalary: 35000, netMin: 22600, netMax: 23100 },
    { type: "6-8 år (servicetekniker)", grossSalary: 40000, netMin: 25400, netMax: 25900 },
    { type: "Formand / projektleder", grossSalary: 45000, netMin: 28600, netMax: 29100 },
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
        title="VVS Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad tjener en VVS-montør i 2025? Se løn før og efter skat, inkl. akkord, tillæg og erfaring – og beregn din nettoløn nemt og hurtigt."
        keywords="vvs løn, vvs montør løn, vvs-installatør løn, vvs løn efter skat, vvs-energitekniker løn, servicemontør løn"
      />
      <Header />
      <PageTitle title="VVS Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">VVS Løn Efter Skat 2025 – Fra Rørtang til Rådighedsbeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids VVS-montør / VVS-energitekniker kan i 2025 forvente en løn før skat på ca. 30 000 – 45 000 kr. pr. måned, alt efter overenskomst, akkord og erfaring. Det giver en vvs løn efter skat på omtrent 19 000 – 29 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut, og du kan teste både fast- og akkordløn.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en vvs løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Lønfaktor</th>
                    <th className="px-4 py-2 text-left">Hvorfor det har betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Overenskomst­timeløn</td>
                    <td className="px-4 py-2">Industrien & VVS-overenskomsten sætter minimallønnen til 175,80 kr./t fra 1. marts 2025 → ≈ 28 200 kr./md. før skat. <br /><span className="text-xs text-gray-500">Kilde: Dansk Metal</span></td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">Akkord & bonus</td>
                    <td className="px-4 py-2">Dygtige montører kører akkord på nybyg/renovering og henter 10-25 % over minimalløn.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Erfaring & rolle</td>
                    <td className="px-4 py-2">Lærling → Montør → Service­tekniker → Formand. Hvert trin løfter lønnen 2-4 k kr./md. før skat.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">Geografi</td>
                    <td className="px-4 py-2">Storbyer betaler ~7 % mere: gennemsnit 567 k kr./år i København mod 532 k kr. nationalt. <br /><span className="text-xs text-gray-500">Kilde: Salary Expert</span></td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Certifikater</td>
                    <td className="px-4 py-2">VE-installatør, kølemontør §17 eller gasservice giver ofte funktions­tillæg på 1-3 k kr./md. før skat.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">Pension 12 % + fritvalg 7 %</td>
                    <td className="px-4 py-2">Arbejdsgiverbidrag trækkes før skat – styrker totalpakken, men vises ikke som nettoløn.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk VVS Løn – Før & Efter Skat i 2025</h2>
            
            <div className="bg-blue-50 p-4 rounded-lg my-6 border border-blue-100">
              <p className="font-medium mb-3">Se hvad en VVS'er tjener i forskellige byer:</p>
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
                  <h3 className="text-xl font-semibold mb-2">VVS løn i {selectedCity}</h3>
                  <p className="mb-1">
                    <span className="font-medium">Løn før skat:</span> {cityData[selectedCity].grossSalary.toLocaleString()} kr./md.
                  </p>
                  <p className="mb-1">
                    <span className="font-medium">Løn efter skat:</span> {cityData[selectedCity].netMin.toLocaleString()} - {cityData[selectedCity].netMax.toLocaleString()} kr./md.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    *Baseret på gennemsnitlig kommuneskat, standardfradrag og 8% AM-bidrag
                  </p>
                </div>
              )}
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – VVS Løn Før & Efter Skat 2025*</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Profil / Erfaring</th>
                    <th className="px-4 py-2 text-left">Løn før skat</th>
                    <th className="px-4 py-2 text-left">Løn efter skat**</th>
                    <th className="px-4 py-2 text-left">Kildesnit</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={index} className={`border-t border-gray-300 ${index % 2 ? "bg-gray-50" : ""}`}>
                      <td className="px-4 py-2 font-medium">{item.type}</td>
                      <td className="px-4 py-2">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-2">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                      <td className="px-4 py-2 text-sm text-gray-600">
                        {index === 0 ? "3F-satser" : 
                         index === 1 ? "Dansk Metal" : 
                         index === 2 ? "Studentum" : "Salary Expert"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-gray-600 mt-2">
                * Beregnet for 160,33 timers norm; akkorddelen regnes ind i "løn før skat".<br />
                ** Nettotal med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Service­montør (40 000 kr. før skat)</h2>
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
                    <td className="px-4 py-2">40 000 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">AM-bidrag 8 %</td>
                    <td className="px-4 py-2">3 200 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Skattepligtig indkomst</td>
                    <td className="px-4 py-2">36 800 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">Personfradrag</td>
                    <td className="px-4 py-2">4 650 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Beskatningsgrundlag</td>
                    <td className="px-4 py-2">32 150 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">A-skat (≈ 37 %)</td>
                    <td className="px-4 py-2">11 900 kr.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">VVS løn efter skat</td>
                    <td className="px-4 py-2 font-bold">≈ 25 000 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="my-4">
              Prøv selv – indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at skrue op for nettolønnen</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Kør akkord på større projekter</strong> – 10-20 % extra på faktura giver tilsvarende bruttoløft.</li>
              <li><strong>Tag kold-/varme­certifikater</strong> – VE, køl eller gasservice udløser funktions­tillæg.</li>
              <li><strong>Saml nat- og weekend­opgaver</strong> – genetillæg er 30-45 % og ryger direkte i bruttolønnen.</li>
              <li><strong>Bliv formand/projektleder</strong> – ledelses­tillæg + firmabil kan løfte lønnen 4-6 k kr./md. før skat.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – VVS Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Spørgsmål</th>
                    <th className="px-4 py-2 text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Hvad tjener en nyudlært VVS-montør efter skat?</td>
                    <td className="px-4 py-2">Cirka 19 500 kr. pr. måned.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">Kan jeg ramme 30 000 kr. efter skat?</td>
                    <td className="px-4 py-2">Ja, som formand eller top-akkordmontør med weekendtillæg.</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-2 font-medium">Indgår pension i nettoløn?</td>
                    <td className="px-4 py-2">Nej, 12 % arbejdsgiver­pension betales før skat.</td>
                  </tr>
                  <tr className="border-t border-gray-300 bg-gray-50">
                    <td className="px-4 py-2 font-medium">Gælder topskat?</td>
                    <td className="px-4 py-2">Først over ~63 300 kr./md. før skat – sjældent i alm. montørstillinger.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p className="mb-4">
              I 2025 ligger vvs løn efter skat typisk mellem 19 000 og 29 000 kr. pr. måned – svarende til 30 000 – 45 000 kr. før skat. Akkord, tillæg og certifikater er de hurtigste knapper at dreje på, hvis du vil have mere udbetalt. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der rent faktisk kommer i banken, når de sidste rør er spændt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>3F/Blik & Rør & Dansk Metal – Industri- & VVS-overenskomsten 2023-25 (timeløn 175,80 kr.) <br /><span className="text-xs text-gray-500"><a href="https://www.danskmetal.dk/pjecer-og-udgivelser/overenskomst-industri-og-vvs-overenskomst-2023-2025" target="_blank" rel="noopener noreferrer" className="hover:underline">Dansk Metal</a></span></li>
              <li>SalaryExpert – Plumber, Denmark (national: 532 k kr./år) & Copenhagen (567 k kr./år) <br /><span className="text-xs text-gray-500"><a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Plumber&loc=Copenhagen,%20Denmark&rtype=4&smsg=1" target="_blank" rel="noopener noreferrer" className="hover:underline">Salary Expert</a></span></li>
              <li>Studentum.dk – VVS-montør gennemsnitsløn 48 483 kr./md. <br /><span className="text-xs text-gray-500"><a href="https://www.studentum.dk/job-loen/vvsmontoer" target="_blank" rel="noopener noreferrer" className="hover:underline">Studentum</a></span></li>
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

export default VVSLoenPage; 