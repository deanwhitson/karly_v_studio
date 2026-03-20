import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      isScrolled ? 'bg-off-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container-content py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="font-serif text-2xl font-medium text-charcoal">
              Karly V Studio
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-medium-gray hover:text-charcoal transition-colors duration-300">
              Home
            </a>
            <a href="#essays" className="text-sm font-medium text-medium-gray hover:text-charcoal transition-colors duration-300">
              Essays
            </a>
            <a href="#about" className="text-sm font-medium text-medium-gray hover:text-charcoal transition-colors duration-300">
              About
            </a>
            <a href="#work" className="text-sm font-medium text-medium-gray hover:text-charcoal transition-colors duration-300">
              Work
            </a>
            <a href="#contact" className="text-sm font-medium text-medium-gray hover:text-charcoal transition-colors duration-300">
              Contact
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-pale-gray transition-colors duration-300">
            <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
