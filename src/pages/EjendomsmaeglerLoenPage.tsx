import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const EjendomsmaeglerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 50000, netMin: 31800, netMax: 32500 },
    "Aarhus": { grossSalary: 47000, netMin: 29700, netMax: 30300 },
    "Odense": { grossSalary: 44000, netMin: 28000, netMax: 28600 },
    "Aalborg": { grossSalary: 42000, netMin: 26800, netMax: 27300 },
    "Esbjerg": { grossSalary: 41000, netMin: 26100, netMax: 26600 },
    "Randers": { grossSalary: 41000, netMin: 26100, netMax: 26600 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Trainee (0‑2 år)", grossSalary: 25000, netMin: 17000, netMax: 18000 },
    { type: "Junior mægler (3‑5 år)", grossSalary: 32000, netMin: 21800, netMax: 22400 },
    { type: "Erfaren mægler (6‑8 år)", grossSalary: 38000, netMin: 25500, netMax: 26000 },
    { type: "Senior / filialleder (9‑11 år)", grossSalary: 50000, netMin: 31800, netMax: 32500 },
    { type: "Partner / medejer (10+ år)", grossSalary: 70000, netMin: 45000, netMax: 46000 }
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
        title="Ejendomsmægler Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Ejendomsmægler løn efter skat 2025: Realistiske nettoløn-estimater med provision og bonus. Beregn dit personlige udbetalingstal hurtigt online."
        keywords="ejendomsmægler løn efter skat 2025, ejendomsmægler indkomst, provision ejendomsmægler, ejendomsmægler startløn, ejendomsmægler nettoløn"
      />
      <Header />
      <PageTitle title="Ejendomsmægler Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Ejendomsmægler Løn Efter Skat 2025 – Fra Salgsopstilling til Saldo 🏠💸</h1>
            <p className="text-gray-600 italic mb-6">(Opdateret maj 2025 med de nyeste løntal og skattesatser)</p>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids ejendomsmægler løn efter skat ligger i 2025 typisk på ≈ 18 000 – 35 000 kr. pr. måned. Spændet skyldes især provision, by, erfaring og privat bilordning. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad din næste lønseddel lander på – efter skat.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Hvor kommer pengene fra?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Komponent</th>
                    <th className="py-3 px-4 border-b text-left">Hvad er det?</th>
                    <th className="py-3 px-4 border-b text-left">Typisk andel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Fast grundløn</td>
                    <td className="py-3 px-4 border-b">20‑35 t.kr./md. afhængigt af kæde & anciennitet</td>
                    <td className="py-3 px-4 border-b">50‑70 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Provision</td>
                    <td className="py-3 px-4 border-b">1‑3 % af salgs­honoraret (ofte 8‑12 % af mægler­firmaets brutto­indtægt)</td>
                    <td className="py-3 px-4 border-b">10‑40 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Bonus/henvisninger</td>
                    <td className="py-3 px-4 border-b">Lån, forsikring, energimærke, ind­boaftale</td>
                    <td className="py-3 px-4 border-b">0‑10 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Firmabil / kørsels­godtgørelse</td>
                    <td className="py-3 px-4 border-b">Beskattes som fri bil</td>
                    <td className="py-3 px-4 border-b">–</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Pension (8‑12 %)</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat – sænker skattegrundlaget</td>
                    <td className="py-3 px-4 border-b">–</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 italic">
              Fun fact: Ét salg af en villalejlighed til 6 mio. kr. med 2 % provision kan give en mægler 18‑25 000 kr. ekstra efter skat – svarende til et halvt års streamingabonnementer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. By‑tabel – Ejendomsmægler løn efter skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Efter skat*</th>
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
              * Beregnet med AM‑bidrag 8 % + gennemsnitlig kommuneskat 24,9 % uden kirkeskat. Kilder: <a href="https://www.studentum.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum lønstatistik 2025</a>, <a href="https://fagforeningsguide.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FagforeningsGuide februar 2025</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Karrierekurven – fra trainee til partner</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Bruttoløn</th>
                    <th className="py-3 px-4 border-b text-left">Ejendomsmægler løn efter skat</th>
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
              * Partnere deler overskud; store udsving må forventes. FagforeningsGuide angiver 45‑60 t.kr. brutto som normalt for erfarne mæglere. <a href="https://fagforeningsguide.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FagforeningsGuide</a>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Netto‑regnestykke (Aarhus‑mægler, 47 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag 8 % →</strong> 3 760 kr.</li>
                <li><strong>Skattepligtig indkomst →</strong> 43 240 kr.</li>
                <li><strong>Personfradrag →</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag →</strong> 38 590 kr.</li>
                <li><strong>A‑skat ~ 37 % →</strong> 14 300 kr.</li>
                <li><strong>Ejendomsmægler løn efter skat ≈</strong> 28 940 kr.</li>
              </ul>
            </div>

            <p>
              Tjek selv i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregneren</a> – provision, bil og kommuneskat kan ændre resultatet markant.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Hvad rykker mest på ejendomsmægler løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Faktor</th>
                    <th className="py-3 px-4 border-b text-left">Nettoløns­effekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flere salg / højere gennemsnitspris</td>
                    <td className="py-3 px-4 border-b">+2 000 – 15 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Storkøbenhavn vs. landdistrikt</td>
                    <td className="py-3 px-4 border-b">+1 000 – 4 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Fri bil over 300 000 kr.</td>
                    <td className="py-3 px-4 border-b">−1 000 – 2 500 kr./md.*</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Lav‑skat kommune</td>
                    <td className="py-3 px-4 border-b">+300 – 650 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Boligadvokat‑/lån‑henvisninger</td>
                    <td className="py-3 px-4 border-b">+500 – 2 000 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Firmabil beskattes som værdi af fri bil og reducerer netto­indtægten.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Fire hurtige hacks til en højere nettoløn 🚀</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Fokuser på high‑end segmentet</strong> – en enkelt salg på +8 mio. kr. kan slå 3 almindelige villahandler.</li>
              <li><strong>Forhandl provisionstrappen</strong> (fx 10 % af honorar over 70 000 kr.).</li>
              <li><strong>Byg en stærk køberkartotek‑pipeline</strong> – flere samtidige sager mindsker "tørke‑måneder".</li>
              <li><strong>Udnyt fradrag for kontingenter, kørsel {'>'} 24 km og efteruddannelse</strong> – skærer direkte i skatten.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. FAQ – ejendomsmægler løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nyuddannet ejendomsmægler efter skat?</p>
                <p>≈ 17‑18 000 kr./md. ved grundløn uden salg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvor højt kan en top‑performer komme?</p>
                <p>Partner med +20 handler/år i Storkøbenhavn kan nå 45‑50 000 kr. netto.</p>
              </div>
              <div>
                <p className="font-semibold">Hvor stor er provisionen?</p>
                <p>Typisk 1‑3 % af salgsprisen; mægleren beholder 8‑12 % af firmaets honorar.</p>
              </div>
              <div>
                <p className="font-semibold">Er fast pris bedre end provision?</p>
                <p>Fast pris giver stabilt budget – men provision belønner højt salg og kan fordoble nettolønnen i gode måneder.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Konklusion</h2>
            <p>
              I 2025 ligger ejendomsmægler løn efter skat normalt mellem 18 000 – 35 000 kr. Månedlige udsving er større end i de fleste fag, fordi provisionen svinger med boligmarkedet. Vil du se, hvor du selv lander? Indtast brutto­løn, provision og kommune i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – 30 sekunder senere ved du, hvad der faktisk går ind på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder & videre læsning</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.studentum.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Gennemsnitsløn Ejendomsmægler 2025</a></li>
              <li><a href="https://fagforeningsguide.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FagforeningsGuide – "Hvad tjener en ejendomsmægler 2025"</a></li>
              <li><a href="https://vidensbank.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vidensbank.dk – Typisk mæglerprovision 1‑3 %</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Senest opdateret: maj 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EjendomsmaeglerLoenPage; 