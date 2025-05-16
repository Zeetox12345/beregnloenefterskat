import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const MalerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København (store entreprise)": { grossSalary: 46000, netMin: 28100, netMax: 28600 },
    "Aarhus (renovering & nybyg)": { grossSalary: 43000, netMin: 26300, netMax: 26800 },
    "Odense (robot-byg & privat)": { grossSalary: 42000, netMin: 25700, netMax: 26200 },
    "Aalborg (energi & erhverv)": { grossSalary: 40000, netMin: 24500, netMax: 25000 },
    "Esbjerg (offshore)": { grossSalary: 39000, netMin: 23900, netMax: 24400 },
    "Randers (privat-bolig-fokus)": { grossSalary: 39000, netMin: 23900, netMax: 24400 }
  };

  const experienceData = [
    { type: "Lærling (trin 4)", grossSalary: 19000, netMin: 13500, netMax: 13800 },
    { type: "Nyuddannet maler", grossSalary: 29000, netMin: 19200, netMax: 19700 },
    { type: "3-5 år (fast timeløn)", grossSalary: 35000, netMin: 23800, netMax: 24300 },
    { type: "6-8 år (akkordmester)", grossSalary: 40000, netMin: 24500, netMax: 25000 },
    { type: "9+ år (formand/projektleder)", grossSalary: 45000, netMin: 28700, netMax: 29200 },
    { type: "Dekoration/specialist", grossSalary: 50000, netMin: 31800, netMax: 32300 }
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
        title="Maler Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Hvad er maler løn efter skat i 2025? Se realistiske tal for lærlinge, nyuddannede og akkordmalere – og beregn din nettoløn på under ét minut."
        keywords="maler løn efter skat, maler løn, bygnings maler løn, malersvend løn, malerlærling, akkord maler"
      />
      <Header />
      <PageTitle title="Maler Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Maler Løn Efter Skat 2025 – Fra Penselstrøg til Payslip </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Den gennemsnitlige maler løn efter skat i Danmark ligger i 2025 omkring 22 000 – 30 000 kr. pr. måned. Nyuddannede starter typisk med 29 000 kr. før skat (≈ 19 000 kr. netto), mens erfarne bygningsmalere på akkord kan nå 45 000 kr. før skat (≈ 30 000 kr. netto). Lønnen afhænger især af overenskomst, akkord/timeløn, by og erfaring. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager kortere tid end at dække et 10 m² loft!
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer en maler løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Løndriver</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor den rykker netto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Overenskomst-timepris (mindst 182,50 kr.)</td>
                    <td className="py-3 px-4 border-b">Minimumssatsen i Maler-overenskomsten</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Akkord vs. timeløn</td>
                    <td className="py-3 px-4 border-b">Akkord giver ofte +10 – 15 % før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Erfaring & specialer</td>
                    <td className="py-3 px-4 border-b">Dekorationsarbejde, sprøjtelak & epoxy kan kaste +2 000 kr./md. af sig</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Geografi</td>
                    <td className="py-3 px-4 border-b">Storstadsprojekter betaler op til 8 % mere</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Tillæg & SH-konto</td>
                    <td className="py-3 px-4 border-b">14,55 % søgnehelligdagsopsparing udbetales direkte i lønposen</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">± 0,6 pct-point → ± 650 kr./md. netto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-medium mt-4">
              Pro-tip: En veltilrettelagt akkord på et nybyggeri kan give det samme lønløft som et helt års almindelige timetillæg – efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">By-tabel – Maler Løn Efter Skat 2025</h2>
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
                      className={`hover:bg-gray-50 ${example.city.startsWith(selectedCity) ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedCity(example.city.split(" ")[0])}
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
              * Beregnet med AM-bidrag 8 %, personfradrag 4 300 kr./md. og gennemsnitlig kommuneskat 25,1 %.
            </p>

            <p className="text-sm text-gray-600 mt-2">
              Kilde: DA Strukturstatistik (median 269,74 kr./time) og ID-beregning af månedslønner.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – Maler Løn Efter Skat vs. Erfaring</h2>
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
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Studentum/UG-data viser en gennemsnitlig brutto på 45 800 kr. pr. måned for erfarne bygningsmalere 
              <a href="https://www.studentum.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">studentum.dk</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Akkordmaler i Aarhus</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Bruttoløn:</strong> 43 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 440 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 39 560 kr.</li>
                <li><strong>Personfradrag:</strong> 4 300 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 35 260 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 13 040 kr.</li>
                <li><strong>Maler løn efter skat ≈</strong> 26 500 kr.</li>
              </ul>
            </div>

            <p>
              Vil du teste lavere kommuneskat eller højere akkordbonus? Kør dine tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – hurtigere end at dække én væg med filt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire farvesikre tricks til højere maler løn efter skat </h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Strategi</th>
                    <th className="py-3 px-4 border-b text-left">Nettoløft (typisk)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Gå fra timeløn til akkord</td>
                    <td className="py-3 px-4 border-b">+1 500 – 3 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Lær sprøjtelak/epoxy eller dekoration</td>
                    <td className="py-3 px-4 border-b">+1 000 – 2 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Tag SH-opsparing som kontant udbetaling</td>
                    <td className="py-3 px-4 border-b">+500 – 900 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Flyt til kommune &lt; 24 % skat</td>
                    <td className="py-3 px-4 border-b">+300 – 650 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Maler Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nyuddannet maler efter skat?</p>
                <p>Cirka 19 000 kr. pr. måned ved 29 000 kr. brutto.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 30 000 kr. netto som maler?</p>
                <p>Ja – som akkordmester med stor volumen eller formand på større entrepriseprojekter.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension i "løn efter skat"?</p>
                <p>Nej, pensionsbidraget (10 % arbejdsgiver + 2 % egenbetaling) trækkes før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer jeg topskat?</p>
                <p>Ved ca. 55 400 kr. brutto pr. måned – sjældent i malerfaget, men muligt med firmabil + akkordbonus.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 spænder maler løn efter skat fra omkring 22 000 kr. for lærlinge til 30 000 kr. for erfarne akkordmestre. Overenskomst-satser, akkord, specialisering og lav kommuneskat er de hurtigste farver i paletten til et større nettobeløb. Vil du vide præcis, hvad næste faktura bliver til i hånden? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – så er dit tal tørret, før malingen er det. 
            </p>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: maj 2025. Kilder: FagforeningsGuide, Malerforbundet, Workplace Denmark, Studentum.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MalerLoenPage; 