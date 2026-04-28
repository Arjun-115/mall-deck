import React, { useState } from 'react';
import './SponsorshipZone.css';

const TIERS = [
  {
    id: 'platinum',
    name: 'Platinum',
    color: '#E8E8E8',
    price: 'AED 5M+',
    period: 'Annual Package',
    icon: '◆',
    tagline: 'The Pinnacle of Presence',
    reach: '105M+ impressions',
    includes: [
      'Exclusive naming rights — 1 major venue',
      'Entire digital screen network access',
      'Premium atrium activation space (year-round)',
      'Co-branded global marketing campaigns',
      'VIP hospitality & event priority booking',
      'Dedicated account team & brand liaison',
    ],
    badge: 'MOST EXCLUSIVE',
  },
  {
    id: 'gold',
    name: 'Gold',
    color: '#C9A84C',
    price: 'AED 2M+',
    period: 'Annual Package',
    icon: '◉',
    tagline: 'High-Impact Visibility',
    reach: '60M+ impressions',
    includes: [
      'Primary zone naming or co-branding',
      'Digital screen network (prime slots)',
      'Seasonal activation space (4× per year)',
      'Co-branded seasonal campaigns',
      'VIP event access and guest hospitality',
    ],
    badge: 'MOST POPULAR',
  },
  {
    id: 'silver',
    name: 'Silver',
    color: '#A0A0A0',
    price: 'AED 800K+',
    period: 'Annual Package',
    icon: '◈',
    tagline: 'Consistent Brand Presence',
    reach: '30M+ impressions',
    includes: [
      'Zone co-branding opportunities',
      'Digital display advertising (rotating)',
      'Activation space (2× per year)',
      'Event sponsorship opportunities',
    ],
    badge: '',
  },
  {
    id: 'bronze',
    name: 'Bronze',
    color: '#CD7F32',
    price: 'AED 250K+',
    period: 'Annual Package',
    icon: '◎',
    tagline: 'Strategic Market Entry',
    reach: '10M+ impressions',
    includes: [
      'Digital advertising presence',
      'One-time activation opportunity',
      'Brand listing in key directories',
    ],
    badge: '',
  },
];

const WHY_POINTS = [
  { icon: '👁', val: '105M', label: 'Annual eyeballs' },
  { icon: '🌍', val: '200+', label: 'Nations represented' },
  { icon: '💰', val: 'Top 5%', label: 'Global wealth bracket' },
  { icon: '📱', val: '48M', label: 'Social impressions / year' },
];

export default function SponsorshipZone({ onInquiry, onNavigate }) {
  const [activeTier, setActiveTier] = useState('gold');
  const active = TIERS.find(t => t.id === activeTier);

  return (
    <div className="sponsor-zone">
      {/* Left: Why sponsor */}
      <div className="sponsor-left">
        <div className="sponsor-bg"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/mall_entertainment_event_1776928097011.png)` }}
        />
        <div className="sponsor-overlay" />
        <div className="sponsor-left-content">
          <p className="label-sm text-gold">SPONSORSHIP &amp; PARTNERSHIPS</p>
          <h2 className="display-lg sponsor-title">
            Your Brand,<br /><em>The World's Stage</em>
          </h2>
          <p className="body-lg" style={{ fontSize: '0.82rem', maxWidth: '300px', marginBottom: '1.5rem' }}>
            Align your brand with the world's most visited destination. 105 million reasons every year.
          </p>

          <div className="sponsor-why-grid">
            {WHY_POINTS.map(p => (
              <div key={p.label} className="sponsor-why-item glass">
                <span className="sponsor-why-icon">{p.icon}</span>
                <span className="sponsor-why-val">{p.val}</span>
                <span className="label-sm text-gold">{p.label}</span>
              </div>
            ))}
          </div>

          <button
            className="btn btn-outline"
            style={{ fontSize: '0.6rem', marginTop: '1.5rem' }}
            onClick={() => onInquiry('Sponsorship Partnership')}
          >
            Talk to Our Partnerships Team →
          </button>
        </div>
      </div>

      {/* Right: Tier cards */}
      <div className="sponsor-right">
        <div className="sponsor-right-header">
          <p className="label-sm text-gold">PARTNERSHIP TIERS</p>
          <p className="body-md" style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '0.25rem' }}>
            Select a tier to view what's included
          </p>
        </div>

        {/* Tier selector buttons */}
        <div className="tier-selector">
          {TIERS.map(t => (
            <button
              key={t.id}
              className={`tier-btn ${activeTier === t.id ? 'active' : ''}`}
              style={{ '--tier-color': t.color }}
              onClick={() => setActiveTier(t.id)}
            >
              {t.badge && <span className="tier-badge">{t.badge}</span>}
              <span className="tier-btn-icon" style={{ color: t.color }}>{t.icon}</span>
              <span className="tier-btn-name label-sm" style={{ color: activeTier === t.id ? t.color : undefined }}>
                {t.name}
              </span>
              <span className="tier-btn-price">{t.price}</span>
            </button>
          ))}
        </div>

        {/* Detail view */}
        {active && (
          <div className="tier-detail glass-dark" key={activeTier}>
            <div className="tier-detail-head">
              <div>
                <h3 className="tier-detail-name" style={{ color: active.color }}>
                  {active.icon} {active.name} Partnership
                </h3>
                <p className="tier-tagline body-md">{active.tagline}</p>
              </div>
              <div className="tier-reach-box" style={{ borderColor: active.color }}>
                <span className="tier-reach-val" style={{ color: active.color }}>{active.reach}</span>
                <span className="label-sm text-dim" style={{ fontSize: '0.5rem' }}>Projected Annual</span>
              </div>
            </div>

            <div className="tier-includes">
              <p className="label-sm" style={{ color: active.color, marginBottom: '0.6rem' }}>WHAT'S INCLUDED</p>
              {active.includes.map(item => (
                <div key={item} className="tier-include-row">
                  <span style={{ color: active.color, fontSize: '0.7rem' }}>◆</span>
                  <span className="body-md" style={{ fontSize: '0.78rem' }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="tier-actions">
              <button className="btn btn-gold" style={{ fontSize: '0.6rem' }}
                onClick={() => onInquiry(`${active.name} Sponsorship Inquiry`)}>
                Inquire About {active.name} →
              </button>
              <button className="btn btn-outline" style={{ fontSize: '0.6rem' }}
                onClick={() => onInquiry('Sponsorship Media Kit')}>
                Download Media Kit
              </button>
            </div>
          </div>
        )}

        <button className="btn btn-ghost" onClick={() => onNavigate('hub')}>
          ← Back to Hub
        </button>
      </div>
    </div>
  );
}
