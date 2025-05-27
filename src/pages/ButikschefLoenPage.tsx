import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ButikschefLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 40000, netMin: 25500, netMax: 26000 },
    "Aarhus": { grossSalary: 37000, netMin: 23700, netMax: 24200 },
    "Odense": { grossSalary: 35000, netMin: 22400, netMax: 22900 },
    "Aalborg": { grossSalary: 33000, netMin: 21100, netMax: 21600 },
    "Esbjerg": { grossSalary: 32000, netMin: 20500, netMax: 21000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Assisterende (0 – 2 år)", grossSalary: 30000, netMin: 19400, netMax: 19900 },
    { type: "Butikschef 3 – 5 år", grossSalary: 34000, netMin: 22100, netMax: 22600 },
    { type: "Senior / høj omsætning", grossSalary: 38000, netMin: 24800, netMax: 25300 },
    { type: "Kæde- / områdeschef (10 + år)", grossSalary: 45000, netMin: 28200, netMax: 28700 }
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
        title="Butikschef Løn Efter Skat 2025 – Se Realistiske Nettobeløb"
        description="Hvad er butikschef løn efter skat i 2025? Få indsigt i løn før og efter skat, tabeller baseret på by og erfaring – og beregn dit personlige beløb hurtigt."
        keywords="butikschef løn efter skat, butikschef nettoløn, detailhandel ledelse, store manager løn, butiksleder løn"
      />
      <Header />
      <PageTitle title="Butikschef Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Butikschef Løn Efter Skat 2025 – Realistiske Tal & Praktiske Tips</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids butikschef (typisk 37 – 45 t/uge) kan i 2025 forvente en løn før skat på ca. 30 000 – 45 000 kr. pr. måned, afhængigt af kæde, omsætning og ansvar. Det giver en butikschef løn efter skat på omtrent 19 000 – 28 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut. Tallene bygger på Detailhandel-Nyheder, Indkomsten.dk, Randstad-rapporter og aktuelle jobopslag.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer butikschef løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det har betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Løn før skat</td>
                    <td className="py-3 px-4 border-b">HK/Privat-statistik og jobopslag viser 30 – 45 k kr./md. afhængigt af butikstype og omsætning.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kæde & koncept</td>
                    <td className="py-3 px-4 border-b">Discount- og supermarkedskæder (fx Lidl) annoncerer løn op til 48,5 k kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København betaler ca. 5 – 8 % mere end landsgennemsnittet, men har højere kommuneskat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Arbejdstid</td>
                    <td className="py-3 px-4 border-b">Mange butikschefer har 42 – 45 t kontrakt → højere løn før skat, men også flere skattepligtige timer.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & omsætningstillæg</td>
                    <td className="py-3 px-4 border-b">KPI-bonus, varehusbonus eller e-commerce-cut kan løfte lønnen 5 – 20 %.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension & personalegoder</td>
                    <td className="py-3 px-4 border-b">12 – 15 % pension, bilordning, telefon, rabat – forbedrer pakken, men tæller ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">±0,8 pct-point svarer til ±600 kr./md. netto.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-oversigt – Butikschef Løn Efter Skat 2025</h2>
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
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              * Udregnet med 8 % AM-bidrag og gennemsnitlig kommuneskat 24,9 %, uden kirkeskat, baseret på Glassdoor- og Randstad-data.
              Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Butikschef Løn Efter Skat</h2>
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
              Tallene stammer fra Indkomsten.dk, Detailhandel-Nyheder og kædeopslag.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, senior butikschef</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 38 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 040 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 34 960 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 30 310 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 11 020 kr.</li>
                <li><strong>Butikschef løn efter skat ≈</strong> 24 300 kr.</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 italic">
              Indtast blot din løn før skat i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit personlige nettobeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Vælg en høj-omsætnings-butik</strong> – kæder betaler ofte 2 – 4 k kr./md. mere.</li>
              <li><strong>Forhandl KPI-bonus på dækningsbidrag eller shrinkage.</strong></li>
              <li><strong>Bliv ERP- eller HR-superbruger</strong> – +1 – 2 k kr./md. før skat.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – +300 – 600 kr./md. netto uden flere arbejdstimer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Butikschef Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny butikschef efter skat?</p>
                <p>Ca. 19 500 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 30 000 kr. efter skat?</p>
                <p>Ja, som områdechef eller ved høj bonus i storby.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller personalegoder i nettoløn?</p>
                <p>Nej, bil og rabat beskattes særskilt.</p>
              </div>
              <div>
                <p className="font-semibold">Udløser bonus topskat?</p>
                <p>Kun hvis løn før skat overstiger ca. 63 000 kr./md.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger butikschef løn efter skat typisk mellem 19 000 og 28 000 kr., svarende til 30 000 – 45 000 kr. før skat. Omsætning, bonus og kommuneskat bestemmer placeringen i spændet. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – så ved du, hvad der lander på kontoen, når kassen er talt op og butikken lukket.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="https://indkomsten.dk/hvad-tjener-en/butikschef/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Indkomsten.dk – Butikschef gennemsnit 33 k kr./md. (2025)</a></li>
              <li><a href="https://www.randstad.dk/job-soger/karriereradgivning/loen/loenberegner-beregn-og-tjek-din-loen/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Randstad.dk – Løn 25 – 35 k kr./md. før skat (2025)</a></li>
              <li><a href="https://www.glassdoor.com/Salaries/copenhagen-denmark-store-manager-salary-SRCH_IL.0,18_IM958_KO19,32.htm" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Glassdoor – Store Manager i København: 31 – 40 k kr./md. (2025)</a></li>
              <li><a href="https://karriere.lidl.dk/butik/butikschef" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Lidl karriereopslag – Butikschef løn 37 – 48,5 k kr./md. (2025)</a></li>
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

export default ButikschefLoenPage; 