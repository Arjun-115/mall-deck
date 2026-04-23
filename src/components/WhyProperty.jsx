import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhyProperty.css';

const WhyProperty = ({ onInquiry }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div className="section-container why-property" ref={ref}>
      <div className="content-grid">
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h4 className="section-subtitle">The Ecosystem</h4>
          <h2 className="section-title">A City Within A City</h2>
          <p className="description">
            The Dubai Mall isn't just a shopping center; it's a global epicenter of culture, commerce, and entertainment. 
            Located at the foot of the Burj Khalifa, it acts as a magnet for high-net-worth individuals, tourists, and residents alike.
          </p>
          
          <div className="data-points">
            <div className="data-point">
              <span className="data-val">105M+</span>
              <span className="data-label">Annual Global Visitors</span>
            </div>
            <div className="data-point">
              <span className="data-val">70%</span>
              <span className="data-label">High-Net-Worth Demographics</span>
            </div>
            <div className="data-point">
              <span className="data-val">500M+</span>
              <span className="data-label">Regional Audience Reach</span>
            </div>
          </div>
          <button className="btn-primary mt-4" onClick={() => onInquiry('Investor Deck & Demographics')}>Download Investor Deck</button>


        </motion.div>

        <motion.div 
          className="visual-content glass-panel"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="visual-inner">
            <img src="/assets/luxury_mall_interior_cinematic_1776957820844.png" alt="Dubai Mall Hub" className="visual-img" />
            <div className="visual-overlay">
              <p className="graphic-label">Downtown Dubai Hub</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyProperty;
