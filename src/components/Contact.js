import React, { useEffect, useRef } from 'react';

const Contact = () => {
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
          
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-4">
                New Projects
              </h3>
              <a 
                href="mailto:hello@karlyvstudio.com" 
                className="text-lg text-accent hover:text-charcoal transition-colors duration-300"
              >
                hello@karlyvstudio.com
              </a>
            </div>
            
            <div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-4">
                General Inquiries
              </h3>
              <a 
                href="mailto:info@karlyvstudio.com" 
                className="text-lg text-accent hover:text-charcoal transition-colors duration-300"
              >
                info@karlyvstudio.com
              </a>
            </div>
            
            <div className="pt-8 border-t border-pale-gray">
              <p className="text-medium-gray mb-4">
                You can also find me on:
              </p>
              <div className="flex justify-center space-x-8">
                <a href="#" className="text-medium-gray hover:text-charcoal transition-colors duration-300">
                  Instagram
                </a>
                <a href="#" className="text-medium-gray hover:text-charcoal transition-colors duration-300">
                  LinkedIn
                </a>
                <a href="#" className="text-medium-gray hover:text-charcoal transition-colors duration-300">
                  Behance
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-off-white rounded-lg">
            <p className="text-sm text-medium-gray italic">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            <p className="text-sm text-charcoal mt-2">— Steve Jobs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
