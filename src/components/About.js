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

    const currentSection = sectionRef.current;
    observer.observe(currentSection);

    return () => {
      observer.disconnect();
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
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-charcoal font-light leading-relaxed tracking-[0.01em]">
              I'm Karly V — a musician, writer, and voice artist.
            </p>
            
            <p className="text-charcoal font-light leading-relaxed tracking-[0.01em]">
              My work spans music, essays, and visual composition, but it all comes from the same place: a need to understand and make sense of experience.
            </p>
            
            <p className="text-charcoal font-light leading-relaxed tracking-[0.01em]">
              Creating like this isn't optional for me. If things stay unstructured — in thought, in emotion, in memory — they build. Writing, music, and visual work are how I process them properly.
            </p>
            
            <p className="text-charcoal font-light leading-relaxed tracking-[0.01em]">
              I don't create to express everything as it comes. I create to shape it — to take something unclear or unresolved and work it into a form that holds.
            </p>
            
            <p className="text-charcoal font-light leading-relaxed tracking-[0.01em]">
              When something is structured, it becomes easier to understand.
            </p>
            
            <p className="text-charcoal font-light leading-relaxed tracking-[0.01em]">
              When it's understood, it becomes easier to live with.
            </p>
            
            <p className="text-charcoal font-light leading-relaxed tracking-[0.01em]">
              That process — from fragmentation to form — is where work happens. The aim isn't to provide answers. It's to explore things properly — and, in doing that, to make them feel a little more grounded.
            </p>
            
            <p className="text-charcoal font-light leading-relaxed tracking-[0.01em]">
              Everything here is written from my perspective — shaped by what I've experienced, what I've questioned, and what I've been able to understand with the information available to me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
