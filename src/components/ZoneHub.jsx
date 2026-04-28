import React from 'react';
import TiltCard from './TiltCard';
import './ZoneHub.css';

const ZONES = [
  {
    id: 'scale',
    label: 'Scale & Reach',
    sub: '105 Million Annual Visitors',
    accent: '#4A9EFF',
    icon: '◉',
    stat: '105M+',
    statLabel: 'Visitors/Year',
    image: 'luxury_mall_interior_cinematic_1776957820844.png',
    description: 'Explore the world\'s most visited retail destination',
  },
  {
    id: 'retail',
    label: 'Retail & Luxury',
    sub: '1,200+ Brands Across Every Tier',
    accent: '#C9A84C',
    icon: '◈',
    stat: '1,200+',
    statLabel: 'Brands',
    image: 'fashion_avenue_dubai_mall_luxury_1776958221526.png',
    description: 'From flagship boutiques to pop-up opportunities',
  },
  {
    id: 'entertainment',
    label: 'Entertainment',
    sub: 'Dubai Aquarium & Beyond',
    accent: '#00C9A7',
    icon: '◆',
    stat: '200+',
    statLabel: 'Attractions',
    image: 'dubai_aquarium_cinematic_1776958115865.png',
    description: 'Experiences that drive footfall and dwell time',
  },
  {
    id: 'dining',
    label: 'Dining & Lifestyle',
    sub: '200 Restaurants Across Every Cuisine',
    accent: '#FF8C5A',
    icon: '◇',
    stat: '200+',
    statLabel: 'Restaurants',
    image: 'luxury_retail_popup_1776928052549.png',
    description: 'F&B as a destination, not an afterthought',
  },
  {
    id: 'events',
    label: 'Events Platform',
    sub: '1,000+ Events Annually',
    accent: '#9B6DFF',
    icon: '◎',
    stat: '40K',
    statLabel: 'Capacity',
    image: 'mall_entertainment_event_1776928097011.png',
    description: 'Concerts, activations, corporate events & more',
  },
  {
    id: 'sponsorship',
    label: 'Sponsorship',
    sub: 'Global Brand Partnership Tiers',
    accent: '#FF4D7D',
    icon: '◐',
    stat: '4',
    statLabel: 'Tier Packages',
    image: 'dubai_mall_hero_1776928007760.png',
    description: 'Bespoke activation packages for every ambition',
  },
];

export default function ZoneHub({ onNavigate, onInquiry }) {
  return (
    <div className="hub-root">
      <div className="hub-header">
        <p className="label-sm text-gold hub-eyebrow">THE DUBAI MALL · COMMERCIAL PLATFORM</p>
        <h1 className="display-lg hub-title">Where Would You Like<br /><em>to Begin?</em></h1>
        <p className="body-md hub-subtitle">Select a category to explore — your journey is non-linear.</p>
      </div>

      <div className="hub-grid">
        {ZONES.map((zone, i) => (
          <TiltCard
            key={zone.id}
            className="hub-card"
            onClick={() => onNavigate(zone.id)}
            style={{ '--delay': `${i * 0.07}s`, '--accent': zone.accent }}
          >
            {/* Background image */}
            <div
              className="hub-card-bg"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}assets/${zone.image})`,
              }}
            />
            {/* Color overlay */}
            <div className="hub-card-overlay" style={{ background: `linear-gradient(135deg, rgba(5,5,8,0.85) 0%, rgba(5,5,8,0.4) 100%)` }} />
            {/* Accent line */}
            <div className="hub-card-accent-line" style={{ background: zone.accent }} />

            {/* Content */}
            <div className="hub-card-content">
              <div className="hub-card-top">
                <span className="hub-card-icon" style={{ color: zone.accent }}>{zone.icon}</span>
                <span className="hub-card-stat-wrap">
                  <span className="hub-card-stat" style={{ color: zone.accent }}>{zone.stat}</span>
                  <span className="hub-card-stat-label label-sm">{zone.statLabel}</span>
                </span>
              </div>
              <div className="hub-card-bottom">
                <h3 className="hub-card-title">{zone.label}</h3>
                <p className="hub-card-desc">{zone.description}</p>
                <span className="hub-card-cta label-sm" style={{ color: zone.accent }}>
                  EXPLORE →
                </span>
              </div>
            </div>

            {/* Hover border */}
            <div className="hub-card-border" style={{ borderColor: zone.accent }} />
          </TiltCard>
        ))}
      </div>

      <div className="hub-footer">
        <button className="btn btn-outline" onClick={() => onInquiry('General Inquiry')}>
          Request Full Investor Deck
        </button>
      </div>
    </div>
  );
}
