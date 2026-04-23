import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import './InquiryModal.css';

const InquiryModal = ({ isOpen, onClose, subject = "General Inquiry" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="inquiry-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="inquiry-card glass-panel"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-inquiry" onClick={onClose}><X size={24} /></button>
            
            <h2 className="luxury-gradient-text">Business Inquiry</h2>
            <p className="inquiry-subtitle">Subject: {subject}</p>
            
            <form className="inquiry-form" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Sent Successfully!'); onClose(); }}>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" placeholder="e.g. LVMH Group" required />
              </div>
              <div className="form-group">
                <label>Professional Email</label>
                <input type="email" placeholder="name@company.com" required />
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Describe your vision for the partnership..." rows="4"></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Submit Proposal <Send size={16} style={{marginLeft: '10px'}} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquiryModal;
