import { Calculator } from "@/components/Calculator";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useEffect } from "react";

const Salary40k = () => {
  useEffect(() => {
    document.title = "40.000 kr efter skat - beregnloenefterskat.dk";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          40.000 kr. efter skat
        </h1>
        <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
          Se hvad du får udbetalt af 40.000 kr. før skat. Du kan justere fradrag, trækprocent og pension efter dine forhold.
        </p>
      </div>
      <Calculator defaultSalary={40000} />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Sådan er beregningen lavet</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="mb-4">For en månedsløn på 40.000 kr. før skat beregnes følgende:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Arbejdsmarkedsbidrag (AM-bidrag): 8% af 40.000 kr. = 3.200 kr.</li>
            <li>Grundlag for kommuneskat og sundhedsbidrag: 40.000 kr. - 3.200 kr. = 36.800 kr.</li>
            <li>Med en gennemsnitlig trækprocent på 39%: 36.800 kr. × 39% = 14.352 kr. i skat</li>
            <li>Udbetalt uden pension og andre fradrag: 40.000 kr. - 3.200 kr. - 14.352 kr. = 22.448 kr.</li>
          </ol>
          <p className="mt-4">
            Bemærk at din faktiske udbetaling kan variere baseret på dine personlige forhold, 
            herunder fradrag, pensionsordning og særlige skatteforhold.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Salary40k;