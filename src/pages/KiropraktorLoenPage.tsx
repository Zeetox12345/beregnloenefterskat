import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const KiropraktorLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  const cityData = {
    "København": { grossSalary: 50000, netMin: 33000, netMax: 33500 },
    "Aarhus": { grossSalary: 47000, netMin: 31000, netMax: 31500 },
    "Odense": { grossSalary: 45000, netMin: 29800, netMax: 30300 },
    "Aalborg": { grossSalary: 44000, netMin: 29100, netMax: 29600 },
    "Esbjerg": { grossSalary: 43000, netMin: 28400, netMax: 28900 }
  };

  const experienceData = [
    { type: "Basis (0–2 år)", grossSalary: 38000, netMin: 25000, netMax: 25500 },
    { type: "Kiropraktor 3–5 år", grossSalary: 45000, netMin: 29800, netMax: 30300 },
    { type: "Senior / Klinikkoordinator", grossSalary: 52000, netMin: 34300, netMax: 34800 },
    { type: "Partner / Ejer (Kbh.)", grossSalary: 60000, netMin: 39000, netMax: 39500 }
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
        title="Kiropraktor Løn Efter Skat 2025 – Se Hvad Du Får Udbetalt"
        description="En kiropraktor tjener typisk 38.000–60.000 kr. før skat i 2025. Se hvad det svarer til i udbetalt løn. Få præcise estimater med beregn løn efter skat og læs, hvad der påvirker din nettoløn."
        keywords="kiropraktor løn efter skat 2025, kiropraktor nettoløn, kiropraktor omsætningsbonus, kiropraktor specialisering, kiropraktor klinik"
      />
      <Header />
      <PageTitle title="Kiropraktor Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Kiropraktor Løn Efter Skat 2025 – Fra Justering til Nettobeløb</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR — En fuldtids kiropraktor (37 t/uge) tjener i 2025 typisk 38 000 – 60 000 kr. før skat pr. måned. Det giver en kiropraktor løn efter skat på cirka 25 000 – 39 000 kr. Beregn det præcist for din egen situation med <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> – prøv både fast løn og omsætningsbonus. Brug også <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> til at se, hvordan en højere klinikomsætning påvirker din nettoløn.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hvad påvirker en kiropraktor løn efter skat?</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Lønfaktor</th>
                    <th className="py-3 px-4 border-b text-left">Hvorfor det rykker nettobeløbet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Grundløn</td>
                    <td className="py-3 px-4 border-b">Dansk Kiropraktor Forenings (DKF) lønstatistik viser gennemsnit ≈ 45 800 kr./md. før skat for kiropraktorer med 3–5 års erfaring.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Omsætningsbonus</td>
                    <td className="py-3 px-4 border-b">Praktiserende kiropraktorer får ofte 10–30 % af egen patientomsætning udbetalt som bonus – beskattes som almindelig løn.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Geografi</td>
                    <td className="py-3 px-4 border-b">Hovedstaden og Østjylland betaler 6–8 % over landsgennemsnit; Region Nordjylland ca. 5 % under.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Speciale</td>
                    <td className="py-3 px-4 border-b">Sports‐rehab, pædiatri eller dry needling udløser typisk +1 500 – 3 000 kr./md. før skat.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold">Pension 17 %</td>
                    <td className="py-3 px-4 border-b">Arbejdsgiverbidrag indbetales før skat og indgår ikke i nettolønnen, men løfter totalpakken.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønbånd 2025 – Kiropraktor</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Erfaring / Rolle</th>
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
              *Beregnet med 8 % AM-bidrag, personfradrag 4 650 kr. og gennemsnitlig trækprocent 37 %.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Senior kiropraktor (52 000 kr. før skat)</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 my-4">
              <ul className="list-none space-y-2 pl-0">
                <li><strong>Løn før skat:</strong> 52 000 kr.</li>
                <li><strong>AM-bidrag 8 %:</strong> 4 160 kr.</li>
                <li><strong>Skattepligtig indkomst:</strong> 47 840 kr.</li>
                <li><strong>Personfradrag:</strong> 4 650 kr.</li>
                <li><strong>Beskatningsgrundlag:</strong> 43 190 kr.</li>
                <li><strong>A-skat (≈ 37 %):</strong> 15 980 kr.</li>
                <li><strong>Kiropraktor løn efter skat:</strong> ≈ 32 700 kr.</li>
              </ul>
            </div>

            <p>
              Tjek selv – indtast din bruttoløn i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få nettobeløbet med det samme.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire greb til højere nettoløn</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Øg patientomsætningen</strong> – flere behandlinger pr. dag giver større bonus.</li>
              <li><strong>Efteruddan dig</strong> – sportskiropraktik, shockwave eller IMS-certifikat hæver timeprisen.</li>
              <li><strong>Bliv medejer af klinik</strong> – som partner deler du overskuddet, der udbetales som løn/udbytte.</li>
              <li><strong>Placér klinikken i lav-skat‐kommune</strong> – kan løfte nettolønnen 600-800 kr./md. uden ekstra behandlinger.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Kiropraktor Løn Efter Skat</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Hvad tjener en ny kiropraktor efter skat?</p>
                <p>Cirka 25 000 kr./md.</p>
              </div>
              <div>
                <p className="font-semibold">Hvordan når jeg 39 000 kr. efter skat?</p>
                <p>Partnerrolle i storby + høj omsætningsbonus og specialtillæg.</p>
              </div>
              <div>
                <p className="font-semibold">Tæller bonus i nettoløn?</p>
                <p>Ja, udbetales som almindelig A-indkomst og beskattes.</p>
              </div>
              <div>
                <p className="font-semibold">Indgår pension i nettoløn?</p>
                <p>Nej, 17 % pension indbetales før skat.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            <p>
              I 2025 ligger kiropraktor løn efter skat typisk mellem 25 000 og 39 000 kr. pr. måned – baseret på 38 000 – 60 000 kr. før skat. Omsætningsbonus, specialisering og klinik­ejerskab er de hurtigste veje til et større nettobeløb. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og se, hvad der lander på kontoen, når sidste patient har fået justeret ryghvirvlerne.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Dansk Kiropraktor Forening – Lønstatistik 2025</li>
              <li>SalaryExpert – Chiropractor, Denmark & Copenhagen (2025)</li>
              <li>Indkomsten.dk – Kiropraktor gennemsnitsløn, maj 2025</li>
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

export default KiropraktorLoenPage; 