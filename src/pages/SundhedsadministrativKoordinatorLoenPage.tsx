import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SundhedsadministrativKoordinatorLoenPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("Hovedstaden (Rigshospitalet)");

  // Region-specific salary data
  const regionData = {
    "Hovedstaden (Rigshospitalet)": { grossSalary: 42000, netMin: 26400, netMax: 26900 },
    "Midtjylland (Skejby)": { grossSalary: 40000, netMin: 25100, netMax: 25600 },
    "Syddanmark (OUH)": { grossSalary: 38500, netMin: 24200, netMax: 24700 },
    "Nordjylland (Aalborg)": { grossSalary: 37500, netMin: 23500, netMax: 24000 },
    "Sjælland (Roskilde)": { grossSalary: 37000, netMin: 23100, netMax: 23600 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (trin 1)", grossSalary: 34000, netMin: 22100, netMax: 22600 },
    { type: "3-5 år", grossSalary: 36000, netMin: 23400, netMax: 23900 },
    { type: "6-8 år (DRG/EPJ-tillæg)", grossSalary: 38000, netMin: 24700, netMax: 25200 },
    { type: "9-11 år (kvalitets- eller planlægningsansvar)", grossSalary: 41000, netMin: 26500, netMax: 27000 },
    { type: "12+ år (teamleder)", grossSalary: 44000, netMin: 28300, netMax: 28800 },
  ];

  const regionExamples = useMemo(() => {
    return Object.entries(regionData).map(([region, data]) => {
      return {
        region,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax,
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO
        title="Sundhedsadministrativ Koordinator Løn Efter Skat 2025 – Se Realistiske Tal"
        description="Få overblik over sundhedsadministrativ koordinator løn efter skat i 2025. Se opdaterede estimater, erfaringstabeller og beregn din løn hurtigt og nemt."
        keywords="sundhedsadministrativ koordinator løn efter skat 2025, SAK løn, sundhedsadministrativ løn, region, erfaring, tillæg"
      />
      <Header />
      <PageTitle title="Sundhedsadministrativ Koordinator Løn Efter Skat 2025" />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Sundhedsadministrativ Koordinator Løn Efter Skat 2025 – Det Professionelle Overblik</h1>

            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat sundhedsadministrativ koordinator (SAK) kan i 2025 forvente en sundhedsadministrativ koordinator løn efter skat på ca. 22 000 – 28 000 kr. pr. måned. Beløbet afhænger af region, anciennitet, funktionstillæg for planlægnings-, DRG- eller kvalitetsteam-opgaver samt skifteholds­tillæg. Beregn et præcist, personligt estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en sundhedsadministrativ koordinator løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Betydning for udbetaling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-3 px-4 border-b">Grundløn</td><td className="py-3 px-4 border-b">Fastlagt af HK Kommunal/Regionernes overenskomst, højere end lægesekretærtrin.</td></tr>
                  <tr><td className="py-3 px-4 border-b">Funktionstillæg</td><td className="py-3 px-4 border-b">DRG-kodning, vagtplan­lægning, EPJ-superbruger, kvalitet & dokumentation (1 500 – 3 000 kr./md. før skat).</td></tr>
                  <tr><td className="py-3 px-4 border-b">Ulempe- og skifteholds­tillæg</td><td className="py-3 px-4 border-b">Aften + 17 %, nat + 30 %, weekend + 45 %.</td></tr>
                  <tr><td className="py-3 px-4 border-b">Erfaring</td><td className="py-3 px-4 border-b">Automatiske løntrin hvert andet år indtil 10. år.</td></tr>
                  <tr><td className="py-3 px-4 border-b">Pension 15 %</td><td className="py-3 px-4 border-b">Indbetales før skat og forhøjer den samlede værdi.</td></tr>
                  <tr><td className="py-3 px-4 border-b">Kommuneskat</td><td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel svarer til ± 600 kr./md. netto.</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionstabel – Sundhedsadministrativ Koordinator Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Region / Hospital</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {regionExamples.map((example) => (
                    <tr
                      key={example.region}
                      className={`hover:bg-gray-50 ${example.region === selectedRegion ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedRegion(example.region)}
                    >
                      <td className="py-3 px-4 border-b">{example.region}</td>
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">{example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              *Beregnet med gennemsnitlig kommuneskat 24,9 % og AM-bidrag 8 %, ingen kirkeskat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Sundhedsadministrativ Koordinator Løn Efter Skat</h2>
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
                    <tr key={exp.type} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{exp.type}</td>
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">{exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Region Syddanmark, dagvagt</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Bruttoløn:</strong> 38 500 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 080 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 35 420 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 30 770 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 11 400 kr.</li>
                <li><strong>Sundhedsadministrativ koordinator løn efter skat:</strong> ≈ 24 300 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Opnå DRG-kodnings- eller EPJ-superbruger­tillæg – efterspurgte specialist­kompetencer.</li>
              <li>Indgå i skifteholdsplaner – nat og weekend løfter nettolønnen markant.</li>
              <li>Søg rolle som kvalitets- eller kapacitets­koordinator – fast funktions­tillæg.</li>
              <li>Overvej bopæl i lav-skat kommune – kan øge udbetalingen med op til 600 kr./md.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Sundhedsadministrativ Koordinator Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en ny SAK efter skat?</p>
                <p>Omkring 22 000 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når man 28 000 kr. efter skat?</p>
                <p>Typisk med 10+ års erfaring, funktions­tillæg og eventuelt skifteholds­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej, pensionsbidraget på 15 % indbetales før skat og fremgår ikke af nettolønnen.</p>
              </div>
              <div>
                <p className="font-semibold">Er topskat relevant?</p>
                <p>Først ved bruttoløn over ca. 63 000 kr./md., hvilket er usædvanligt i denne stilling.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger sundhedsadministrativ koordinator løn efter skat generelt mellem 22 000 og 28 000 kr.. Funktions- og skifteholds­tillæg samt kommuneskatte­procent er de vigtigste håndtag, hvis du vil hæve udbetalingen. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad dine egne tal lander på – hurtigt og nøjagtigt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.hk.dk/omhk/sektor/kommunal/overenskomstforhandlinger" target="_blank" rel="noopener noreferrer">HK Kommunal & Danske Regioner – Overenskomst 2024-26</a></li>
              <li><a href="https://www.foa.dk/~/media/faelles/pdf/loenmagasiner/2025/inlnmagasinregionalt112025142025low%20pdf.pdf" target="_blank" rel="noopener noreferrer">Regionale løntabeller for sundhedsadministrative koordinatorer 2025</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Sundhedsadministrative stillinger, maj 2025</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommuneskat 2025</a></li>
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

export default SundhedsadministrativKoordinatorLoenPage; 