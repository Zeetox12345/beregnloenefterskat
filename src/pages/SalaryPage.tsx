import { useParams } from "react-router-dom";
import { Calculator } from "@/components/Calculator";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InfoSections } from "@/components/InfoSections";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { useEffect, useState } from "react";

const SalaryPage = () => {
  const { salary } = useParams();
  const [initialSalary, setInitialSalary] = useState<string>("");
  const [formattedSalary, setFormattedSalary] = useState<string>("");

  useEffect(() => {
    if (salary) {
      // Parse the salary from the URL, removing "kr" and any other non-numeric characters
      const parsedSalary = parseInt(salary.replace(/\D/g, ""));
      if (!isNaN(parsedSalary)) {
        setInitialSalary(parsedSalary.toString());
        setFormattedSalary(parsedSalary.toLocaleString("da-DK"));
      }
    }
  }, [salary]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      {formattedSalary && (
        <SEO 
          title={`${formattedSalary} kr efter skat | Beregn din nettoløn`}
          description={`Se hvad ${formattedSalary} kr bliver til efter skat. Detaljeret beregning af din nettoløn i 2025.`}
          keywords={`løn efter skat, ${formattedSalary} kr nettoløn, løn beregner, løn beregning, skatteberegner, nettoløn, indkomstskat`}
        />
      )}
      <Header />
      {initialSalary && (
        <PageTitle title={`${formattedSalary} kr efter skat - Beregning af nettoløn 2025`} />
      )}
      <main className="flex-1">
        <Calculator initialSalary={initialSalary} />
        <InfoSections salary={initialSalary} />
      </main>
      <Footer />
    </div>
  );
};

export default SalaryPage; 