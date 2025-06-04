import { BlogPost } from './types';

export const understandPayslipBlogPost: BlogPost = {
  id: 4,
  slug: "guide-til-at-forstaa-din-lonseddel",
  title: "Guide til at forstå din lønseddel – hvad betyder tallene, og hvordan påvirker de din økonomi?",
  date: "2025-05-25",
  readTime: "8 min",
  author: "admin",
  sections: [
    {
      type: 'image',
      content: '',
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      imageAlt: "En person, der gennemgår sin lønseddel på en computer eller på papir"
    },
    {
      type: 'text',
      content: `Din lønseddel er langt mere end blot et kvitteringsbevis for dit arbejde – den er en detaljeret rapport over din økonomiske virkelighed. For mange kan lønsedlen dog virke som et forvirrende dokument fyldt med forkortelser, procentsatser og tal, der tilsyneladende ikke hænger sammen. I denne guide tager vi lønsedlen fra hinanden, post for post, og forklarer, hvordan hvert element påvirker dit rådighedsbeløb.`
    },
    {
      type: 'text',
      content: `Når du forstår din lønseddel fuldt ud, får du et meget bedre overblik over din økonomi og kan træffe mere informerede beslutninger om budget, opsparing og fremtidige jobvalg. Vi vil også vise dig, hvordan du nemt kan bruge <a href="/">Beregn løn efter skat</a> til at simulere ændringer i din løn og se, hvordan de påvirker dit månedlige budget.`
    },
    {
      type: 'heading',
      content: 'Bruttoløn vs. nettoløn – det vigtigste at forstå'
    },
    {
      type: 'text',
      content: `Den største forskel på lønsedlen er mellem bruttoløn og nettoløn:`
    },
    {
      type: 'text',
      content: `<strong>Bruttoløn:</strong> Det samlede beløb, du tjener, før skat og andre fradrag. Dette er det beløb, du forhandler med din arbejdsgiver.`
    },
    {
      type: 'text',
      content: `<strong>Nettoløn:</strong> Det beløb, der rent faktisk bliver overført til din bankkonto, efter alle fradrag er trukket fra.`
    },
    {
      type: 'text',
      content: `Mange laver den fejl at budgettere ud fra bruttolønnen og bliver derfor overraskede over, hvor lidt de faktisk får udbetalt. Det er nettolønnen, der afgør, hvor mange penge du har til rådighed i hverdagen.`
    },
    {
      type: 'heading',
      content: 'De vigtigste fradrag på din lønseddel'
    },
    {
      type: 'text',
      content: `Din lønseddel indeholder typisk følgende fradrag, der reducerer din bruttoløn til nettoløn:`
    },
    {
      type: 'text',
      content: `<strong>AM-bidrag (Arbejdsmarkedsbidrag)</strong><br/>
AM-bidraget er på 8 % af din bruttoløn og betales, før der beregnes indkomstskat. Dette bidrag finansierer blandt andet dagpenge og beskæftigelsesindsatsen.`
    },
    {
      type: 'text',
      content: `<strong>Indkomstskat</strong><br/>
Din indkomstskat består af flere komponenter:`
    },
    {
      type: 'text',
      content: `<ul style="margin: 16px 0; padding-left: 24px;">
<li style="margin-bottom: 8px;"><strong>Bundskat:</strong> 12,11 % af din skattepligtige indkomst</li>
<li style="margin-bottom: 8px;"><strong>Topskat:</strong> 15 % af den del af indkomsten, der overstiger topskattegrænsen (ca. 568.900 kr. i 2025)</li>
<li style="margin-bottom: 8px;"><strong>Kommuneskat:</strong> Varierer mellem kommuner, typisk 22-27 %</li>
<li style="margin-bottom: 8px;"><strong>Kirkeskat:</strong> Omkring 0,7-1,4 %, hvis du er medlem af folkekirken</li>
</ul>`
    },
    {
      type: 'text',
      content: `<strong>ATP (Arbejdsmarkedets Tillægspension)</strong><br/>
ATP er en obligatorisk pensionsordning. Som fuldtidsansat betaler du typisk omkring 1.135 kr. om året (ca. 95 kr. om måneden).`
    },
    {
      type: 'text',
      content: `<strong>Arbejdsmarkedspension</strong><br/>
De fleste ansatte betaler til en arbejdsmarkedspension gennem deres overenskomst. Både du og din arbejdsgiver bidrager, typisk med 4 % hver (i alt 8 % af lønnen).`
    },
    {
      type: 'heading',
      content: 'Fradrag, der kan øge din nettoløn'
    },
    {
      type: 'image',
      content: '',
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      imageAlt: "En oversigt over forskellige skattefradrag og deres påvirkning på lønsedlen"
    },
    {
      type: 'text',
      content: `Din lønseddel kan også indeholde fradrag, der reducerer din skattepligtige indkomst og dermed øger din nettoløn:`
    },
    {
      type: 'text',
      content: `<strong>Beskæftigelsesfradrag</strong><br/>
Dette er et automatisk fradrag, der gives til alle lønmodtagere. I 2025 er det maksimale beskæftigelsesfradrag på 46.700 kr. årligt.`
    },
    {
      type: 'text',
      content: `<strong>Kørselsfradrag</strong><br/>
Hvis du kører mere end 24 km til og fra arbejde dagligt (12 km hver vej), kan du få kørselsfradrag. Dette fremgår som en reduktion af din skattepligtige indkomst.`
    },
    {
      type: 'text',
      content: `<strong>A-kasse og fagforening</strong><br/>
Kontingenter til A-kasse og fagforening er fradragsberettigede og vil fremgå af din lønseddel, hvis de betales via løntræk.`
    },
    {
      type: 'heading',
      content: 'Sådan læser du tallene på din lønseddel'
    },
    {
      type: 'text',
      content: `<div style="overflow-x: auto; margin: 24px 0;">
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <th style="padding: 16px; text-align: left; font-weight: 600;">Lønseddel-post</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Hvad betyder det?</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Påvirkning på nettoløn</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">Bruttoløn</td>
      <td style="padding: 16px;">Din samlede løn før fradrag</td>
      <td style="padding: 16px;">Udgangspunkt for alle beregninger</td>
    </tr>
    <tr style="background-color: #f8fafc; border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">AM-bidrag</td>
      <td style="padding: 16px;">8 % til arbejdsmarkedet</td>
      <td style="padding: 16px; color: #dc2626;">Reducerer udbetalingen</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">Skat</td>
      <td style="padding: 16px;">Samlet indkomstskat</td>
      <td style="padding: 16px; color: #dc2626;">Største reduktion</td>
    </tr>
    <tr style="background-color: #f8fafc; border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">ATP</td>
      <td style="padding: 16px;">Obligatorisk pension</td>
      <td style="padding: 16px; color: #dc2626;">Lille månedlig reduktion</td>
    </tr>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">Pension</td>
      <td style="padding: 16px;">Arbejdsmarkedspension</td>
      <td style="padding: 16px; color: #dc2626;">Reducerer nu, gavner senere</td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="padding: 16px; font-weight: 500;">Nettoløn</td>
      <td style="padding: 16px;">Udbetalt beløb</td>
      <td style="padding: 16px; color: #059669; font-weight: 600;">Dit rådighedsbeløb</td>
    </tr>
  </tbody>
</table>
</div>`
    },
    {
      type: 'heading',
      content: 'Almindelige fejl og misforståelser'
    },
    {
      type: 'text',
      content: `<strong>Fejl 1: At tro, topskat betyder 52 % i skat</strong><br/>
Topskatten på 15 % lægges oveni kommuneskat og bundskat, men kun af den del af indkomsten, der overstiger topskattegrænsen. Du betaler ikke 52 % i skat af hele din løn.`
    },
    {
      type: 'text',
      content: `<strong>Fejl 2: At glemme AM-bidraget</strong><br/>
AM-bidraget på 8 % trækkes før skatteberegningen, så det påvirker både din skattepligtige indkomst og din nettoløn.`
    },
    {
      type: 'text',
      content: `<strong>Fejl 3: At forveksle brutto- og nettopension</strong><br/>
Pensionsindbetalinger reducerer din skattepligtige indkomst (bruttofradrag), men påvirker stadig din nettoløn, da pengene bliver "sparet væk" på din pensionskonto.`
    },
    {
      type: 'heading',
      content: 'Sådan bruger du lønsedlen til bedre økonomi'
    },
    {
      type: 'image',
      content: '',
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      imageAlt: "En person, der bruger sin lønseddel til at lave et budget"
    },
    {
      type: 'text',
      content: `<strong>1. Lav et realistisk budget</strong><br/>
Brug din nettoløn – ikke bruttolønnen – som udgangspunkt for dit månedlige budget. Kun nettolønnen afspejler, hvad du faktisk har til rådighed.`
    },
    {
      type: 'text',
      content: `<strong>2. Identificer optimeringsmuligheder</strong><br/>
Se på dine fradrag og overvej, om der er muligheder for at øge dem lovligt. Kørselsfradrag, fagforening og andre fradragsberettigede udgifter kan øge din nettoløn.`
    },
    {
      type: 'text',
      content: `<strong>3. Simulér ændringer</strong><br/>
Før du accepterer en lønstigning eller overvejer at ændre din pensionsindbetaling, kan du bruge <a href="/">Beregn løn efter skat</a> til at se den præcise påvirkning på din nettoløn.`
    },
    {
      type: 'text',
      content: `<strong>4. Hold øje med trækprocenten</strong><br/>
Hvis din trækprocent ikke matcher din faktiske skattesituation, kan du ende med restskat eller få for lidt udbetalt løbende.`
    },
    {
      type: 'heading',
      content: 'Eksempel: Sådan påvirker en lønstigning din nettoløn'
    },
    {
      type: 'text',
      content: `Lad os se på et konkret eksempel for at illustrere, hvordan marginalskat påvirker din reelle lønstigning:`
    },
    {
      type: 'text',
      content: `<div style="overflow-x: auto; margin: 24px 0;">
<table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
      <th style="padding: 16px; text-align: left; font-weight: 600;">Scenarie</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Bruttoløn/måned</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Nettoløn/måned</th>
      <th style="padding: 16px; text-align: left; font-weight: 600;">Forskel</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 16px; font-weight: 500;">Før stigning</td>
      <td style="padding: 16px;">40.000 kr.</td>
      <td style="padding: 16px;">27.800 kr.</td>
      <td style="padding: 16px;">–</td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="padding: 16px; font-weight: 500;">Efter stigning (+3.000 kr.)</td>
      <td style="padding: 16px;">43.000 kr.</td>
      <td style="padding: 16px;">29.600 kr.</td>
      <td style="padding: 16px; color: #059669; font-weight: 600;">+1.800 kr.</td>
    </tr>
  </tbody>
</table>
</div>`
    },
    {
      type: 'text',
      content: `Som du kan se, giver en bruttolønssstigning på 3.000 kr. kun 1.800 kr. ekstra i nettoløn på grund af marginalskat. Det er vigtigt at kende denne forskel, når du forhandler løn eller sammenligner jobtilbud.`
    },
    {
      type: 'heading',
      content: 'Hvordan forskellige faktorer påvirker din lønseddel'
    },
    {
      type: 'text',
      content: `<strong>Kommune</strong><br/>
Din bopælskommune afgør din kommuneskat. Flytter du til en kommune med lavere skat, kan du få mere udbetalt uden lønændring.`
    },
    {
      type: 'text',
      content: `<strong>Civilstand</strong><br/>
Gift/samlevende kan have andre fradragsmuligheder end enlige, hvilket kan påvirke din nettoløn.`
    },
    {
      type: 'text',
      content: `<strong>Børn</strong><br/>
Børnetilskud og andre familieydelser påvirker ikke din lønseddel direkte, men øger din samlede disponible indkomst.`
    },
    {
      type: 'heading',
      content: 'Afsluttende råd'
    },
    {
      type: 'image',
      content: '',
      imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      imageAlt: "En person, der har fået styr på sin økonomiske situation og er tilfreds"
    },
    {
      type: 'text',
      content: `At forstå din lønseddel er første skridt mod bedre økonomisk styring. Når du ved, hvor dine penge går hen, og hvordan forskellige faktorer påvirker din nettoløn, kan du træffe mere informerede beslutninger om:`
    },
    {
      type: 'text',
      content: `<ul style="margin: 16px 0; padding-left: 24px;">
<li style="margin-bottom: 8px;">Lønforhandling og jobskifte</li>
<li style="margin-bottom: 8px;">Pensionsindbetalinger og opsparing</li>
<li style="margin-bottom: 8px;">Valg af bopæl og fradragsmuligheder</li>
<li style="margin-bottom: 8px;">Månedligt budget og forbrug</li>
</ul>`
    },
    {
      type: 'text',
      content: `Husk at bruge <a href="/">Beregn løn efter skat</a> til at simulere ændringer, før du træffer store beslutninger. På den måde kan du se de præcise konsekvenser for din økonomi og undgå ubehagelige overraskelser.`
    },
    {
      type: 'text',
      content: `En god forståelse af din lønseddel giver dig magt over din økonomi og hjælper dig med at optimere din situation for både nuet og fremtiden.`
    }
  ]
}; 