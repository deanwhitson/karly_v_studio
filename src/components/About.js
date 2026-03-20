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
          
          <div className="space-y-8 text-xl leading-relaxed text-center max-w-4xl mx-auto">
            <p className="text-charcoal font-light tracking-[0.01em]">
              I'm Karly V — a musician, writer, and voice artist.
            </p>
            
            <p className="text-charcoal font-light tracking-[0.01em]">
              My work spans music, essays, and visual composition, but it all comes from the same place: a need to understand and make sense of experience.
            </p>
            
            <p className="text-charcoal font-light tracking-[0.01em]">
              Creating like this isn't optional for me. If things stay unstructured — in thought, in emotion, in memory — they build. Writing, music, and visual work are how I process them properly.
            </p>
            
            <p className="text-charcoal font-light tracking-[0.01em]">
              I don't create to express everything as it comes. I create to shape it — to take something unclear or unresolved and work it into a form that holds.
            </p>
            
            <p className="text-charcoal font-light tracking-[0.01em]">
              When something is structured, it becomes easier to understand.
            </p>
            
            <p className="text-charcoal font-light tracking-[0.01em]">
              When it's understood, it becomes easier to live with.
            </p>
            
            <p className="text-charcoal font-light tracking-[0.01em]">
              That process — from fragmentation to form — is where the work happens. This isn't a self-help space, and it's not meant to be objective.
            </p>
            
            <p className="text-charcoal font-light tracking-[0.01em]">
              Everything here is written from my perspective — shaped by what I've experienced, what I've questioned, and what I've been able to understand with the information available to me.
            </p>
            
            <p className="text-charcoal font-light tracking-[0.01em]">
              The aim isn't to provide answers. It's to explore things properly — and, in doing that, to make them feel a little more grounded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
