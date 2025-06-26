import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { calculateTaxAndNet } from "@/utils/taxCalculations";

const SOSUHjaelperPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 28200, netMin: 19200, netMax: 19700 },
    "Aarhus": { grossSalary: 27700, netMin: 18900, netMax: 19400 },
    "Odense": { grossSalary: 27200, netMin: 18600, netMax: 19100 },
    "Aalborg": { grossSalary: 26800, netMin: 18300, netMax: 18800 },
    "Esbjerg": { grossSalary: 26600, netMin: 18100, netMax: 18600 },
    "Randers": { grossSalary: 26400, netMin: 18000, netMax: 18500 },
    "Vejle": { grossSalary: 27000, netMin: 18500, netMax: 19000 }
  };

  const experienceData = [
    { years: "Nyuddannet (0 år)", grossSalary: 25500, netMin: 17800, netMax: 18300 },
    { years: "2 år", grossSalary: 26300, netMin: 18300, netMax: 18800 },
    { years: "4 år (kvalifikationsløn)", grossSalary: 27700, netMin: 18900, netMax: 19400 },
    { years: "8 år", grossSalary: 29200, netMin: 19800, netMax: 20300 },
    { years: "11 år (kvalifikationsløn)", grossSalary: 30500, netMin: 20600, netMax: 21100 },
    { years: "12+ år", grossSalary: 31000, netMin: 21000, netMax: 21600 }
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
        title="SOSU Hjælper Løn Efter Skat 2025 – Komplet Guide"
        description="Opdag nyeste lønsatser og tillæg for SOSU hjælpere i 2025. Få tips til at øge din løn, og beregn din udbetaling efter skat baseret på FOA's data."
        keywords="sosu hjælper løn efter skat 2025, sosu hjælper løn, sosu hjælper indkomst, social- og sundhedshjælper løn, sosu hjælper anciennitet, sosu løntrin"
      />
      <Header />
      <PageTitle title="SOSU Hjælper Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">SOSU Hjælper Løn Efter Skat 2025 – Din Komplette Guide</h1>
            
            <p className="lead">
              Som SOSU hjælper spiller du en afgørende rolle i pleje og omsorg for borgere, der har behov for støtte i hverdagen. Men hvad kan du forvente at få udbetalt efter skat i 2025? I denne artikel får du det fulde overblik over grundløn, kvalifikationsløn samt tillæg – og hvordan du beregner din SOSU Hjælper Løn Efter Skat.
            </p>
            <p>
              Hvis du vil have en hurtig estimering for netop din situation, kan du bruge vores værktøj 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, 
              hvor du nemt kan indtaste dine oplysninger og se din forventede udbetaling.
            </p>

            {/* Min A-kasse Affiliate Section */}
            <section className="mx-auto my-8 max-w-lg rounded-2xl bg-blue-50 p-6 shadow-lg">
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
                        page_type: 'sosu_hjaelper'
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
                <h2 className="text-xl font-bold text-blue-900">
                  Lønmodtager, selvstændig eller ledig
                </h2>
                <p className="text-2xl font-bold text-red-600 mt-1">
                  524 kr./md
                </p>
              </div>

              <p className="mt-4 text-lg leading-7 text-blue-900 text-center">
                Som <strong>SOSU-hjælper</strong> kan du miste timer fra den ene uge til den anden.
                Bliv medlem af <strong>Min A-kasse</strong> i dag og få op til
                <strong> 21.092 kr./md (2025)</strong> i dagpenge, hvis du står uden arbejde.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-base text-blue-900">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dagpenge
                </li>
                <li className="flex items-center text-base text-blue-900">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rådgivning og dagpenge ved opstart af virksomhed
                </li>
                <li className="flex items-center text-base text-blue-900">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personlig job- og karriererådgiver
                </li>
                <li className="flex items-center text-base text-blue-900">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Hjælp til jobsøgning
                </li>
                <li className="flex items-center text-base text-blue-900">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Feedback til ansøgning og CV
                </li>
                <li className="flex items-center text-base text-blue-900">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sparring inden jobsamtale
                </li>
                <li className="flex items-center text-base text-blue-900">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Online kurser til udvikling af kompetencer
                </li>
                <li className="flex items-center text-base text-blue-900">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Workshops og foredrag
                </li>
                <li className="flex items-center text-base text-blue-900">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Ekspertviden på tværs af brancher
                </li>
              </ul>

              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Tilvalg</h3>
                <div className="flex items-center text-base text-blue-900">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lønsikring
                </div>
              </div>

              <a 
                href="https://go.min-a-kasse.dk/t/t?a=1667704485&as=1982389276&t=2&tk=1" 
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="mt-6 inline-block w-full rounded-xl bg-blue-600 py-4 text-center text-base font-bold text-white transition hover:bg-blue-700 hover:shadow-lg transform hover:scale-105"
                onClick={() => {
                  // Track affiliate click
                  if (typeof (window as any).gtag !== 'undefined') {
                    (window as any).gtag('event', 'affiliate_click', {
                      affiliate_name: 'Min A-kasse DK',
                      page_location: window.location.href,
                      position: 'top',
                      page_type: 'sosu_hjaelper'
                    });
                  }
                }}
              >
                Bliv medlem af Min A-kasse ↗
              </a>
               
            </section>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad Laver en SOSU Hjælper?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Personlig pleje:</strong> Hjælpe borgere med personlig hygiejne, bad og påklædning.</li>
              <li><strong>Praktiske opgaver:</strong> Rengøring, tøjvask, indkøb og lettere madlavning.</li>
              <li><strong>Aktiviteter og samvær:</strong> Bidrage til borgernes sociale liv, fx ture, samtaler og beskæftigelse.</li>
              <li><strong>Observation og dokumentation:</strong> Rapportere om borgerens helbred og trivsel, så ændringer opfanges i tide.</li>
              <li><strong>Samarbejde:</strong> Indgå i et tværfagligt team, hvor der koordineres med SOSU-assistenter, sygeplejersker og terapeuter.</li>
            </ul>
            <p className="mt-4">
              SOSU hjælpere kan arbejde i hjemmeplejen, på plejecentre, rehabiliteringscentre eller i private virksomheder, og der er typisk ansættelse i kommunalt eller regionalt regi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Opdaterede Løntrin for SOSU Hjælpere i 2025</h2>
            <p>
              Ifølge <a href="https://www.foa.dk/~/media/faelles/pdf/loenmagasiner/2025/inlnmagasinkommunalt112025142025low%20pdf.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FOA's lønmagasin for 2025</a> gælder følgende nye grundløn og kvalifikationsløn for social- og sundhedshjælpere:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>[NY] Grundløn:</strong> Løntrin 19 + kr. 307*</li>
              <li><strong>[NY] Kvalifikationsløn efter 4 år:</strong> Løntrin 22 + kr. 1.307*</li>
              <li><strong>[NY] Kvalifikationsløn efter 11 år:</strong> Løntrin 28 + kr. 1.807*</li>
              <li><strong>Pensionsprocent:</strong> 13 %</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              * Beløbene er årlige løntillæg, der lægges oveni det valgte løntrin (ekskl. pension). Den eksakte lønudregning vil variere fra kommune til kommune, og eventuelle lokale tillæg kan komme oveni.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">SOSU Hjælper Løn – Før og Efter Skat i 2025</h2>
            <p>
              Lønnen for en SOSU hjælper i 2025 vil afhænge af flere faktorer: kommune, erfaring (anciennitet), eventuelle funktionstillæg, arbejdede timer uden for normal dagtid m.m. Tabellen nedenfor giver et eksempel på forventede lønniveauer rundt om i landet for en SOSU hjælper med cirka 4 års erfaring på fuld tid (37 timer), inklusive relevante tillæg:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat (kr./md.)</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat (kr./md., ca.)</th>
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
              Bemærk: De viste efter-skat intervaller er skøn og kan variere pga. forskelle i kommuneskat, kirkeskat, personfradrag og individuelle fradrag.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan Udvikler Din Løn Sig Med Erfaring</h2>
            <p>
              Anciennitet er en vigtig lønfaktor for en SOSU hjælper. Herunder ser du et eksempel på, hvordan lønnen (før og efter skat) kan stige fra nyuddannet til 12 års erfaring. Beløbene inkluderer grundløn samt kvalifikationsløn (efter 4 og 11 år), men ikke eventuelle funktionstillæg eller ulempetillæg for aften/nat:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat (kr./md.)</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat (kr./md., ca.)</th>
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
              Tip: Vil du have en hurtig estimering af din egen udbetaling, kan du bruge 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tillæg og Særlige Forhold</h2>
            <p>
              Udover din grundløn og kvalifikationsløn kan du som SOSU hjælper få en række ekstra tillæg:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Arbejdstidsbestemte Tillæg</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Aftentillæg (typisk kl. 17-23)</li>
              <li>Nattillæg (typisk kl. 23-06)</li>
              <li>Weekendtillæg (for lør-/søndage)</li>
              <li>Helligdagstillæg (ofte 100-150% ekstra per time)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Funktionstillæg</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Praktikvejleder:</strong> Tillæg for at vejlede elever under uddannelse.</li>
              <li><strong>Specialfunktion:</strong> Fx demensspecialist, rehabilitering eller psykiatri.</li>
              <li><strong>Teamkoordinator:</strong> Ekstra ansvar og opgaver som planlægning og koordinering.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Kvalifikationstillæg</h3>
            <p>
              For fx efteruddannelse, kurser eller særlige kompetencer (f.eks. medicinhåndtering, palliation m.m.).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvordan Beregnes Løn Efter Skat?</h2>
            <p>
              Når du vil finde din SOSU Hjælper Løn Efter Skat, bør du især være opmærksom på:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">AM-bidrag (8%)</h3>
            <p>
              Dette trækkes af din bruttoløn, inden A-skat beregnes.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">A-skat</h3>
            <p>
              Dækker over bundskat, kommuneskat og eventuel kirkeskat. Personfradraget mindsker din skattepligtige indkomst.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">ATP-bidrag</h3>
            <p>
              Du betaler et mindre beløb til ATP (ca. 94,65 kr. om måneden).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Pension</h3>
            <p>
              SOSU hjælpere har typisk en pensionsprocent på 13 % (ifølge FOA). En stor del betales af arbejdsgiveren, men du betaler også selv en del.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Fradrag</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Personfradrag (årligt beløb, du ikke betaler skat af).</li>
              <li>Beskæftigelsesfradrag (procentdel af din arbejdsindkomst, der trækkes fra i skat).</li>
              <li>Transportfradrag (hvis du har over 24 km til og fra arbejde).</li>
              <li>Fagforeningsfradrag (indtil et vist årligt loft).</li>
            </ul>
            <p className="mt-4">
              For at få et let og hurtigt estimat af din månedsløn efter skat kan du benytte 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode Råd til at Hæve Din SOSU Hjælper Løn</h2>
            <div className="space-y-6 my-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Efteruddannelse</h3>
                <p>
                  Jo flere kurser og specialiseringer du tager, jo større chance for kvalifikations- eller funktionstillæg.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Fokus på ulempetillæg</h3>
                <p>
                  Aften-, nat- og weekendvagter giver ekstra tillæg, men husk at overveje work-life balance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Forhandling</h3>
                <p>
                  Vær opmærksom på dine muligheder for at forhandle funktionstillæg eller særlige tillæg, hvis du løfter ekstra opgaver.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Tjek altid lønsedlen</h3>
                <p>
                  Sikr dig, at alle dine tillæg og anciennitetsstigninger er korrekt registreret.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Hold styr på dine skatteforhold</h3>
                <p>
                  Sørg for, at dit skattekort er opdateret, og at du får de fradrag, du har ret til.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrieremuligheder som SOSU Hjælper</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Videreuddannelse til SOSU assistent:</strong> Typisk 1 års ekstra uddannelse (afhængig af din baggrund) og lønhop på ca. 2.000-4.000 kr. om måneden.</li>
              <li><strong>Specialisering:</strong> Inden for demens, palliation, psykiatri eller andet speciale, der giver både faglig udvikling og ofte bedre løn.</li>
              <li><strong>Teamleder eller koordinator:</strong> Flere ansvarsområder og potentiel lønfremgang.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              En SOSU Hjælper Løn Efter Skat i 2025 vil typisk ligge mellem ca. 17.800 og 21.600 kr. om måneden, afhængigt af anciennitet, arbejdssted og de tillæg, du får. Nyuddannede starter typisk lavere, men lønnen stiger i takt med, at du opnår mere erfaring, uddannelse og specialisering.
            </p>
            <p className="mt-4">
              Vil du kende netop din mulige løn efter skat? Så prøv vores gratis online-værktøj 
              <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>, 
              der hurtigt giver et estimat på din udbetaling.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder og Yderligere Information</h2>
            <ul className="list-disc pl-6 space-y-3 my-4">
              <li>
                <a href="https://www.foa.dk/~/media/faelles/pdf/loenmagasiner/2025/inlnmagasinkommunalt112025142025low%20pdf.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FOA's lønmagasin for 2025 (PDF)</a>
              </li>
              <li>
                <a href="https://www.foa.dk/forbund/loen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FOA: Løn og ansættelse</a>
              </li>
              <li>
                <a href="https://www.skat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skat.dk: Skatteregler og fradrag</a>
              </li>
              <li>
                <a href="https://www.krl.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Kommunernes og Regionernes Løndatakontor</a>
              </li>
            </ul>
            
            <p className="mt-6">
              Vi håber, at denne guide hjælper dig til at navigere i lønniveauer, tillæg og skat. Som SOSU hjælper har du gode muligheder for lønudvikling via efteruddannelse, specialisering og forhandling af tillæg. Held og lykke!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SOSUHjaelperPage; 