import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SkraldemandLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 34000, netMin: 22900, netMax: 23400 },
    "Aarhus": { grossSalary: 33500, netMin: 22600, netMax: 23100 },
    "Odense": { grossSalary: 33000, netMin: 22100, netMax: 22600 },
    "Aalborg": { grossSalary: 32500, netMin: 21900, netMax: 22300 },
    "Esbjerg": { grossSalary: 32000, netMin: 21500, netMax: 21900 },
    "Randers": { grossSalary: 32000, netMin: 21500, netMax: 21900 },
    "Vejle": { grossSalary: 33000, netMin: 22200, netMax: 22600 }
  };

  const experienceData = [
    { years: "Nyansat (0‑2 år)", grossSalary: 30000, netMin: 20300, netMax: 20700 },
    { years: "3‑5 år", grossSalary: 31500, netMin: 21300, netMax: 21700 },
    { years: "6‑8 år", grossSalary: 33000, netMin: 22300, netMax: 22700 },
    { years: "9‑11 år", grossSalary: 34500, netMin: 23300, netMax: 23700 },
    { years: "12+ år", grossSalary: 36000, netMin: 24300, netMax: 24700 }
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
        title="Skraldemand Løn Efter Skat 2025 – Se Nettoløn & Anciennitet"
        description="Skraldemand løn efter skat 2025: Få overblik over by- og anciennitetstal, detaljeret beregning, akkord-tips og fradrag, så du kender din nettoløn."
        keywords="skraldemand løn efter skat 2025, renovationsarbejder løn, skraldemand indkomst, renovationschauffør løn, skraldemand anciennitet, 3F overenskomst"
      />
      <Header />
      <PageTitle title="Skraldemand Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Skraldemand Løn Efter Skat 2025 – Din Komplette Guide</h1>
            
            <p className="lead">
              Vil du vide præcis, hvor mange kroner der lander på din konto som skraldemand (renovationsarbejder)? Denne guide giver dig overblik over skraldemand løn efter skat med konkrete eksempler, tabeller opdelt efter by og anciennitet, samt råd til at optimere din nettoindkomst.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                Hurtigt overblik: En fuldtidsansat skraldemand (renovationsarbejder/‑chauffør) kan i 2025 forvente ca. 21.000 – 24.000 kr. i løn efter skat pr. måned, afhængigt af kommune, overarbejde og anciennitet. Vil du have et hurtigt estimat på få sekunder? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a>.
              </p>
            </div>

            {/* Min A-kasse Affiliate Section */}


            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en skraldemand?</h2>
            <p>
              Skraldemænd (og renovationschauffører) henter og sorterer husholdnings‑ og erhvervsaffald. Arbejdet foregår typisk i teams á 2–3 personer, hvor du enten kører lastbil eller håndterer sække og beholdere. Stillingerne er organiseret i 3F Privat Service, Hotel og Restauration eller Servicegruppen og er dækket af overenskomster med KL eller private renovatører som Remondis, Urbaser og ARC.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Skraldemand – Før og Efter Skat</h2>
            <p>
              Tabellen tager udgangspunkt i overenskomstløn pr. 1. april 2025 (grundløn + renovationstillæg) for en 37‑timers uge. Overtids‑ og akkordtillæg er ikke medregnet.
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
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              *Eksemplerne bruger kommuneskat 2025 uden kirkeskat. Din faktiske skraldemand løn efter skat afhænger af pension (12 %), personfradrag og eventuelle akkordtillæg. Få dine præcise tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Overenskomsten giver garantiløn og anciennitetstillæg ved 3, 6 og 9 år. Overtid og akkord kan øge lønnen markant.
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
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              *Gennemsnits­kommuneskat 25 % og AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense, 33.000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag (8 %)</strong> 33.000 × 0,08 = 2.640 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 33.000 − 2.640 = 30.360 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatnings­grundlag</strong> 25.710 kr.</li>
                <li><strong>A‑skat (≈ 35,2 %)</strong> 25.710 × 0,352 ≈ 9.050 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 30.360 − 9.050 ≈ 21.310 kr.</li>
                <li><strong>Pension (12 %)</strong> 3.960 kr. indbetales før skat → løn efter skat ca. 21.300 kr.</li>
              </ul>
            </div>
            <p>
              Lav din egen beregning på få sekunder – <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">klik på beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker din løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat</strong> – 23,4 % (Vejle) til 26,3 % (Brønderslev).</li>
              <li><strong>Akkord og overtids­betaling</strong> – kan lægge 2.000‑6.000 kr. oveni bruttolønnen.</li>
              <li><strong>Tillæg for tidlig morgen (04‑06) og weekend</strong> – 35‑100 % af timelønnen.</li>
              <li><strong>Pension</strong> – 12 % arbejdsgiverbetalt (3F‑overenskomst).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Hurtige svar</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en skraldemand før skat?</p>
                <p>30.000 – 36.000 kr. pr. måned + tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er skraldemand løn efter skat?</p>
                <p>Typisk 21.000 – 24.000 kr. ved fuldtid.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, løntrin ved 3, 6 og 9 år plus akkord.</p>
              </div>
              <div>
                <p className="font-semibold">Hvem forhandler lønnen?</p>
                <p>3F og arbejdsgiver/kommunen.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode råd til at øge din løn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Forhandl akkordtakst</strong> – høj ydeevne giver højere løn.</li>
              <li><strong>Tag certifikater</strong> – eksempelvis krankort giver tillæg.</li>
              <li><strong>Hold styr på fradragene</strong> – fagforening, kørselsfradrag etc. kan hæve løn efter skat.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som skraldemand i Danmark ligger bruttolønnen i 2025 på 30.000 – 36.000 kr. og nettolønnen på 21.000 – 24.000 kr.. Lønnen kan øges via akkord, tillæg og senioritet. Tjek din overenskomst, hold styr på fradrag og brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for dine egne tal.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>3F & KL Renovationsoverenskomst 2025 (Bilag A)</li>
              <li><a href="https://www.studentum.dk/job-loen/renovationsarbejder" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk lønstatistik renovationsarbejder</a></li>
              <li><a href="https://www.dekra.dk/blog/lastbil/hvad-tjener-en-renovationschauffoer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DEKRA løn sammenligning</a></li>
              <li><a href="https://fagbladet3f.dk/skraldemanden-mohammad-afsloerer-sin-loen-nogen-tror-vi-tjener-300-000-kroner-om-maaneden/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fagbladet 3F interview om løn</a></li>
              <li><a href="https://skm.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025</a></li>
            </ul>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SkraldemandLoenPage; 