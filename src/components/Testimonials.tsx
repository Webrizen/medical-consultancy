import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "MBBS Graduate - Ukraine",
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "MedPath made my dream of becoming a doctor come true. Their guidance was exceptional throughout my MBBS journey in Ukraine.",
      rating: 5
    },
    {
      name: "Raj Patel",
      role: "MBBS Student - Georgia",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "The support I received was incredible. From admission to visa processing, everything was handled professionally.",
      rating: 5
    },
    {
      name: "Dr. Sneha Reddy",
      role: "MBBS Graduate - Russia",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "Thanks to MedPath, I'm now practicing medicine. Their expertise in international admissions is unmatched.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="relative">Stories
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-700"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Real experiences from students who achieved their medical dreams with our guidance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gray-50 p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-300" />
            
            <div className="text-center">
              <div className="mb-8">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover filter grayscale"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-700 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div>
                  <h4 className="text-lg font-bold text-blue-700">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-hover ${
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