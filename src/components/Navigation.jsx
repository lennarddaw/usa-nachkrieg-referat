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
    <div className="fixed bottom-8 left-0 right-0 flex justify-between items-center px-12 z-50">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className={`
          px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200
          ${currentSlide === 0
            ? 'opacity-0 cursor-default'
            : 'bg-crail text-white hover:bg-crail-dark shadow-md hover:shadow-lg'
          }
        `}
      >
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className={`
          px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200
          ${currentSlide === totalSlides - 1
            ? 'opacity-0 cursor-default'
            : 'bg-crail text-white hover:bg-crail-dark shadow-md hover:shadow-lg'
          }
        `}
      >
        <span className="flex items-center gap-2">
          Weiter
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
}