import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const EjendomsserviceteknikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 40000, netMin: 26600, netMax: 27100 },
    "Aarhus": { grossSalary: 37000, netMin: 24700, netMax: 25200 },
    "Odense": { grossSalary: 35000, netMin: 23400, netMax: 23900 },
    "Aalborg": { grossSalary: 36000, netMin: 24000, netMax: 24500 },
    "Esbjerg": { grossSalary: 34000, netMin: 22700, netMax: 23200 },
    "Randers": { grossSalary: 32000, netMin: 21400, netMax: 21900 },
    "Horsens": { grossSalary: 33000, netMin: 22000, netMax: 22500 },
    "Vejle": { grossSalary: 34000, netMin: 22700, netMax: 23200 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (trin 31)", grossSalary: 30000, netMin: 20000, netMax: 20500 },
    { type: "3-5 års erfaring (trin 34)", grossSalary: 34000, netMin: 22700, netMax: 23200 },
    { type: "Senior + vagthavende", grossSalary: 38000, netMin: 25300, netMax: 25800 },
    { type: "CTS-specialist, Kbh.", grossSalary: 42000, netMin: 27800, netMax: 28300 }
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
        title="Ejendomsservicetekniker Løn Efter Skat 2025 – Se Din Nettoløn Her"
        description="Hvad er en ejendomsservicetekniker løn efter skat i 2025? Typisk 20.000–28.000 kr. udbetalt – før skat 30.000–42.000 kr. Få dit præcise beløb med beregn løn efter skat – hurtigt og gratis."
        keywords="ejendomsservicetekniker løn, løn efter skat, nettoløn, ejendomsservice, tekniker løn, FOA overenskomst"
      />
      <Header />
      <PageTitle title="Ejendomsservicetekniker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Ejendomsservicetekniker Løn Efter Skat 2025 – Drift, Data og Dit Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids ejendomsservicetekniker (37 t/uge) tjener i 2025 typisk 30 000 – 42 000 kr. før skat pr. måned. Det svarer til en ejendomsservicetekniker løn efter skat på omtrent 20 000 – 28 000 kr. Vil du vide dit eget nettobeløb? Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en ejendomsservicetekniker løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Lønfaktor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Hvorfor det rykker nettobeløbet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Grundløn</td>
                    <td className="px-6 py-4 text-sm text-gray-900">FOA & BL-overenskomsten 2025 placerer de fleste teknikere på løntrin 31-37 (30 000 – 37 000 kr./md.).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tillæg</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Vagthavende beredskab, vagtordning eller vintertjeneste kan give 1 000 – 2 500 kr./md. før skat.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Erfaring & certifikater</td>
                    <td className="px-6 py-4 text-sm text-gray-900">CTS-, ABA- eller køleteknikerbevis løfter lønnen 1 500 – 3 000 kr./md. før skat.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Geografi</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Storkøbenhavn betaler ca. 7 % over landsgennemsnit; yderkommuner 4 % under.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pension 14 %</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Indbetales før skat og vises ikke i nettolønnen, men øger den samlede pakke.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Ejendomsservicetekniker</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Erfaring / Funktionsniveau</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Løn før skat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {experienceData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Beregnet med AM-bidrag 8 %, personfradrag 4 650 kr. og en trækprocent på 37 %. Justér selv for din kommune i beregneren.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior tekniker med vintertillæg</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Post</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Beløb</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Løn før skat</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">38 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">AM-bidrag 8 %</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3 040 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Skattepligtig indkomst</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">34 960 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Personfradrag</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Beskatningsgrundlag</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">30 310 kr.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">A-skat (~ 37 %)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">11 220 kr.</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-800">Ejendomsservicetekniker løn efter skat</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-800">≈ 25 200 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til højere nettoløn</h2>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Tag CTS- og køletekniker­kursus</h3>
                <p className="text-blue-700 text-sm">Giver fast funktions­tillæg hos de fleste boligselskaber.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Vælg beredskabs- eller vagtordning</h3>
                <p className="text-green-700 text-sm">Døgnberedskab aflønnes med fast rådighedstillæg.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Specialisér dig i energioptimering</h3>
                <p className="text-purple-700 text-sm">Projekttimer faktureres højere og udløser bonus.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Søg stilling i storby med lavere kommune­skat</h3>
                <p className="text-orange-700 text-sm">Løfter nettolønnen uden flere timer.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Ejendomsservicetekniker Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Spørgsmål</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Svar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Hvad tjener en ny tekniker efter skat?</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Ca. 20 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Hvordan når jeg 28 000 kr. efter skat?</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Erhvervserfaring + specialtillæg og storbyløn i Storkøbenhavn.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Er vintervagttillæg skattepligtigt?</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Ja, udbetales som A-indkomst og beskattes som normal løn.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Indgår pension i nettolønnen?</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Nej – 14 % pension indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Ejendomsservicetekniker Løn – Før & Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">By</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Løn før skat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cityExamples.map((city, index) => (
                    <tr key={index} className={selectedCity === city.city ? "bg-blue-50" : ""}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{city.city}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{city.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{city.netMin.toLocaleString()} – {city.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>
              I 2025 ligger ejendomsservicetekniker løn efter skat typisk mellem 20 000 og 28 000 kr. pr. måned – baseret på 30 000 – 42 000 kr. før skat. Funktions­tillæg, vagtaftaler og efteruddannelse er de hurtigste genveje til en højere udbetaling. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et skræddersyet nettotal på få sekunder.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>FOA & BL – Overenskomst for ejendomsservice 2024-26</li>
              <li>Indkomsten.dk – Ejendomsservicetekniker gennemsnitsløn, maj 2025</li>
              <li>SalaryExpert – Building Maintenance Technician, Denmark & Copenhagen (2025)</li>
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

export default EjendomsserviceteknikerLoenPage; 