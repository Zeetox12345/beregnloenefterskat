import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const RejseguideLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 32000, netMin: 20800, netMax: 21300 },
    "Aarhus": { grossSalary: 27000, netMin: 17700, netMax: 18200 },
    "Odense": { grossSalary: 24000, netMin: 15800, netMax: 16300 },
    "Aalborg": { grossSalary: 23000, netMin: 15200, netMax: 15700 },
    "Esbjerg": { grossSalary: 22000, netMin: 14500, netMax: 15000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Ny guide / trainee", grossSalary: 20000, netMin: 13200, netMax: 13600 },
    { type: "Guide 2–4 år", grossSalary: 24000, netMin: 15800, netMax: 16300 },
    { type: "Senior turistfører", grossSalary: 27000, netMin: 17700, netMax: 18200 },
    { type: "Højsæson m. bonus", grossSalary: 32000, netMin: 20800, netMax: 21300 }
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
        title="Rejseguide Løn Efter Skat 2025 – Se Din Nettoløn Her"
        description="Hvad tjener en rejseguide efter skat i 2025? Se realistiske lønintervaller før og efter skat, og brug lønberegneren til at finde din præcise nettoløn."
        keywords="rejseguide løn efter skat 2025, turistfører nettoløn, guide indkomst, rejsebranche løn"
      />
      <Header />
      <PageTitle title="Rejseguide Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Rejseguide Løn Efter Skat 2025 – Fra Rundvisning til Rådighedsbeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids rejseguide (tour guide/turistfører) kan i 2025 forvente en løn før skat på cirka 20.000 – 32.000 kr. pr. måned, afhængigt af destination, erfaring, sæson-bonus og drikkepenge. Det giver en Rejseguide løn efter skat på omtrent 13.000 – 21.000 kr. Få et præcist estimat med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – det tager under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en rejseguide løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det betyder noget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><strong>Grundløn / overenskomst</strong></td>
                    <td className="py-3 px-4 border-b">Turistførerforeningens aftale 2025 giver 134–142 kr./t (≈ 22.000–23.000 kr./md.) før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><strong>Geografi</strong></td>
                    <td className="py-3 px-4 border-b">København betaler ca. 7 % over landsgennemsnit – 278.636 kr./år (≈ 23.200 kr./md.).</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><strong>Erfaring & certifikat</strong></td>
                    <td className="py-3 px-4 border-b">Dansk- eller engelsksproget guide m. kulturhistorisk licens kan få +1.000–2.000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><strong>Sæson & drikkepenge</strong></td>
                    <td className="py-3 px-4 border-b">Sommer-højsæson kan tilføje 10–20 % i bonus; drikkepenge er A-indkomst og beskattes.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><strong>Arbejdstid</strong></td>
                    <td className="py-3 px-4 border-b">Aften-/weekendtillæg (18–45 %) for transfer- og udflugtsvagter.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b"><strong>Pension 8–10 %</strong></td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag indbetales før skat; vises ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løntabel – Rejseguide Løn Før & Efter Skat 2025*</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat**</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr 
                      key={exp.type} 
                      className="hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">{exp.type}</td>
                      <td className="py-3 px-4 border-b">{exp.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-3 px-4 border-b">
                        {exp.netMin.toLocaleString("da-DK")} – {exp.netMax.toLocaleString("da-DK")} kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              * 160,33 t fuldtid; bonus/drikkepenge indregnet som måneds­gennemsnit.<br />
              ** Nettotal beregnet med 8 % AM-bidrag, personfradrag 4.650 kr. og gennemsnitlig trækprocent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior turistfører (27.000 kr. før skat)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-1 font-medium">Løn før skat</td>
                    <td className="py-1 text-right">27.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">AM-bidrag 8 %</td>
                    <td className="py-1 text-right">2.160 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">Skattepligtig indkomst</td>
                    <td className="py-1 text-right">24.840 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">Personfradrag</td>
                    <td className="py-1 text-right">4.650 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">Beskatningsgrundlag</td>
                    <td className="py-1 text-right">20.190 kr.</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium">A-skat (≈ 35 %)</td>
                    <td className="py-1 text-right">7.070 kr.</td>
                  </tr>
                  <tr className="border-t-2">
                    <td className="py-1 font-bold">Rejseguide løn efter skat</td>
                    <td className="py-1 text-right font-bold">≈ 18.000 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>
              Tjek din egen løn – indtast bruttobeløbet i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til højere nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Saml højsæson-vagter</strong> – krydstogt- og gruppe­transfer giver 18–45 % tillæg.</li>
              <li><strong>Få sprog­certifikater</strong> – tysk, fransk eller kinesisk udløser +1–2 k kr./md. før skat.</li>
              <li><strong>Bliv destinations­leder</strong> – koordinations­ansvar løfter basislønnen 3–4 k kr./md.</li>
              <li><strong>Optimer drikkepenge</strong> – cashless tips app'er øger beløbet og indberettes automatisk som indkomst.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Rejseguide Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nybegynder efter skat?</p>
                <p>Ca. 13.500 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 20.000 kr. efter skat?</p>
                <p>Højsæson­bonus + større gruppeture eller destinationslederrolle.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller drikkepenge i nettoløn?</p>
                <p>Ja, de beskattes som almindelig løn i Danmark.</p>
              </div>
              <div>
                <p className="font-semibold">Er pension med i nettoløn?</p>
                <p>Nej – 8–10 % arbejdsgiver­pension indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger Rejseguide løn efter skat typisk mellem 13.000 og 21.000 kr. pr. måned – svarende til 20.000 – 32.000 kr. før skat. Sæson­tillæg, sprog­kompetencer og drikkepenge er de vigtigste faktorer, hvis du vil hæve nettobeløbet. Få dit eksakte tal på under ét minut i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://www.salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Tour Guide, Danmark: 261–292 k kr./år (≈ 22–24 k kr./md.)</a></li>
              <li><a href="https://www.salaryexpert.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Tour Guide, København: 278.636 kr./år (≈ 23,2 k kr./md.)</a></li>
              <li><a href="https://guides.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Guides.dk – Lønaftale 2024–25 (134–142 kr./t)</a></li>
              <li><a href="https://www.studentum.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Løn & udsigt for turistfører</a></li>
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

export default RejseguideLoenPage; 