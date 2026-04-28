import React, { useState, useEffect } from 'react';
import './InquiryModal.css';

const SUBJECTS = [
  'General Inquiry',
  'Luxury Flagship Leasing',
  'Mid-Market Retail Leasing',
  'Pop-Up Activation',
  'Anchor Store Inquiry',
  'Attraction Partnership',
  'F&B Leasing Inquiry',
  'Concert/Event Booking',
  'Brand Activation',
  'Corporate Event Booking',
  'Product Launch Inquiry',
  'Platinum Sponsorship Inquiry',
  'Gold Sponsorship Inquiry',
  'Silver Sponsorship Inquiry',
  'Bronze Sponsorship Inquiry',
  'Sponsorship Media Kit',
  'Event Rate Card',
];

export default function InquiryModal({ isOpen, onClose, subject = 'General Inquiry' }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', subject: subject });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setForm(f => ({ ...f, subject }));
    setSubmitted(false);
  }, [subject, isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="iq-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="iq-panel">
        {/* Close */}
        <button className="iq-close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="iq-header">
          <p className="label-sm text-gold">DUBAI MALL · COMMERCIAL</p>
          <h2 className="display-md iq-title">
            {submitted ? 'Thank You.' : 'Start the Conversation'}
          </h2>
          {!submitted && <p className="body-md iq-sub">Our commercial team will respond within 24 hours.</p>}
        </div>

        {submitted ? (
          <div className="iq-success">
            <div className="iq-success-icon">◆</div>
            <p className="body-lg" style={{ textAlign: 'center' }}>
              Your inquiry has been received. A member of our commercial team will be in touch within one business day.
            </p>
            <button className="btn btn-outline" style={{ fontSize: '0.65rem' }} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="iq-form" onSubmit={handleSubmit}>
            <div className="iq-row">
              <div className="iq-field">
                <label className="label-sm text-dim">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="iq-input" />
              </div>
              <div className="iq-field">
                <label className="label-sm text-dim">Company</label>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Your company" className="iq-input" />
              </div>
            </div>
            <div className="iq-row">
              <div className="iq-field">
                <label className="label-sm text-dim">Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className="iq-input" />
              </div>
              <div className="iq-field">
                <label className="label-sm text-dim">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="iq-input" />
              </div>
            </div>
            <div className="iq-field">
              <label className="label-sm text-dim">Inquiry Type</label>
              <select name="subject" value={form.subject} onChange={handleChange} className="iq-input iq-select">
                {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="iq-field">
              <label className="label-sm text-dim">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your interest and timeline..." className="iq-input iq-textarea" />
            </div>
            <button type="submit" className="btn btn-gold iq-submit">
              Send Inquiry →
            </button>
          </form>
        )}

        {/* Decorative corner */}
        <div className="iq-corner" />
      </div>
    </div>
  );
}
