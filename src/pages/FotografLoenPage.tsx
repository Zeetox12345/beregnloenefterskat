import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FotografLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 41000, netMin: 26500, netMax: 27000 },
    "Aarhus": { grossSalary: 38700, netMin: 25000, netMax: 25500 },
    "Odense": { grossSalary: 36000, netMin: 23500, netMax: 24000 },
    "Aalborg": { grossSalary: 35000, netMin: 22800, netMax: 23300 },
    "Esbjerg": { grossSalary: 34000, netMin: 22200, netMax: 22700 },
    "Randers": { grossSalary: 33000, netMin: 21600, netMax: 22100 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Entry-level assistent", grossSalary: 28000, netMin: 19000, netMax: 19500 },
    { type: "Fuldtidsfotograf (3–5 år)", grossSalary: 34000, netMin: 22500, netMax: 23000 },
    { type: "Senior fotograf / studieleder", grossSalary: 41000, netMin: 26500, netMax: 27000 },
    { type: "Top-tier reklame / mode (Kbh.)", grossSalary: 47000, netMin: 30500, netMax: 31000 }
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
        title="Fotograf Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad tjener en fotograf efter skat i 2025? Se lønniveauer før og efter skat – og brug beregneren til at finde din præcise nettoløn som fotograf i Danmark."
        keywords="fotograf løn efter skat, fotograf indkomst, fotograf løn, fotograf lønniveau, fotograf genbrug, fotograf royalty"
      />
      <Header />
      <PageTitle title="Fotograf Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Fotograf Løn Efter Skat 2025 – Fra Lukkerklik til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids fotograf (≈ 160 timer om måneden) kan i 2025 forvente en løn før skat på 28 000 – 47 000 kr. afhængigt af specialefelt, erfaring, geografi og salgsbonus. Det giver en fotograf løn efter skat på cirka 19 000 – 31 000 kr. pr. måned. Du kan tjekke dit præcise tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en fotograf løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b">Basisløn</td>
                    <td className="py-3 px-4 border-b">Gennemsnittet for fastansatte fotografer er ca. 38 700 kr./md. nationalt</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Geografi</td>
                    <td className="py-3 px-4 border-b">København betaler omtrent 41 000 kr./md. – 7 % over landsgns.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Erfaring & niche</td>
                    <td className="py-3 px-4 border-b">Entry-level ≈ 28 000 kr./md.; senior mode-/reklamefotograf ≈ 47 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Projekt- & rettigheds­bonus</td>
                    <td className="py-3 px-4 border-b">Redaktionel og kommerciel genbrug af billeder kan give 5 – 15 % oveni lønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Frilans vs. fastansat</td>
                    <td className="py-3 px-4 border-b">Freelance dagspriser 3 000 – 6 000 kr. (uden pension), men svingende mængde arbejde.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension 8 – 10 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og ses ikke i nettolønnen – men løfter totalpakken.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Fotograf Løn – Før & Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
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
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Fotograf Løn Før & Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
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
            <p className="text-sm text-gray-600 italic">
              * Nettobeløb beregnet med 8 % AM-bidrag, 4 650 kr. personfradrag og gennemsnitlig trækprocent (≈ 37 %).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior fotograf, København</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 41 000 kr.</li>
                <li><strong>AM-bidrag 8 % →</strong> 3 280 kr.</li>
                <li><strong>Skattepligtig indkomst →</strong> 37 720 kr.</li>
                <li><strong>Personfradrag →</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag →</strong> 33 070 kr.</li>
                <li><strong>A-skat (≈ 37 %) →</strong> 12 240 kr.</li>
                <li><strong>Fotograf løn efter skat ≈</strong> 26 800 kr.</li>
              </ul>
            </div>
            
            <p>
              Du kan ændre bruttobeløbet i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvordan det påvirker nettolønnen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Specialisér dig</strong> – produkt-, medicoteknisk eller high-end reklamefotografi betaler op til 15 % mere end generel portræt-/event.</li>
              <li><strong>Sælg licenser</strong> – kontinuerlig royalty for stock- og reklamebilleder giver stabil ekstraindtægt (beskattes som løn).</li>
              <li><strong>Tag lokum- eller nat-shoots</strong> – ulempe­tillæg løfter brutto­indtægten 18 – 45 %.</li>
              <li><strong>Forhandl IP-klausuler</strong> – fasthold delvis ophavsret og tag en højere upfront-betaling.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Fotograf Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nyuddannet fotograf efter skat?</p>
                <p>Ca. 19 500 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 30 000 kr. efter skat?</p>
                <p>Seniorrolle i København med reklame­projekter og royalty­indtægter.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller royalty i nettoløn?</p>
                <p>Ja, når den udbetales, beskattes den som almindelig indkomst.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej, 8 – 10 % indbetales før skat og vises ikke i udbetalt løn.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger Fotograf løn efter skat typisk mellem 19 000 og 31 000 kr. pr. måned, baseret på 28 000 – 47 000 kr. før skat. Specialisering, geografi og rettigheds­honorarer er de hurtigste knapper at dreje på for et større nettobeløb. Test dit eget scenarie i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der lander på kontoen, når lukkeren klapper.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Photographer&loc=Denmark&rtype=4&smsg=1" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SalaryExpert – Fotograf, Danmark</a></li>
              <li><a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Photographer&loc=Copenhagen,%20Denmark&rtype=4&smsg=1" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SalaryExpert – Fotograf, København</a></li>
              <li><a href="https://indkomsten.dk/hvad-tjener-en/fotograf/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Indkomsten.dk – Fotograf gennemsnitsløn</a></li>
              <li><a href="https://www.studentum.dk/job-loen/fotograf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">HORESTA/3F – Speaker-/fotoarbejde sats 2025</a></li>
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

export default FotografLoenPage; 