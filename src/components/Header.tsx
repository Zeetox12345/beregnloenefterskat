import { Calculator } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-secondary to-accent py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <Calculator className="h-8 w-8 md:h-10 md:w-10 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold text-primary font-sans">
            beregnloenefterskat.dk
          </h1>
        </div>
      </div>
    </header>
  );
};