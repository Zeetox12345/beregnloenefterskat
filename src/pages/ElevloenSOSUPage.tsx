import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const ElevloenSOSUPage = () => {
  const elevData = [
    { type: "Under 18 år", grossSalary: 13800, netMin: 10000, netMax: 10400 },
    { type: "Over 18 år – trin 1", grossSalary: 17000, netMin: 12200, netMax: 12800 },
    { type: "Over 18 år – trin 2", grossSalary: 18000, netMin: 12900, netMax: 13500 },
    { type: "Voksen (25+ år)", grossSalary: 23500, netMin: 16000, netMax: 17500 }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Elevløn SOSU Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Få realistiske tal på elevløn SOSU efter skat i 2025. Se nettoløn for unge, voksne og trin 1/2 – og beregn dit estimerede beløb hurtigt."
        keywords="elevløn SOSU efter skat 2025, SOSU-elev løn, voksenelev SOSU, social- og sundhedselev indkomst, SOSU-hjælper elev"
      />
      <Header />
      <PageTitle title="Elevløn SOSU Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Elevløn SOSU Efter Skat 2025 – Din Praktiske Guide til Udbetalingen </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – I 2025 ligger elevløn som SOSU typisk på 13.000 – 17.500 kr. efter skat pr. måned, afhængigt af trin, alder og om du har relevant erfaring. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> til at få et estimeret bud på din egen elevløn SOSU efter skat på få sekunder.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad er elevløn som SOSU?</h2>
            <p>
              Som social- og sundhedselev (SOSU-elev) får du løn under hele din uddannelse – enten som SOSU-hjælper eller SOSU-assistent. Du bliver ansat i en kommune eller region og følger FOA's overenskomst. Der er forskellige satser alt efter din alder, uddannelsesbaggrund og om du har tidligere erhvervserfaring.
            </p>
            <p className="italic">
              Fun fact: Mange SOSU-elever får mere i elevløn end almindelige studerende får i SU – og det er med fuld pensionsret og feriepenge!
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Elevløn SOSU – Før og Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Elevtype</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Elevløn SOSU efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {elevData.map((item) => (
                    <tr 
                      key={item.type} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{item.type}</td>
                      <td className="py-3 px-4 border-b">{item.grossSalary.toLocaleString("da-DK")} kr</td>
                      <td className="py-3 px-4 border-b">
                        {item.netMin.toLocaleString("da-DK")} – {item.netMax.toLocaleString("da-DK")} kr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              *Estimater uden kirkeskat og afhængig af din kommune. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for dit eget estimerede beløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker din elevløn SOSU efter skat?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Alder</strong> – over 25 år = voksenelev = højere grundløn</li>
              <li><strong>Trin</strong> – trin 1 og 2 i assistentuddannelsen har forskellig sats</li>
              <li><strong>Kommuneskat</strong> – varierer med op til 3 % og påvirker nettoløn</li>
              <li><strong>AM-bidrag</strong> – 8 % af hele bruttolønnen</li>
              <li><strong>Pension</strong> – indbetales for dig, men vises ikke i nettoløn</li>
              <li><strong>Feriepenge</strong> – 12,5 % opspares til ferie og beskattes senere</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (voksenelev, 23.500 kr. i Aarhus)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>AM-bidrag:</strong> 23.500 × 0,08 = 1.880 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 21.620 kr.</li>
                <li><strong>Fradrag:</strong> 4.650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 16.970 kr.</li>
                <li><strong>A-skat (ca. 34 %):</strong> 5.770 kr.</li>
                <li><strong>Elevløn SOSU efter skat:</strong> ≈ 15.850 kr.</li>
              </ul>
            </div>
            
            <p>
              Vil du se dit eget estimat? Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Elevløn SOSU Efter Skat ‍️‍️</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Får man løn som SOSU-elev?</p>
                <p>Ja! Som SOSU-hjælper- eller assistentelev får du løn i hele uddannelsen.</p>
              </div>
              <div>
                <p className="font-semibold">Er elevløn skattepligtig?</p>
                <p>Ja, fuld A-indkomst + 8 % AM-bidrag.</p>
              </div>
              <div>
                <p className="font-semibold">Er der forskel på kommuner?</p>
                <p>Ja, pga. forskellige skatteprocenter og små lokale tillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Kan man få pension som elev?</p>
                <p>Ja, pension indbetales selv under uddannelse.</p>
              </div>
              <div>
                <p className="font-semibold">Er feriepenge en del af lønnen?</p>
                <p>Nej – men du får 12,5 % ekstra opsparing ved ferie.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5 Tips til at løfte din elevløn SOSU efter skat</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Tag ekstravagter i ferier/weekender</strong> → overtidsbetaling</li>
              <li><strong>Vælg kommuner med lav kommuneskat</strong> → højere nettoløn</li>
              <li><strong>Fradrag!</strong> Husk fagforening, kørselsfradrag og befordring</li>
              <li><strong>Søg voksenelevplads hvis du er over 25</strong> → højere grundløn</li>
              <li><strong>Få styr på pension og feriepenge</strong> → det tæller på lang sigt</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 får SOSU-elever en elevløn efter skat på ca. 10.000 – 17.500 kr. afhængigt af alder, trin og kommune. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at få et hurtigt, personligt estimat af din elevløn SOSU efter skat – og forstå hvad du egentlig får udbetalt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.foa.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FOA.dk – Løn- og overenskomst for SOSU-elever 2025</a></li>
              <li><a href="https://www.kl.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KL – Kommunale lønsatser</a></li>
              <li><a href="https://www.dst.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Danmarks Statistik – Lønstruktur i sundhed og omsorg</a></li>
              <li><a href="https://skm.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skatteministeriet – Fradrag og kommuneskat (skm.dk)</a></li>
            </ul>
            
            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: april 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ElevloenSOSUPage; 