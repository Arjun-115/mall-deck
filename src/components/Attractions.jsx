import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Attractions.css';

const Attractions = ({ onInquiry }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div className="section-container attractions" ref={ref}>
      <div className="attractions-layout">
        
        <motion.div 
          className="attractions-list"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="section-subtitle">Beyond Shopping</h4>
          <h2 className="section-title">Major Attractions</h2>
          
          <div className="attraction-item active">
            <h3 className="attraction-name">Dubai Aquarium</h3>
            <p className="attraction-desc">One of the largest suspended aquariums in the world, serving as a massive centerpiece and traffic driver.</p>
          </div>
          
          <div className="attraction-item">
            <h3 className="attraction-name">Dubai Ice Rink</h3>
            <p className="attraction-desc">Olympic-sized rink hosting international competitions and year-round leisure.</p>
          </div>
          
          <div className="attraction-item">
            <h3 className="attraction-name">Reel Cinemas</h3>
            <p className="attraction-desc">A flagship megaplex setting the standard for premium cinematic experiences in the region.</p>
          </div>

          <button className="btn-primary mt-4" onClick={() => onInquiry('Attraction Sponsorship & Branding')}>Partner with Attractions</button>


        </motion.div>

        <motion.div 
          className="attraction-visual glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="visual-inner">
            <img src="assets/dubai_aquarium_cinematic_1776958115865.png" alt="Dubai Aquarium" className="visual-img" />

            <div className="visual-overlay">
              <p className="graphic-label">World-Class Entertainment</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Attractions;
