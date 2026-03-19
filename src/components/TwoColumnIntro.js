import React, { useEffect, useRef } from 'react';

const TwoColumnIntro = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.15 }
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

  const whatIs = [
    "A body of finished work",
    "Essays written over time",
    "Music and creative output",
    "A place for depth and clarity"
  ];

  const whatIsnt = [
    "A content feed",
    "Daily updates or behind-the-scenes",
    "Advice or self-help",
    "A performance of a life"
  ];

  return (
    <section className="py-32 sm:py-40 bg-warm-white">
      <div className="container-content">
        <div 
          ref={sectionRef}
          className="animate-on-scroll"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative">
            {/* Left Column */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extralight text-charcoal mb-12 tracking-tight">
                What this is
              </h2>
              <ul className="space-y-6">
                {whatIs.map((item, index) => (
                  <li 
                    key={index}
                    className="text-xl sm:text-2xl text-charcoal font-extralight leading-relaxed flex items-start opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                  >
                    <span className="text-accent/80 mr-4 mt-2 text-2xl leading-none">—</span>
                    <span className="tracking-[0.02em]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pale-gray to-transparent transform -translate-x-1/2"></div>

            {/* Right Column */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extralight text-charcoal mb-12 tracking-tight">
                What this isn't
              </h2>
              <ul className="space-y-6">
                {whatIsnt.map((item, index) => (
                  <li 
                    key={index}
                    className="text-xl sm:text-2xl text-charcoal font-extralight leading-relaxed flex items-start opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150 + 600}ms`, animationFillMode: 'forwards' }}
                  >
                    <span className="text-light-gray/60 mr-4 mt-2 text-2xl leading-none">—</span>
                    <span className="tracking-[0.02em]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnIntro;
