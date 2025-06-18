import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const KoerelaererLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");

  // City-specific salary data (midpoints of given ranges)
  const cityData = {
    "København": { grossSalary: 41500, netMin: 19000, netMax: 33000 },
    "Aarhus": { grossSalary: 39500, netMin: 18500, netMax: 31500 },
    "Odense": { grossSalary: 38000, netMin: 17500, netMax: 30000 },
    "Aalborg": { grossSalary: 36500, netMin: 17000, netMax: 29000 },
    "Esbjerg": { grossSalary: 36000, netMin: 16500, netMax: 28000 }
  } as const;

  // Experience-based salary progression
  const experienceData = [
    { type: "Ny kørelærer (B-bil)", grossSalary: 28000, netMin: 18000, netMax: 18500 },
    { type: "3-5 år + MC/lastbil", grossSalary: 33000, netMin: 21000, netMax: 21500 },
    { type: "Selvstændig skoleejer", grossSalary: 40000, netMin: 25500, netMax: 26000 },
    { type: "Senior instruktør, Kbh. (flere klasser)", grossSalary: 50000, netMin: 31000, netMax: 31500 }
  ] as const;

  const cityExamples = useMemo(() => {
    return Object.entries(cityData).map(([city, data]) => ({
      city,
      grossSalary: data.grossSalary,
      netMin: data.netMin,
      netMax: data.netMax
    }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO
        title="Kørelærer Løn Efter Skat 2025 – Se Din Nettoløn Her"
        description="Hvad er en kørelærer løn efter skat i 2025? Typisk 18 000 – 31 500 kr. udbetalt – før skat 28 000 – 50 000 kr. Beregn din præcise nettoløn hurtigt på beregn løn efter skat."
        keywords="kørelærer løn efter skat, kørelærer nettoløn, kørelærer løn 2025, driving instructor løn"
      />
      <Header />
      <PageTitle title="Kørelærer Løn Efter Skat 2025" />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Kørelærer Løn Efter Skat 2025 – Gear op for Nettolønnen 💰</h1>

            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids kørelærer (37 t/uge) tjener i 2025 typisk 28&nbsp;000 – 50&nbsp;000 kr. før skat – afhængigt af om du er fastansat på køreskole, underviser på AMU/UNG eller driver egen skole. Det giver en kørelærer løn efter skat på cirka 18&nbsp;000 – 31&nbsp;500 kr. Vil du kende dit præcise tal? Tast din bruttoløn ind i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker kørelærer løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b">Gennemsnit ca. 33&nbsp;000 kr./md. – svinger 20&nbsp;000 – 60&nbsp;000 kr. alt efter ansættelsesform ( <a href="https://amujuul.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">amujuul.dk</a> )</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring &amp; kørekort-klasser</td>
                    <td className="py-3 px-4 border-b">MC-, lastbil- og buscertifikat giver 2&nbsp;000 – 5&nbsp;000 kr. ekstra pr. måned ( <a href="https://dekra.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">dekra.dk</a> )</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Arbejdstimer</td>
                    <td className="py-3 px-4 border-b">Mange kørelærere arbejder &gt; 37 t/uge – ekstra lektioner faktureres til 375-450 kr./t</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus/provision</td>
                    <td className="py-3 px-4 border-b">Ejer du egen skole, øger beståelsesprocent &amp; elevvolumen indtjeningen markant ( <a href="https://dekra.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">dekra.dk</a> )</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">Storkøbenhavn aflønner i snit ca. 7&nbsp;% højere end landsgennemsnittet ( <a href="https://salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">salaryexpert.com</a> )</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 12-14&nbsp;%</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag indbetales før skat – indgår ikke i "løn efter skat"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Kørelærer</h2>
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
                      <td className="py-3 px-4 border-b">{exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              * Nettotal beregnet med 8&nbsp;% AM-bidrag, personfradrag 4&nbsp;650 kr. og trækprocent 37&nbsp;%. Justér i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> hvis din kommunesats afviger.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Typisk løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">≈ Løn efter skat**</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((example) => (
                    <tr
                      key={example.city}
                      className={`hover:bg-gray-50 ${example.city === selectedCity ? "bg-blue-50" : ""}`}
                      onClick={() => setSelectedCity(example.city)}
                    >
                      <td className="py-3 px-4 border-b">{example.city}</td>
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")}&nbsp;kr.</td>
                      <td className="py-3 px-4 border-b">{example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")}&nbsp;kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              ** Nettointervaller beregnet som ovenfor + lokale kommuneskatter. Brug gerne egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et helt præcist resultat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Kørelærer med MC-licens (Aarhus)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 33&nbsp;000 kr.</li>
                <li><strong>AM-bidrag 8&nbsp;%:</strong> 2&nbsp;640 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 30&nbsp;360 kr.</li>
                <li><strong>Personfradrag:</strong> 4&nbsp;650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 25&nbsp;710 kr.</li>
                <li><strong>A-skat (≈ 37&nbsp;%):</strong> 9&nbsp;510 kr.</li>
                <li><strong>Kørelærer løn efter skat ≈</strong> 22&nbsp;200 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Udvid undervisningsklasser</strong> – tag efteruddannelse til MC, lastbil eller bus; giver +2-5&nbsp;k før skat.</li>
              <li><strong>Planlæg aften- og weekendhold</strong> – høj efterspørgsel → flere timer &amp; højere timepris.</li>
              <li><strong>Øg beståelsesprocenten</strong> – mange skoler giver bonus ved &gt; 90&nbsp;% førstegangsbåeståelse.</li>
              <li><strong>Vælg lav-skat-kommune</strong> – forskellen fra 23,5&nbsp;% til 26,3&nbsp;% kan give 600-800 kr./md. ekstra netto.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Kørelærer Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en ny kørelærer efter skat?</p>
                <p>Ca.&nbsp;18&nbsp;000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 30&nbsp;000 kr. efter skat?</p>
                <p>Ja – med flere kørekort-klasser, storbyløn og 40-45 t/uge.</p>
              </div>
              <div>
                <p className="font-semibold">Er ekstra lektioner skattepligtige?</p>
                <p>Ja, de beskattes som normal A-indkomst.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettolønnen?</p>
                <p>Nej – 12-14&nbsp;% pension indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger kørelærer løn efter skat typisk mellem 18&nbsp;000 og 31&nbsp;500 kr. pr. måned, svarende til 28&nbsp;000 – 50&nbsp;000 kr. før skat. Antal undervisningsklasser, arbejdstimer og geografi er de hurtigste gear at skifte for at få mere i hånden. Prøv dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der lander på kontoen, når sidste køreprøve er bestået.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://amujuul.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AMU Juul – "Hvad tjener en kørelærer?" (maj 2025)</a></li>
              <li><a href="https://salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Driving Instructor, Denmark (2025)</a></li>
              <li><a href="https://salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Driving Instructor, Driving School (2025)</a></li>
              <li><a href="https://paylab.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Paylab – 80 % af kørelærere ligger 18&nbsp;793 – 48&nbsp;467 kr./md. brutto</a></li>
              <li><a href="https://dekra.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DEKRA – Kørelærer løn, selvstændig vs. ansat (2025)</a></li>
              <li><a href="https://salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Car Driver, København (+7&nbsp;% over landsgennemsnit)</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat Top 20 (2025)</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Oversigt over kommuneskatter 2025</a></li>
              <li><a href="https://cepos.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CEPOS – Spændet i kommuneskat 2025 (23,4 – 26,3&nbsp;%)</a></li>
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

export default KoerelaererLoenPage; 