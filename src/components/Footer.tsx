import React from 'react';
import { Stethoscope, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-blue-700 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-2xl font-bold">just2admit</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted partner in medical education. We guide aspiring doctors to achieve their dreams through expert consultation and support.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-700 transition-all duration-300 cursor-hover"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Success Stories', 'Universities', 'Blog', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-hover">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
             {['MBBS Admission', 'Career Counseling', 'University Selection', 'Visa Assistance', 'Documentation', 'Scholarship Help'].map((service) => (
                <li key={service}>
                  <a
                    href={`https://wa.me/918002800219?text=I'm%20interested%20in%20${encodeURIComponent(service)}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-hover"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                 3rd floor, verma center, Patna,<br />
                 Bihar, India, 800001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <p className="text-gray-300">+91 8002800219</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <p className="text-gray-300">info@just2admit.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} just2admit. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
               <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-hover">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-hover">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;