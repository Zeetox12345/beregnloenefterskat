import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const PaedagogiskAssistentPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 30500, netMin: 20600, netMax: 21000 },
    "Aarhus": { grossSalary: 30000, netMin: 20400, netMax: 20800 },
    "Odense": { grossSalary: 29500, netMin: 20000, netMax: 20400 },
    "Aalborg": { grossSalary: 29000, netMin: 19700, netMax: 20100 },
    "Esbjerg": { grossSalary: 28500, netMin: 19300, netMax: 19700 },
    "Randers": { grossSalary: 28500, netMin: 19300, netMax: 19700 },
    "Vejle": { grossSalary: 29500, netMin: 20000, netMax: 20400 }
  };

  const experienceData = [
    { years: "Nyansat (0‑2 år)", grossSalary: 28500, netMin: 19200, netMax: 19600 },
    { years: "3‑5 år", grossSalary: 29800, netMin: 20000, netMax: 20400 },
    { years: "6‑7 år", grossSalary: 31000, netMin: 20800, netMax: 21200 },
    { years: "8+ år", grossSalary: 32400, netMin: 21700, netMax: 22100 }
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
        title="Pædagogisk Assistent Løn Efter Skat 2025 – Din Guide"
        description="Pædagogisk assistent? Opdag løn efter skat i 2025, detaljerede eksempler, FAQ og skattetips."
        keywords="pædagogisk assistent løn efter skat 2025, pædagogisk assistent løn, pa løn, pædagogisk assistent indkomst, pædagogisk assistent anciennitet, pa løntrin"
      />
      <Header />
      <PageTitle title="Pædagogisk Assistent Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Pædagogisk Assistent Løn Efter Skat 2025 – Din Komplette Guide</h1>
            
            <p className="lead">
              Har du lyst til at vide, præcis hvor meget der lander på din konto som pædagogisk assistent? I denne guide finder du alt om pædagogisk assistent løn efter skat – konkrete eksempler, tabeller med anciennitet, skattefaktorer og smarte tips til at øge din nettoløn. Artiklen er skrevet til både kommende og nuværende pædagogiske assistenter, der vil forstå lønsedlen til bunds.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                Hurtigt overblik: En fuldtidsansat pædagogisk assistent modtager i 2025 typisk 19.000 – 22.000 kr. i løn efter skat pr. måned, afhængigt af bopælskommune, erfaring og tillæg. For en hurtig estimering kan du <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> på under ét minut.
              </p>
            </div>

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
                        page_type: 'paedagogisk_assistent'
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
                Som <strong>pædagogisk assistent</strong> kan du miste timer fra den ene uge til den anden.
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
                      page_type: 'paedagogisk_assistent'
                    });
                  }
                }}
              >
                Bliv medlem af Min A-kasse ↗
              </a>
               
            </section>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en pædagogisk assistent?</h2>
            <p>
              En pædagogisk assistent (forkortet PA) arbejder i daginstitutioner, SFO'er, specialtilbud eller ældre‐ og sundhedsområdet, hvor du støtter børn, unge eller borgere i dagligdagen. Uddannelsen er en erhvervsuddannelse på 2 år og 9 måneder, og jobbet kombinerer praktisk pædagogik, omsorg og aktivitetsplanlægning.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Pædagogisk Assistent – Før og Efter Skat</h2>
            <p>
              Eksemplerne nedenfor bygger på en 37‑timers arbejdsuge og den kommunale overenskomst (KL) efter OK24‑forliget, inkl. lønregulering pr. 1. april 2025. Pension er sat til 14 % af bruttolønnen, som ikke fratrækkes i nettobeløbet her.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
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
              *Tal er vejledende og beregnet med kommunale skatteprocenter for 2025. Din faktiske nettoløn afhænger af personfradrag, kirkeskat og individuelle tillæg. Få præcise tal ved at <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> med dine egne oplysninger.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling med Anciennitet</h2>
            <p>
              Den kommunale overenskomst giver automatiske hop på løntrappen (kvalifikationsløn) efter 3 og 6 år – samt et nyt OK24‑tillæg efter 8 år.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Anciennitet</th>
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
                        {exp.netMin.toLocaleString("da-DK")} - {exp.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              *Indregnet gennemsnitlig kommuneskat + AM‑bidrag.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker din løn efter skat?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Kommuneskat</h3>
                <p>
                  Svinger fra ca. 23,4 % (Vejle) til 26,3 % (Brønderslev) – dét alene kan betyde 400‑600 kr. om måneden.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Kirkeskat</h3>
                <p>
                  0,66 – 0,92 % oveni, hvis du er medlem af folkekirken.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">AM‑bidrag</h3>
                <p>
                  8 % af bruttolønnen trækkes altid før øvrig skat.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Personfradrag</h3>
                <p>
                  I 2025 er personfradraget 55.800 kr. årligt (4.650 kr./md.).
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                <h3 className="text-xl font-semibold mb-2">Pension</h3>
                <p>
                  Overenskomsten indbetaler 14 % af din bruttoløn til pension, hvilket reducerer din skattepligtige indkomst.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel: Detaljeret Beregning (Odense, 29.500 kr.)</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-2">
              <p><strong>AM‑bidrag (8 %)</strong>: 29.500 × 0,08 = 2.360 kr.</p>
              <p><strong>Skattepligtig indkomst</strong>: 29.500 − 2.360 = 27.140 kr.</p>
              <p><strong>Personfradrag</strong>: 4.650 kr.</p>
              <p><strong>Beskatningsgrundlag</strong>: 22.490 kr.</p>
              <p><strong>A‑skat (ca. 36 %)</strong>: 22.490 × 0,36 ≈ 8.100 kr.</p>
              <p><strong>Løn efter skat (før pension)</strong>: 27.140 − 8.100 ≈ 19.040 kr.</p>
              <p><strong>Pension (14 %)</strong>: 4.130 kr. indbetales → Netto ≈ 19.000 kr.</p>
            </div>

            <p className="mt-4">
              Vil du teste dine egne tal? Hop direkte til <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode råd til pædagogiske assistenter om løn & økonomi</h2>
            <ul className="list-disc pl-6 space-y-3 mt-2">
              <li>
                <strong>Kend overenskomsten:</strong> <a href="https://www.foa.dk/~/media/faelles/pdf/loenmagasiner/2025/inlnmagasinkommunalt112025142025low%20pdf.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FOA's lønmagasin</a> viser præcise løntrin og OK24‑tillæg.
              </li>
              <li>
                <strong>Forhandl tillæg:</strong> Skæve‑ og weekendvagter eller specialiserede opgaver kan give 500‑1.500 kr. ekstra pr. måned.
              </li>
              <li>
                <strong>Opdater fradrag:</strong> Kørsel, a‑kasse og fagforening er fradragsberettiget.
              </li>
              <li>
                <strong>Udnyt pension & fritvalg:</strong> Ekstra 1 % pension i dag kan blive +80.000 kr. i opsparing over 30 år.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Hurtige svar</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Hvor meget tjener en pædagogisk assistent i 2025?</h3>
                <p>Typisk 28.500 – 32.500 kr. før skat.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Hvad er min løn efter skat?</h3>
                <p>Omkring 19.000 – 22.000 kr. for en fuldtidsstilling.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Stiger lønnen med erfaring?</h3>
                <p>Ja – løntrin stiger efter 3, 6 og 8 års anciennitet ifølge OK24.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Er der forskel på kommune og region?</h3>
                <p>Regionale stillinger ligger 300‑600 kr. højere før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som pædagogisk assistent i Danmark kan du i 2025 forvente en bruttoløn på 28.000 – 32.000 kr. og en nettoløn på 19.000 – 22.000 kr. – alt afhængigt af kommune, anciennitet og tillæg. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at få en hurtig estimering og optimere din økonomi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <a href="https://www.foa.dk/~/media/faelles/pdf/loenmagasiner/2025/inlnmagasinkommunalt112025142025low%20pdf.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FOA Lønmagasin 2025 – Kommunalt område (foa.dk)</a>
              </li>
              <li>
                <a href="https://www.foa.dk/temaer/ok-forhandlinger/ok24/kommune-paedagogisk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">OK24‑forlig for pædagogisk sektor (KL & FOA) (foa.dk)</a>
              </li>
              <li>
                <a href="https://www.dst.dk/da/Statistik/emner/borgere/husstande-familier-og-boern/boernepasning?utm_source=chatgpt.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Danmarks Statistik: Børnepasning – personalesamlinger (PA‑kategori) (dst.dk)</a>
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">Senest opdateret: April 2025.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaedagogiskAssistentPage; 