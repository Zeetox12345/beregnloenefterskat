import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const SUUdeboendePage = () => {
  const [selectedCity, setSelectedCity] = useState('København');

  // Data for SU after tax by city
  const cityData = {
    'København': { min: 5200, max: 5400 },
    'Aarhus': { min: 5100, max: 5300 },
    'Odense': { min: 5100, max: 5300 },
    'Aalborg': { min: 5000, max: 5200 },
    'Esbjerg': { min: 5000, max: 5200 },
    'Vejle': { min: 5100, max: 5300 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="SU Udeboende Efter Skat 2025 – Hvad Får Du Udbetalt?"
        description="SU udeboende efter skat 2025: ca. 5.000–5.400 kr. pr. måned. Få overblik over fribeløb, studiejob og tips til at optimere din økonomi."
        keywords="SU udeboende, SU efter skat, SU-sats 2025, fribeløb SU, studiejob, SU udbetaling, studerende økonomi"
      />
      <Header />
      <PageTitle title="SU Udeboende Efter Skat – Din Komplette Guide" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">SU Udeboende Efter Skat (2025) – Din Komplette Guide</h1>
            
            <p className="lead">
              Går du på en videregående uddannelse og er udeboende, kan du i 2025 modtage en SU-sats på 7.086 kr. før skat om måneden. 
              Denne artikel giver dig et komplet overblik over, hvor meget du får udbetalt efter skat, hvad du skal være opmærksom på, 
              hvis du har studiejob, og hvordan du kan optimere din økonomi med fribeløb, boligstøtte og andre tiltag.
            </p>

                        {/* Min A-kasse Affiliate Section */}
            <section className="mx-auto my-8 max-w-lg rounded-2xl bg-emerald-50 p-6 shadow-lg">
              <div className="text-center mb-4">
                <a 
                  href="https://go.min-a-kasse.dk/t/t?a=1667704485&as=1982389276&t=2&tk=1" 
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="mx-auto w-48 h-36 mb-4 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => {
                    // Track affiliate click
                    if (typeof (window as any).gtag !== 'undefined') {
                      (window as any).gtag('event', 'affiliate_click', {
                        affiliate_name: 'Min A-kasse DK',
                        page_location: window.location.href,
                        position: 'logo',
                        page_type: 'su_udeboende'
                      });
                    }
                  }}
                >
                  <img 
                    src="/Minakasse.png" 
                    alt="Min A-kasse logo" 
                    className="w-full h-full object-contain"
                  />
                </a>
                <h2 className="text-xl font-bold text-emerald-900">
                  Under uddannelse
                </h2>
                <p className="text-2xl font-bold text-red-600 mt-1">
                  0 kr./md
                </p>
              </div>
              
              <p className="mt-4 text-base leading-6 text-emerald-900 text-center">
                Meld dig ind i <strong>Min A-kasse</strong> helt gratis, mens du studerer.  
                Som nyuddannet får du <strong>dagpenge som nyuddannet</strong> og kan springe karensmåneden over!
              </p>
              
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-base text-emerald-900">
                  <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Gratis medlemskab
                </li>
                <li className="flex items-center text-base text-emerald-900">
                  <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dagpenge som nyuddannet
                </li>
                <li className="flex items-center text-base text-emerald-900">
                  <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personlig job- og karriererådgiver
                </li>
                <li className="flex items-center text-base text-emerald-900">
                  <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Hjælp til jobsøgning og praktik
                </li>
                <li className="flex items-center text-base text-emerald-900">
                  <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Online kurser og workshops
                </li>
              </ul>

              <a 
                href="https://go.min-a-kasse.dk/t/t?a=1667704485&as=1982389276&t=2&tk=1" 
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="mt-6 inline-block w-full rounded-xl bg-red-600 py-4 text-center text-base font-bold text-white transition hover:bg-red-700 hover:shadow-md"
                onClick={() => {
                  // Track affiliate click
                  if (typeof (window as any).gtag !== 'undefined') {
                    (window as any).gtag('event', 'affiliate_click', {
                      affiliate_name: 'Min A-kasse DK',
                      page_location: window.location.href,
                      position: 'top',
                      page_type: 'su_udeboende'
                    });
                  }
                }}
              >
                Bliv gratis studiemedlem
              </a>
               
            </section>

            <div className="bg-gray-50 p-4 rounded-lg my-6">
              <h2 className="text-2xl font-semibold mb-4">SU for Udeboende i 2025</h2>
              <p><strong>Sats for udeboende (videregående uddannelse):</strong> 7.086 kr./md. før skat</p>
              <p>
                Beløbet justeres årligt og kan være højere eller lavere for andre typer uddannelser 
                eller aldersgrupper (fx under 20 år).
              </p>
              <p>
                Når du er udeboende, går støtten primært til at dække husleje, mad og øvrige leveomkostninger. 
                Det er dog vigtigt at huske, at SU er skattepligtig, og du vil typisk betale både 
                arbejdsmarkedsbidrag (8 %) og kommuneskat + evt. kirkeskat af beløbet, dog påvirket af dit personfradrag.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvor Meget Får Du Udbetalt Efter Skat?</h2>
            <p>
              Skatten varierer fra kommune til kommune, men generelt kan du regne med at få udbetalt et sted mellem 
              5.000 – 5.400 kr. om måneden, hvis du ikke har ekstra fradrag eller betaler kirkeskat. 
              Tabellen her viser et eksempel, hvis du modtager 7.086 kr. før skat:
            </p>

            <div className="my-6">
              <select 
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {Object.keys(cityData).map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border-b text-left">By</th>
                      <th className="py-3 px-4 border-b text-left">SU før skat (2025)</th>
                      <th className="py-3 px-4 border-b text-left">SU efter skat (estimat)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(cityData).map(([city, data]) => (
                      <tr 
                        key={city} 
                        className={`hover:bg-gray-50 ${city === selectedCity ? 'bg-blue-50' : ''}`}
                        onClick={() => setSelectedCity(city)}
                      >
                        <td className="py-3 px-4 border-b">{city}</td>
                        <td className="py-3 px-4 border-b">7.086 kr.</td>
                        <td className="py-3 px-4 border-b">
                          {data.min} - {data.max} kr.
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-gray-600 italic mt-2">
                Bemærk: Der er tale om vejledende tal, der kan svinge ud fra din personlige skattekortopsætning, 
                eventuelle fradrag og om du er medlem af folkekirken.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fribeløb og Arbejde ved Siden Af</h2>
            <p>
              Som udeboende studerende må du gerne have et studiejob ved siden af din SU. Men du skal være opmærksom på, 
              at der er et årligt fribeløb, som afgør, hvor meget du må tjene, uden at det påvirker din SU. 
              Overskrider du fribeløbet, risikerer du at skulle betale SU tilbage.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-2">Satser for Fribeløb i 2025 (eksempel)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Fuldtidsstuderende (aktiv hele året):</strong> ca. 15.000 kr. pr. måned (180.000 kr. årligt)</li>
                <li><strong>Studerende med orlov eller delvist studieaktiv:</strong> Fribeløbet kan være lavere, da man ikke er studieaktiv hele perioden.</li>
                <li><strong>Færdiguddannet i en del af året:</strong> Fribeløbet justeres efter antal SU-klip eller måneder, du modtager SU.</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600 italic">
                <strong>Vigtigt:</strong> Disse tal er eksempler/estimater for 2025 og kan variere. 
                Tjek altid de konkrete fribeløb på SU.dk for at være sikker på at have de nyeste satser.
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">Sådan undgår du at overskride fribeløbet</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Hold øje med din samlede årsindkomst:</strong> Læg dit studiejob (løn) og din SU sammen for at se, om du nærmer dig grænsen.</li>
              <li><strong>Tilpas dine arbejdstimer:</strong> Har du et meget velbetalt studiejob, kan det være nødvendigt at skrue ned for timerne i perioder, så du undgår et tilbagebetalingskrav.</li>
              <li><strong>Kommunikér med arbejdsgiver:</strong> Overvej fx at arbejde mere i ferier, hvor SU ikke altid udbetales i samme omfang.</li>
            </ul>
            <p>
              Når du overskrider fribeløbet, kan du risikere at få et tilbagebetalingskrav fra SU-styrelsen. 
              Det kan derfor betale sig at sætte dig grundigt ind i fribeløbsreglerne og følge din lønudvikling løbende.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Andre Faktorer, der Påvirker Din SU Efter Skat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold mb-2">Personfradrag</h5>
                <p>
                  Dit personfradrag reducerer den indkomst, du skal betale skat af. 
                  For studerende med lav indkomst har dette stor betydning for, hvor meget du betaler i skat.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold mb-2">Kirkeskat</h5>
                <p>
                  Hvis du er medlem af folkekirken, vil du typisk have en ekstra skatteprocent oveni kommuneskatten. 
                  Dette sænker din udbetaling en smule.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold mb-2">Tillæg</h5>
                <p>
                  Har du forældreansvar eller særlige forhold, kan du ansøge om ekstra tillæg til din SU 
                  (fx forsørgertillæg), som vil øge din samlede udbetaling.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold mb-2">SU-lån og legater</h5>
                <p>
                  Overvejer du at supplere din SU med et SU-lån eller søge legater, skal du huske, 
                  at visse indtægter kan påvirke skatten, mens andre er skattefri. Tjek reglerne grundigt.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold mb-2">Boligstøtte</h5>
                <p>
                  Bor du i en lejebolig, kan du også undersøge, om du er berettiget til boligstøtte, 
                  som er en skattefri ydelse, der gør din månedlige økonomi lidt lettere.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at Maksimere Din SU Udeboende Efter Skat</h2>
            <div className="bg-gray-50 p-4 rounded-lg my-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Brug en lønberegner</h3>
                <p>
                  Ved at indtaste 7.086 kr. som "løn" i fx <Link to="/" className="text-blue-600 hover:underline">beregn løn efter skat</Link> kan du få et mere præcist billede af, 
                  hvad du vil stå med i hånden, justeret for din kommune og eventuelle fradrag.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Budgetlægning</h3>
                <p>
                  Lav et simpelt budget over husleje, mad, transport, bogudgifter mv. SU kan være stram, 
                  så et overblik hjælper dig med at undgå overtræk.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Ansøg om legater</h3>
                <p>
                  Mange private fonde og legater støtter studerende. Nogle legater er skattefrie, 
                  og det kan mærkes direkte på din økonomi.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Planlæg dit studiejob</h3>
                <p>
                  Tjek fribeløbet, så du ikke tjener så meget, at du skal betale SU tilbage. 
                  Det kan ofte betale sig at arbejde mere i ferieperioder, hvor du ikke modtager SU på samme måde.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Boligstøtte</h3>
                <p>
                  Som udeboende lejer kan du søge boligstøtte via Borger.dk. 
                  Selv et lille tilskud om måneden kan gøre en markant forskel i dit studiebudget.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 er SU-satsen for udeboende på en videregående uddannelse 7.086 kr. før skat, 
              hvilket ofte resulterer i en udbetaling på ca. 5.000 – 5.400 kr. efter skat, afhængigt af din kommune, 
              kirkeskat, personfradrag mv. Vil du tjene ekstra penge ved siden af via et studiejob, 
              skal du holde skarpt øje med fribeløbet, som for en fuldtidsstuderende (aktiv hele året) eksempelvis 
              kan ligge omkring 15.000 kr. pr. måned (dvs. ca. 180.000 kr. årligt). 
              Overskrider du dette, kan du risikere at skulle betale SU tilbage.
            </p>
            <p className="mt-4">
              For at få et helt nøjagtigt estimat af din personlige økonomi som studerende, 
              anbefales det at bruge en lønberegner, følge med i dine årlige indtægter og løbende tjekke opdaterede 
              satser på SU.dk. På den måde sikrer du, at du får mest muligt ud af din SU udeboende efter skat 
              og samtidig undgår ubehagelige tilbagebetalingskrav.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-3 my-4">
              <li>
                <strong><a href="https://www.su.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SU.dk</a></strong>
                <p className="text-sm text-gray-600">(Officiel information om SU-satser, fribeløb og ansøgningsprocedurer)</p>
              </li>
              <li>
                <strong><a href="https://www.skat.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skattestyrelsen</a></strong>
                <p className="text-sm text-gray-600">(Generel info om personfradrag, kommuneskat og kirkeskat)</p>
              </li>
              <li>
                <strong><a href="https://www.borger.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Borger.dk</a></strong>
                <p className="text-sm text-gray-600">(Oplysninger om boligstøtte og andre offentlige ydelser)</p>
              </li>
            </ul>
            <p className="mt-4">
              Hold dig altid opdateret med de nyeste satser og regler på SU.dk og Skattestyrelsens hjemmeside 
              for at få det fulde udbytte af din SU som udeboende i 2025.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SUUdeboendePage; 