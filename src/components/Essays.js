import React, { useEffect, useRef, useState } from 'react';
import EssayCard from './EssayCard';

const Essays = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
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
      image: "/Essay1_Coverpng.png",
      purchaseUrl: "https://kdp.amazon.com/en_US/bookshelf",
      category: "essays"
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'essays', label: 'Essays' },
    { id: 'notes', label: 'Notes' }
  ];

  const filteredEssays = selectedCategory === 'all' 
    ? essays 
    : essays.filter(essay => essay.category === selectedCategory);

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
          
          {/* Category Tags */}
          <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '200ms'
          }}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 text-sm font-light tracking-[0.05em] transition-all duration-300 ease-out border ${
                    selectedCategory === category.id
                      ? 'bg-charcoal text-off-white border-charcoal'
                      : 'bg-off-white text-medium-gray border-pale-gray/30 hover:border-charcoal/50 hover:text-charcoal'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div 
            ref={sectionRef}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {filteredEssays.map((essay, index) => (
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
            
            {filteredEssays.length === 0 && (
              <div className={`text-center py-16 transition-all duration-300 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <p className="text-medium-gray font-light">
                  No {selectedCategory} found.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Essays;
