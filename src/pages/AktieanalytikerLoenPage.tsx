import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AktieanalytikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 58000, netMin: 36600, netMax: 37100 },
    "Aarhus": { grossSalary: 52000, netMin: 33000, netMax: 33500 },
    "Odense": { grossSalary: 48000, netMin: 30500, netMax: 31000 },
    "Aalborg": { grossSalary: 46000, netMin: 29200, netMax: 29700 },
    "Nationale gennemsnit": { grossSalary: 47000, netMin: 29800, netMax: 30300 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior Analyst (0–2 år)", grossSalary: 42000, netMin: 27000, netMax: 27500 },
    { type: "Analyst (CFA L1, 3–5 år)", grossSalary: 50000, netMin: 32000, netMax: 32500 },
    { type: "Senior Analyst (Lead)", grossSalary: 58000, netMin: 36600, netMax: 37100 },
    { type: "Vice President / Head of Research", grossSalary: 66000, netMin: 41500, netMax: 42000 }
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
        title="Aktieanalytiker Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad tjener en aktieanalytiker efter skat i 2025? Se løn før og efter skat, inkl. bonus og erfaring – og beregn din nettoløn med få klik."
        keywords="aktieanalytiker løn efter skat, equity research analyst løn, finansanalytiker løn, aktieanalytiker nettoløn, CFA løn Danmark"
      />
      <Header />
      <PageTitle title="Aktieanalytiker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Aktieanalytiker Løn Efter Skat 2025 – Tal, Tendenser & Trading Tips</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                <strong>TL;DR</strong> – En fuldtids aktieanalytiker (equity research analyst) kan i 2025 forvente en løn før skat på cirka 42 000 – 66 000 kr. pr. måned, alt efter erfaring, arbejdsplads og bonus. Det giver en aktieanalytiker løn efter skat på omtrent 27 000 – 42 000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer aktieanalytiker løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Basisløn</td>
                    <td className="py-3 px-4 border-b">Median ca. 42 000 kr./md. i København; gennemsnit 47 000 kr./md. nationalt. Seniorer i storbanker ligger 60 000 kr.+.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bonus & overskudsdeling</td>
                    <td className="py-3 px-4 border-b">10 – 40 % af års­gagen for toppresterende analytikere – beskattes som almindelig løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Certificeringer</td>
                    <td className="py-3 px-4 border-b">CFA-charter, SAA eller FRM kan give 3 000 – 5 000 kr./md. i funktions­tillæg.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Arbejdsplads</td>
                    <td className="py-3 px-4 border-b">Bulge-bracket banker og større pensionskasser betaler 5 – 12 % over niche-boutiques.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København +7 % over landsgennemsnit; provinsbyer 5 – 10 % lavere.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 17 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag indbetales før skat og ses ikke i nettolønnen.</td>
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
              * Estimater uden kirkeskat; forudsætter gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %. Bonus ikke indregnet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Aktieanalytiker Løn Før & Efter Skat 2025*</h2>
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
                      <td className="py-3 px-4 border-b text-sm text-gray-600">
                        {exp.type.includes("Junior") ? "Glassdoor" : 
                         exp.type.includes("CFA") ? "Randstad" :
                         exp.type.includes("Senior") ? "Salary Expert" : "Branchenorm"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              * 160,33 timers fuldtid; bonus ikke indregnet i tabellen.<br/>
              ** Nettotal med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior Analyst, København (58 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-medium">Post</td>
                      <td className="py-2 text-right">Beløb</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Løn før skat</td>
                      <td className="py-2 text-right">58 000 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">AM-bidrag 8 %</td>
                      <td className="py-2 text-right">4 640 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Skattepligtig indkomst</td>
                      <td className="py-2 text-right">53 360 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Personfradrag</td>
                      <td className="py-2 text-right">4 650 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Beskatningsgrundlag</td>
                      <td className="py-2 text-right">48 710 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">A-skat (≈ 37 %)</td>
                      <td className="py-2 text-right">18 000 kr.</td>
                    </tr>
                    <tr className="border-b font-bold bg-blue-50">
                      <td className="py-2 pr-4">Aktieanalytiker løn efter skat</td>
                      <td className="py-2 text-right">≈ 36 600 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic">
              Indtast blot din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit eksakte nettobeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire strategier til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Få CFA-charter</strong> – tredobbelt lønløft i bonus-poolen og +5 000 kr./md. i basis.</li>
              <li><strong>Skift til buy-side (pensionskasser/fonde)</strong> – 10 % højere basisløn, lavere men stabil bonus.</li>
              <li><strong>Forhandl deal-linked bonus</strong> baseret på stock-picks eller corporate-broking omsætning.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – kan give 600 kr./md. mere netto uden ekstra analyse.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Aktieanalytiker Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en junior aktieanalytiker efter skat?</p>
                <p>Ca. 27 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer jeg 40 000 kr. efter skat?</p>
                <p>Som VP/Head of Research med bonus eller i bulge-bracket bank.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej – 17 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Rammer bonus topskat?</p>
                <p>Ja, bonus beskattes som løn og kan udløse topskat over ~63 300 kr./md. før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger aktieanalytiker løn efter skat typisk mellem 27 000 og 42 000 kr. om måneden – baseret på 42 000 – 66 000 kr. før skat plus bonus. Certificeringer, arbejdsplads og performance-bonus er de hurtigste veje til et større nettobeløb. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad din stock-pitch reelt kaster af sig, når skatten er trukket.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <p className="text-center text-blue-800 font-medium">
                  Dette indlæg er udgivet i samarbejde med <a href="https://aktiebegynder.dk/" className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-200" target="_blank" rel="noopener noreferrer">Aktiebegynder.dk</a>
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://glassdoor.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Glassdoor – Equity Research Analyst, København: median 42 000 kr./md.</a></li>
              <li><a href="https://indkomsten.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Indkomsten.dk – Analytiker gennemsnit 47 500 kr./md.</a></li>
              <li><a href="https://salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Equity Research Analyst, København: 796 000 kr./år (≈ 66 000 kr./md.)</a></li>
              <li><a href="https://randstad.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Randstad / Djøf Lønstatistik – Analytiker lønniveau 42 000 – 55 000 kr./md. før skat.</a></li>
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

export default AktieanalytikerLoenPage; 