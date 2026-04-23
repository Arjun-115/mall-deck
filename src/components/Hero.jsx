import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Video-First Presentation requirement: Uses a video as primary storytelling block */}
      <div className="hero-media">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/assets/dubai_mall_hero_1776928007760.png"
        >
          {/* A luxury architectural placeholder video. Fallbacks to the AI poster if blocked by browser adblock. */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-city-architecture-at-night-4286-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-subtitle"
        >
          AN ICONIC PLATFORM FOR GROWTH
        </motion.p>
        
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="hero-title"
        >
          The Most Visited<br/>Place on Earth
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hero-stats"
        >
          <div className="stat-box">
            <h3>105M+</h3>
            <p>Annual Visitors</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <h3>1.2M</h3>
            <p>Sqm Format</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p>Scroll to Explore</p>
        <ChevronDown size={24} className="icon-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;
