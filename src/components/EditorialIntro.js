import React, { useEffect, useRef } from 'react';

const EditorialIntro = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.15 }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <section className="py-32 sm:py-40 bg-off-white">
      <div className="container-content">
        <div 
          ref={introRef}
          className="animate-on-scroll max-w-4xl mx-auto text-center"
        >
          <div className="space-y-8 leading-relaxed">
            <p className="text-2xl sm:text-3xl text-charcoal font-extralight leading-loose tracking-[0.01em]">
              This site is a collection of essays, music, and visual work exploring 
              identity, creativity, and what it means to build a life deliberately.
            </p>
            
            <p className="text-2xl sm:text-3xl text-charcoal font-extralight leading-loose tracking-[0.01em]">
              It isn't a feed or a performance space. It's a body of work — 
              considered, evolving, and made to be returned to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialIntro;
