import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AdvokatsekretaerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 42000, netMin: 20000, netMax: 33000 },
    "Aarhus": { grossSalary: 39500, netMin: 20000, netMax: 31000 },
    "Odense": { grossSalary: 38000, netMin: 19000, netMax: 30000 },
    "Aalborg": { grossSalary: 37500, netMin: 19000, netMax: 29000 },
    "Esbjerg": { grossSalary: 36500, netMin: 18000, netMax: 28000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet", grossSalary: 30000, netMin: 19000, netMax: 19500 },
    { type: "3–5 år + procesret", grossSalary: 35000, netMin: 22500, netMax: 23000 },
    { type: "Senior (inkasso / M&A)", grossSalary: 41000, netMin: 26000, netMax: 26500 },
    { type: "Storby‐topfirma, Københavns K", grossSalary: 48000, netMin: 30000, netMax: 31000 }
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
        title="Advokatsekretær Løn Efter Skat 2025 – Se Din Nettoløn Her"
        description="Hvad er en advokatsekretær løn efter skat i 2025? Typisk 19 000 – 31 000 kr. udbetalt – før skat 30 000 – 48 000 kr. Beregn dit præcise nettotal hurtigt på beregn løn efter skat."
        keywords="advokatsekretær løn efter skat, advokatsekretær nettoløn, juridisk sekretær løn"
      />
      <Header />
      <PageTitle title="Advokatsekretær Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Advokatsekretær Løn Efter Skat 2025 – Fra Paragraf til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids advokatsekretær (37 t/uge) tjener i 2025 typisk 30 000 – 48 000 kr. før skat. Det svarer til en advokatsekretær løn efter skat på ca. 19 000 – 31 000 kr. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se det præcise nettobeløb.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker advokatsekretær løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Grundløn</td>
                    <td className="py-3 px-4 border-b">Gennemsnit 46 143 kr./md.; nyuddannede ligger omkring 30 000 kr.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & specialer</td>
                    <td className="py-3 px-4 border-b">Inkasso, konkurs, M&A‐datarum: +2 000 – 4 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Fakturérbare timer</td>
                    <td className="py-3 px-4 border-b">Bonus på 5 – 10 % af månedslønnen ved højt timeantal</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København aflønner ca. 7 % højere end landsgennemsnittet</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Ulempe- & overtidstillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, weekend +45 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12 – 15 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat – tæller ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Advokatsekretær</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Profil / erfaring</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">≈ Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr key={exp.type} className="hover:bg-gray-50">
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
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Typisk løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">≈ Løn efter skat**</th>
                    <th className="py-3 px-4 border-b text-left">Kommuneskat 2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">København</td>
                    <td className="py-3 px-4 border-b">32 000 – 52 000 kr.</td>
                    <td className="py-3 px-4 border-b">20 000 – 33 000 kr.</td>
                    <td className="py-3 px-4 border-b">23,5 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Aarhus</td>
                    <td className="py-3 px-4 border-b">31 000 – 48 000 kr.</td>
                    <td className="py-3 px-4 border-b">20 000 – 31 000 kr.</td>
                    <td className="py-3 px-4 border-b">24,52 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Odense</td>
                    <td className="py-3 px-4 border-b">30 000 – 46 000 kr.</td>
                    <td className="py-3 px-4 border-b">19 000 – 30 000 kr.</td>
                    <td className="py-3 px-4 border-b">25,50 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Aalborg</td>
                    <td className="py-3 px-4 border-b">30 000 – 45 000 kr.</td>
                    <td className="py-3 px-4 border-b">19 000 – 29 000 kr.</td>
                    <td className="py-3 px-4 border-b">25,60 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Esbjerg</td>
                    <td className="py-3 px-4 border-b">29 000 – 44 000 kr.</td>
                    <td className="py-3 px-4 border-b">18 000 – 28 000 kr.</td>
                    <td className="py-3 px-4 border-b">26,10 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              ** Nettobeløbene er beregnet som ovenfor med lokale kommunesatser. Indtast din egen bruttoløn i beregningsværktøjet for et nøjagtigt resultat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Advokatsekretær med 4 års erfaring (Aarhus)</h2>
            
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium">Post</td>
                      <td className="py-2 text-right font-medium">Beløb</td>
                    </tr>
                    <tr>
                      <td className="py-1">Løn før skat</td>
                      <td className="py-1 text-right">35 000 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">AM-bidrag 8 %</td>
                      <td className="py-1 text-right">2 800 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">Skattepligtig indkomst</td>
                      <td className="py-1 text-right">32 200 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">Personfradrag</td>
                      <td className="py-1 text-right">4 650 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">Beskatningsgrundlag</td>
                      <td className="py-1 text-right">27 550 kr.</td>
                    </tr>
                    <tr>
                      <td className="py-1">A-skat (≈ 37 %)</td>
                      <td className="py-1 text-right">10 190 kr.</td>
                    </tr>
                    <tr className="border-t border-gray-300 font-semibold">
                      <td className="py-2">Advokatsekretær løn efter skat</td>
                      <td className="py-2 text-right">≈ 22 300 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Specialiser dig</strong> – inkasso, ejendomshandler eller GDPR giver ofte funktionstillæg.</li>
              <li><strong>Planlæg aften- og weekendarbejde</strong> – ulempetillæg 18 – 45 % øger bruttolønnen.</li>
              <li><strong>Søg top-tier firma i storby</strong> – betaler 5 – 10 % over markedsgennemsnit.</li>
              <li><strong>Flyt til lav-skat-kommune</strong> – forskellen på 23,5 % og 26,1 % kan være 700 kr./md. netto.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Advokatsekretær Løn Efter Skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-3 px-4 border-b text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Hvad tjener en ny advokatsekretær efter skat?</td>
                    <td className="py-3 px-4 border-b">Omkring 19 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kan jeg nå 30 000 kr. netto?</td>
                    <td className="py-3 px-4 border-b">Ja – seniorrolle i Cph., overtid og specialer.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Er overtid skattepligtigt?</td>
                    <td className="py-3 px-4 border-b">Ja, beskattes som normal A-indkomst.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Indgår pension i nettolønnen?</td>
                    <td className="py-3 px-4 border-b">Nej – 12 – 15 % indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger advokatsekretær løn efter skat typisk mellem 19 000 og 31 000 kr. pr. måned, svarende til 30 000 – 48 000 kr. før skat. Specialer, fakturérbare timer og geografi er de hurtigste håndtag til at hæve nettolønnen. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad der reelt tikker ind, når sidste stævning er sendt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Studentum.dk – Gennemsnitsløn 46 143 kr./md. 2025</li>
              <li>Indkomsten.dk – Løninterval 26 854 – 40 282 kr./md.</li>
              <li>SalaryExpert – Legal assistant løn i København (+ 7 %)</li>
              <li>Skatteministeriet – Kommuneskatter 2025 (København 23,5 %, Aarhus 24,52 %, Odense 25,50 %, Aalborg 25,60 %, Esbjerg 26,10 %)</li>
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

export default AdvokatsekretaerLoenPage; 