import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BogholderLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 41000, netMin: 26200, netMax: 26700 },
    "Aarhus": { grossSalary: 38000, netMin: 24400, netMax: 24900 },
    "Odense": { grossSalary: 36000, netMin: 22900, netMax: 23400 },
    "Aalborg": { grossSalary: 35000, netMin: 22300, netMax: 22800 },
    "Esbjerg": { grossSalary: 34000, netMin: 21800, netMax: 22300 },
    "Randers": { grossSalary: 33000, netMin: 21300, netMax: 21800 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0-2 år)", grossSalary: 28000, netMin: 18400, netMax: 18900 },
    { type: "3-5 år", grossSalary: 32000, netMin: 20700, netMax: 21200 },
    { type: "6-8 år (finans / løn)", grossSalary: 36000, netMin: 22900, netMax: 23400 },
    { type: "9-11 år (senior)", grossSalary: 39000, netMin: 25000, netMax: 25500 },
    { type: "12+ år (ansvarlig / teamleder)", grossSalary: 42000, netMin: 27000, netMax: 27500 }
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
        title="Bogholder Løn Efter Skat 2025 – Realistiske Tal"
        description="Hvad er bogholder løn efter skat i 2025? Se by- og erfaringstabeller, beregningseksempel og beregnerlink til dit eget nettobeløb."
        keywords="bogholder løn efter skat, bogholder nettoløn, finansbogholder løn, bogholderløn, regnskab løn"
      />
      <Header />
      <PageTitle title="Bogholder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Bogholder Løn Efter Skat 2025 – Sæt Tal på Tallene 💰</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids bogholder (37 t/uge) kan i 2025 forvente en løn før skat på ca. 28 000 – 42 000 kr. pr. måned. Det giver en bogholder løn efter skat på omtrent 18 000 – 27 000 kr. afhængigt af branche, erfaring, specialtillæg og kommuneskat. Beregn dit præcise beløb med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en bogholder løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Løn før skat</td>
                    <td className="py-3 px-4 border-b">CA Løntjek angiver 35 366-42 180 kr.; gennemsnit omkring 39 000 kr.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">Hovedstaden ligger 5-8 % højere før skat end nationalt gennemsnit, men har også lidt højere kommuneskat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & rolle</td>
                    <td className="py-3 px-4 border-b">Junior, bogholder, finans­bogholder, senior/ansvarlig – hvert trin har eget lønspænd (se trappe).</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Teknisk specialisering</td>
                    <td className="py-3 px-4 border-b">ERP-superbruger (SAP/Navision/BC), lønadministration eller rapportering kan udløse 1 000-3 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus / overarbejde</td>
                    <td className="py-3 px-4 border-b">Årsafslutning og projekt­bonus hæves som almindelig løn og beskattes tilsvarende.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12-15 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og øger pakken, men vises ikke i nettoløn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">± 0,8 pct.point → ± 600 kr./md. i løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Bogholder Løn Efter Skat 2025</h2>
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
              * Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Bogholder Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Funktion</th>
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
              Tallene hviler på SalaryExpert datasæt for bookkeeping-clerk roller.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Odense, finansbogholder</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 36 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 880 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 33 120 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 28 470 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 10 540 kr.</li>
                <li><strong>Bogholder løn efter skat ≈</strong> 22 600 kr.</li>
              </ul>
            </div>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Bliv ERP-superbruger (SAP, Business Central, e-conomic)</strong> – +1-2 k kr./md. før skat.</li>
              <li><strong>Tag controlling-, rapporterings- eller lønansvar</strong> – funktions­tillæg 1-3 k kr./md. før skat.</li>
              <li><strong>Forhandl resultat- eller projektbonus ved årsafslutning.</strong></li>
              <li><strong>Flyt til lav-skat kommune</strong> – kan øge nettolønnen 300-600 kr./md. uden ekstra timer.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Bogholder Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny bogholder efter skat?</p>
                <p>Omkring 18 500 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår kan jeg nå 25 000 kr. efter skat?</p>
                <p>Typisk efter 9-10 års erfaring eller med ledende bogholderrolle + funktions­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i løn efter skat?</p>
                <p>Nej – 12-15 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Kan bonus udløse topskat?</p>
                <p>Kun hvis samlet løn før skat overstiger ca. 63 000 kr./md.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger bogholder løn efter skat typisk mellem 18 000 og 27 000 kr., svarende til en løn før skat på 28 000 – 42 000 kr. Specialiserede kompetencer, bonus­ordninger og en lav kommuneskat er de hurtigste måder at løfte nettolønnen. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – så ved du præcist, hvad der lander på kontoen, når dagens bilag er afstemt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="https://www.salaryexpert.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SalaryExpert</a> – Bookkeeping Clerk, Denmark: 385 778 kr./år (≈ 32 148 kr./md.), København 411 359 kr./år</li>
              <li><a href="https://www.ca.dk/vaerktojer/lontjek/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">CA Løntjek</a> – bogholder løninterval 35 366 - 42 180 kr./md. (2025)</li>
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

export default BogholderLoenPage; 