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
              Everything I create begins with the same question:
            </p>
            
            <p className="text-2xl sm:text-3xl text-charcoal font-extralight leading-loose tracking-[0.01em]">
              “How do we do this life thing, right here, right now, while being prepared for tomorrow?”
            </p>
            
            <p className="text-2xl sm:text-3xl text-charcoal font-extralight leading-loose tracking-[0.01em]">
              That question has taken me through music, essays, and countless conversations. It rarely gives me answers, but it consistently leads me somewhere worth going.
            </p>
            
            <p className="text-2xl sm:text-3xl text-charcoal font-extralight leading-loose tracking-[0.01em]">
              I don't arrive with conclusions already formed. I arrive with questions and invite others to think alongside me.
            </p>
            
            <p className="text-2xl sm:text-3xl text-charcoal font-extralight leading-loose tracking-[0.01em]">
              This website isn't a portfolio or a feed. It's an evolving body of work exploring identity, creativity, psychology, authority, relationships, and the everyday challenge of living thoughtfully.
            </p>
            
            <p className="text-2xl sm:text-3xl text-charcoal font-extralight leading-loose tracking-[0.01em]">
              If these are questions you find yourself asking too, welcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialIntro;
