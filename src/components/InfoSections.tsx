export const InfoSections = () => {
  const keywords = [
    "løn efter skat",
    "beregn løn efter skat",
    "førtidspension efter skat",
    "udbetalt efter skat",
    "hvad får jeg udbetalt efter skat",
    "beregn månedsløn efter skat"
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-primary">Relevante søgeord</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className="bg-muted p-3 rounded-md text-gray-700 text-sm"
            >
              {keyword}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-primary">
          Sådan fungerer beregneren
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Vores beregner hjælper dig med at estimere din månedlige nettoløn efter skat. 
            Her er hvordan den virker:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Løn før skat:</strong> Start med at indtaste din bruttoløn - det er det beløb, du har aftalt med din arbejdsgiver.
            </li>
            <li>
              <strong>Fradrag:</strong> Indtast dine månedlige fradrag, som reducerer din skattepligtige indkomst.
            </li>
            <li>
              <strong>Trækprocent:</strong> Din personlige trækprocent fra dit skattekort bestemmer, hvor meget skat der skal betales.
            </li>
            <li>
              <strong>Pension:</strong> Hvis du indbetaler til pension, kan du angive procentsatsen her.
            </li>
          </ul>
          <p className="mt-4">
            Beregneren tager højde for alle disse faktorer og giver dig et præcist estimat af din 
            månedlige udbetaling efter skat. Dette hjælper dig med at planlægge din økonomi mere effektivt.
          </p>
        </div>
      </div>
    </div>
  );
};