import React, { useEffect, useRef } from 'react';

const VisualWork = () => {
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

  // Sample visual work items - replace with actual project data
  const visualProjects = [
    { id: 1, title: "Typography Studies", aspect: "aspect-[4/3]" },
    { id: 2, title: "Color Explorations", aspect: "aspect-[3/4]" },
    { id: 3, title: "Publication Design", aspect: "aspect-[4/3]" },
    { id: 4, title: "Brand Identity", aspect: "aspect-square" },
    { id: 5, title: "Digital Interfaces", aspect: "aspect-[16/9]" },
    { id: 6, title: "Print Materials", aspect: "aspect-[4/3]" }
  ];

  return (
    <section className="py-32 sm:py-40 bg-warm-white">
      <div className="container-content">
        <div 
          ref={sectionRef}
          className="animate-on-scroll"
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl sm:text-5xl font-extralight text-charcoal mb-6 tracking-tight">
              Visual Work
            </h2>
            <p className="text-xl text-medium-gray/80 max-w-3xl mx-auto leading-relaxed font-light tracking-[0.01em]">
              Visual explorations connected to the same body of work.
            </p>
          </div>

          {/* Simple Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {visualProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${project.aspect} bg-pale-gray/50 relative overflow-hidden`}>
                  {/* Placeholder for actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal/5 to-charcoal/2"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/95 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                    <p className="text-off-white font-extralight text-center px-6 tracking-wide text-lg">
                      {project.title}
                    </p>
                  </div>
                  
                  {/* Uncomment and replace with actual images */}
                  {/* <img 
                    src={`/visual-work-${project.id}.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="#"
              className="group inline-flex items-center space-x-4 px-12 py-4 border border-charcoal/30 text-charcoal/80 hover:bg-charcoal hover:text-off-white transition-all duration-700"
            >
              <span className="font-extralight tracking-wide text-sm uppercase">View Work</span>
              <div className="w-8 h-px bg-charcoal/40 group-hover:bg-off-white/80 group-hover:w-12 transition-all duration-700"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualWork;
