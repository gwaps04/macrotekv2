import React from 'react';
/* WOZ LESSON: Import local assets from 'src' so Vite can 
   optimize them and handle the file paths correctly. 
*/
import aboutUsImg from '../assets/about-us-img.jpg';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION: THE ORIGIN (Using your local image) */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <img 
          src={aboutUsImg} 
          alt="Majestic Mt. Mayon and Cagsawa Ruins in Albay" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure the text pops against the mountain backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 text-center px-6">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">
            Our Roots
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mt-2 leading-tight">
            BORN IN <span className="text-brand-orange text-shadow-lg">ALBAY</span>
          </h1>
          <p className="text-gray-200 mt-4 max-w-xl mx-auto font-medium italic">
            Rooted in the resilience of the Bicol Region, under the shadow of the perfect cone.
          </p>
        </div>
      </section>

      {/* 2. THE STORY: MISSION & FAITH */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-brand-black leading-tight uppercase italic">
              A Mission <br /> <span className="text-brand-orange">Beyond Code</span>
            </h2>
            <div className="w-20 h-2 bg-brand-orange mt-4"></div>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              In the heart of the Bicol Region, where Mt. Mayon stands as a testament to nature's grandeur, 
              **Macrotek Digital Solutions** was founded on a simple but unshakeable foundation: 
              <span className="font-bold text-brand-black"> Putting God first before everything.</span>
            </p>
            <p>
              We believe technology is not just about logic and syntax; it is a tool for stewardship. 
              Inspired by a calling to serve people, we leverage digital solutions to empower 
              organizations—from startups to enterprises—with technology that actually improves lives.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES: TRUST & COMMITMENT */}
      <section className="py-20 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-brand-orange transition-all duration-300">
              <h3 className="text-brand-orange font-bold text-xl uppercase tracking-tighter italic">Faith-Driven</h3>
              <p className="mt-4 text-gray-400">Our integrity is rooted in our values. We work as if we are serving a higher purpose.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-brand-orange transition-all duration-300">
              <h3 className="text-brand-orange font-bold text-xl uppercase tracking-tighter italic">Committed</h3>
              <p className="mt-4 text-gray-400">We don't just deliver projects; we build long-term digital foundations that scale with you.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-brand-orange transition-all duration-300">
              <h3 className="text-brand-orange font-bold text-xl uppercase tracking-tighter italic">Unshakeable Trust</h3>
              <p className="mt-4 text-gray-400">Your confidence is our greatest asset. We value the human connection over the contract.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PROMISE QUOTE */}
      <section className="py-24 bg-brand-cream text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-3xl font-light italic text-brand-black leading-relaxed">
            "At Macrotek, we believe that technology should work for people—not the other way around. 
            That’s why every system we build is tailored to the unique goals of each client."
          </p>
          <div className="mt-8 font-black uppercase tracking-widest text-brand-orange">
            The Macrotek Promise
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;