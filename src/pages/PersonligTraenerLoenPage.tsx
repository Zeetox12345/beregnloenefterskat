import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const PersonligTraenerLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 45000, netMin: 28000, netMax: 36000 },
    "Aarhus": { grossSalary: 42000, netMin: 26000, netMax: 33000 },
    "Odense": { grossSalary: 40000, netMin: 25000, netMax: 31000 },
    "Aalborg": { grossSalary: 38500, netMin: 24000, netMax: 30000 },
    "Esbjerg": { grossSalary: 37500, netMin: 23500, netMax: 29000 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Junior PT (centeransat)", grossSalary: 30000, netMin: 18500, netMax: 19000 },
    { type: "Erfaren PT (5+ år)", grossSalary: 36000, netMin: 22500, netMax: 23000 },
    { type: "Senior coach / småbypartner", grossSalary: 42000, netMin: 26000, netMax: 26500 },
    { type: "Elite PT / selvstændig, Kbh.", grossSalary: 55000, netMin: 34000, netMax: 35000 }
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
        title="Personlig Træner Løn Efter Skat 2025 – Komplet Guide"
        description="Hvad er en personlig træner løn efter skat i 2025? Typisk 18 000 – 35 000 kr. udbetalt – før skat 30 000 – 55 000 kr. Beregn dit præcise nettobeløb hurtigt på beregn løn efter skat."
        keywords="personlig træner løn, fitness instruktør løn, PT løn efter skat, træner løn 2025"
      />
      <Header />
      <PageTitle title="Personlig Træner Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Personlig Træner Løn Efter Skat 2025 – Sæt Pris på Din Performance</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids personlig træner (37 t/uge) tjener i 2025 typisk 30 000 – 55 000 kr. før skat – fra centeransat junior til selvstændig elite‐coach. Det giver en personlig træner løn efter skat på cirka 18 000 – 35 000 kr. Indtast din egen bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at få et præcist nettobeløb.
              </p>
            </div>

            <p className="text-lg">
              Som personlig træner i 2025 handler det ikke kun om at motivere andre til at nå deres mål – det handler også om at sikre din egen økonomiske form. Lønnen varierer markant alt efter erfaring, certificeringer og ikke mindst om du arbejder som ansat eller driver egen virksomhed.
            </p>

            <p>
              Fra den nyuddannede fitness instruktør i lokalcentret til den erfarne performance coach med egen klinik i København – lønspændet er bredt. Men hvad kan du realistisk forvente at få udbetalt hver måned efter skat?
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker personlig træner løn efter skat?</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">Lønfaktor</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">Betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm font-medium">Grundløn</td>
                    <td className="px-4 py-3 text-sm">Nationalt gennemsnit ≈ 34 400 kr./md.</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">Erfaring & certificering</td>
                    <td className="px-4 py-3 text-sm">Fra basis‐PT til senior coach med ernæringsspeciale: +3 000 – 8 000 kr./md.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm font-medium">Kundebog & timepris</td>
                    <td className="px-4 py-3 text-sm">Selvstændige i storby tager 450–700 kr./t ⇒ 50 000 kr.+ pr. måned</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">Branche & arbejdsform</td>
                    <td className="px-4 py-3 text-sm">Privatteams, corporates og online coaching betaler 5–15 % over centerkæder</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm font-medium">Geografi</td>
                    <td className="px-4 py-3 text-sm">København aflønner ca. 7 % højere end landsgennemsnittet</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">Bonus & provision</td>
                    <td className="px-4 py-3 text-sm">Mange kæder giver 5–10 % omsætningsbonus pr. pakket træningsforløb</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Pension 10 – 12 %</td>
                    <td className="px-4 py-3 text-sm">Indbetales før skat – vises ikke i nettolønnen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Personlig Træner</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">Profil / erfaring</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">Løn før skat</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">≈ Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((exp, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-sm font-medium">{exp.type}</td>
                      <td className="px-4 py-3 text-sm">{exp.grossSalary.toLocaleString()} kr.</td>
                      <td className="px-4 py-3 text-sm">{exp.netMin.toLocaleString()} – {exp.netMax.toLocaleString()} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              * Beregnet med 8 % AM‐bidrag, personfradrag 4 650 kr. og trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn i de største byer – før og efter skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">By</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">Typisk løn før skat</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">≈ Løn efter skat**</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">Kommuneskat 2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm font-medium">København</td>
                    <td className="px-4 py-3 text-sm">32 000 – 58 000 kr.</td>
                    <td className="px-4 py-3 text-sm">20 000 – 36 000 kr.</td>
                    <td className="px-4 py-3 text-sm">23,5 %</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">Aarhus</td>
                    <td className="px-4 py-3 text-sm">31 000 – 53 000 kr.</td>
                    <td className="px-4 py-3 text-sm">20 000 – 33 000 kr.</td>
                    <td className="px-4 py-3 text-sm">24,52 %</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm font-medium">Odense</td>
                    <td className="px-4 py-3 text-sm">30 000 – 50 000 kr.</td>
                    <td className="px-4 py-3 text-sm">19 000 – 31 000 kr.</td>
                    <td className="px-4 py-3 text-sm">25,50 %</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">Aalborg</td>
                    <td className="px-4 py-3 text-sm">29 000 – 48 000 kr.</td>
                    <td className="px-4 py-3 text-sm">18 000 – 30 000 kr.</td>
                    <td className="px-4 py-3 text-sm">25,60 %</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Esbjerg</td>
                    <td className="px-4 py-3 text-sm">28 000 – 47 000 kr.</td>
                    <td className="px-4 py-3 text-sm">18 000 – 29 000 kr.</td>
                    <td className="px-4 py-3 text-sm">26,10 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              ** Nettobeløb beregnet som ovenfor med de lokale kommunesatser.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Mid-level PT (Aarhus)</h2>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Post</p>
                  <p>Løn før skat</p>
                  <p>AM-bidrag 8 %</p>
                  <p>Skattepligtig indkomst</p>
                  <p>Personfradrag</p>
                  <p>Beskatningsgrundlag</p>
                  <p>A-skat (≈ 37 %)</p>
                  <p className="font-semibold text-green-600">Personlig træner løn efter skat</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">Beløb</p>
                  <p>36 000 kr.</p>
                  <p>2 880 kr.</p>
                  <p>33 120 kr.</p>
                  <p>4 650 kr.</p>
                  <p>28 470 kr.</p>
                  <p>10 540 kr.</p>
                  <p className="font-semibold text-green-600">≈ 22 600 kr.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire veje til en højere nettoløn</h2>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">1. Opgrader certificeringerne</h3>
                <p className="text-sm">FX, sportsernæring eller rehabilitering giver typisk +3 000 kr./md.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">2. Byg stærk kundebog</h3>
                <p className="text-sm">25+ faste klienter á 2 sessions/uge kan løfte brutto til 50 000 kr.+</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">3. Sælg online programmer</h3>
                <p className="text-sm">Skalerer arbejdstid og øger passiv indtjening.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">4. Placér dig i lav-skat-kommune</h3>
                <p className="text-sm">Forskellen 23,5 % vs. 26,1 % kan spare ~700 kr./md. netto.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fra ansat til selvstændig – hvad er forskellen?</h2>

            <p>
              Mange personlige trænere starter som ansatte i fitnesskæder eller mindre centre, men drømmer om selvstændighed. Overgangen kan være økonomisk fordelagtig, men kræver også mere administrativt arbejde og kundeansvar.
            </p>

            <p>
              Som ansat får du typisk fast månedsløn plus eventuelle bonusser baseret på salg af personlig træning. Som selvstændig kan du tage mellem 450-700 kr. per time, men skal selv dække udgifter til lokaler, forsikring og markedsføring.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Certificeringer der boostar lønnen</h2>

            <p>
              I fitnessbranchen kan de rigtige certificeringer gøre en markant forskel på din indtjening. Her er de mest værdifulde:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Functional Training:</strong> +2 000-3 000 kr./md.</li>
              <li><strong>Ernæringsvejledning:</strong> +3 000-5 000 kr./md.</li>
              <li><strong>Skaderehabilitering:</strong> +4 000-8 000 kr./md.</li>
              <li><strong>Specialistområder (fx elderly fitness):</strong> +2 000-4 000 kr./md.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Personlig Træner Løn Efter Skat</h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">Spørgsmål</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">Kort svar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm font-medium">Hvad tjener en ny personlig træner efter skat?</td>
                    <td className="px-4 py-3 text-sm">Omkring 18 500 kr./md.</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">Kan jeg nå 35 000 kr. netto?</td>
                    <td className="px-4 py-3 text-sm">Ja – som selvstændig elite-coach i storby med fuld kalender.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm font-medium">Er bonus og online-indtægter skattepligtige?</td>
                    <td className="px-4 py-3 text-sm">Ja, beskattes som A- eller B-indkomst afhængigt af setup.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Indgår pension i nettolønnen?</td>
                    <td className="px-4 py-3 text-sm">Nej – 10 – 12 % indbetales før skat.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Online coaching – den nye guldfugl?</h2>

            <p>
              Mange erfarne personlige trænere supplerer nu deres indkomst med online coaching. En vellykket online platform kan generere 10 000-30 000 kr. ekstra om måneden, samtidig med at du når flere klienter uden geografiske begrænsninger.
            </p>

            <p>
              Typiske online-tjenester inkluderer træningsprogrammer, kostplaner og videokonsultationer. Priser ligger ofte på 500-1 500 kr. per måned per klient.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>

            <p>
              I 2025 ligger personlig træner løn efter skat oftest mellem 18 000 og 35 000 kr. pr. måned, svarende til 30 000 – 55 000 kr. før skat. Certificeringer, klientvolume og geografi er de vigtigste gear til højere indtjening.
            </p>

            <p>
              Uanset om du er nystartet fitness instruktør eller erfaren performance coach, er det vigtigt at have styr på din økonomi. Indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at se, hvor meget der faktisk lander på kontoen, når sidste rep er logget.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>

            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>SalaryExpert – Personal Trainer løn København 396 528 kr./år (≈ 33 k kr./md.) - salaryexpert.com</li>
              <li>Indkomsten.dk – Coach/Coaching gennemsnit 41 – 43 k kr./md. (feb 2025) - indkomsten.dk</li>
              <li>Studentum.dk – Fitnessinstruktør gennemsnitsløn 34 394 kr./md. - studentum.dk</li>
              <li>blivPT.dk – Potentiel indtjening 60 000 kr./md. ved 25 t/uge (privat PT-marked) - blivpt.dk</li>
              <li>CEPOS / Skatteministeriet – Kommuneskat 2025 (23,5 – 26,3 %)</li>
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

export default PersonligTraenerLoenPage; 