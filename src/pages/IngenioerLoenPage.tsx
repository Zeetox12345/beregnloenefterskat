import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const IngenioerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");

  // City-specific salary data
  const cityData = {
    "København – Pharma, FinTech": { grossSalary: 65000, netMin: 40500, netMax: 41000 },
    "Aarhus – Vind, e-commerce": { grossSalary: 60000, netMin: 37200, netMax: 37700 },
    "Odense – Robotics": { grossSalary: 57000, netMin: 35200, netMax: 35700 },
    "Aalborg – Energi, telecom": { grossSalary: 55000, netMin: 34000, netMax: 34500 },
    "Esbjerg – Offshore, PTX": { grossSalary: 52000, netMin: 32100, netMax: 32600 },
    "Randers – Produktions-SMV": { grossSalary: 50000, netMin: 30700, netMax: 31200 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Nyuddannet / graduate", grossSalary: 46000, netMin: 29000, netMax: 31000 },
    { type: "3–5 år / projektingeniør", grossSalary: 52000, netMin: 32000, netMax: 35000 },
    { type: "6–8 år / senior specialist", grossSalary: 61000, netMin: 36000, netMax: 39000 },
    { type: "9+ år / team- eller projektleder", grossSalary: 70000, netMin: 41000, netMax: 45000 },
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
        title="Ingeniør løn efter skat i 2025 – det fulde overblik"
        description="Ingeniør løn efter skat i 2025? Se opdaterede tal for nyuddannede og seniorer, byforskelle og karriere­trin – og beregn din egen udbetaling hurtigt."
        keywords="ingeniør løn, løn efter skat, ingeniør løn 2025, ingeniør udbetalt løn, ingeniør løn efter skat, IDA løn, løn ingeniør"
      />
      <Header />
      <PageTitle title="Ingeniør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Ingeniør Løn Efter Skat 2025 – Fra CAD-Model til Kontoudtog 🏗️💸</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Ingeniør løn efter skat spænder i Danmark i 2025 typisk fra 29 000 kr. til 45 000 kr. pr. måned – afhængigt af branche, certifikater, ansvar og kommune­skat. Få et hurtigt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierefase – Løn før & Efter Skat i 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Karrierefase</th>
                    <th className="px-4 py-2 border">Løn før skat</th>
                    <th className="px-4 py-2 border">Løn efter skat</th>
                    <th className="px-4 py-2 border">Hvad flytter tallet?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Nyuddannet / graduate</td>
                    <td className="px-4 py-2 border">46 000 – 50 000 kr.</td>
                    <td className="px-4 py-2 border">29 000 – 31 000 kr.</td>
                    <td className="px-4 py-2 border">IDA-minimum + evt. aften­til­læg</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">3–5 år / projekt­ingeniør</td>
                    <td className="px-4 py-2 border">52 000 – 57 000 kr.</td>
                    <td className="px-4 py-2 border">32 000 – 35 000 kr.</td>
                    <td className="px-4 py-2 border">Certifikat (Eurocodes, PLC, Scrum)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border font-bold">6–8 år / senior specialist</td>
                    <td className="px-4 py-2 border">58 000 – 64 000 kr.</td>
                    <td className="px-4 py-2 border">36 000 – 39 000 kr.</td>
                    <td className="px-4 py-2 border"></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">9+ år / team- eller projekt­leder</td>
                    <td className="px-4 py-2 border">66 000 – 75 000 kr.</td>
                    <td className="px-4 py-2 border">41 000 – 45 000 kr.</td>
                    <td className="px-4 py-2 border">People-ansvar, bonus, resultat­løn</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">*Løn efter skat beregnet med 8 % AM-bidrag, måneds­fradrag 4 300 kr. og gennemsnitlig kommune­skat 25,1 %.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en ingeniør løn efter skat? 🔧</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Løn-driver</th>
                    <th className="px-4 py-2 border">Hvorfor den rykker på løn efter skat</th>
                    <th className="px-4 py-2 border">Typisk effekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Branche</td>
                    <td className="px-4 py-2 border">Pharma, grøn energi & IT betaler 5–12 % højere løn før skat end traditionel produktion</td>
                    <td className="px-4 py-2 border">+1 500 – 4 500 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Certificeringer</td>
                    <td className="px-4 py-2 border">PMP®, PRINCE2®, AWS, FROSIO, Eurocodes</td>
                    <td className="px-4 py-2 border">+1 000 – 3 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Bonus / RSU'er</td>
                    <td className="px-4 py-2 border">5–20 % af årsløn i private virksomheder</td>
                    <td className="px-4 py-2 border">+1 500 – 6 000 kr./md. (løn efter skat)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Geografi & kommune­skat</td>
                    <td className="px-4 py-2 border">0,6 pct-point forskel i skat = ±650 kr./md.</td>
                    <td className="px-4 py-2 border">±650 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Skiftehold / offshore</td>
                    <td className="px-4 py-2 border">Natte­vagter, 14-14 rotationer, diæter</td>
                    <td className="px-4 py-2 border">+2 000 – 4 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Pension (12–17 %)</td>
                    <td className="px-4 py-2 border">Trækkes før skat → højere samlet pakke</td>
                    <td className="px-4 py-2 border">—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat i de største ingeniør-hubs (2025) 🌍</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">By / Økosystem</th>
                    <th className="px-4 py-2 border">Løn før skat</th>
                    <th className="px-4 py-2 border">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-2 border">{item.city}</td>
                      <td className="px-4 py-2 border">{item.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-2 border">{item.netMin.toLocaleString('da-DK')} – {item.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm">* Beregnet med AM-bidrag 8 %, personfradrag 4 300 kr./md. og gennemsnitlig kommuneskat 25,1 %.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – hvor hurtigt stiger lønnen? 📈</h2>
            <ul className="list-disc pl-6">
              <li>Graduate (0–2 år) – idriftsætning, support, løn efter skat ~30 000 kr.</li>
              <li>Projekt­ingeniør (3–5 år) – ansvar for del­leverancer, 32–35 000 kr.</li>
              <li>Senior / specialist (6–8 år) – fagansvar, review, 36–39 000 kr.</li>
              <li>Team- eller projekt­leder (9+ år) – personale, budget, 41–45 000 kr.</li>
              <li>Portefølje- eller afdelingschef (12+ år) – &gt;45 000 kr. efter skat + bonus.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konkret beregningseksempel ⚙️</h2>
            <p className="font-medium">Senior elektro­ingeniør i Odense<br/>Løn før skat: 59 000 kr.</p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p>Trin</p>
              <p>AM-bidrag (8 %): 4 720 kr.</p>
              <p>Skattepligtig indkomst: 54 280 kr.</p>
              <p>Personfradrag: 4 300 kr.</p>
              <p>Beskatnings­grundlag: 49 980 kr.</p>
              <p>A-skat (≈37 %): 18 500 kr.</p>
              <p className="font-bold">Løn efter skat ≈ 35 800 kr.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fem hurtige boosts til højere ingeniør løn efter skat 🚀</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">#</th>
                    <th className="px-4 py-2 border">Tiltag</th>
                    <th className="px-4 py-2 border">Typisk løn efter skat-løft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">1</td>
                    <td className="px-4 py-2 border">Hent en international certificering (PMP®, AWS, FROSIO)</td>
                    <td className="px-4 py-2 border">+1 000 – 3 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">2</td>
                    <td className="px-4 py-2 border">Skift til højmargin-branche (pharma, offshore, AI)</td>
                    <td className="px-4 py-2 border">+1 500 – 4 500 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">3</td>
                    <td className="px-4 py-2 border">Forhandl KPI-bonus eller RSU-program</td>
                    <td className="px-4 py-2 border">+5 – 15 % årligt</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">4</td>
                    <td className="px-4 py-2 border">Tag offshore-eller natte­vagter</td>
                    <td className="px-4 py-2 border">+2 000 – 4 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">5</td>
                    <td className="px-4 py-2 border">Flyt til kommune med skat &lt; 24 %</td>
                    <td className="px-4 py-2 border">+300 – 650 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fremtidige løn- og jobtendenser 🔮</h2>
            <ul className="list-disc pl-6">
              <li>Grøn omstilling – Power-to-X, CCS og offshore vind skaber stor efterspørgsel på proces-, el- og maskin­ingeniører.</li>
              <li>AI & digital twin-modeller – hæver lønnen for software-, data- og automations­specialister med 8–12 %.</li>
              <li>Hybrid ledelse – ingeniører med både teknisk og people-skill kan hente de højeste tillæg.</li>
              <li>Internationalisering – engelsksprogede projekter giver diæter og bonus uden at flytte bopæl.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – oftest stillede spørgsmål 🤔</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Hvor meget tjener en nyuddannet ingeniør efter skat?</h3>
                <p>Omkring 29–31 000 kr. pr. måned ved IDA's minimum.</p>
              </div>
              <div>
                <h3 className="font-semibold">Kan jeg ramme 45 000 kr. i løn efter skat?</h3>
                <p>Ja – som senior leder i højt­lønnet branche med bonus eller offshore-tillæg.</p>
              </div>
              <div>
                <h3 className="font-semibold">Tæller pension med i løn efter skat?</h3>
                <p>Nej, 12–17 % pensions­bidrag trækkes før skat og vises ikke i løn efter skat.</p>
              </div>
              <div>
                <h3 className="font-semibold">Hvornår udløses topskat?</h3>
                <p>Ved løn før skat over ca. 55 400 kr. pr. måned (665 000 kr. årligt).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion 🏁</h2>
            <p>Ingeniør løn efter skat ligger i 2025 typisk mellem 29 000 og 45 000 kr.. Branchevalg, certificeringer, bonus-ordninger, skifte­hold og kommune­skat er de hurtigste gear til et højere nettobeløb. Brug en lønberegner, læg en certifikat-plan og forhandl tillæg – så sikrer du, at dine CAD-filer og P&ID-diagrammer omsættes til flere kroner på kontoen.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6">
              <li><a href="https://ida.dk/raad-og-karriere/loen/idas-loenstatistik" target="_blank" rel="noopener noreferrer">IDA Lønstatistik 2024/25</a></li>
              <li><a href="https://www.djoef.dk/loen-og-loenforhandling/loenberegner-og-loentjek" target="_blank" rel="noopener noreferrer">DJØF Lønberegner 2025</a></li>
              <li><a href="https://www.dst.dk/da/Statistik/emner/arbejde-og-indkomst/indkomst-og-loen/loen" target="_blank" rel="noopener noreferrer">Danmarks Statistik – IND KP107: Løn efter funktion og branche</a></li>
              <li><a href="https://skat.dk/hjaelp/satser" target="_blank" rel="noopener noreferrer">Skatteministeriet – Satser for AM-bidrag, personfradrag og kommuneskat 2025</a></li>
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

export default IngenioerLoenPage; 