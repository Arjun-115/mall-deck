import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CinematicIntro.css';

const CinematicIntro = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 45);

    const timers = [
      setTimeout(() => setStep(1), 1200),
      setTimeout(() => setStep(2), 2800),
      setTimeout(() => setStep(3), 4500),
      setTimeout(() => onComplete(), 6000),
    ];

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="intro-overlay">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="intro-text-container"
          >
            <h2 className="intro-subtitle">Experience</h2>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.1em' }}
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="intro-text-container"
          >
            <h1 className="intro-title">THE EXTRAORDINARY</h1>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100, scale: 2 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="intro-text-container"
          >
            <h1 className="intro-brand">DUBAI MALL</h1>
            <p className="intro-tagline">Redefining Luxury & Innovation</p>
          </motion.div>
        )}
        
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="shockwave"
          />
        )}
      </AnimatePresence>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <span className="progress-text">{progress}% LOADING POTENTIAL</span>
      </div>

      <button className="skip-intro" onClick={onComplete}>SKIP INTRO</button>

      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 2 + 2, 
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="energy-beam"></div>
    </div>
  );
};

export default CinematicIntro;
