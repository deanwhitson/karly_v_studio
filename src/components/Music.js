import React, { useEffect, useRef, useState } from 'react';
import AudioPlayer from './AudioPlayer';
import PreviewPlayer from './PreviewPlayer';

const Music = () => {
  const musicRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [featuredVisible, setFeaturedVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (musicRef.current) {
        musicRef.current.classList.add('is-visible');
        setHeroVisible(true);
      }
    }, 300);

    // Staggered section reveals
    const featuredTimer = setTimeout(() => {
      if (featuredRef.current) {
        featuredRef.current.classList.add('is-visible');
        setFeaturedVisible(true);
      }
    }, 800);

    const gridTimer = setTimeout(() => {
      if (gridRef.current) {
        gridRef.current.classList.add('is-visible');
        setGridVisible(true);
      }
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(featuredTimer);
      clearTimeout(gridTimer);
    };
  }, []);

  const featuredTrack = {
    id: 'featured',
    title: "Silent Echoes",
    description: "A contemplative piece exploring the spaces between sounds",
    cover: "/music/featured-track.jpg",
    audioUrl: "/music/silent-echoes.mp3"
  };

  const otherTracks = [
    {
      id: 1,
      title: "Urban Dreams",
      description: "City rhythms and midnight thoughts",
      cover: "/music/track-1.jpg",
      previewUrl: "/music/urban-dreams-preview.mp3",
      fullVersionAvailable: true,
      purchaseUrl: "#",
      streamingUrl: "#"
    },
    {
      id: 2,
      title: "Morning Light",
      description: "Gentle awakening and new beginnings",
      cover: "/music/track-2.jpg",
      previewUrl: "/music/morning-light-preview.mp3",
      fullVersionAvailable: true,
      purchaseUrl: "#",
      streamingUrl: "#"
    },
    {
      id: 3,
      title: "Fading Memories",
      description: "Nostalgia and the passage of time",
      cover: "/music/track-3.jpg",
      previewUrl: "/music/fading-memories-preview.mp3",
      fullVersionAvailable: true,
      purchaseUrl: "#",
      streamingUrl: "#"
    },
    {
      id: 4,
      title: "Electric Hearts",
      description: "Digital romance and modern connections",
      cover: "/music/track-4.jpg",
      previewUrl: "/music/electric-hearts-preview.mp3",
      fullVersionAvailable: true,
      purchaseUrl: "#",
      streamingUrl: "#"
    },
    {
      id: 5,
      title: "Still Waters",
      description: "Deep reflection and inner peace",
      cover: "/music/track-5.jpg",
      previewUrl: "/music/still-waters-preview.mp3",
      fullVersionAvailable: true,
      purchaseUrl: "#",
      streamingUrl: "#"
    },
    {
      id: 6,
      title: "Neon Nights",
      description: "Urban exploration and discovery",
      cover: "/music/track-6.jpg",
      previewUrl: "/music/neon-nights-preview.mp3",
      fullVersionAvailable: true,
      purchaseUrl: "#",
      streamingUrl: "#"
    }
  ];

  const handleTrackPlay = (trackId) => {
    if (currentTrackId === trackId && isPlaying) {
      // Stop current track
      setIsPlaying(false);
      setCurrentTrackId(null);
    } else {
      // Play new track (stops previous one automatically)
      setIsPlaying(true);
      setCurrentTrackId(trackId);
    }
  };

  const handleTrackPause = () => {
    setIsPlaying(false);
  };

  const handleTrackChange = (newTrackId) => {
    if (currentTrackId !== newTrackId) {
      setCurrentTrackId(newTrackId);
      setIsPlaying(true);
    }
  };

  const isFeaturedPlaying = isPlaying && currentTrackId === 'featured';

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section - Matching Homepage Style */}
      <section className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Title Section */}
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 pt-20 sm:pt-32">
          <div 
            ref={musicRef}
            className={`animate-on-scroll text-center max-w-6xl mx-auto transition-all duration-1000 ease-out ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Large centered title */}
            <h1 className="font-serif text-7xl sm:text-8xl lg:text-9xl font-thin text-charcoal mb-12 leading-none tracking-tight transition-all duration-300 ease-out hover:text-accent/20">
              MUSIC
            </h1>
            
            {/* Subtitle */}
            <p className="font-sans text-xl sm:text-2xl lg:text-3xl font-extralight text-charcoal/85 mb-12 leading-relaxed tracking-[0.05em] max-w-3xl mx-auto transition-all duration-300 ease-out hover:text-charcoal">
              Recorded, written, and performed across different phases.
            </p>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-3 opacity-60 transition-opacity duration-300 ease-out hover:opacity-80">
                <span className="text-off-white text-xs font-extralight tracking-[0.2em] uppercase"></span>
                <div className="w-px h-8 bg-charcoal/30 transition-all duration-300 ease-out hover:h-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Track Section */}
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <div 
            ref={featuredRef}
            className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Desktop: Horizontal layout | Mobile: Vertical stack */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Cover Image - Mobile: Full width | Desktop: Constrained */}
              <div className="w-full lg:w-auto lg:flex-1 lg:max-w-md">
                <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg shadow-lg group transition-all duration-300 ease-out hover:shadow-xl">
                  <img 
                    src={featuredTrack.cover}
                    alt={featuredTrack.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300 ease-out"></div>
                </div>
              </div>

              {/* Track Info and Custom Audio Player */}
              <div className="flex-1 text-center lg:text-left w-full lg:w-auto transition-all duration-300 ease-out">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-charcoal mb-4 leading-tight transition-all duration-300 ease-out hover:text-accent/30">
                  {featuredTrack.title}
                </h2>
                <p className="font-sans text-base sm:text-lg text-medium-gray mb-6 sm:mb-8 leading-relaxed transition-all duration-300 ease-out hover:text-charcoal/80">
                  {featuredTrack.description}
                </p>

                {/* Custom Audio Player */}
                <AudioPlayer 
                  track={featuredTrack}
                  isPlaying={isFeaturedPlaying}
                  onPlay={() => handleTrackPlay('featured')}
                  onPause={handleTrackPause}
                  onTrackChange={handleTrackChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <div className="h-px bg-charcoal/10"></div>
        </div>
      </div>

      {/* Other Tracks Section */}
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <div 
            ref={gridRef}
            className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            {/* Responsive Grid: Mobile 1col | Tablet 2col | Desktop 3col */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {otherTracks.map((track, index) => {
                const isTrackPlaying = isPlaying && currentTrackId === track.id;
                
                return (
                  <div
                    key={track.id}
                    className={`group transition-all duration-700 ease-out ${
                      gridVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: gridVisible ? `${index * 150}ms` : '0ms' }}
                  >
                    <div className="relative">
                      {/* Cover Image */}
                      <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg group mb-4 transition-all duration-300 ease-out hover:shadow-xl">
                        <img 
                          src={track.cover || '/music/default-cover.jpg'}
                          alt={track.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300 ease-out"></div>
                        
                        {/* Play Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                          <div className="w-14 sm:w-16 rounded-full bg-accent/90 text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 ease-out hover:bg-accent">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Track Info */}
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-light text-charcoal mb-2 leading-tight transition-all duration-300 ease-out group-hover:text-accent/90">
                          {track.title}
                        </h3>
                        <p className="font-sans text-sm text-medium-gray leading-relaxed mb-4 transition-all duration-300 ease-out group-hover:text-charcoal/70">
                          {track.description}
                        </p>
                        
                        {/* Preview Player Component */}
                        <PreviewPlayer 
                          track={track}
                          isPlaying={isTrackPlaying}
                          onPlay={() => handleTrackPlay(track.id)}
                          onPause={handleTrackPause}
                          onTrackChange={handleTrackChange}
                        />

                        {/* Full Version Available */}
                        {track.fullVersionAvailable && (
                          <div className="mt-4 pt-4 border-t border-pale-gray/30">
                            <p className="font-sans text-xs text-medium-gray/60 leading-relaxed transition-all duration-300 ease-out group-hover:text-medium-gray/80">
                              Full version available
                            </p>
                            {/* Future: Purchase and streaming links can be added here */}
                            <div className="mt-2 space-y-1">
                              {/* Purchase link placeholder */}
                              {track.purchaseUrl && track.purchaseUrl !== "#" && (
                                <a 
                                  href={track.purchaseUrl}
                                  className="inline-block text-xs text-accent/70 hover:text-accent transition-colors duration-300 ease-out"
                                >
                                  Purchase →
                                </a>
                              )}
                              {/* Streaming link placeholder */}
                              {track.streamingUrl && track.streamingUrl !== "#" && (
                                <a 
                                  href={track.streamingUrl}
                                  className="inline-block text-xs text-accent/70 hover:text-accent transition-colors duration-300 ease-out ml-3"
                                >
                                  Stream →
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer (reused from homepage) */}
      <footer className="bg-charcoal text-off-white py-12">
        <div className="container-content">
          <div className="text-center">
            <p className="font-serif text-2xl font-light mb-4">Karly V Studio</p>
            <p className="font-sans text-sm text-off-white/70">
              © 2024 Karly V Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Music;
