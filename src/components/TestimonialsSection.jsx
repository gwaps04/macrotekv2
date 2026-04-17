import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      /* 1st Video (Left): Ms. Yolly N. Llarena */
      id: "uaGsV78FRMM",
      name: "Ms. Yolly N. Llarena",
      role: "Corporate Secretary, Nasol Haircraft Corp.",
      quote: "Macrotek helped our small business transform and modernize our operations through effective technical solutions."
    },
    {
      /* 2nd Video (Right): Engr. Reggie Maigue */
      id: "fhXtAWwy0DU",
      name: "Engr. Reggie Maigue",
      role: "Founder, Accelerated Review Center",
      quote: "Macrotek provided the technical support we needed to grow and succeed as a startup review center."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-black text-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4 text-brand-orange">
            <Quote size={40} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight">
            What Our <span className="text-brand-orange">Partners</span> Say
          </h2>
          <p className="mt-4 text-gray-400 text-lg uppercase tracking-widest font-semibold">
            Real Stories. Real Impact.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testi) => (
            <div key={testi.id} className="group flex flex-col">
              
              {/* 1. THE VIDEO CONTAINER */}
              <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl group-hover:border-brand-orange/50 transition-all duration-500 bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  /* MODIFIED URL: Added &vq=hd720 to hint for 720p quality */
                  src={`https://www.youtube.com/embed/${testi.id}?modestbranding=1&rel=0&iv_load_policy=3&controls=1&showinfo=0&vq=hd720`}
                  title={testi.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Subtle Overlay to blend the player into our design */}
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl"></div>
              </div>

              {/* 2. TEXT INFO */}
              <div className="mt-8 px-4 border-l-2 border-brand-orange/30 group-hover:border-brand-orange transition-colors duration-500">
                <h3 className="text-2xl font-bold uppercase italic tracking-tighter text-brand-orange leading-tight">
                  {testi.name}
                </h3>
                <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-4">
                  {testi.role}
                </p>
                <p className="text-lg text-gray-200 leading-relaxed font-medium">
                  "{testi.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;