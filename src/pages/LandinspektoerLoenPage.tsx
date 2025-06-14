import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LandinspektoerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 55000, netMin: 35900, netMax: 36400 },
    "Aarhus": { grossSalary: 52000, netMin: 34000, netMax: 34500 },
    "Odense": { grossSalary: 48000, netMin: 31500, netMax: 32000 },
    "Aalborg": { grossSalary: 47000, netMin: 30800, netMax: 31400 },
    "Esbjerg": { grossSalary: 45000, netMin: 29500, netMax: 30000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Graduate (0–2 år)", grossSalary: 40000, netMin: 26000, netMax: 26500 },
    { type: "Landinspektør 3–5 år", grossSalary: 47000, netMin: 30800, netMax: 31400 },
    { type: "Senior / Projektleder", grossSalary: 55000, netMin: 35900, netMax: 36400 },
    { type: "Partner / Praktiserende (Kbh.)", grossSalary: 63000, netMin: 40200, netMax: 40700 },
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
        title="Landinspektør Løn Efter Skat 2025 – Komplet Guide"
        description="Landinspektør løn efter skat ligger typisk på 26.000–40.000 kr./md. i 2025. Se lønbånd og beregn din nettoløn med beregn løn efter skat – hurtigt og præcist."
        keywords="landinspektør løn, landinspektør løn efter skat, geodata specialist løn, matrikel løn, praktiserende landinspektør"
      />
      <Header />
      <PageTitle title="Landinspektør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Landinspektør Løn Efter Skat 2025 – Fra Fixpunkt til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids landinspektør (37 t/uge) kan i 2025 forvente en løn før skat på 40 000 – 63 000 kr. pr. måned, afhængigt af anciennitet, certificering (praktiserende vs. ansat) og branche (rådgiver, kommunal, entreprenør). Det svarer til en landinspektør løn efter skat på cirka 26 000 – 40 000 kr. Få dit helt præcise nettobeløb på under ét minut med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – prøv både fast løn og bonus-scenarier.
              </p>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">
              Husk: Overarbejde og kilometergodtgørelse er skattepligtige / skattefrie efter særskilte regler og indgår kun delvist i løn efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer en landinspektør løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Lønfaktor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Hvorfor det betyder noget
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Grundløn
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      IDA-lønstatistik viser gennemsnit ≈ 47 700 kr./md. før skat for cand.geom./MSc Surveying (3–5 års erfaring).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Autorisation & firmaform
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Praktiserende (ansvars­tegnende) landinspektører hos private rådgivere ligger 8–12 % over ansatte i forsyning & kommune.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Geografi
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Hovedstaden og Aarhus betaler ca. 7 % over landsgennemsnit; Jylland uden for storbyer 6 % under.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Bonus & overskudsdeling
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Private rådgivningshuse giver 5 – 15 % bonus ved overskud – beskattes som almindelig løn.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Speciale
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      3D-matrikel og drone-Lidar udløser ofte funktions­tillæg (1 000 – 2 500 kr./md.).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Pension 17 %
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Indbetales før skat og ses ikke i nettolønnen, men øger totalpakken.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Landinspektør 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Erfaring / Rolle
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Løn før skat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Løn efter skat*
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {experienceData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.grossSalary.toLocaleString()} kr.
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og en gennemsnitlig trækprocent på 37 %.<br />
              Prøv din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se nettobeløbet med det samme.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior landinspektør (55 000 kr.)</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Trin
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Beløb
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Løn før skat
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      55 000 kr.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      AM-bidrag 8 %
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      4 400 kr.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Skattepligtig indkomst
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      50 600 kr.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Personfradrag
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      4 650 kr.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Beskatningsgrundlag
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      45 950 kr.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      A-skat (≈ 37 %)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      17 000 kr.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      Landinspektør løn efter skat
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      ≈ 33 600 kr.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til en højere nettoløn</h2>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Opnå autorisation</h3>
                <p className="text-blue-800 text-sm">Praktiserende landinspektører kan fakturere højere timepriser og få overskudsdeling.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Specialisér dig i drone- og 3D-kortlægning</h3>
                <p className="text-green-800 text-sm">Høj efterspørgsel i byudvikling og offshore.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Forhandl performance-bonus</h3>
                <p className="text-purple-800 text-sm">Bind den til faktureringsgrad eller projektmargen.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Vælg lav-skat kommune</h3>
                <p className="text-orange-800 text-sm">Kan løfte nettolønnen 600-800 kr./md. uden ekstra timer.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Landinspektør Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Spørgsmål
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Kort svar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Hvad tjener en nyuddannet landinspektør efter skat?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Omkring 26 000 kr./md.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Hvordan når jeg 40 000 kr. efter skat?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Partner/lederrolle, storby­marked, bonus og høj faktureringsgrad.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Tæller bonus i nettoløn?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Ja, udbetales som A-indkomst og beskattes som løn.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Indgår pension i nettobeløbet?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Nej, 17 % arbejdsgiver­pension indbetales før skat.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p className="mb-6">
              I 2025 ligger landinspektør løn efter skat typisk mellem 26 000 og 40 000 kr. pr. måned, baseret på 40 000 – 63 000 kr. før skat. Certificering, speciale og overskudsbonus er de hurtigste veje til en større udbetaling. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget der lander på kontoen, når måle­bænken er pakket sammen og matriklen er opdateret.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
              <li>IDA Lønstatistik 2025 – Landinspektører og geodata-specialister</li>
              <li>SalaryExpert – Land Surveyor, Copenhagen & Denmark (2025)</li>
              <li>Indkomsten.dk – Landinspektør gennemsnitsløn, juni 2025</li>
              <li>Kort & Matrikelstyrelsen – Autorisationskrav og indtjeningsmuligheder for praktiserende landinspektører</li>
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

export default LandinspektoerLoenPage; 