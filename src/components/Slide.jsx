export default function Slide({ slideData }) {
  const { type, color = 'blue' } = slideData;

  // Farbschema basierend auf Thema
  const colorSchemes = {
    blue: {
      accent: 'text-blue-800',
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      bgLight: 'bg-blue-100/50'
    },
    gold: {
      accent: 'text-amber-700',
      bg: 'bg-amber-50',
      border: 'border-amber-300',
      bgLight: 'bg-amber-100/50'
    },
    red: {
      accent: 'text-red-800',
      bg: 'bg-red-50',
      border: 'border-red-300',
      bgLight: 'bg-red-100/50'
    }
  };

  const colors = colorSchemes[color] || colorSchemes.blue;

  // S0, S8 - Titelfolie
  if (type === 'title') {
    return (
      <div className="slide-container-large items-center justify-center text-center">
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className={`inline-block px-8 py-3 ${colors.bg} rounded-full mb-6`}>
            <span className={`text-2xl font-semibold ${colors.accent}`}>
              Geschichtsreferat
            </span>
          </div>
          <h1 className={`text-7xl font-bold ${colors.accent} leading-tight mb-8`}>
            {slideData.title}
          </h1>
          <p className="text-4xl text-gray-600 font-light mb-12">
            {slideData.subtitle}
          </p>
          <div className="mt-16 text-gray-500 space-y-4">
            <p className="text-3xl font-medium">{slideData.authors.join(' • ')}</p>
            <p className="text-2xl">{slideData.course}</p>
          </div>
        </div>
      </div>
    );
  }

  // S1, S3, S7 - Bild mit strukturiertem Text
  if (type === 'image-with-text') {
    return (
      <div className="slide-container-large">
        <h2 className={`slide-title-large ${colors.accent} text-center mb-4`}>
          {slideData.title}
        </h2>
        {slideData.subtitle && (
          <p className="text-3xl text-gray-600 text-center mb-12 font-light">
            {slideData.subtitle}
          </p>
        )}
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bildbereich */}
          <div className="flex flex-col items-center gap-6">
            <div className={`p-6 ${colors.bgLight} rounded-xl shadow-xl`}>
              <img
                src={slideData.image}
                alt={slideData.imageCaption}
                className="w-full h-auto object-contain rounded-lg"
                style={{ maxHeight: '600px' }}
              />
            </div>
            <p className="text-xl text-gray-500 italic text-center px-4">
              {slideData.imageCaption}
            </p>
          </div>

          {/* Textbereich */}
          <div className="space-y-10">
            {slideData.content.map((section, index) => (
              <div key={index} className={`${colors.bg} p-8 rounded-xl border-l-4 ${colors.border}`}>
                <h3 className={`text-3xl font-bold ${colors.accent} mb-6`}>
                  {section.subtitle}
                </h3>
                <ul className="space-y-4">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className={`${colors.accent} text-3xl mt-1 flex-shrink-0`}>•</span>
                      <span className="text-2xl text-gray-700 leading-relaxed">{point}</span>
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
      <div className="slide-container-large">
        <h2 className={`slide-title-large ${colors.accent} text-center mb-4`}>
          {slideData.title}
        </h2>
        {slideData.subtitle && (
          <p className="text-3xl text-gray-600 text-center mb-12 font-medium">
            {slideData.subtitle}
          </p>
        )}
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Haupttext (2/3) */}
          <div className="md:col-span-2 space-y-8">
            <div className={`${colors.bgLight} p-10 rounded-xl shadow-lg border-l-4 ${colors.border}`}>
              <p className="text-2xl text-gray-800 leading-relaxed">
                {slideData.mainText}
              </p>
            </div>

            {slideData.secondaryText && (
              <div className={`${colors.bgLight} p-10 rounded-xl shadow-lg border-l-4 ${colors.border}`}>
                <p className="text-2xl text-gray-800 leading-relaxed">
                  {slideData.secondaryText}
                </p>
              </div>
            )}

            {slideData.quote && (
              <div className={`bg-gradient-to-r from-${color}-100 to-white p-10 rounded-xl shadow-xl border-l-8 ${colors.border}`}>
                <p className={`text-2xl ${colors.accent} italic leading-relaxed mb-4`}>
                  {slideData.quote.text}
                </p>
                <p className="text-xl text-gray-600 text-right">
                  — {slideData.quote.author}
                </p>
              </div>
            )}
          </div>

          {/* Seitliche Punkte (1/3) */}
          <div className="space-y-6">
            <div className={`${colors.bg} p-8 rounded-xl shadow-lg`}>
              <h3 className={`text-2xl font-bold ${colors.accent} mb-6`}>
                Kernpunkte
              </h3>
              <ul className="space-y-5">
                {slideData.sidePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`${colors.accent} text-2xl font-bold mt-1 flex-shrink-0`}>
                      {idx + 1}.
                    </span>
                    <span className="text-xl text-gray-700 leading-snug">{point}</span>
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
      <div className="slide-container-large items-center justify-center">
        <div className="text-center mb-16">
          <h2 className={`text-6xl font-bold ${colors.accent} mb-6`}>
            {slideData.title}
          </h2>
          <p className="text-3xl text-gray-600 max-w-4xl mx-auto">
            {slideData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
          {slideData.keyPoints.map((point, index) => (
            <div 
              key={index}
              className={`${colors.bg} p-10 rounded-xl shadow-xl border-l-4 ${colors.border} hover:shadow-2xl transition-shadow`}
            >
              <div className="flex items-start gap-6">
                <span className={`text-5xl font-bold ${colors.accent} flex-shrink-0`}>
                  {index + 1}
                </span>
                <div>
                  <h3 className={`text-3xl font-bold ${colors.accent} mb-4`}>
                    {point.title}
                  </h3>
                  <p className="text-2xl text-gray-700 leading-relaxed">
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