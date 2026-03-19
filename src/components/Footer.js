import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-off-white section-padding">
      <div className="container-content">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-medium mb-6">
            Karly V Studio
          </h2>
          <p className="text-light-gray mb-8 leading-relaxed">
            Creating thoughtful, editorial design work that stands at the intersection of 
            art and communication. Based in New York, working globally.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <a href="mailto:hello@karlyvstudio.com" className="text-off-white hover:text-accent-light transition-colors duration-300">
              hello@karlyvstudio.com
            </a>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-light-gray hover:text-off-white transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-light-gray hover:text-off-white transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-light-gray hover:text-off-white transition-colors duration-300">
                Behance
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-charcoal/50">
            <p className="text-sm text-light-gray">
              © 2024 Karly V Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
