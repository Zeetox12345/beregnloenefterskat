import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const VoksenlaerlingLoenPage = () => {
  const [selectedBranche, setSelectedBranche] = useState("Industri / Metal (HK § VOKS)");

  // Branche-specific salary data
  const brancheData = {
    "Industri / Metal (HK § VOKS)": { grossSalary: 22000, netMin: 15500, netMax: 16000 },
    "Bygge & Anlæg (3F)": { grossSalary: 25800, netMin: 18100, netMax: 18700 },
    "Handel & Kontor": { grossSalary: 23400, netMin: 16400, netMax: 16900 },
    "Transport / Lager": { grossSalary: 26200, netMin: 18400, netMax: 19100 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "1. år", grossSalary: 22000, netMin: 15500, netMax: 16000 },
    { type: "2. år (1 års anciennitet)", grossSalary: 23500, netMin: 16400, netMax: 16900 },
    { type: "3. år", grossSalary: 25000, netMin: 17500, netMax: 18000 },
    { type: "4.+ år / lokalt tillæg", grossSalary: 26500, netMin: 18500, netMax: 19100 }
  ];

  const brancheExamples = useMemo(() => {
    return Object.entries(brancheData).map(([branche, data]) => {
      return {
        branche,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Voksenlærling Løn Efter Skat – Få Det Klare Overblik 2025"
        description="Hvad er voksenlærling løn efter skat? Få opdaterede satser, løntabeller og eksempler baseret på branche og anciennitet. Beregn dit eget tal."
        keywords="voksenlærling løn efter skat, voksenlærling 2025, voksenlærling nettoløn, voksenlærling satser, voksenlærling brutto netto"
      />
      <Header />
      <PageTitle title="Voksenlærling Løn Efter Skat 2025" />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Voksenlærling Løn Efter Skat 2025 – Det Skal Du Vide</h1>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som voksenlærling (over 25 år) ligger voksenlærling løn efter skat typisk mellem 16 000 – 20 000 kr. pr. måned i 2025. Bruttolønnen følger fagets mindsteløn for ufaglærte – i de fleste overenskomster ≈ 22 000 – 26 000 kr. pr. måned. Lønnen kan være højere i brancher med tillæg eller lokalaftaler. Tjek dit eget tal på få sekunder via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor får voksenlærlinge mere end ordinære lærlinge?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Alder ≥ 25 år udløser voksenelev- eller voksenlærlingeløn.</li>
              <li>Lønnen skal som minimum svare til fagets mindsteløn for ufaglærte (time- eller månedssats).</li>
              <li>Virksomheder kan få statstilskud til en del af udgiften, men lønnen udbetales til dig som medarbejder på almindelige vilkår.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Branchesatser 2025 – før og efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Branche (eksempler)</th>
                    <th className="py-3 px-4 border-b text-left">Udbetalt mindsteløn før skat*</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {brancheExamples.map((example) => (
                    <tr 
                      key={example.branche} 
                      className={`hover:bg-gray-50 ${example.branche === selectedBranche ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedBranche(example.branche)}
                    >
                      <td className="py-3 px-4 border-b">{example.branche}</td>
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">{example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">
              *Opgjort ved 160 løntimer pr. måned. Estimeret nettoløn antager gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %, ingen kirkeskat.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling gennem uddannelsen</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Uddannelsesår</th>
                    <th className="py-3 px-4 border-b text-left">Typisk bruttoløn</th>
                    <th className="py-3 px-4 border-b text-left">Voksenlærling løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr key={exp.type} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{exp.type}</td>
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">{exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Industri, 25 800 kr. før skat)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Bruttoløn:</strong> 25 800 kr.</li>
                <li><strong>AM-bidrag 8 % →</strong> 2 064 kr.</li>
                <li><strong>Skattepligtig indkomst →</strong> 23 736 kr.</li>
                <li><strong>Personfradrag →</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag →</strong> 19 086 kr.</li>
                <li><strong>A-skat ≈ 38 % →</strong> 7 250 kr.</li>
                <li><strong>Voksenlærling løn efter skat ≈</strong> 16 500 kr.</li>
              </ul>
            </div>
            <p>
              Vil du se tal for en anden branche eller en lavere kommuneskat? Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4 måder at løfte din nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Forhandl lokalt tillæg – enkelte virksomheder giver 1 – 2 kr./time ekstra.</li>
              <li>Tag skifteholds­vagter – aften/nat kan give +15 – 30 %.</li>
              <li>Udnyt befordrings­fradrag hvis du pendler langt til skolen eller praktikpladsen.</li>
              <li>Vælg en kommune med lavere skatte­procent hvis din mobilitet tillader det.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Voksenlærling Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvor stor er forskellen på ordinær elevløn og voksenlærlingeløn?</p>
                <p>Ordinær elevløn første år er ofte 10 000 – 12 000 kr. før skat, mens voksenlærlinge starter omkring 22 000 kr.</p>
              </div>
              <div>
                <p className="font-semibold">Skal virksomheden søge om tilskuddet?</p>
                <p>Ja. Det påvirker ikke din udbetaling – kun virksomhedens nettolønudgift.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår kan jeg forvente at tjene over 20 000 kr. efter skat?</p>
                <p>Typisk fra 3. uddannelsesår eller hvis du får skifteholds­tillæg i en branche med høj mindsteløn.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej. Pensionsbidrag (ca. 13 %) bliver indbetalt før skat og forbedrer din samlede pakke, men vises ikke som løn efter skat.</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 får en voksenlærling som udgangspunkt 22 000 – 26 000 kr. før skat, hvilket giver 16 000 – 20 000 kr. efter skat afhængig af kommune og tillæg. For at se, hvor meget du konkret får udbetalt, brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og indtast din månedsløn – så har du et præcist, personligt estimat.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.danskmetal.dk/metal-ungdom/tjekliste-til-laerlinge/loen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dansk Metal: mindsteløn for voksenlærlinge 2024-2025</a></li>
              <li><a href="https://www.3f.dk/-/media/files/artikler/overenskomst/transportgruppen/laerlingeoverenskomst-2025-2028.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F/DI Lærlingeoverenskomst 2025-2028</a></li>
              <li><a href="https://dhv.dk/wp-content/uploads/2025/03/Laerlingesatser2024_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DHV Lærlingesatser 2024-2025</a></li>
              <li><a href="https://star.dk/indsatser/virksomhedsrettede-redskaber/voksenlaerlingeordningen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">STAR: Voksenlærlingeordningen – vilkår og tilskud</a></li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: juni 2025.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VoksenlaerlingLoenPage; 