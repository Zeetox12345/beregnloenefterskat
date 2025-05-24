import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";

// Define interfaces for the content structure
interface BlogPostSection {
  type: 'text' | 'heading' | 'image';
  content: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  sections: BlogPostSection[];
}

// Sample blog post data with images integrated into the content
const blogPosts: Record<string, BlogPost> = {
  "sadan-far-du-mest-muligt-ud-af-din-loen-efter-skat": {
    id: 1,
    slug: "sadan-far-du-mest-muligt-ud-af-din-loen-efter-skat",
    title: "Sådan får du mest muligt ud af din løn efter skat – 5 tips til at optimere din privatøkonomi",
    date: "2025-03-29",
    readTime: "12 min",
    author: "admin",
    sections: [
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "En person, der sidder ved et skrivebord med en bærbar computer og gennemgår sit budget eller sin lønseddel"
      },
      {
        type: 'text',
        content: `Har du nogensinde undret dig over, hvordan du kan få mest muligt ud af din løn – når skatten først er trukket? Mange oplever, at deres nettoløn ikke helt matcher forventningerne, hvilket gør det svært at skabe økonomisk overskud. I dette blogindlæg zoomer vi ind på fem konkrete tips, der hjælper dig med at <a href="/">beregne løn efter skat</a> og bruge dine penge optimalt. Du vil opdage, hvorfor brutto- vs. nettoløn er afgørende at forstå, hvordan fradrag og godtgørelser kan få din nettoløn til at vokse, og hvorfor det i nogle tilfælde kan være en god idé at fokusere på pensionsopsparingen.`
      },
      {
        type: 'text',
        content: `Undervejs viser vi også, hvordan du med fordel kan benytte <a href="/">Beregn løn efter skat</a> til at gennemskue, hvor meget du reelt får udbetalt – og hvordan eventuelle ændringer i indkomst, fradrag eller pensionsindbetalinger påvirker din økonomiske situation.`
      },
      {
        type: 'text',
        content: `Hvis du gerne vil undgå overraskelser på årsopgørelsen, få flere penge mellem hænderne i det daglige eller blot forstå sammenhængen mellem skat og din udbetalte løn bedre, så læs med. Vi giver dig de vigtigste redskaber, der kan gøre en mærkbar forskel for din privatøkonomi.`
      },
      {
        type: 'heading',
        content: '1. Kend forskellen på brutto- og nettoløn'
      },
      {
        type: 'text',
        content: `Når du ønsker at <a href="/">beregne løn efter skat</a>, er det afgørende at kende forskellen på bruttoløn og nettoløn:`
      },
      {
        type: 'text',
        content: `<strong>Bruttoløn:</strong> Det beløb, du tjener, før skat, arbejdsmarkedsbidrag (AM-bidrag), ATP og eventuelle andre lovpligtige fradrag.`
      },
      {
        type: 'text',
        content: `<strong>Nettoløn:</strong> Det beløb, du faktisk får udbetalt, efter alle fradrag og skatter er trukket.`
      },
      {
        type: 'text',
        content: `Mange stirrer sig blinde på bruttolønnen, men det er nettolønnen, der afspejler din reelle indkomst i hverdagen. Ved at bruge en pålidelig lønberegner, som den du finder hos <a href="/">Beregn løn efter skat</a>, kan du se netop, hvor meget du får udbetalt efter skat. Det er første skridt i at skabe et realistisk budget og undgå at overvurdere dit rådighedsbeløb.`
      },
      {
        type: 'heading',
        content: '2. Udnyt fradrag og godtgørelser optimalt'
      },
      {
        type: 'text',
        content: `Når du vil have mest muligt ud af din løn, er fradrag og godtgørelser nogle af de vigtigste håndtag at dreje på. De reducerer nemlig din skattepligtige indkomst, hvilket øger din nettoløn. Her er nogle af de mest udbredte fradrag og godtgørelser:`
      },
      {
        type: 'text',
        content: `<strong>Beskæftigelsesfradrag</strong><br/>
– Opnås automatisk, hvis du er i beskæftigelse. Beløbet varierer afhængigt af din indkomst.`
      },
      {
        type: 'text',
        content: `<strong>Kørselsfradrag (befordringsfradrag)</strong><br/>
– Har du mere end 24 km til og fra arbejde (12 km hver vej), kan du få et fradrag for transporten.`
      },
      {
        type: 'text',
        content: `<strong>Håndværkerfradrag (servicefradrag)</strong><br/>
– Gælder, hvis du fx får udført renoverings- eller serviceopgaver i dit hjem. Reglerne ændrer sig jævnligt, så hold dig opdateret.`
      },
      {
        type: 'text',
        content: `<strong>Fagforening og A-kasse</strong><br/>
– Kontingenter til fagforening og A-kasse er fradragsberettigede. Husk at justere fradraget, hvis du skifter fagforening.`
      },
      {
        type: 'text',
        content: `<strong>Renter og bidrag</strong><br/>
– Har du lånt penge til bolig eller studie, kan du ofte trække renterne fra i skat.`
      },
      {
        type: 'text',
        content: `Disse fradrag giver dig gode muligheder for at justere, når du <a href="/">beregner løn efter skat</a>. Sørg for at holde din forskudsopgørelse opdateret, så Skat ved, at du forventer at få disse fradrag. På den måde undgår du enten at betale for meget i skat løbende eller at stå med en stor restskat til sidst.`
      },
      {
        type: 'heading',
        content: '3. Overvej ekstra pensionsindbetaling – også når du beregner løn efter skat'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "Et billede af en sparegris eller et pensionsdokument, der illustrerer opsparing"
      },
      {
        type: 'text',
        content: `At prioritere pensionsopsparing kan lyde som et kedeligt tip, hvis du ønsker flere penge mellem hænderne nu og her. Men der er gode grunde til at have pensionen med i overvejelserne, når du regner på din løn efter skat:`
      },
      {
        type: 'text',
        content: `<strong>Nuværende skattefordel:</strong> Indbetaling til pension bliver typisk trukket af din bruttoløn, hvilket kan sænke din skattepligtige indkomst og dermed give dig en skattemæssig fordel.`
      },
      {
        type: 'text',
        content: `<strong>Fremtidig tryghed:</strong> Et større beløb på pensionskontoen sikrer dig flere muligheder som pensionist, og med rette planlægning får du dermed en mere rolig økonomisk tilværelse senere i livet.`
      },
      {
        type: 'text',
        content: `Vær realistisk i din vurdering: Hvis din økonomi er presset nu, kan det være bedre at fokusere på at stabilisere din lønseddel først. Men har du luft i budgettet, kan ekstra pensionsbidrag gøre en mærkbar forskel i det lange løb. Prøv at se, hvordan en øget pensionsindbetaling påvirker din nettoløn ved at bruge <a href="/">Beregn løn efter skat</a>. Så ved du præcis, om det giver mening i lige netop din situation.`
      },
      {
        type: 'heading',
        content: '4. Sådan undgår du ubehagelige overraskelser: Brug lønberegner og justér forskudsopgørelsen'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "Et skærmbillede af lønberegneren på Beregn løn efter skat, med felter til at taste løn, fradrag, pension osv."
      },
      {
        type: 'text',
        content: `En af de største fordele ved at <a href="/">beregne løn efter skat</a> jævnligt er, at du kan undgå store overraskelser, når årsopgørelsen fra Skat lander. Det gør du ved at:`
      },
      {
        type: 'text',
        content: `<strong>Brug en lønberegner</strong><br/>
– Hos <a href="/">Beregn løn efter skat</a> kan du hurtigt få et overblik over, hvor meget du reelt får udbetalt, når skatten er betalt.`
      },
      {
        type: 'text',
        content: `<strong>Opdatér din forskudsopgørelse</strong><br/>
– Har du skiftet arbejde, fået lønforhøjelse, ændret kørselsafstand til jobbet eller ændrede renteudgifter? Så skal du huske at justere dine oplysninger hos Skat.`
      },
      {
        type: 'text',
        content: `Hvis du ikke får justeret forskudsopgørelsen løbende, kan du ende med enten at betale for meget i skat – og dermed have færre penge i hverdagen – eller for lidt, hvilket kan resultere i en stor restskat senere. Ved at kombinere en opdateret forskudsopgørelse med en lønberegner kan du hele tiden holde styr på din lønseddel efter skat og sikre, at du hver måned får udbetalt det korrekte beløb.`
      },
      {
        type: 'heading',
        content: '5. Lav et realistisk budget og følg det'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "Et regneark eller budgetskema med indtægter og udgifter listet op"
      },
      {
        type: 'text',
        content: `Selvom det kan virke simpelt, er et velsammensat budget en af de mest effektive måder at få gavn af din løn efter skat. Når du har styr på dine faste indtægter, herunder præcis hvor meget du får udbetalt, kan du inddele pengene i kategorier som husleje, transport, mad, opsparing og forbrug.`
      },
      {
        type: 'text',
        content: `<strong>Kom godt i gang med budgettet:</strong><br/>
<strong>Start med din nettoløn</strong><br/>
– Find det korrekte tal via <a href="/">Beregn løn efter skat</a>.`
      },
      {
        type: 'text',
        content: `<strong>Identificér faste udgifter</strong><br/>
– Bolig, forsikringer, el, internet m.m. Disse omkostninger er svære at nedskalere fra måned til måned.`
      },
      {
        type: 'text',
        content: `<strong>Inkludér en fast opsparingspost</strong><br/>
– Uanset om det er et lille beløb, så gør opsparing til en vane.`
      },
      {
        type: 'text',
        content: `<strong>Hold øje med variable udgifter</strong><br/>
– Sæt et maksimum på fornøjelser og andre fleksible udgifter, så der er styr på økonomien.`
      },
      {
        type: 'text',
        content: `<strong>Følg op</strong><br/>
– Læg gerne en times tid ind i kalenderen hver måned til at gennemgå budgettet, så du kan regulere efter behov.`
      },
      {
        type: 'text',
        content: `Et godt budget skaber overblik og beskytter dig mod uforudsete udgifter, så du ikke behøver at optage dyre lån. Du vil desuden opdage, at det bliver nemmere at planlægge større køb, rejser eller opsparing til bolig, når du præcist ved, hvor meget du har til rådighed.`
      },
      {
        type: 'heading',
        content: 'Få mest muligt ud af din løn efter skat: Det vigtigste i kort form'
      },
      {
        type: 'text',
        content: `At <a href="/">beregne løn efter skat</a> er afgørende, hvis du vil undgå fejlskøn i din økonomi og maksimere dine muligheder. Her er en hurtig opsummering:`
      },
      {
        type: 'text',
        content: `<strong>Forstå brutto vs. netto</strong><br/>
– Ved at kende forskellen, kan du lave et realistisk budget.`
      },
      {
        type: 'text',
        content: `<strong>Husk fradrag og godtgørelser</strong><br/>
– Kørselsfradrag, håndværkerfradrag, fagforening og meget mere kan øge din nettoløn.`
      },
      {
        type: 'text',
        content: `<strong>Tænk på pensionsopsparing</strong><br/>
– Overvej, om en større pensionsindbetaling nu kan give mening på sigt og samtidig give en skattefordel.`
      },
      {
        type: 'text',
        content: `<strong>Brug en lønberegner og justér løbende</strong><br/>
– <a href="/">Beregn løn efter skat</a> hjælper dig med at se, hvad du får udbetalt, og en opdateret forskudsopgørelse sikrer, at du hverken betaler for meget eller for lidt i skat.`
      },
      {
        type: 'text',
        content: `<strong>Lav et solidt budget</strong><br/>
– Få styr på, hvordan dine penge bliver brugt, så du altid har råd til de vigtigste udgifter – og til lidt ekstra.`
      },
      {
        type: 'text',
        content: `Når du mestrer disse fem trin, har du skabt et stærkt fundament for en mere stabil og overskuelig privatøkonomi. Du vil opleve, at månedlige regninger føles mindre overvældende, og at du har bedre kontrol over din økonomiske fremtid.`
      },
      {
        type: 'heading',
        content: 'Afsluttende tanker'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "Et afsluttende billede eller grafik, der viser en tilfreds person med et budgetark eller en mobilapp for at illustrere økonomisk overskud og ro i sindet"
      },
      {
        type: 'text',
        content: `At <a href="/">beregne løn efter skat</a> behøver hverken at være svært eller tidskrævende, hvis du bruger de rette værktøjer og husker at holde dine oplysninger ajour. <a href="/">Beregn løn efter skat</a> gør processen både hurtig og ligetil, og kombinerer du det med en løbende justering af forskudsopgørelsen og et velovervejet budget, er du godt på vej mod en sund og stabil økonomi.`
      },
      {
        type: 'text',
        content: `Har du luft i budgettet, kan det give mening at skrue op for din pensionsopsparing og udnytte skattefordelen allerede nu. Har du omvendt brug for flere penge i hverdagen, kan det være smartere at undersøge alle dine fradrag og eventuelt skrue ned for pensionsindbetalingen midlertidigt. Det vigtigste er, at du træffer beslutninger på et informeret grundlag.`
      },
      {
        type: 'text',
        content: `Uanset hvor du starter, vil fokus på at <a href="/">beregne løn efter skat</a> og justere dine udgifter gøre en mærkbar forskel på både kort og lang sigt. God fornøjelse med at tage styringen over din egen økonomi!`
      }
    ]
  },
  "sadan-undgar-du-restskat": {
    id: 2,
    slug: "sadan-undgar-du-restskat",
    title: "Sådan undgår du restskat – 7 konkrete metoder til at holde styr på din skat og lønudbetaling",
    date: "2025-04-04",
    readTime: "10 min",
    author: "admin",
    sections: [
      {
        type: 'image',
        content: '',
        imageUrl: "/Blogpictures/blogpost2pic.png",
        imageAlt: "En person, der kigger bekymret på sin årsopgørelse på en laptop"
      },
      {
        type: 'text',
        content: `Har du prøvet at få en ærgerlig overraskelse i form af en restskat, når årsopgørelsen rammer din e-Boks? Du er langt fra alene. Mange glemmer at tilpasse deres forskudsopgørelse i løbet af året eller udnytter ikke deres fradrag fuldt ud. I dette blogindlæg får du en step-by-step guide til, hvordan du minimerer risikoen for restskat – og samtidig sikrer, at du får mest muligt ud af din løn efter skat.`
      },
      {
        type: 'text',
        content: `Undervejs vil du også se, hvordan du nemt kan bruge <a href="/">Beregn løn efter skat</a> til at tjekke din reelle nettoløn og holde øje med, om du betaler den rette skat hver måned.`
      },
      {
        type: 'heading',
        content: '1. Forstå hvorfor restskat opstår'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "/Blogpictures/blogpost2pic1.png",
        imageAlt: "Grafikken viser, hvordan skat løbende bliver betalt hen over året, og hvornår et hul opstår (for lidt betalt skat)."
      },
      {
        type: 'text',
        content: `En restskat opstår, når du i løbet af året har betalt for lidt i skat, sammenlignet med hvad du faktisk burde. Der kan være flere årsager til dette:`
      },
      {
        type: 'text',
        content: `<strong>Manglende opdatering af forskudsopgørelse:</strong> Har du fået en lønforhøjelse, skiftet job eller ændret kørselsafstand til arbejdet, kan din trækprocent og dit fradrag blive for lave eller for høje.`
      },
      {
        type: 'text',
        content: `<strong>Nye indtægter:</strong> Lejeindtægter, B-indkomst (f.eks. freelancearbejde), aktiegevinster og lignende kan nemt føre til underbetaling af skat, hvis de ikke er lagt ind i forskudsopgørelsen.`
      },
      {
        type: 'text',
        content: `<strong>Manglende udnyttelse af fradrag:</strong> Hvis du ikke får indberettet dine fradrag (f.eks. kørselsfradrag eller renter), kan du ende med en højere skattebetaling end nødvendigt – eller en restskat, hvis fradragene ikke er opgjort korrekt i årsopgørelsen.`
      },
      {
        type: 'text',
        content: `Når du kender de typiske faldgruber, kan du nemmere navigere uden om dem og sørge for at få betalt den rigtige skat løbende.`
      },
      {
        type: 'heading',
        content: '2. Opdater din forskudsopgørelse løbende'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "/Blogpictures/blogpost2pic2.png",
        imageAlt: "En person, der sidder ved et skrivebord med en bærbar computer og logger ind på skat.dk"
      },
      {
        type: 'text',
        content: `Det første skridt til at undgå restskat er at holde din forskudsopgørelse ajour. Du bør kigge på den ved følgende lejligheder:`
      },
      {
        type: 'text',
        content: `<strong>Nyt job eller lønstigning</strong><br/>
Hvis du skifter arbejde eller forhandler en højere løn hjem, skal du logge på skat.dk og tilrette din forskudsopgørelse, så den afspejler den nye løn.`
      },
      {
        type: 'text',
        content: `<strong>Ændret befordring</strong><br/>
Flytter du tættere på arbejde eller længere væk, påvirker det dit kørselsfradrag. Sørg for at angive antal kilometer korrekt, så du hverken får for meget eller for lidt fradrag.`
      },
      {
        type: 'text',
        content: `<strong>Nye renteudgifter</strong><br/>
Køber du ny bolig, omlægger dit lån eller optager forbrugslån, skal du også opdatere dine renteudgifter. Ellers risikerer du at gå glip af et fradrag, der kan mindske din restskat.`
      },
      {
        type: 'text',
        content: `<strong>Nye bijob eller freelanceindtægter</strong><br/>
Selvom dine ekstra indtægter måske virker små, kan de føre til restskat, hvis de ikke bliver indberettet. Husk at opdatere dine oplysninger, hver gang din indkomst ændrer sig.`
      },
      {
        type: 'text',
        content: `Når du justerer forskudsopgørelsen, beregner Skat en ny trækprocent og et nyt månedligt fradrag. På den måde kommer du tættere på at betale det præcise skattemæssige beløb hver eneste måned.`
      },
      {
        type: 'heading',
        content: '3. Brug en lønberegner som "alarmklokke"'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "/Blogpictures/beregnloenefterskatscreenshot.png",
        imageAlt: "Skærmbillede af Beregn løn efter skat-værktøjet"
      },
      {
        type: 'text',
        content: `Hemmeligheden bag at undgå restskat (og få mest ud af din løn) er at have et løbende overblik over, hvad du faktisk får udbetalt. Her er <a href="/">Beregn løn efter skat</a> et uundværligt værktøj.`
      },
      {
        type: 'text',
        content: `<strong>Regn hurtigt på, hvor meget du får udbetalt</strong><br/>
Ved at indtaste din bruttoløn, trækprocent, fradrag og eventuel pensionsindbetaling kan du på få sekunder se, hvor meget du reelt har mellem hænderne.`
      },
      {
        type: 'text',
        content: `<strong>Simulér ændringer</strong><br/>
Overvejer du at sætte dine pensionsindbetalinger op eller ned? Eller står du over for en lønstigning? Du kan teste forskellige scenarier og straks se, hvordan det påvirker din nettoløn.`
      },
      {
        type: 'text',
        content: `<strong>Få et realistisk budget</strong><br/>
Når du kender din nøjagtige nettoløn, undgår du at planlægge ud fra et for optimistisk (eller pessimistisk) beløb. Et realistisk udgangspunkt er det bedste værn mod økonomiske overraskelser.`
      },
      {
        type: 'heading',
        content: '4. Tjek dine fradrag – undgå at miste penge'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "En tjekliste med forskellige fradrag (kørselsfradrag, fagforening, renter osv.)"
      },
      {
        type: 'text',
        content: `Fradrag er en af de mest effektive metoder til at optimere din løn efter skat. Mange danskere overser dog nogle af de fradrag, de er berettigede til. Sørg især for at holde øje med:`
      },
      {
        type: 'text',
        content: `<strong>Kørselsfradrag (befordringsfradrag)</strong><br/>
Har du over 24 km til og fra arbejde (12 km hver vej), bør du regne ud, hvor mange dage du faktisk kører, og taste det ind på skat.dk.`
      },
      {
        type: 'text',
        content: `<strong>Fagforening og A-kasse</strong><br/>
Disse fradrag indtastes som regel automatisk, men skifter du fagforening eller a-kasse, skal du selv tjekke, at beløbene er opdaterede.`
      },
      {
        type: 'text',
        content: `<strong>Renter og bidrag på boliglån eller forbrugslån</strong><br/>
Rentefradraget kan være mange penge værd. Hvis du flytter bank eller omlægger lån, skal du sikre dig, at Skat har de korrekte oplysninger.`
      },
      {
        type: 'text',
        content: `<strong>Servicefradrag (tidligere håndværkerfradrag)</strong><br/>
Vær opmærksom på, om der er fradragsmuligheder for rengøring, havearbejde eller mindre håndværksopgaver. Reglerne skifter jævnligt, så læs de aktuelle betingelser hos Skattestyrelsen.`
      },
      {
        type: 'text',
        content: `Hvis du ikke selv får tilføjet dine fradrag, bliver de ikke automatisk taget højde for, og det kan resultere i en højere skattebetaling end nødvendigt. Omvendt kan for høje fradrag give en stor restskat.`
      },
      {
        type: 'heading',
        content: '5. Vær obs på ekstra indtægter – også små beløb tæller'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "En person, der modtager penge for en lille freelanceopgave eller via en online platform"
      },
      {
        type: 'text',
        content: `Mange har en tendens til at tænke: "Et par tusinde kroner tjent på hobbyprojekter eller salg på nettet kan vel ikke betyde så meget?" Men selv mindre beløb kan give en restskat, hvis de ikke er indberettede.`
      },
      {
        type: 'text',
        content: `<strong>B-indkomst</strong><br/>
Hvis du får indtægter, hvor der ikke trækkes A-skat, skal du selv sørge for, at der bliver betalt skat. Opdatér forskudsopgørelsen med et realistisk estimat, og betal eventuelt B-skat løbende.`
      },
      {
        type: 'text',
        content: `<strong>Lejeindtægter</strong><br/>
Udlejer du værelser via Airbnb eller hus/lejlighed privat, skal du huske at opgive dette. Der er ofte en skattefri bundgrænse, men alt over dette beløb er skattepligtigt.`
      },
      {
        type: 'text',
        content: `For at undgå en sur restskat kan det betale sig at bruge et regneark eller en simpel notat-app til løbende at holde styr på indtægter, der ikke allerede er indberettet af en arbejdsgiver.`
      },
      {
        type: 'heading',
        content: '6. Overvej frivillig indbetaling i tide'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "/Blogpictures/blogpost2pic3.png",
        imageAlt: "Et billede af en person, der logger ind på netbank for at foretage en indbetaling til Skat"
      },
      {
        type: 'text',
        content: `Hvis du opdager, at du har betalt for lidt i skat i løbet af året – måske fordi du har glemt at justere forskudsopgørelsen – kan du vælge at lave en frivillig indbetaling til Skat inden årets udgang (og også i starten af det nye år).`
      },
      {
        type: 'text',
        content: `<strong>Fordel: Slip for renter</strong><br/>
Restskat, der ikke betales frivilligt inden for Skats frister, pålægges typisk renter eller gebyrer. Det kan hurtigt løbe op, hvis du skylder et større beløb.`
      },
      {
        type: 'text',
        content: `<strong>Enkel proces</strong><br/>
Du kan lave en indbetaling via Skats hjemmeside eller din netbank. På den måde undgår du en pludselig regning senere.`
      },
      {
        type: 'text',
        content: `Det kræver selvfølgelig, at du har luft i budgettet, men det kan ende med at være en billigere løsning end at vente på en restskat med renter oveni.`
      },
      {
        type: 'heading',
        content: '7. Husk at holde øje med din pensionsindbetaling'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "En sparegris og et pensionsdokument for at illustrere opsparing til pension"
      },
      {
        type: 'text',
        content: `Pension kan være et overset kort i kampen mod restskat. Hvis du vælger at indbetale mere til pension (f.eks. ratepension eller livrente), vil det ofte mindske din skattepligtige indkomst og dermed øge din nettoløn i år. Dog er der et par ting at overveje:`
      },
      {
        type: 'text',
        content: `<strong>Fordel: Mindre skat nu</strong><br/>
Pensionsindbetalinger trækkes ofte fra din bruttoløn, hvilket kan give en lavere trækprocent og potentielt reducere risikoen for at lande i restskat.`
      },
      {
        type: 'text',
        content: `<strong>Ulempe: Mindre rådighedsbeløb</strong><br/>
Pengene er bundet i din pension, og du kan ikke bruge dem frit her og nu. Det kan være en udfordring, hvis din økonomi er presset.`
      },
      {
        type: 'text',
        content: `Hvis du vil justere din pensionsindbetaling, så tjek altid, hvordan det påvirker din nettoløn ved hjælp af <a href="/">Beregn løn efter skat</a>. Så får du et klart billede af, om en øget (eller sænket) pension giver mening for dig lige nu.`
      },
      {
        type: 'heading',
        content: 'Opsummering: 7 metoder til at undgå restskat'
      },
      {
        type: 'text',
        content: `1. Opdater din forskudsopgørelse ved lønændringer, jobskifte eller ændrede udgifter/indtægter.`
      },
      {
        type: 'text',
        content: `2. Brug en lønberegner (f.eks. <a href="/">Beregn løn efter skat</a>) for at holde styr på din nettoløn.`
      },
      {
        type: 'text',
        content: `3. Tjek dine fradrag – særligt kørselsfradrag, fagforening, A-kasse, renter og servicefradrag.`
      },
      {
        type: 'text',
        content: `4. Husk ekstra indtægter: Selv små beløb kan give restskat, hvis de ikke bliver indberettet.`
      },
      {
        type: 'text',
        content: `5. Overvej frivillig indbetaling for at undgå dyre renter på restskat.`
      },
      {
        type: 'text',
        content: `6. Justér pensionsindbetaling for en eventuel skattefordel nu – men husk, at pengene først kan bruges senere.`
      },
      {
        type: 'text',
        content: `7. Følg løbende med i din økonomiske situation, og vær ikke bange for at kontakte Skattestyrelsen ved spørgsmål.`
      },
      {
        type: 'text',
        content: `Ved at kombinere disse syv råd er du godt på vej til at slippe for den klassiske restskat og samtidig maksimere den løn, du får udbetalt hver eneste måned.`
      },
      {
        type: 'heading',
        content: 'Afsluttende tanker'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "/Blogpictures/blogpost2pic4.png",
        imageAlt: "En glad person, der tjekker sin økonomiske status på computeren og slipper for restskat"
      },
      {
        type: 'text',
        content: `At undgå restskat handler i høj grad om løbende opdatering og økonomisk overblik. De fleste overraskelser i årsopgørelsen skyldes, at folk glemmer at tilføje nyt arbejde, stigende løn, B-indkomst eller udgifter, der påvirker deres trækprocent. Med <a href="/">Beregn løn efter skat</a> har du et værktøj, der hurtigt og nemt viser, hvad du får i hånden hver måned – og dermed også, om du betaler for meget eller for lidt i skat.`
      },
      {
        type: 'text',
        content: `Skulle du have spørgsmål, er det altid en god idé at kontakte en professionel rådgiver eller Skattestyrelsen. Vores beregner er et solidt udgangspunkt, men din helt personlige situation kan kræve et nærmere kig på specifikke regler og satser.`
      },
      {
        type: 'text',
        content: `God fornøjelse med at få styr på din skat og gøre mest muligt ud af din løn!`
      }
    ]
  },
  "sadan-optimerer-du-din-hverdagsokonomi-efter-skat": {
    id: 3,
    slug: "sadan-optimerer-du-din-hverdagsokonomi-efter-skat",
    title: "Sådan optimerer du din hverdagsøkonomi efter skat – den komplette guide",
    date: "2025-05-24",
    readTime: "15 min",
    author: "admin",
    sections: [
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "En person der sidder ved et skrivebord og arbejder med budget og økonomisk planlægning"
      },
      {
        type: 'text',
        content: `Din nettoløn – det beløb, der rammer kontoen efter alle skatter og bidrag – er den mest ærlige indikator for, hvor meget økonomisk råderum du har til både hverdag og fremtid. Denne guide går i dybden med, hvordan en systematisk beregning af løn efter skat kan styrke din økonomi, fra de små daglige valg til de store livsbeslutninger.`
      },
      {
        type: 'heading',
        content: '1. Nettolønnen fortæller sandheden – men kun hvis du kender detaljerne'
      },
      {
        type: 'text',
        content: `Når lønsedlen tikker ind, kigger de fleste på bundlinjen. Men et hurtigt blik skjuler ofte, hvordan marginalskat, bundskat og særlige bidrag påvirker din disponible indkomst.`
      },
      {
        type: 'text',
        content: `<div style="overflow-x: auto; margin: 24px 0;">
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <th style="padding: 16px; text-align: left; font-weight: 600;">Påvirkningsfaktor</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Kort forklaring</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Typisk effekt på nettoløn</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">Kommunal- & kirkeskat</td>
      <td style="padding: 16px;">Varierer fra kommune til kommune</td>
      <td style="padding: 16px;">24–27 % af bruttoindkomsten</td>
    </tr>
    <tr style="background-color: #f8fafc; border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">AM‑bidrag</td>
      <td style="padding: 16px;">8 % af bruttolønnen før skat</td>
      <td style="padding: 16px;">Flad sats, påvirker alle</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">Job- & beskæftigelsesfradrag</td>
      <td style="padding: 16px;">Gradvist udfaset ved højere løn</td>
      <td style="padding: 16px;">Kan øge nettolønnen med >1.000 kr./md.</td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="padding: 16px; font-weight: 500;">ATP & pensionsbidrag</td>
      <td style="padding: 16px;">Obligatorisk/overenskomstbestemt</td>
      <td style="padding: 16px;">Bygger pension, men trækker kontanter nu</td>
    </tr>
  </tbody>
</table>
</div>`
      },
      {
        type: 'text',
        content: `Ved at bruge <a href="/">beregnloenefterskat.dk</a> kan du simulere virkningen af ændringer i løn, fradrag og kommune, før de sker – og dermed forhandle klogere, skifte job med ro i maven og planlægge opsparing realistisk.`
      },
      {
        type: 'heading',
        content: '2. Byg et budget, der holder – selv på en regnvejrsdag'
      },
      {
        type: 'text',
        content: `Et robust budget står på disse tre søjler:`
      },
      {
        type: 'text',
        content: `<strong>Faste udgifter</strong> – husleje, realkredit, forsikringer, fagforening.<br/>
<strong>Variable udgifter</strong> – mad, transport, streaming, cafébesøg.<br/>
<strong>Opsparing & buffer</strong> – minimum 10 % af nettolønnen, ideelt 20 %.`
      },
      {
        type: 'text',
        content: `Husk: Opsparingen er ikke blot til ferier, men fungerer som stødpude mod uforudsete regninger og et springbræt til investeringer.`
      },
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "Et regneark eller budgetskema med indtægter og udgifter listet op"
      },
      {
        type: 'text',
        content: `Sæt tallene ind i et regneark eller en budget‑app samme dag, du kender din nøjagtige nettoløn. Matcher de tre søjler ikke den faktiske indkomst, skal enten indtægt, udgift eller tidshorisont justeres – ellers skrider planen i praksis.`
      },
      {
        type: 'heading',
        content: '3. Multiplicer sikkerheden med en solid likviditetsbuffer'
      },
      {
        type: 'text',
        content: `Selv det bedste budget kan blive ramt af tandlægeregninger, ødelagte hvidevarer eller perioder med sygdom. En buffer på 1‑2 måneders nettoløn betyder, at uforudsete hændelser ikke sender dig i minus.`
      },
      {
        type: 'text',
        content: `<strong>Placering:</strong> En højrentekonto giver lidt afkast uden kursrisiko.<br/>
<strong>Metode:</strong> Gem faste overførsler som "regning" i netbanken – så føles det som en fast udgift, ikke en valgfri opsparing.<br/>
<strong>Tjekpunkt:</strong> Justér beløbet op, når lønnen stiger, eller livsomstændigheder ændrer sig (fx familieforøgelse).`
      },
      {
        type: 'heading',
        content: '4. Når måneden bliver lang – beslut med tal, ikke mavefornemmelser'
      },
      {
        type: 'text',
        content: `Mange oplever måneder, hvor udgifterne kommer hurtigere end lønnen. Før du finansierer hullet, bør du starte med løn‑efter‑skat‑beregningen:`
      },
      {
        type: 'text',
        content: `<ul style="margin: 16px 0; padding-left: 24px;">
<li style="margin-bottom: 8px;"><strong>Kortlæg det præcise underskud efter skat</strong> – ikke det runde gæt.</li>
<li style="margin-bottom: 8px;"><strong>Beregn indhentningstid uden lån</strong> – kan du udligne på 1‑3 måneder ved stram budgettering?</li>
<li style="margin-bottom: 8px;"><strong>Undersøg finansieringsomkostning</strong> – hvad koster det i kroner og øre?</li>
</ul>`
      },
      {
        type: 'text',
        content: `Hvis der stadig er behov for at sammenligne kortfristede finansieringsmuligheder, kan du indtaste tallene i en <a href="https://www.kviklaanberegner.dk/" target="_blank" rel="noopener noreferrer">kviklån beregner</a>. På den måde får du et nøgternt billede af totalomkostningen, inden du træffer den endelige beslutning – og du holder fokus på nettolønnen som kompas.`
      },
      {
        type: 'heading',
        content: '5. Fem hurtige måder at få mere ud af din nettoløn'
      },
      {
        type: 'text',
        content: `<ul style="margin: 16px 0; padding-left: 24px;">
<li style="margin-bottom: 12px;"><strong>Udnyt bruttolønsordninger</strong> til fx avis, bredbånd eller elbil – men kun hvis ydelsen reelt erstatter en privat udgift.</li>
<li style="margin-bottom: 12px;"><strong>Optimer fradrag</strong> – transport, A‑kasse, gaver til velgørenhed og håndværkerfradrag kan sammenlagt hæve nettolønnen flere hundrede kroner om måneden.</li>
<li style="margin-bottom: 12px;"><strong>Automatisér opsparing</strong> – løft satsen 1‑2 % hvert kvartal. Små skridt er lettere at fastholde.</li>
<li style="margin-bottom: 12px;"><strong>Forhandl personalegoder</strong> – sundhedsforsikring eller hjemmearbejdsudstyr kan være billigere i bruttoløn end i privat køb.</li>
<li style="margin-bottom: 12px;"><strong>Minimer faste abonnementer</strong> – gennemgå dem kvartalsvis; selv små beløb summer over tid.</li>
</ul>`
      },
      {
        type: 'heading',
        content: '6. Kend dine fradrag og bundgrænser – undgå de klassiske fejl'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "En tjekliste med forskellige fradrag og skatteoplysninger"
      },
      {
        type: 'text',
        content: `<strong>Almindelige oversete fradrag</strong>`
      },
      {
        type: 'text',
        content: `<strong>Befordringsfradrag:</strong> Selv få kilometer over bundgrænsen kan give flere tusind kroner årligt.<br/>
<strong>Rejsefradrag (2025-regler):</strong> Tjenesterejser over 24 timer med overnatning.<br/>
<strong>Servicefradrag:</strong> Håndværkerarbejde, rengøring, vinduespudsning – men husk elektronisk betaling.`
      },
      {
        type: 'text',
        content: `<strong>Typiske fejl</strong>`
      },
      {
        type: 'text',
        content: `<strong>Glemte pensions‑/kapitalafkastskatter</strong> – glemmer du at indregne dem, virker nettolønnen højere, end den er.<br/>
<strong>Blandet erhverv/privat kørsel</strong> – for få kilometer noteret kan koste dyrt ved kontrol.<br/>
<strong>Ikke at opdatere forskudsopgørelsen</strong> – medfører restskat og kassekreditrenter.`
      },
      {
        type: 'heading',
        content: '7. Pension, investeringer og marginalskat – tænk fremad'
      },
      {
        type: 'text',
        content: `<strong>Pension som lønopsparing:</strong> Indbetaling i ratepension eller livrente kan give fradrag på op til 52 %. Men overvej likviditetsbehov, før du binder midlerne.`
      },
      {
        type: 'text',
        content: `<strong>Aktiesparekonto versus frie midler:</strong> 17 % lagerbeskattet skat kontra personlig skat; hvornår betaler det sig?`
      },
      {
        type: 'text',
        content: `<strong>Virksomme investeringer:</strong> Lave forskudsskattebetalinger når afkastet først kommer senere (fx ejendomsprojekter).`
      },
      {
        type: 'text',
        content: `Tip: Brug et regneark med marginalskattesats, forventet afkast og tidshorisont for at se, hvordan 1.000 kr. investeret netto udvikler sig.`
      },
      {
        type: 'heading',
        content: '8. Lønsimulering før jobskifte eller sideprojekt'
      },
      {
        type: 'text',
        content: `Inden du siger ja til et jobtilbud, der ser 5.000 kr. højere ud i brutto, bør du teste:`
      },
      {
        type: 'text',
        content: `<div style="overflow-x: auto; margin: 24px 0;">
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <th style="padding: 16px; text-align: left; font-weight: 600;">Scenarie</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Bruttoløn</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Nettoløn</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Differens</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">Nu</td>
      <td style="padding: 16px;">38.000 kr.</td>
      <td style="padding: 16px;">26.500 kr.</td>
      <td style="padding: 16px;">–</td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="padding: 16px; font-weight: 500;">Tilbud</td>
      <td style="padding: 16px;">43.000 kr.</td>
      <td style="padding: 16px;">29.200 kr.</td>
      <td style="padding: 16px; color: #059669; font-weight: 600;">+2.700 kr.</td>
    </tr>
  </tbody>
</table>
</div>`
      },
      {
        type: 'text',
        content: `Læringen: Den højere marginalskat betyder, at de 5.000 kr. ekstra brutto kun giver ~2.700 kr. i hånden. Vurdér om arbejdsopgaver, transporttid og pensionsvilkår opvejer forskellen.`
      },
      {
        type: 'text',
        content: `Ved sideprojekter (freelance, hobbyindtægt) skal du huske B‑skatten. Sæt den til side ved indtægten, så du ikke bliver overrasket året efter.`
      },
      {
        type: 'heading',
        content: '9. Brug teknologi til at holde styr på tallene i realtid'
      },
      {
        type: 'text',
        content: `<strong>Skatteappens forskudsopgørelse:</strong> Ret tallene, når løn, fradrag eller civilstatus ændrer sig.<br/>
<strong>Finans‑dashboards:</strong> Synkroniser løn‑ og bankkonti, så dit nettobudget opdateres automatisk.<br/>
<strong>Notifikationer:</strong> Sæt alerts op for saldo under forbrugs‑ eller buffergrænsen – det er tidligere varsel end kontoudtoget.`
      },
      {
        type: 'heading',
        content: '10. Gør økonomien fremtidssikret med en plan for store milepæle'
      },
      {
        type: 'image',
        content: '',
        imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        imageAlt: "En familie der planlægger deres økonomiske fremtid"
      },
      {
        type: 'text',
        content: `<div style="overflow-x: auto; margin: 24px 0;">
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <th style="padding: 16px; text-align: left; font-weight: 600;">Milepæl</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Tidshorisont</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Forberedelse</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">Barsel</td>
      <td style="padding: 16px;">9‑12 mdr. før</td>
      <td style="padding: 16px;">Opspar min. 3 måneders nettoløn og tjek barselsdagpenge</td>
    </tr>
    <tr style="background-color: #f8fafc; border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">Boligkøb</td>
      <td style="padding: 16px;">1‑3 år</td>
      <td style="padding: 16px;">Udbetaling 5‑10 % + buffer til omkostninger</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">Pension</td>
      <td style="padding: 16px;">10‑40 år</td>
      <td style="padding: 16px;">Udnyt arbejdsgiverbidrag fuldt ud, tjek investeringsprofil</td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="padding: 16px; font-weight: 500;">Sabbatår/studie</td>
      <td style="padding: 16px;">1‑2 år</td>
      <td style="padding: 16px;">Simuler SU/ingen løn i beregner, sæt målopsparing</td>
    </tr>
  </tbody>
</table>
</div>`
      },
      {
        type: 'heading',
        content: 'Afslutning'
      },
      {
        type: 'text',
        content: `Regelmæssige beregninger af løn efter skat – kombineret med realistisk budget og rettidige fradrag – giver dig overblik, ro i maven og bedre beslutninger, når livet eller markedet byder på forandringer. Skulle der opstå behov for kortfristet finansiering, kan en <a href="https://www.kviklaanberegner.dk/" target="_blank" rel="noopener noreferrer">kviklån beregner</a> på få sekunder vise præcis, hvad lånet vil koste. Ved at holde nettolønnen i centrum og lade tal frem for følelser styre, skaber du en stærk platform for økonomisk trivsel både nu og i fremtiden.`
      }
    ]
  }
};

const BlogPost = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    setFadeIn(true);
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [slug]);

  // If the post doesn't exist, redirect to blog index
  useEffect(() => {
    if (slug && !blogPosts[slug]) {
      navigate('/blog');
    }
  }, [slug, navigate]);

  if (!slug || !blogPosts[slug]) {
    return null; // This will be caught by the above useEffect and redirected
  }

  const post = blogPosts[slug];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('da-DK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to safely render HTML content
  const renderHTML = (html: string) => {
    return { __html: html };
  };

  return (
    <>
      <SEO 
        title={slug === "sadan-undgar-du-restskat" 
          ? `Sådan undgår du restskat | 7 konkrete metoder | Beregn Løn Efter Skat 2025`
          : slug === "sadan-optimerer-du-din-hverdagsokonomi-efter-skat"
          ? `Sådan optimerer du din økonomi efter skat i 2025`
          : `5 tips til at optimere din privatøkonomi | Beregn Løn Efter Skat`}
        description={slug === "sadan-undgar-du-restskat"
          ? "Undgå restskat med vores 7 konkrete metoder. Lær at opdatere forskudsopgørelsen, udnytte fradrag og holde styr på din skat. Se hvordan du beregner din reelle løn efter skat i 2025."
          : slug === "sadan-optimerer-du-din-hverdagsokonomi-efter-skat"
          ? "Få styr på din nettoløn, budget, fradrag og finansielle beslutninger. Brug smarte værktøjer og få mere ud af pengene – uden at gå på kompromis."
          : "Få 5 effektive tips til at optimere din løn efter skat. Lær at udnytte fradrag, forstå nettoløn vs. bruttoløn og skab et stærkere økonomisk fundament. Beregn din aktuelle løn efter skat i 2025 her!"}
      />
      <Header />
      
      <main className={`container mx-auto px-4 py-8 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link 
              to="/blog"
              className="inline-flex items-center text-sm text-primary hover:underline mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Tilbage til alle indlæg</span>
            </Link>
          </div>
          
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1 text-primary" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-primary" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-primary" />
                  <span>{post.readTime} læsetid</span>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {post.sections.map((section, index) => {
                  if (section.type === 'text') {
                    return (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={renderHTML(section.content)}
                        className="mb-4"
                      />
                    );
                  } else if (section.type === 'heading') {
                    return (
                      <h2 
                        key={index} 
                        className="text-2xl font-bold mt-8 mb-4 text-gray-800"
                      >
                        {section.content}
                      </h2>
                    );
                  } else if (section.type === 'image') {
                    return (
                      <div key={index} className="my-6">
                        <img
                          src={section.imageUrl}
                          alt={section.imageAlt}
                          className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                        {section.imageAlt && (
                          <p className="text-sm text-gray-500 mt-2 text-center italic">
                            {section.imageAlt}
                          </p>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
                <p>Made by {post.author}, udgivet på <Link to="/" className="text-primary hover:underline">Beregn løn efter skat</Link></p>
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPost; 