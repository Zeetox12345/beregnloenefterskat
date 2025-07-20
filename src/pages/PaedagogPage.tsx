import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const PaedagogPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 33500, netMin: 22500, netMax: 23000 },
    "Aarhus": { grossSalary: 33000, netMin: 22200, netMax: 22700 },
    "Odense": { grossSalary: 32500, netMin: 21800, netMax: 22300 },
    "Aalborg": { grossSalary: 32000, netMin: 21400, netMax: 21900 },
    "Esbjerg": { grossSalary: 31500, netMin: 21000, netMax: 21500 },
    "Randers": { grossSalary: 31500, netMin: 21000, netMax: 21500 },
    "Vejle": { grossSalary: 32500, netMin: 21800, netMax: 22300 }
  };

  const experienceData = [
    { years: "Nyansat (0 ‑ 2 år)", grossSalary: 29000, netMin: 19800, netMax: 20300 },
    { years: "3 ‑ 5 år", grossSalary: 30500, netMin: 20800, netMax: 21300 },
    { years: "6 ‑ 7 år", grossSalary: 32000, netMin: 21800, netMax: 22300 },
    { years: "8 ‑ 10 år", grossSalary: 33500, netMin: 22800, netMax: 23300 },
    { years: "11+ år", grossSalary: 35000, netMin: 23800, netMax: 24300 }
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
        title="Pædagog Løn Efter Skat 2025 – Komplet Guide"
        description="Se pædagog løn efter skat 2025: detaljerede løn efter skat-tal for byer og anciennitet samt skatteprocenter, pension og relevante tillæg."
        keywords="pædagog løn efter skat 2025, pædagog løn, bupl løn, pædagog indkomst, pædagog anciennitet, pædagog løntrin"
      />
      <Header />
      <PageTitle title="Pædagog Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Pædagog Løn Efter Skat 2025 – Din Komplette Guide</h1>
            
            <p className="lead">
              Vil du vide præcis, hvor mange kroner der står på din konto som uddannet pædagog? Denne guide dykker ned i pædagog løn efter skat med konkrete eksempler, by‑ og anciennitetstabeller, skattetips og råd til at optimere din nettoindkomst. Hvad enten du er nyuddannet, erfaren eller blot overvejer at tage pædagoguddannelsen, giver artiklen det fulde overblik.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                Hurtigt overblik: En fuldtidsansat pædagog får i 2025 typisk 20.000 – 24.000 kr. i løn efter skat pr. måned – afhængigt af kommune, anciennitet og tillæg. Vil du have en hurtig estimering? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> på få sekunder.
              </p>
            </div>

            {/* Min A-kasse Affiliate Section */}


            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en pædagog?</h2>
            <p>
              Som pædagog arbejder du med børn, unge eller voksne i daginstitutioner, SFO, klub, skole eller socialpædagogiske tilbud. Arbejdet favner både omsorg, leg, læring, forældresamarbejde og faglig planlægning. Pædagoger er normalt organiseret i BUPL (kommuner) eller SL (socialpædagogisk sektor) og er dækket af overenskomster, der fastsætter løntrin, pension og tillæg.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Pædagog – Før og Efter Skat</h2>
            <p>
              Data herunder bygger på BUPL's kommunale løntabel (1. jan. 2025 – 31. mar. 2025) og de seneste reguleringer fra trepartsaftalen (apr. 2025). Eksemplerne viser en 37‑timers uge og indregner 15 % pensionsbidrag (ikke fratrukket i nettobeløbet).
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
              *Tal er vejledende, baseret på kommunale skattesatser for 2025 uden kirkeskat. Din faktiske pædagog løn efter skat varierer med personfradrag, pension og individuelle tillæg. Prøv selv i vores lønberegner – <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling med Anciennitet</h2>
            <p>
              Pædagogers grundløn stiger på faste trin efter 3, 6 og 8 års erfaring – og igen efter 11 år via kvalifikations‑ og funktionstillæg.
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
              Nettobeløb beregnet med gennemsnitlig kommuneskat på 25 %, AM‑bidrag 8 % og personfradrag 4.650 kr./md.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker din løn efter skat?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Kommuneskat</h3>
                <p>
                  Svinger fra ca. 23,4 % (Vejle) til 26,3 % (Brønderslev). Højere sats = lavere nettoløn.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Kirkeskat</h3>
                <p>
                  0,66 – 0,92 % oveni, hvis du er medlem af folkekirken.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Arbejdsmarkedsbidrag (AM‑bidrag)</h3>
                <p>
                  8 % af bruttolønnen – trækkes før øvrig skat.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Personfradrag</h3>
                <p>
                  I 2025: 55.800 kr. årligt (4.650 kr./md.)
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                <h3 className="text-xl font-semibold mb-2">Pension</h3>
                <p>
                  Fra april 2025 indbetales 15 % af din løn til pension – før skat – hvilket reducerer beskatningsgrundlaget.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel: Detaljeret Beregning (Aarhus, 33.000 kr.)</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-2">
              <p><strong>AM‑bidrag (8 %)</strong>: 33.000 × 0,08 = 2.640 kr.</p>
              <p><strong>Skattepligtig indkomst</strong>: 33.000 − 2.640 = 30.360 kr.</p>
              <p><strong>Personfradrag</strong>: 4.650 kr.</p>
              <p><strong>Beskatningsgrundlag</strong>: 25.710 kr.</p>
              <p><strong>A‑skat (≈ 35,8 %)</strong>: 25.710 × 0,358 ≈ 9.210 kr.</p>
              <p><strong>Løn efter skat (før pension)</strong>: 30.360 − 9.210 ≈ 21.150 kr.</p>
              <p><strong>Pension (15 %)</strong>: 4.950 kr. indbetales → løn efter skat ca. 21.100 kr.</p>
            </div>

            <p className="mt-4">
              Vil du lege med dine egne tal? Gå direkte til <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gode råd til pædagoger om løn & økonomi</h2>
            <ul className="list-disc pl-6 space-y-3 mt-2">
              <li>
                <strong>Tjek overenskomsten</strong> – brug BUPL's lønberegner for aktuelle løntrin.
              </li>
              <li>
                <strong>Forhandl funktions‑ og kvalifikationstillæg</strong> – specialopgaver, vejlederroller eller praktikvejledning kan give 500‑2.000 kr. ekstra.
              </li>
              <li>
                <strong>Opdater dine fradrag</strong> – kørsel, A‑kasse, fagforening og efter‑/videreuddannelse.
              </li>
              <li>
                <strong>Udnyt fritvalg</strong> – 1 % ekstra løn eller pension fra trepartsaftalen.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Hurtige svar</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Hvor meget tjener en pædagog før skat i 2025?</h3>
                <p>Typisk 29.000 – 35.000 kr. pr. måned.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Hvad er pædagog løn efter skat?</h3>
                <p>Omkring 20.000 – 24.000 kr. ved fuldtid.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Stiger lønnen med anciennitet?</h3>
                <p>Ja, trin efter 3, 6, 8 og 11 års erfaring + mulige funktionstillæg.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Er der forskel på kommune og region?</h3>
                <p>Regionale stillinger er ca. 500‑800 kr. højere før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Som pædagog kan du i 2025 forvente en bruttoløn på 29.000 – 35.000 kr. og en nettoløn på 20.000 – 24.000 kr.. Optimér din netto ved at holde styr på fradrag, tillæg og pension – og få en hurtig estimering via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <a href="https://bupl.dk/pjece/loenninger-1-jan-2025-31-mar-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">BUPL – Kommunale løntabeller 2025 (Tabel 8) (bupl.dk)</a>
              </li>
              <li>
                <a href="https://bupl.dk/boern-unge/nyheder/nu-stiger-loennen-igen-se-hvad-der-gaelder-din-overenskomst" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">BUPL – Ny trepartsaftale om lønstigning (apr. 2025) (bupl.dk)</a>
              </li>
              <li>
                <a href="https://www.dst.dk/da/Statistik/emner/arbejde-og-indkomst/indkomst-og-loen/loen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Danmarks Statistik – Lønindeks Q4 2024 (dst.dk)</a>
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

export default PaedagogPage; 