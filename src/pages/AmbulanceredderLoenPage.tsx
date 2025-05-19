import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const AmbulanceredderLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("Hovedstaden");
  
  // City-specific salary data
  const cityData = {
    "Hovedstaden": { grossSalary: 43000, netMin: 28100, netMax: 28800 },
    "Midtjylland": { grossSalary: 40000, netMin: 26100, netMax: 26800 },
    "Syddanmark": { grossSalary: 38000, netMin: 24800, netMax: 25500 },
    "Nordjylland": { grossSalary: 36000, netMin: 23400, netMax: 24100 },
    "Sjælland": { grossSalary: 35000, netMin: 22700, netMax: 23400 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Elev (3. år)", grossSalary: 21000, netMin: 15000, netMax: 15400 },
    { type: "Redder-aspirant (færdiguddannet)", grossSalary: 29000, netMin: 19000, netMax: 19600 },
    { type: "Redder-behandler (4-6 år)", grossSalary: 35000, netMin: 23000, netMax: 23600 },
    { type: "Paramediciner (7-9 år)", grossSalary: 41000, netMin: 27000, netMax: 27600 },
    { type: "Specialredder / Rapid Responder", grossSalary: 45000, netMin: 29000, netMax: 30000 },
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
        title="Ambulanceredder Løn Efter Skat 2025 – Realistiske Estimater"
        description="Hvad er ambulanceredder løn efter skat i 2025? Se løn før og efter skat, skifteholdstillæg, erfaringstrin og beregn din nettoløn med få klik."
        keywords="ambulanceredder løn efter skat 2025, paramediciner løn, ambulanceredder vagt tillæg, skifteholdstillæg ambulance, redder løn netto, redder karriere trin"
      />
      <Header />
      <PageTitle title="Ambulanceredder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Ambulanceredder Løn Efter Skat 2025 – Nettobeløb, Vagttillæg og Karrieretrin</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids ambulanceredder (37 t/uge + beredskabsvagter) kan i 2025 som hovedregel forvente mellem 15.000 kr. (elev) og 30.000 kr. (paramediciner) i løn efter skat. Beregn din specifikke løn med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger ambulanceredder løn efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Grundløn & anciennitet</td>
                    <td className="py-3 px-4 border-b">Sættes af 3F Redderoverenskomsten. Trinløft hvert andet år op til 10. år.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Vagtformer</td>
                    <td className="py-3 px-4 border-b">Bemanding 24/7 → nat + 30 %, weekend + 45 %, rådighedsvagt hjemme + 14 %.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Specialfunktioner</td>
                    <td className="py-3 px-4 border-b">Paramediciner, akutlægebil eller babylife-team udløser 2 000 – 4 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Region & operatør</td>
                    <td className="py-3 px-4 border-b">Private leverandører (Falck, PreMed, Responce) betaler typisk 5-8 % mere før skat end Region Hovedstadens Akutberedskab men har færre fridøgn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 14 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag trækkes før skat – ses ikke i nettolønnen.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spændet 0,8 pct.point ⇒ ± ≈ 650 kr./md. i ambulanceredder løn efter skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – regionale eksempler 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Region</th>
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
                      <td className="py-3 px-4 border-b">{example.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {example.netMin.toLocaleString("da-DK")} – {example.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              Estimeret ved 160 aktive timer + 48 rådighedstimer pr. måned; ingen kirkeskat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrieretrappen – ambulanceredder løn før og efter skat</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((data) => (
                    <tr 
                      key={data.type} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{data.type}</td>
                      <td className="py-3 px-4 border-b">{data.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {data.netMin.toLocaleString("da-DK")} – {data.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Midtjylland, paramediciner med nat- og weekendtillæg</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 40 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 3 200 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 36 800 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 32 150 kr.</li>
                <li><strong>A-skat (~ 37 %):</strong> 11 900 kr.</li>
                <li><strong>Ambulanceredder løn efter skat ≈</strong> 24 900 kr.</li>
              </ul>
            </div>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire greb til højere nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag flere nat- og weekendvagter</strong> – ulempe­tillæg kan løfte nettolønnen op til 3 000 kr./md.</li>
              <li><strong>Specialisér dig til paramediciner eller akutlægebil</strong> – 5-10 % højere grundløn før skat.</li>
              <li><strong>Optimer fridøgn</strong> – byt vagter, så du holder skattefrie rådighedstimer uden at ramme overarbejdsloftet.</li>
              <li><strong>Flyt til lav-skat kommune</strong> – kan øge ambulanceredder løn efter skat med ≈ 650 kr./md.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Ambulanceredder Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvornår rammer en redder topskat?</p>
                <p>Når samlet månedsløn før skat overstiger ca. 63 000 kr. incl. ulempe­tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller rådighedsvagt som løn?</p>
                <p>Ja, hjemme­vagt aflønnes med 14 % af timelønnen og beskattes som almindelig indkomst.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i løn efter skat?</p>
                <p>Nej – 14 % pension indbetales før skat.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg få skattefri kørsel?</p>
                <p>Ja, befordringsfradrag for mere end 24 km dagligt mellem hjem og station.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger ambulanceredder løn efter skat typisk mellem 19 000 og 30 000 kr. Beredskabs­tillæg, special­uddannelse og kommuneskat er de vigtigste håndtag, hvis du vil hæve nettolønnen uden at miste fridøgn. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et præcist billede af, hvad din indsats på landevejen omsættes til på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.3f.dk/overenskomster/se-din-overenskomst" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">3F Overenskomst for redningstjeneste 2024-2027</a></li>
              <li><a href="https://www.danskmetal.dk/pjecer-og-udgivelser/ok25-protokollat-falck-danmark-as-2023-2028" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Falck Danmark & Region Hovedstadens Akutberedskab – Lønstatistik 2025</a></li>
              <li><a href="https://www.skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Kommuneskatteprocenter 2025 (skm.dk)</a></li>
              <li><a href="https://www.reddernesfagforening.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reddernes Brancheforening – Lønsatser</a></li>
            </ul>
            
            <p className="text-sm text-gray-500 mt-8">
              Senest opdateret: maj 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AmbulanceredderLoenPage; 