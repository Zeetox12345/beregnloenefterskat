import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const UngarbejderLoenPage = () => {
  const [selectedAge, setSelectedAge] = useState("17 år");
  
  // Age-specific salary data
  const ageData = {
    "15 år": { grossSalary: 62, netMin: 57, netMax: 62, monthlySalary: 3720, netMonthlySalary: 3420 },
    "16 år": { grossSalary: 81, netMin: 74, netMax: 81, monthlySalary: 4860, netMonthlySalary: 4475 },
    "17 år": { grossSalary: 94, netMin: 86, netMax: 94, monthlySalary: 5640, netMonthlySalary: 5190 },
  };

  // Industry-based salary data
  const industryData = [
    { type: "Detail", grossSalary: 78.75, netMin: 72, netMax: 78.75 },
    { type: "Fastfood/Restaurant", grossSalary: 77.55, netMin: 71, netMax: 77.55 },
    { type: "Lager/Byggemarked", grossSalary: 80, netMin: 73, netMax: 80 },
  ];

  const ageExamples = useMemo(() => {
    return Object.entries(ageData).map(([age, data]) => {
      return {
        age,
        grossSalary: data.grossSalary,
        monthlySalary: data.monthlySalary,
        netMonthlySalary: data.netMonthlySalary
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="Ungarbejder Løn Efter Skat 2025 – Se Realistiske Timelønninger"
        description="Hvad tjener en ungarbejder efter skat i 2025? Se timeløn før og efter skat for 15-17-årige og beregn din egen nettoløn hurtigt og nemt."
        keywords="ungarbejder løn, ungarbejder løn efter skat, timeløn unge, fritidsjob løn, løn 15 år, løn 16 år, løn 17 år"
      />
      <Header />
      <PageTitle title="Ungarbejder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Ungarbejder Løn Efter Skat 2025 – hvad der står tilbage, når stregkoden er scannet</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En ungarbejder (under 18 år) kan i 2025 forvente en timeløn før skat på cirka 62 – 94 kr. afhængigt af alder, branche og overenskomst.
              </p>
            </div>

            <p>
              En ungarbejder (under 18 år) kan i 2025 forvente en timeløn før skat på cirka 62 – 94 kr. afhængigt af alder, branche og overenskomst. Det betyder en ungarbejder løn efter skat på:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Alder</th>
                    <th className="py-2 px-4 border-b text-left">Typisk timeløn før skat*</th>
                    <th className="py-2 px-4 border-b text-left">Månedsløn (60 t) før skat</th>
                    <th className="py-2 px-4 border-b text-left">Efter skat (≈ AM-bidrag 8 % – ingen A-skat)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">15 år</td>
                    <td className="py-2 px-4 border-b">62 kr.</td>
                    <td className="py-2 px-4 border-b">3 720 kr.</td>
                    <td className="py-2 px-4 border-b">≈ 3 420 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">16 år</td>
                    <td className="py-2 px-4 border-b">81 kr.</td>
                    <td className="py-2 px-4 border-b">4 860 kr.</td>
                    <td className="py-2 px-4 border-b">≈ 4 475 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">17 år</td>
                    <td className="py-2 px-4 border-b">94 kr.</td>
                    <td className="py-2 px-4 border-b">5 640 kr.</td>
                    <td className="py-2 px-4 border-b">≈ 5 190 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              *Satser pr. 1. maj 2025: detail/restaurant overenskomster
            </p>

            <p>
              Da lønnen ligger under det månedlige personfradrag (4 650 kr.), betaler de fleste ungarbejdere ingen A-skat; kun arbejdsmarkedsbidraget på 8 % trækkes. Tjek dit tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker ungarbejder løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Faktor</th>
                    <th className="py-2 px-4 border-b text-left">Hvorfor det spiller ind</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Alder</td>
                    <td className="py-2 px-4 border-b">Overenskomster giver højere sats ved 16 og 17 år: fx 81,25 kr. for 16-årige og 93,75 kr. for 17-årige på butiksområdet.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Branche & overenskomst</td>
                    <td className="py-2 px-4 border-b">Fastfood/restauration: 77,55 kr. pr. time; detail: 78,75 kr. pr. time; lager/byggemarked varierer 70-90 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Særlige tidspunkter</td>
                    <td className="py-2 px-4 border-b">Aften-, lørdags- og søndagstillæg kan lægge 17-34 kr./t oven i basislønnen.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Timer pr. uge</td>
                    <td className="py-2 px-4 border-b">Indkomst under 4 650 kr./md. udløser normalt 0 kr. i A-skat – kun AM-bidrag.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Fradrag & feriepenge</td>
                    <td className="py-2 px-4 border-b">Ungarbejdere optjener 12,5 % feriepenge – de udbetales senere og beskattes ved udbetalingen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eksempel – 17-årig i supermarked med weekendtillæg</h2>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <p><strong>Timer pr. måned:</strong> 60 (15 t/uge)</p>
              <p><strong>Basis­timeløn før skat:</strong> 93,75 kr.</p>
              <p><strong>Weekend­tillæg (10 timer x 34,09 kr.):</strong> +340,90 kr.</p>
              <p><strong>Løn før skat:</strong> 5 640 kr. + 340,90 kr. = 5 981 kr.</p>
              <p><strong>AM-bidrag 8 %:</strong> –479 kr.</p>
              <p><strong>Skattepligtig indkomst:</strong> 5 502 kr.</p>
              <p><strong>Personfradrag:</strong> –4 650 kr.</p>
              <p><strong>Beskatningsgrundlag:</strong> 852 kr.</p>
              <p><strong>A-skat (≈ 37 % af 852 kr.):</strong> –315 kr.</p>
              <p><strong>Ungarbejder løn efter skat:</strong> ≈ 5 187 kr.</p>
            </div>


            <h2 className="text-2xl font-semibold mt-8 mb-4">Sådan hæver du din løn som ungarbejder</h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Tag sen- og weekendvagter – tillæg kan løfte nettolønnen 300-600 kr. hver måned.</li>
              <li>Skift branche – fastfood og detail ligger højest i 2025-satserne.</li>
              <li>Bliv oplært i flere opgaver (kasse, bake-off, varemodtagelse) – butikkens lokale tillæg gives ofte til fleksible unge.</li>
              <li>Hold øje med overenskomststigninger – pr. 1. marts 2025 stiger mindstelønnene typisk 1-2 kr./t.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Ungarbejder Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Spørgsmål</th>
                    <th className="py-2 px-4 border-b text-left">Svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Skal jeg betale skat som ungarbejder?</td>
                    <td className="py-2 px-4 border-b">Du betaler 8 % AM-bidrag på hele lønnen. A-skat betaler du kun, hvis din måneds­løn overstiger 4 650 kr. (personfradrag).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Får jeg feriepenge?</td>
                    <td className="py-2 px-4 border-b">Ja, 12,5 % af din løn opspares og beskattes, når de udbetales.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Hvordan får jeg mere i løn?</td>
                    <td className="py-2 px-4 border-b">Flere timer, weekendtillæg eller branche med højere minimumssats øger beløbet.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>
              I 2025 ligger ungarbejder løn efter skat typisk mellem 3 400 og 5 500 kr. pr. måned for 15-17-årige med 60 t arbejde. Satserne stiger med alderen og ved vagter på skæve tidspunkter. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline">beregn løn efter skat</a> og se præcis, hvad din næste fritidsjob-vagt giver på kontoen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Legaldesk.dk – Mindsteløn under 18 år, satser pr. 1. marts 2025 <a href="https://www.legaldesk.dk/erhverv/ansaettelseskontrakt/mindsteloen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">legaldesk.dk</a></li>
              <li>Jobpatruljen.dk – Fastfood/restauration ungløn 77,55 kr./t, tillæg 17 – 34 kr. (maj 2025) <a href="https://www.jobpatruljen.dk/lonsatser/fastfood-cafeteria-bistro/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobpatruljen</a></li>
              <li>Jobpatruljen.dk – Butiksløn unge under 18 år 78,75 kr./t (maj 2025) <a href="https://www.jobpatruljen.dk/lonsatser/butik/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobpatruljen</a></li>
              <li>Ungarbejde.dk – Mindsteløn 15-17-årige 57,50-91,00 kr./t (marts 2025) <a href="https://www.ungarbejde.dk/mindsteloen" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ungarbejde.dk</a></li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: Maj 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UngarbejderLoenPage; 