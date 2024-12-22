import { Calculator, Home, Info, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-semibold text-primary">LønBeregner</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
              <Home className="h-4 w-4" />
              <span>Hjem</span>
            </Link>
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
              <Calculator className="h-4 w-4" />
              <span>Beregner</span>
            </Link>
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
              <Info className="h-4 w-4" />
              <span>Skatteinformation</span>
            </Link>
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
              <Mail className="h-4 w-4" />
              <span>Kontakt</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};