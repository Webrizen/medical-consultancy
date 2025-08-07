import React, { useState } from 'react';
import { X, User, Mail, Phone, GraduationCap } from 'lucide-react';

// Interface for the PopupForm props
interface PopupFormProps {
  isVisible: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isVisible, onClose }) => {
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

    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 transform animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-blue-900">Get Expert Guidance</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200 cursor-hover"
          >
            <X className="w-4 h-4 text-blue-900" />
          </button>
        </div>

        <p className="text-blue-800/90 mb-6">
          Fill out this form and our expert counselors will contact you within 24 hours!
        </p>

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
            Get Free Consultation
          </button>
        </form>

        <p className="text-xs text-blue-500 text-center mt-4">
          We respect your privacy. Your information is secure with us.
        </p>
      </div>
    </div>
  );
};

export default PopupForm;