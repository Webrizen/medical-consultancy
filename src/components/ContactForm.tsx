import React, { useState } from 'react';
import { User, Mail, Phone, GraduationCap, Cpu, Stethoscope, Briefcase } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'medical' | 'engineering' | 'mba'>('medical');
  
  // Common form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Domain-specific fields
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

    // Add formsubmit.io metadata
    const metaFields = {
      '_next': window.location.href,
      '_subject': `New ${activeTab.toUpperCase()} Inquiry - just2admit`,
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
  };

  const handleCommonChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setMedicalData({
      ...medicalData,
      [e.target.name]: e.target.value
    });
  };

  const handleEngineeringChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEngineeringData({
      ...engineeringData,
      [e.target.name]: e.target.value
    });
  };

  const handleMbaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setMbaData({
      ...mbaData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              Get <span className="relative">Personalized Guidance
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-blue-600"></div>
              </span>
            </h2>
            <p className="text-xl text-blue-800/90 max-w-3xl mx-auto font-light">
              Select your field of interest and provide your details to get expert advice.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('medical')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeTab === 'medical' ? 'bg-blue-600 text-white' : 'text-blue-800 hover:bg-blue-50'}`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Stethoscope className="w-5 h-5" />
                  <span>Medical</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('engineering')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeTab === 'engineering' ? 'bg-blue-600 text-white' : 'text-blue-800 hover:bg-blue-50'}`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Cpu className="w-5 h-5" />
                  <span>Engineering</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('mba')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeTab === 'mba' ? 'bg-blue-600 text-white' : 'text-blue-800 hover:bg-blue-50'}`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <span>MBA</span>
                </div>
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Common Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleCommonChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleCommonChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleCommonChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                {/* Domain-Specific Fields */}
                {activeTab === 'medical' && (
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                    <select
                      name="course"
                      value={medicalData.course}
                      onChange={handleMedicalChange}
                      className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option value="MBBS">MBBS</option>
                      <option value="BDS">BDS</option>
                      <option value="MD">MD</option>
                      <option value="Nursing">Nursing</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="Other">Other Medical</option>
                    </select>
                  </div>
                )}

                {activeTab === 'engineering' && (
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                    <select
                      name="specialization"
                      value={engineeringData.specialization}
                      onChange={handleEngineeringChange}
                      className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option value="Computer Science">Computer Science</option>
                      <option value="Artificial Intelligence">AI & Machine Learning</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Civil">Civil</option>
                      <option value="Other">Other Engineering</option>
                    </select>
                  </div>
                )}

                {activeTab === 'mba' && (
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                    <select
                      name="programType"
                      value={mbaData.programType}
                      onChange={handleMbaChange}
                      className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option value="Full-time MBA">Full-time MBA</option>
                      <option value="Part-time MBA">Part-time MBA</option>
                      <option value="Executive MBA">Executive MBA</option>
                      <option value="Online MBA">Online MBA</option>
                      <option value="Other">Other Business Program</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Additional Domain-Specific Fields */}
              {activeTab === 'medical' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <select
                      name="countryPreference"
                      value={medicalData.countryPreference}
                      onChange={handleMedicalChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option value="">Preferred Study Country</option>
                      <option value="India">India</option>
                      <option value="Russia">Russia</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="qualification"
                      placeholder="Current Qualification"
                      value={medicalData.qualification}
                      onChange={handleMedicalChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'engineering' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <select
                      name="degreeLevel"
                      value={engineeringData.degreeLevel}
                      onChange={handleEngineeringChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option value="Bachelors">Bachelors (BE/BTech)</option>
                      <option value="Masters">Masters (ME/MTech)</option>
                      <option value="Diploma">Diploma</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="currentYear"
                      placeholder="Current Year/Graduation Year"
                      value={engineeringData.currentYear}
                      onChange={handleEngineeringChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'mba' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="workExperience"
                      placeholder="Work Experience (years)"
                      value={mbaData.workExperience}
                      onChange={handleMbaChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="gmatScore"
                      placeholder="GMAT Score (if available)"
                      value={mbaData.gmatScore}
                      onChange={handleMbaChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}

              <textarea
                name="message"
                placeholder="Any specific questions or requirements?"
                value={formData.message}
                onChange={handleCommonChange}
                rows={3}
                className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Get {activeTab === 'medical' ? 'Medical' : activeTab === 'engineering' ? 'Engineering' : 'MBA'} Admission Guidance
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;