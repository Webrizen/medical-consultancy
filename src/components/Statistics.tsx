import React, { useState, useEffect } from 'react';

const Statistics: React.FC = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { number: 2500, label: "Students Placed", suffix: "+" },
    { number: 15, label: "Years Experience", suffix: "" },
    { number: 98, label: "Success Rate", suffix: "%" },
    { number: 45, label: "Partner Universities", suffix: "+" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            let startValue = 0;
            const endValue = stat.number;
            const duration = 2000;
            const increment = endValue / (duration / 16);

            const timer = setInterval(() => {
              startValue += increment;
              if (startValue >= endValue) {
                startValue = endValue;
                clearInterval(timer);
              }
              
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(startValue);
                return newCounters;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('statistics-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="statistics-section" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="relative">Impact
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Numbers that speak for our commitment to excellence in medical education guidance
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-hover"
            >
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {counters[index]}{stat.suffix}
                </span>
              </div>
              <p className="text-lg text-gray-300 font-medium">
                {stat.label}
              </p>
              <div className="w-16 h-0.5 bg-white mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;