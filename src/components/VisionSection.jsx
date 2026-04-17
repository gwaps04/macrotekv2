import React from 'react';
import { Eye } from 'lucide-react';

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-brand-cream/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Icon & Label */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
            <Eye className="w-8 h-8 text-brand-orange" />
          </div>
          <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm">
            Our Future Path
          </h2>
        </div>

        {/* Title */}
        <h3 className="text-4xl md:text-5xl font-black text-brand-black uppercase italic mb-12 tracking-tighter leading-tight">
          Vision <span className="text-brand-orange text-shadow">Statement</span>
        </h3>

        {/* Vision Content Block */}
        <div className="space-y-10 text-gray-800 leading-relaxed">
          
          {/* Main Statement */}
          <p className="text-xl md:text-2xl font-bold text-brand-black italic">
            To become a trusted digital transformation partner in the Bicol Region and beyond, 
            empowering resilient businesses and service professionals through innovative, 
            human-centered technology rooted in faith, integrity, and purpose.
          </p>

          <div className="w-24 h-1 bg-brand-orange/30 mx-auto"></div>

          {/* Supporting Vision */}
          <div className="text-lg md:text-xl font-medium text-gray-700 space-y-8">
            <p>
              We envision a future where organizations of all sizes operate with stability, 
              adapt confidently to change, and grow sustainably through systems that are secure, 
              scalable, and designed for real-world challenges.
            </p>

            <p className="border-l-4 border-brand-orange pl-6 py-2 text-left bg-white/40 rounded-r-xl">
              Guided by our commitment to put God first, Macrotek Digital Solutions aspires to build 
              digital ecosystems that strengthen resilience, simplify operations, and create 
              lasting value for communities in an ever-evolving technological world.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionSection;