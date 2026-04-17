import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated navLinks to include the Pricing section
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/#services' },
    { name: 'Pricing', path: '/#pricing' }, // New Link
    { name: 'Testimonials', path: '/#testimonials' },
  ];

  const bookingUrl = "https://sales-macrotek.vercel.app/book-now";

  return (
    <nav className="bg-linear-to-r from-brand-cream/90 to-[#f5f3c4]/80 backdrop-blur-md sticky top-0 z-50 w-full px-4 py-1 shadow-sm border-b border-black/5">
      <div className="w-full flex items-center justify-between h-16">
        
        {/* 1. LOGO */}
        <div className="flex-1 flex justify-start items-center">
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/mds-logo.png" 
              alt="MDS Logo" 
              className="h-14 w-auto object-contain py-1 transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* 2. CENTER LINKS (Desktop Only) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-black font-semibold hover:text-brand-orange transition-colors duration-200 text-sm uppercase tracking-widest whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* 3. RIGHT SIDE: CTA & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center">
          <a 
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-black text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-brand-orange transition-all duration-300 cursor-pointer shadow-md"
          >
            Get your Free Consultation
          </a>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream border-t border-black/5 px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-black font-bold text-lg hover:text-brand-orange"
              onClick={() => setIsOpen(false)} 
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black text-white py-3 rounded-lg font-bold text-center"
          >
            Get your Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;