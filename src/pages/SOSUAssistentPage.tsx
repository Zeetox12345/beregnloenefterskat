import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SOSUAssistentPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 33000, netMin: 22000, netMax: 22500 },
    "Aarhus": { grossSalary: 32500, netMin: 21900, netMax: 22300 },
    "Odense": { grossSalary: 31500, netMin: 21300, netMax: 21700 },
    "Aalborg": { grossSalary: 31000, netMin: 20900, netMax: 21300 },
    "Esbjerg": { grossSalary: 30500, netMin: 20400, netMax: 20900 },
    "Randers": { grossSalary: 30500, netMin: 20400, netMax: 20900 },
    "Vejle": { grossSalary: 31500, netMin: 21300, netMax: 21700 }
  };

  const experienceData = [
    { years: "Nyansat (0 år)", grossSalary: 29500, netMin: 20100, netMax: 20600 },
    { years: "2–3 år", grossSalary: 31000, netMin: 21100, netMax: 21600 },
    { years: "4–5 år", grossSalary: 32500, netMin: 22100, netMax: 22600 },
    { years: "6–7 år", grossSalary: 34000, netMin: 23100, netMax: 23600 },
    { years: "10+ år", grossSalary: 36000, netMin: 24500, netMax: 25000 }
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
        title="SOSU Assistent Løn Efter Skat 2025 – Se Nettotal & Anciennitet"
        description="SOSU assistent løn efter skat 2025: Se brutto- og nettoløn, anciennitetstabeller og konkrete tips til at øge din udbetaling. Beregn løn efter skat."
        keywords="sosu assistent løn efter skat 2025, sosu assistent løn, sosu assistent indkomst, social- og sundhedsassistent løn, sosu assistent anciennitet, sosu løntrin"
      />
      <Header />
      <PageTitle title="SOSU Assistent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">SOSU Assistent Løn Efter Skat – Din Komplette Guide 2025</h1>
            
            <p className="lead">
              Vil du vide, hvor meget der egentlig går ind på kontoen, når du arbejder som social- og sundhedsassistent? I denne guide får du et detaljeret overblik over sosu assistent løn efter skat, eksempler fra hele landet, anciennitetstrin, og konkrete tips til at optimere din indtjening.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtidsansat SOSU‐assistent kan i 2025 forvente omkring 20.000 – 23.000 kr. udbetalt pr. måned afhængigt af kommune, anciennitet og tillæg. Vil du have en hurtig estimering for dig selv, så <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> på få sekunder.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en SOSU Assistent?</h2>
            <p>
              En social‐ og sundhedsassistent (SSA) arbejder med personlig pleje, rehabilitering og sygeplejefaglige opgaver hos ældre, handicappede og patienter på hospitaler eller i hjemmeplejen. Du samarbejder tæt med sygeplejersker, terapeuter og læger og kan både være ansat i kommunen, regionen eller hos private aktører.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en SOSU Assistent – Før og Efter Skat</h2>
            <p>
              I eksemplerne nedenfor antager vi en 37‑timers uge og en gennemsnitlig pensionsordning på 15 %. Satserne dækker grundløn uden personlige tillæg.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
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
                        {example.netMin.toLocaleString("da-DK")} - {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              *Eksemplerne er vejledende. De er beregnet ud fra kommunale skatteprocenter for 2025 og en fuldtidsstilling. Din faktiske udbetaling påvirkes af pension, kirkeskat, individuelle fradrag og eventuelle tillæg. Vil du kende præcisionen, kan du <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> med din egen løn, bopælskommune og fradrag.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling med Anciennitet</h2>
            <p>
              De fleste SOSU‐assistenter er dækket af FOA‑overenskomster, som giver lønstigninger ved bestemte anciennitetstrin.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Anciennitet</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr 
                      key={exp.years} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{exp.years}</td>
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} - {exp.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              Bemærk: Tillæg for weekend‑, aften‑ og nattevagter kan hurtigt lægge 500–2.500 kr. oveni din månedsløn.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker din løn efter skat?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Kommuneskat</h3>
                <p>
                  Skatteprocenten varierer fra ca. 23,4 % (Vejle) til 26,3 % (Brønderslev). Jo lavere sats, desto mere netto.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Kirkeskat</h3>
                <p>
                  Hvis du er medlem af folkekirken, betaler du typisk 0,66 – 0,92 % ekstra i kirkeskat.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Arbejdsmarkedsbidrag (AM‑bidrag)</h3>
                <p>
                  8 % af din bruttoløn. Trækkes før øvrig skat.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Personfradrag</h3>
                <p>
                  I 2025 er personfradraget 55.800 kr. årligt (4.650 kr./md.).
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                <h3 className="text-xl font-semibold mb-2">Pension</h3>
                <p>
                  De fleste overenskomster sikrer pensionsbidrag på omkring 15 %. Pensionsbidraget trækkes før A‑skat, hvilket kan reducere skattebetalingen.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel: Detaljeret Beregning (København, 33.000 kr.)</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-2">
              <p><strong>AM‑bidrag (8 %)</strong>: 33.000 × 0,08 = 2.640 kr.</p>
              <p><strong>Skattepligtig indkomst</strong>: 33.000 − 2.640 = 30.360 kr.</p>
              <p><strong>Personfradrag</strong>: 4.650 kr.</p>
              <p><strong>Beskatningsgrundlag</strong>: 25.710 kr.</p>
              <p><strong>A‑skat</strong>: ≈ 36 % × 25.710 = 9.255 kr. (kommuneskat 23,5 % + bundskat 12,1 %)</p>
              <p><strong>Udbetalt før pension</strong>: 30.360 − 9.255 ≈ 21.105 kr.</p>
              <p><strong>Pension (15 %)</strong>: 4.950 kr. indbetales før skat → netto ≈ 21.100 kr.</p>
            </div>

            <p className="mt-4">
              Vil du prøve med dine egne tal? Hop direkte til <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode råd til SOSU‑assistenter om løn og økonomi</h2>
            <ul className="list-disc pl-6 space-y-3 mt-2">
              <li>
                <strong>Tjek overenskomsten</strong> – <a href="https://www.foa.dk/temaer/ok-forhandlinger/ok24/kommune-social-sundhed" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FOA</a> har en detaljeret lønmagasin‑database, så du kan se trin og tillæg.
              </li>
              <li>
                <strong>Forhandl vagttillæg</strong> – Skæve vagter giver ekstra kroner på bundlinjen.
              </li>
              <li>
                <strong>Opdater dine fradrag</strong> – Kørsel, fagforening, A‑kasse. Selvangivelsen er din ven.
              </li>
              <li>
                <strong>Planlæg pension & fritvalg</strong> – 1 % ekstra indbetaling i dag kan blive mange tusinde om 20 år.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ om SOSU Assistent Løn</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Hvad er grundlønnen for en SOSU‑assistent i 2025?</h3>
                <p>Fra løntrin 24 (ca. 29.500 kr.) i kommunen til løntrin 24–28 i regionerne.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Stiger lønnen med erfaring?</h3>
                <p>Ja, efter 4, 7 og 10 år udløses kvalifikations‑ og erfaringstillæg på op til 3 løntrin.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Hvor meget er lønnen efter skat i gennemsnit?</h3>
                <p>Typisk 20.000 – 23.000 kr. for en fuldtidsstilling.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som SOSU‑assistent i Danmark ligger bruttolønnen i 2025 som hovedregel på 29.000 – 36.000 kr. – og nettolønnen på 20.000 – 25.000 kr. alt efter bopæl og tillæg. Hold øje med overenskomster, vagttillæg og fradrag – og brug en online <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregner</a> for at kende dine helt præcise tal.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <a href="https://www.foa.dk/temaer/ok-forhandlinger/ok24/kommune-social-sundhed" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FOA Lønmagasin 2025 (Kommuner & Regioner)</a>
              </li>
              <li>
                <a href="https://www.foa.dk/temaer/ok-forhandlinger/ok24/kommune-social-sundhed" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">OK24‑forlig for social‑ og sundhedssektoren (FOA & KL)</a>
              </li>
              <li>
                <a href="https://www.studentum.dk/job-loen/socialogsundhedsassistent" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Danmarks Statistik (LONS30) / UddannelsesGuiden – gennemsnitsløn 37.601 kr.</a>
              </li>
              <li>
                <a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatteprocenter-og-grundskyldspromiller-top-20-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – kommuneskatteprocenter 2025</a>
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">Senest opdateret: April 2025.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SOSUAssistentPage; 