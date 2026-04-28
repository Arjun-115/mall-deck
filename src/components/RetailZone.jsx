import React, { useState } from 'react';
import TiltCard from './TiltCard';
import './RetailZone.css';

const TIERS = [
  {
    id: 'luxury',
    label: 'Luxury Flagship',
    icon: '◆',
    color: '#C9A84C',
    brands: 'Chanel · Hermès · Prada · LV · Dior',
    desc: 'Fashion Avenue — 200 flagship boutiques in a dedicated luxury wing with curated clientele.',
    area: '500–3,000 sq ft',
    traffic: '12M luxury visitors / year',
    cta: 'Inquire About Flagship',
    subject: 'Luxury Flagship Leasing',
  },
  {
    id: 'mid',
    label: 'Mid-Market Retail',
    icon: '◈',
    color: '#4A9EFF',
    brands: 'Zara · H&M · Gap · Mango · Uniqlo',
    desc: 'Main mall zones — highest footfall in the region with unmatched brand visibility.',
    area: '200–2,000 sq ft',
    traffic: '105M visitors / year',
    cta: 'Explore Leasing Options',
    subject: 'Mid-Market Retail Leasing',
  },
  {
    id: 'popup',
    label: 'Pop-Up & Activation',
    icon: '◎',
    color: '#FF4D7D',
    brands: 'Your Brand',
    desc: 'Short-term, high-impact activations in premium locations. Ideal for launches and pilots.',
    area: 'From 50 sq ft',
    traffic: 'Flexible duration · Prime placement',
    cta: 'Book a Pop-Up',
    subject: 'Pop-Up Activation',
  },
  {
    id: 'flagship',
    label: 'Anchor Flagship',
    icon: '◉',
    color: '#00C9A7',
    brands: 'Department Stores · Hypermarkets',
    desc: 'Anchor positions driving mall-wide traffic. Strategic placement, long-term investment.',
    area: '5,000–50,000 sq ft',
    traffic: 'Category exclusivity available',
    cta: 'Request Anchor Brief',
    subject: 'Anchor Store Inquiry',
  },
];

export default function RetailZone({ onInquiry, onNavigate }) {
  const [active, setActive] = useState(null);

  return (
    <div className="retail-zone">
      {/* Hero panel */}
      <div className="retail-hero">
        <div
          className="retail-hero-img"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/fashion_avenue_dubai_mall_luxury_1776958221526.png)` }}
        />
        <div className="retail-hero-overlay" />
        <div className="retail-hero-content">
          <p className="label-sm text-gold">RETAIL &amp; LUXURY</p>
          <h2 className="display-lg retail-hero-title">
            Where the World's<br /><em>Best Brands Live</em>
          </h2>
          <div className="retail-hero-stats">
            <div><span className="stat-big">1,200+</span><span className="stat-lbl label-sm">Brands</span></div>
            <div className="divider-v" />
            <div><span className="stat-big">3.8h</span><span className="stat-lbl label-sm">Avg Dwell</span></div>
            <div className="divider-v" />
            <div><span className="stat-big">AED 2.3B</span><span className="stat-lbl label-sm">Annual Sales</span></div>
          </div>
        </div>
      </div>

      {/* Tier cards */}
      <div className="retail-tiers">
        <div className="retail-tiers-header">
          <p className="label-sm text-gold">LEASING PATHS</p>
          <h3 className="display-md" style={{ color: 'var(--white)', fontStyle: 'normal', fontSize: '1.3rem', marginTop: '0.25rem' }}>
            Select Your Entry Point
          </h3>
        </div>

        <div className="retail-tiers-grid">
          {TIERS.map(t => (
            <TiltCard
              key={t.id}
              className={`retail-tier-card glass ${active === t.id ? 'active' : ''}`}
              onClick={() => setActive(active === t.id ? null : t.id)}
              intensity={8}
            >
              <div className="rtc-top">
                <span className="rtc-icon" style={{ color: t.color }}>{t.icon}</span>
                <span className="rtc-label label-sm" style={{ color: t.color }}>{t.label}</span>
              </div>
              <p className="rtc-desc body-md">{t.desc}</p>
              {active === t.id && (
                <div className="rtc-detail">
                  <div className="rtc-meta">
                    <span className="label-sm text-dim">Area Range</span>
                    <span className="body-md">{t.area}</span>
                  </div>
                  <div className="rtc-meta">
                    <span className="label-sm text-dim">Footfall Access</span>
                    <span className="body-md">{t.traffic}</span>
                  </div>
                  <p className="rtc-brands" style={{ color: t.color }}>{t.brands}</p>
                  <button
                    className="btn btn-gold"
                    style={{ fontSize: '0.6rem', marginTop: '0.75rem', padding: '0.65rem 1.25rem' }}
                    onClick={(e) => { e.stopPropagation(); onInquiry(t.subject); }}
                  >
                    {t.cta} →
                  </button>
                </div>
              )}
              <div className="rtc-bar" style={{ background: t.color }} />
            </TiltCard>
          ))}
        </div>

        <button className="btn btn-ghost" onClick={() => onNavigate('hub')}>
          ← Back to Hub
        </button>
      </div>
    </div>
  );
}
