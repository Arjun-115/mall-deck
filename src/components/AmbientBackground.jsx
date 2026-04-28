import React, { useEffect, useRef, useState } from 'react';
import './AmbientBackground.css';

const ZONE_COLORS = {
  null: '201, 168, 76',
  hub: '201, 168, 76',
  scale: '74, 158, 255',
  retail: '201, 168, 76',
  entertainment: '0, 201, 167',
  dining: '255, 140, 90',
  events: '155, 109, 255',
  sponsorship: '255, 77, 125',
};

export default function AmbientBackground({ activeZone, phase }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animFrameRef = useRef(null);
  const [zoneColor, setZoneColor] = useState(ZONE_COLORS['hub']);

  useEffect(() => {
    setZoneColor(ZONE_COLORS[activeZone] || ZONE_COLORS['hub']);
  }, [activeZone]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const PARTICLE_COUNT = 60;
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const [r, g, b] = zoneColor.split(',').map(Number);
      particles.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.fill();
      });
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [zoneColor]);

  const [r, g, b] = zoneColor.split(',').map(Number);

  return (
    <div className="ambient-bg">
      {/* Base image layer */}
      <div
        className="ambient-image-layer"
        style={{
          backgroundImage: phase !== 'intro'
            ? `url(${import.meta.env.BASE_URL}assets/dubai_mall_hero_1776928007760.png)`
            : 'none',
        }}
      />
      {/* Zone color overlay */}
      <div
        className="ambient-color-overlay"
        style={{ background: `radial-gradient(ellipse at 70% 50%, rgba(${r},${g},${b},0.08) 0%, transparent 70%)` }}
      />
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="ambient-canvas" />
      {/* Grain texture */}
      <div className="ambient-grain" />
      {/* Bottom fade */}
      <div className="ambient-bottom-fade" />
    </div>
  );
}
