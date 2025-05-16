import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FGULoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // FGU allowance data by age and living situation
  const fguData = {
    "Under 18, hjemmeboende": { grossSalary: 1340, netMin: 1340, netMax: 1340 },
    "Under 18, udeboende": { grossSalary: 2710, netMin: 2710, netMax: 2710 },
    "18+, hjemmeboende": { grossSalary: 6460, netMin: 6050, netMax: 6300 },
    "18+, udeboende": { grossSalary: 7750, netMin: 7200, netMax: 7500 },
  };

  // Production supplement data
  const productionData = [
    { type: "Ingen produktionstimer", grossSalary: 0, netMin: 0, netMax: 0 },
    { type: "40 timer (ca. ½ månedsnorm)", grossSalary: 3440, netMin: 2250, netMax: 2450 },
    { type: "80 timer (fuld månedsnorm)", grossSalary: 6880, netMin: 3850, netMax: 4100 },
  ];

  const fguExamples = useMemo(() => {
    return Object.entries(fguData).map(([category, data]) => {
      return {
        category,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="FGU Løn Efter Skat 2025 – Hvad Får Du Som Elev?"
        description="FGU løn efter skat 2025: Se realistiske estimater for skoleydelse og produktionstillæg som elev. Beregn hurtigt dit personlige beløb online."
        keywords="FGU løn, skoleydelse, elevløn, produktionstillæg, uddannelse, løn efter skat, unge uddannelse"
      />
      <Header />
      <PageTitle title="FGU Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">FGU Løn Efter Skat 2025 – Din Elevguide </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som FGU‑elev får du i 2025 typisk fgu løn efter skat (skoleydelse) på 1.300 – 7.800 kr. om måneden. Beløbet afhænger af alder, om du bor hjemme eller ude – og om du har produktionstimer med løntillæg. Få et hurtigt, personligt estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad er FGU‑lønsedlen egentlig?</h2>
            <p>
              FGU‑elever modtager skoleydelse, som beskattes næsten som SU. Mange ligger under personfradraget, så løn efter skat ≈ løn før skat – mens ældre elever eller dem med produktionstillæg betaler lidt mere i skat.
            </p>
            <p>
              <strong>Tip:</strong> Fradraget stiger 1. januar 2025 til ca. 4.350 kr./md. – det gør en stor forskel for din fgu løn efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FGU Skoleydelse 2025 – Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">Kategori</th>
                    <th className="border px-4 py-2 text-left">Løn før skat (md.)</th>
                    <th className="border px-4 py-2 text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {fguExamples.map((example, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="border px-4 py-2">{example.category}</td>
                      <td className="border px-4 py-2">{example.grossSalary} kr.</td>
                      <td className="border px-4 py-2">
                        {example.netMin === example.netMax
                          ? `${example.netMin} kr.`
                          : `${example.netMin} – ${example.netMax} kr.`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm italic">
              *Efter AM‑bidrag 8% og evt. A‑skat; for de yngste er ydelsen under fradraget, så ingen skat.
            </p>
            <p>
              Har du andre tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> med din præcise ydelse.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Produktionstillæg – når du arbejder i skolens værksteder</h2>
            <p>
              Mange FGU‑linjer giver et produktionstillæg på ca. 21,50 kr./time (op til 20 timer/uge). Sådan påvirker det fgu løn efter skat for en 18‑årig, der bor hjemme:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">Produktionstimer</th>
                    <th className="border px-4 py-2 text-left">Tillæg før skat (md.)</th>
                    <th className="border px-4 py-2 text-left">Løn efter skat (inkl. skoleydelse)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2">0 t</td>
                    <td className="border px-4 py-2">0 kr.</td>
                    <td className="border px-4 py-2">6.050 kr.</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">40 t (ca. ½ månedsnorm)</td>
                    <td className="border px-4 py-2">3.440 kr.</td>
                    <td className="border px-4 py-2">8.300 – 8.500 kr.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2">80 t (fuld månedsnorm)</td>
                    <td className="border px-4 py-2">6.880 kr.</td>
                    <td className="border px-4 py-2">10.300 – 10.600 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Husk:</strong> Jo flere værkstedstimer, desto større chance for, at du rammer skattegrænsen. Tjek dit eget tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (18+, bor ude, fuld produktion)</h2>
            <div className="bg-gray-50 p-5 rounded-lg my-6">
              <p><strong>Skoleydelse før skat:</strong> 7.750 kr.</p>
              <p><strong>Produktionstillæg før skat:</strong> 6.880 kr.</p>
              <p><strong>Samlet løn før skat:</strong> 14.630 kr.</p>
              <p><strong>AM‑bidrag 8%:</strong> → 1.170 kr.</p>
              <p><strong>Skattepligtig indkomst:</strong> → 13.460 kr.</p>
              <p><strong>Personfradrag:</strong> → 4.350 kr.</p>
              <p><strong>Beskatningsgrundlag:</strong> → 9.110 kr.</p>
              <p><strong>A‑skat (≈ 35%):</strong> → 3.190 kr.</p>
              <p><strong>FGU løn efter skat:</strong> ≈ 10.270 kr.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan kan du løfte din fgu løn efter skat </h2>
            <ul>
              <li><strong>Maksimér produktionstimer</strong> – flere timer = højere løn, selv efter skat.</li>
              <li><strong>Søg evt. ungdomsbolig</strong> med lav husleje, så du kan klare dig på skoleydelsen.</li>
              <li><strong>Pendlerkort (Ungdomskort)</strong> – spar transportudgifter, så din løn efter skat rækker længere.</li>
              <li><strong>Hold øje med fradrag</strong> – fx befordringsfradrag hvis du rejser +24 km pr. dag til FGU‑skolen.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – FGU Løn Efter Skat ℹ️</h2>
            <div className="space-y-4">
              <div>
                <p><strong>Tjener alle FGU‑elever det samme?</strong></p>
                <p>Nej, satsen afhænger af alder og om du bor ude eller hjemme.</p>
              </div>
              <div>
                <p><strong>Skal jeg betale skat?</strong></p>
                <p>Kun hvis din samlet indkomst overstiger personfradraget (~4.350 kr./md).</p>
              </div>
              <div>
                <p><strong>Hvordan får jeg flere penge?</strong></p>
                <p>Tag produktionstimer eller aftenopgaver hvis muligt.</p>
              </div>
              <div>
                <p><strong>Kan jeg få boligstøtte?</strong></p>
                <p>Ja, hvis du bor til leje og opfylder kravene.</p>
              </div>
              <div>
                <p><strong>Hvor finder jeg mit præcise tal?</strong></p>
                <p>Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et lynhurtigt estimat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som FGU‑elev ligger fgu løn efter skat i 2025 mellem 1.300 kr. (under 18, hjemmeboende) og over 10.000 kr. (voksen elev med fuld produktion). Brug beregneren for at se, hvordan din alder, bolig og produktionstimer påvirker udbetalingen – og planlæg din økonomi allerede før næste værkstedsmodul.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul>
              <li><a href="https://www.uvm.dk/forberedende-grunduddannelse/om-forberedende-grunduddannelse/ydelser" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Styrelsen for Undervisning og Kvalitet – Skoleydelsessatser 2025</a></li>
              <li><a href="https://skat.dk/hjaelp/satser" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – Personfradrag & AM‑bidrag 2025</a></li>
              <li><a href="https://www.danskindustri.dk/vi-radgiver-dig/personale/elever-og-larlinge/ansattelsesvilkar-for-larlinge-og-elever/lon-til-larlinge-og-elever/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Dansk Produktionsskoleforening – Produktionstillægssatser</a></li>
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

export default FGULoenPage; 