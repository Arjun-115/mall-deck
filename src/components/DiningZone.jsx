import React, { useState } from 'react';
import './DiningZone.css';

const CATEGORIES = [
  { id: 'fine', icon: '◆', label: 'Fine Dining', color: '#FF8C5A', count: '12+', desc: 'Michelin-pedigree and celebrity chef concepts', venues: ['Nobu', 'Zuma', 'La Petite Maison', 'Atmosphere'] },
  { id: 'casual', icon: '◈', label: 'Casual & All-Day', color: '#C9A84C', count: '80+', desc: 'International casual concepts across all cuisines', venues: ['Shake Shack', 'Five Guys', 'Wagamama', 'Jones the Grocer'] },
  { id: 'regional', icon: '◉', label: 'Regional Cuisine', color: '#00C9A7', count: '40+', desc: 'Authentic Middle Eastern and regional street food', venues: ['Operation:Falafel', 'Arabian Tea House', 'Zaroob'] },
  { id: 'cafe', icon: '◎', label: 'Café & Patisserie', color: '#9B6DFF', count: '30+', desc: 'Premium café culture, specialty coffee and baked goods', venues: ['Tom & Serg', 'Comptoir 102', 'Mirzam Café'] },
];

const FOOD_STATS = [
  { val: '200+', label: 'Restaurants', sub: 'All Categories' },
  { val: '6.2M', label: 'F&B Visits', sub: 'Monthly Average' },
  { val: '3.5h', label: 'Avg Stay', sub: 'Dining Visitors' },
  { val: 'AED 180', label: 'Avg Spend', sub: 'Per Diner' },
];

export default function DiningZone({ onInquiry, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('fine');
  const active = CATEGORIES.find(c => c.id === activeCategory);

  return (
    <div className="dining-zone">
      {/* Top: Hero */}
      <div className="dining-hero">
        <div className="dining-hero-bg"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/luxury_retail_popup_1776928052549.png)` }}
        />
        <div className="dining-hero-overlay" />
        <div className="dining-hero-text">
          <p className="label-sm text-gold">DINING &amp; LIFESTYLE</p>
          <h2 className="display-lg dining-title">
            Food as a <em>Destination</em>
          </h2>
          <p className="body-lg dining-sub" style={{ maxWidth: '480px' }}>
            Dubai Mall's F&amp;B is not an afterthought — it's a reason to visit. 200+ restaurants across every cuisine, price-point, and occasion.
          </p>
        </div>
        {/* Floating stats */}
        <div className="dining-float-stats">
          {FOOD_STATS.map(s => (
            <div key={s.label} className="dining-float-stat glass">
              <span className="dining-stat-val">{s.val}</span>
              <span className="label-sm text-gold">{s.label}</span>
              <span className="body-md" style={{ fontSize: '0.6rem' }}>{s.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Category explorer */}
      <div className="dining-explorer">
        <div className="dining-tabs">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`dining-tab ${activeCategory === c.id ? 'active' : ''}`}
              style={{ '--tab-color': c.color }}
              onClick={() => setActiveCategory(c.id)}
            >
              <span className="dining-tab-icon">{c.icon}</span>
              <span className="label-sm dining-tab-label">{c.label}</span>
              <span className="dining-tab-count" style={{ color: c.color }}>{c.count}</span>
            </button>
          ))}
        </div>

        {active && (
          <div className="dining-detail" key={activeCategory}>
            <div className="dining-detail-main">
              <h3 className="dining-detail-title" style={{ color: active.color }}>{active.label}</h3>
              <p className="body-lg dining-detail-desc">{active.desc}</p>
              <div className="dining-venue-list">
                {active.venues.map(v => (
                  <span key={v} className="dining-venue-chip glass">{v}</span>
                ))}
                <span className="dining-venue-chip glass text-dim">+ many more</span>
              </div>
            </div>
            <div className="dining-detail-cta">
              <p className="body-md" style={{ marginBottom: '1rem', opacity: 0.6, fontSize: '0.78rem', maxWidth: '240px' }}>
                Interested in F&amp;B leasing or a brand dining activation?
              </p>
              <button className="btn btn-gold" style={{ fontSize: '0.65rem' }}
                onClick={() => onInquiry('F&B Leasing Inquiry')}>
                Explore F&amp;B Opportunities →
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
