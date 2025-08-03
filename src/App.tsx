import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactButtons from './components/ContactButtons';
import PopupForm from './components/PopupForm';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize AOS or custom scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-bricolage overflow-x-hidden">
      <CustomCursor />
      <Header />
      <Hero />
      <Services />
      <Statistics />
      <Testimonials />
      <Footer />
      <ContactButtons />
      <PopupForm />
    </div>
  );
}

export default App;