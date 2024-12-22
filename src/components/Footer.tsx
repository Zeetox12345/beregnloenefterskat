export const Footer = () => {
  return (
    <footer className="bg-muted py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Om beregnloenefterskat.dk</h3>
            <p className="text-sm text-gray-600">
              Dette værktøj er kun vejledende. Kontakt altid en professionel rådgiver eller Skattestyrelsen for præcis rådgivning.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Links</h3>
            <ul className="text-sm text-gray-600">
              <li>
                <a href="https://skat.dk" className="hover:text-primary">
                  Skattestyrelsen
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} beregnloenefterskat.dk. Alle rettigheder forbeholdes.
        </div>
      </div>
    </footer>
  );
};