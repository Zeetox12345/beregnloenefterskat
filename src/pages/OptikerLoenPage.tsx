import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const OptikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 47500, netMin: 29000, netMax: 36000 },
    "Aarhus": { grossSalary: 46000, netMin: 28500, netMax: 35000 },
    "Odense": { grossSalary: 44500, netMin: 27500, netMax: 34000 },
    "Aalborg": { grossSalary: 43000, netMin: 26750, netMax: 33000 },
    "Esbjerg": { grossSalary: 42500, netMin: 26000, netMax: 32000 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (minimalløn)", grossSalary: 34000, netMin: 21000, netMax: 21500 },
    { type: "3-5 år + kontaktlinser", grossSalary: 38000, netMin: 23500, netMax: 24000 },
    { type: "Senior / butikschef", grossSalary: 45000, netMin: 27500, netMax: 28000 },
    { type: "Klinisk optometrist, Storkbh.", grossSalary: 55000, netMin: 33000, netMax: 34000 },
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
        title="Optiker Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en optiker løn efter skat i 2025? Typisk 21 000 – 34 000 kr. udbetalt – før skat 34 000 – 55 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="optiker løn, optiker løn efter skat, optometrist løn, optiker salary, netto løn optiker"
      />
      <Header />
      <PageTitle title="Optiker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Optiker Løn Efter Skat 2025 – Skarpt Syn på Nettolønnen</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — I 2025 ligger en fuldtids optiker/optometrist (37 t/uge) typisk på 34 000 – 55 000 kr. før skat. Det giver en optiker løn efter skat på cirka 21 000 – 34 000 kr., afhængigt af erfaring, butikskæde og kommune­skat. Få dit helt præcise tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>. 
              </p>
            </div>

            <p>En optiker eller optometrist i 2025 har en stabil og relativt vellønnet profession med mulighed for at specialisere sig inden for kontaktlinser, synsrehabilitering eller klinisk optometri. Lønnen varierer betydeligt afhængigt af erfaring, specialisering og geografisk placering.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker optiker løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      Lønfaktor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      Betydning for nettobeløbet
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      Grundløn
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Minimalløn 1. maj 2025: 33 648 kr./md. for nyuddannet optiker
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      Erfaring & certifikater
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Kontaktlinse‐ eller svagsyns­speciale, butikschef­kursus: +1 500 – 4 000 kr./md.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      Ulempe­tillæg
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Aften (efter 18:00) + 40,67 kr./t; lørdag efter 15:00 / søndag + 169,21 kr./t – direkte på bruttolønnen
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      Geografi
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      København aflønner i snit ≈ 7 % højere end landsgennemsnittet
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      Bonus & provision
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Omsætningsbonus for brillesalg 3 – 8 % af månedslønnen i kædebutikker
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      Pension 14 %
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Bidraget indbetales før skat – tæller ikke i "løn efter skat", men øger den samlede pakke
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Optiker</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      Profil / erfaring
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      Løn før skat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      ≈ Løn efter skat*
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {experienceData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
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

            <p className="text-sm text-gray-600 mt-4">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og træk­procent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      Typisk løn før skat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      ≈ Løn efter skat**
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      Kommuneskat 2025
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      København
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
                      36 000 – 59 000 kr.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
                      22 500 – 36 000 kr.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      23,5 %
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      Aarhus
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
                      35 000 – 57 000 kr.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
                      22 000 – 35 000 kr.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      24,52 %
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      Odense
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
                      34 000 – 55 000 kr.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
                      21 000 – 34 000 kr.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      25,50 %
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      Aalborg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
                      33 000 – 53 000 kr.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
                      20 500 – 33 000 kr.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      25,60 %
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                      Esbjerg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
                      33 000 – 52 000 kr.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
                      20 000 – 32 000 kr.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      26,10 %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              ** Nettobeløbene er anslået med 8 % AM-bidrag, personfradrag 4 650 kr., den viste kommune­sats og en træk­procent på 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Optiker med 4 års erfaring</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-blue-200">
                    <td className="py-2 font-medium">Post</td>
                    <td className="py-2 text-right font-medium">Beløb</td>
                  </tr>
                  <tr className="border-b border-blue-200">
                    <td className="py-2">Løn før skat</td>
                    <td className="py-2 text-right">38 000 kr.</td>
                  </tr>
                  <tr className="border-b border-blue-200">
                    <td className="py-2">AM-bidrag 8 %</td>
                    <td className="py-2 text-right">3 040 kr.</td>
                  </tr>
                  <tr className="border-b border-blue-200">
                    <td className="py-2">Skattepligtig indkomst</td>
                    <td className="py-2 text-right">34 960 kr.</td>
                  </tr>
                  <tr className="border-b border-blue-200">
                    <td className="py-2">Personfradrag</td>
                    <td className="py-2 text-right">4 650 kr.</td>
                  </tr>
                  <tr className="border-b border-blue-200">
                    <td className="py-2">Beskatningsgrundlag</td>
                    <td className="py-2 text-right">30 310 kr.</td>
                  </tr>
                  <tr className="border-b border-blue-200">
                    <td className="py-2">A-skat (≈ 37 %)</td>
                    <td className="py-2 text-right">11 220 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">Optiker løn efter skat</td>
                    <td className="py-2 text-right font-bold">≈ 25 200 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til højere nettoløn</h2>

            <div className="bg-green-50 p-6 rounded-lg my-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">1.</span>
                  <span><strong>Tag kontaktlinse‐ eller svagsyns­speciale</strong> – giver fast funktions­tillæg.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">2.</span>
                  <span><strong>Sig ja til aften‐ og lørdagsvagter</strong> – ulempe­tillæg kan løfte bruttolønnen 15 – 45 %.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">3.</span>
                  <span><strong>Bliv butikschef eller faglig leder</strong> – ledelses­tillæg +3 000 kr./md.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">4.</span>
                  <span><strong>Flyt til lav-skat-kommune</strong> – forskellen på 23,5 % og 26,3 % kan være 700 kr./md. i netto.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Optiker løn efter skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      Spørgsmål
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      Kort svar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-300">
                      Hvad tjener en ny optiker efter skat?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Omkring 21 000 kr./md.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-300">
                      Kan jeg nå 30 000 kr. netto?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Ja – med seniorrolle, Storkbh.-tillæg og weekendvagter.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-300">
                      Er ulempe­tillæg skattepligtige?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Ja, de beskattes som almindelig A-indkomst.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-300">
                      Indgår pension i nettolønnen?
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Nej – 14 % pension indbetales før skat.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>
              I 2025 ligger optiker løn efter skat typisk mellem 21 000 og 34 000 kr. pr. måned, svarende til 34 000 – 55 000 kr. før skat. Ulempe­tillæg, special­certifikater og storby­placering er de hurtigste knapper, du kan dreje på for at øge udbetalingen. Tjek dit eget nettotal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få helt styr på, hvad der lander på kontoen, når dagens sidste synsprøve er afsluttet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="https://uol.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Urmagernes & Optikernes Landsforbund – OK25 minimalløn & tillæg
                </a>
              </li>
              <li>
                <a href="https://studentum.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Studentum.dk – Gennemsnitsløn for optiker 2025 (47 350 kr./md.)
                </a>
              </li>
              <li>
                <a href="https://salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  SalaryExpert – Optometrist løn i Danmark og København (+7 %) 2025
                </a>
              </li>
              <li>
                <a href="https://skm.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Skatteministeriet – Kommuneskat 2025 (top 20-liste & oversigt)
                </a>
              </li>
              <li>
                <a href="https://cepos.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  CEPOS – Spændet i kommuneskat 2025 (23,4 – 26,3 %)
                </a>
              </li>
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

export default OptikerLoenPage; 