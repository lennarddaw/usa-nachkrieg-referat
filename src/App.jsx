import { useState } from 'react';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import Slide from './components/Slide';
import { slidesData } from './data/slidesData';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ProgressBar current={currentSlide + 1} total={totalSlides} />
      
      <Slide slideData={slidesData[currentSlide]} />
      
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
}

export default App;