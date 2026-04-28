import React, { useState } from 'react';
import './EventsZone.css';

const EVENT_TYPES = [
  { id: 'concert', icon: '🎵', label: 'Concerts & Performances', color: '#9B6DFF', cap: '40,000', desc: 'World-class live music and performance events in the Grand Atrium and outdoor fountains stage.', includes: ['Artist Booking Support', 'Production Infrastructure', 'F&B Revenue Share', 'Ticketing Partnership'] },
  { id: 'activation', icon: '⚡', label: 'Brand Activations', color: '#FF4D7D', cap: 'Flexible', desc: 'Custom brand experiences from product launches to immersive pop-ups — with 105M eyeballs per year.', includes: ['Prime Atrium Placement', 'Digital Screen Network', 'Social Amplification', 'Data & Analytics'] },
  { id: 'corporate', icon: '🏢', label: 'Corporate Events', color: '#4A9EFF', cap: '5,000', desc: 'State-of-the-art conference and convention facilities for high-stakes corporate gatherings.', includes: ['Dedicated Conference Suites', 'AV & Tech Infrastructure', 'Catering Coordination', 'VIP Concierge'] },
  { id: 'launch', icon: '🚀', label: 'Product Launches', color: '#C9A84C', cap: '2,000', desc: 'Luxury product reveals in a world-class setting — from automotive to fashion and tech launches.', includes: ['Exclusive Venue Access', 'Custom Set Design', 'Media & Press Facilities', 'Influencer Access'] },
];

const VENUE_SPACES = [
  { name: 'Grand Atrium', cap: '40,000', type: 'Concerts & Mega Events', color: '#9B6DFF' },
  { name: 'Fountain Stage', cap: '15,000', type: 'Outdoor Performances', color: '#4A9EFF' },
  { name: 'Convention Hall A', cap: '5,000', type: 'Corporate & Conferences', color: '#00C9A7' },
  { name: 'Fashion Avenue Promenade', cap: '3,000', type: 'Luxury Launches & Press', color: '#C9A84C' },
  { name: 'VIP Rooftop Terrace', cap: '500', type: 'Exclusive Gatherings', color: '#FF8C5A' },
];

export default function EventsZone({ onInquiry, onNavigate }) {
  const [activeType, setActiveType] = useState('concert');
  const [showSpaces, setShowSpaces] = useState(false);
  const active = EVENT_TYPES.find(e => e.id === activeType);

  return (
    <div className="events-zone">
      {/* Left side */}
      <div className="events-left">
        <div className="events-hero-bg"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/mall_entertainment_event_1776928097011.png)` }}
        />
        <div className="events-hero-overlay" />
        <div className="events-left-content">
          <p className="label-sm text-gold">EVENTS PLATFORM</p>
          <h2 className="display-lg events-title">
            The Stage for<br /><em>What's Next</em>
          </h2>
          <p className="body-lg" style={{ fontSize: '0.82rem', maxWidth: '300px', marginBottom: '1.5rem' }}>
            1,000+ events annually. 40,000 person capacity. One address the world already knows.
          </p>

          {/* Venue spaces toggle */}
          <button
            className={`btn ${showSpaces ? 'btn-gold' : 'btn-outline'}`}
            style={{ fontSize: '0.6rem', marginBottom: '1rem' }}
            onClick={() => setShowSpaces(!showSpaces)}
          >
            {showSpaces ? 'Hide' : 'View'} Venue Spaces
          </button>

          {showSpaces && (
            <div className="venue-spaces-list">
              {VENUE_SPACES.map(v => (
                <div key={v.name} className="venue-space-row glass">
                  <div className="venue-space-dot" style={{ background: v.color }} />
                  <div className="venue-space-info">
                    <span className="venue-space-name">{v.name}</span>
                    <span className="venue-space-type">{v.type}</span>
                  </div>
                  <span className="venue-space-cap" style={{ color: v.color }}>{v.cap}</span>
                </div>
              ))}
            </div>
          )}

          {/* Key metrics */}
          {!showSpaces && (
            <div className="events-metrics">
              {[
                { v: '1,000+', l: 'Events / Year' },
                { v: '40K', l: 'Max Capacity' },
                { v: '200+', l: 'Nations Reached' },
              ].map(m => (
                <div key={m.l} className="events-metric">
                  <span className="events-metric-val">{m.v}</span>
                  <span className="label-sm text-gold">{m.l}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right side */}
      <div className="events-right">
        <div className="events-right-header">
          <p className="label-sm text-gold">EVENT TYPES</p>
          <p className="body-md" style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '0.25rem' }}>Select to explore capabilities</p>
        </div>

        {/* Type selector */}
        <div className="event-type-tabs">
          {EVENT_TYPES.map(t => (
            <button
              key={t.id}
              className={`event-type-tab ${activeType === t.id ? 'active' : ''}`}
              style={{ '--type-color': t.color }}
              onClick={() => setActiveType(t.id)}
            >
              <span className="event-type-icon">{t.icon}</span>
              <span className="label-sm event-type-label">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        {active && (
          <div className="event-detail glass" key={activeType}>
            <div className="event-detail-header">
              <span className="event-detail-icon">{active.icon}</span>
              <div>
                <h3 className="event-detail-name" style={{ color: active.color }}>{active.label}</h3>
                <span className="label-sm text-dim">Capacity: {active.cap}</span>
              </div>
            </div>
            <p className="body-md event-detail-desc">{active.desc}</p>
            <div className="event-includes">
              <p className="label-sm text-gold" style={{ marginBottom: '0.5rem' }}>WHAT'S INCLUDED</p>
              {active.includes.map(item => (
                <div key={item} className="event-include-row">
                  <span style={{ color: active.color }}>✓</span>
                  <span className="body-md" style={{ fontSize: '0.78rem' }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="event-detail-actions">
              <button className="btn btn-gold" style={{ fontSize: '0.6rem' }}
                onClick={() => onInquiry(`${active.label} Booking`)}>
                Book This Event →
              </button>
              <button className="btn btn-outline" style={{ fontSize: '0.6rem' }}
                onClick={() => onInquiry('Event Rate Card')}>
                Request Rate Card
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
