import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BioanalytikerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 34000, netMin: 23000, netMax: 23500 },
    "Aarhus": { grossSalary: 33200, netMin: 22400, netMax: 22900 },
    "Odense": { grossSalary: 32800, netMin: 22100, netMax: 22600 },
    "Aalborg": { grossSalary: 32300, netMin: 21700, netMax: 22200 },
    "Esbjerg": { grossSalary: 31800, netMin: 21300, netMax: 21800 },
    "Randers": { grossSalary: 31800, netMin: 21300, netMax: 21800 },
    "Vejle": { grossSalary: 32800, netMin: 22200, netMax: 22700 }
  };

  const experienceData = [
    { years: "Nyuddannet (0‑2 år)", grossSalary: 29500, netMin: 19800, netMax: 20300 },
    { years: "3‑5 år", grossSalary: 31000, netMin: 20900, netMax: 21400 },
    { years: "6‑8 år", grossSalary: 32500, netMin: 22000, netMax: 22500 },
    { years: "9‑11 år", grossSalary: 34000, netMin: 23100, netMax: 23600 },
    { years: "12+ år (special­bioanalytiker)", grossSalary: 35500, netMin: 24100, netMax: 24600 }
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
        title="Bioanalytiker løn efter skat 2025? Se realistiske nettobeløb"
        description="Se hvad en bioanalytiker får udbetalt efter skat i 2025. Få indsigt i byer, anciennitet og vagtbonus – og prøv beregneren med dine egne tal."
        keywords="bioanalytiker løn efter skat 2025, bioanalytiker indkomst, bioanalytiker nettoløn, hospitalslaboratorier, vagtillæg bioanalytiker"
      />
      <Header />
      <PageTitle title="Bioanalytiker Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Bioanalytiker Løn Efter Skat 2025 – Din Guide fra Laboratoriet til Lønsedlen </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – De fleste bioanalytikere får i 2025 en bioanalytiker løn efter skat på cirka 21.000 – 24.000 kr. om måneden. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> til at pipettere din egen nettoløn på få sekunder.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en bioanalytiker (og hvorfor påvirker det lønnen)?</h2>
            <p>
              Bioanalytikere står bag blodprøver, PCR‑tests, MR‑scannings­forberedelse, mikrobiologi og meget mere. De fleste arbejder i regionernes hospitalslaboratorier eller i privat diagnostik (fx Unilabs). Overenskomster forhandles af Danske Bioanalytikere (dbio) med Danske Regioner og KL.
            </p>
            <p className="italic">
              Fun fact: Dit laboratorierør — om det er covid‑PCR eller hæmoglobin A1c — har højst sandsynlig passeret en bioanalytikers hænder .
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Mission Nettoløn: Typiske 2025‑tal før og efter skat</h2>
            <p>
              Standard: 37 t/uge, inkl. 17 % pensionsbidrag, uden vagttillæg.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Bioanalytiker løn efter skat*</th>
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
              *Estimater uden kirkeskat. Vil du se et estimeret bud på din nettoløn? Hop over og <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønhybrid: Anciennitet × Vagt tillæg</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring</th>
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
              *Gennemsnitlig kommuneskat 25 % + AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn‑lab‑faktorer </h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat</strong> – Vejle 23,4 % vs. Brønderslev 26,3 %.</li>
              <li><strong>Vagt‑ og weekendtillæg</strong> – Nattevagt +35 %, weekend +40 %.</li>
              <li><strong>Funktions­tillæg</strong> – MRI / CT, laboratoriekoordinator, kvalitets­ansvarlig.</li>
              <li><strong>Pension 17 %</strong> – Arbejdsgiverindbetaling sænker skattegrundlag.</li>
              <li><strong>Privat diagnostik</strong> – +5‑10 % højere grundløn men lavere pension.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempelberegning (Aarhus, 33.200 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag 8 % ⇒</strong> 2.656 kr.</li>
                <li><strong>Skattepligtig indkomst ⇒</strong> 30.544 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag ⇒</strong> 25.894 kr.</li>
                <li><strong>A‑skat ≈ 34,5 % ⇒</strong> 8.940 kr.</li>
                <li><strong>Netto før pension ⇒</strong> ~21.600 kr.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ om bioanalytiker løn efter skat ‍</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en bioanalytiker før skat?</p>
                <p>29.500 – 35.500 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er bioanalytiker løn efter skat?</p>
                <p>19.000 – 24.500 kr. alt efter by og erfaring.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller vagttillæg med?</p>
                <p>Ja, nathold & weekend øger nettoløn 1.000‑2.000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Er pension en del af lønnen?</p>
                <p>Ja, 17 % betales før A‑skat og sænker skattegrundlaget.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5 tips til at pipettere nettolønnen i vejret</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Snup flere weekendvagter</strong> for +40 % tillæg.</li>
              <li><strong>Bliv kvalitets­ansvarlig</strong> og forhandl funktions­tillæg.</li>
              <li><strong>Efteruddan dig i molekylær diagnostik (PCR)</strong> – +1.500 kr./md.</li>
              <li><strong>Skru på fradrag:</strong> fagforening, a‑kasse, pendlerfradrag.</li>
              <li><strong>Søg privat branche</strong> (fx fertilitets­klinikker) for højere grundløn.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger bioanalytiker løn efter skat som regel mellem 21.000 og 24.000 kr. – men de rette tillæg kan skubbe nettotallet højere. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at få et estimeret bud på, hvad du får udbetalt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder & referencer</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.dbio.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danske Bioanalytikere (dbio) – Lønstatistik 2025</a></li>
              <li><a href="https://www.regioner.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danske Regioner – Overenskomst 2024‑2026</a></li>
              <li><a href="https://www.dst.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur, laboratoriepersonale (dst.dk)</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025 (skm.dk)</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BioanalytikerLoenPage; 