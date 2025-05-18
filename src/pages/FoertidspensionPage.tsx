import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FoertidspensionPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Førtidspension Efter Skat 2025 – Realistiske Tal og Beregning"
        description="Hvad er førtidspension efter skat i 2025? Se satser for enlige og gifte, beregningseksempler og indtægtsgrænser – og beregn dit eget nettobeløb."
        keywords="førtidspension efter skat, førtidspension 2025, førtidspension nettobeløb, førtidspension beregning, førtidspension ny ordning, førtidspension gammel ordning"
      />
      <Header />
      <PageTitle title="Førtidspension Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Førtidspension Efter Skat 2025 – Få styr på nettobeløbet, indtægts­grænserne og de vigtigste fradrag</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – I 2025 udgør førtidspension før skat (ny ordning – tilkendt efter 2003): Enlig: 21.103 kr. (ca. 13.800 – 14.200 kr. efter skat) og Gift/samlevende: 17.938 kr. (ca. 11.900 – 12.300 kr. efter skat). Get a quick estimate with <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor varierer førtidspension efter skat?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Faktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvad betyder det for dig?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Skattepligt</td>
                    <td className="py-3 px-4 border-b">Hele ydelsen er almindelig A-indkomst – der betales både AM-bidrag og indkomstskat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Kommuneskat</td>
                    <td className="py-3 px-4 border-b">Spændet på 0,8 pct.point mellem billigste og dyreste kommune koster/opvejer ± ≈ 650 kr. netto pr. måned.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Andre indtægter</td>
                    <td className="py-3 px-4 border-b">Tjener du mere end 90.000 kr. (enlig) / 143.000 kr. (par) årligt før skat, reduceres pensionen med 30 % af overskuddet.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Ægtefælles indkomst</td>
                    <td className="py-3 px-4 border-b">Siden 2023 tæller ægtefællens arbejdsindkomst ikke længere med, men kapital- og pensions­indkomster gør.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Gammel vs. ny ordning</td>
                    <td className="py-3 px-4 border-b">Pension tilkendt før 2003 følger helt andre satser og tillæg – se tabellen nedenfor.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Satser 2025 – ny ordning (tilkendt efter 1. jan. 2003)</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Status</th>
                    <th className="py-3 px-4 border-b text-left">Måned før skat</th>
                    <th className="py-3 px-4 border-b text-left">År før skat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Enlig</td>
                    <td className="py-3 px-4 border-b">21.103 kr.</td>
                    <td className="py-3 px-4 border-b">253.236 kr.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Gift/samlevende</td>
                    <td className="py-3 px-4 border-b">17.938 kr.</td>
                    <td className="py-3 px-4 border-b">215.256 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Satser 2025 – gammel ordning (tilkendt før 1. jan. 2003)</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Ydelsestype</th>
                    <th className="py-3 px-4 border-b text-left">Enlig (før skat)</th>
                    <th className="py-3 px-4 border-b text-left">Gift/saml. (før skat)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Almindelig førtidspension</td>
                    <td className="py-3 px-4 border-b">18.007 kr.</td>
                    <td className="py-3 px-4 border-b">14.217 kr.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Forhøjet alm. førtidspension</td>
                    <td className="py-3 px-4 border-b">18.956 kr.</td>
                    <td className="py-3 px-4 border-b">14.217 kr.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mellemste førtidspension</td>
                    <td className="py-3 px-4 border-b">18.007 kr.</td>
                    <td className="py-3 px-4 border-b">14.217 kr.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Højeste førtidspension</td>
                    <td className="py-3 px-4 border-b">22.746 kr.</td>
                    <td className="py-3 px-4 border-b">18.956 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic mt-2">
              Bemærk: De fleste skattefri tillæg (førtids-, invaliditets- og tillægsydelse) gælder kun gammel ordning og bortfalder ved folkepensions­alderen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – enlig ny førtidspensionist</h2>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Førtidspension før skat:</strong> 21.103 kr.</p>
                  <p><strong>AM-bidrag 8 %:</strong> 1.688 kr.</p>
                  <p><strong>Skattepligtig indkomst:</strong> 19.415 kr.</p>
                </div>
                <div>
                  <p><strong>Personfradrag:</strong> 4.650 kr.</p>
                  <p><strong>Beskatningsgrundlag:</strong> 14.765 kr.</p>
                  <p><strong>A-skat (~ 37 %):</strong> 5.460 kr.</p>
                  <p><strong>Førtidspension efter skat:</strong> ≈ 13.950 kr.</p>
                </div>
              </div>

            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hurtige måder at forbedre din økonomi</h2>
            <div className="space-y-4 my-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</div>
                <div>
                  <p className="font-medium">Udnyt fribeløb for arbejde</p>
                  <p>Du kan tjene op til 90.000 kr. om året (enlig) uden nedslag i pensionen.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</div>
                <div>
                  <p className="font-medium">Søg boligsikring eller boligydelse</p>
                  <p>Skattefri tilskud, der ikke nedsætter førtidspensionen.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</div>
                <div>
                  <p className="font-medium">Tjek fradrag</p>
                  <p>Befordrings-, håndværker- eller service­fradrag kan løfte din nettoløn.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">4</div>
                <div>
                  <p className="font-medium">Overvej lav-skat kommune</p>
                  <p>Flytning kan øge førtidspension efter skat med op mod 650 kr. pr. måned.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Førtidspension Efter Skat</h2>
            <div className="space-y-6 my-6">
              <div>
                <h3 className="text-lg font-medium">Er førtidspension skattefri?</h3>
                <p>Nej – hele ydelsen er fuldt skattepligtig.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Hvornår påvirker anden indkomst min pension?</h3>
                <p>Når den årlige personlige indkomst overstiger 90.000 kr. (enlig) eller 143.000 kr. (par) før skat.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Falder pensionen, hvis min partner arbejder?</h3>
                <p>Fra 2023 indgår lønindtægt ikke, men kapital- og pensions­indkomster gør.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Kan jeg miste pensionen?</h3>
                <p>Ja, ved indtægter over ca. 860.600 kr. om året før skat bortfalder pensionen helt.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger førtidspension efter skat som hovedregel mellem ca. 12.000 og 14.000 kr. pr. måned for den nye ordning – og lidt lavere eller højere under den gamle, afhængigt af sats og tillæg. Kommuneskat, arbejds­indkomst og personlige fradrag kan trække beløbet op eller ned. Udfyld dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad der reelt lander på kontoen hver måned.
            </p>

            <p className="text-sm text-gray-600 italic mt-8">
              <small>Kilder: Ældre Sagen – satser 2025 · Borger.dk – indtægts­grænser 2025 · STAR – førtidspension er fuldt skattepligtig · Satser for gammel ordning · Opdateret: maj 2025.</small>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FoertidspensionPage; 