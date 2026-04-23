import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './RetailLuxury.css';

const RetailLuxury = ({ onInquiry }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div className="section-container retail-luxury" ref={ref}>
      <div className="full-width-content">
        <motion.div 
          className="header-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="section-subtitle">Retail & Luxury</h4>
          <h2 className="section-title">Elevate Your Brand</h2>
          <p className="description-center">
            Position your brand alongside the world's most prestigious maisons in Fashion Avenue. 
            A curated environment where discerning clientele expect the extraordinary.
          </p>
        </motion.div>

        <motion.div 
          className="luxury-image-showcase"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img src={`${import.meta.env.BASE_URL}assets/fashion_avenue_dubai_mall_luxury_1776958221526.png`} alt="Luxury Fashion Avenue" className="showcase-img" />


          <div className="showcase-caption glass-panel">
            <h4>Flagship Opportunities</h4>
            <p>Secure your presence in the world's most prestigious luxury fashion destination.</p>
            <div className="cta-group mt-3">
              <button className="btn-primary" onClick={() => onInquiry('Retail Leasing')}>Leasing Inquiry</button>
              <button className="btn-secondary ml-3" onClick={() => onInquiry('Audience Data Request')}>Request Audience Data</button>
            </div>

          </div>
        </motion.div>


        <div className="stats-grid">
          <div className="stat-card">
            <h3>1,200+</h3>
            <p>Total Retail Outlets</p>
          </div>
          <div className="stat-card">
            <h3>440K</h3>
            <p>Sq Ft Dedicated to Fashion</p>
          </div>
          <div className="stat-card">
            <h3>VIP</h3>
            <p>Valet & Chauffeur Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailLuxury;
