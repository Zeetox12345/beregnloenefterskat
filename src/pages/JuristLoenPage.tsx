import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const JuristLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 58000, netMin: 37200, netMax: 38000 },
    "Aarhus": { grossSalary: 55000, netMin: 35300, netMax: 36100 },
    "Odense": { grossSalary: 52000, netMin: 33300, netMax: 34000 },
    "Aalborg": { grossSalary: 50000, netMin: 32100, netMax: 32800 },
    "Esbjerg": { grossSalary: 48000, netMin: 31200, netMax: 31900 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Graduate / cand.jur. (0-1 år)", grossSalary: 42000, netMin: 27300, netMax: 27900 },
    { type: "Advokatfuldmægtig (2-3 år)", grossSalary: 47000, netMin: 30100, netMax: 30700 },
    { type: "Jurist (4-6 år)", grossSalary: 53000, netMin: 33200, netMax: 33900 },
    { type: "Seniorjurist (7-9 år)", grossSalary: 60000, netMin: 38000, netMax: 38600 },
    { type: "Chefkonsulent / Legal Manager (10-12 år)", grossSalary: 68000, netMin: 42000, netMax: 42700 },
    { type: "Head of Legal / Partner (13+ år)", grossSalary: 85000, netMin: 51500, netMax: 52300 }
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
        title="Jurist Løn Efter Skat – Hvad Får Du Udbetalt i 2025?"
        description="Se hvor meget jurister i Danmark får udbetalt efter skat i 2025. Sammenlign løn før og efter skat baseret på sektor, erfaring og by."
        keywords="jurist løn efter skat, jurist nettoløn, cand.jur løn, jurist indkomst, juridisk rådgiver løn"
      />
      <Header />
      <PageTitle title="Jurist Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Jurist Løn Efter Skat 2025 – Alt du skal vide om nettoløn, tillæg og karrieretrin</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat jurist kan i 2025 som hovedregel forvente løn før skat på 42 000 – 60 000 kr. pr. måned. Efter arbejdsmarkedsbidrag og almindelig A-skat svarer det til en jurist løn efter skat på cirka 27 000 – 38 000 kr. Dit præcise niveau afhænger især af sektor (stat, kommune, advokatkontor, erhvervsliv), anciennitet, bonusordninger og bopælskommune. Brug gerne en <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit helt personlige tal på under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger jurist løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b">Staten og kommuner følger typisk Djøf-overenskomster, mens private virksomheder lønner individuelt – ofte højere før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Sektor</td>
                    <td className="py-3 px-4 border-b">Advokat- og konsulenthuse samt corporate legal betaler 5-15 % over det offentlige, men med større bonus-andel.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & omsætning</td>
                    <td className="py-3 px-4 border-b">Performance-bonus, faktureringsmål og resultatløn kan lægge 5-20 % oven i årslønnen; beskattes som almindelig løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Specialisering</td>
                    <td className="py-3 px-4 border-b">GDPR, M&A, compliance eller skatte­ret giver funktions­tillæg på 2 000 – 5 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 17 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag trækkes før skat og øger den samlede pakke markant.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spænder ± 0,8 pct.point – ca. ± 700 kr./md. i jurist løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – byoversigt 2025</h2>
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
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              * Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karriere­trappen – jurist løn før og efter skat</h2>
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
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Odense, seniorjurist</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 55 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 4 400 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 50 600 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 45 950 kr.</li>
                <li><strong>A-skat (~ 38 %):</strong> 17 460 kr.</li>
                <li><strong>Jurist løn efter skat ≈</strong> 33 140 kr.</li>
              </ul>
            </div>
            <p>
              Test andre kommunesatser eller bonusscenarier i en <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit præcise resultat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire strategier til højere jurist nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Specialiser dig i højværdi-områder</strong> – fx M&A, ESG-compliance eller fintech-regulering; typisk +5-10 % før skat.</li>
              <li><strong>Forhandl bonus koblet til omsætningsmål</strong> – især relevant i advokatbranchen.</li>
              <li><strong>Skift til privat sektor eller international virksomhed</strong> – giver ofte højere løn før skat og større pensions­bidrag.</li>
              <li><strong>Vælg lav-skat kommune</strong> – op til 700 kr. ekstra i jurist løn efter skat hver måned.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Jurist Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nyuddannet jurist efter skat?</p>
                <p>Cirka 27 000 – 28 000 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår runder man 40 000 kr. efter skat?</p>
                <p>Typisk som senior eller chefkonsulent med bonus – omkring løn før skat 63 000 kr.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension med i løn efter skat?</p>
                <p>Nej. Arbejdsgiverbetalt pension (ca. 17 %) indbetales før skat og fremgår ikke af nettolønnen.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan påvirker bonus topskat?</p>
                <p>Bonus beskattes som normal indkomst og kan udløse topskat, hvis samlet månedsløn før skat overstiger ca. 63 000 kr.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger jurist løn efter skat typisk mellem 27 000 og 38 000 kr. – afhængigt af sektor, erfaring, bonus og kommuneskatte­sats. Specialisering, effektiv forhandling og bopæl i en lav-skat kommune er de hurtigste veje til en højere nettoløn. Indtast dine egne tal i en <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget din juridiske ekspertise realt lands på kontoen hver måned.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://djoef.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Djøf Lønstatistik 2025 – Jurister & advokatfuldmægtige</a></li>
              <li><a href="https://www.jobindex.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex Lønindex – Juridiske stillinger, maj 2025</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommunesatser 2025</a></li>
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

export default JuristLoenPage; 