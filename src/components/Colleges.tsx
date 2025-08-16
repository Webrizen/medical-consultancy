import React from 'react';

const Colleges: React.FC = () => {
  const colleges = [
    { 
      name: 'IQ City Medical College', 
      image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
      link: 'https://iq-city-medical-college.just2admit.com/'
    },
    { 
      name: 'GDMIS', 
      image: 'https://gimsh.in/wp-content/uploads/2024/05/Student-5.jpeg',
      link: 'https://gdims.just2admit.com'
    },
    { 
      name: 'MS Ramaiah Medical College', 
      image: 'https://www.msrmc.ac.in/uploads/home/banner_images/6694b9421d7ba1721022786.webp',
      link: 'https://msrit.just2admit.com'
    },
    { 
      name: 'Kempegowda Institute of Medical Sciences', 
      image: 'https://www.kimsbangalore.edu.in/wp-content/uploads/2021/08/banner_1.jpg',
      link: 'https://kempegowda.just2admit.com'
    },
  ];

  return (
    <section id="colleges" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Top <span className="relative inline-block">
              Private Medical colleges in India
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-blue-800/90 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the leading private medical colleges in India, renowned for their excellence in medical education and research. Explore our curated list of top institutions that shape the future of healthcare professionals.
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
              <a href={college.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center text-center border border-blue-100 hover:border-blue-200">
                  <div className="mb-4 w-full h-48 overflow-hidden rounded-lg">
                    <img 
                      src={college.image} 
                      alt={college.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {college.name}
                  </h3>
                  <div className="mt-auto pt-4">
                    <span className="inline-block w-16 h-1 bg-blue-200 rounded-full"></span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16 animate-fade-in">
          <a href='/#contact' className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            View All Collages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Colleges;