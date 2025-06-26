import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const SkolelederLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 67500, netMin: 43500, netMax: 43500 },
    "Aarhus": { grossSalary: 63500, netMin: 40500, netMax: 40500 },
    "Odense": { grossSalary: 60000, netMin: 38500, netMax: 38500 },
    "Aalborg": { grossSalary: 58500, netMin: 37000, netMax: 37000 },
    "Esbjerg": { grossSalary: 57000, netMin: 36000, netMax: 36000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Afdelingsleder (lille skole)", grossSalary: 45000, netMin: 28000, netMax: 29000 },
    { type: "Skoleleder mellemstor skole", grossSalary: 55000, netMin: 33000, netMax: 34000 },
    { type: "Øverste leder, stor folkeskole", grossSalary: 65000, netMin: 40000, netMax: 41000 },
    { type: "Chefskoleleder / privatskole, Kbh.", grossSalary: 85000, netMin: 51000, netMax: 52000 }
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
        title="Skoleleder Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en skoleleder løn efter skat i 2025? Typisk 28 000 – 52 000 kr. udbetalt – før skat 45 000 – 85 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="skoleleder løn, skoleleder løn efter skat, skoleleder løn 2025, skoleleder løn før skat, skoleleder nettoløn"
      />
      <Header />
      <PageTitle title="Skoleleder Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Skoleleder Løn Efter Skat 2025 – Fra Ledelsesrum til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids skoleleder (37 t/uge) får i 2025 typisk 45 000 – 85 000 kr. før skat – spændet dækker fra mindre mellemledere til øverste ledere på store folkeskoler eller privatskoler. Det giver en skoleleder løn efter skat på cirka 28 000 – 52 000 kr. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se dit præcise nettobeløb.
              </p>
            </div>

            <p>Som skoleleder står du i spidsen for en af samfundets vigtigste institutioner – men hvad betyder dit ledelsesansvar rent økonomisk? I 2025 varierer skoleleder løn efter skat betydeligt, alt efter skolestørrelse, geografisk placering og dit erfaringsniveau.</p>

            <p>En nyudnævnt afdelingsleder på en mindre skole kan forvente omkring 28 000 kr. efter skat, mens en erfaren chefskoleleder i hovedstadsområdet eller på en større privatskole kan nå op på 52 000 kr. netto månedligt.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker skoleleder løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Lønfaktor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Betydning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Overenskomst & grundløn</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Lønspænd ca. 48 000 – 80 000 kr./md. for øverste skoleledere; 42 000 – 57 000 kr./md. for øvrige ledere</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Erfaring & skole­størrelse</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Elevtal, antal ansatte og budgetansvar kan løfte lønnen 5 – 10 % pr. niveau</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Resultat- og kvalifikations­tillæg</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Personlige tillæg efter mål­opfyldelse eller særlige kompetencer på 2 000 – 6 000 kr./md.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Geografi</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Storkøbenhavn betaler ca. 7 % over landsgennemsnittet</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pension 17 – 18 %</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Indbetales før skat – tæller ikke i "løn efter skat", men øger totalpakken</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Skoleleder</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Stilling / erfaring</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Løn før skat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">≈ Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {experienceData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.netMin.toLocaleString()} – {item.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">* Nettotal beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og trækprocent 37 %.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">By</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Typisk løn før skat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">≈ Løn efter skat**</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Kommuneskat 2025</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">København</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50 000 – 85 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32 000 – 55 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23,5 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aarhus</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">47 000 – 80 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30 000 – 51 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24,52 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Odense</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 000 – 75 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">29 000 – 48 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25,50 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aalborg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 000 – 72 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28 000 – 46 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25,60 %</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Esbjerg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">44 000 – 70 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">27 000 – 45 000 kr.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">26,10 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">** Nettobeløbene er beregnet efter samme metode som ovenfor; kun kommunesatsen varierer.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Skoleleder på mellemstor skole (Aarhus)</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm">
                  <strong>Post</strong>
                </div>
                <div className="text-sm">
                  <strong>Beløb</strong>
                </div>
                <div className="text-sm">Løn før skat</div>
                <div className="text-sm">55 000 kr.</div>
                <div className="text-sm">AM-bidrag 8 %</div>
                <div className="text-sm">4 400 kr.</div>
                <div className="text-sm">Skattepligtig indkomst</div>
                <div className="text-sm">50 600 kr.</div>
                <div className="text-sm">Personfradrag</div>
                <div className="text-sm">4 650 kr.</div>
                <div className="text-sm">Beskatningsgrundlag</div>
                <div className="text-sm">45 950 kr.</div>
                <div className="text-sm">A-skat (≈ 37 %)</div>
                <div className="text-sm">17 000 kr.</div>
                <div className="text-sm font-bold">Skoleleder løn efter skat</div>
                <div className="text-sm font-bold">≈ 33 600 kr.</div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800">Forhandl resultat­løn</h3>
                <p className="text-sm text-green-700">Mål for elev­trivsel eller økonomi kan give 3 – 6 % ekstra pr. år.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800">Tag større skole eller fler-skole ansvar</h3>
                <p className="text-sm text-blue-700">Flere elever = højere grundlønstrin.</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800">Søg storby eller privatskole</h3>
                <p className="text-sm text-purple-700">Især i Storkøbenhavn ligger lønnen 5 – 10 % over gennemsnittet.</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800">Lav-skat kommune</h3>
                <p className="text-sm text-orange-700">Et spring fra 26,3 % til 23,5 % sparer over 1 000 kr. netto pr. måned.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Skoleleder Løn Efter Skat</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Hvad tjener en ny skoleleder efter skat?</h3>
                <p className="text-sm text-gray-600">Omkring 28 000 kr./md.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Kan jeg nå 50 000 kr. netto?</h3>
                <p className="text-sm text-gray-600">Ja – som chefskoleleder i storby eller privatskole med høje tillæg.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Beskattes resultatløn og tillæg?</h3>
                <p className="text-sm text-gray-600">Ja, som almindelig A-indkomst.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Indgår pension i nettolønnen?</h3>
                <p className="text-sm text-gray-600">Nej – pensionen (ca. 17 %) indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>I 2025 ligger skoleleder løn efter skat typisk mellem 28 000 og 52 000 kr. pr. måned, svarende til 45 000 – 85 000 kr. før skat. Skolestørrelse, resultat­tillæg og kommune­sats er de vigtigste faktorer for nettobeløbet. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvad der reelt tikker ind, når sidste skole­budget er lukket.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Skolelederforeningen – Lønspænd 48 000 – 80 000 kr./md. for øverste ledere (maj 2025) - <a href="https://skolelederforeningen.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">skolelederforeningen.org</a></li>
              <li>Paylab.com – 80 % af skoleledere ligger 30 386 – 85 505 kr./md. brutto (2025) - <a href="https://paylab.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">paylab.com</a></li>
              <li>SalaryExpert – Gennemsnitlig skolelederløn 662 565 kr./år ≈ 55 000 kr./md. (opd. 26-06-2025) - <a href="https://salaryexpert.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salaryexpert.com</a></li>
              <li>Skatteministeriet – Kommuneskat: laveste 23,4 %, højeste 26,3 % (Top-20-liste 2025) - <a href="https://skm.dk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">skm.dk</a></li>
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

export default SkolelederLoenPage; 