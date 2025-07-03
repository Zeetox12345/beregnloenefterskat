import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AdvokatfuldmaegtigLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data (midpoints of typical spænd)
  const cityData = {
    "København": { grossSalary: 54000, netMin: 28000, netMax: 40000 },
    "Aarhus": { grossSalary: 51000, netMin: 28000, netMax: 37000 },
    "Odense": { grossSalary: 48500, netMin: 26000, netMax: 35000 },
    "Aalborg": { grossSalary: 47000, netMin: 26000, netMax: 34000 },
    "Esbjerg": { grossSalary: 45500, netMin: 25000, netMax: 33000 },
  } as const;

  // Experience-based salary progression
  const experienceData = [
    { type: "1. år, regionalt kontor", grossSalary: 42000, netMin: 26000, netMax: 26500 },
    { type: "2.–3. år, mellemstort kontor", grossSalary: 48000, netMin: 30000, netMax: 31000 },
    { type: "3. år, storby + bonus", grossSalary: 55000, netMin: 34000, netMax: 34500 },
    { type: "3. år, Big-Law CPH (M&A)", grossSalary: 60000, netMin: 38000, netMax: 38500 },
  ] as const;

  const cityExamples = useMemo(() => {
    return Object.entries(cityData).map(([city, data]) => ({
      city,
      grossSalary: data.grossSalary,
      netMin: data.netMin,
      netMax: data.netMax,
    }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Advokatfuldmægtig Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en advokatfuldmægtig løn efter skat i 2025? Typisk 26 000 – 38 000 kr. udbetalt – før skat 42 000 – 60 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="advokatfuldmægtig løn efter skat, advokatfuldmægtig nettoløn, advokatfuldmægtig 2025, big law løn, advokatfuldmægtig bonus"
      />
      <Header />
      <PageTitle title="Advokatfuldmægtig Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Advokatfuldmægtig Løn Efter Skat 2025 – Fra Sagsmappe til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids advokatfuldmægtig (37 t/uge) får i 2025 normalt 42 000 – 60 000 kr. før skat – afhængigt af kontorstørrelse, geografi og bonus. Det svarer til en advokatfuldmægtig løn efter skat på ca. 26 000 – 38 000 kr. Vil du kende dit præcise nettobeløb? Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker advokatfuldmægtig løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b">Gennemsnit ca. 47 500 kr./md. for fuldmægtige på landsplan <br/> <em>indkomsten.dk</em></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kontorstørrelse</td>
                    <td className="py-3 px-4 border-b">“Big-Law” i København betaler 8 – 12 % over regionale kontorer <br/> <em>djoef.dk</em></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus &amp; fakturérbare timer</td>
                    <td className="py-3 px-4 border-b">5 – 20 % af årslønnen, udbetales for &gt; 140 billable hours/md. <br/> <em>djoef.dk</em></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Speciale</td>
                    <td className="py-3 px-4 border-b">M&amp;A, bank &amp; finans giver 3 000 – 6 000 kr./md. ekstra</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">Storkøbenhavn ligger ≈ 7 % over landsgennemsnittet <br/> <em>salaryexpert.com</em></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 15 – 17 %</td>
                    <td className="py-3 px-4 border-b">Betales før skat – vises ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Advokatfuldmægtig</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">År i fuldmægtigtiden / rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">≈ Løn efter skat*</th>
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
            <p className="text-sm text-gray-600 italic">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %. <br/>
              Kilder: indkomsten.dk, salaryexpert.com
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / Region</th>
                    <th className="py-3 px-4 border-b text-left">Typisk løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">≈ Løn efter skat</th>
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
            <p className="text-sm text-gray-600 italic">
              (Beregnet med samme metode som ovenfor; kun kommunesatsen varierer.)
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – 2.-års advokatfuldmægtig i Aarhus</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 48 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 840 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 44 160 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 39 510 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 14 620 kr.</li>
                <li><strong>Advokatfuldmægtig løn efter skat ≈</strong> 29 500 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Specialisér dig i højbetalende områder</strong> (M&amp;A, bank &amp; finans, IP).</li>
              <li><strong>Skub på fakturérbare timer</strong> – bonus trigges ofte ved &gt; 140 t/md.</li>
              <li><strong>Vælg storbykontor med high-end klienter</strong> – fastlønnen er typisk 8 – 12 % højere.</li>
              <li><strong>Lavere kommuneskat</strong> kan øge nettolønnen &gt; 700 kr./md. mellem højeste og laveste sats.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Advokatfuldmægtig Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget får en 1.-års fuldmægtig udbetalt?</p>
                <p>Cirka 26 000 kr./md. efter skat.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 40 000 kr. netto?</p>
                <p>Ja – som 3.-års i CPH med høj bonus og mange timer.</p>
              </div>
              <div>
                <p className="font-semibold">Beskattes bonus som løn?</p>
                <p>Ja, bonus beskattes som A-indkomst.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettolønnen?</p>
                <p>Nej – 15 – 17 % indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger advokatfuldmægtig løn efter skat typisk mellem 26 000 og 38 000 kr. pr. måned, svarende til 42 000 – 60 000 kr. før skat. Kontorstørrelse, speciale og bonusmodel er de vigtigste løftestænger. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> til at se præcis, hvad der tikker ind på kontoen, når timesedlen er godkendt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Indkomsten.dk – Gennemsnitsløn for advokatfuldmægtige 47 500 kr./md.</li>
              <li>Djøf – Løn og vilkår i advokatbranchen (fuldmægtig vs. advokat)</li>
              <li>SalaryExpert – Lawyer løn København (+7 % over landsgennemsnit)</li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: juli 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvokatfuldmaegtigLoenPage; 