import React, { useEffect, useRef } from 'react';

const ClosingSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.2 }
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
    <section className="py-40 sm:py-48 bg-off-white">
      <div className="container-content">
        <div 
          ref={sectionRef}
          className="animate-on-scroll text-center"
        >
          <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-thin text-charcoal leading-none tracking-[0.02em] max-w-4xl mx-auto">
            Built slowly.
            <br />
            Meant to last.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
