import { Calculator } from "@/components/Calculator";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoSections } from "@/components/InfoSections";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <Header />
      <Hero />
      <Calculator />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Sådan beregnes din løn efter skat</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="mb-4">Din løn efter skat beregnes i følgende trin:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Først fratrækkes arbejdsmarkedsbidrag (AM-bidrag) på 8% af bruttolønnen</li>
            <li>Derefter fratrækkes eventuelle fradrag fra den skattepligtige indkomst</li>
            <li>Din trækprocent anvendes på den resterende skattepligtige indkomst</li>
            <li>Hvis du har pensionsordning, fratrækkes din egen andel af pensionsbidraget</li>
            <li>Eventuelle frynsegoder som fri telefon tillægges den skattepligtige indkomst</li>
          </ol>
          <p className="mt-4">
            Den endelige udbetaling er din bruttoløn minus AM-bidrag, skat, pension og 
            eventuelle frynsegodebeskatning.
          </p>
        </div>
      </div>
      <InfoSections />
      <Footer />
    </div>
  );
};

export default Index;