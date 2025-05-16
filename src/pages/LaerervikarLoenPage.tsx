import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LaerervikarLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");

  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 32000, netMin: 21000, netMax: 21500 },
    "Aarhus": { grossSalary: 30000, netMin: 20000, netMax: 20500 },
    "Odense": { grossSalary: 28000, netMin: 18800, netMax: 19300 },
    "Aalborg": { grossSalary: 27000, netMin: 18100, netMax: 18600 },
    "Esbjerg": { grossSalary: 26000, netMin: 17500, netMax: 18000 },
    "Randers": { grossSalary: 26000, netMin: 17500, netMax: 18000 },
  };

  const experienceData = [
    { years: "Pædagogikstuderende (trin 1)", grossSalary: 24000, netMin: 16000, netMax: 16400 },
    { years: "Bachelor på 3.–4. år", grossSalary: 27000, netMin: 18100, netMax: 18600 },
    { years: "Nyuddannet lærer (trin 4)", grossSalary: 30000, netMin: 20000, netMax: 20500 },
    { years: "5+ års erfaring (trin 6)", grossSalary: 33000, netMin: 22000, netMax: 22500 },
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
        title="Lærervikar Løn Efter Skat 2025 – Få Det Klare Overblik"
        description="Hvad får en lærervikar udbetalt i 2025? Se opdaterede løntabeller, realistiske estimater og beregn din lærervikar løn efter skat på få sekunder."
        keywords="lærervikar løn, løn efter skat, lærervikar 2025, lærervikar løntabel, lærervikar netto, lærervikar brutto"
      />
      <Header />
      <PageTitle title="Lærervikar Løn Efter Skat 2025" />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Lærervikar Løn Efter Skat 2025 – Faglig Fleksibilitet og Faktiske Tal</h1>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat lærervikar, der dækker 37 ugentlige timer, kan i 2025 forvente en lærervikar løn efter skat på 16 000 – 22 000 kr. pr. måned. Spændet afhænger af kommune, uddannelsesniveau (pædagogikstuderende vs. uddannet lærer), varighed af vikariatet samt eventuelle skæve timer. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for et præcist, personligt estimat.
              </p>
            </div>
            <p className="lead">
              Lærervikarer spiller en afgørende rolle i det danske skolesystem – både som afløsere ved sygdom og i længerevarende vikariater. Men hvad får en lærervikar egentlig udbetalt efter skat, og hvilke faktorer påvirker lønnen? Her får du et detaljeret overblik over løn, skatteforhold og gode råd til at maksimere din nettoløn som lærervikar i 2025.
            </p>
            <p>
              Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at lave din egen, individuelle beregning.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en lærervikars løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Faktor</th>
                    <th className="py-3 px-4 border-b text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-3 px-4 border-b">Grundløn</td><td className="py-3 px-4 border-b">Time- eller månedsløn følger Kommunernes Landsforenings (KL) aftale – typisk 200-230 kr./time for uddannede, 170-190 kr./time for studerende.</td></tr>
                  <tr><td className="py-3 px-4 border-b">Kommune & løntrin</td><td className="py-3 px-4 border-b">Hovedstadskommuner tilbyder ofte 5-8 % højere før skat, men har også højere kommuneskat.</td></tr>
                  <tr><td className="py-3 px-4 border-b">Uddannelse</td><td className="py-3 px-4 border-b">Færdige lærere aflønnes på højere trin end bachelor- eller pædagogstuderende.</td></tr>
                  <tr><td className="py-3 px-4 border-b">Varighed & skema</td><td className="py-3 px-4 border-b">Lange, planlagte vikariater kan udløse løntrin 4-5, mens kortere dag-til-dag-vagter ligger på trin 1-3.</td></tr>
                  <tr><td className="py-3 px-4 border-b">Pension (13 %)</td><td className="py-3 px-4 border-b">Indbetales før skat og øger totalpakken.</td></tr>
                  <tr><td className="py-3 px-4 border-b">Kommuneskat</td><td className="py-3 px-4 border-b">Op til 0,8 pct.point forskel – ca. ± 600 kr./md. netto.</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lærervikar Løn Efter Skat – Byoversigt 2025</h2>
            <p>
              Herunder kan du se, hvad en lærervikar typisk får udbetalt i forskellige byer – både før og efter skat. Tallene er vejledende og kan variere afhængigt af lokale tillæg, løntrin, pensionsindbetalinger og individuelle fradrag.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat (full-time)</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((row) => (
                    <tr key={row.city} className={`hover:bg-gray-50 ${row.city === selectedCity ? 'bg-blue-50' : ''}`} onClick={() => setSelectedCity(row.city)}>
                      <td className="py-3 px-4 border-b">{row.city}</td>
                      <td className="py-3 px-4 border-b">{row.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">{row.netMin.toLocaleString("da-DK")} – {row.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic mb-8">
              *Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat 24,9 % + AM-bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfaringstrappen – Lærervikar Løn Efter Skat</h2>
            <p>
              Lønnen som lærervikar stiger i takt med erfaring og uddannelsesniveau. Her ses typiske løntrin fra pædagogikstuderende til erfarne lærere.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Niveau / Profil</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((row) => (
                    <tr key={row.years} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{row.years}</td>
                      <td className="py-3 px-4 border-b">{row.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">{row.netMin.toLocaleString("da-DK")} – {row.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Aarhus, uddannet lærer</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Bruttoløn: 30 000 kr.</li>
              <li>AM-bidrag 8 %: 2 400 kr.</li>
              <li>Skattepligtig indkomst: 27 600 kr.</li>
              <li>Personfradrag: 4 650 kr.</li>
              <li>Beskatningsgrundlag: 22 950 kr.</li>
              <li>A-skat (~ 35 %): 8 030 kr.</li>
              <li><strong>Lærervikar løn efter skat: ≈ 19 570 kr.</strong></li>
            </ul>
            <p className="mt-2">For andre løntrin og kommuner: <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere lærervikar løn efter skat</h2>
            <div className="space-y-6 my-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Dæk morgen- og eftermiddagsmoduler</h3>
                <p>Giver flere timer pr. dag og samlet højere udbetaling.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Søg længerevarende vikariater</h3>
                <p>Højere løntrin udløses efter tre sammenhængende måneder.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tag specialfag</h3>
                <p>Matematik, fysik, specialundervisning – skoler betaler ofte funktionstillæg.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vælg bopæl i lav-skat kommune</h3>
                <p>Kan øge netto med 300-600 kr./md.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Lærervikar Løn Efter Skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Hvad tjener en lærervikar per time?</strong><br />170-230 kr. afhængigt af uddannelse og kommune.</li>
              <li><strong>Kan jeg nå 22 000 kr. efter skat som lærervikar?</strong><br />Ja, med fuldt skema, højere løntrin eller faglige tillæg i et års-vikariat.</li>
              <li><strong>Tæller pension med i løn efter skat?</strong><br />Nej, 13 % arbejdsgiverpension indbetales før skat og fremgår ikke som nettoløn.</li>
              <li><strong>Udløser korttidsvikariater ferietillæg?</strong><br />Ja, der indbetales 12,5 % feriepenge af den optjente løn.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger lærervikar løn efter skat oftest mellem 16 000 og 22 000 kr. Vikariatets længde, løntrin og kommunesats har størst betydning for din nettoløn. Indtast din egen løn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad din undervisningsindsats omsættes til på bankkontoen hver måned.
            </p>
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

export default LaerervikarLoenPage; 