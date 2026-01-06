import { useState, useEffect } from 'react';
import Slide from './components/Slide';
import { slidesData } from './data/slidesData';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide(prev => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  return (
    <div className="min-h-screen bg-white">
      <Slide slideData={slidesData[currentSlide]} />
      
      {/* Keyboard Hint - Dezent unten */}
      <div className="fixed bottom-4 right-6 text-gray-400 text-sm opacity-50">
        <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 text-xs">←</kbd>
        {' '}
        <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 text-xs">→</kbd>
        {' '}Navigation
      </div>
    </div>
  );
}

export default App;