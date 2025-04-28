import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const PsykologLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 45000, netMin: 29300, netMax: 29800 },
    "Aarhus": { grossSalary: 44200, netMin: 28700, netMax: 29200 },
    "Odense": { grossSalary: 43600, netMin: 28200, netMax: 28700 },
    "Aalborg": { grossSalary: 43000, netMin: 27800, netMax: 28300 },
    "Esbjerg": { grossSalary: 42500, netMin: 27400, netMax: 27900 },
    "Randers": { grossSalary: 42500, netMin: 27400, netMax: 27900 },
    "Vejle": { grossSalary: 43600, netMin: 28000, netMax: 28500 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år)", grossSalary: 38000, netMin: 24800, netMax: 25300 },
    { years: "3–5 år", grossSalary: 40000, netMin: 26100, netMax: 26600 },
    { years: "6–8 år", grossSalary: 42000, netMin: 27500, netMax: 28000 },
    { years: "9–11 år", grossSalary: 44000, netMin: 28800, netMax: 29300 },
    { years: "12+ år (specialist m.v.)", grossSalary: 46000, netMin: 30000, netMax: 30500 }
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
        title="Psykolog Løn Efter Skat 2025 – Nettoløn & Specialisttillæg"
        description="Psykolog løn efter skat 2025: se nettoløn for byer, anciennitet og specialisttillæg, og beregn et hurtigt estimat med beregn løn efter skat."
        keywords="psykolog løn efter skat 2025, psykolog indkomst, Dansk Psykolog Forening, specialistgodkendelse, offentlig vs privat psykolog"
      />
      <Header />
      <PageTitle title="Psykolog Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Psykolog Løn Efter Skat 2025 – Alt du skal vide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat psykolog i Danmark kan i 2025 forvente ca. 24.000 – 29.000 kr. i løn efter skat pr. måned. Nettolønnen afhænger af kommune, anciennitet, ansættelses­sted (region, kommune eller privat praksis) og eventuelle specialist­tillæg. Få et hurtigt estimat på få sekunder med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en psykolog?</h2>
            <p>
              Psykologer udreder, behandler og forebygger psykiske problemstillinger hos børn, unge og voksne. De arbejder i kommuner (PPR, familieafdelinger), regioner (psykiatri, somatik), kriminalforsorgen og privat praksis. Overenskomster forhandles af Dansk Psykolog Forening (DPF) med KL, Danske Regioner eller RLTN.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Psykolog Løn – Før og Efter Skat</h2>
            <p>
              Tallene bygger på DPF's løntabel pr. 1. april 2025 (basisløn + central regulering) for 37 timer/uge. Pension (18 %) er ikke trukket fra nettobeløbet.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Kommune/By</th>
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
              *Estimater uden kirkeskat. Få et mere præcist tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> værktøjet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Kommunale og regionale psykologer rykker fra basisløn (trin 4) til slutløn (trin 8). Specialistgodkendelse giver yderligere 8–10 %.
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
              *Beregnet med gennemsnitlig kommuneskat 25 % og AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Region vs. kommune vs. privat praksis</h2>
            <p>
              Regionsansatte får typisk 1–2 trin mere samt tillæg for vagtberedskab.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Kommunale psykologer kan forhandle funktionstillæg (fx PPR‑koordinator) +1.500 kr./md.</li>
              <li>Privat praksis afhænger af kundeportefølje; brutto 50.000+ kr./md., men selvstændige betaler selv pension.</li>
            </ul>
            <p>
              Når du bruger <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, så indtast blot din grundløn for at få et estimat af nettobeløbet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense, 43.600 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag (8 %)</strong> 43.600 × 0,08 = 3.488 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 43.600 − 3.488 = 40.112 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 35.462 kr.</li>
                <li><strong>A‑skat (≈ 34,5 %)</strong> 35.462 × 0,345 ≈ 12.235 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 40.112 − 12.235 ≈ 27.877 kr.</li>
                <li><strong>Pension (18 %)</strong> 7.848 kr. indbetales før skat → løn efter skat ca. 27.800 kr.</li>
              </ul>
            </div>
            <p>
              Test dine egne tal på få sekunder via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Faktorer der påvirker psykolog løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat</strong> (23,4 %–26,3 %).</li>
              <li><strong>Specialistgodkendelse & supervisor­tillæg:</strong> +3.000–5.000 kr./md.</li>
              <li><strong>Vagttjeneste (psykiatri):</strong> +2.000–4.000 kr./md.</li>
              <li><strong>Pension:</strong> 18 % sænker skattegrundlaget.</li>
              <li><strong>Efteruddannelse</strong> kan udløse kvalifikations­tillæg.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ om psykolog løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en psykolog før skat?</p>
                <p>38.000 – 46.000 kr. + tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er psykolog løn efter skat?</p>
                <p>Cirka 24.000 – 29.000 kr. afhængigt af kommune og anciennitet.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, løntrin & specialisttillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Er privat praksis bedre lønnet?</p>
                <p>Brutto ja, men udgifter og pension betales selv.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at øge din nettoløn som psykolog</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Bliv specialist</strong> – 8–10 % lønløft.</li>
              <li><strong>Forhandl funktionstillæg</strong> (fx teamleder).</li>
              <li><strong>Udnyt fradrag:</strong> fagforening, supervision, kursusudgifter.</li>
              <li><strong>Justér forskudsopgørelsen</strong> ved vagt­honorarer.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Psykologer i Danmark tjener i 2025 en bruttoløn på 38.000 – 46.000 kr. og en nettoløn på 24.000 – 29.000 kr. Din præcise psykolog løn efter skat afhænger af specialist­tillæg og pension. Beregn dit eget nettobeløb hurtigt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.dp.dk/wp-content/uploads/2025/03/Loen-takster-og-honorarer-1.-april-2025-2_1516795_0.1.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dansk Psykolog Forening – Løntabel 2025</a></li>
              <li><a href="https://www.kl.dk/media/3hfcnsvt/aftale-mellem-kl-og-forhandlingsfaellesskabet-om-overenskomst-og-aftalefornyelsen-pr-1-april-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KL & Danske Regioner – Overenskomst 2024‑2026</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskatte­procenter 2025 (skm.dk)</a></li>
              <li><a href="https://www.dst.dk/da/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, social‐ og sundhedsområde (dst.dk)</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Senest opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PsykologLoenPage; 