import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection1 from './components/HeroSection1';
import ClientsSection from './components/ClientsSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import ServicesSection from './components/ServicesSection'; 
import WhyTrustSection from './components/WhyTrustSection'; 
import VisionSection from './components/VisionSection';
import TestimonialsSection from './components/TestimonialsSection';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <ScrollToHashElement />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection1 />
                <ClientsSection />
                <WhatWeDoSection /> 
                <ServicesSection />
                <WhyTrustSection />
                <VisionSection />
                <TestimonialsSection />
                <Pricing />
              </>
            } />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<div className="p-10 md:p-20 text-center uppercase font-black text-xl">Coming Soon</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;