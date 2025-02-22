
export const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-secondary to-accent py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <img 
            src="/lovable-uploads/2f09f9d9-2069-4743-947b-85703ade4b48.png"
            alt="Money calculator icon"
            className="h-6 w-6 md:h-8 md:w-8 object-contain brightness-0"
          />
          <h2 className="text-xl md:text-2xl font-bold text-primary font-sans">
            beregnloenefterskat.dk
          </h2>
        </div>
      </div>
    </header>
  );
};
