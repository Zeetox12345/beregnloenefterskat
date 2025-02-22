
import { Calculator } from "@/components/Calculator";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoSections } from "@/components/InfoSections";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <Header />
      <main className="flex-1">
        <Calculator />
        <Hero />
        <InfoSections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
