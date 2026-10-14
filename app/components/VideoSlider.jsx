'use client';

import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    src: '/VIDEOS%20SLIDE/0930.mp4',
    title: 'Trending sports events',
    text: 'All your favourite live sports in one place'
  },
  {
    src: '/VIDEOS%20SLIDE/0930%20(1).mp4',
    title: 'Trending Movies',
    text: 'All your favourite movies in one place'
  },
  {
    src: '/VIDEOS%20SLIDE/0930%20(2).mp4',
    title: 'Trending Series',
    text: 'All your favourite series in one place'
  },
  {
    src: '/VIDEOS%20SLIDE/0930%20(4)%202.mp4',
    title: 'Sports PPV',
    text: 'All your favourite Pay per view in one place'
  },
  {
    src: '/VIDEOS%20SLIDE/0930%20(5).mp4',
    title: 'Local channels',
    text: 'All your favourite local channels in one place'
  },
  {
    src: '/VIDEOS%20SLIDE/0930%20(6).mp4',
    title: 'Kids content',
    text: 'All your favourite kids content in one place'
  },
  {
    src: '/VIDEOS%20SLIDE/0930%20(7).mp4',
    title: '24/7 Channels',
    text: 'All your favourite 24/7 channels in one place'
  }
];

export default function VideoSlider() {
  const [active, setActive] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);
  const activeRef = useRef(0);
  activeRef.current = active;

  const goTo = (nextIndex) => {
    if (nextIndex === activeRef.current || isFading) return;
    setIsFading(true);

    setTimeout(() => {
      setActive(nextIndex);
      activeRef.current = nextIndex;
      setIsFading(false);
    }, 250);
  };

  const advance = () => {
    const next = (activeRef.current + 1) % slides.length;
    goTo(next);
  };

  // iOS-safe playback: play() is only called once the element is in the DOM and
  // has buffered data. Calling it in a ref callback gets rejected by Safari.
  const tryPlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    vid.defaultMuted = true;
    vid.playsInline = true;
    const p = vid.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  };

  // Safari blocks autoplay in Low Power Mode until a user gesture happens,
  // so one tap anywhere is enough to wake the slider up.
  useEffect(() => {
    const onFirstTouch = () => tryPlay();
    document.addEventListener('touchend', onFirstTouch, { once: true });
    return () => document.removeEventListener('touchend', onFirstTouch);
  }, []);

  // Advance when the current video ends; the duration-based fallback covers
  // iOS builds where the ended event can be missed.
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    let fallback;

    const armFallback = () => {
      clearTimeout(fallback);
      if (isFinite(vid.duration) && vid.duration > 0) {
        fallback = setTimeout(advance, vid.duration * 1000 + 400);
      }
    };

    if (vid.readyState >= 1) armFallback();
    vid.addEventListener('loadedmetadata', armFallback);

    return () => {
      vid.removeEventListener('loadedmetadata', armFallback);
      clearTimeout(fallback);
    };
  }, [active]);

  const currentSlide = slides[active];

  return (
    <div
      className="vf-stage"
      onClick={advance}
      role="region"
      aria-label="Trending content video slider"
    >
      <div className={`vf-card vf-active ${isFading ? 'vf-fading' : ''}`}>
        <video
          key={currentSlide.src}
          ref={videoRef}
          src={currentSlide.src}
          autoPlay
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          onCanPlay={tryPlay}
          onLoadedData={tryPlay}
          onEnded={advance}
          onError={() => setTimeout(advance, 1200)}
        />
        <div className="vf-caption">
          <h2>{currentSlide.title}</h2>
          {currentSlide.text && <p>{currentSlide.text}</p>}
        </div>
      </div>
      <div className="vf-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            className={index === active ? 'vf-dot vf-dot-active' : 'vf-dot'}
            onClick={(e) => {
              e.stopPropagation();
              goTo(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}