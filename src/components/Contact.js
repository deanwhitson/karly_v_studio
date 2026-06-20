import React, { useEffect, useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-warm-white">
      <div className="container-content">
        <div 
          ref={sectionRef}
          className="animate-on-scroll max-w-2xl mx-auto text-center"
        >
          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal mb-4">
              Follow me on:
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="mb-12">
            <a href="https://www.instagram.com/karlyvthemusic/" target="_blank" rel="noopener noreferrer" className="text-lg text-charcoal mb-4 block hover:text-accent transition-colors duration-300">
              Instagram
            </a>
            <a href="https://www.facebook.com/search/top?q=karly%20v" target="_blank" rel="noopener noreferrer" className="text-lg text-charcoal mb-4 block hover:text-accent transition-colors duration-300">
              Facebook
            </a>
            <a href="https://www.youtube.com/@karlyv7900" target="_blank" rel="noopener noreferrer" className="text-lg text-charcoal mb-4 block hover:text-accent transition-colors duration-300">
              YouTube
            </a>
          </div>

          <p className="text-lg text-medium-gray mb-12 leading-relaxed">
            <a href="mailto:karlyvmusic@gmail.com" className="hover:text-accent transition-colors duration-300">
              Contact me on karlyvmusic@gmail.com
            </a>
          </p>
          
          <div className="mt-16 p-8 bg-off-white rounded-lg">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
