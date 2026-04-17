import React from 'react';
import { 
  ShoppingBag, 
  Home, 
  HeartPulse, 
  UtensilsCrossed, 
  Car, 
  GraduationCap, 
  PhoneCall, 
  Hammer, 
  Package, 
  Truck, 
  Briefcase, 
  Users,
  ChevronRight
} from 'lucide-react';

const WhatWeDoSection = () => {
  const industries = [
    { name: "Retail Sales & Marketing", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Real Estate", icon: <Home className="w-5 h-5" /> },
    { name: "Health & Wellness", icon: <HeartPulse className="w-5 h-5" /> },
    { name: "Food Businesses", icon: <UtensilsCrossed className="w-5 h-5" /> },
    { name: "Automotives", icon: <Car className="w-5 h-5" /> },
    { name: "Schools & Education", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Telecommunication", icon: <PhoneCall className="w-5 h-5" /> },
    { name: "Engineering", icon: <Hammer className="w-5 h-5" /> },
    { name: "Logistics & Supply Chain", icon: <Package className="w-5 h-5" /> },
    { name: "Transportation", icon: <Truck className="w-5 h-5" /> },
    { name: "Consultancy Industries", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Manpower & Recruitment", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. NARRATIVE HEADER */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm block mb-4">
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-black leading-tight uppercase italic mb-8">
              Innovative Digital Solutions <br /> 
              <span className="text-brand-orange">for Real Business Growth</span>
            </h2>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Macrotek Digital Solutions is a new but forward-driven player in 
              <span className="font-bold text-brand-black"> Web Application Consultancy</span>, 
              committed to helping businesses of all sizes—from small startups to 
              enterprise-level organizations—transform through modern automation 
              and digital innovation.
            </p>
            <p className="text-gray-600 leading-relaxed italic border-l-4 border-brand-orange pl-6">
              We deliver practical, customized solutions designed to solve immediate 
              challenges while building a strong foundation for long-term success. 
              We focus on digital tools that streamline operations and support sustainable growth.
            </p>
          </div>
        </div>

        {/* 2. SCALE ANCHOR */}
        <div className="text-center mb-12 py-12 bg-brand-black rounded-3xl text-white shadow-2xl transition-transform hover:scale-[1.01] duration-500">
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">
            We Are Ready to Provide <span className="text-brand-orange">Basic to Enterprise Systems</span>
          </h3>
          <p className="text-gray-400 mt-2 font-medium">
            Serving a diverse range of industries with tailored digital solutions.
          </p>
        </div>

        {/* 3. THE INDUSTRY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-brand-cream hover:border-brand-orange/30 transition-all duration-300 group cursor-default"
            >
              <div className="bg-white p-3 rounded-lg shadow-sm text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <span className="text-brand-black font-bold text-sm uppercase tracking-tight leading-tight">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
          
          {/* Decorative Finish Card */}
          <div className="flex items-center justify-center p-5 rounded-xl bg-brand-orange text-white shadow-lg shadow-brand-orange/20">
            <span className="font-bold uppercase text-sm tracking-widest">And many more...</span>
            <ChevronRight className="ml-2 w-4 h-4" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;