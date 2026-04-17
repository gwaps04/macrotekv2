import React, { useState, useRef } from 'react';
import heroVid from '../assets/hero-vid.mp4';

const HeroSection1 = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-black">
      
      {/* 1. BACKGROUND VIDEO 
          - autoPlay: Starts on load.
          - muted: REQUIRED by browsers for autoPlay to work.
          - playsInline: Prevents iOS from jumping to full-screen.
      */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src={heroVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. DARK OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      {/* 3. MUTE BUTTON (Upper Left Corner) 
          Positioned top-24 to sit cleanly below your sticky navbar.
      */}
      <div className="absolute top-24 left-6 z-30">
        <button 
          onClick={toggleMute}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white hover:bg-brand-orange transition-all duration-300 cursor-pointer shadow-lg group"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      </div>

      {/* 4. HERO CONTENT */}
      <div className="relative z-20 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-tight">
          THE DIGITAL BUSINESS <br />
          SOLUTIONS THAT <span className="text-brand-orange">CARES.</span>
        </h1>
        {/* MODIFIED: Removed the "Elevate your brand" text */}
        <p className="text-gray-200 mt-6 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          We are here because we serve a purpose.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl cursor-pointer">
            Learn More
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all cursor-pointer">
            View Our Work
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection1;