import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { calculateTaxAndNet } from "@/utils/taxCalculations";

const KontanthjaelpPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 16972, netMin: 12900, netMax: 13300 },
    "Aarhus": { grossSalary: 16972, netMin: 12800, netMax: 13200 },
    "Odense": { grossSalary: 16972, netMin: 12700, netMax: 13100 },
    "Aalborg": { grossSalary: 16972, netMin: 12700, netMax: 13100 },
    "Esbjerg": { grossSalary: 16972, netMin: 12600, netMax: 13000 },
    "Randers": { grossSalary: 16972, netMin: 12600, netMax: 13000 },
    "Vejle": { grossSalary: 16972, netMin: 12700, netMax: 13100 }
  };

  const categoryData = [
    { category: "Fyldt 30 år, forsørger børn", grossSalary: 16972, netMin: 12900, netMax: 13300 },
    { category: "Fyldt 30 år, andre", grossSalary: 12770, netMin: 9800, netMax: 10200 },
    { category: "Enlige forsørgere under 30 år", grossSalary: 16222, netMin: 12400, netMax: 12800 },
    { category: "Forsørgere under 30 år, som ikke har erhvervet ret til ekstra børnetilskud", grossSalary: 11349, netMin: 8800, netMax: 9300 },
    { category: "Under 30 år, gravid (passeret 12. svangerskabsuge)", grossSalary: 12770, netMin: 9800, netMax: 10200 },
    { category: "Under 30 år, psykisk syg, forsørger", grossSalary: 16972, netMin: 12900, netMax: 13300 },
    { category: "Under 30 år, psykisk syg, udeboende", grossSalary: 12770, netMin: 9800, netMax: 10200 },
    { category: "25-29 år, udeboende", grossSalary: 8231, netMin: 7000, netMax: 7400 },
    { category: "25-29 år, hjemmeboende", grossSalary: 3972, netMin: 3600, netMax: 3800 },
    { category: "Under 25 år, udeboende", grossSalary: 8231, netMin: 7000, netMax: 7400 },
    { category: "Under 25 år, hjemmeboende", grossSalary: 3972, netMin: 3600, netMax: 3800 },
    { category: "Under 30 år, bidragspligt, maks. hjælp inkl. tillæg", grossSalary: 16972, netMin: 12900, netMax: 13300 }
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
        title="Kontanthjælp Satser Efter Skat 2025 – Beregn Din Udbetaling"
        description="Se kontanthjælp satser efter skat i 2025. Få indsigt i udbetaling pr. måned, regler, fradrag og hvilke faktorer der påvirker din økonomi."
        keywords="kontanthjælp satser efter skat, kontanthjælp efter skat, kontanthjælp forsørger, kontanthjælp udeboende, kontanthjælp hjemmeboende, beregn kontanthjælp 2025"
      />
      <Header />
      <PageTitle title="Kontanthjælp Satser Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Kontanthjælp Satser Efter Skat 2025 – Komplet Overblik</h1>
            
            <p className="lead">
              Velkommen til vores komplette guide om Kontanthjælp Satser Efter Skat i 2025. Her får du et detaljeret indblik i de nye satser, hvordan du kan beregne din udbetaling efter skat, samt hvilke regler og betingelser du skal være opmærksom på. Formålet er at give dig brugbar viden, så du lettere kan navigere i reglerne og få mest muligt ud af din kontanthjælp.
            </p>
            <p>
              Hvis du vil have en præcis beregning af, hvad du kan få udbetalt i netop din situation, kan du bruge vores værktøj 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, 
              der tager højde for din kommuneskat, personfradrag m.m.
            </p>

            {/* Affiliate Marketing Section - Top Position */}
            <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl font-semibold mb-3 text-blue-900"> Har du brug for økonomisk hjælp?</h2>
              <p className="text-blue-800 mb-4 text-sm">
                Kontanthjælp dækker måske ikke alle dine behov. Få et gratis lånetilbud og de bedste sammenligninger af lån:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-2xl mr-2">💰</span>
                    <h3 className="font-semibold text-gray-900 text-lg">Lånio - Sammenlign lån</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    Sammenlign lånetilbud fra flere danske banker. Gratis og uforpligtende lånetilbud på få minutter.
                  </p>
                  <a 
                    href="https://go.adt256.com/t/t?a=1759160178&as=1982389276&t=2&tk=1" 
                    target="_blank" 
                    rel="sponsored noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                    onClick={() => {
                      // Track affiliate click
                      if (typeof (window as any).gtag !== 'undefined') {
                        (window as any).gtag('event', 'affiliate_click', {
                          affiliate_name: 'Lånio DK',
                          page_location: window.location.href,
                          position: 'top'
                        });
                      }
                    }}
                  >
                    <span className="mr-2">💰</span>
                    Få tilbud hos Lånio
                    <span className="ml-2">→</span>
                  </a>
                  <p className="text-xs text-gray-500 mt-3 text-center">(reklamelink)</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-2xl mr-2">🏦</span>
                    <h3 className="font-semibold text-gray-900 text-lg">Weblånet - Sammenlign lån</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    Sammenlign forbrugslån op til 500.000 kr. Gratis og uforpligtende tilbud fra danske banker.
                  </p>
                  <a 
                    href="https://go.adt228.com/t/t?a=1537001564&as=1982389276&t=2&tk=1" 
                    target="_blank" 
                    rel="sponsored noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                    onClick={() => {
                      // Track affiliate click
                      if (typeof (window as any).gtag !== 'undefined') {
                        (window as any).gtag('event', 'affiliate_click', {
                          affiliate_name: 'Weblånet DK',
                          page_location: window.location.href,
                          position: 'top'
                        });
                      }
                    }}
                  >
                    <span className="mr-2">🏦</span>
                    Se tilbud hos Weblånet
                    <span className="ml-2">→</span>
                  </a>
                  <p className="text-xs text-gray-500 mt-3 text-center">(reklamelink)</p>
                </div>
              </div>
              
              <p className="text-xs text-blue-600 mt-4 text-center">
                Vi modtager provision fra partnere, hvilket ikke påvirker prisen for dig.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Nye Kontanthjælpssatser for 2025</h2>
            <p>
              Satserne for kontanthjælp i 2025 er opdateret på baggrund af de nyeste tal fra BM.dk og fremgår af tabellen herunder. Bemærk, at de konkrete beløb kan variere en smule, hvis du fx modtager særlige tillæg eller har fradrag, som påvirker din endelige skat.
            </p>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Kategori</th>
                    <th className="py-3 px-4 border-b text-left">Sats før skat (pr. måned)</th>
                    <th className="py-3 px-4 border-b text-left">Forventet udbetalt (efter skat, ca.)</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryData.map((data) => (
                    <tr 
                      key={data.category} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{data.category}</td>
                      <td className="py-3 px-4 border-b">{data.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {data.netMin.toLocaleString("da-DK")} - {data.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              Bemærk: Beløbene efter skat er et estimat. Din faktiske udbetaling afhænger af din personlige skatteprocent, eventuelle fradrag, kommune- og kirkeskat samt andre individuelle forhold.
              <br />Kilde: BM.dk – Satser for 2025.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel: Variationer efter Kommuneskat</h2>
            <p>
              Selvom kontanthjælpssatserne før skat er ens på landsplan, kan den endelige udbetaling efter skat variere fra kommune til kommune. Det skyldes, at kommuneskatteprocenten er forskellig.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Bor du i en kommune med høj kommuneskat, kan din udbetaling blive lidt lavere.</li>
              <li>Bor du i en kommune med lav kommuneskat, kan din udbetaling blive lidt højere.</li>
            </ul>
            <p>
              Nedenstående tabel viser et estimat af, hvad en person der er fyldt 30 år med forsørgerpligt kan forvente at få udbetalt efter skat i forskellige byer.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Sats før skat</th>
                    <th className="py-3 px-4 border-b text-left">Forventet udbetalt (efter skat, ca.)</th>
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
            <p>
              Vil du vide præcis, hvad du får efter skat i din kommune? Brug vores online værktøj 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan Beregner du din Kontanthjælp Efter Skat</h2>
            <p>
              Kontanthjælp beskattes som almindelig indkomst, men der er nogle særlige forhold at være opmærksom på.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Arbejdsmarkedsbidrag (AM-bidrag)</h3>
            <p>
              Først trækkes 8% i AM-bidrag fra din kontanthjælp.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">A-skat (bundskat + kommuneskat)</h3>
            <p>
              Herefter betaler du A-skat, som dækker over bundskat, kommuneskat og eventuel kirkeskat. Personfradraget (det skattefri grundbeløb) gør, at du ikke betaler skat af en vis del af din indkomst.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">ATP-bidrag</h3>
            <p>
              Som kontanthjælpsmodtager skal du betale et mindre ATP-bidrag (94,65 kr. pr. måned i 2025), der ligeledes trækkes fra din kontanthjælp.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Særlige fradrag og tillæg</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Boligstøtte:</strong> Hvis du har høje boligudgifter, kan du få boligstøtte (søg via borger.dk).</li>
              <li><strong>Børne- og ungeydelse/børnetilskud:</strong> Har du børn, kan du være berettiget til børne- og ungeydelse eller ekstra børnetilskud.</li>
              <li><strong>Særlig støtte:</strong> Hvis du har særlige udgifter, fx meget høje boligudgifter, kan du søge særlig støtte hos kommunen.</li>
            </ul>
            <p className="mt-4">
              Hvis du vil have et hurtigt overblik over, hvad du kan forvente at få udbetalt i netop din situation, kan du bruge vores gratis beregner: 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Vigtige Regler og Betingelser</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">1. Generelle Betingelser for Kontanthjælp</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Du skal være fyldt 18 år.</li>
              <li>Du skal stå til rådighed for arbejdsmarkedet og være aktivt jobsøgende.</li>
              <li>Du må ikke have en formue på over 10.000 kr. (20.000 kr. for ægtepar).</li>
              <li>Du skal have opholdt dig i Danmark i mindst 9 ud af de seneste 10 år (opholdskrav).</li>
              <li>Du skal have haft ordinært arbejde i mindst 2,5 år inden for de seneste 10 år (beskæftigelseskrav).</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">2. 225-timers-reglen</h3>
            <p>
              For at modtage fuld kontanthjælp skal du have arbejdet mindst 225 timer inden for et år (svarende til ca. 6 ugers fuldtidsarbejde). Opfylder du ikke denne regel, kan din kontanthjælp blive reduceret.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">3. Ægtefæller og Samlevende</h3>
            <p>
              Hvis du er gift eller lever i et ægteskabslignende forhold, bliver jeres kontanthjælp beregnet ud fra jeres samlede økonomiske situation. Den enes indkomst og formue kan påvirke den andens ret til kontanthjælp.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">4. Kontanthjælpsloftet</h3>
            <p>
              Kontanthjælpsloftet sætter en øvre grænse for, hvor meget du samlet kan modtage i kontanthjælp, særlig støtte og boligstøtte. Loftet afhænger af din alder, forsørgerstatus og boligsituation.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Andre Støtteordninger</h2>
            <p>
              Hvis du ikke opfylder betingelserne for at modtage kontanthjælp, findes der alternative ydelser:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Uddannelseshjælp:</strong> For unge under 30 år uden uddannelse.</li>
              <li><strong>Selvforsørgelses- og hjemrejseydelse:</strong> For personer der ikke opfylder opholds- eller beskæftigelseskravet.</li>
              <li><strong>Ressourceforløbsydelse:</strong> For personer i ressourceforløb, hvor målet er at afklare arbejdsevnen.</li>
              <li><strong>Revalideringsydelse:</strong> For personer under revalidering (omskoling) pga. nedsat arbejdsevne.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode Råd om Kontanthjælp og Skat</h2>
            <div className="space-y-6 my-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Søg Boligstøtte</h3>
                <p>
                  Boligstøtten kan ofte gøre en stor forskel i din samlede økonomi som kontanthjælpsmodtager.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Tjek dit Skattekort</h3>
                <p>
                  Sørg for, at dit skattekort er opdateret med alle relevante fradrag, så du hverken betaler for meget eller for lidt i skat.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Husk Særlige Støtteordninger</h3>
                <p>
                  Hvis du har særlige udgifter, fx høje boligudgifter, kan du have ret til særlig støtte ud over den almindelige kontanthjælp.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Hold Øje med Formue</h3>
                <p>
                  Du kan miste retten til kontanthjælp, hvis din formue overstiger grænsen på 10.000 kr. (20.000 kr. for ægtepar). Husk altid at informere kommunen ved ændringer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Brug en Beregner</h3>
                <p>
                  Er du i tvivl om, hvad du får udbetalt, kan du altid bruge 
                  <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> 
                  for et hurtigt estimat.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Kontanthjælp Satser Efter Skat i 2025 varierer alt efter alder, forsørgerstatus og boligsituation. De højeste satser ligger på ca. 16.972 kr. før skat, hvilket kan give en udbetaling på omkring 12.900 – 13.300 kr. efter skat. For unge under 30 år og særligt hjemmeboende er satserne betydeligt lavere.
            </p>
            <p className="mt-4">
              Kontanthjælp er tænkt som en midlertidig hjælp, og du skal opfylde en række krav for at bevare retten til ydelsen. Kommunen kan kræve, at du fx deltager i aktivering, jobkurser eller andre initiativer, der hjælper dig videre mod selvforsørgelse.
            </p>
            <p className="mt-4">
              Har du brug for en mere præcis beregning af, hvad du kan få udbetalt, så anbefaler vi, at du benytter 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> 
              eller kontakter din kommune for personlig vejledning.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder og Yderligere Information</h2>
            <ul className="list-disc pl-6 space-y-3 my-4">
              <li>
                <a href="https://www.borger.dk/arbejde-dagpenge-ferie/Dagpenge-kontanthjaelp-og-sygedagpenge/Kontanthjaelp" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Borger.dk: Kontanthjælp</a> - Officiel information om kontanthjælp fra borger.dk.
              </li>
              <li>
                <a href="https://www.bm.dk/satser/satser-for-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">BM.dk: Satser for 2025</a> - Beskæftigelsesministeriets oversigt over aktuelle satser.
              </li>
              <li>
                <a href="https://www.skat.dk/skat.aspx?oid=2234772" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SKAT: Beskatning af Sociale Ydelser</a> - Skattemyndighedernes information om beskatning af kontanthjælp.
              </li>
            </ul>
            
            <p className="mt-6">
              Vi håber, at denne guide har givet dig et godt overblik over Kontanthjælp Satser Efter Skat i 2025. Husk at bruge værktøjet 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, 
              hvis du ønsker en hurtig og nem beregning af din konkrete udbetaling. Held og lykke!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KontanthjaelpPage; 