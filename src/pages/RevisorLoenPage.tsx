import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const RevisorLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København (Big 4 / børsnoteret)");
  
  // City-specific salary data
  const cityData = {
    "København (Big 4 / børsnoteret)": { grossSalary: 64000, netMin: 39000, netMax: 39500 },
    "Aarhus (mid-tier / scale-ups)": { grossSalary: 60000, netMin: 36700, netMax: 37200 },
    "Odense (robotics & SMV'er)": { grossSalary: 57000, netMin: 35000, netMax: 35500 },
    "Aalborg (energi & kommuner)": { grossSalary: 55000, netMin: 33500, netMax: 34000 },
    "Esbjerg (offshore / shipping)": { grossSalary: 52000, netMin: 31800, netMax: 32300 },
    "Randers (lokalt SMV-hus)": { grossSalary: 50000, netMin: 30400, netMax: 30900 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Trainee (1.–2. år)", grossSalary: 30000, netMin: 20200, netMax: 20700 },
    { type: "Assistant (nyuddannet)", grossSalary: 38000, netMin: 26000, netMax: 26500 },
    { type: "Senior (3–5 år)", grossSalary: 45000, netMin: 29600, netMax: 30100 },
    { type: "Manager (6–8 år)", grossSalary: 55000, netMin: 33500, netMax: 34000 },
    { type: "Senior-Manager / Statsaut.", grossSalary: 65000, netMin: 40000, netMax: 40500 },
    { type: "Partner-track (Big 4)", grossSalary: 75000, netMin: 46500, netMax: 47000 },
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
        title="Revisor Løn Efter Skat 2025 – Se Din Nettoløn i Danmark"
        description="Hvad tjener en revisor efter skat i 2025? Sammenlign trainee til partner-niveau, se byforskelle, og beregn din egen nettoløn på få sekunder."
        keywords="revisor løn, revisor nettoløn, statsautoriseret revisor løn, revisor lønstatistik, Big 4 løn, revisor løn efter skat"
      />
      <Header />
      <PageTitle title="Revisor Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Revisor Løn Efter Skat 2025 – Fra Excel-ark til Egenkapital </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Den typiske revisor løn efter skat i 2025 ligger mellem 24 000 og 47 000 kr. pr. måned. En ny assistent med 38 000 kr. brutto står med ca. 26 000 kr. netto, mens en statsautoriseret senior-manager på 75 000 kr. brutto hæver omkring 47 000 kr. Beløbet afhænger af geografi, certificeringer, stillingsniveau, bonus og kommuneskat. Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – hurtigere end at afstemme en balance.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en revisor løn efter skat?</h2>
            <p>
              Revisorers nettoløn påvirkes af mange faktorer udover skatteniveauet - her er de vigtigste lønaktører.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Løndriver</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Hvorfor den rykker netto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Grundløn (460 000 kr. årligt som trainee → &gt; 900 000 kr. som statsaut.)</td>
                    <td className="py-3 px-4 border-b text-sm">Sætter rammen for alle tillæg</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Titel & anciennitet</td>
                    <td className="py-3 px-4 border-b text-sm">Assistant → Senior → Manager → Senior-Manager / Partner</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Certificering (statsautoriseret)</td>
                    <td className="py-3 px-4 border-b text-sm">+10 – 20 % før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Branche & kunder</td>
                    <td className="py-3 px-4 border-b text-sm">Pharma/FinTech giver op til +8 % vs. SMV-revision</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Bonus & overarbejde</td>
                    <td className="py-3 px-4 border-b text-sm">5 – 15 % af årsløn i Big 4</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Pension (12 – 17 %)</td>
                    <td className="py-3 px-4 border-b text-sm">Trækkes før skat og øger totalpakken</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-sm">Kommuneskat (gns. 25,07 %)</td>
                    <td className="py-3 px-4 border-b text-sm">±0,6 pct-point → ±650 kr./md. netto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg my-6 italic text-blue-800">
              <p>Fun fact: Én vellykket skatteoptimering for en klient kan finansiere din egen efteruddannelse – efter skat.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Revisor Løn Efter Skat 2025</h2>
            <p>
              Der er væsentlige lønforskelle mellem storbyerne og provinsen, både før og efter skat. Tallene er baseret på FSR's lønstatistik og jobopslag fra 2025.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / Kundesegment</th>
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
              * Beregnet med AM-bidrag 8 %, personfradrag 4 300 kr./md. og gennemsnitlig kommuneskat 25,07 %. Uden kirkeskat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – Revisor Løn Efter Skat vs. Erfaring</h2>
            <p>
              Revisorlønnen stiger markant med erfaring og særligt efter opnåelse af statsautoriseret titel. Partner-track giver adgang til højeste lønniveau.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Rolle / Erfaring</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item) => (
                    <tr key={item.type} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{item.type}</td>
                      <td className="py-3 px-4 border-b">{item.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {item.netMin.toLocaleString("da-DK")} – {item.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Manager i Aarhus (55 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Bruttoløn:</strong> 55 000 kr.</li>
                <li><strong>AM-bidrag 8%:</strong> 4 400 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 50 600 kr.</li>
                <li><strong>Personfradrag:</strong> 4 300 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 46 300 kr.</li>
                <li><strong>A-skat (~ 37%):</strong> 17 100 kr.</li>
                <li><strong>Revisor løn efter skat ≈</strong> 33 500 kr.</li>
              </ul>
            </div>
            <p>
              Beregn dit eget nettobeløb med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> — det tager kun få sekunder.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire bund-linje-boostere til højere revisor løn efter skat </h2>
            <p>
              Disse strategier kan betydeligt øge din nettoløn som revisor — både i starten og senere i karrieren.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Strategi</th>
                    <th className="py-3 px-4 border-b text-left">Typisk nettoløft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Bliv statsautoriseret (SR)</td>
                    <td className="py-3 px-4 border-b">+3 000 – 6 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Skift til brancheniche med høj margen (M&A, Transfer Pricing)</td>
                    <td className="py-3 px-4 border-b">+2 000 – 4 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Forhandl resultatløn / overtidspulje</td>
                    <td className="py-3 px-4 border-b">+1 000 – 3 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til kommune &lt; 24 % skat</td>
                    <td className="py-3 px-4 border-b">+300 – 650 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Revisor Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny revisorassistent efter skat?</p>
                <p>Ca. 26 000 kr./md. ved 38 000 kr. brutto.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 45 000 kr. netto?</p>
                <p>Statsautoriseret titel + senior-manager-niveau i Big 4 og bonus.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i "løn efter skat"?</p>
                <p>Nej – 12 – 17 % indbetales før skat og ses ikke i nettolønnen.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår udløses topskat?</p>
                <p>Når brutto + AM-bidrag overstiger 665 000 kr. årligt (~ 55 400 kr./md.).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Revisor løn efter skat spænder i 2025 fra 24 000 til 47 000 kr. om måneden. Certificering, kundetyper og kommuneskat er de hurtigste veje til et smukkere nettooverskud. Vil du se, hvad dine afstemninger og notehenvisninger kaster af sig? Kør et personligt tjek på <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – så er facit klart, før klienten siger "Godkendt".
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <p className="text-center text-blue-800 font-medium">
                  Dette indlæg er udgivet i samarbejde med <a href="https://tjekrevisor.dk/" className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-200" target="_blank" rel="noopener noreferrer">Tjekrevisor.dk</a>
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://fagforeningsguide.dk/hvad-tjener-en-revisor-lonstatistik/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FagforeningsGuide – "Revisor Lønstatistik 2025" (opdateret marts 2025).</a></li>
              <li><a href="https://ida.dk/raad-og-karriere/loen/idas-loenstatistik" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">IDA Lønstatistik 2024/25 – tal for økonomi- og revisionsstillinger.</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatteaendringer-i-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommuneskatprocenter 2025 (publiceret januar 2025).</a></li>
              <li><a href="https://skat.dk/hjaelp/satser" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DA's AM-bidragssatser – Arbejdsmarkedsbidrag 2025 (8 %).</a></li>
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

export default RevisorLoenPage; 