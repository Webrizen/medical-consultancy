import React, { useState } from 'react';
import { User, Mail, Phone, GraduationCap } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'MBBS',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create form data for formsubmit.io
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/info@just2admit.com';
    form.style.display = 'none';

    // Add form fields
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    // Add additional formsubmit.io fields
    const nextInput = document.createElement('input');
    nextInput.type = 'hidden';
    nextInput.name = '_next';
    nextInput.value = window.location.href;
    form.appendChild(nextInput);

    const subjectInput = document.createElement('input');
    subjectInput.type = 'hidden';
    subjectInput.name = '_subject';
    subjectInput.value = 'New Student Inquiry - just2admit';
    form.appendChild(subjectInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              Get in <span className="relative">Touch
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600"></div>
              </span>
            </h2>
            <p className="text-xl text-blue-800/90 max-w-3xl mx-auto font-light">
              Have a question or need more information? Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="relative">
                <GraduationCap className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                >
                  <option value="MBBS">MBBS</option>
                  <option value="BDS">BDS</option>
                  <option value="MD">MD</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Any specific questions or requirements?"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-hover"
              >
                Send Message
              </button>
            </form>

            <p className="text-xs text-blue-500 text-center mt-4">
              We respect your privacy. Your information is secure with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
