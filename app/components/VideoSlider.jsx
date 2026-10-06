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

const SLIDE_DURATION_MS = 5000;

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

  // Ensure video plays when active slide changes
  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      vid.defaultMuted = true;
      vid.playsInline = true;
      vid.currentTime = 0;
      const p = vid.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }

    const timer = setTimeout(() => {
      advance();
    }, SLIDE_DURATION_MS);

    return () => clearTimeout(timer);
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
          ref={(el) => {
            if (el) {
              el.muted = true;
              el.defaultMuted = true;
              el.playsInline = true;
              el.setAttribute('playsinline', '');
              el.setAttribute('webkit-playsinline', '');
              const p = el.play();
              if (p && typeof p.catch === 'function') p.catch(() => {});
            }
            videoRef.current = el;
          }}
          src={currentSlide.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onEnded={advance}
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