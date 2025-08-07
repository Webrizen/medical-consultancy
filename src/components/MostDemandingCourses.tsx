import React from 'react';
import { Cpu, Stethoscope, Briefcase, BrainCircuit, Laptop, Shield, Cloud, CircuitBoard, BookHeart, DollarSign, BarChart, Users } from 'lucide-react';

const MostDemandingCourses: React.FC = () => {
  const courseCategories = [
    {
      name: 'Engineering',
      icon: Cpu,
      description: 'Cutting-edge technical programs shaping the future of technology',
      courses: [
        { name: 'Artificial Intelligence & ML', icon: BrainCircuit, description: 'Master AI algorithms and machine learning models' },
        { name: 'Computer Science Core', icon: Laptop, description: 'Fundamentals of programming and software development' },
        { name: 'Cyber Security', icon: Shield, description: 'Protect systems and networks from digital attacks' },
        { name: 'Electronics & Electrical', icon: CircuitBoard, description: 'Circuit design and electrical systems engineering' }
      ]
    },
    {
      name: 'Medical',
      icon: Stethoscope,
      description: 'Programs that prepare the healthcare professionals of tomorrow',
      courses: [
        { name: 'MBBS', icon: BookHeart, description: 'Comprehensive medical degree for aspiring doctors' },
        { name: 'BDS', icon: BookHeart, description: 'Dental surgery and oral health specialization' },
        { name: 'Nursing', icon: BookHeart, description: 'Patient care and medical assistance programs' },
        { name: 'Pharmacy', icon: BookHeart, description: 'Medicinal chemistry and drug development' },
      ]
    },
    {
      name: 'MBA',
      icon: Briefcase,
      description: 'Business leadership programs for tomorrow\'s executives',
      courses: [
        { name: 'Finance', icon: DollarSign, description: 'Corporate finance and investment strategies' },
        { name: 'Marketing', icon: BarChart, description: 'Brand management and digital marketing' },
        { name: 'Human Resources', icon: Users, description: 'Talent management and organizational behavior' },
        { name: 'Entrepreneurship', icon: Briefcase, description: 'Startup development and business innovation' }
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Most {" "}<span className="relative inline-block">
              Demanding Courses
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-800/90 max-w-3xl mx-auto font-light leading-relaxed">
            Explore our comprehensive range of programs across three main disciplines, each designed to prepare you for success in today's competitive landscape.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 flex items-center">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <p className="text-blue-100">{category.description}</p>
                </div>
              </div>
              
              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {category.courses.map((course, courseIndex) => (
                  <div 
                    key={courseIndex}
                    className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <course.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{course.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16">
          <a 
            href="/#contact" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Get Personalized Guidance
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MostDemandingCourses;