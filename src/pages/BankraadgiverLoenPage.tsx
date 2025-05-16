import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const BankraadgiverLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 48000, netMin: 31000, netMax: 31600 },
    "Aarhus": { grossSalary: 46000, netMin: 29400, netMax: 30000 },
    "Odense": { grossSalary: 44000, netMin: 28100, netMax: 28600 },
    "Aalborg": { grossSalary: 43000, netMin: 27400, netMax: 27900 },
    "Esbjerg": { grossSalary: 42000, netMin: 26800, netMax: 27300 },
    "Randers": { grossSalary: 42000, netMin: 26800, netMax: 27300 }
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Trainee (0-2 år)", grossSalary: 34000, netMin: 22000, netMax: 22400 },
    { type: "Junior rådgiver (2-4 år)", grossSalary: 38000, netMin: 24500, netMax: 24900 },
    { type: "Rådgiver (5-7 år)", grossSalary: 44000, netMin: 28100, netMax: 28600 },
    { type: "Senior rådgiver (8-10 år)", grossSalary: 50000, netMin: 32300, netMax: 32900 },
    { type: "Erhvervsrådgiver / Teamleder", grossSalary: 55000, netMin: 35500, netMax: 36100 }
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
        title="Bankrådgiver Løn Efter Skat 2025 – Se Realistiske Estimater"
        description="Bankrådgiver løn efter skat 2025: Se tabeller for erfaring, bonus og stilling. Beregn dit personlige estimat hurtigt online."
        keywords="bankrådgiver løn efter skat, bankrådgiver indkomst, finansrådgiver løn, banklån rådgiver, erhvervsrådgiver, bank lønsats, finanssektorens lønniveau"
      />
      <Header />
      <PageTitle title="Bankrådgiver Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Bankrådgiver Løn Efter Skat 2025 – Fra Rente til Rådighedsbeløb </h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – En fuldtids bankrådgiver i Danmark får i 2025 en bankrådgiver løn efter skat på 23 000 – 33 000 kr. pr. måned. Spændet afhænger især af bankens størrelse (lokal vs. tier‑1), anciennitet, bonus for salgsmål og om du rådgiver private eller erhvervskunder. Få dit personlige estimat på under ét minut via <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad styrer en bankrådgivers lønseddel?</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Fast grundløn</strong> – fastlagt af Finansforbundet & FA‑overenskomsten.</li>
              <li><strong>Bonus / incitament</strong> – op til 10 % af årsløn for opfyldte salgsmål.</li>
              <li><strong>Kompetence‑tillæg</strong> – rådgiverlicens, boligfinansiering, investerings­certifikater.</li>
              <li><strong>Geografi og filialstørrelse</strong> – hovedstaden betaler højere grundløn, men højere kommuneskat æder lidt af nettolønnen.</li>
              <li><strong>Pension 15,5 %</strong> – indbetales før skat og øger din samlede værdi.</li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-blue-400">
              <p className="italic">
                Fun fact: Sælger du tre bankforsikringer på en uge, kan bonusen dække dit månedlige fitness­abonnement – efter skat.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn Efter Skat – Byer 2025</h2>

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
              *Beregnet med gennemsnitlig kommuneskat 24,9 % + AM‑bidrag 8 %, uden kirkeskat. Vil du kende dit tal? <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Karrierekurven – Bankrådgiver Løn Efter Skat vs. erfaring</h2>
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

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel (Odense – senior privat­rådgiver, 44 000 kr.)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 44 000 kr.</li>
                <li><strong>AM-bidrag 8 % →</strong> 3 520 kr.</li>
                <li><strong>Skattepligtig indkomst →</strong> 40 480 kr.</li>
                <li><strong>Personfradrag →</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag →</strong> 35 830 kr.</li>
                <li><strong>A-skat (~ 37 %) →</strong> 13 260 kr.</li>
                <li><strong>Bankrådgiver løn efter skat ≈</strong> 27 220 kr.</li>
              </ul>
            </div>
            
            <p>
              Tester du bonus eller lavere kommuneskat? Hop til <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få dit eget estimat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker bankrådgiver løn efter skat mest?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Faktor</th>
                    <th className="py-3 px-4 border-b text-left">Typisk nettoløns­effekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Bonus for salgsmål</td>
                    <td className="py-3 px-4 border-b">+1 000 – 3 500 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Certificering (boliglån, pension)</td>
                    <td className="py-3 px-4 border-b">+1 200 – 2 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Teamleder­tilsvar</td>
                    <td className="py-3 px-4 border-b">+2 000 – 4 000 kr./md.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Geografi / kommuneskat</td>
                    <td className="py-3 px-4 border-b">± 600 kr./md.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4 hurtige tips til at øge din løn efter skat </h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Bliv certificeret i investerings­rådgivning</strong> – giver højere tillæg.</li>
              <li><strong>Fokusér på produktpakker</strong> (lån + forsikring + investering) ⇒ større bonus.</li>
              <li><strong>Flyt til lav‑skat kommune</strong> – saver op til 600 kr./md. i udbetaling.</li>
              <li><strong>Tag step‑up til erhvervs­rådgiver</strong> – branche­segmentet betaler 5‑8 % mere.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Bankrådgiver Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en nyuddannet bankrådgiver efter skat?</p>
                <p>Cirka 22 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Kan jeg nå 35 000 kr. efter skat?</p>
                <p>Ja, som teamleder eller senior erhvervsrådgiver med bonus.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller pension med i løn efter skat?</p>
                <p>Nej, de 15,5 % går før skat, men løfter din samlede pakke.</p>
              </div>
              <div>
                <p className="font-semibold">Hvornår rammer man topskat?</p>
                <p>Over ca. 63 000 kr. før skat – top­tal for senior­specialister.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 spænder bankrådgiver løn efter skat fra ≈ 22 000 kr. for trainees til ≈ 36 000 kr. for teamledere. Bonus, certificeringer og lavere kommuneskat kan løfte beløbet markant. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvor meget rådgivning om boliglån, pension og investering egentlig sætter ind på din egen konto.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://finansforbundet.dk/dk/dine-rettigheder/overenskomster/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Finansforbundet & FA Overenskomst 2024‑26</a></li>
              <li><a href="https://www.jobindex.dk/tjek-din-loen/bankraadgiver" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønstatistik – Bankrådgivere (maj 2025)</a></li>
              <li><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommuneskat 2025</a></li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: maj 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BankraadgiverLoenPage; 