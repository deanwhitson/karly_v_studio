import React from 'react';

const EssayCard = ({ 
  image, 
  title, 
  description, 
  purchaseUrl, 
  className = "" 
}) => {
  const [showSummary, setShowSummary] = React.useState(false);

  const getFirstThreeSentences = (text) => {
    if (!text || typeof text !== 'string') return '';
    const sentences = text.split(/[.!?]+/).filter(s => s.trim());
    return sentences.slice(0, 3).join('. ');
  };

  return (
    <article className={`group cursor-pointer w-full ${className}`}>
      <div className="overflow-hidden rounded-2xl bg-off-white border border-pale-gray/20 shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 h-full">
        {/* Poster Image */}
        <div className="aspect-[4/3] overflow-hidden bg-pale-gray/30">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pale-gray/20 to-off-white flex items-center justify-center">
              <span className="text-charcoal/10 text-6xl font-serif">K</span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
          {/* Essay Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-light text-charcoal leading-tight transition-colors duration-300 ease-out group-hover:text-medium-gray">
            {title}
          </h3>
          
          {/* Optional Description */}
          {description && (
            <p className="text-sm text-medium-gray leading-relaxed font-light line-clamp-2">
              {description}
            </p>
          )}
          
          {/* View Summary Button */}
          <div className="pt-2 sm:pt-4">
            <button
              onClick={() => setShowSummary(true)}
              className="inline-flex items-center justify-center space-x-2 px-4 py-2 border border-medium-gray/30 text-sm font-light text-medium-gray hover:bg-charcoal hover:text-off-white transition-all duration-300 ease-out"
            >
              <span>View Summary</span>
            </button>
          </div>

          {/* Purchase Button */}
          <div className="pt-2 sm:pt-4">
            <a 
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-4 py-2 border border-medium-gray/30 text-sm font-light text-medium-gray hover:bg-charcoal hover:text-off-white transition-all duration-300 ease-out group/purchase"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Purchase Essay</span>
              <svg 
                className="w-3 h-3 transition-transform duration-300 ease-out group-hover/purchase:translate-x-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Summary Popup */}
      {showSummary && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowSummary(false)}
        >
          <div 
            className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-xl font-light text-charcoal mb-4">
              Essay Summary
            </h3>
            <h4 className="font-serif text-lg font-light text-charcoal mb-3">
              {title}
            </h4>
            <p className="text-medium-gray leading-relaxed font-light">
              {getFirstThreeSentences(description)}
            </p>
            <button
              onClick={() => setShowSummary(false)}
              className="mt-4 px-4 py-2 bg-charcoal text-off-white hover:bg-medium-gray transition-colors duration-300 ease-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default EssayCard;
