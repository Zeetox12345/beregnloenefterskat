import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const FitnessinstruktørLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 30000, netMin: 20000, netMax: 20500 },
    "Aarhus": { grossSalary: 28000, netMin: 18700, netMax: 19100 },
    "Odense": { grossSalary: 26500, netMin: 17800, netMax: 18200 },
    "Aalborg": { grossSalary: 26000, netMin: 17500, netMax: 17900 },
    "Esbjerg": { grossSalary: 25000, netMin: 16900, netMax: 17300 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior (0–2 år)", grossSalary: 24000, netMin: 16000, netMax: 16400 },
    { type: "Instruktør 3–5 år", grossSalary: 28000, netMin: 18700, netMax: 19100 },
    { type: "Senior / Studio Lead", grossSalary: 32000, netMin: 21300, netMax: 21800 },
    { type: "København top-PT (med bonus)", grossSalary: 36000, netMin: 24000, netMax: 24500 }
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
        title="Fitnessinstruktør Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="Hvad tjener en fitnessinstruktør efter skat i 2025? Se realistiske eksempler før og efter skat, og brug en professionel lønberegner til at finde din nettoløn."
        keywords="fitnessinstruktør løn efter skat, fitness instruktør nettoløn, personal trainer løn, træner indkomst"
      />
      <Header />
      <PageTitle title="Fitnessinstruktør Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Fitnessinstruktør Løn Efter Skat 2025 – Fra Repetition til Resultat</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids fitnessinstruktør kan i 2025 forvente en løn før skat på ca. 24 000 – 36 000 kr. pr. måned, afhængigt af erfaring, geografi og holdbonus. Det giver en fitnessinstruktør løn efter skat på omtrent 16 000 – 24 000 kr. Få et præcist tal på under ét minut med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvorfor svinger en fitnessinstruktør løn efter skat?</h2>
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
                    <td className="py-3 px-4 border-b font-medium">Timeløn / overenskomst</td>
                    <td className="py-3 px-4 border-b">Branchesats 150–180 kr./t giver 24 000–29 000 kr./md. før skat ved 160 t.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Geografi</td>
                    <td className="py-3 px-4 border-b">København betaler ~7 % højere end landsgennemsnit (353 700 kr./år ≈ 29 400 kr./md.).</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Erfaring & certifikat</td>
                    <td className="py-3 px-4 border-b">International PT-licens, TRX™ eller Les Mills™ kan udløse +1 000–2 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Holdbonus & PT-provision</td>
                    <td className="py-3 px-4 border-b">Populære bootcamps giver 5–10 % ekstra i måneden – beskattes som almindelig løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Ansættelsesform</td>
                    <td className="py-3 px-4 border-b">Selvstændige PT'er kan fakturere 400–1 000 kr./t, men uden pensionsbidrag og garanterede timer.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">Pension 10 – 12 %</td>
                    <td className="py-3 px-4 border-b">Indbetales før skat; løfter totalpakken, men ses ikke i nettolønnen.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fitnessinstruktør løn efter skat – byoversigt 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">By / Region</th>
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
              * Beregnet med 8 % AM-bidrag, 4 650 kr. personfradrag og gennemsnitlig skatteprocent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd – Fitnessinstruktør 2025</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Profil / Erfaring</th>
                    <th className="py-3 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-3 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp) => (
                    <tr 
                      key={exp.type} 
                      className="hover:bg-gray-50"
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
              * Beregnet med 8 % AM-bidrag, 4 650 kr. personfradrag og gennemsnitlig skatteprocent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior instruktør, 32 000 kr. før skat</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 32 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 2 560 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 29 440 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 24 790 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 9 170 kr.</li>
                <li><strong>Fitnessinstruktør løn efter skat ≈</strong> 21 000 kr.</li>
              </ul>
            </div>
            <p>
              Vil du se, hvad et ekstra hold eller lavere kommuneskat betyder? Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire hacks til højere nettoløn</h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>Saml high-capacity hold</strong> – HIIT- eller cycling-timer med bonus pr. deltager booster bruttolønnen.</li>
              <li><strong>Certificér dig i populære formater</strong> – f.eks. Les Mills™ eller Reformer-Pilates.</li>
              <li><strong>Tilbyd pakke-PT</strong> – 10-klip med 15 % discount øger timeudnyttelsen og provisionen.</li>
              <li><strong>Vælg storby-centre</strong> – flere medlemmer → højere grundløn og fyldte hold.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Fitnessinstruktør Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny instruktør efter skat?</p>
                <p>~16 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 25 000 kr. efter skat?</p>
                <p>Ja, i København med fuld kalender + PT-provision.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller holdbonus i nettoløn?</p>
                <p>Ja, den beskattes som normal løn.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension?</p>
                <p>Nej, pensionsbidrag vises ikke i nettobeløbet.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger Fitnessinstruktør løn efter skat typisk mellem 16 000 og 24 000 kr. pr. måned – baseret på 24 000 – 36 000 kr. før skat. Certifikater, storbyløn og bonussystemer er de hurtigste veje til et højere nettobeløb. Tjek dit personlige tal med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – og se, hvor meget der lander på kontoen, når det sidste repsæt er kørt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://studentum.dk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studentum.dk – Fitnessinstruktør gennemsnitsløn 34 394 kr.</a></li>
              <li><a href="https://www.salaryexpert.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Fitness Instructor, København 353 k kr./år</a></li>
              <li><a href="https://www.salaryexpert.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Personal Trainer, København 396 k kr./år</a></li>
              <li><a href="https://www.salaryexpert.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SalaryExpert – Instructor Fitness, DK 331 k kr./år</a></li>
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

export default FitnessinstruktørLoenPage; 