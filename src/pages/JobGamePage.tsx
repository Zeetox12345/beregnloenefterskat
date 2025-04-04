import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JobSalaryGame } from "@/components/JobSalaryGame";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const JobGamePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 via-white to-primary/5">
      <SEO 
        title="Hvem tjener mest efter skat | Sjovt løn-spil"
        description="Spil 'Hvem tjener mest efter skat' og se om du kan gætte hvilke job der har højest nettoløn efter skat. Test din viden om løn og skat i Danmark."
        keywords="løn efter skat, nettoløn, løn-spil, skatteberegner, indkomstskat, jobløn, job sammenligning"
      />
      <Header />
      <PageTitle title="Hvem tjener mest efter skat?" />
      <main className="flex-1">
        <div className="container mx-auto relative">
          {/* Decorative elements */}
          <div className="hidden md:block absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/5 z-0"></div>
          <div className="hidden md:block absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary/5 z-0"></div>
          <div className="hidden md:block absolute bottom-20 left-20 w-48 h-48 rounded-full bg-accent/5 z-0"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <JobSalaryGame />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="max-w-3xl mx-auto py-10 px-6 bg-white shadow-md rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-primary">Om dette spil</h2>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-800 font-medium">
                  Dette spil bruger vores skatteberegner til at beregne nettolønnen efter skat for forskellige job i Danmark. 
                  Tallene er baseret på gennemsnitslønninger fordelt på erhverv.
                </p>
                <p className="leading-relaxed text-gray-800 font-medium">
                  Skatteberegningerne tager højde for AM-bidrag, personfradrag, bundskat, topskat, og andre fradrag 
                  ifølge de gældende skatteregler for 2025.
                </p>
                <p className="leading-relaxed text-gray-800 font-medium">
                  Prøv vores <a href="/" className="text-primary hover:underline font-bold">løn- og skatteberegner</a> for at beregne 
                  din egen løn efter skat.
                </p>
                <div className="pt-3 mt-2 border-t border-gray-200">
                  <p className="text-sm text-gray-700 font-medium">
                    Kilde: Løndata er baseret på tal fra <a href="https://www.alt.dk/artikler/stor-oversigt-saa-meget-tjener-du-i-forskellige-jobs/3001428" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">alt.dk</a>, 3. april 2024.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobGamePage; 