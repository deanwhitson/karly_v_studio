import React, { useState, useRef, useEffect } from 'react';

const PreviewPlayer = ({ track, isPlaying, onPlay, onPause, onTrackChange }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const previewTimeoutRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  const PREVIEW_DURATION = 25; // 25 seconds preview

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
      clearPreviewTimeout();
      clearFadeInterval();
    };
  }, [onPause]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Start playing from beginning for preview
      audio.currentTime = 0;
      audio.play().catch(error => console.error('Audio play error:', error));
      
      // Set up preview timeout
      clearPreviewTimeout();
      previewTimeoutRef.current = setTimeout(() => {
        // Start fade out 2 seconds before preview ends
        startFadeOut();
      }, (PREVIEW_DURATION - 2) * 1000);

      // Set up hard stop at preview duration
      previewTimeoutRef.current = setTimeout(() => {
        stopPreview();
      }, PREVIEW_DURATION * 1000);
    } else {
      audio.pause();
      clearPreviewTimeout();
      clearFadeInterval();
    }
  }, [isPlaying]);

  const clearPreviewTimeout = () => {
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current);
      previewTimeoutRef.current = null;
    }
  };

  const clearFadeInterval = () => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  };

  const startFadeOut = () => {
    const audio = audioRef.current;
    if (!audio) return;

    clearFadeInterval();
    const initialVolume = audio.volume;
    const fadeDuration = 2000; // 2 seconds
    const steps = 20;
    const stepDuration = fadeDuration / steps;
    let currentStep = 0;

    fadeIntervalRef.current = setInterval(() => {
      currentStep++;
      const newVolume = initialVolume * (1 - currentStep / steps);
      audio.volume = Math.max(0, newVolume);

      if (currentStep >= steps) {
        clearFadeInterval();
        stopPreview();
      }
    }, stepDuration);
  };

  const stopPreview = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 1; // Reset volume
    }
    setCurrentTime(0);
    onPause();
    clearPreviewTimeout();
    clearFadeInterval();
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
      onTrackChange?.(track.id);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const remainingTime = Math.max(0, PREVIEW_DURATION - currentTime);
  const progressPercentage = PREVIEW_DURATION > 0 ? (currentTime / PREVIEW_DURATION) * 100 : 0;

  return (
    <>
      <audio
        ref={audioRef}
        src={track.previewUrl}
        preload="metadata"
      />
      
      <div className="text-center">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 mx-auto mb-3"
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        {/* Preview Label and Time */}
        <div className="space-y-1">
          <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
            Preview
          </div>
          
          {isPlaying && (
            <div className="text-xs text-medium-gray font-mono">
              {formatTime(currentTime)} / {formatTime(PREVIEW_DURATION)}
            </div>
          )}

          {/* Mini Progress Bar for Preview */}
          {isPlaying && (
            <div className="w-full max-w-[120px] mx-auto">
              <div className="h-1 bg-pale-gray/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PreviewPlayer;
