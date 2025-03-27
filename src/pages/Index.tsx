import { Calculator } from "@/components/Calculator";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InfoSections } from "@/components/InfoSections";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO
        title="Beregn løn efter skat 2025 | Løn- og skatteberegner"
        description="Beregn din løn efter skat i 2025. Nøjagtig beregning af nettoløn med alle skattefradrag og -tillæg inkluderet."
        keywords="løn efter skat, nettoløn, skatteberegner, indkomstskat, skatteberegning, løn beregner, løn"
      />
      <Header />
      <main className="flex-1">
        <Calculator />
        <InfoSections salary="35000" isMainPage={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
