import React, { useEffect, useRef } from 'react';

const Work = () => {
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

  const projects = [
    {
      title: "Monograph Magazine",
      category: "Editorial Design",
      description: "A quarterly art publication exploring contemporary photography and visual culture.",
      image: "monograph"
    },
    {
      title: "Aria Fragrances",
      category: "Brand Identity",
      description: "Complete brand identity and packaging design for luxury fragrance house.",
      image: "aria"
    },
    {
      title: "The Edit Journal",
      category: "Digital Design",
      description: "Digital platform for long-form journalism and cultural criticism.",
      image: "edit"
    },
    {
      title: "Studio Six Gallery",
      category: "Exhibition Design",
      description: "Visual identity and exhibition materials for contemporary art space.",
      image: "studio"
    },
    {
      title: "Nordic Kitchen",
      category: "Publication Design",
      description: "Cookbook featuring modern Scandinavian cuisine and food photography.",
      image: "nordic"
    },
    {
      title: "Forms & Function",
      category: "Web Design",
      description: "Minimalist portfolio website for architectural practice.",
      image: "forms"
    }
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container-content">
        <div 
          ref={sectionRef}
          className="animate-on-scroll"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal mb-4">
              Selected Work
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden bg-pale-gray aspect-[4/3] mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium mb-2">{project.category}</p>
                      <p className="text-xs px-4">{project.description}</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-medium text-charcoal mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-medium-gray">
                  {project.category}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white transition-all duration-300"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
