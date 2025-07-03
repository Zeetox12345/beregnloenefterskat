import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

// Declare missing analytics properties on window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

const VelkommenAffiliateLandingPage = () => {
  // Constants – adjust when prices change
  const SPOT_PRICE = 0.4; // kr./kWh
  const VELKOMMEN_PRICE = 0.36; // kr./kWh
  const GIFT_VALUE = 399; // DKK

  const [kwh, setKwh] = useState(4000);
  const saving = (SPOT_PRICE - VELKOMMEN_PRICE) * kwh;
  const total = saving + GIFT_VALUE;

  const formatDkk = (amount: number) =>
    new Intl.NumberFormat("da-DK", {
      style: "currency",
      currency: "DKK",
      minimumFractionDigits: 0,
    }).format(amount);

  const trackCalc = () => {
    if (window.gtag) {
      window.gtag("event", "calculator_used", {
        event_category: "engagement",
        kwh,
      });
    }
    if (window.fbq) {
      window.fbq("trackCustom", "CalculatorUsed", { kwh });
    }
  };

  const trackAffiliateClick = (location: string) => {
    if (window.gtag) {
      window.gtag("event", "affiliate_click", {
        event_category: "engagement",
        location,
      });
    }
    if (window.fbq) {
      window.fbq("track", "Outbound_Velkommen", { location });
    }
  };

  const affiliateUrl =
    "https://go.adt253.net/t/t?a=1932143369&as=1982389276&t=2&tk=1";

  return (
    <>
      {/* SEO + Meta */}
      <SEO
        title="Billig grøn strøm + gratis JBL EarPods | BeregnLønEfterSkat"
        description="Beregn din besparelse, skift elselskab på 2 minutter og få gratis JBL EarPods – behold mere af din løn efter skat."
      />
      <Helmet>
        {/* Robots – noindex to keep landing page out of search */}
        <meta name="robots" content="noindex, nofollow" />

        {/* Google Tag (replace G-XXXXXXX) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}</script>

        {/* Meta Pixel (replace 1234567890) */}
        <script>{`
          !(function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
          n.callMethod.apply(n,arguments) : n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)})(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1234567890');
          fbq('track', 'PageView');
        `}</script>
      </Helmet>

      <main className="antialiased text-gray-800 bg-white">
        {/* HERO */}
        <section className="bg-green-50 py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Få billig, 100&nbsp;% grøn strøm – og gratis JBL&nbsp;EarPods
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Skift elselskab på 2&nbsp;minutter og behold flere af dine
              lønkroner selv.
            </p>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="sponsored noopener"
              id="cta-top"
              onClick={() => trackAffiliateClick("cta-top")}
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-4 px-8 rounded-2xl shadow-lg transition"
            >
              Skift nu – få gratis JBL
            </a>
            <p className="mt-2 text-sm text-gray-600 italic">
              Reklame
            </p>
          </div>
        </section>

        {/* PROBLEM → SOLUTION */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Strømmen blev dyrere i 2024 – men du kan stadig spare!
              </h2>
              <p className="mb-4">
                Vores beregninger viser, at en husstand med 4.000&nbsp;kWh årligt
                kan spare op til <span className="font-semibold">350&nbsp;kr./år</span> ved at skifte til Velkommen – <em>og</em> få
                JBL&nbsp;EarPods til en værdi af 399&nbsp;kr.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>0&nbsp;kr. i oprettelse</li>
                <li>1&nbsp;kr./mdr. abonnement</li>
                <li>4&nbsp;øre/kWh i tillæg</li>
                <li>100&nbsp;% certificeret grøn strøm</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/affiliatefacebookads/velkommenaffiliatepic.png"
                alt="Velkommen kampagne billede"
                className="rounded-xl shadow-md max-w-full"
              />
            </div>
          </div>
        </section>

        {/* EXTRA OFFER COPY */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bestil strøm fra Velkommen og få en Google Nest Hub eller et par
              JBL EarPods til 0&nbsp;kr.
            </h2>
            <p className="mb-6 text-gray-700">
              Hos Velkommen får du den samme grønne strøm som hos mange andre
              el-selskaber – men du betaler <strong>0&nbsp;kr. i abonnement</strong>.
            </p>
            <ul className="list-disc list-inside text-left mx-auto max-w-md space-y-2 text-gray-700">
              <li>
                Grøn bæredygtig energi fra danske vindmøller og norske
                vandkraftværker
              </li>
              <li>
                Elaftale med variabel pris, der følger markedet – betal kun for
                dit forbrug
              </li>
              <li>0&nbsp;kr. i abonnement og gratis oprettelse</li>
            </ul>
          </div>
        </section>

        {/* CALCULATOR */}
        <section id="calc" className="bg-gray-50 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Beregn din besparelse</h2>
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4 items-center">
              <label htmlFor="kwh" className="font-medium">
                Dit årlige forbrug (kWh):
              </label>
              <input
                type="number"
                id="kwh"
                value={kwh}
                min={500}
                step={100}
                onChange={(e) => setKwh(Number(e.target.value))}
                className="w-40 text-center border rounded-lg py-2"
              />
              <button
                id="btn-calc"
                onClick={trackCalc}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg"
              >
                Vis besparelse
              </button>
              <div id="calc-result" className="text-xl font-semibold mt-6">
                Du kan spare ca. <span className="text-green-600">{formatDkk(saving)}</span> om året + få JBL&nbsp;EarPods til en værdi af {formatDkk(
                  GIFT_VALUE
                )} – samlet fordel: <span className="text-green-600">{formatDkk(total)}</span>
              </div>
            </div>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="sponsored noopener"
              id="cta-mid"
              onClick={() => trackAffiliateClick("cta-mid")}
              className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-8 rounded-2xl shadow-lg transition"
            >
              Skift nu – få gratis JBL
            </a>
          </div>
        </section>

        {/* TRUST / REVIEWS */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Derfor vælger danskerne Velkommen</h2>
            <div className="grid sm:grid-cols-2 gap-8 mt-8">
              <div className="p-6 border rounded-2xl shadow-sm">
                <p className="text-lg mb-2 font-semibold">“Super nemt skifte”</p>
                <p className="text-gray-700">
                  Jeg sparede ~45&nbsp;kr./mdr. og modtog mine EarPods efter under
                  en uge.
                </p>
                <p className="mt-4 text-sm text-gray-500">– Mette, Odense</p>
              </div>
              <div className="p-6 border rounded-2xl shadow-sm">
                <p className="text-lg mb-2 font-semibold">Grøn strøm til lav pris</p>
                <p className="text-gray-700">
                  Rart at vide, at min el er 100&nbsp;% grøn – og jeg betaler
                  mindre end før.
                </p>
                <p className="mt-4 text-sm text-gray-500">– Jonas, Aalborg</p>
              </div>
            </div>
          </div>
        </section>

        {/* AFFILIATE BANNER */}
        <section className="py-12 px-4 text-center">
          <a
            href="https://go.adt253.net/t/t?a=1937277502&as=1982389276&t=2&tk=1"
            target="_blank"
            rel="sponsored noopener"
            onClick={() => trackAffiliateClick("affiliate-banner")}
          >
            <img
              src="https://track.adtraction.com/t/t?a=1937277502&as=1982389276&t=1&tk=1&i=1"
              width="500"
              height="500"
              className="mx-auto rounded-xl shadow-lg"
              alt="Velkommen kampagne – Google Nest Hub eller JBL EarPods"
            />
          </a>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Ofte stillede spørgsmål
            </h2>
            <div className="space-y-6">
              <details className="border rounded-lg p-4">
                <summary className="cursor-pointer font-medium">
                  Hvornår modtager jeg mine JBL&nbsp;EarPods?
                </summary>
                <p className="mt-2 text-gray-700">
                  Efter din elleverance er startet (typisk 10-14&nbsp;dage), sender
                  Velkommen en e-mail med bekræftelse og track-and-trace på din
                  velkomstgave.
                </p>
              </details>
              <details className="border rounded-lg p-4">
                <summary className="cursor-pointer font-medium">
                  Koster det noget at skifte elselskab?
                </summary>
                <p className="mt-2 text-gray-700">
                  Nej, det er gratis at skifte. Eventuel opsigelse af dit gamle
                  abonnement håndteres automatisk.
                </p>
              </details>
              <details className="border rounded-lg p-4">
                <summary className="cursor-pointer font-medium">Binder jeg mig til noget?</summary>
                <p className="mt-2 text-gray-700">
                  Nej, Velkommen har ingen bindingsperiode på denne aftale.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Klar til at spare og få dine JBL&nbsp;EarPods?
          </h2>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="sponsored noopener"
            id="cta-bottom"
            onClick={() => trackAffiliateClick("cta-bottom")}
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-4 px-10 rounded-2xl shadow-lg transition"
          >
            Skift nu – få gratis JBL
          </a>
          <p className="mt-2 text-sm text-gray-600 italic">
            Reklame
          </p>
        </section>

        <footer className="bg-gray-100 py-8 text-center text-sm text-gray-500">
          <p>© 2025 BeregnLønEfterSkat.dk · Alle rettigheder forbeholdes</p>
          <p className="mt-1">
            *Beregnet besparelse er vejledende. Spotpris: 0,40 kr./kWh (3 jul 2025
            12:00). Velkommen tillæg: 0,36 kr./kWh. JBL EarPods vejledende pris:
            399 kr.*
          </p>
        </footer>
      </main>
    </>
  );
};

export default VelkommenAffiliateLandingPage; 