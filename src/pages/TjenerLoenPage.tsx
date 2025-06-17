import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const TjenerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 33000, netMin: 22300, netMax: 22800 },
    "Aarhus": { grossSalary: 32000, netMin: 21600, netMax: 22100 },
    "Odense": { grossSalary: 29000, netMin: 19500, netMax: 20000 },
    "Aalborg": { grossSalary: 28500, netMin: 19200, netMax: 19700 },
    "Esbjerg": { grossSalary: 27000, netMin: 18200, netMax: 18700 },
    "Randers": { grossSalary: 26000, netMin: 17500, netMax: 18000 },
    "Kolding": { grossSalary: 26500, netMin: 17800, netMax: 18300 },
    "Horsens": { grossSalary: 25500, netMin: 17200, netMax: 17700 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Cafétjener dagvagt", grossSalary: 24000, netMin: 16000, netMax: 16400 },
    { type: "Aften-tjener m. tips", grossSalary: 28000, netMin: 18800, netMax: 19200 },
    { type: "Hotel-restaurant (weekend)", grossSalary: 33000, netMin: 22300, netMax: 22800 },
    { type: "Fine-dining, Kbh. + store tips", grossSalary: 38000, netMin: 24700, netMax: 25200 }
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
        title="Tjener Løn Efter Skat 2025 – Hvad Får Du Udbetalt med Tips?"
        description="En tjener tjener typisk 24.000–38.000 kr. før skat i 2025. Se hvad det svarer til i nettoløn med og uden drikkepenge. Brug beregn løn efter skat og få realistiske estimater – hurtigt og gratis."
        keywords="tjener løn efter skat, tjener løn 2025, drikkepenge skat, restaurant løn, server løn danmark"
      />
      <Header />
      <PageTitle title="Tjener Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Tjener Løn Efter Skat 2025 – Drikkepenge, Tillæg og Dit Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids tjener (160 t/måned) kan i 2025 forvente en løn før skat på 24 000 – 38 000 kr. pr. måned, hvor drikkepenge typisk udgør 10 – 25 %. Det giver en tjener løn efter skat på ca. 16 000 – 25 000 kr. Beregn dit præcise nettobeløb på ét minut i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – prøv også at tilføje dine egne drikkepenge i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se forskellen med det samme.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker tjener løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Lønfaktor</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Hvorfor det rykker nettolønnen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Grundtimeløn</td>
                    <td className="px-4 py-3">HORESTA/3F-mindstesats 2025 ≈ 145 kr./t (= ~24 000 kr./md.).</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Drikkepenge</td>
                    <td className="px-4 py-3">Kort-tips rapporteres som A-indkomst; kontant-tips skal også beskattes – i praksis 2 000 – 6 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Tillæg</td>
                    <td className="px-4 py-3">Aften + 18 %, nat + 30 %, weekend + 45 % lægges direkte oven i timelønnen.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Restauranttype</td>
                    <td className="px-4 py-3">Michelin & hotel fine-dining → højere tips og ofte 5 – 10 kr./t ekstra i basisløn.</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Geografi</td>
                    <td className="px-4 py-3">København/Aarhus betaler ca. 7 % mere end landsgennemsnittet; mindre byer 5 % mindre.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Pension 9 – 11 %</td>
                    <td className="px-4 py-3">Indbetales før skat og vises ikke i nettolønnen, men øger den samlede pakke.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk Tjener Løn – Før & Efter Skat i 2025</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">By</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Løn før skat</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((example, index) => (
                    <tr 
                      key={example.city}
                      className={`border-b hover:bg-gray-50 cursor-pointer ${
                        selectedCity === example.city ? 'bg-blue-50 border-blue-200' : ''
                      }`}
                      onClick={() => setSelectedCity(example.city)}
                    >
                      <td className="px-4 py-3 font-medium">{example.city}</td>
                      <td className="px-4 py-3">{example.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-3">{example.netMin.toLocaleString('da-DK')} – {example.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Tjener 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Profil</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Løn før skat</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((level, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{level.type}</td>
                      <td className="px-4 py-3">{level.grossSalary.toLocaleString('da-DK')} kr.</td>
                      <td className="px-4 py-3">{level.netMin.toLocaleString('da-DK')} – {level.netMax.toLocaleString('da-DK')} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              * Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %. Tilpas selv i beregneren, hvis din kommuneskat er lavere/højere.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Hotel-tjener med weekendtillæg</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Post</td>
                      <td className="py-2 text-right font-medium">Beløb</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Løn før skat</td>
                      <td className="py-2 text-right">33 000 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">AM-bidrag 8 %</td>
                      <td className="py-2 text-right">2 640 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Skattepligtig indkomst</td>
                      <td className="py-2 text-right">30 360 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Personfradrag</td>
                      <td className="py-2 text-right">4 650 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Beskatningsgrundlag</td>
                      <td className="py-2 text-right">25 710 kr.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">A-skat (≈ 37 %)</td>
                      <td className="py-2 text-right">9 510 kr.</td>
                    </tr>
                    <tr className="font-bold">
                      <td className="py-2">Tjener løn efter skat</td>
                      <td className="py-2 text-right">≈ 22 200 kr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="my-4">
              Vil du teste højere drikkepenge eller flere weekendvagter? Smid tallene ind i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire genveje til højere nettoløn</h2>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Arbejd prime-time</h3>
                <p className="text-sm">Fredag/lørdag aften giver både genetillæg og flere tips.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Specialiser dig</h3>
                <p className="text-sm">Vinkursus (WSET) eller barista-certifikat hæver timelønnen 3 – 5 kr.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Del kort-tips ligeligt</h3>
                <p className="text-sm">Sikre, at alt registreres, så ingen tips "forsvinder" før lønnen.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Vælg restaurant med høj kuvertpris</h3>
                <p className="text-sm">Større regninger = større procentvise tips.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Tjener Løn Efter Skat</h2>
            
            <div className="space-y-4 my-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Hvor meget tjener en ny tjener efter skat?</h3>
                <p>Ca. 16 000 kr./md.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">Kan jeg nå 25 000 kr. efter skat?</h3>
                <p>Ja – fine-dining i storby + aften/weekendtillæg og gode tips.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold">Er drikkepenge skattepligtige?</h3>
                <p>Ja, både kontant og kort-tips skal indberettes og beskattes.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold">Indgår pension i nettoløn?</h3>
                <p>Nej, 9 – 11 % pension indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p className="my-4">
              I 2025 ligger tjener løn efter skat typisk mellem 16 000 og 25 000 kr. pr. måned – baseret på 24 000 – 38 000 kr. før skat. Drikkepenge, genetillæg og restauranttype er de hurtigste veje til mere i hånden. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad din service omsætter til på kontoen, når sidste bord er ryddet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>HORESTA & 3F – Overenskomst 2024-26 (timeløn + genetillæg)</li>
              <li>SalaryExpert – Waiter/Waitress, Denmark & Copenhagen, 2025</li>
              <li>Indkomsten.dk – Tjener gennemsnitsløn, maj 2025</li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: juni 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TjenerLoenPage; 