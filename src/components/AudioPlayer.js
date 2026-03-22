import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ track, isPlaying, onPlay, onPause, onTrackChange }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setCurrentTime(0);
      onPause();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onPause]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(error => console.error('Audio play error:', error));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
      onTrackChange?.(track.id);
    }
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    const progressBar = progressBarRef.current;
    if (!audio || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleProgressClick(e);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleProgressClick(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <audio
        ref={audioRef}
        src={track.audioUrl}
        preload="metadata"
      />
      
      <div className="bg-warm-white p-8 rounded-lg border border-pale-gray/30">
        {/* Play/Pause Button and Time Display */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handlePlayPause}
            className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          
          <div className="text-sm text-medium-gray font-mono">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        {/* Progress Bar */}
        <div 
          ref={progressBarRef}
          className="relative h-2 bg-pale-gray/30 rounded-full cursor-pointer group"
          onClick={handleProgressClick}
          onMouseDown={handleMouseDown}
        >
          {/* Progress Fill */}
          <div 
            className="h-full bg-accent rounded-full transition-all duration-150 ease-out relative"
            style={{ width: `${progressPercentage}%` }}
          >
            {/* Progress Handle */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
              <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </div>

        {/* Track Info */}
        <div className="mt-4 text-center">
          <p className="text-sm text-medium-gray">
            {isPlaying ? 'Now Playing' : 'Click to Play'}
          </p>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
