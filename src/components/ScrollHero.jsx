import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 120;

export function ScrollHero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [progress, setProgress] = useState(0);
  const [overlayProgress, setOverlayProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [initialMounted, setInitialMounted] = useState(false);
  
  const animFrameId = useRef(null);
  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);

  // Trigger initial entrance on mount
  useEffect(() => {
    const timer = setTimeout(() => setInitialMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Preload frames
  useEffect(() => {
    let count = 0;
    const images = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/images/frame/frame_${i}.webp`;
      img.onload = () => {
        count++;
        setLoadedCount(count);
        if (count === 1) {
          drawCanvas(0);
        }
        if (count >= 15) {
          setIsReady(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      images.forEach(img => {
        img.onload = null;
      });
    };
  }, []);

  // Draw image on canvas with high DPI & cover aspect
  const drawCanvas = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Clean studio background fill
    ctx.fillStyle = '#f5f5f7';
    ctx.fillRect(0, 0, width, height);

    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;

    // Use cover fit so the camera zoom feels fully immersive
    const scale = Math.max(width / imgWidth, height / imgHeight);
    const renderW = imgWidth * scale;
    const renderH = imgHeight * scale;
    const offsetX = (width - renderW) / 2;
    const offsetY = (height - renderH) / 2;

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    ctx.restore();
  }, []);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Total scroll range of the hero container
      const totalScrollDistance = containerHeight - windowHeight;
      // Reserve the final windowHeight (100vh) for the next-section curtain slide-over
      const overlayTransitionDistance = windowHeight;
      const frameScrubDistance = Math.max(1, totalScrollDistance - overlayTransitionDistance);

      const currentScroll = -rect.top;

      // Frames 1-120 scrub smoothly until frame 120 is reached
      const rawProgress = Math.max(0, Math.min(1, currentScroll / frameScrubDistance));
      targetProgress.current = rawProgress;

      // Next section overlay progress (0 to 1 during the final 100vh)
      const rawOverlay = Math.max(0, Math.min(1, (currentScroll - frameScrubDistance) / overlayTransitionDistance));
      setOverlayProgress(rawOverlay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Smooth RAF loop for 60/120fps fluid interpolation
    const renderLoop = () => {
      const diff = targetProgress.current - smoothProgress.current;
      smoothProgress.current += diff * 0.18;

      const clamped = Math.max(0, Math.min(1, smoothProgress.current));
      const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(clamped * (TOTAL_FRAMES - 1))));

      drawCanvas(frameIdx);
      setCurrentFrame(frameIdx + 1);
      setProgress(clamped);

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);

    const handleResize = () => {
      const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(smoothProgress.current * (TOTAL_FRAMES - 1))));
      drawCanvas(frameIdx);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [drawCanvas]);

  // Optical Rack-Focus Depth Calculation:
  // As text fades out or in, it blurs optically like physical camera glass
  const getStageOpacity = (stageMin, stageMax, fadeBuffer = 0.08) => {
    if (progress < stageMin - fadeBuffer || progress > stageMax + fadeBuffer) return 0;
    if (progress < stageMin) return (progress - (stageMin - fadeBuffer)) / fadeBuffer;
    if (progress > stageMax) return 1 - (progress - stageMax) / fadeBuffer;
    return 1;
  };

  const getRackBlur = (opacity) => {
    return Math.round((1 - Math.min(1, Math.max(0, opacity))) * 12);
  };

  const stage1Opacity = getStageOpacity(0, 0.22, 0.08);
  const stage2Opacity = getStageOpacity(0.35, 0.58, 0.08);
  const stage3Opacity = getStageOpacity(0.72, 0.94, 0.08);

  const stage1Blur = getRackBlur(stage1Opacity);
  const stage2Blur = getRackBlur(stage2Opacity);
  const stage3Blur = getRackBlur(stage3Opacity);

  return (
    <div className="scroll-hero-container" ref={containerRef}>
      <div className="sticky-viewport">
        {/* Render Canvas with subtle grain/atmosphere */}
        <canvas 
          ref={canvasRef} 
          className={`frame-canvas ${initialMounted ? 'canvas-revealed' : 'canvas-pre-reveal'}`} 
          style={{
            transform: `scale(${1 - overlayProgress * 0.04})`,
            filter: `brightness(${1 - overlayProgress * 0.22})`
          }}
        />

        {/* Minimal Preload Progress Bar */}
        {!isReady && (
          <div className="preload-overlay">
            <div className="preload-content">
              <span className="preload-label">Memuat Rangkaian Visual Meja</span>
              <div className="preload-bar-track">
                <div 
                  className="preload-bar-fill" 
                  style={{ width: `${Math.round((loadedCount / TOTAL_FRAMES) * 100)}%` }} 
                />
              </div>
              <span className="preload-count">{loadedCount} / {TOTAL_FRAMES} frame</span>
            </div>
          </div>
        )}

        {/* Cinematic Storytelling Overlays */}
        <div className="story-overlay-layer">
          
          {/* Phase 1: Wide Architecture Overview — Left-aligned at 38.2% golden line */}
          <div 
            className={`story-block story-phase-1 ${initialMounted ? 'hero-in-entered' : 'hero-in-prepare'}`}
            style={{ 
              opacity: stage1Opacity, 
              filter: `blur(${stage1Blur}px)`,
              transform: `translateY(${(1 - stage1Opacity) * 21}px)`,
              pointerEvents: stage1Opacity > 0.5 ? 'auto' : 'none' 
            }}
          >
            <div className="story-eyebrow-wrap">
              <span className="story-eyebrow anim-reveal-item delay-1">
                <span className="eyebrow-line"></span>
                STUDIO RUANG KERJA & PRODUKTIVITAS
              </span>
            </div>
            
            <div className="story-heading-mask">
              <h1 className="story-title anim-reveal-item delay-2">
                <span className="word-mask"><span className="word-slide word-1">Hening.</span></span>{' '}
                <span className="word-mask"><span className="word-slide word-2">Rapi.</span></span>{' '}
                <span className="word-mask"><span className="word-slide word-3">Bekerja.</span></span>
              </h1>
            </div>

            <div className="story-desc-wrap">
              <p className="story-description anim-reveal-item delay-3">
                Meja kerja kayu padat yang dibangun untuk kejernihan berpikir. Dirancang tanpa kabel menjuntai, tanpa getaran, dan tanpa bising kipas.
              </p>
            </div>
          </div>

          {/* Phase 2: Approach & Acoustic Engineering (Left edge) */}
          <div 
            className="story-block story-left" 
            style={{ 
              opacity: stage2Opacity, 
              filter: `blur(${stage2Blur}px)`,
              transform: `translateY(${(1 - stage2Opacity) * 34}px)`,
              pointerEvents: stage2Opacity > 0.5 ? 'auto' : 'none' 
            }}
          >
            <div className="phase-indicator-stem">
              <span className="stem-node"></span>
              <span className="story-eyebrow">Keseimbangan Akustik & Peranti</span>
            </div>
            <h2 className="story-subheading">Setiap Elemen Memiliki Tempat.</h2>
            <p className="story-description">
              Monitor audio studio terisolasi di atas baji silikon untuk kejernihan suara murni. 
              Papan ketik mekanis taktil dengan penataan kabel tersembunyi di bawah kayu oak asli.
            </p>
            <div className="phase-specs-pill-row">
              <span className="phase-pill">Sasis Senyap Sub-22dB</span>
              <span className="phase-pill">Driver Kubah Sutra</span>
              <span className="phase-pill">Baji Isolasi Akustik</span>
            </div>
          </div>

          {/* Phase 3: Display & Pixel Density (Right edge) */}
          <div 
            className="story-block story-right" 
            style={{ 
              opacity: stage3Opacity, 
              filter: `blur(${stage3Blur}px)`,
              transform: `translateY(${(1 - stage3Opacity) * 34}px)`,
              pointerEvents: stage3Opacity > 0.5 ? 'auto' : 'none' 
            }}
          >
            <div className="phase-indicator-stem">
              <span className="stem-node"></span>
              <span className="story-eyebrow">Kanvas Visual 4K</span>
            </div>
            <h2 className="story-subheading">Hanyut dalam Pekerjaan.</h2>
            <p className="story-description">
              Layar berkerapatan piksel tinggi yang dikalibrasi presisi untuk arsitektur, tipografi, dan penulisan kode. 
              Panel matte bebas silau cahaya.
            </p>
            <div className="phase-specs-pill-row">
              <span className="phase-pill">3840 × 2160 UHD</span>
              <span className="phase-pill">Kalibrasi Warna Delta E &lt; 1</span>
              <span className="phase-pill">Kedalaman Warna 10-Bit</span>
            </div>
          </div>

        </div>

        {/* Thin Scroll Progress Track (Bottom Left - 233px Fibonacci, 4px thin) */}
        <div 
          className={`hero-scroll-progress ${initialMounted ? 'progress-in' : ''}`}
          style={{
            opacity: Math.max(0, 1 - overlayProgress * 2.5),
            transform: `translateY(${overlayProgress * 21}px)`
          }}
        >
          <div className="progress-meta-row">
            <span className="progress-label">ARSITEKTUR MEJA</span>
            <span className="progress-fraction">{currentFrame} / {TOTAL_FRAMES}</span>
          </div>
          <div className="progress-thin-track">
            <div className="progress-thin-fill" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>

      </div>
    </div>
  );
}
