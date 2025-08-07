import React, { useState, useEffect } from 'react';
import { Star, Quote, Stethoscope, Cpu, Briefcase } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeDomain, setActiveDomain] = useState<'medical' | 'engineering' | 'mba'>('medical');

  const testimonials = {
    medical: [
      {
        name: "Dr. Priya Sharma",
        role: "MBBS Graduate - AIIMS Delhi",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        text: "just2admit's guidance helped me secure admission at AIIMS Delhi. Their expertise in medical college admissions is unparalleled in India.",
        rating: 5
      },
      {
        name: "Rahul Patel",
        role: "MBBS Student - KGMU Lucknow",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        text: "From NEET preparation to college selection, just2admit supported me at every step. Today I'm pursuing my dream at KGMU.",
        rating: 5
      },
      {
        name: "Dr. Ananya Reddy",
        role: "MD Radiology - PGIMER Chandigarh",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        text: "Their post-graduation counseling helped me secure MD Radiology at PGIMER. Truly the best medical admission consultants in India.",
        rating: 5
      }
    ],
    engineering: [
      {
        name: "Arjun Mehta",
        role: "B.Tech CSE - IIT Bombay",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        text: "just2admit's JEE counseling helped me crack IIT Bombay with a great rank. Their engineering admission strategies are spot-on!",
        rating: 5
      },
      {
        name: "Neha Gupta",
        role: "M.Tech AI - IISc Bangalore",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        text: "Thanks to just2admit, I got into IISc Bangalore for M.Tech in AI. Their GATE counseling made all the difference.",
        rating: 5
      },
      {
        name: "Vikram Joshi",
        role: "B.Tech Mechanical - NIT Trichy",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        text: "Their NIT admission guidance helped me choose the perfect branch at NIT Trichy. Excellent engineering counseling services!",
        rating: 5
      }
    ],
    mba: [
      {
        name: "Aditya Malhotra",
        role: "MBA - IIM Ahmedabad",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        text: "just2admit's CAT preparation and interview guidance got me into IIM Ahmedabad. Best MBA consultants in India!",
        rating: 5
      },
      {
        name: "Priyanka Choudhary",
        role: "PGDM - XLRI Jamshedpur",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        text: "Their XAT counseling helped me secure admission at XLRI. The GD/PI preparation was exceptionally thorough.",
        rating: 5
      },
      {
        name: "Rohan Kapoor",
        role: "Executive MBA - ISB Hyderabad",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        text: "just2admit's guidance was crucial for my ISB admission. Their MBA consultants understand what top B-schools look for.",
        rating: 5
      }
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        (prev + 1) % testimonials[activeDomain].length
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [activeDomain]);

  const currentDomainTestimonials = testimonials[activeDomain];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Students <span className="relative">Success Stories
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-700"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Real experiences from students who achieved their academic dreams at India's top institutions
          </p>
        </div>

        {/* Domain Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-gray-100 p-1">
            <button
              onClick={() => setActiveDomain('medical')}
              className={`px-6 py-2 rounded-lg flex items-center ${activeDomain === 'medical' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
            >
              <Stethoscope className="w-5 h-5 mr-2" />
              Medical
            </button>
            <button
              onClick={() => setActiveDomain('engineering')}
              className={`px-6 py-2 rounded-lg flex items-center ${activeDomain === 'engineering' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
            >
              <Cpu className="w-5 h-5 mr-2" />
              Engineering
            </button>
            <button
              onClick={() => setActiveDomain('mba')}
              className={`px-6 py-2 rounded-lg flex items-center ${activeDomain === 'mba' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              MBA
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gray-50 p-8 md:p-12 border border-gray-200">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-300" />
            
            <div className="text-center">
              <div className="mb-8">
                <img
                  src={currentDomainTestimonials[currentTestimonial].image}
                  alt={currentDomainTestimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-white shadow-md"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(currentDomainTestimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-700 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-6">
                  "{currentDomainTestimonials[currentTestimonial].text}"
                </blockquote>
                
                <div>
                  <h4 className="text-lg font-bold text-blue-700">
                    {currentDomainTestimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {currentDomainTestimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {currentDomainTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;