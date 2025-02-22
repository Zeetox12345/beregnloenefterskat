
import { Calculator } from "@/components/Calculator";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InfoSections } from "@/components/InfoSections";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="pt-4">
          <Calculator />
        </div>
        <InfoSections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
