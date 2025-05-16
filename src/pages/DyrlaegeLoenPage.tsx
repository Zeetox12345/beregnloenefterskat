import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const DyrlaegeLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 50000, netMin: 31800, netMax: 32400 },
    "Aarhus": { grossSalary: 48000, netMin: 30300, netMax: 30900 },
    "Odense": { grossSalary: 46000, netMin: 29100, netMax: 29600 },
    "Aalborg": { grossSalary: 45000, netMin: 28400, netMax: 29000 },
    "Esbjerg": { grossSalary: 44000, netMin: 27800, netMax: 28400 },
    "Randers": { grossSalary: 44000, netMin: 27800, netMax: 28400 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (0‑2 år)", grossSalary: 42000, netMin: 27000, netMax: 27500 },
    { type: "3‑5 år (smådyr)", grossSalary: 46000, netMin: 29000, netMax: 29600 },
    { type: "6‑8 år (kirurg / hest)", grossSalary: 52000, netMin: 32800, netMax: 33400 },
    { type: "9‑11 år (senior / medejer)", grossSalary: 58000, netMin: 36000, netMax: 36600 },
    { type: "Klinik­ejer (10+ år)", grossSalary: 66000, netMin: 40800, netMax: 41400 }
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
        title="Dyrlæge Løn Efter Skat 2025 – Hvad Får Du Udbetalt?"
        description="Hvor meget får du som dyrlæge efter skat i 2025? Se realistiske løntal for smådyr, hest og klinikejere. Beregn dit eget beløb nemt."
        keywords="dyrlæge løn efter skat 2025, dyrlæge nettoløn, dyrlæge indkomst, smådyrsdyrlæge løn, hestedyrlæge løn"
      />
      <Header />
      <PageTitle title="Dyrlæge Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Dyrlæge Løn Efter Skat 2025 – Fra Poter til Pengepung </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidspraktiserende dyrlæge i Danmark kan i 2025 forvente en dyrlæge løn efter skat på 27 000 – 38 000 kr. pr. måned. Beløbet afhænger især af speciale (smådyr, hest, produktionsdyr), antal vagter og om du er ansat, medejer eller klinikejer. Få dit hurtige estimat via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad styrer lønnen på dyreklinikken?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Grundløn + omsætningsbonus</strong> (typisk 5–15 % af egen fakturering)</li>
              <li><strong>Vagt‑ og weekendtillæg</strong> – især akut smådyr / heste kl. 18‑08</li>
              <li><strong>Specialisering</strong> – kirurgi, tand, ultralyd, reproduktion ⇒ +5‑8 %</li>
              <li><strong>Region & kommuneskat</strong> – hovedstaden betaler lidt mere, men beskattes hårdere</li>
              <li><strong>Pension 11 %</strong> – indbetales før skat, så den sænker skatte­grundlaget</li>
            </ul>

            <p className="italic text-gray-600 mt-4">
              Fun fact: Ét vellykket korsbånds‑kirurgi kan finansiere din næste barista‑kaffe i et helt år – efter skat!
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Dyrlæge Løn Efter Skat – Byer 2025</h2>

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
              *Estimater uden kirkeskat, beregnet med gennemsnitlig kommuneskat 24,9 % + AM‑bidrag 8 %. Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> med din egen brutto­løn for et personligt estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaring & Speciale – Dyrlæge Løn Efter Skat</h2>
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
            <p className="text-sm text-gray-600 italic">
              *Klinik­ejer‑tal er gennemsnit efter ejerudlodning og feriepenge.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aarhus – Smådyrsdyrlæge, 48 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 48 000 kr.</li>
                <li><strong>AM‑bidrag 8 % </strong> 3 840 kr.</li>
                <li><strong>Skattepligtig indkomst </strong> 44 160 kr.</li>
                <li><strong>Personfradrag </strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag </strong> 39 510 kr.</li>
                <li><strong>A‑skat (~ 37 %) </strong> 14 600 kr.</li>
                <li><strong>Dyrlæge løn efter skat ≈</strong> 30 160 kr.</li>
              </ul>
            </div>
            
            <p>
              Vil du teste flere vagter eller lavere kommuneskat? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> – tager under ét minut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan løfter du din dyrlæge løn efter skat </h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Hack</th>
                    <th className="py-3 px-4 border-b text-left">Potentiel nettobelønning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Akut‑ og nattevagter</td>
                    <td className="py-3 px-4 border-b">+1 000 – 4 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Ortopædkirurgi‑kursus</td>
                    <td className="py-3 px-4 border-b">+5‑8 % på fakturering</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Salg af foder & pleje­produkter</td>
                    <td className="py-3 px-4 border-b">+500 – 2 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Konsulentarbejde (lægemiddel­firmaer)</td>
                    <td className="py-3 px-4 border-b">+1 500 – 3 500 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Dyrlæge Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nyuddannet dyrlæge efter skat?</p>
                <p>Cirka 27 000 kr./md. uden vagter.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 40 000 kr. efter skat?</p>
                <p>Bliv klinik­ejer eller tag mange akutte vagter og avancerede operationer.</p>
              </div>
              <div>
                <p className="font-semibold">Er hestedyrlæger bedre betalt?</p>
                <p>Ja, men større transport og flere natteopkald.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer topskat?</p>
                <p>Først over ca. 63 000 kr. før skat – realistisk for klinik­ejere.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger dyrlæge løn efter skat mellem 27 000 kr. (nyuddannet uden vagter) og ≈ 41 000 kr. (klinik­ejer). Vagt­tillæg, specialisering og mersalg kan hæve udbetalingen markant. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget dine patienter på fire ben egentlig bidrager til din bankkonto.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.ddd.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dyrlægeforeningens Lønoversigt 2025</a></li>
              <li><a href="https://www.jobindex.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Jobindex Lønstatistik – Dyrlæger (april 2025)</a></li>
              <li><a href="https://www.skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025</a></li>
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

export default DyrlaegeLoenPage; 