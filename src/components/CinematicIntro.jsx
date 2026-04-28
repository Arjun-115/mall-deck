import React, { useEffect, useState, useRef } from 'react';
import './CinematicIntro.css';

const STEPS = [
  { phase: 'pre', duration: 600 },
  { phase: 'tagline1', duration: 1200 },
  { phase: 'tagline2', duration: 1400 },
  { phase: 'brand', duration: 1600 },
  { phase: 'cta', duration: 99999 },
];

export default function CinematicIntro({ onComplete }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    particlesRef.current = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: h + Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(Math.random() * 1.5 + 0.3),
      r: Math.random() * 1.8 + 0.3,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha * 0.6})`;
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Step sequencer
  useEffect(() => {
    if (step >= STEPS.length - 1) return;
    const timer = setTimeout(() => setStep(s => s + 1), STEPS[step].duration);
    return () => clearTimeout(timer);
  }, [step]);

  // Progress bar
  useEffect(() => {
    const totalTime = STEPS.slice(0, 4).reduce((a, b) => a + b.duration, 0);
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += 50;
      setProgress(Math.min((elapsed / totalTime) * 100, 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onComplete, 800);
  };

  const currentPhase = STEPS[step]?.phase;

  return (
    <div className={`intro-shell ${exiting ? 'intro-exit' : ''}`}>
      <canvas ref={canvasRef} className="intro-canvas" />

      {/* Diagonal lines */}
      <div className="intro-lines">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="intro-line" style={{ '--i': i }} />
        ))}
      </div>

      {/* Central content */}
      <div className="intro-center">
        {(currentPhase === 'tagline1' || currentPhase === 'tagline2' || currentPhase === 'brand' || currentPhase === 'cta') && (
          <p className={`intro-tagline1 label-sm text-gold ${currentPhase !== 'pre' ? 'visible' : ''}`}>
            A Global Destination
          </p>
        )}

        {(currentPhase === 'tagline2' || currentPhase === 'brand' || currentPhase === 'cta') && (
          <h1 className="intro-headline display-xl">
            <span className="intro-word w1">THE</span>
            <span className="intro-word w2">WORLD</span>
            <span className="intro-word w3">COMES</span>
            <span className="intro-word w4">HERE.</span>
          </h1>
        )}

        {(currentPhase === 'brand' || currentPhase === 'cta') && (
          <div className="intro-brand-reveal">
            <div className="intro-brand-line" />
            <p className="intro-brand-name label-md">DUBAI MALL</p>
            <div className="intro-brand-line" />
          </div>
        )}

        {currentPhase === 'cta' && (
          <div className="intro-cta-area">
            <p className="intro-sub body-md">
              1.2 million sq ft &nbsp;·&nbsp; 105M visitors yearly &nbsp;·&nbsp; 200+ nations
            </p>
            <button className="intro-enter-btn btn btn-gold" onClick={handleEnter}>
              Enter the Experience
              <span className="intro-arrow">→</span>
            </button>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="intro-progress-wrap">
        <div className="intro-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* Skip */}
      {step >= 1 && (
        <button className="intro-skip label-sm" onClick={handleEnter}>
          Skip ›
        </button>
      )}

      {/* Corner decoration */}
      <div className="intro-corner tl" />
      <div className="intro-corner br" />
    </div>
  );
}
