export default function Slide({ slideData }) {
  const { type } = slideData;

  // S0, S8 - Titelfolie
  if (type === 'title') {
    return (
      <div className="slide-full-screen items-center justify-center text-center">
        <div className="space-y-10 max-w-6xl mx-auto">
          <h1 className="text-8xl font-bold text-crail leading-tight">
            {slideData.title}
          </h1>
          <p className="text-5xl text-cloudy font-light">
            {slideData.subtitle}
          </p>
          <div className="mt-16 text-cloudy space-y-4">
            <p className="text-4xl font-medium">{slideData.authors.join(' • ')}</p>
            <p className="text-3xl">{slideData.course}</p>
          </div>
        </div>
      </div>
    );
  }

  // S1, S3, S7 - Bild mit strukturiertem Text
  if (type === 'image-with-text') {
    return (
      <div className="slide-full-screen">
        <h2 className="text-6xl font-bold text-crail mb-3">
          {slideData.title}
        </h2>
        {slideData.subtitle && (
          <p className="text-3xl text-cloudy mb-8 font-light">
            {slideData.subtitle}
          </p>
        )}
        
        <div className="grid grid-cols-2 gap-10 flex-1">
          {/* Bildbereich */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <img
                src={slideData.image}
                alt={slideData.imageCaption}
                className="w-full h-auto object-contain"
                style={{ maxHeight: '55vh' }}
              />
            </div>
            <p className="text-xl text-cloudy italic text-center">
              {slideData.imageCaption}
            </p>
            {slideData.imageSource && (
              <p className="text-lg text-gray-500 text-center font-medium">
                {slideData.imageSource}
              </p>
            )}
          </div>

          {/* Textbereich - 3 Boxen vertikal */}
          <div className="flex flex-col justify-center gap-5">
            {slideData.content.map((section, index) => (
              <div key={index} className="bg-pampas p-6 rounded-lg border-l-4 border-crail">
                <h3 className="text-3xl font-bold text-crail mb-4">
                  {section.subtitle}
                </h3>
                <ul className="space-y-3">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-crail text-3xl mt-1">•</span>
                      <span className="text-2xl text-gray-800 leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {slideData.textSource && (
              <p className="text-lg text-gray-500 italic mt-2">
                {slideData.textSource}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // S2, S4, S5, S6 - Text-fokussierte Slides
  if (type === 'text-focus') {
    return (
      <div className="slide-full-screen">
        <h2 className="text-6xl font-bold text-crail mb-3">
          {slideData.title}
        </h2>
        {slideData.subtitle && (
          <p className="text-3xl text-cloudy mb-8 font-medium">
            {slideData.subtitle}
          </p>
        )}
        
        <div className="grid grid-cols-3 gap-8 flex-1">
          {/* Haupttext (2/3) */}
          <div className="col-span-2 flex flex-col justify-center space-y-5">
            <div className="bg-pampas p-7 rounded-lg border-l-4 border-crail">
              <p className="text-2xl text-gray-800 leading-relaxed">
                {slideData.mainText}
              </p>
            </div>

            {slideData.secondaryText && (
              <div className="bg-pampas p-7 rounded-lg border-l-4 border-crail">
                <p className="text-2xl text-gray-800 leading-relaxed">
                  {slideData.secondaryText}
                </p>
              </div>
            )}

            {slideData.quote && (
              <div className="bg-white p-7 rounded-lg border-l-4 border-crail shadow-sm">
                <p className="text-2xl text-crail italic leading-relaxed mb-4">
                  {slideData.quote.text}
                </p>
                <p className="text-xl text-cloudy text-right">
                  — {slideData.quote.author}
                </p>
              </div>
            )}

            {/* Zusätzliches Bild anzeigen */}
            {slideData.additionalImage && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={slideData.additionalImage}
                  alt={slideData.additionalImageCaption}
                  className="w-full h-auto object-contain rounded"
                  style={{ maxHeight: '35vh' }}
                />
                <p className="text-lg text-cloudy italic text-center mt-3">
                  {slideData.additionalImageCaption}
                </p>
              </div>
            )}

            {/* Platzhalter anzeigen (falls noch vorhanden) */}
            {slideData.imagePlaceholder && (
              <div className="bg-gray-100 border-2 border-dashed border-gray-400 p-6 rounded-lg">
                <p className="text-xl text-gray-600 italic text-center">
                  {slideData.imagePlaceholderText}
                </p>
              </div>
            )}

            {slideData.textSource && (
              <p className="text-lg text-gray-500 italic">
                {slideData.textSource}
              </p>
            )}
          </div>

          {/* Seitliche Punkte (1/3) */}
          <div className="flex flex-col justify-center">
            <div className="bg-pampas p-7 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-crail mb-5">
                Kernpunkte
              </h3>
              <ul className="space-y-4">
                {slideData.sidePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-crail text-3xl font-bold flex-shrink-0">
                      {idx + 1}.
                    </span>
                    <span className="text-2xl text-gray-800 leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // S8 - Schlussfolie
  if (type === 'conclusion') {
    return (
      <div className="slide-full-screen justify-center">
        <div className="text-center mb-10">
          <h2 className="text-7xl font-bold text-crail mb-6">
            {slideData.title}
          </h2>
          <p className="text-3xl text-cloudy max-w-5xl mx-auto">
            {slideData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {slideData.keyPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-pampas p-8 rounded-lg border-l-4 border-crail hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-5">
                <span className="text-6xl font-bold text-crail flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-3xl font-bold text-crail mb-3">
                    {point.title}
                  </h3>
                  <p className="text-2xl text-gray-800 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}