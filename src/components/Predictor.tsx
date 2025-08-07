import React from 'react';

interface PredictorProps {
  onPredictorClick: () => void;
}

const Predictor: React.FC<PredictorProps> = ({ onPredictorClick }) => {
  const predictors = [
    {
      title: "JEE Mains College Predictor",
      description: "Enter your JEE Mains rank and other details to get a list of colleges you can get into.",
      icon: "📊",
      color: "from-blue-500 to-blue-600",
      delay: "0ms"
    },
    {
      title: "NEET UG College Predictor",
      description: "Enter your NEET UG score and other details to get a list of medical colleges you can get into.",
      icon: "🏥",
      color: "from-teal-500 to-teal-600",
      delay: "100ms"
    }
  ];

  return (
    <section id="predictor" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Discover Your <span className="relative inline-block">
              Best Fit Colleges
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200 rounded-full"></div>
              <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Our advanced predictors analyze your scores and preferences to recommend the perfect institutions for your future.
          </p>
        </div>

        {/* Predictor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {predictors.map((predictor, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: predictor.delay }}
            >
              <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden relative group">
                {/* Decorative elements */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${predictor.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{predictor.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{predictor.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{predictor.description}</p>
                  <button
                    onClick={onPredictorClick}
                    className={`w-full bg-gradient-to-r ${predictor.color} text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2`}
                  >
                    <span>Predict Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-500 mb-4">Not sure which predictor to use?</p>
          <button 
            onClick={onPredictorClick}
            className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg border border-gray-200"
          >
            Get Personalized Guidance
          </button>
        </div>
      </div>
    </section>
  );
};

export default Predictor;