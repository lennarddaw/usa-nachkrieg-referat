import { useState, useEffect } from 'react';
import Slide from './components/Slide';
import { slidesData } from './data/slidesData';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const totalSlides = slidesData.length;

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  // Touch navigation
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      className="min-h-screen bg-white"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Slide slideData={slidesData[currentSlide]} />
      
      {/* Keyboard Hint - Versteckt auf Mobile */}
      <div className="hidden md:block fixed bottom-4 right-6 text-gray-400 text-sm opacity-50">
        <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 text-xs">←</kbd>
        {' '}
        <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 text-xs">→</kbd>
        {' '}Navigation
      </div>

      {/* Mobile Touch Hint - Nur auf Mobile sichtbar */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs opacity-50">
        ← Wischen →
      </div>

      {/* Mobile Slide Counter - Optional */}
      <div className="md:hidden fixed top-4 right-4 text-gray-400 text-sm">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}

export default App;