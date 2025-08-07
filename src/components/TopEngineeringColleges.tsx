import React from 'react';

const TopEngineeringColleges: React.FC = () => {
  const colleges = [
    { name: 'IIT Bombay', logo: '🎓' },
    { name: 'IIT Delhi', logo: '🏛️' },
    { name: 'IIT Madras', logo: '🏫' },
    { name: 'IIT Kanpur', logo: '🏢' },
  ];

  return (
    <section id="engineering-colleges" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Top <span className="relative inline-block">
              Engineering Colleges in India
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-blue-800/90 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the premier engineering institutions in India, known for their academic excellence, cutting-edge research, and distinguished faculty.
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {colleges.map((college, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center text-center border border-blue-100">
                <div className="text-5xl mb-4" aria-hidden="true">
                  {college.logo}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {college.name}
                </h3>
                <div className="mt-auto pt-4">
                  <span className="inline-block w-16 h-1 bg-blue-200 rounded-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16 animate-fade-in">
          <a href='/#contact' className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            View All Engineering Colleges
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopEngineeringColleges;
