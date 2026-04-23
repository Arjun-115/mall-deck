import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import './EventsModule.css';

const EventsModule = ({ onInquiry }) => {

  const [activeModal, setActiveModal] = useState(null); // 'concerts' or 'activations'

  return (
    <div className="section-container events-module">
      <div className="events-header">
        <h4 className="section-subtitle">Platforms & Sponsorship</h4>
        <h2 className="section-title">A Stage For The World</h2>
        <p className="description" style={{maxWidth: '600px'}}>
          Global product launches. Headline concerts. Experiential brand zones. 
          The Dubai Mall provides unparalleled scale for monumental events.
        </p>
      </div>

      <div className="events-preview-grid">
        <div className="event-card glass-panel" onClick={() => setActiveModal('concerts')}>
          <div className="event-card-img" style={{backgroundImage: 'url(/assets/mall_entertainment_event_1776928097011.png)'}}></div>
          <div className="event-card-content">
            <h3>Concerts & Performances</h3>
            <p>Access massive indoor and outdoor venues capable of hosting tens of thousands.</p>
            <span className="read-more">View Specs <ArrowRight size={16} /></span>
          </div>
        </div>

        <div className="event-card glass-panel" onClick={() => setActiveModal('activations')}>
          <div className="event-card-img activation-bg"></div>
          <div className="event-card-content">
            <h3>Brand Activations</h3>
            <p>High-traffic atrium zones perfect for 360-degree brand takeovers.</p>
            <span className="read-more">Explore Tiers <ArrowRight size={16} /></span>
          </div>
        </div>
      </div>

      {/* Expandable Module */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              className="expanded-modal"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, type: 'spring' }}
              onClick={(e) => e.stopPropagation()} /* prevents closing when clicking perfectly inside modal */
            >
              <button className="close-btn" onClick={() => setActiveModal(null)}>
                <X size={24} />
              </button>
              
              {activeModal === 'concerts' ? (
                <div className="modal-content">
                  <h2 className="modal-title luxury-gradient-text">Event Capabilities</h2>
                  <div className="modal-grid">
                    <div className="modal-col">
                      <h4>The Grand Atrium</h4>
                      <ul>
                        <li>Capacity: 5,000+ standing</li>
                        <li>Power: 3-phase, 400A</li>
                        <li>Rigging: 50 points, 1T capacity each</li>
                        <li>Screens: Suspended LED cylindrical arrays</li>
                      </ul>
                      <button className="btn-primary mt-3" onClick={() => onInquiry('Event Venue Specs & Floorplan')}>Request Floorplan</button>

                    </div>
                    <div className="modal-col">
                      <img src="/assets/mall_entertainment_event_1776928097011.png" alt="Grand Atrium Event" className="modal-img" />
                    </div>


                  </div>
                </div>
              ) : (
                <div className="modal-content">
                  <h2 className="modal-title luxury-gradient-text">Brand Activations</h2>
                  <div className="modal-grid">
                    <div className="modal-col">
                      <h4>Fashion Avenue Pop-Ups</h4>
                      <ul>
                        <li>Footfall: 1.5M+ weekend footprint</li>
                        <li>Audience: Ultra-High Net Worth Individuals</li>
                        <li>Space: Customizable 10x10 premium plots</li>
                        <li>Support: Dedicated concierge and brand hosts</li>
                      </ul>
                      <button className="btn-primary mt-3" onClick={() => onInquiry('Activation Rates & Sponsorship')}>Download Rate Card</button>

                    </div>
                    <div className="modal-col">
                      <img src="/assets/fashion_avenue_dubai_mall_luxury_1776958221526.png" alt="Brand Activations" className="modal-img" />
                    </div>

                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsModule;
