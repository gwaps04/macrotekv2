import React from 'react';
import { 
  Sun, 
  Scissors, 
  GraduationCap, 
  Palmtree 
} from 'lucide-react';

const ClientsSection = () => {
  const clients = [
    {
      name: "Go Green Solar",
      icon: <Sun className="w-8 h-8 text-brand-orange" />,
      description: "Renewable Energy"
    },
    {
      /* MODIFIED: Nasol Haircraft 
         - Icon remains Scissors (Hair Related)
         - Description updated to International Trader 
      */
      name: "Nasol Haircraft",
      icon: <Scissors className="w-8 h-8 text-brand-orange" />,
      description: "International Haircraft Trader"
    },
    {
      name: "Accelerated Review Center",
      icon: <GraduationCap className="w-8 h-8 text-brand-orange" />,
      description: "Academic Excellence"
    },
    {
      /* MODIFIED: Merryland Resort
         - Description updated to Leisure & Relaxation
      */
      name: "Merryland Resort",
      icon: <Palmtree className="w-8 h-8 text-brand-orange" />,
      description: "Leisure & Relaxation"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight italic uppercase">
            Partners in <span className="text-brand-orange">growth</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            We’re accountable to our collaborators, not just contracted by them.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-brand-cream hover:border-brand-orange/20 transition-all duration-500 cursor-default"
            >
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {client.icon}
              </div>
              <h3 className="text-brand-black font-bold text-lg text-center leading-tight">
                {client.name}
              </h3>
              <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-bold">
                {client.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;