import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AdvokatLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København (Tier 1 firma)": { grossSalary: 70000, netMin: 45500, netMax: 46000 },
    "Aarhus": { grossSalary: 65000, netMin: 42700, netMax: 43200 },
    "Odense": { grossSalary: 60000, netMin: 39300, netMax: 39800 },
    "Aalborg": { grossSalary: 57000, netMin: 37200, netMax: 37700 },
    "Esbjerg": { grossSalary: 55000, netMin: 35900, netMax: 36400 },
    "Randers": { grossSalary: 55000, netMin: 35900, netMax: 36400 },
    "Vejle": { grossSalary: 60000, netMin: 39800, netMax: 40300 }
  };

  const experienceData = [
    { years: "Advokatfuldmægtig (0–3 år)", grossSalary: 45000, netMin: 29500, netMax: 30000 },
    { years: "Advokat (0–3 år)", grossSalary: 55000, netMin: 35900, netMax: 36400 },
    { years: "Advokat (4–7 år)", grossSalary: 65000, netMin: 42700, netMax: 43200 },
    { years: "Advokat (8+ år)", grossSalary: 75000, netMin: 49000, netMax: 49500 },
    { years: "Partner", grossSalary: 100000, netMin: 65000, netMax: 65500 }
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
        title="Advokat Løn Efter Skat 2025 – Nettoløn & Partnerandel"
        description="Advokat løn efter skat 2025: se nettoløn for byer, erfaring og partnerandel, og beregn et hurtigt estimat med beregn løn efter skat."
        keywords="advokat løn efter skat 2025, advokat indkomst, advokatfuldmægtig, partnerløn advokat, offentlig vs privat advokat"
      />
      <Header />
      <PageTitle title="Advokat Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Advokat Løn Efter Skat 2025 – Alt du skal vide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat advokat i Danmark tjener i 2025 typisk ca. 30.000 – 60.000 kr. i løn efter skat pr. måned alt efter by, erfaring og partnerandel. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et personligt estimat på få sekunder.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor er advokat løn efter skat relevant?</h2>
            <p>
              For både nyuddannede advokatfuldmægtige og erfarne partnere er nettolønnen afgørende for privatøkonomien. Denne guide giver dig realistiske tal for advokat løn efter skat, så du kan sammenligne byer, stillingsniveauer.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Advokat Løn – Før og Efter Skat</h2>
            <p>
              Tal baseret på Danske Advokaters lønstatistik (marts 2025) og Jobindex-data for advokatbranchen. Antager 37 t/uge (fast løn uden bonus). Pension 10 % er ikke fratrukket i nettobeløbet.
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
              *Estimater uden kirkeskat. Din faktiske advokat løn efter skat afhænger af bopælskommune, fradrag og bonus. Få et hurtigt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling – fra fuldmægtig til partner</h2>
            <p>
              Advokatlønnen stiger betydeligt med erfaring og specielt ved optagelse som partner, hvor indtægten ofte inkluderer overskudsandel.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring/Stilling</th>
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
              *Beregnet med gennemsnitlig kommuneskat 25% og AM‑bidrag 8%.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Privat advokatfirma vs. offentlig ansat advokat</h2>
            <p>
              Der er væsentlig forskel på advokatlønninger i privat praksis og offentlige stillinger.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Offentligt ansatte advokater (kommuner, styrelser, ministerier): 45.000-55.000 kr. før skat</li>
              <li>Større advokatkontorer (København): 55.000-75.000 kr. før skat + bonus</li>
              <li>Partnere i større advokatkontorer: 100.000+ kr. før skat + overskudsandel</li>
            </ul>
            <p>
              Når du bruger <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, så indtast blot din grundløn for at få et estimat af nettobeløbet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (København, 70.000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag (8%)</strong> 70.000 × 0,08 = 5.600 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 70.000 − 5.600 = 64.400 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 59.750 kr.</li>
                <li><strong>A‑skat (≈ 40%)</strong> 59.750 × 0,40 ≈ 23.900 kr.</li>
                <li><strong>Topskat (15% af beløb over topskattegrænsen)</strong> ≈ 1.500 kr.</li>
                <li><strong>Løn efter skat</strong> 64.400 − 23.900 − 1.500 ≈ 39.000 kr.</li>
                <li><strong>Pension (10%)</strong> 7.000 kr. indbetales før skat → løn efter skat ca. 45.000-46.000 kr.</li>
              </ul>
            </div>
            <p>
              Test dine egne tal på få sekunder via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Faktorer der påvirker advokat løn efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat</strong> (23,4%–26,3%).</li>
              <li><strong>Specialisering:</strong> +5.000-10.000 kr./md.</li>
              <li><strong>Firmaets størrelse og prestige:</strong> Tier 1 vs. mindre lokale firmaer.</li>
              <li><strong>Bonus og resultatløn:</strong> Ofte 10-20% af årslønnen.</li>
              <li><strong>Partnerandel:</strong> Kan mere end fordoble indkomsten.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ om advokat løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor meget tjener en advokatfuldmægtig før skat?</p>
                <p>Typisk 42.000-48.000 kr./md. afhængigt af firma og by.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er advokat løn efter skat?</p>
                <p>Cirka 30.000-60.000 kr. afhængigt af erfaring, firma og partnerandel.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen markant efter advokateksamen?</p>
                <p>Ja, typisk 10.000-15.000 kr. stigning efter bestået advokateksamen.</p>
              </div>
              <div>
                <p className="font-semibold">Hvor meget tjener en partner i et advokatfirma?</p>
                <p>Fra 80.000 kr. til flere hundrede tusinde kr. afhængigt af firmaets størrelse og overskud.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at øge din nettoløn som advokat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Specialisering</strong> – indenfor vækstområder som IT-ret, M&A eller skatteret.</li>
              <li><strong>Netværk og klientpleje</strong> – egen kundeportefølje øger værdi og lønpotentiale.</li>
              <li><strong>Udnyt fradrag:</strong> faglige abonnementer, kurser, fagforening, transport.</li>
              <li><strong>Optimér pensionsindbetalinger</strong> for bedre skattefordele.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Advokater i Danmark tjener i 2025 en bruttoløn på 45.000-100.000+ kr. og en nettoløn på 30.000-65.000+ kr. afhængigt af erfaring, specialisering og partnerandel. Din præcise advokat løn efter skat afhænger også af bonus og pension. Beregn dit eget nettobeløb hurtigt via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.jobindex.dk/tjek-din-loen/advokat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Advokatsamfundet – Branchens nøgletal 2025</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen/advokat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex – Lønstatistik for advokater 2025</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskatteprocenter 2025 (skm.dk)</a></li>
              <li><a href="https://www.dst.dk/da/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, juridisk område (dst.dk)</a></li>
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

export default AdvokatLoenPage; 