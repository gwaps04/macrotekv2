import React from 'react';
import { 
  Check, 
  X, 
  Rocket, 
  Zap, 
  Building2, 
  ShieldCheck,
  MoveHorizontal 
} from 'lucide-react';

const Pricing = () => {
  // Global booking link for all tiers
  const bookingUrl = "https://sales-macrotek.vercel.app/book-now";

  const tiers = [
    {
      name: "Start Up Business Suite (Tier 1)",
      price: "1,500",
      period: "per month",
      billing: "Billed Yearly",
      description: "Essential digital foundation for new businesses.",
      features: [
        "Professionally Designed Website",
        "User Dashboard (1 Person)",
        "Appointment Calendar",
        "Contact Directory",
        "Basic SEO & Domain",
        "F2F & Online Booking Forms"
      ],
      icon: <Rocket className="w-8 h-8 text-brand-orange" />,
      highlight: false
    },
    {
      name: "Start Up Business Suite (Tier 2)",
      price: "2,500",
      period: "per month",
      billing: "Billed Yearly",
      description: "Advanced automation for growing teams.",
      features: [
        "Everything in Tier 1",
        "A2P Messaging (Automated SMS)",
        "Booking Alerts",
        "Workflow Automation",
        "2 Person Access (Owner + Staff)",
        "Automated Follow-ups"
      ],
      icon: <Zap className="w-8 h-8 text-brand-orange" />,
      highlight: true
    },
    {
      name: "Modern Marketing Lifecycle",
      price: "Billed One Time",
      period: "",
      billing: "Full Implementation",
      description: "The complete high-performance marketing machine.",
      features: [
        "Complete Tier 2 System",
        "5 Person Access (1 Owner + 4 Staff)",
        "SEO + AI Optimized",
        "Optin & Lead Pre-Qualification",
        "Feedback & Checkout Pages",
        "Advanced Interaction Features"
      ],
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      highlight: false,
      dark: true
    },
    {
      name: "Custom Enterprise Solutions",
      price: "Talk to Us",
      period: "",
      billing: "Custom Quote",
      description: "Unshakeable digital infrastructure for large-scale operations.",
      features: [
        "Enterprise Resource Planning (ERP)",
        "Project Management Systems",
        "Unlimited User Access",
        "Advanced Security & Encryption",
        "Priority 24/7 Support",
        "Full Custom Development"
      ],
      icon: <Building2 className="w-8 h-8 text-brand-orange" />,
      highlight: false
    }
  ];

  const tableData = [
    { feature: "Website Design", t1: true, t2: true, mml: true, ent: "Custom" },
    { feature: "Dashboard Users", t1: "1", t2: "2", mml: "5", ent: "Unlimited" },
    { feature: "Booking System", t1: true, t2: true, mml: true, ent: true },
    { feature: "SEO & Domain", t1: "Basic", t2: "Basic", mml: "AI Optimized", ent: "Advanced" },
    { feature: "A2P SMS Messaging", t1: false, t2: true, mml: true, ent: true },
    { feature: "Workflow Automation", t1: false, t2: true, mml: true, ent: true },
    { feature: "Lead Qualif. Pages", t1: false, t2: false, mml: true, ent: true },
    { feature: "Checkout & Feedback", t1: false, t2: false, mml: true, ent: true },
    { feature: "ERP/Project Mgmt", t1: false, t2: false, mml: false, ent: true },
  ];

  return (
    <section id="pricing" className="bg-white min-h-screen pt-24 scroll-mt-20">
      {/* WOZ STYLE INJECTION: Force visible scrollbar on mobile */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          display: block !important;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FF6B00;
          border-radius: 10px;
        }
      `}} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Pricing Plans</h2>
        <h1 className="text-5xl md:text-7xl font-black text-brand-black italic uppercase tracking-tighter">
          Invest in your <span className="text-brand-orange">Growth.</span>
        </h1>
        <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto font-medium">
          Transparent pricing designed for every stage of your business journey.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-[1500px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {tiers.map((tier, idx) => (
          <div 
            key={idx}
            className={`relative p-8 rounded-3xl border flex flex-col h-full ${tier.highlight ? 'border-brand-orange shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-sm'} 
            ${tier.dark ? 'bg-brand-black text-white' : 'bg-white'} transition-all duration-300 hover:-translate-y-1`}
          >
            {tier.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Most Popular
              </span>
            )}
            
            <div className="mb-6">{tier.icon}</div>
            <h3 className={`text-xl font-bold uppercase italic mb-2 ${tier.dark ? 'text-brand-orange' : 'text-brand-black'}`}>{tier.name}</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className={`${tier.name.includes("Marketing") ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'} font-black italic whitespace-nowrap`}>
                {tier.price}
              </span>
              <span className="text-gray-500 font-medium text-xs">{tier.period}</span>
            </div>
            <p className="text-xs text-brand-orange font-bold uppercase tracking-widest mb-6">{tier.billing}</p>
            <p className={`text-sm mb-8 font-medium ${tier.dark ? 'text-gray-400' : 'text-gray-500'}`}>{tier.description}</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {tier.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-medium">
                  <Check className="w-5 h-5 text-brand-orange shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Single Unified Button */}
            <a 
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto w-full py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs text-center transition-all 
              ${tier.dark ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' : 'bg-brand-black text-white hover:bg-brand-orange shadow-md'}`}
            >
              Talk to Us
            </a>
          </div>
        ))}
      </div>

      {/* WOZ MOBILE FIX: Comparison Table */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase italic text-brand-black tracking-tighter">Detailed Feature Comparison</h2>
          
          {/* Visual Indicator for Mobile */}
          <div className="md:hidden flex flex-col items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-3 text-brand-orange animate-pulse">
              <MoveHorizontal size={24} strokeWidth={3} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Swipe right to view tiers</span>
            </div>
            <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden mt-1">
              <div className="w-1/2 h-full bg-brand-orange animate-[slide_2s_infinite]"></div>
            </div>
          </div>
        </div>
        
        {/* Table Container with custom scrollbar */}
        <div className="overflow-x-auto pb-8 custom-scrollbar">
          {/* min-w-[900px] prevents the "squeezing" on mobile browsers */}
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b-2 border-brand-black">
                <th className="py-6 pr-4 font-black uppercase italic text-xs md:text-sm w-1/4">Features</th>
                <th className="py-6 px-4 font-black uppercase italic text-center text-xs md:text-sm">Tier 1</th>
                <th className="py-6 px-4 font-black uppercase italic text-center text-xs md:text-sm">Tier 2</th>
                <th className="py-6 px-4 font-black uppercase italic text-center text-xs md:text-sm">Modern Marketing Lifecycle</th>
                <th className="py-6 px-4 font-black uppercase italic text-center text-brand-orange text-xs md:text-sm italic">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-brand-cream/30 transition-colors">
                  <td className="py-5 pr-4 font-bold text-gray-700 text-xs md:text-sm whitespace-nowrap">{row.feature}</td>
                  <td className="py-5 px-4 text-center">
                    {typeof row.t1 === 'boolean' ? (row.t1 ? <Check className="mx-auto text-brand-orange w-5 h-5" /> : <X className="mx-auto text-gray-300 w-5 h-5" />) : <span className="text-sm font-bold">{row.t1}</span>}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {typeof row.t2 === 'boolean' ? (row.t2 ? <Check className="mx-auto text-brand-orange w-5 h-5" /> : <X className="mx-auto text-gray-300 w-5 h-5" />) : <span className="text-sm font-bold">{row.t2}</span>}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {typeof row.mml === 'boolean' ? (row.mml ? <Check className="mx-auto text-brand-orange w-5 h-5" /> : <X className="mx-auto text-gray-300 w-5 h-5" />) : <span className="text-sm font-bold">{row.mml}</span>}
                  </td>
                  <td className="py-5 px-4 text-center font-bold text-brand-orange italic">
                    {typeof row.ent === 'boolean' ? (row.ent ? <Check className="mx-auto w-5 h-5" /> : <X className="mx-auto w-5 h-5" />) : <span className="text-sm font-bold">{row.ent}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;