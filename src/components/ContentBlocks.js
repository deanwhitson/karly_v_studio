import React, { useEffect, useRef } from 'react';

const ContentBlocks = () => {
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

  const contentBlocks = [
    {
      title: "ESSAYS",
      description: "A series of long-form essays exploring authorship, identity, and middle of life.",
      cta: "Read Essays",
      delay: 0,
      href: "/essays"
    },
    {
      title: "MUSIC",
      description: "Original music — recorded, written, and performed across different phases.",
      cta: "Listen",
      delay: 150,
      href: "#"
    },
    {
      title: "NOTES",
      description: "Shorter pieces. Fragments, reflections, and ideas that don't need to become essays.",
      cta: "Read Notes",
      delay: 300,
      href: "/notes"
    }
  ];

  return (
    <section className="py-32 sm:py-40 bg-off-white">
      <div className="container-content">
        <div 
          ref={sectionRef}
          className="animate-on-scroll"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {contentBlocks.map((block, index) => (
              <a 
                key={index}
                href={block.href}
                className="group block p-10 lg:p-12 bg-warm-white border border-pale-gray/50 hover:border-charcoal/10 transition-all duration-700 hover:bg-off-white relative overflow-hidden"
                style={{ animationDelay: `${block.delay}ms` }}
              >
                {/* Subtle background accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="h-full flex flex-col relative z-10">
                  {/* Title */}
                  <h3 className="font-serif text-3xl lg:text-4xl font-extralight text-charcoal mb-8 tracking-tight group-hover:text-accent/90 transition-colors duration-700">
                    {block.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-lg lg:text-xl text-medium-gray/80 leading-relaxed mb-10 flex-grow font-light tracking-[0.01em]">
                    {block.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal font-extralight tracking-wide group-hover:text-accent/90 transition-colors duration-700 text-base uppercase text-sm">
                      {block.cta}
                    </span>
                    <div className="w-8 h-px bg-charcoal/30 group-hover:bg-accent/60 group-hover:w-12 transition-all duration-700"></div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlocks;
