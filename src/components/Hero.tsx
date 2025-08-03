import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  const slides = [
    {
      title: "Your Gateway to",
      highlight: "Medical Excellence",
      subtitle: "Expert guidance for MBBS admissions in top medical colleges",
      image: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      title: "Transform Your",
      highlight: "Medical Dreams",
      subtitle: "Personalized consultation for international medical education",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      title: "Excellence in",
      highlight: "Medical Guidance",
      subtitle: "Join thousands of successful medical students worldwide",
      image: "https://images.pexels.com/photos/4167669/pexels-photo-4167669.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  ];

  useEffect(() => {
    setAnimateText(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimateText(false);
      setTimeout(() => setAnimateText(true), 100);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAnimateText(false);
    setTimeout(() => setAnimateText(true), 100);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimateText(false);
    setTimeout(() => setAnimateText(true), 100);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Medical Education"
          className="w-full h-full object-cover transition-all duration-1000 filter grayscale"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className={`transition-all duration-700 transform ${
          animateText ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white">{slides[currentSlide].title}</span>
            <span className="block text-white relative">
              {slides[currentSlide].highlight}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white cursor-hover transform hover:scale-105">
              Start Your Journey
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            
            <button className="group flex items-center space-x-3 text-white hover:text-gray-300 transition-colors duration-300 cursor-hover">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium">Watch Success Stories</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-hover ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;