import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('is-visible');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Title Above Image */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 pt-20 sm:pt-32">
        <div 
          ref={heroRef}
          className="animate-on-scroll text-center max-w-6xl mx-auto"
        >
          {/* Large centered title */}
          <h1 className="font-serif text-7xl sm:text-8xl lg:text-9xl font-thin text-charcoal mb-12 leading-none tracking-tight">
            Karly V
          </h1>
          
          {/* Tagline */}
          <p className="font-sans text-xl sm:text-2xl lg:text-3xl font-extralight text-charcoal/85 mb-20 leading-relaxed tracking-[0.05em] max-w-3xl mx-auto">
            <a href="/essays" className="hover:text-accent transition-colors duration-300">Essays</a>, Music, and Work Built Over Time
          </p>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-3 opacity-60">
              <span className="text-off-white text-xs font-extralight tracking-[0.2em] uppercase"></span>
              <div className="w-px h-8 bg-off-white/30"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Image Background */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/30 via-charcoal/15 to-charcoal/50"></div>
        <img 
          src="/hero-image.png" 
          alt="Karly V Studio" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
