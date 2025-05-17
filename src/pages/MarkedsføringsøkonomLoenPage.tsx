import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const MarkedsføringsøkonomLoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("København");
  
  // City-specific salary data
  const cityData = {
    "København": { grossSalary: 38000, netMin: 24800, netMax: 25300 },
    "Aarhus": { grossSalary: 36000, netMin: 23400, netMax: 23900 },
    "Odense": { grossSalary: 34000, netMin: 22100, netMax: 22600 },
    "Aalborg": { grossSalary: 33000, netMin: 21500, netMax: 22000 },
    "Esbjerg": { grossSalary: 32000, netMin: 20900, netMax: 21400 },
    "Randers": { grossSalary: 32000, netMin: 20900, netMax: 21400 },
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "Praktikant (6. semester)", grossSalary: 15000, netMin: 12700, netMax: 13000 },
    { type: "Nyuddannet (0-2 år)", grossSalary: 28000, netMin: 19000, netMax: 19400 },
    { type: "3-5 år (marketing-koordinator)", grossSalary: 32000, netMin: 20900, netMax: 21400 },
    { type: "6-8 år (specialist / projektleder)", grossSalary: 36000, netMin: 23400, netMax: 23900 },
    { type: "9-11 år (marketing-manager)", grossSalary: 40000, netMin: 26000, netMax: 26600 },
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
        title="Markedsføringsøkonom Løn Efter Skat 2025 – Fakta, Tabeller og Beregning"
        description="Få overblik over markedsføringsøkonom løn efter skat i 2025. Se løn før og efter skat, erfaringstrin og brancher – og beregn dit eget estimat på få sekunder."
        keywords="markedsføringsøkonom løn, marketing løn, markedsføringsøkonom løn efter skat, markedsføring løn, lønstatistik"
      />
      <Header />
      <PageTitle title="Markedsføringsøkonom Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">Markedsføringsøkonom Løn Efter Skat 2025 – Fakta, Tabeller og Beregning</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – Som fuldtidsansat markedsføringsøkonom kan du i 2025 forvente en løn før skat på 28 000 – 40 000 kr. Efter AM-bidrag og almindelig A-skat giver det en markedsføringsøkonom løn efter skat på ca. 19 000 – 26 000 kr. pr. måned. Indtast dine egne tal i <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> og få et personligt estimat på under ét minut.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Derfor varierer markedsføringsøkonom løn efter skat</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Lønparameter</th>
                    <th className="py-2 px-4 border-b text-left">Hvorfor det har betydning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Branche</td>
                    <td className="py-2 px-4 border-b">Bureau / konsulenthus betaler ofte 5-10 % mere før skat end detail og non-profit.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b font-medium">Geografi</td>
                    <td className="py-2 px-4 border-b">Hovedstaden giver typisk højere løn før skat, men også højere kommuneskat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Erfaring & rolle</td>
                    <td className="py-2 px-4 border-b">Trainee, koordinator, specialist, marketing-manager – hvert trin har eget lønspænd.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b font-medium">Kompetencetillæg</td>
                    <td className="py-2 px-4 border-b">SEO-specialist, SoMe-strateg eller performance-analytiker kan give 1 500-3 000 kr./md. ekstra før skat.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b font-medium">Pension (12–15 %)</td>
                    <td className="py-2 px-4 border-b">Arbejdsgiverbidrag trækkes før skat; forbedrer totalpakken, men ses ikke i nettoløn.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b font-medium">Bonus / provision</td>
                    <td className="py-2 px-4 border-b">Forekommer især i e-commerce og SaaS; udbetales som almindelig løn og beskattes tilsvarende.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Løn Efter Skat for markedsføringsøkonomer – byoversigt 2025</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">By</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat (standard)</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat*</th>
                  </tr>
                </thead>
                <tbody>
                  {cityExamples.map((item, index) => (
                    <tr key={item.city} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-4 border-b font-medium">{item.city}</td>
                      <td className="py-2 px-4 border-b">{item.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-2 px-4 border-b">{item.netMin.toLocaleString("da-DK")} – {item.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 italic mt-2 mb-8">
              * Beregnet med gennemsnitlig kommuneskat 24,9 % og AM-bidrag 8 %, uden kirkeskat. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lønudvikling efter erfaring – markedsføringsøkonom</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Erfaring / Funktion</th>
                    <th className="py-2 px-4 border-b text-left">Løn før skat</th>
                    <th className="py-2 px-4 border-b text-left">Løn efter skat</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((item, index) => (
                    <tr key={item.type} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-4 border-b font-medium">{item.type}</td>
                      <td className="py-2 px-4 border-b">{item.grossSalary.toLocaleString("da-DK")} kr.</td>
                      <td className="py-2 px-4 border-b">{item.netMin.toLocaleString("da-DK")} – {item.netMax.toLocaleString("da-DK")} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beregningseksempel – Odense, specialistrolle</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <p className="mb-2"><strong>Løn før skat:</strong> 34 000 kr.</p>
              <p className="mb-2"><strong>AM-bidrag 8 %:</strong> 2 720 kr.</p>
              <p className="mb-2"><strong>Skattepligtig indkomst:</strong> 31 280 kr.</p>
              <p className="mb-2"><strong>Personfradrag:</strong> 4 650 kr.</p>
              <p className="mb-2"><strong>Beskatningsgrundlag:</strong> 26 630 kr.</p>
              <p className="mb-2"><strong>A-skat (≈ 37 %):</strong> 9 850 kr.</p>
              <p className="mb-0"><strong>Markedsføringsøkonom løn efter skat:</strong> ≈ 21 430 kr.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fire strategier til højere nettoløn</h2>
            
            <ol className="list-decimal pl-6 mb-8">
              <li className="mb-2">Certificér dig i Google Ads, Meta Blueprint eller GA4 – ofte 1 000-1 500 kr./md. ekstra før skat.</li>
              <li className="mb-2">Forhandl performance-bonus baseret på ROAS eller lead-mål.</li>
              <li className="mb-2">Flyt til lav-skat kommune – kan øge nettolønnen med op til 600 kr./md.</li>
              <li className="mb-2">Skift branche til SaaS eller mediebureauer, som generelt betaler 5-10 % højere løn før skat.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – markedsføringsøkonom løn efter skat</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <p className="mb-2"><strong>Hvad tjener en ny markedsføringsøkonom efter skat?</strong> Omkring 19 000 kr. pr. måned.</p>
              <p className="mb-2"><strong>Hvornår når man 26 000 kr. efter skat?</strong> Typisk efter 8-10 års erfaring eller i stillinger med personale-/budgetansvar.</p>
              <p className="mb-2"><strong>Tæller pension med i løn efter skat?</strong> Nej, pension indbetales før skat.</p>
              <p className="mb-0"><strong>Udløser bonus topskat?</strong> Kun hvis samlet løn før skat overstiger ca. 63 000 kr./md.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
            
            <p className="mb-6">
              I 2025 spænder markedsføringsøkonom løn efter skat mellem 19 000 og 26 000 kr. Løn før skat ligger normalt på 28 000 – 40 000 kr. Certificeringer, bonusordninger og lav kommuneskat kan løfte nettolønnen betragteligt. Brug <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a> for at finde dit konkrete udbetalingsbeløb.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
            
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2"><a href="https://www.djoef.dk/loen-og-loenforhandling/djoefs-loenstatistikker" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Djøf & HK Privat – Lønstatistik 2025 (marketing og kommunikation)</a></li>
              <li className="mb-2"><a href="https://www.jobindex.dk/tjek-din-loen/markedsoekonom" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jobindex Lønindex – Marketingøkonomer (maj 2025)</a></li>
              <li className="mb-2"><a href="https://skm.dk/tal-og-metode/satser/statistik-i-kommunerne/kommuneskatter-gennemsnitsprocenten-i-2025" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Skatteministeriet – Kommunesatser 2025</a></li>
            </ul>

            <p className="text-sm text-gray-600 italic mt-8">
              <small>Opdateret: maj 2025.</small>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarkedsføringsøkonomLoenPage; 