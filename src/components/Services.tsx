import React from 'react';
import { GraduationCap, Users, Globe, Award, BookOpen, HeartHandshake } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "MBBS Admission Guidance",
      description: "Expert counseling for medical college admissions with personalized approach"
    },
    {
      icon: Globe,
      title: "International Universities",
      description: "Access to top medical universities across Russia, Ukraine, Georgia & more"
    },
    {
      icon: BookOpen,
      title: "Documentation Support",
      description: "Complete assistance with application forms, visa processing & legal formalities"
    },
    {
      icon: Users,
      title: "Career Counseling",
      description: "Professional guidance to choose the right medical specialization path"
    },
    {
      icon: Award,
      title: "Scholarship Assistance",
      description: "Help securing merit-based scholarships and financial aid options"
    },
    {
      icon: HeartHandshake,
      title: "Post-Admission Support",
      description: "Continuous support throughout your medical education journey"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="relative">Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Comprehensive solutions for your medical education journey with expert guidance at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-hover animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-gray-800">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-black font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;