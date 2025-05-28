import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BlomsterbinderLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 28000, netMin: 18600, netMax: 19100 },
    "Aarhus": { grossSalary: 27000, netMin: 18000, netMax: 18500 },
    "Odense": { grossSalary: 26000, netMin: 17300, netMax: 17700 },
    "Aalborg": { grossSalary: 25000, netMin: 16700, netMax: 17100 },
    "Esbjerg": { grossSalary: 24000, netMin: 16100, netMax: 16500 },
    "Randers": { grossSalary: 23000, netMin: 15500, netMax: 15900 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (trin 1)", grossSalary: 23000, netMin: 15300, netMax: 15700 },
    { type: "3-5 år", grossSalary: 26000, netMin: 17300, netMax: 17700 },
    { type: "6-8 år + kursustillæg", grossSalary: 28000, netMin: 18600, netMax: 19100 },
    { type: "Senior / dekoratørleder", grossSalary: 32000, netMin: 20400, netMax: 21000 }
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
        title="Løn Efter Skat Som Blomsterbinder – Opdateret Guide 2025"
        description="Få overblik over blomsterbinder løn efter skat i 2025. Se eksempler med tillæg og erfaring – og beregn hvad du får udbetalt."
        keywords="blomsterbinder løn, blomsterbinder løn efter skat, blomsterdekoratør løn, florist løn, blomsterbutik løn, blomsterhandler løn"
      />
      <Header />
      <PageTitle title="Blomsterbinder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Blomsterbinder Løn Efter Skat 2025 – Buketter, Budget & Bundlinje</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids blomsterbinder (37 t/uge) kan i 2025 forvente en løn før skat på ca. 23 000 – 32 000 kr. pr. måned. Det svarer til en blomsterbinder løn efter skat på omtrent 15 000 – 21 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut. Tallene bygger på Studentum-statistik, overenskomstsatser fra 3F/Danske Anlægsgartnere samt SalaryExpert-data.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en blomsterbinder løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b">Timeløn i overenskomst</td>
                    <td className="py-3 px-4 border-b">172,06 kr./t + fagtillæg 3,20 kr. = 175,80 kr./t fra 1/3-2025 → ca. 28 200 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Branche & butikstype</td>
                    <td className="py-3 px-4 border-b">Høj gadeomsætning eller event-dekor giver 5-10 % mere end almindelige blomsterbutikker.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Erfaring & kursusbeviser</td>
                    <td className="py-3 px-4 border-b">Begravelses-, bryllups- og eksponeringsâkurser udløser tillæg i overenskomsten.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Vagter & sæson</td>
                    <td className="py-3 px-4 border-b">Aften/weekend i højsæson (december, marts-maj) giver +18-45 % genetillæg.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension (11 % + 3 %)</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og ses ikke i nettolønnen, men øger totallønspakken.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løntabel – Blomsterbinder Løn Efter Skat 2025*</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat**</th>
                    <th className="py-3 px-4 border-b text-left">Kilde</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp, index) => (
                    <tr 
                      key={exp.type} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{exp.type}</td>
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.
                      </td>
                      <td className="py-3 px-4 border-b">
                        {index === 0 && "Studentum"}
                        {index === 1 && "Studentum"}
                        {index === 2 && "Danske Anlægsgartnere"}
                        {index === 3 && "Salary Expert"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              * 160,33 timers fuldtidsnorm.<br />
              ** Nettotal beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Erfaren blomsterbinder, 28 000 kr. før skat</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-1"><strong>Løn før skat</strong></td>
                    <td className="py-1">28 000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1"><strong>AM-bidrag 8 %</strong></td>
                    <td className="py-1">2 240 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1"><strong>Skattepligtig indkomst</strong></td>
                    <td className="py-1">25 760 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1"><strong>Personfradrag</strong></td>
                    <td className="py-1">4 650 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1"><strong>Beskatningsgrundlag</strong></td>
                    <td className="py-1">21 110 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1"><strong>A-skat (≈ 35 %)</strong></td>
                    <td className="py-1">7 390 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1"><strong>Blomsterbinder løn efter skat</strong></td>
                    <td className="py-1">≈ 18 400 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>
              Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit nøjagtige nettobeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire tips til en højere blomsterbinder løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag begravelses- og bryllupskurser</strong> – fagtillæg og højere udsalgspris giver +1 000-2 000 kr./md. før skat.</li>
              <li><strong>Arbejd højsæson-weekender</strong> – genetillæg på op til 45 % løfter nettolønnen mærkbart.</li>
              <li><strong>Bliv butiks- eller dekoratørleder</strong> – ledelsestillæg +3-4 k kr./md. før skat.</li>
              <li><strong>Sælg abonnementsbuketter & events</strong> – provision på omsætning kan lægges oveni basislønnen.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Blomsterbinder Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-3 px-4 border-b text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Hvad tjener en ny blomsterbinder efter skat?</td>
                    <td className="py-3 px-4 border-b">Omkring 15 500 kr. pr. måned.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Hvordan når jeg 20 000 kr. efter skat?</td>
                    <td className="py-3 px-4 border-b">5+ års erfaring, fagtillæg og faste weekendvagter.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Tæller pension i nettoløn?</td>
                    <td className="py-3 px-4 border-b">Nej, 14 % indbetales før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Skal bonus og drikkepenge beskattes?</td>
                    <td className="py-3 px-4 border-b">Ja, de indberettes som A-indkomst og påvirker nettobeløbet.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger blomsterbinder løn efter skat typisk mellem 15 000 og 21 000 kr. pr. måned – svarende til 23 000 – 32 000 kr. før skat. Kurser, sæsontillæg og ledelsesansvar er de hurtigste veje til mere i hånden. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – og se, hvor meget der står på kontoen, når dagens sidste buket er bundet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.studentum.dk/job-loen/blomsterhandler" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Gennemsnitsløn for blomsterhandlere 34 371 kr.</a></li>
              <li><a href="https://dag.dk/wp-content/uploads/2025/04/loenforhold-og-betalingssatser-2025-2028.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F & Danske Anlægsgartnere – Overenskomstsatser 2025 (blomsterbinding 175,80 kr./t)</a></li>
              <li><a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Florist&loc=Copenhagen,%20Denmark&rtype=4&smsg=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Florist, Copenhagen: 371 770 kr./år (≈ 31 000 kr./md.)</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: 28-05-2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlomsterbinderLoenPage; 