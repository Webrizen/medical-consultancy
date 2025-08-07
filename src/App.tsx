import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Colleges from './components/Colleges';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Predictor from './components/Predictor';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ContactButtons from './components/ContactButtons';
import PopupForm from './components/PopupForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const Home = ({ onPredictorClick }: { onPredictorClick: () => void }) => (
  <>
    <Hero />
    <Colleges />
    <Services />
    <Statistics />
    <Testimonials />
    <Predictor onPredictorClick={onPredictorClick} />
    <ContactForm />
    <ContactButtons />
  </>
);

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handlePredictorClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="min-h-screen bg-white text-black font-bricolage overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home onPredictorClick={handlePredictorClick} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
      <PopupForm isVisible={isPopupVisible} onClose={handleClosePopup} />
    </div>
  );
}

export default App;