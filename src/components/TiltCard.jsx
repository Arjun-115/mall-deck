import React, { useRef, useCallback } from 'react';
import './TiltCard.css';

export default function TiltCard({ children, className = '', intensity = 15, onClick }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * intensity * -1;
    const rotY = ((x - cx) / cx) * intensity;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
    // Shine effect
    const shine = el.querySelector('.tilt-shine');
    if (shine) {
      const pX = (x / rect.width) * 100;
      const pY = (y / rect.height) * 100;
      shine.style.background = `radial-gradient(circle at ${pX}% ${pY}%, rgba(255,255,255,0.1) 0%, transparent 60%)`;
    }
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    const shine = el.querySelector('.tilt-shine');
    if (shine) shine.style.background = 'transparent';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="tilt-shine" />
      {children}
    </div>
  );
}
