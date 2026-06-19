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
              Let's Work Together
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto"></div>
          </div>
          
          <p className="text-lg text-medium-gray mb-12 leading-relaxed">
            I'm always interested in hearing about new projects and collaborations. 
            Whether you have a specific project in mind or would like to discuss 
            potential opportunities, I'd love to hear from you.
          </p>
          
          <div className="mt-16 p-8 bg-off-white rounded-lg">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
