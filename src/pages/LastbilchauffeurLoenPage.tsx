import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const LastbilchauffeurLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 35000, netMin: 23400, netMax: 23900 },
    "Aarhus": { grossSalary: 34300, netMin: 22900, netMax: 23400 },
    "Odense": { grossSalary: 33800, netMin: 22500, netMax: 22900 },
    "Aalborg": { grossSalary: 33300, netMin: 22100, netMax: 22500 },
    "Esbjerg": { grossSalary: 32800, netMin: 21700, netMax: 22100 },
    "Randers": { grossSalary: 32800, netMin: 21700, netMax: 22100 },
    "Vejle": { grossSalary: 33800, netMin: 22700, netMax: 23100 }
  };

  const experienceData = [
    { years: "Nyuddannet (0–2 år)", grossSalary: 30000, netMin: 20500, netMax: 20900 },
    { years: "3–4 år", grossSalary: 31500, netMin: 21500, netMax: 21900 },
    { years: "5–7 år", grossSalary: 33000, netMin: 22500, netMax: 22900 },
    { years: "8–10 år", grossSalary: 34500, netMin: 23500, netMax: 23900 },
    { years: "11+ år", grossSalary: 36000, netMin: 24500, netMax: 24900 }
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
        title="Lastbilchauffør Løn Efter Skat 2025 – Nettoløn & Diæter"
        description="Lastbilchauffør løn efter skat 2025: Se nettoløn i byer og med anciennitet, diæt- og nattillæg – og få et hurtigt estimat i beregneren."
        keywords="lastbilchauffør løn efter skat 2025, chauffør indkomst, 3F overenskomst, transportarbejder løn, diæter chauffør"
      />
      <Header />
      <PageTitle title="Lastbilchauffør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Lastbilchauffør Løn Efter Skat 2025 – Alt du skal vide</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtidsansat lastbilchauffør i Danmark kan i 2025 regne med ca. 20.500 – 24.500 kr. i løn efter skat pr. måned, alt efter rute (national vs. international), kommune og anciennitet. Få et hurtigt estimat på få sekunder med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad laver en lastbilchauffør?</h2>
            <p>
              Lastbilchauffører transporterer gods nationalt og internationalt, betjener kran / lift, udfører egenkontrol på køretøjer og sørger for korrekt sikring af lasten. De fleste chauffører er omfattet af 3F's gods‑overenskomst med DI Transport eller ATL, som fastsætter minimalløn, pension og kørsels­tillæg.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Løn for en Lastbilchauffør – Før og Efter Skat</h2>
            <p>
              Tallene herunder bygger på 3F's overenskomstsats (grundløn 180,50 kr./t) samt lønstatistik fra DI Transport (Q1 2025). Eksemplerne antager 37 t/uge, 12 % pension og ingen nat-/weekendtillæg.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Kommune/By</th>
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
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              *Estimater uden kirkeskat. Vil du se et konkret eksempel på nettoløn? Prøv <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter Anciennitet</h2>
            <p>
              Garantiløft efter 2, 4 og 7 år. Internationale chauffører får ofte 5 – 10 % højere akkord + skattefri diæter.
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
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              *Gns. kommuneskat 25 % + AM‑bidrag 8 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">National vs. international kørsel – hvad betyder det for løn efter skat?</h2>
            <p>
              Internationale ruter giver ofte skattefrie diæter (op til 560 kr./døgn) og "udlandstillæg" på 3 % af bruttolønnen.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Nattillæg (kl. 17‑06) = +22 % pr. time.</li>
              <li>Weekendkørsel betales med 50 % overtid første 5 timer, derefter 100 %.</li>
            </ul>
            <p>
              Vær opmærksom på, at skattefri diæter reelt booster din disponible indkomst ud over nettolønnen. <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a> viser din grundløn efter skat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Aalborg, 33.300 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM‑bidrag (8 %)</strong> 33.300 × 0,08 = 2.664 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 33.300 – 2.664 = 30.636 kr.</li>
                <li><strong>Personfradrag</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 25.986 kr.</li>
                <li><strong>A‑skat (≈ 34,8 %)</strong> 25.986 × 0,348 ≈ 9.050 kr.</li>
                <li><strong>Løn efter skat (før pension)</strong> 30.636 – 9.050 ≈ 21.586 kr.</li>
                <li><strong>Pension (12 %)</strong> 3.996 kr. indbetales før skat → løn efter skat ca. 21.500 kr.</li>
              </ul>
            </div>
            <p>
              Få et hurtigt estimat af din grundløn efter skat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker lastbilchauffør løn efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Kommuneskat:</strong> Varians på op til 600 kr./md.</li>
              <li><strong>Akkord & fragtaftaler:</strong> 2 – 6 kr./km kan løfte bruttolønnen betydeligt.</li>
              <li><strong>Skattefri diæter:</strong> Op til 560 kr. pr. døgn (udland) – tæller ikke som A‑indkomst.</li>
              <li><strong>Pension:</strong> 12 % arbejdsgiverbetalt trækker skatte­grundlaget ned.</li>
              <li><strong>Fagforeningsfradrag (3F):</strong> hæver nettolønnen.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ om lastbilchauffør løn efter skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en lastbilchauffør før skat?</p>
                <p>30.000 – 36.000 kr. + diæter.</p>
              </div>
              <div>
                <p className="font-semibold">Hvad er lastbilchauffør løn efter skat 2025?</p>
                <p>Omkring 20.500 – 24.500 kr. afhængigt af kommune og rute.</p>
              </div>
              <div>
                <p className="font-semibold">Stiger lønnen med erfaring?</p>
                <p>Ja, garantitrin + højere akkord.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan forhandles lønnen?</p>
                <p>Via 3F's gods‑overenskomst og lokale akkorder.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips til at hæve din nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag ADR‑bevis</strong> → +1.000‑1.500 kr./md.</li>
              <li><strong>Planlæg udlandsture</strong> for skattefri diæter.</li>
              <li><strong>Optimer fradrag:</strong> bro‑/færge­billetter, befordring, fagforening.</li>
              <li><strong>Kør natture</strong> med 22 % tillæg.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              Lastbilchauffører i Danmark tjener 2025 en bruttoløn på 30.000 – 36.000 kr. og en nettoløn på 20.500 – 24.500 kr.. Din præcise lastbilchauffør løn efter skat afhænger af kommune, akkord og diæter. Få et hurtigt estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.3f.dk/overenskomster/ok25/transportgruppen-resultater" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F Transport – Gods‑overenskomst 2025‑2028</a></li>
              <li><a href="https://www.danskindustri.dk/globalassets/di-dokumenter-kun-til-dokumentsider-i-radgivningsunivers/for-alle/overenskomst-fx-io/ok25---protokollater/transport--og-logistikoverenskomsten---protokollatpakke-2025.pdf?v=250301" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DI Transport – Lønstatistik Q1 2025</a></li>
              <li><a href="https://www.dst.dk/da/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønindeks for transportsektoren</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskat 2025</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Senest opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LastbilchauffeurLoenPage; 