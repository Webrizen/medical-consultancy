import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Briefcase, Stethoscope, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  const slides = [
    {
      title: "Shape Your Future in",
      highlight: "Engineering",
      subtitle: "Get into top engineering colleges with our expert guidance",
      icon: <Cpu className="w-12 h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
      cta: "Explore Engineering Programs"
    },
    {
      title: "Begin Your Journey in",
      highlight: "Medical",
      subtitle: "Comprehensive support for MBBS and medical admissions",
      icon: <Stethoscope className="w-12 h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
      cta: "Start Medical Admission"
    },
    {
      title: "Accelerate Your Career with",
      highlight: "MBA",
      subtitle: "Get into premier business schools with our strategic counseling",
      icon: <Briefcase className="w-12 h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
      cta: "Discover MBA Options"
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
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].highlight}
          className="w-full h-full object-cover transition-all duration-1000"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className={`transition-all duration-700 transform ${
          animateText ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Domain Icon */}
          <div className="mb-6 flex justify-center">
            <div className="bg-blue-600/90 p-4 rounded-full backdrop-blur-sm">
              {slides[currentSlide].icon}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white">{slides[currentSlide].title}</span>
            <span className="block text-white relative">
              {slides[currentSlide].highlight}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:text-white transform hover:scale-105 shadow-lg">
              {slides[currentSlide].cta}
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            
            <button className="group flex items-center space-x-3 text-white hover:text-gray-200 transition-colors duration-300">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-blue-700 transition-all duration-300">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium">Watch Student Stories</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-700 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-700 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;