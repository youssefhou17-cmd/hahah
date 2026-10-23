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
  const activeRef = useRef(0);
  const videoRefs = useRef([]);
  const readyRef = useRef({});        // index -> true once the clip is buffered enough to play
  const pendingRef = useRef(false);   // a flip is waiting for its video to finish buffering
  const pendingTargetRef = useRef(null);
  activeRef.current = active;

  // iOS-safe playback: play() is only called once the element is in the DOM and
  // has buffered data. Calling it in a ref callback gets rejected by Safari.
  const tryPlay = (vid) => {
    if (!vid) return;
    vid.muted = true;
    vid.defaultMuted = true;
    vid.playsInline = true;
    const p = vid.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  };

  const commitTo = (nextIndex) => {
    if (nextIndex === activeRef.current) return;
    pendingRef.current = false;
    pendingTargetRef.current = null;
    setActive(nextIndex);
    activeRef.current = nextIndex;
  };

  // Only flip once the incoming video is actually buffered. iOS Safari buffers
  // videos on demand and ignores preload for videos that aren't playing, so
  // flipping early shows the grey stage until the clip finally loads.
  const requestGo = (nextIndex) => {
    if (nextIndex === activeRef.current) return;
    if (readyRef.current[nextIndex]) {
      commitTo(nextIndex);
    } else {
      pendingRef.current = true;
      pendingTargetRef.current = nextIndex;
      const vid = videoRefs.current[nextIndex];
      if (vid) { try { vid.load(); } catch (e) {} }
    }
  };

  const advance = () => requestGo((activeRef.current + 1) % slides.length);

  // Load the first video on mount. preload="none" means the browser fetches no
  // data until .load() is called, so we start the stream explicitly here.
  useEffect(() => {
    const firstVid = videoRefs.current[0];
    if (firstVid) {
      try { firstVid.load(); } catch (e) {}
    }
  }, []);

  // Safari blocks autoplay in Low Power Mode until a user gesture happens,
  // so one tap anywhere is enough to wake the slider up.
  useEffect(() => {
    const onFirstTouch = () => tryPlay(videoRefs.current[activeRef.current]);
    document.addEventListener('touchend', onFirstTouch, { once: true });
    return () => document.removeEventListener('touchend', onFirstTouch);
  }, []);

  // Play the active clip, pause the others, and proactively buffer the NEXT one
  // ahead of time so the following flip is instant (no grey flash on iOS).
  useEffect(() => {
    const currentVid = videoRefs.current[active];
    let fallback;

    if (currentVid && readyRef.current[active]) tryPlay(currentVid);

    videoRefs.current.forEach((vid, i) => {
      if (vid && i !== active && !vid.paused) vid.pause();
    });

    const next = (active + 1) % slides.length;
    const nextVid = videoRefs.current[next];
    // load() is handled by requestGo() when the user actually navigates to a slide.
    // Removing this proactive call prevents downloading the next clip before it is needed.

    // Backup timer in case the 'ended' event is missed on some iOS builds.
    const armFallback = () => {
      clearTimeout(fallback);
      if (currentVid && isFinite(currentVid.duration) && currentVid.duration > 0) {
        fallback = setTimeout(advance, currentVid.duration * 1000 + 500);
      }
    };
    if (currentVid) {
      if (currentVid.readyState >= 1) armFallback();
      currentVid.addEventListener('loadedmetadata', armFallback);
    }

    return () => {
      clearTimeout(fallback);
      if (currentVid) currentVid.removeEventListener('loadedmetadata', armFallback);
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
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`vf-card ${index === active ? 'vf-active' : ''}`}
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={slide.src}
            muted
            playsInline
            preload="none"
            disablePictureInPicture
            onLoadedData={(e) => {
              readyRef.current[index] = true;
              const vid = e.currentTarget;
              if (index === activeRef.current) {
                tryPlay(vid);
              } else if (pendingRef.current && index === pendingTargetRef.current) {
                commitTo(index);
              }
            }}
            onCanPlay={(e) => {
              readyRef.current[index] = true;
              if (index === activeRef.current) tryPlay(e.currentTarget);
            }}
            onEnded={() => {
              if (index === activeRef.current) advance();
            }}
            onError={() => {
              if (pendingRef.current && index === pendingTargetRef.current) {
                commitTo(index); // self-heals: as the active clip its own onError advances on
              } else if (index === activeRef.current) {
                setTimeout(advance, 1200);
              }
            }}
          />
        </div>
      ))}
      <div className="vf-caption">
        <h2>{currentSlide.title}</h2>
        {currentSlide.text && <p>{currentSlide.text}</p>}
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
              requestGo(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}