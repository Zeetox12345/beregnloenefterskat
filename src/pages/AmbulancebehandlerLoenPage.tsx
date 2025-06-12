import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AmbulancebehandlerLoenPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("Hovedstaden");
  
  // Region-specific salary data
  const regionData = {
    "Hovedstaden": { grossSalary: 45000, netMin: 29800, netMax: 30300 },
    "Midtjylland": { grossSalary: 38000, netMin: 25100, netMax: 25600 },
    "Syddanmark": { grossSalary: 37000, netMin: 24400, netMax: 24900 },
    "Nordjylland": { grossSalary: 35000, netMin: 23100, netMax: 23600 },
    "Sjælland": { grossSalary: 34000, netMin: 22400, netMax: 22900 },
  } as Record<string, { grossSalary: number; netMin: number; netMax: number }>;

  // Experience-based salary progression
  const experienceData = [
    { type: "Elev (3. udd.år)", grossSalary: 26000, netMin: 18000, netMax: 18400 },
    { type: "Nyuddannet (0-2 år)", grossSalary: 31000, netMin: 21000, netMax: 21500 },
    { type: "3-5 års erfaring", grossSalary: 35000, netMin: 23600, netMax: 24100 },
    { type: "6-10 år + nat/weekend", grossSalary: 40000, netMin: 26300, netMax: 26800 },
    { type: "Senior paramediciner (Kbh.)", grossSalary: 48000, netMin: 31800, netMax: 32300 },
  ];

  const regionExamples = useMemo(() => {
    return Object.entries(regionData).map(([region, data]) => ({
      region,
      grossSalary: data.grossSalary,
      netMin: data.netMin,
      netMax: data.netMax,
    }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Ambulancebehandler Løn Efter Skat 2025 – Se Din Nettoløn"
        description="Hvad tjener en ambulancebehandler efter skat i 2025? Se lønbånd før og efter skat – og brug beregn løn efter skat til at finde dit præcise nettobeløb hurtigt."
        keywords="ambulancebehandler løn efter skat, ambulanceassistent løn, ambulancebehandler nettoløn, foa ambulance løn, ambulancebehandler løn 2025"
      />
      <Header />
      <PageTitle title="Ambulancebehandler Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Ambulancebehandler Løn Efter Skat 2025 – Akut Tal, Akut Nettoløn</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids ambulancebehandler (37 t/uge) ligger i 2025 på en løn før skat omkring 31&nbsp;000 – 48&nbsp;000&nbsp;kr. pr. måned. Det svarer til en ambulancebehandler løn efter skat på cirka 21&nbsp;000 – 32&nbsp;000&nbsp;kr. Få dit helt præcise tal lynhurtigt med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – du skal blot indtaste din brutto­løn.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger ambulancebehandler løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det gør en forskel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Grundløn &amp; overenskomst</td>
                    <td className="py-3 px-4 border-b">FOA/KL-aftalen giver timeløn ≈ 186&nbsp;kr./t (ca. 30 800&nbsp;kr./md.) fra februar 2025, før ulempetillæg. <br/>Kilde: <a href="https://www.foa.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">foa.dk</a></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Tillæg for vagter</td>
                    <td className="py-3 px-4 border-b">Aften +18 %, nat +30 %, weekend +45 % kan løfte bruttolønnen 3-6&nbsp;k/md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring &amp; kvalifikationstrin</td>
                    <td className="py-3 px-4 border-b">4- og 10-års anciennitet udløser ekstra løntrin på op til 2&nbsp;k/md. <br/>Kilde: <a href="https://www.foa.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">foa.dk</a></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København betaler ~7 % over landsgennemsnittet (395&nbsp;k/år = 33&nbsp;k/md.). <br/>Kilde: <a href="https://www.salaryexpert.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salaryexpert.com</a></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Speciale</td>
                    <td className="py-3 px-4 border-b">Paramediciner-certifikat, læge­assistance eller akutlægehelikopter giver 1-3&nbsp;k/md. ekstra før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 15&nbsp;%</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat; forbedrer totalpakken, men vises ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Ambulancebehandler Løn Før &amp; Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Funktion</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{row.type}</td>
                      <td className="py-3 px-4 border-b">{row.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">{row.netMin.toLocaleString("da-DK")} – {row.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regionstabel – Ambulancebehandler Løn Efter Skat 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Region</th>
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
            <p className="text-sm text-gray-600 italic">* Nettotal beregnet med AM-bidrag 8 %, personfradrag 4&nbsp;650&nbsp;kr. og typisk trækprocent 37 %.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Nat-vagt i Region Midt</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 38&nbsp;000&nbsp;kr.</li>
                <li><strong>AM-bidrag 8&nbsp;%:</strong> 3&nbsp;040&nbsp;kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 34&nbsp;960&nbsp;kr.</li>
                <li><strong>Personfradrag:</strong> 4&nbsp;650&nbsp;kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 30&nbsp;310&nbsp;kr.</li>
                <li><strong>A-skat (≈ 37&nbsp;%):</strong> 11&nbsp;220&nbsp;kr.</li>
                <li><strong>Ambulancebehandler løn efter skat ≈</strong> 24&nbsp;300&nbsp;kr.</li>
              </ul>
            </div>
            <p className="mt-4">Vil du teste andre tillæg eller kommunesatser? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se det nøjagtigt for din situation.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige veje til højere nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Planlæg flere nat- og weekendvagter</strong> – genetillæg giver 3-6&nbsp;k/md. ekstra før skat.</li>
              <li><strong>Tag paramediciner-opkvalificering</strong> – funktions­tillæg + kvalifikations­trin.</li>
              <li><strong>Søg helikopter- eller akutlægebil-beredskab</strong> – højere rådigheds­honorar pr. døgn.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – kan løfte nettolønnen 500-700&nbsp;kr./md. uden ekstra timer.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Ambulancebehandler Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny ambulancebehandler efter skat?</p>
                <p>Ca. 21&nbsp;000&nbsp;kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 30&nbsp;000&nbsp;kr. efter skat?</p>
                <p>Med flere års erfaring, nat-/weekend­tillæg og paramediciner­certifikat i Hovedstaden.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller rådighedshonorar i nettoløn?</p>
                <p>Ja – det beskattes som almindelig løn.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettobeløbet?</p>
                <p>Nej, pensions­bidraget (15&nbsp;%) indbetales før skat og vises ikke som nettoløn.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger ambulancebehandler løn efter skat typisk mellem 21&nbsp;000 og 32&nbsp;000&nbsp;kr. pr. måned – på basis af 31&nbsp;000 – 48&nbsp;000&nbsp;kr. før skat. Vagttillæg, paramediciner­træning og geografi er de hurtigste måder at skrue nettobeløbet op på. Test dit eget scenarie nu i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://juuldanmark.dk/blog/ambulancebehandler/hvad-tjener-en-ambulancebehandler" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JUUL Danmark – Nyuddannet ambulancebehandler 34&nbsp;186&nbsp;kr./md. før skat</a></li>
              <li><a href="https://www.foa.dk/~/media/okpdffiles/ok24-1561%20overenskomst%20for%20ambulanceuddannet%20personale%20pdf.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FOA/KL Overenskomst 2025 – løntrin &amp; tillæg (OK-24)</a></li>
              <li><a href="https://www.salaryexpert.com/compensation-hub/salary-calculator?job=Paramedic&amp;loc=Copenhagen,%20Denmark&amp;rtype=4&amp;smsg=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Paramedic, København gennemsnit 395&nbsp;k&nbsp;kr./år</a></li>
            </ul>
            
            <p className="text-sm text-gray-500 mt-8">Opdateret: juni 2025.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AmbulancebehandlerLoenPage; 