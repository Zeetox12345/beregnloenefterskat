import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const DagpengeLoenPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Maks. sats (fuldtid)");
  
  // Different unemployment benefit categories and their salary data
  const categoryData = {
    "Dimittend (ikke forsørger)": { grossSalary: 15081, netMin: 11000, netMax: 11400 },
    "Maks. sats (fuldtid)": { grossSalary: 21092, netMin: 13800, netMax: 14300 },
    "Maks. sats m. beskæftigelsestillæg (første 3 mdr.)": { grossSalary: 25070, netMin: 16200, netMax: 16700 },
    "Deltidsforsikret maks.": { grossSalary: 14061, netMin: 10000, netMax: 10300 }
  };

  // Factors affecting unemployment benefits
  const factorsData = [
    { factor: "Maksimal dagpengesats", description: "21 092 kr./md. for fuldtidsforsikrede (90 % af tidligere indkomst, dog loft)." },
    { factor: "Beskæftigelsestillæg", description: "+3 978 kr. de første 3 måneder → 25 070 kr./md. før skat, hvis du har haft min. 30 278 kr. i gennemsnitlig løn de bedste 12 mdr." },
    { factor: "Dimittendsat", description: "15 081 kr./md. (nyuddannede, fuldtidsforsikrede). Forsørgere får 17 295 kr./md." },
    { factor: "Deltid / under 30 timer", description: "Deltidsforsikrede modtager 2/3 af fuldtidssatsen." },
    { factor: "Personfradrag & trækprocent", description: "Fradrag 4 650 kr. + gennemsnitlig kommuneskat ~25 % afgør, hvor mange kroner du får i hånden." }
  ];

  const categoryExamples = useMemo(() => {
    return Object.entries(categoryData).map(([category, data]) => {
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
        title="Dagpenge Løn Efter Skat 2025 – Komplet guide"
        description="Hvad får du udbetalt i dagpenge efter skat i 2025? Se beløb for dimittender og fuldtidsforsikrede, inkl. beskæftigelsestillæg – og beregn din nettoløn præcist."
        keywords="dagpenge løn efter skat, dagpenge 2025, dimittend dagpenge, beskæftigelsestillæg, a-kasse"
      />
      <Header />
      <PageTitle title="Dagpenge Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Dagpenge Løn Efter Skat 2025 – Fra Bruttosats til Brugbar Nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – I 2025 ligger den officielle dagpengesats før skat mellem 15 081 kr. (dimittend) og 25 070 kr. pr. måned (maks. sats inkl. beskæftigelsestillæg de første tre måneder). Det giver en dagpenge løn efter skat på cirka 11 000 – 16 500 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad bestemmer din dagpenge løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  {factorsData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b font-medium">{item.factor}</td>
                      <td className="py-3 px-4 border-b">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Dagpenge Før & Efter Skat 2025*</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Satskategori</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat**</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryExamples.map((example) => (
                    <tr 
                      key={example.category} 
                      className={`hover:bg-gray-50 ${example.category === selectedCategory ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedCategory(example.category)}
                    >
                      <td className="py-3 px-4 border-b">{example.category}</td>
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
              * Satser for 2025.<br />
              ** Nettotal beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent på 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Maksimumdagpenge uden beskæftigelsestillæg</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Dagpenge før skat:</strong> 21 092 kr.</li>
                <li><strong>AM-bidrag 8 % →</strong> 1 687 kr.</li>
                <li><strong>Skattepligtig indkomst →</strong> 19 405 kr.</li>
                <li><strong>Personfradrag →</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag →</strong> 14 755 kr.</li>
                <li><strong>A-skat (≈ 37 %) →</strong> 5 460 kr.</li>
                <li><strong>Dagpenge løn efter skat ≈</strong> 13 900 kr.</li>
              </ul>
            </div>
            <p>Tast dit eget før-skat-beløb i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se den nøjagtige udbetaling.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire måder at få mere ud af dagpengene</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Opfyld beskæftigelseskravet</strong> – 30 278 kr. i gennemsnitlig løn (12/24 måneder) giver de første tre måneders højeste tillæg. <em>Kilde: <a href="#" className="text-blue-600 hover:underline">Magistrenes A-kasse</a></em></li>
              <li><strong>Udnyt fradrag</strong> – transport-, fagforenings- og rentefradrag kan hæve udbetalt beløb med flere hundrede kroner pr. måned.</li>
              <li><strong>Skift til lav-skat kommune</strong> – op til 0,8 pct.point lavere kommuneskat svarer til ca. 600 kr. mere netto.</li>
              <li><strong>Ekstra-job under beløbsgrænse</strong> – arbejde op til 14,8 t/uge uden modregning (kræver klip i dagpenge), men giver kontant nettoløft.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Dagpenge Løn Efter Skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-3 px-4 border-b text-left">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Hvad får jeg som nyuddannet efter skat?</td>
                    <td className="py-3 px-4 border-b">Omkring 11 000 kr./md. uden forsørgerpligt.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Bliver beskæftigelsestillæg beskattet?</td>
                    <td className="py-3 px-4 border-b">Ja, det beskattes som almindelig dagpenge-løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Indgår pension i dagpenge?</td>
                    <td className="py-3 px-4 border-b">Nej, der indbetales ingen pension under dagpenge.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kan jeg få topskat af dagpenge?</td>
                    <td className="py-3 px-4 border-b">Kun hvis du har anden indkomst, da selve dagpengesatsen ligger under topskattegrænsen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger dagpenge løn efter skat mellem ca. 11 000 og 16 500 kr. pr. måned, afhængigt af om du er dimittend, fuldtidsforsikret eller har beskæftigelsestillæg. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se præcis, hvad der tikker ind på kontoen under ledighed – og planlæg dit budget derefter.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <p className="text-center text-blue-800 font-medium">
                  Dette indlæg er udgivet i samarbejde med <a href="https://www.dagpengeberegner.dk/" className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-200" target="_blank" rel="noopener noreferrer">Dagpengeberegner.dk</a>
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>HK A-kasse – Dagpengesatser 2025 (maks. 21 092 kr./md.) <em><a href="https://www.hk.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">HK</a></em></li>
              <li>AKA.dk – Dagpenge m. beskæftigelsestillæg 25 070 kr. pr. md. <em><a href="https://aka.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Akademikernes A-kasse</a></em></li>
              <li>FOA – Dimittend- og forsørgersatser 2025 <em><a href="https://www.foa.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FOA</a></em></li>
              <li>MA-kasse – Krav til beskæftigelsestillæg (30 278 kr.) <em><a href="https://www.ma-kasse.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Magistrenes A-kasse</a></em></li>
              <li>SalaryExpert – Average income data for comparative nets <em><a href="https://www.bm.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">bm.dk</a></em></li>
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

export default DagpengeLoenPage; 