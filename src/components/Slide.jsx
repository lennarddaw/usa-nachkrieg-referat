export default function Slide({ slideData }) {
  const { type } = slideData;

  // S0, S8 - Titelfolie
  if (type === 'title') {
    return (
      <div className="slide-full-screen items-center justify-center text-center">
        <div className="space-y-8 max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold text-crail leading-tight">
            {slideData.title}
          </h1>
          <p className="text-3xl text-cloudy font-light">
            {slideData.subtitle}
          </p>
          <div className="mt-12 text-cloudy space-y-3">
            <p className="text-2xl font-medium">{slideData.authors.join(' • ')}</p>
            <p className="text-xl">{slideData.course}</p>
          </div>
        </div>
      </div>
    );
  }

  // S1, S3, S7 - Bild mit strukturiertem Text
  if (type === 'image-with-text') {
    return (
      <div className="slide-full-screen">
        <h2 className="text-4xl font-bold text-crail mb-2">
          {slideData.title}
        </h2>
        {slideData.subtitle && (
          <p className="text-xl text-cloudy mb-6 font-light">
            {slideData.subtitle}
          </p>
        )}
        
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Bildbereich */}
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src={slideData.image}
                alt={slideData.imageCaption}
                className="w-full h-auto object-contain"
                style={{ maxHeight: '60vh' }}
              />
            </div>
            <p className="text-base text-cloudy italic text-center">
              {slideData.imageCaption}
            </p>
          </div>

          {/* Textbereich - 3 Boxen vertikal */}
          <div className="flex flex-col justify-center gap-4">
            {slideData.content.map((section, index) => (
              <div key={index} className="bg-pampas p-5 rounded-lg border-l-3 border-crail">
                <h3 className="text-xl font-bold text-crail mb-3">
                  {section.subtitle}
                </h3>
                <ul className="space-y-2">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-crail text-lg mt-0.5">•</span>
                      <span className="text-base text-gray-700 leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // S2, S4, S5, S6 - Text-fokussierte Slides
  if (type === 'text-focus') {
    return (
      <div className="slide-full-screen">
        <h2 className="text-4xl font-bold text-crail mb-2">
          {slideData.title}
        </h2>
        {slideData.subtitle && (
          <p className="text-xl text-cloudy mb-6 font-medium">
            {slideData.subtitle}
          </p>
        )}
        
        <div className="grid grid-cols-3 gap-6 flex-1">
          {/* Haupttext (2/3) */}
          <div className="col-span-2 flex flex-col justify-center space-y-4">
            <div className="bg-pampas p-6 rounded-lg border-l-3 border-crail">
              <p className="text-lg text-gray-800 leading-relaxed">
                {slideData.mainText}
              </p>
            </div>

            {slideData.secondaryText && (
              <div className="bg-pampas p-6 rounded-lg border-l-3 border-crail">
                <p className="text-lg text-gray-800 leading-relaxed">
                  {slideData.secondaryText}
                </p>
              </div>
            )}

            {slideData.quote && (
              <div className="bg-white p-6 rounded-lg border-l-4 border-crail shadow-sm">
                <p className="text-lg text-crail italic leading-relaxed mb-3">
                  {slideData.quote.text}
                </p>
                <p className="text-base text-cloudy text-right">
                  — {slideData.quote.author}
                </p>
              </div>
            )}
          </div>

          {/* Seitliche Punkte (1/3) */}
          <div className="flex flex-col justify-center">
            <div className="bg-pampas p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-crail mb-4">
                Kernpunkte
              </h3>
              <ul className="space-y-3">
                {slideData.sidePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-crail text-lg font-bold flex-shrink-0">
                      {idx + 1}.
                    </span>
                    <span className="text-base text-gray-700 leading-snug">{point}</span>
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
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-crail mb-4">
            {slideData.title}
          </h2>
          <p className="text-2xl text-cloudy max-w-4xl mx-auto">
            {slideData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
          {slideData.keyPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-pampas p-6 rounded-lg border-l-3 border-crail hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-crail flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-crail mb-2">
                    {point.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
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