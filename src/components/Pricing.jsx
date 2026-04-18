import React from 'react';
import { 
  Check, 
  X, 
  Rocket, 
  Zap, 
  Building2, 
  ShieldCheck
} from 'lucide-react';

const Pricing = () => {
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
      cta: "Start with Tier 1",
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
      cta: "Upgrade to Tier 2",
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
      cta: "Get Full Lifecycle",
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
      cta: "Talk to Us",
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
    <section id="pricing" className="bg-white min-h-screen pt-16 md:pt-24 scroll-mt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12 md:mb-16">
        <h2 className="text-brand-orange font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Pricing Plans</h2>
        <h1 className="text-4xl md:text-7xl font-black text-brand-black italic uppercase tracking-tighter leading-tight">
          Invest in your <span className="text-brand-orange">Growth.</span>
        </h1>
        <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-medium px-4">
          Transparent pricing designed for every stage of your business journey.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-[1500px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-24">
        {tiers.map((tier, idx) => (
          <div 
            key={idx}
            className={`relative p-8 rounded-3xl border flex flex-col h-full ${tier.highlight ? 'border-brand-orange shadow-2xl scale-100 lg:scale-105 z-10' : 'border-gray-100 shadow-sm'} 
            ${tier.dark ? 'bg-brand-black text-white' : 'bg-white'} transition-all duration-300`}
          >
            {tier.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
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
            <p className="text-[10px] text-brand-orange font-bold uppercase tracking-widest mb-6">{tier.billing}</p>
            <p className={`text-sm mb-8 font-medium ${tier.dark ? 'text-gray-400' : 'text-gray-500'}`}>{tier.description}</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {tier.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-medium">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-orange shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button className={`mt-auto w-full py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all 
              ${tier.dark ? 'bg-brand-orange text-white shadow-lg' : 'bg-brand-black text-white hover:bg-brand-orange'}`}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>

      {/* WOZ MOBILE FIX: Comparison Table */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-black uppercase italic text-brand-black tracking-tighter">Detailed Feature Comparison</h2>
          <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-2 md:hidden">Scroll right to view more tiers →</p>
        </div>
        
        {/* Container for horizontal scrolling on mobile */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          {/* Enforce min-width so table content doesn't squeeze */}
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
                    {typeof row.t1 === 'boolean' ? (row.t1 ? <Check className="mx-auto text-brand-orange w-4 h-4 md:w-5 md:h-5" /> : <X className="mx-auto text-gray-300 w-4 h-4 md:w-5 md:h-5" />) : <span className="text-xs md:text-sm font-bold">{row.t1}</span>}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {typeof row.t2 === 'boolean' ? (row.t2 ? <Check className="mx-auto text-brand-orange w-4 h-4 md:w-5 md:h-5" /> : <X className="mx-auto text-gray-300 w-4 h-4 md:w-5 md:h-5" />) : <span className="text-sm font-bold">{row.t2}</span>}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {typeof row.mml === 'boolean' ? (row.mml ? <Check className="mx-auto text-brand-orange w-4 h-4 md:w-5 md:h-5" /> : <X className="mx-auto text-gray-300 w-4 h-4 md:w-5 md:h-5" />) : <span className="text-sm font-bold">{row.mml}</span>}
                  </td>
                  <td className="py-5 px-4 text-center font-bold text-brand-orange italic">
                    {typeof row.ent === 'boolean' ? (row.ent ? <Check className="mx-auto w-4 h-4 md:w-5 md:h-5" /> : <X className="mx-auto w-4 h-4 md:w-5 md:h-5" />) : <span className="text-sm font-bold">{row.ent}</span>}
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