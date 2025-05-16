import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const TandplejerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København – privat implantatklinik");
  
  const cityData = {
    "København – privat implantatklinik": { grossSalary: 48000, netMin: 30000, netMax: 31000 },
    "Aarhus – kommunal børnetandpleje": { grossSalary: 42000, netMin: 26500, netMax: 27000 },
    "Odense – orto-team": { grossSalary: 41000, netMin: 25800, netMax: 26300 },
    "Aalborg – omsorgstandpleje": { grossSalary: 39000, netMin: 24700, netMax: 25200 },
    "Esbjerg – privat familieklinik": { grossSalary: 38000, netMin: 24200, netMax: 24700 },
    "Randers – kommunal": { grossSalary: 37000, netMin: 23600, netMax: 24100 }
  };

  const experienceData = [
    { type: "Nyuddannet (0-2 år)", grossSalary: 33000, netMin: 22000, netMax: 24000 },
    { type: "Mellemtrin (3-5 år)", grossSalary: 38000, netMin: 24500, netMax: 27000 },
    { type: "Erfaren (6-8 år)", grossSalary: 42000, netMin: 26000, netMax: 28000 },
    { type: "Specialist / koordinator (9+ år)", grossSalary: 48000, netMin: 28000, netMax: 31000 }
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
        title="Tandplejer Løn Efter Skat 2025 – Se Realistiske Nettotal"
        description="Tandplejer løn efter skat i 2025? Se detaljerede løntabeller for erfaring, tillæg og byer – og beregn din egen udbetaling på ét minut."
        keywords="tandplejer løn efter skat 2025, tandplejer nettoløn, profylakse, anæstesi, bør, privat klinik tandplejer"
      />
      <Header />
      <PageTitle title="Tandplejer Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Tandplejer Løn Efter Skat 2025 – Fra Profylakse til PayDay </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som tandplejer i Danmark ligger tandplejer løn efter skat typisk mellem 22 000 kr. og 31 000 kr. om måneden. Beløbet afhænger af sektor (kommune vs. privat), anciennitet, funktions-/kvalifikationstillæg, arbejdstidstillæg og din kommunes skatteprocent. Få et hurtigt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Tandplejer Løn – Før & Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Karrierefase</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                    <th className="py-3 px-4 border-b text-left">Hvad rykker tallet?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Nyuddannet / løntrin 4-5</td>
                    <td className="py-3 px-4 border-b">33 000 – 36 000 kr.</td>
                    <td className="py-3 px-4 border-b">22 000 – 24 000 kr.</td>
                    <td className="py-3 px-4 border-b">Overenskomst­minimum, evt. lørdagsvagter</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">3-5 års erfaring</td>
                    <td className="py-3 px-4 border-b">38 000 – 42 000 kr.</td>
                    <td className="py-3 px-4 border-b">24 500 – 27 000 kr.</td>
                    <td className="py-3 px-4 border-b">Egen patientportefølje, små funktions­tillæg</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">6-8 år / senior</td>
                    <td className="py-3 px-4 border-b">41 000 – 44 000 kr.</td>
                    <td className="py-3 px-4 border-b">26 000 – 28 000 kr.</td>
                    <td className="py-3 px-4 border-b">Certifikat i lokal anæstesi eller parodontologi</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">9+ år / specialist·koordinator</td>
                    <td className="py-3 px-4 border-b">44 000 – 48 000 kr.</td>
                    <td className="py-3 px-4 border-b">28 000 – 31 000 kr.</td>
                    <td className="py-3 px-4 border-b">Ledelses-/IT-ansvar, orto-kursus, privat klinik</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              *Løn efter skat er beregnet med AM-bidrag 8 %, månedligt personfradrag 4 300 kr. og gennemsnitlig kommuneskat 25,1 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire stærke lønløfter</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Privat sektor betaler typisk 5-8 % mere i løn før skat end kommunal tandpleje.</li>
              <li>Speciale-tillæg (ortodonti, anæstesi, profylaksekoordinering) kan give op til +2 000 kr./md. i løn før skat.</li>
              <li>Arbejdstidstillæg for aften- og lørdagsvagter kan lægge 600-1 200 kr./md. til løn efter skat.</li>
              <li>Flytning til lav-skat-kommune kan øge løn efter skat med op til 650 kr./md.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Hvad bestemmer en tandplejers løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Faktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor den batter på netto</th>
                    <th className="py-3 px-4 border-b text-left">Typisk effekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Overenskomst-trin & anciennitet</td>
                    <td className="py-3 px-4 border-b">Lønhop efter 6 mdr. og 1 år</td>
                    <td className="py-3 px-4 border-b">+1 000-1 600 kr./md. i løn før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Arbejdssted</td>
                    <td className="py-3 px-4 border-b">Privat klinik ⇨ ~6 % højere løn før skat</td>
                    <td className="py-3 px-4 border-b">±1 500 kr./md. i løn efter skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Geografi & kommuneskat</td>
                    <td className="py-3 px-4 border-b">0,6 pct-point forskel</td>
                    <td className="py-3 px-4 border-b">±650 kr./md. i løn efter skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Arbejdstidstillæg</td>
                    <td className="py-3 px-4 border-b">Aften, lørdag, helligdage</td>
                    <td className="py-3 px-4 border-b">+400-1 200 kr./md. i løn efter skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Funktions-/kvalifikationstillæg</td>
                    <td className="py-3 px-4 border-b">Fx anæstesi, børnespeciale</td>
                    <td className="py-3 px-4 border-b">+800-2 000 kr./md. i løn før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Efter- & videreuddannelse</td>
                    <td className="py-3 px-4 border-b">Orto-kursus, master i oral health</td>
                    <td className="py-3 px-4 border-b">+5-10 % over 2-3 år</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Løn efter skat i de største byer</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / Sektor</th>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Karrierekurven – fra dimittend til specialist</h2>
            <div className="space-y-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium">Nyuddannet (0-2 år)</p>
                <p>Basisopgaver og mentor, løn efter skat ca. 22 000 kr.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium">Mellemtrin (3-5 år)</p>
                <p>Egen patientliste, funktions­tillæg, løn efter skat 24 500-27 000 kr.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium">Erfaren (6-8 år)</p>
                <p>Certificeret i anæstesi/paro, løn efter skat 26 000-28 000 kr.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium">Specialist / koordinator (9+ år)</p>
                <p>Teamledelse, orto eller IT-ansvar, løn efter skat 28 000-31 000 kr.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Skattegrundlag i praksis</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <p className="font-medium mb-2">Eksempel – tandplejer i Aarhus med løn før skat 41 000 kr.</p>
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM-bidrag (8 %) ⇒</strong> 3 280 kr.</li>
                <li><strong>Skattepligtig indkomst ⇒</strong> 37 720 kr.</li>
                <li><strong>Personfradrag 4 300 kr. ⇒</strong> Beskatningsgrundlag 33 420 kr.</li>
                <li><strong>A-skat (~37 %) ⇒</strong> 12 360 kr.</li>
                <li><strong>Løn efter skat ≈</strong> 25 400 kr.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Syv hurtige hacks til højere tandplejer løn efter skat </h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">#</th>
                    <th className="py-3 px-4 border-b text-left">Tiltag</th>
                    <th className="py-3 px-4 border-b text-left">Typisk løn efter skat-løft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">1</td>
                    <td className="py-3 px-4 border-b">Aften-/lørdagsvagter i privat klinik</td>
                    <td className="py-3 px-4 border-b">+600-1 200 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">2</td>
                    <td className="py-3 px-4 border-b">Funktions­tillæg (fluorlak, forseglinger)</td>
                    <td className="py-3 px-4 border-b">+800-1 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">3</td>
                    <td className="py-3 px-4 border-b">Orto- eller paro-speciale</td>
                    <td className="py-3 px-4 border-b">+1 500-2 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">4</td>
                    <td className="py-3 px-4 border-b">Anæstesi­autorisation</td>
                    <td className="py-3 px-4 border-b">+700-1 200 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">5</td>
                    <td className="py-3 px-4 border-b">SH-konto/feriefridage udbetalt kontant</td>
                    <td className="py-3 px-4 border-b">+300-500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">6</td>
                    <td className="py-3 px-4 border-b">Skift til privat implantatklinik</td>
                    <td className="py-3 px-4 border-b">+5-8 % i løn før skat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">7</td>
                    <td className="py-3 px-4 border-b">Flyt til lav-skat-kommune ({'<'} 24 %)</td>
                    <td className="py-3 px-4 border-b">+300-650 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Fremtidige job- og løntendenser</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Aldrende befolkning → større behov for profylakse og parodontologi.</li>
              <li>Digital diagnostik → intraoral scanning og AI-screening skaber nye specialisttillæg.</li>
              <li>Lav ledighed (under 2 %) → stærke muligheder for at forhandle funktions­tillæg.</li>
              <li>Masteruddannelser → fx oral health management kan løfte løn efter skat til over 32 000 kr./md.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. FAQ – ofte stillede spørgsmål</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en ny tandplejer efter skat?</p>
                <p>22 000-24 000 kr./md. ved overenskomst­minimum.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 30 000 kr. i løn efter skat?</p>
                <p>Ja, med 8-10 års erfaring, specialist­tillæg og aften-/lørdagsvagter.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension med i løn efter skat?</p>
                <p>Nej, pensions­bidrag (13-15 %) trækkes før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår udløses topskat?</p>
                <p>Ved løn før skat over 55 400 kr./md. (665 000 kr./år). De fleste tandplejere ligger under.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Tandplejer løn efter skat lander i 2025 oftest mellem 22 000 og 31 000 kr. Sektorvalg, special­tillæg, arbejdstider og kommuneskat er de stærkeste løftestænger. Brug en <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">lønberegner</a>, planlæg strategiske certifikater og forhandl funktions­tillæg – så konverterer du dine kliniske kompetencer til flere kroner på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://dansketandplejere.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danske Tandplejere – lønstatistik og overenskomstsatser 2024-25</a></li>
              <li><a href="https://skat.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet (skat.dk) – satser for AM-bidrag, personfradrag og kommuneskat 2025</a></li>
              <li><a href="https://kl.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KL & Danske Regioner – Overenskomst OK24 (tandplejere m.fl.)</a></li>
              <li><a href="https://dst.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – IND KP107: Løn efter funktion, branche og region</a></li>
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

export default TandplejerLoenPage; 