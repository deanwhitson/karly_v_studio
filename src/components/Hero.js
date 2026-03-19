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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/30 via-charcoal/15 to-charcoal/50"></div>
        <img 
          src="/hero-image.png" 
          alt="Karly V Studio" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12">
        <div 
          ref={heroRef}
          className="animate-on-scroll text-center max-w-6xl mx-auto"
        >
          {/* Large centered title */}
          <h1 className="font-serif text-7xl sm:text-8xl lg:text-9xl font-thin text-off-white mb-12 leading-none tracking-tight">
            Karly V
          </h1>
          
          {/* Tagline */}
          <p className="font-sans text-xl sm:text-2xl lg:text-3xl font-extralight text-off-white/85 mb-20 leading-relaxed tracking-[0.05em] max-w-3xl mx-auto">
            Essays, Music, and Work Built Over Time
          </p>
          
          {/* Optional call-to-action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
            <a 
              href="#work" 
              className="group inline-block px-12 py-4 bg-off-white/5 backdrop-blur-[2px] border border-off-white/10 text-off-white/90 hover:bg-off-white/10 hover:border-off-white/20 transition-all duration-700 text-lg font-extralight tracking-wide"
            >
              Explore Work
              <span className="block w-0 h-px bg-off-white/60 group-hover:w-full transition-all duration-700 mt-2"></span>
            </a>
            <a 
              href="#about" 
              className="group inline-block px-12 py-4 border border-off-white/20 text-off-white/80 hover:bg-off-white hover:text-charcoal transition-all duration-700 text-lg font-extralight tracking-wide"
            >
              Learn More
              <span className="block w-0 h-px bg-charcoal/40 group-hover:w-full transition-all duration-700 mt-2"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 opacity-60">
          <span className="text-off-white text-xs font-extralight tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-off-white/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
