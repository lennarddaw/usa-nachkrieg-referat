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
    <div className="fixed bottom-12 left-0 right-0 flex justify-center items-center gap-10 z-50">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className={`
          px-10 py-5 rounded-xl text-2xl font-semibold transition-all duration-300
          ${currentSlide === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-blue-700 text-white hover:bg-blue-800 shadow-xl hover:shadow-2xl hover:scale-105'
          }
        `}
      >
        <span className="flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück
        </span>
      </button>

      {/* Slide Counter */}
      <div className="bg-white px-10 py-5 rounded-xl shadow-2xl border-2 border-blue-200">
        <span className="font-bold text-3xl text-gray-800">
          {currentSlide + 1}
        </span>
        <span className="text-2xl text-gray-500 mx-3">/</span>
        <span className="text-2xl text-gray-600">
          {totalSlides}
        </span>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className={`
          px-10 py-5 rounded-xl text-2xl font-semibold transition-all duration-300
          ${currentSlide === totalSlides - 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-blue-700 text-white hover:bg-blue-800 shadow-xl hover:shadow-2xl hover:scale-105'
          }
        `}
      >
        <span className="flex items-center gap-3">
          Weiter
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>

      {/* Keyboard Hint */}
      <div className="fixed bottom-4 right-8 text-gray-400 text-sm">
        <kbd className="px-3 py-1 bg-gray-100 rounded border border-gray-300">←</kbd>
        {' '}
        <kbd className="px-3 py-1 bg-gray-100 rounded border border-gray-300">→</kbd>
        {' '}Pfeiltasten
      </div>
    </div>
  );
}