import React from 'react';
import { 
  Briefcase, 
  Layers, 
  UserCheck, 
  ShieldCheck, 
  LifeBuoy, 
  Sparkles 
} from 'lucide-react';

const WhyTrustSection = () => {
  const trustPoints = [
    {
      title: "Driven by Real Business Experience",
      desc: "We do more than write code. We understand your workflows and challenges to ensure every solution delivers genuine value.",
      icon: <Briefcase className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "Tailored Solutions",
      desc: "Every business is unique. Our applications and automation flows are customized to fit your exact operations and long-term vision.",
      icon: <Layers className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "Built for People",
      desc: "Technology should simplify, not complicate. Our interfaces are intuitive and user-friendly to reduce training time.",
      icon: <UserCheck className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "Secure & Scalable Systems",
      desc: "Built with industry best practices in security and encryption. Designed to grow with you from 10 users to 10,000.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "End-to-End Support",
      desc: "From planning to maintenance and future upgrades—we walk with you as a reliable digital partner at every stage.",
      icon: <LifeBuoy className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "Powered by Innovation",
      desc: "With modern frameworks and AI-driven methods, we ensure your business stays competitive in a fast-changing market.",
      icon: <Sparkles className="w-6 h-6 text-brand-orange" />
    }
  ];

  return (
    <section id="trust" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-20">
          <div className="lg:w-2/3">
            <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">
              Our Commitment
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-black leading-tight uppercase italic">
              Why Trust <span className="text-brand-orange">Macrotek?</span>
            </h3>
            <p className="mt-8 text-gray-700 text-lg leading-relaxed max-w-3xl">
              Choosing a technology partner is a major decision, and at Macrotek Digital Solutions, 
              we work hard to earn that trust. Although we are a new player in the industry, 
              our approach, standards, and results speak for themselves.
            </p>
          </div>
          <div className="lg:w-1/3 text-gray-500 font-medium italic border-l-2 border-brand-orange/30 pl-6 hidden lg:block">
            Businesses deserve a partner that is modern, proactive, and grounded in real-world understanding.
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-brand-cream hover:border-brand-orange/30 transition-all duration-500"
            >
              <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-black mb-3 uppercase tracking-tighter">
                {point.title}
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Trust Statement */}
        <div className="bg-brand-black rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <p className="relative z-10 text-2xl md:text-3xl font-light italic text-white leading-relaxed max-w-4xl mx-auto">
            "At Macrotek Digital Solutions, building trust isn’t a slogan—it’s how we work. 
            We exist to help organizations operate smarter, faster, and more efficiently 
            through secure and intelligent digital transformation."
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyTrustSection;