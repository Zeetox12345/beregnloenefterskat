import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const DyrepasserLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 31000, netMin: 20200, netMax: 20600 },
    "Aarhus": { grossSalary: 28000, netMin: 18300, netMax: 18700 },
    "Odense": { grossSalary: 26000, netMin: 17000, netMax: 17400 },
    "Aalborg": { grossSalary: 25000, netMin: 16400, netMax: 16800 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Lærling (voksen)", grossSalary: 20000, netMin: 14000, netMax: 14400 },
    { type: "Nyuddannet keeper", grossSalary: 24000, netMin: 16000, netMax: 16500 },
    { type: "Keeper 3-5 år", grossSalary: 28000, netMin: 18600, netMax: 19100 },
    { type: "Senior zoologisk have", grossSalary: 33000, netMin: 22000, netMax: 22500 },
    { type: "Specialist / København", grossSalary: 38000, netMin: 25100, netMax: 25600 },
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
        title="Dyrepasser Løn Efter Skat 2025 – Se Din Reelle Nettoløn"
        description="Hvad tjener en dyrepasser efter skat i 2025? Se realistiske lønintervaller før og efter skat – og brug beregn løn efter skat til at finde dit præcise nettobeløb."
        keywords="dyrepasser løn, dyrepasser løn efter skat, zookeeper løn, dyreparks løn, dyrepleje, zoologisk have løn"
      />
      <Header />
      <PageTitle title="Dyrepasser Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Dyrepasser Løn Efter Skat 2025 – Fra Fodring til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids dyrepasser (zookeeper) kan i 2025 forvente en løn før skat på cirka 24 000 – 38 000 kr. pr. måned, afhængigt af om du passer kæledyrskarantæne, zoologiske anlæg eller forsknings­faciliteter. Det svarer til en dyrepasser løn efter skat på omtrent 16 000 – 25 000 kr. Få dit eksakte tal på få sekunder i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, og test både lærlinge- og senior­niveauer.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en dyrepasser løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Lønfaktor</th>
                    <th className="py-3 px-4 text-left border-b">Hvorfor det påvirker beløbet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Grundløn</td>
                    <td className="py-3 px-4 border-b">Indkomsten.dk angiver ca. 26 500 kr./md. som gennemsnit for dyrepassere <a href="https://indkomsten.dk/hvad-tjener-en/dyrepasser/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">indkomsten.dk</a></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Geografi</td>
                    <td className="py-3 px-4 border-b">Københavnske zookeepere tjener ca. 7 % mere (≈ 31 000 kr./md.) end lands­gennemsnittet <a href="https://www.salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salaryexpert.com</a></td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Erfaring & speciale</td>
                    <td className="py-3 px-4 border-b">Senior keeper i større zoologisk have: 38 000 kr./md.; entry-level i mindre park: 24 000 kr./md. <a href="https://worldsalaries.com/average-zoo-keeper-salary-in-denmark/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">worldsalaries.com</a>, <a href="https://www.studentum.dk/job-loen/dyrepasser" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">studentum.dk</a></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Ulempe- & weekendtillæg</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, nat +30 %, weekend +45 % – især i akvarier og eksotarium med døgn­pasning</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Certifikater</td>
                    <td className="py-3 px-4 border-b">Giftslange- eller dykkerbevis kan give 1 000-2 000 kr./md. ekstra før skat</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension 10 – 12 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og ses ikke i nettolønnen, men løfter den samlede pakke</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løntabel – Dyrepasser 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Rolle / Erfaring</th>
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
              * Nettotal beregnet med AM-bidrag 8 %, person­fradrag 4 650 kr. og typisk træk­procent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Keeper 3-5 år</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Post</th>
                    <th className="py-3 px-4 text-left border-b">Beløb</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Løn før skat</td>
                    <td className="py-3 px-4 border-b">28 000 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">AM-bidrag 8 %</td>
                    <td className="py-3 px-4 border-b">2 240 kr.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Skattepligtig indkomst</td>
                    <td className="py-3 px-4 border-b">25 760 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Personfradrag</td>
                    <td className="py-3 px-4 border-b">4 650 kr.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Beskatningsgrundlag</td>
                    <td className="py-3 px-4 border-b">21 110 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">A-skat (≈ 37 %)</td>
                    <td className="py-3 px-4 border-b">7 810 kr.</td>
                  </tr>
                  <tr className="bg-primary/10">
                    <td className="py-3 px-4 border-b font-semibold">Dyrepasser løn efter skat</td>
                    <td className="py-3 px-4 border-b font-semibold">≈ 18 000 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-8">
              Test din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at hæve nettolønnen</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Strategi</th>
                    <th className="py-3 px-4 text-left border-b">Beskrivelse</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Tag special­beviser</td>
                    <td className="py-3 px-4 border-b">fx CITES, giftslanger eller dykning til akvarie­arbejde.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Søg weekend- og natvagter</td>
                    <td className="py-3 px-4 border-b">genetillæg på 18-45 % ryger direkte i bruttolønnen.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Bliv Team Lead / Seniorkeeper</td>
                    <td className="py-3 px-4 border-b">ansvar for fodrings­planer og frivillig­korps giver funktions­tillæg.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Opsæt foto- og event­pakker</td>
                    <td className="py-3 px-4 border-b">ekstra honorar for publikum­sarrangementer beskattes som løn, men løfter nettobeløbet.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Dyrepasser Løn Efter Skat</h2>
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
                    <td className="py-3 px-4 border-b">Hvad tjener en ny dyrepasser efter skat?</td>
                    <td className="py-3 px-4 border-b">Omkring 16 000 kr./md.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Hvordan når jeg 25 000 kr. efter skat?</td>
                    <td className="py-3 px-4 border-b">Seniorrolle i stor dyrepark + nat/weekend­tillæg og niche­certifikater</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 border-b">Tæller honorar for guidede ture i nettolønnen?</td>
                    <td className="py-3 px-4 border-b">Ja, det indberettes som A-indkomst og beskattes.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Indgår pension i nettoløn?</td>
                    <td className="py-3 px-4 border-b">Nej – 10-12 % arbejdsgiver­pension indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p className="mb-6">
              I 2025 ligger dyrepasser løn efter skat typisk mellem 16 000 og 25 000 kr. om måneden, baseret på 24 000 – 38 000 kr. før skat. Specialisering, vagttillæg og storby­placering er de vigtigste løftestænger. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se det nøjagtige beløb, der tikker ind, når foderplanerne er udarbejdet og staldene er rengjort.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc ml-6 mb-6 text-sm space-y-2">
              <li>Studentum.dk – Gennemsnitsløn for dyrepasser 41 798 kr. <a href="https://www.studentum.dk/job-loen/dyrepasser" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">studentum.dk</a></li>
              <li>SalaryExpert – Zookeeper Danmark 292 877 kr./år (≈ 24 400 kr./md.) <a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Zookeeper&loc=Denmark&rtype=4&smsg=1" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salaryexpert.com</a></li>
              <li>SalaryExpert – Zookeeper København 312 207 kr./år (≈ 26 000 kr./md.) <a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Zookeeper&loc=Copenhagen,%20Denmark&rtype=4&smsg=1" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salaryexpert.com</a></li>
              <li>Indkomsten.dk – Dyrepasser ca. 26 500 kr./md. <a href="https://indkomsten.dk/hvad-tjener-en/dyrepasser/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">indkomsten.dk</a></li>
              <li>WorldSalaries.com – Zookeeper gennemsnit 31 566 kr./md., spænd 15 300-49 675 kr. <a href="https://worldsalaries.com/average-zoo-keeper-salary-in-denmark/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">worldsalaries.com</a></li>
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

export default DyrepasserLoenPage; 