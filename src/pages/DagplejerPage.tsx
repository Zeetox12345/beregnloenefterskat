import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { calculateTaxAndNet } from "@/utils/taxCalculations";

const DagplejerPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 27000, netMin: 18300, netMax: 18800 },
    "Aarhus": { grossSalary: 26500, netMin: 18000, netMax: 18500 },
    "Odense": { grossSalary: 26000, netMin: 17600, netMax: 18100 },
    "Aalborg": { grossSalary: 25500, netMin: 17300, netMax: 17800 },
    "Esbjerg": { grossSalary: 25000, netMin: 17000, netMax: 17500 },
    "Randers": { grossSalary: 24800, netMin: 16800, netMax: 17300 },
    "Vejle": { grossSalary: 26200, netMin: 17700, netMax: 18200 }
  };

  const experienceData = [
    { years: "Nyansat (0 år)", grossSalary: 24500, netMin: 16800, netMax: 17300 },
    { years: "2 år", grossSalary: 25500, netMin: 17500, netMax: 18000 },
    { years: "4 år", grossSalary: 26000, netMin: 17800, netMax: 18300 },
    { years: "6 år", grossSalary: 27500, netMin: 18600, netMax: 19100 }
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

  const selectedCityData = cityData[selectedCity];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Dagplejer Løn Efter Skat – Se, Hvad Du Får Udbetalt"
        description="Få overblik over dagplejer løn før og efter skat. Læs om anciennitet, tillæg og gode råd til at optimere lønnen, så du får mest muligt udbetalt."
        keywords="dagplejer løn efter skat, dagplejer løn, dagplejer indkomst, dagplejer København, dagplejer Aarhus, dagplejer anciennitet"
      />
      <Header />
      <PageTitle title="Dagplejer Løn Efter Skat – Din Komplette Guide" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Dagplejer Løn Efter Skat – Din Komplette Guide</h1>
            
            <p className="lead">
              En dagplejer er meget mere end blot "babysitter" for de mindste. Som dagplejer i Danmark har du ansvaret for at skabe et trygt og stimulerende miljø for børn i alderen 0-3 år. Men hvordan ser lønnen egentlig ud, når alle fradrag og skatter er trukket fra, og hvordan påvirker erfaring din løn efter skat? I denne artikel får du en dybdegående gennemgang af dagplejer løn efter skat med eksempler, lønudvikling over tid og konkrete tips til, hvordan du kan optimere din løn.
            </p>
            <p>
              Hvis du er nysgerrig på, hvad du selv kan ende med at få udbetalt, kan du bruge 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> 
              til at lave en hurtig og individuel beregning.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad Vil Det Sige at Være Dagplejer?</h2>
            <p>
              At være dagplejer indebærer:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Ansvar for 3-5 børn i eget hjem (typisk op til 4 ad gangen samt eventuelt 1 gæstebarn).</li>
              <li>Skabelse af et pædagogisk og omsorgsfuldt miljø.</li>
              <li>Samarbejde med forældre og løbende opdatering af barnets trivsel og udvikling.</li>
              <li>Tæt tilknytning til kommunen, der ofte udstikker retningslinjer for åbningstider, sikkerhed og pædagogiske principper.</li>
            </ul>
            <p className="mt-4">
              En stor fordel ved at arbejde som dagplejer er fleksibiliteten i hverdagen, men jobbet kræver også en høj grad af selvstændighed og ansvarsbevidsthed.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempler på Løn Før og Efter Skat</h2>
            <p>
              Her får du et overblik over, hvad en dagplejers løn kan ligge på i forskellige byer – både før og efter skat. 
              I København er dagplejer lønnen før skat typisk omkring 27.000 kr, hvilket giver 18.300-18.800 kr udbetalt. 
              I Aarhus får en dagplejer omkring 26.500 kr før skat, resulterende i 18.000-18.500 kr efter skat.
              Tallene er vejledende og kan variere pga. lokale tillæg, anciennitet, pensionsindbetalinger og individuelle fradrag.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
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
                        {example.netMin.toLocaleString("da-DK")} - {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              Bemærk: Disse eksempler er baseret på en standard 37-timers uge samt de typiske overenskomstmæssige lønsatser. 
              Dine personlige fradrag og lokale skatteprocenter kan ændre løn efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Dagplejers Lønudvikling ved Erfaring (Anciennitet)</h2>
            <p>
              De fleste kommuner og overenskomster arbejder med anciennitetstrin, som betyder, at du efter et antal år i jobbet 
              automatisk stiger i løn. Som nyansat dagplejer kan du forvente omkring 24.500 kr før skat, mens du efter 6 års erfaring 
              kan opnå op til 27.500 kr før skat, hvilket giver 18.600-19.100 kr udbetalt månedligt.
              Her er et eksempel på, hvordan månedslønnen kan udvikle sig fra nyansat til 6 års erfaring, både før og efter skat.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
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
                        {exp.netMin.toLocaleString("da-DK")} - {exp.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Anciennitetstillæg afspejler typiske stigninger på 1-3 % pr. år eller pr. anciennitetstrin. 
              De konkrete satser kan dog variere fra kommune til kommune.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor Forskellige Kommuner Giver Forskellig Løn Efter Skat</h2>
            <ul className="list-disc pl-6 space-y-3 mt-2">
              <li>
                <strong>Lokale skatteprocenter:</strong> Kommuneskatten udgør en væsentlig del af den samlede skat og varierer i Danmark fra omkring 24-27 %.
              </li>
              <li>
                <strong>Kirkeskat:</strong> Hvis du er medlem af folkekirken, kan det hæve din samlede skat en smule.
              </li>
              <li>
                <strong>Lokale tillæg:</strong> Nogle kommuner giver særlige storby-, område- eller rekrutteringstillæg. Hør efter hos din leder eller HR-afdeling.
              </li>
              <li>
                <strong>Pensionsindbetaling:</strong> Din arbejdsmarkedspension kan variere i procent; typisk lægges 13-15 % til side af lønnen før skat.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan Regner Man Dagplejer Løn Efter Skat</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">1. Løn før skat</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Grundløn baseret på kommunens overenskomst.</li>
              <li>Anciennitetstillæg, som træder i kraft ved 2, 4, 6 års erfaring osv.</li>
              <li>Eventuelle ekstra tillæg, fx hvis du tager et gæstebarn mere, arbejder i udvidet åbningstid eller bor i et særligt område.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">2. Fratræk Skat og Bidrag</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Arbejdsmarkedsbidrag (8 %) trækkes først. For en typisk dagplejer med 27.000 kr i København udgør dette 2.160 kr.</li>
              <li>Kommuneskat (24-27 %) og eventuel kirkeskat lægges oveni.</li>
              <li>Personfradrag mindsker den indkomst, du skal betale skat af.</li>
              <li>Eventuelle øvrige fradrag, fx befordring og renteudgifter, kan også justere din løn efter skat.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">3. Pensionsindbetaling</h3>
            <p>
              Arbejder du under en offentlig overenskomst, er pensionsindbetaling som regel obligatorisk. 
              Det betyder, at du får en lidt lavere udbetaling nu, men er sikret bedre økonomisk i fremtiden.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode Råd til at Optimere Løn Efter Skat Som Dagplejer</h2>
            <div className="space-y-6 my-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Hold øje med dine anciennitetstillæg</h3>
                <p>
                  Tjek lønsedlen, når du når et nyt anciennitetstrin. Fejl kan ske.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Undersøg lokale tillæg</h3>
                <p>
                  Enkelte kommuner yder særlige tillæg, som du måske er berettiget til.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Få styr på skattefradrag</h3>
                <p>
                  Har du lang transport, renteudgifter eller andre fradrag, kan det alt sammen nedbringe din samlede skat.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Planlæg din pensionsindbetaling</h3>
                <p>
                  Tal med din fagforening eller kommunens HR om, hvordan din pension er skruet sammen, og om du eventuelt har mulighed for at justere satsen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Anvend en lønberegner</h3>
                <p>
                  Er du i tvivl, kan du hurtigt få et estimat på, hvad du får i løn efter skat, ved at bruge 
                  <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Dagplejer-lønnen i Danmark varierer afhængigt af flere faktorer som kommune, anciennitet, overenskomst og personlige skatteforhold. 
              Som ny dagplejer kan du forvente en månedlig løn før skat på ca. 24.000-27.000 kr., mens lønnen efter skat typisk ligger i omegnen af 16.800-19.000 kr. 
              Efter 6 års erfaring kan du opleve at stige yderligere, for eksempel op mod 27.500 kr. før skat, hvilket kan betyde en løn efter skat på 18.600-19.100 kr.
            </p>
            <p className="mt-4">
              Vil du have en mere præcis beregning, der matcher netop din hverdag og dine fradrag, kan du bruge 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>. 
              På den måde får du et individuelt indblik i, hvordan eventuelle tillæg, pensionsbidrag og skatteforhold påvirker det beløb, du får udbetalt hver måned.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-3 my-4">
              <li>
                <strong><a href="https://www.kl.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">KL – Kommunernes Landsforening</a></strong>
                <p className="text-sm text-gray-600">(Overenskomster for dagplejere og øvrige kommunalt ansatte)</p>
              </li>
              <li>
                <strong><a href="https://dst.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Danmarks Statistik</a></strong>
                <p className="text-sm text-gray-600">(Data og gennemsnitlige indkomster inden for kommunale stillinger)</p>
              </li>
              <li>
                <strong><a href="https://borger.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Borger.dk</a></strong>
                <p className="text-sm text-gray-600">(Oplysninger om skatteprocenter, fradrag og pensionsregler)</p>
              </li>
            </ul>
            <p className="mt-6">
              Husk altid at tjekke de nyeste overenskomstaftaler og lokale retningslinjer hos din kommune, så du får det fulde udbytte af din løn som dagplejer.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DagplejerPage; 