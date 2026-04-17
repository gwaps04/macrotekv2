import React from 'react';
import { 
  Globe, Target, Building2, BookOpen, ShoppingBag, Zap 
} from 'lucide-react';

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: "Online Branding - Web Design",
      icon: <Globe className="w-6 h-6" />,
      items: ["Basic Landing Page", "StoreFront Branding", "Personal Online Profile"]
    },
    {
      title: "Sales Conversion & AI Tech",
      icon: <Target className="w-6 h-6" />,
      items: ["Sales Funnel", "Booking System", "AI ChatBot", "Guided ChatBot (FB/IG/Web)"]
    },
    {
      title: "Enterprise Systems",
      icon: <Building2 className="w-6 h-6" />,
      items: ["HR & Payroll", "Queuing & Inventory", "Business Portal", "CRM Systems"]
    },
    {
      title: "Education Technology",
      icon: <BookOpen className="w-6 h-6" />,
      items: ["HR Digital Training", "Knowledgebase", "E-Learning Systems"]
    },
    {
      title: "Retail and Commerce",
      icon: <ShoppingBag className="w-5 h-5" />,
      items: ["Online Shop", "B2B / B2C Platforms", "C2C E-Commerce"]
    }
  ];

  return (
    /* CHANGE: id="services" added to match navbar, 
       scroll-mt-20 prevents sticky navbar overlap. */
    <section id="services" className="py-24 bg-brand-black text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">
            Our Solutions
          </h2>
          <h3 className="text-4xl md:text-6xl font-black italic uppercase leading-tight tracking-tighter">
            What we can <span className="text-brand-orange">do for you</span>
          </h3>
          <div className="w-32 h-2 bg-brand-orange mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-brand-orange/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-orange flex items-center justify-center rounded-2xl mb-6 shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-orange uppercase tracking-tighter mb-4 italic">
                  {service.title}
                </h4>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <Zap className="w-3 h-3 text-brand-orange mr-2 opacity-50" />
                      <span className="text-sm font-medium tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="p-8 rounded-3xl bg-brand-orange flex flex-col justify-center items-center text-center shadow-2xl shadow-brand-orange/20">
            <h4 className="text-2xl font-black text-brand-black uppercase leading-none italic mb-4">
              Ready for <br /> Transformation?
            </h4>
            <button className="bg-brand-black text-white px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform cursor-pointer uppercase tracking-widest">
              Consult Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;