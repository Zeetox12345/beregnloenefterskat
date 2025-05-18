import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SocialpaedagogLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 38000, netMin: 24700, netMax: 25300 },
    "Aarhus": { grossSalary: 36000, netMin: 23300, netMax: 23900 },
    "Odense": { grossSalary: 34000, netMin: 22000, netMax: 22600 },
    "Aalborg": { grossSalary: 33000, netMin: 21300, netMax: 21900 },
    "Esbjerg": { grossSalary: 32000, netMin: 20700, netMax: 21300 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet (trin 1)", grossSalary: 28000, netMin: 18500, netMax: 18900 },
    { type: "3-4 år (trin 3)", grossSalary: 31000, netMin: 20500, netMax: 21000 },
    { type: "5-7 år + specialtillæg", grossSalary: 34000, netMin: 22000, netMax: 22600 },
    { type: "8-10 år + nat/weekend", grossSalary: 37000, netMin: 24100, netMax: 24700 },
    { type: "11+ år (faglig koordinator)", grossSalary: 40000, netMin: 25500, netMax: 26000 },
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
        title="Socialpædagog Løn Efter Skat – Opdateret Guide for 2025"
        description="Få overblik over socialpædagog løn efter skat i Danmark. Sammenlign løntrin, vagttillæg og kommuner – og brug beregneren til at finde din udbetaling."
        keywords="socialpædagog løn, løn efter skat, socialpædagog, pædagog løn, pædagogløn efter skat"
      />
      <Header />
      <PageTitle title="Socialpædagog Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Socialpædagog Løn Efter Skat 2025 – Nettobeløb, Overenskomst og Tillæg</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids socialpædagog (37 t/uge) kan i 2025 som udgangspunkt forvente en løn før skat på 28.000 – 40.000 kr. pr. måned – fra nyuddannet til erfaren med specialtillæg og skæve vagter. Det svarer til en socialpædagog løn efter skat på cirka 18.500 – 26.000 kr. Husk, at din kommune, dine tillæg og dit vagtmønster hurtigt kan flytte nettobeløbet. Tjek dit helt præcise tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut, og du kan ændre tillæg og kommunesats, til det passer præcis til dig.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer socialpædagog løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-2 px-4 border-b text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Grundløn & løntrin</td>
                    <td className="py-2 px-4 border-b">Socialpædagoger aflønnes typisk efter faglig bachelor-trin i KL-overenskomsten; ny basisløn pr. 1. april 2025 er 28.368 kr./md. før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Erfaringstrin</td>
                    <td className="py-2 px-4 border-b">Automatiske trin hvert andet år de første 10 år – hvert trin +900-1.100 kr. før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Special- og funktionstillæg</td>
                    <td className="py-2 px-4 border-b">Psykiatri, autismespektrum, socialt udsatte, § 85-støtte m.m. giver 1.200 – 2.500 kr./md. før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Ulempe- & skifteholdstillæg</td>
                    <td className="py-2 px-4 border-b">Aften +19 %, nat +32 %, weekend +45 % – kan hæve nettolønnen 1.000 – 2.000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Pension 14 %</td>
                    <td className="py-2 px-4 border-b">Arbejdsgiverbidraget trækkes før skat og forbedrer totalpakken, men vises ikke i nettolønnen.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-2 px-4 border-b">Spænder op til 0,8 pct.point mellem kommuner → ± 600 kr./md. i socialpædagog løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – byoversigt 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">By / Region</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((item) => (
                    <tr 
                      key={item.city}
                      className={`cursor-pointer hover:bg-blue-50 ${selectedCity === item.city ? 'bg-blue-100 hover:bg-blue-100' : ''}`}
                      onClick={() => setSelectedCity(item.city)}
                    >
                      <td className="py-2 px-4 border-b font-medium">{item.city}</td>
                      <td className="py-2 px-4 border-b">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="py-2 px-4 border-b">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className="py-2 px-4 text-xs italic">
                      * Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – socialpædagog løn før og efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item) => (
                    <tr key={item.type} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b font-medium">{item.type}</td>
                      <td className="py-2 px-4 border-b">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="py-2 px-4 border-b">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Odense, socialpædagog med nat- og weekendtillæg</h2>
            <div className="bg-gray-50 p-4 rounded-lg my-6">
              <p className="font-medium mb-2">Løn før skat: 34.000 kr.</p>
              <p className="mb-2">AM-bidrag 8 %: 2.720 kr.</p>
              <p className="mb-2">Skattepligtig indkomst: 31.280 kr.</p>
              <p className="mb-2">Personfradrag: 4.650 kr.</p>
              <p className="mb-2">Beskatningsgrundlag: 26.630 kr.</p>
              <p className="mb-2">A-skat (≈ 37 %): 9.850 kr.</p>
              <p className="font-semibold">Socialpædagog løn efter skat ≈ 21.430 kr.</p>
              <p className="mt-4 text-sm">
                Ændr vagttillæg, specialtillæg eller kommunesats i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget din egen udbetaling rykker.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li className="pl-2">
                <strong>Tag nat-, weekend- og helligdagsvagter</strong> – de højeste ulempetillæg kan øge nettolønnen op til 2.000 kr./md.
              </li>
              <li className="pl-2">
                <strong>Specialisér dig</strong> – fx i autismespektrum, misbrugsbehandling eller psykiatri og forhandl funktionstillæg.
              </li>
              <li className="pl-2">
                <strong>Bliv faglig koordinator eller TR</strong> – ledelses-/mentoropgaver udløser ofte 1.500 – 2.500 kr./md. før skat.
              </li>
              <li className="pl-2">
                <strong>Vælg lav-skat kommune</strong> – op til ca. 600 kr. ekstra i socialpædagog løn efter skat hver måned uden at skifte job.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Socialpædagog Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny socialpædagog efter skat?</p>
                <p>Typisk 18.500 – 19.000 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår når man 25.000 kr. efter skat?</p>
                <p>Med 8-10 års erfaring, special- og ulempetillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej – arbejdsgiverbetalt pension på ca. 14 % indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Kan tillæg udløse topskat?</p>
                <p>Først hvis samlet månedsløn før skat overstiger ca. 63.000 kr., hvilket er usædvanligt i socialpædagogiske stillinger.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger socialpædagog løn efter skat som regel mellem 18.500 og 26.000 kr. Grundløn, erfaring, specialtillæg og kommuneskat er de vigtigste løftestænger. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget dit pædagogiske arbejde giver på kontoen, når sidste borger er puttet og rapporten er skrevet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="https://www.kl.dk/media/3e0fphaz/ok24-6001-overenskomst-for-paedagoger-ved-daginstitutioner-skolefritidsordninger-klubber-mv.pdf?format=noformat" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">KL & Socialpædagogernes Landsforbund – Overenskomst 2024-26 (løntrin og tillæg)</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen/socialpaedagog" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Socialpædagoger, maj 2025</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommunesatser 2025</a></li>
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

export default SocialpaedagogLoenPage; 