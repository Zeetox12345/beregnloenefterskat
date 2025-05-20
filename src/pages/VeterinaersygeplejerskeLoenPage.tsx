import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const VeterinaersygeplejerskeLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Hovedstaden");
  
  // City-specific salary data
  const cityData = {
    "Hovedstaden": { grossSalary: 39500, netMin: 25400, netMax: 26000 },
    "Midtjylland": { grossSalary: 36000, netMin: 23400, netMax: 24000 },
    "Syddanmark": { grossSalary: 34000, netMin: 22100, netMax: 22700 },
    "Nordjylland": { grossSalary: 32000, netMin: 20800, netMax: 21300 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Elev (4. hovedforløb)", grossSalary: 25000, netMin: 16300, netMax: 16800 },
    { type: "Nyuddannet (< 2 år)", grossSalary: 29000, netMin: 18900, netMax: 19400 },
    { type: "3 – 5 år", grossSalary: 33000, netMin: 21400, netMax: 21900 },
    { type: "6 – 9 år + tillæg", grossSalary: 36000, netMin: 23400, netMax: 24000 },
    { type: "10+ år / teamleder", grossSalary: 40000, netMin: 25700, netMax: 26300 },
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
        title="Veterinærsygeplejerske Løn Efter Skat 2025 – Se Din Udbetaling"
        description="Veterinærsygeplejerske løn varierer med erfaring og vagter. Få et realistisk billede af din nettoløn i 2025 – og beregn dit præcise beløb online."
        keywords="veterinærsygeplejerske løn, veterinærsygeplejerske løn efter skat, vet sygeplejerske, dyresygeplejerske, dyresygeplejerske løn, VS løn, VSP løn, dyreklinikhospital løn"
      />
      <Header />
      <PageTitle title="Veterinærsygeplejerske Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Veterinærsygeplejerske Løn Efter Skat 2025 – fra pote­bandage til nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids veterinærsygeplejerske (37 t/uge) kan i 2025 typisk forvente en løn før skat på 29 000 – 40 000 kr. pr. måned – fra nyuddannet til erfaren team-leder. Det svarer til en veterinærsygeplejerske løn efter skat på ca. 19 000 – 26 000 kr. afhængigt af kommune, tillæg og anciennitet. Tjek dit præcise nettobeløb i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en veterinærsygeplejerske løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Lønfaktor</th>
                    <th className="py-3 px-4 text-left border-b">Hvorfor det påvirker netto­beløbet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Grundløn & anciennitet</td>
                    <td className="py-3 px-4 border-b">December-2024-statistik viser 30 459 kr. før skat for &lt;1 års erfaring og 39 775 kr. for 20+ år <a href="https://vspnet.dk/loenstatistik-for-december-2024/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Veterinærsygeplejerskernes Fagforening</a>.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Arbejdssted</td>
                    <td className="py-3 px-4 border-b">Universitets­hospitaler og større dyre­hospitaler betaler op til 39 500 kr./md. før skat <a href="https://uniavisen.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Uniavisen – Uafhængig af ledelsen</a>.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Ulempe- & weekend­tillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, nat +30 %, weekend +45 % kan løfte nettolønnen 800 – 1 500 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Certifikater</td>
                    <td className="py-3 px-4 border-b">Anæstesi, røntgen + CT eller tand­kirurgi giver 1 000 – 2 000 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Pension 12 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og ses ikke i nettolønnen.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spænder 0,8 pct.point ⇒ ± ≈ 600 kr./md. i veterinærsygeplejerske løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – typiske niveauer 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Erfaring / Rolle</th>
                    <th className="py-3 px-4 text-left border-b">Løn før skat</th>
                    <th className="py-3 px-4 text-left border-b">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 border-b">{item.type}</td>
                      <td className="py-3 px-4 border-b">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-3 px-4 border-b">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-8">
              * Estimeret uden kirke­skat; AM-bidrag 8 % og gennemsnitlig kommune­sats 24,9 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionale intervaller (erfaren VS-sygeplejerske, 160 t/md.)</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Region</th>
                    <th className="py-3 px-4 text-left border-b">Løn før skat</th>
                    <th className="py-3 px-4 text-left border-b">Efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((example, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 border-b">{example.city}</td>
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString()} kr.</td>
                      <td className="py-3 px-4 border-b">{example.netMin.toLocaleString()} – {example.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-8">
              Kilder: Studentum gennemsnit 36 065 kr./md. <a href="https://www.studentum.dk/job-loen/veterinaersygeplejerske" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Studentum</a> · SalaryExpert provincial data 248 k kr./år ≈ 20,7 k kr./md. <a href="https://www.salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Salary Expert</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – 6 års erfaring, natvagt + weekend, Syddanmark</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Løn før skat: 36 000 kr.</li>
              <li>AM-bidrag 8 %: 2 880 kr.</li>
              <li>Skattepligtig indkomst: 33 120 kr.</li>
              <li>Personfradrag: 4 650 kr.</li>
              <li>Beskatnings­grundlag: 28 470 kr.</li>
              <li>A-skat (~ 37 %): 10 540 kr.</li>
              <li>Veterinærsygeplejerske løn efter skat ≈ 22 580 kr.</li>
            </ul>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire greb til højere nettoløn</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Løftestrategi</th>
                    <th className="py-3 px-4 text-left border-b">Effekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Tag nat- og weekend­vagter</td>
                    <td className="py-3 px-4 border-b">Ulempe­tillæg løfter netto op til 1 500 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Certificér dig i anæstesi eller dental</td>
                    <td className="py-3 px-4 border-b">Giver typisk 1 – 2 k ekstra før skat.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Skift til universitets­hospital eller special­klinik</td>
                    <td className="py-3 px-4 border-b">Op til 10 % højere grundløn.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Vælg lav-skat kommune</td>
                    <td className="py-3 px-4 border-b">Kan give ≈ 600 kr. mere efter skat hver eneste måned.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Veterinærsygeplejerske Løn</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Spørgsmål</th>
                    <th className="py-3 px-4 text-left border-b">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Hvad tjener en ny VS-sygeplejerske efter skat?</td>
                    <td className="py-3 px-4 border-b">Ca. 19 000 kr./md. <a href="https://vspnet.dk/loenstatistik-for-december-2024/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Veterinærsygeplejerskernes Fagforening</a></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Hvornår når jeg 25 000 kr. netto?</td>
                    <td className="py-3 px-4 border-b">Typisk med 8+ års erfaring + vagttillæg og certifikater.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Indgår pension i nettoløn?</td>
                    <td className="py-3 px-4 border-b">Nej, pensionen indbetales før skat.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Kan overarbejde give topskat?</td>
                    <td className="py-3 px-4 border-b">Kun hvis brutto­løn {'>'}  63 000 kr./md. – sjældent i denne branche.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p className="mb-8">
              I 2025 ligger veterinærsygeplejerske løn efter skat oftest mellem 19 000 og 26 000 kr. Anciennitet, certifikater, vagttillæg og kommuneskat er de største løftestænger for højere netto. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad din omsorg for dyrene konkret giver på bank­kontoen hver måned.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc ml-6 mb-8">
              <li>Studentum.dk – gennemsnitsløn 36 065 kr./md. <a href="https://www.studentum.dk/job-loen/veterinaersygeplejerske" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Studentum</a></li>
              <li>VSPnet lønstatistik dec. 2024 – 30 459 kr. (ny) til 39 775 kr. (20 år) før skat <a href="https://vspnet.dk/loenstatistik-for-december-2024/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Veterinærsygeplejerskernes Fagforening</a></li>
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

export default VeterinaersygeplejerskeLoenPage; 