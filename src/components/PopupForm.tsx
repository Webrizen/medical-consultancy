import React, { useState } from 'react';
import { X, User, Mail, Phone, GraduationCap, Stethoscope, Cpu, Briefcase } from 'lucide-react';

interface PopupFormProps {
  isVisible: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isVisible, onClose }) => {
  const [activeTab, setActiveTab] = useState<'medical' | 'engineering' | 'mba'>('medical');

  // Common fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Domain-specific data
  const [medicalData, setMedicalData] = useState({
    course: 'MBBS',
    countryPreference: '',
    qualification: ''
  });

  const [engineeringData, setEngineeringData] = useState({
    specialization: 'Computer Science',
    degreeLevel: 'Bachelors',
    currentYear: ''
  });

  const [mbaData, setMbaData] = useState({
    programType: 'Full-time MBA',
    workExperience: '',
    gmatScore: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/info@just2admit.com';
    form.style.display = 'none';

    // Add common fields
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    // Add domain-specific fields
    const domainFields =
      activeTab === 'medical' ? medicalData :
      activeTab === 'engineering' ? engineeringData :
      mbaData;

    Object.entries(domainFields).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    // Add FormSubmit metadata
    const metaFields = {
      '_next': window.location.href,
      '_subject': `Popup: New ${activeTab.toUpperCase()} Inquiry - just2admit`,
      '_template': 'table'
    };

    Object.entries(metaFields).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    onClose();
  };

  const handleCommonChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setMedicalData({ ...medicalData, [e.target.name]: e.target.value });
  };

  const handleEngineeringChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEngineeringData({ ...engineeringData, [e.target.name]: e.target.value });
  };

  const handleMbaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setMbaData({ ...mbaData, [e.target.name]: e.target.value });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 transform animate-scale-in">
        {/* Close Button & Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-blue-900">Get Expert Guidance</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
            aria-label="Close form"
          >
            <X className="w-4 h-4 text-blue-900" />
          </button>
        </div>

        <p className="text-blue-800/90 mb-6 text-center">
          Select your field and get personalized admission advice.
        </p>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          {[
            { id: 'medical', label: 'Medical', icon: Stethoscope },
            { id: 'engineering', label: 'Engineering', icon: Cpu },
            { id: 'mba', label: 'MBA', icon: Briefcase },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id as any)}
              className={`flex-1 py-2 text-center font-medium text-sm transition-colors flex items-center justify-center gap-2 ${
                activeTab === id
                  ? 'text-white bg-blue-600 rounded-t-lg'
                  : 'text-blue-800 hover:bg-blue-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleCommonChange}
              required
              className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleCommonChange}
              required
              className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleCommonChange}
              required
              className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>

          {/* Domain-Specific Dropdown */}
          <div className="relative">
            <GraduationCap className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
            {activeTab === 'medical' && (
              <select
                name="course"
                value={medicalData.course}
                onChange={handleMedicalChange}
                className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              >
                <option value="MBBS">MBBS</option>
                <option value="BDS">BDS</option>
                <option value="MD">MD</option>
                <option value="Nursing">Nursing</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Other">Other Medical</option>
              </select>
            )}
            {activeTab === 'engineering' && (
              <select
                name="specialization"
                value={engineeringData.specialization}
                onChange={handleEngineeringChange}
                className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Artificial Intelligence">AI & Machine Learning</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electrical">Electrical</option>
                <option value="Civil">Civil</option>
                <option value="Other">Other Engineering</option>
              </select>
            )}
            {activeTab === 'mba' && (
              <select
                name="programType"
                value={mbaData.programType}
                onChange={handleMbaChange}
                className="w-full pl-12 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              >
                <option value="Full-time MBA">Full-time MBA</option>
                <option value="Part-time MBA">Part-time MBA</option>
                <option value="Executive MBA">Executive MBA</option>
                <option value="Online MBA">Online MBA</option>
                <option value="Other">Other Business Program</option>
              </select>
            )}
          </div>

          {/* Additional Fields Based on Domain */}
          {activeTab === 'medical' && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <select
                name="countryPreference"
                value={medicalData.countryPreference}
                onChange={handleMedicalChange}
                className="px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Preferred Country</option>
                <option value="India">India</option>
                <option value="Russia">Russia</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Georgia">Georgia</option>
                <option value="Philippines">Philippines</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="qualification"
                placeholder="Current Qualification"
                value={medicalData.qualification}
                onChange={handleMedicalChange}
                className="px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          )}

          {activeTab === 'engineering' && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <select
                name="degreeLevel"
                value={engineeringData.degreeLevel}
                onChange={handleEngineeringChange}
                className="px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="Bachelors">Bachelors (BE/BTech)</option>
                <option value="Masters">Masters (ME/MTech)</option>
                <option value="Diploma">Diploma</option>
                <option value="PhD">PhD</option>
              </select>
              <input
                type="text"
                name="currentYear"
                placeholder="Current/Graduation Year"
                value={engineeringData.currentYear}
                onChange={handleEngineeringChange}
                className="px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          )}

          {activeTab === 'mba' && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="workExperience"
                placeholder="Work Experience (years)"
                value={mbaData.workExperience}
                onChange={handleMbaChange}
                className="px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <input
                type="text"
                name="gmatScore"
                placeholder="GMAT Score (if any)"
                value={mbaData.gmatScore}
                onChange={handleMbaChange}
                className="px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          )}

          {/* Message */}
          <textarea
            name="message"
            placeholder="Any specific questions or requirements?"
            value={formData.message}
            onChange={handleCommonChange}
            rows={3}
            className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Get {activeTab === 'medical' ? 'Medical' : activeTab === 'engineering' ? 'Engineering' : 'MBA'} Guidance
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