import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './LifestyleDining.css';

const LifestyleDining = ({ onInquiry }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div className="section-container lifestyle-dining" ref={ref}>
      <div className="dining-grid">
        <motion.div 
          className="dining-text"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="section-subtitle">A Lifestyle Destination</h4>
          <h2 className="section-title">Beyond Sustenance</h2>
          <p className="description">
            Food is the new anchor. From Michelin-starred concepts to global street food, our 200+ dining venues 
            serve as primary traffic drivers and community hubs.
          </p>
          
          <div className="lifestyle-stats">
            <div className="lifestyle-stat">
              <span className="stat-num">200+</span>
              <span className="stat-desc">Dining Venues</span>
            </div>
            <div className="lifestyle-stat">
              <span className="stat-num">50+</span>
              <span className="stat-desc">Michelin-Guide Concepts</span>
            </div>
          </div>
          
          <button className="btn-primary mt-4" onClick={() => onInquiry('F&B Leasing & Partnership')}>Explore F&B Opportunities</button>

        </motion.div>

        <motion.div 
          className="dining-visuals"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="lifestyle-card l-1">
             <div className="card-overlay">
               <h4>Fine Dining</h4>
             </div>
          </div>
          <div className="lifestyle-card l-2">
             <div className="card-overlay">
               <h4>Casual Chic</h4>
             </div>
          </div>
          <div className="lifestyle-card l-3">
             <div className="card-overlay">
               <h4>Alfresco Terrace</h4>
             </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background ambient video placeholder effect */}
      <div className="ambient-bg-glow"></div>
    </div>
  );
};

export default LifestyleDining;
