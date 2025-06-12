import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BrandmandLoenPage = () => {
  const [selectedProfile, setSelectedProfile] = useState<string>("Nyuddannet (trin 1)");

  // By-/region-eksempler (skøn baseret på landsdata + 7 % for hovedstaden)
  const cityData: Record<string, { grossSalary: number; netMin: number; netMax: number }> = {
    "København": { grossSalary: 31000, netMin: 20500, netMax: 20900 },
    "Aarhus": { grossSalary: 30000, netMin: 19800, netMax: 20200 },
    "Odense": { grossSalary: 29500, netMin: 19400, netMax: 19800 },
    "Aalborg": { grossSalary: 29000, netMin: 19100, netMax: 19500 },
    "Esbjerg": { grossSalary: 28500, netMin: 18800, netMax: 19200 },
  };

  // Lønbånd / erfaring
  const experienceData = [
    { type: "Nyuddannet (trin 1)", grossSalary: 29000, netMin: 19200, netMax: 19700 },
    { type: "4-8 år + døgnvagter", grossSalary: 33000, netMin: 22000, netMax: 22500 },
    { type: "9-12 år (flere løntrin)", grossSalary: 37000, netMin: 24700, netMax: 25200 },
    { type: "Senior indsatsleder (Kbh.)", grossSalary: 45000, netMin: 29800, netMax: 30300 },
  ];

  const cityExamples = useMemo(() => {
    return Object.entries(cityData).map(([city, data]) => ({
      city,
      grossSalary: data.grossSalary,
      netMin: data.netMin,
      netMax: data.netMax,
    }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO
        title="Brandmand Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Hvad tjener en brandmand efter skat i 2025? Se realistiske lønintervaller før og efter skat – og beregn din nettoløn med professionel lønberegner."
        keywords="brandmand løn efter skat 2025, brandmand nettoløn, beredskab løn, indsatsleder løn, brandmand døgnvagt løn"
      />
      <Header />
      <PageTitle title="Brandmand Løn Efter Skat 2025" />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Brandmand Løn Efter Skat 2025 – Fra Røgsøjle til Rådighedsbeløb</h1>

            {/* TL;DR */}
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids brandmand (heltidsansat, 37 t/uge) har i 2025 en løn før skat på ca. 29 000 – 45 000 kr. om måneden. Det svarer til en brandmand løn efter skat på omtrent 19 000 – 30 000 kr. Få dit helt præcise nettobeløb med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            {/* Faktorer */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger brandmand løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Grundløn &amp; overenskomst</td>
                    <td className="py-3 px-4 border-b">KL/FOA-overenskomsten placerede brandmænd på timeløn omkring 175 kr./t i 2025 (≈ 28 500 kr./md.). Deltidsbrandfolk honoreres pr. udryknings­time.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Sektor</td>
                    <td className="py-3 px-4 border-b">Gennemsnitlig månedsløn er 29 000 kr. i kommunerne og 31 000 kr. i private beredskaber.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring &amp; kvalifikations­trin</td>
                    <td className="py-3 px-4 border-b">4, 8 og 12 års anciennitet udløser ekstra løntrin på overenskomsten.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Tillæg &amp; rådighed</td>
                    <td className="py-3 px-4 border-b">Døgnvagter, rådighedshonorar og indsatsleder­funktion kan lægge 3 000-6 000 kr. til før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">Heltidsbrandmænd i København ligger ca. 7 % over landsgennemsnittet.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 15 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat og ses ikke i nettolønnen, men løfter den samlede pakke.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Byoversigt */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn efter skat – eksempler fra danske byer 2025</h2>
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
                      className={`hover:bg-gray-50 ${example.city === selectedProfile ? "bg-blue-50" : ""}`}
                      onClick={() => setSelectedProfile(example.city)}
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
              * Estimater uden kirkeskat; beregnet med gennemsnitlig kommuneskat og AM-bidrag 8 %.
            </p>

            {/* Lønbånd */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Brandmand 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Profil / erfaring</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat**</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr
                      key={exp.type}
                      className={`hover:bg-gray-50 ${exp.type === selectedProfile ? "bg-blue-50" : ""}`}
                      onClick={() => setSelectedProfile(exp.type)}
                    >
                      <td className="py-3 px-4 border-b">{exp.type}</td>
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
              ** Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent (≈ 37 %).
            </p>

            {/* Beregningseksempel */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Brandmand m/ rådighed (33 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat</strong> 33 000 kr.</li>
                <li><strong>AM-bidrag 8 %</strong> 2 640 kr.</li>
                <li><strong>Skattepligtig indkomst</strong> 30 360 kr.</li>
                <li><strong>Personfradrag</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag</strong> 25 710 kr.</li>
                <li><strong>A-skat (≈ 37 %)</strong> 9 510 kr.</li>
                <li><strong>Brandmand løn efter skat</strong> ≈ 22 200 kr.</li>
              </ul>
            </div>
            <p>
              Tast dine egne tal – i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se din nøjagtige nettoløn.
            </p>

            {/* Tips */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige måder at hæve nettolønnen</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Tag flere døgnvagter</strong> – rådigheds­honorar + tilkald giver 2-4 k kr. ekstra før skat.</li>
              <li><strong>Bliv holdleder / indsatsleder</strong> – kvalifikations­trin + funktions­tillæg på op til 5 k kr./md. før skat.</li>
              <li><strong>Supplér med deltidsbrand­job i nabokommune</strong> – honoreres pr. udrykning og tæller ikke med i 37-timers loftet.</li>
              <li><strong>Forhandl lokalaftalte tillæg</strong> for kemi-speciale, højde­redning eller drone­pilot – typisk 500-1 500 kr./md.</li>
            </ol>

            {/* FAQ */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Brandmand Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny brandmand efter skat?</p>
                <p>Ca. 19 500 kr. pr. måned.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 30 000 kr. efter skat?</p>
                <p>Seniorrolle i hovedstaden + indsatsleder­funktion og flere døgnvagter.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller rådighedshonorar i nettoløn?</p>
                <p>Ja – det udbetales som A-indkomst og beskattes på linje med lønnen.</p>
              </div>
              <div>
                <p className="font-semibold">Får brandmænd pension oveni?</p>
                <p>Ja, pensionsbidraget (15 %) betales før skat og ligger ud over nettolønnen.</p>
              </div>
            </div>

            {/* Konklusion */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger brandmand løn efter skat typisk mellem 19 000 og 30 000 kr. om måneden – baseret på 29 000 – 45 000 kr. før skat. Skæve vagter, kvalifikations­trin og lokalt aftalte tillæg er de hurtigste veje til et højere nettobeløb. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad din egen indsats giver, når røgen har lagt sig.
            </p>

            {/* Kilder */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://fagforeningsguide.dk/hvad-tjener-en-brandmand/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fagforeningsguide – Hvad tjener en brandmand?</a></li>
              <li><a href="https://www.studentum.dk/job-loen/brandmand" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Job &amp; Løn: Brandmand</a></li>
              <li><a href="https://www.kl.dk/media/r5sjuvs2/ok24-3301-overenskomst-for-beredskabspersonale.pdf?format=noformat&amp;" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KL/FOA Overenskomst OK24-33.01</a></li>
            </ul>

            <p className="text-sm text-gray-500 mt-8">Opdateret: juni 2025.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrandmandLoenPage; 