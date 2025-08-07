import React, { useState } from 'react';
import { Cpu, Stethoscope, Briefcase, BrainCircuit, Laptop, Shield, Cloud, CircuitBoard, BookHeart, DollarSign, BarChart, Users, ChevronDown, ChevronUp } from 'lucide-react';

const MostDemandingCourses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(0); // First category open by default

  const courseCategories = [
    {
      name: 'Engineering',
      icon: Cpu,
      description: 'Cutting-edge technical programs shaping the future',
      courses: [
        { name: 'Artificial Intelligence & ML', icon: BrainCircuit },
        { name: 'Computer Science Core', icon: Laptop },
        { name: 'Cyber Security', icon: Shield },
        { name: 'Electronics & Electrical', icon: CircuitBoard }
      ]
    },
    {
      name: 'Medical',
      icon: Stethoscope,
      description: 'Programs for healthcare professionals of tomorrow',
      courses: [
        { name: 'MBBS', icon: BookHeart },
        { name: 'BDS', icon: BookHeart },
        { name: 'BAMS', icon: BookHeart },
        { name: 'BHMS', icon: BookHeart },
      ]
    },
    {
      name: 'MBA',
      icon: Briefcase,
      description: 'Business leadership programs for executives',
      courses: [
        { name: 'Finance', icon: DollarSign },
        { name: 'Marketing', icon: BarChart },
        { name: 'Human Resources', icon: Users },
        { name: 'Data Analytics', icon: Briefcase }
      ]
    }
  ];

  const toggleCategory = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <section id="courses" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Our Most <span className="relative inline-block">
              Demanding Courses
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-800/90 max-w-3xl mx-auto font-light leading-relaxed">
            Explore top programs across three disciplines designed for success in today's competitive world.
          </p>
        </div>

        {/* Mobile Accordion */}
        <div className="block md:hidden space-y-4">
          {courseCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleCategory(catIndex)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
                {activeCategory === catIndex ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {activeCategory === catIndex && (
                <div className="px-5 pb-5">
                  <div className="grid grid-cols-2 gap-3">
                    {category.courses.map((course, courseIndex) => (
                      <div 
                        key={courseIndex}
                        className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <div className="bg-blue-50 p-2 rounded-full mr-3">
                            <course.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <h4 className="font-medium text-gray-800">{course.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <a 
                      href="/#contact" 
                      className="inline-block px-4 py-2 text-sm bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {courseCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 flex items-center">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-blue-100 text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3">
                  {category.courses.map((course, courseIndex) => (
                    <div 
                      key={courseIndex}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <div className="bg-blue-50 p-2 rounded-full mr-3">
                          <course.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <h4 className="font-medium text-gray-800">{course.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-center">
                  <a 
                    href="/#contact" 
                    className="inline-block px-5 py-2 text-sm bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Visible on all screens */}
        <div className="text-center mt-12 md:mt-16">
          <a 
            href="/#contact" 
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
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