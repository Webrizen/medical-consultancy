import React from 'react';

const TopMBAColleges: React.FC = () => {
  const colleges = [
    { name: 'symbiosis institute of business management', logo: '📈' },
    { name: 'Institute of Management Technology, Ghaziabad', logo: '📉' },
    { name: 'jamnalal bajaj institute of management studies', logo: '📊' },
    { name: 'birla institute of management technology', logo: '🏢' },
  ];

  return (
    <section id="mba-colleges" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Top <span className="relative inline-block">
              MBA Colleges in India
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-indigo-500/30 rounded-full"></div>
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-indigo-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-800/90 max-w-3xl mx-auto font-light leading-relaxed">
            Explore the most prestigious MBA colleges in India, recognized for their world-class faculty, rigorous curriculum, and exceptional placement records.
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
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center text-center border border-gray-200">
                <div className="text-5xl mb-4" aria-hidden="true">
                  {college.logo}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {college.name}
                </h3>
                <div className="mt-auto pt-4">
                  <span className="inline-block w-16 h-1 bg-indigo-200 rounded-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16 animate-fade-in">
          <a href="/#contact" className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg">
            View All MBA Colleges
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopMBAColleges;
