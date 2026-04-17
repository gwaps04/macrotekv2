import React from 'react';
import { Phone } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* 1. BRAND IDENTITY */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/mds-logo.png" alt="MDS Logo" className="h-12 w-auto brightness-0 invert" />
              <span className="text-xl font-black uppercase italic tracking-tighter">
                Macrotek <span className="text-brand-orange">Digital</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering resilient businesses through innovative, human-centered technology 
              rooted in faith, integrity, and purpose.
            </p>
          </div>

          {/* 2. NAVIGATION */}
          <div>
            <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-6 underline decoration-2 underline-offset-8">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* 3. CONTACT & SOCIAL */}
          <div>
            <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-6 underline decoration-2 underline-offset-8">
              Connect With Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm font-bold">
                <div className="p-2 bg-white/5 rounded-lg text-brand-orange">
                  <Phone size={18} />
                </div>
                <a href="tel:09563355850" className="hover:text-white transition-colors tracking-widest">
                  09563355850
                </a>
              </li>
              
              <li className="flex items-center gap-3 text-gray-400 text-sm font-bold">
                <div className="p-2 bg-white/5 rounded-lg text-brand-orange">
                  {/* Manual Facebook SVG to bypass Lucide import errors */}
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <a 
                  href="https://www.facebook.com/macrotekdigitalsolutions" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR: COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black">
            © 2026 Macrotek Digital Solutions Co. All Rights Reserved.
          </p>
          <div className="text-gray-600 text-[10px] font-black uppercase tracking-widest text-right">
            Bicol Region, Philippines
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;