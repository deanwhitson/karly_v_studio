import React, { useEffect, useRef, useState } from 'react';
import EssayCard from './EssayCard';

const Essays = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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

  const essays = [
    {
      id: 1,
      title: "Authentucaly 40+",
      description: "On turning 40 in a youth obsessed world",
      image: "/SA1 cover art.jpg",
      purchaseUrl: "https://www.amazon.com/AUTHENTICALLY-40-Turning-Forty-Youth-Obsessed-ebook/dp/B0GQXTD12C?ref_=saga_dp_bnx_dsk_dp&qid=1778196887&sr=1-1"
    },
    {
      id: 2,
      title: "The Body at 40: It keeps the score of life",
      description: "NThe Body at 40: It keeps the score of life",
      image: "/SA2 cover art.jpg",
      purchaseUrl: "https://www.amazon.com/Authentically-40-Body-Keeps-Score-ebook/dp/B0GX2NGTDQ?ref_=saga_dp_bnx_dsk_dp&qid=1778196887&sr=1-1"
    },
    {
      id: 3,
      title: "Emotional Stability at 40: The Practice of returning",
      description: "Emotional Stability at 40: The Practice of returning",
      image: "/Essay3 cover art.jpg",
      purchaseUrl: "https://www.amazon.com/Authentically-40-Emotional-Stability-Returning-ebook/dp/B0GX2WRHTJ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.vhWn0fkFYerfcV5B9GsJ7AGA9Hx9uXHkCeQdiTOGY3Xh46EhBlb8N6f3bW7Yb5V1x3yEq770VQf0ggjzRPGhJgF9erFHKSrHUW7tfNtd9GX-9nb3YyuDlmkyPgz0ndZ49Ox3P8dcM8nYF_Y0kuQo9Heif5oeL_WGG3FAdyJGBo19Qhoqr9RpVNx9svAsQaN7ccMnIFK-akW3TzesXAbOJYSD50l_Yb-51iFckVh2PFT2j36sIdtYkZ3wXpfnZoH_IWxTLAgR-fdaurA6qIsZ5TYsUExRG8cBrnHLtwsG9O0.bKdFol_CiBZRWiPH8phw3DkIE0fXNBEoK_qufA5s-6s&dib_tag=se&keywords=karly+v&qid=1778196887&s=amazon-devices&sr=1-1"
    },
    {
      id: 4,
      title: "Coming Soon",
      description: "Exploring the nuances of personal growth",
      image: null,
      purchaseUrl: "#"
    },
    {
      id: 5,
      title: "Coming Soon",
      description: "A meditation on the art of being present",
      image: null,
      purchaseUrl: "#"
    },
    {
      id: 6,
      title: "Coming Soon",
      description: "Finding meaning in the everyday moments",
      image: null,
      purchaseUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container-content">
          <div className={`max-w-4xl mx-auto text-center mb-24 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal mb-8 leading-tight tracking-tight">
              Essays
            </h1>
            <p className="font-sans text-xl sm:text-2xl font-light text-medium-gray leading-relaxed tracking-[0.02em] max-w-3xl mx-auto">
              Long-form writing exploring identity, authorship, and the middle of life.
            </p>
          </div>
          
          <div 
            ref={sectionRef}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {essays.map((essay, index) => (
                <div
                  key={essay.id}
                  className={`transition-all duration-300 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${600 + index * 150}ms` : '0ms'
                  }}
                >
                  <EssayCard
                    title={essay.title}
                    description={essay.description}
                    image={essay.image}
                    purchaseUrl={essay.purchaseUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Essays;
