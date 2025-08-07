import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactButtons from './components/ContactButtons';
import PopupForm from './components/PopupForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const Home = () => (
  <>
    <Hero />
    <Services />
    <Statistics />
    <Testimonials />
    <ContactButtons />
    <PopupForm />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-bricolage overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;