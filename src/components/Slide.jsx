import { useState } from 'react';

export default function Slide({ slideData }) {
  const { type } = slideData;
  const [lightboxImage, setLightboxImage] = useState(null);

  // Öffne Lightbox mit Bild
  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  // Schließe Lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Lightbox Modal Component
  const ImageLightbox = ({ image, onClose }) => {
    if (!image) return null;

    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white text-gray-800 rounded-full p-3 hover:bg-gray-200 transition-colors shadow-lg"
            aria-label="Schließen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={image.src}
            alt={image.caption}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          {image.caption && (
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-center">
              <p className="text-sm md:text-base lg:text-lg italic">
                {image.caption}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ESC key to close lightbox
  useState(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxImage]);

  // S0, S8 - Titelfolie
  if (type === 'title') {
    return (
      <div className="slide-full-screen items-center justify-center text-center">
        <div className="space-y-6 md:space-y-10 max-w-6xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-crail leading-tight">
            {slideData.title}
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cloudy font-light">
            {slideData.subtitle}
          </p>
          <div className="mt-8 md:mt-16 text-cloudy space-y-2 md:space-y-4">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
              {slideData.authors.join(' • ')}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {slideData.course}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // S1, S3, S7 - Bild mit strukturiertem Text
  if (type === 'image-with-text') {
    return (
      <>
        <div className="slide-full-screen">
          {/* Material-Label */}
          {slideData.materialLabel && (
            <div className="mb-4 md:mb-6">
              <span className="inline-block bg-crail text-white px-4 py-2 rounded-lg text-2xl sm:text-3xl md:text-4xl font-bold">
                {slideData.materialLabel}
              </span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-crail mb-2 md:mb-3">
            {slideData.title}
          </h2>
          {slideData.subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cloudy mb-4 md:mb-8 font-light">
              {slideData.subtitle}
            </p>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 flex-1 overflow-y-auto lg:overflow-hidden">
            {/* Bildbereich */}
            <div className="flex flex-col justify-center items-center gap-3 md:gap-5">
              <div 
                className="bg-white p-3 md:p-5 rounded-lg shadow-sm w-full cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => openLightbox({ 
                  src: slideData.image, 
                  caption: slideData.imageCaption 
                })}
              >
                <img
                  src={slideData.image}
                  alt={slideData.imageCaption}
                  className="w-full h-auto object-contain mx-auto"
                  style={{ maxHeight: '40vh', maxWidth: '100%' }}
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cloudy italic text-center px-2">
                {slideData.imageCaption}
              </p>
              {slideData.imageSource && (
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-medium px-2">
                  {slideData.imageSource}
                </p>
              )}
            </div>

            {/* Textbereich - 3 Boxen vertikal */}
            <div className="flex flex-col justify-center gap-3 md:gap-4 lg:gap-5">
              {slideData.content.map((section, index) => (
                <div key={index} className="bg-pampas p-4 md:p-5 lg:p-6 rounded-lg border-l-3 md:border-l-4 border-crail">
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-crail mb-2 md:mb-4">
                    {section.subtitle}
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2 lg:space-y-3">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 md:gap-3">
                        <span className="text-crail text-xl sm:text-2xl md:text-2xl lg:text-3xl mt-0.5 md:mt-1">•</span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-800 leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {slideData.textSource && (
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 italic mt-1 md:mt-2 px-2">
                  {slideData.textSource}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <ImageLightbox image={lightboxImage} onClose={closeLightbox} />
      </>
    );
  }

  // S2, S4, S5, S6 - Text-fokussierte Slides
  if (type === 'text-focus') {
    return (
      <>
        <div className="slide-full-screen">
          {/* Material-Label */}
          {slideData.materialLabel && (
            <div className="mb-4 md:mb-6">
              <span className="inline-block bg-crail text-white px-4 py-2 rounded-lg text-2xl sm:text-3xl md:text-4xl font-bold">
                {slideData.materialLabel}
              </span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-crail mb-2 md:mb-3">
            {slideData.title}
          </h2>
          {slideData.subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cloudy mb-4 md:mb-8 font-medium">
              {slideData.subtitle}
            </p>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 flex-1 overflow-y-auto lg:overflow-hidden">
            {/* Haupttext (auf mobile: volle Breite, auf desktop: 2/3) */}
            <div className="lg:col-span-2 flex flex-col justify-center space-y-3 md:space-y-4 lg:space-y-5">
              <div className="bg-pampas p-4 md:p-5 lg:p-7 rounded-lg border-l-3 md:border-l-4 border-crail">
                <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-800 leading-relaxed">
                  {slideData.mainText}
                </p>
              </div>

              {slideData.secondaryText && (
                <div className="bg-pampas p-4 md:p-5 lg:p-7 rounded-lg border-l-3 md:border-l-4 border-crail">
                  <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-800 leading-relaxed">
                    {slideData.secondaryText}
                  </p>
                </div>
              )}

              {slideData.quote && (
                <div className="bg-white p-4 md:p-5 lg:p-7 rounded-lg border-l-3 md:border-l-4 border-crail shadow-sm">
                  <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-crail italic leading-relaxed mb-2 md:mb-4">
                    {slideData.quote.text}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-xl text-cloudy text-right">
                    — {slideData.quote.author}
                  </p>
                </div>
              )}

              {/* Zusätzliches Bild anzeigen */}
              {slideData.additionalImage && (
                <div 
                  className="bg-white p-3 md:p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openLightbox({ 
                    src: slideData.additionalImage, 
                    caption: slideData.additionalImageCaption 
                  })}
                >
                  <img
                    src={slideData.additionalImage}
                    alt={slideData.additionalImageCaption}
                    className="w-full h-auto object-contain rounded"
                    style={{ maxHeight: '30vh' }}
                  />
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-cloudy italic text-center mt-2 md:mt-3">
                    {slideData.additionalImageCaption}
                  </p>
                </div>
              )}

              {/* Platzhalter anzeigen (falls noch vorhanden) */}
              {slideData.imagePlaceholder && (
                <div className="bg-gray-100 border-2 border-dashed border-gray-400 p-4 md:p-6 rounded-lg">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 italic text-center">
                    {slideData.imagePlaceholderText}
                  </p>
                </div>
              )}

              {slideData.textSource && (
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 italic">
                  {slideData.textSource}
                </p>
              )}
            </div>

            {/* Seitliche Punkte (auf mobile: unter Text, auf desktop: 1/3 rechts) */}
            <div className="flex flex-col justify-center">
              <div className="bg-pampas p-4 md:p-5 lg:p-7 rounded-lg shadow-sm">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-crail mb-3 md:mb-4 lg:mb-5">
                  Kernpunkte
                </h3>
                <ul className="space-y-2 md:space-y-3 lg:space-y-4">
                  {slideData.sidePoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3">
                      <span className="text-crail text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold flex-shrink-0">
                        {idx + 1}.
                      </span>
                      <span className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-800 leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <ImageLightbox image={lightboxImage} onClose={closeLightbox} />
      </>
    );
  }

  // S8 - Schlussfolie
  if (type === 'conclusion') {
    return (
      <div className="slide-full-screen justify-center">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-crail mb-3 md:mb-6">
            {slideData.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cloudy max-w-5xl mx-auto px-4">
            {slideData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto overflow-y-auto lg:overflow-hidden">
          {slideData.keyPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-pampas p-5 md:p-6 lg:p-8 rounded-lg border-l-3 md:border-l-4 border-crail hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <span className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-crail flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-crail mb-2 md:mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-800 leading-relaxed">
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