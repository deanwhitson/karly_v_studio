import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
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
    <section id="about" className="section-padding bg-warm-white">
      <div className="container-content">
        <div 
          ref={sectionRef}
          className="animate-on-scroll max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal mb-4">
              About
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto"></div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-charcoal">
              Karly V is a designer and creative director specializing in editorial design, 
              brand identity, and digital experiences. With a background in fine arts and 
              graphic design, her work is characterized by thoughtful minimalism, 
              sophisticated typography, and a deep understanding of visual hierarchy.
            </p>
            
            <p className="text-charcoal">
              Her approach combines strategic thinking with artistic sensibility, creating 
              designs that are both beautiful and purposeful. Each project is an opportunity 
              to tell a story, evoke emotion, and create meaningful connections between 
              brands and their audiences.
            </p>
            
            <p className="text-charcoal">
              Based in New York City, Karly collaborates with clients worldwide, from 
              independent publishers and cultural institutions to innovative startups and 
              established luxury brands.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">8+</h3>
              <p className="text-medium-gray">Years Experience</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">50+</h3>
              <p className="text-medium-gray">Projects Completed</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">12</h3>
              <p className="text-medium-gray">Industry Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
