import { useEffect } from 'react';

export default function Navigation({ currentSlide, totalSlides, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev]);

  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-8 z-50">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className={`
          px-6 py-3 rounded-lg font-medium transition-all
          ${currentSlide === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl'
          }
        `}
      >
        ← Zurück
      </button>

      {/* Slide Counter */}
      <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
        <span className="font-medium text-gray-700">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className={`
          px-6 py-3 rounded-lg font-medium transition-all
          ${currentSlide === totalSlides - 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl'
          }
        `}
      >
        Weiter →
      </button>
    </div>
  );
}