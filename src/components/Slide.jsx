export default function Slide({ slideData }) {
  const { type } = slideData;

  // Titelfolie
  if (type === 'title') {
    return (
      <div className="slide-container items-center justify-center text-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-primary leading-tight">
            {slideData.title}
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            {slideData.subtitle}
          </p>
          <div className="mt-12 text-gray-500 space-y-2">
            <p className="text-lg">{slideData.authors.join(' • ')}</p>
            <p>{slideData.course}</p>
          </div>
        </div>
      </div>
    );
  }

  // Material-Folie (einzelnes Bild)
  if (type === 'material') {
    return (
      <div className="slide-container">
        <h2 className="slide-title text-center mb-8">{slideData.title}</h2>
        
        <div className="flex flex-col items-center gap-6">
          <img
            src={slideData.image}
            alt={slideData.caption}
            className="material-image"
          />
          <p className="text-sm text-gray-500 italic text-center max-w-3xl">
            {slideData.caption}
          </p>
        </div>

        {slideData.notes && slideData.notes.length > 0 && (
          <div className="mt-8 flex justify-center">
            <ul className="space-y-2 text-gray-700">
              {slideData.notes.map((note, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Material-Folie (zwei Bilder nebeneinander)
  if (type === 'material-dual') {
    return (
      <div className="slide-container">
        <h2 className="slide-title text-center mb-8">{slideData.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {slideData.images.map((img, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-[400px] object-contain shadow-lg rounded"
              />
              <p className="text-sm text-gray-500 italic text-center">
                {img.caption}
              </p>
            </div>
          ))}
        </div>

        {slideData.notes && slideData.notes.length > 0 && (
          <div className="flex justify-center">
            <ul className="space-y-2 text-gray-700">
              {slideData.notes.map((note, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Schlussfolie
  if (type === 'conclusion') {
    return (
      <div className="slide-container items-center justify-center text-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-primary">{slideData.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {slideData.takeaway}
          </p>
        </div>
      </div>
    );
  }

  return null;
}