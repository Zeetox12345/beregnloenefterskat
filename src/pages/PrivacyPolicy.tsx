import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO
        title="Privatlivspolitik | beregnloenefterskat.dk"
        description="Privatlivspolitik for beregnloenefterskat.dk - Information om hvordan vi behandler dine persondata."
        keywords="privatlivspolitik, cookies, persondata, GDPR, databeskyttelse"
      />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-primary">Privatlivspolitik</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-primary">1. Introduktion</h2>
          <p className="mb-4">
            Denne privatlivspolitik gælder for beregnloenefterskat.dk. Vi respekterer dit privatliv og er forpligtet til at beskytte dine personlige oplysninger. Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger og beskytter dine oplysninger, når du besøger vores hjemmeside.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-primary">2. Dataansvarlig</h2>
          <p className="mb-4">
            Beregnloenefterskat.dk er dataansvarlig for de oplysninger, der indsamles på denne hjemmeside.
          </p>
          <p className="mb-4">
            <strong>Kontaktoplysninger:</strong><br />
            E-mail: beregnloenefterskat@gmail.com
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-primary">3. Hvilke oplysninger vi indsamler</h2>
          <p className="mb-4">
            Vi indsamler følgende typer af oplysninger, når du besøger vores hjemmeside:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong>Brugsdata:</strong> Oplysninger om hvordan du bruger vores hjemmeside, herunder hvilke sider du besøger, hvor lang tid du bruger på hver side, og hvilke funktioner du interagerer med.
            </li>
            <li className="mb-2">
              <strong>Enhedsoplysninger:</strong> Information om den enhed, du bruger til at tilgå vores hjemmeside, herunder browsertype, operativsystem og skærmopløsning.
            </li>
            <li className="mb-2">
              <strong>IP-adresse:</strong> Din IP-adresse bruges til at bestemme din omtrentlige geografiske placering.
            </li>
            <li className="mb-2">
              <strong>Cookies:</strong> Vi bruger cookies til at forbedre din brugeroplevelse og til at indsamle statistik om brugen af vores hjemmeside.
            </li>
          </ul>
          <p className="mb-4">
            Vi indsamler ikke personlige oplysninger som navn, adresse eller CPR-nummer gennem vores løn- og skatteberegner. Alle beregninger foretages lokalt i din browser.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-primary">4. Hvordan vi bruger dine oplysninger</h2>
          <p className="mb-4">
            Vi bruger de indsamlede oplysninger til følgende formål:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong>Forbedring af hjemmesiden:</strong> Vi analyserer brugsdata for at forbedre vores hjemmeside og sikre, at indholdet præsenteres på den mest effektive måde.
            </li>
            <li className="mb-2">
              <strong>Statistik og analyse:</strong> Vi bruger anonymiserede data til at føre statistik over besøgende og analysere brugeradfærd.
            </li>
            <li className="mb-2">
              <strong>Annoncering:</strong> Vi bruger cookies til at vise relevante annoncer via tredjepartstjenester som Ezoic.
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-primary">5. Tredjeparter</h2>
          <p className="mb-4">
            Vi deler oplysninger med følgende tredjeparter:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong>Google Analytics:</strong> Vi bruger Google Analytics til at analysere brugen af vores hjemmeside. Google Analytics indsamler oplysninger om din brug af hjemmesiden, herunder din IP-adresse. Du kan læse mere om Google Analytics' privatlivspolitik <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">her</a>.
            </li>
            <li className="mb-2">
              <strong>Ezoic:</strong> Vi bruger Ezoic til at optimere brugeroplevelsen og til at vise annoncer. Ezoic indsamler oplysninger om din brug af hjemmesiden. Du kan læse mere om Ezoic's privatlivspolitik <a href="https://www.ezoic.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">her</a>.
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-primary">6. Cookies</h2>
          <p className="mb-4">
            Vi bruger cookies på vores hjemmeside. Cookies er små tekstfiler, der gemmes på din computer, når du besøger vores hjemmeside. De hjælper os med at give dig en bedre brugeroplevelse og gør det muligt for os at forbedre vores hjemmeside.
          </p>
          <p className="mb-4">
            Du kan kontrollere og slette cookies via dine browserindstillinger. Hvis du vælger at slette eller blokere cookies, kan det påvirke din oplevelse på vores hjemmeside, og nogle funktioner vil muligvis ikke fungere korrekt.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-primary">7. Dine rettigheder</h2>
          <p className="mb-4">
            I henhold til databeskyttelseslovgivningen har du en række rettigheder i forhold til vores behandling af oplysninger om dig:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong>Ret til indsigt:</strong> Du har ret til at få indsigt i de oplysninger, vi behandler om dig.
            </li>
            <li className="mb-2">
              <strong>Ret til berigtigelse:</strong> Du har ret til at få urigtige oplysninger om dig selv rettet.
            </li>
            <li className="mb-2">
              <strong>Ret til sletning:</strong> I særlige tilfælde har du ret til at få slettet oplysninger om dig.
            </li>
            <li className="mb-2">
              <strong>Ret til begrænsning af behandling:</strong> Du har i visse tilfælde ret til at få behandlingen af dine personoplysninger begrænset.
            </li>
            <li className="mb-2">
              <strong>Ret til indsigelse:</strong> Du har ret til at gøre indsigelse mod vores behandling af dine personoplysninger.
            </li>
          </ul>
          <p className="mb-4">
            Hvis du ønsker at gøre brug af dine rettigheder, kan du kontakte os på beregnloenefterskat@gmail.com.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-primary">8. Klage til Datatilsynet</h2>
          <p className="mb-4">
            Hvis du er utilfreds med vores behandling af dine personoplysninger, kan du klage til Datatilsynet:
          </p>
          <p className="mb-4">
            Datatilsynet<br />
            Carl Jacobsens Vej 35<br />
            2500 Valby<br />
            Telefon: 33 19 32 00<br />
            E-mail: dt@datatilsynet.dk<br />
            Website: <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.datatilsynet.dk</a>
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-primary">9. Ændringer til privatlivspolitikken</h2>
          <p className="mb-4">
            Vi kan opdatere vores privatlivspolitik fra tid til anden. Vi vil informere om væsentlige ændringer ved at placere en meddelelse på vores hjemmeside.
          </p>
          <p className="mb-4">
            Denne privatlivspolitik blev sidst opdateret den {new Date().toLocaleDateString('da-DK')}.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 