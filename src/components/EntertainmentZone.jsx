import React, { useState } from 'react';
import TiltCard from './TiltCard';
import './EntertainmentZone.css';

const ATTRACTIONS = [
  {
    id: 'aquarium',
    name: 'Dubai Aquarium & Underwater Zoo',
    icon: '🐋',
    color: '#00C9A7',
    visitors: '10M+',
    visitorLabel: 'Annual Visitors',
    desc: 'The world\'s largest indoor aquarium — 33,000 living animals in a 10 million litre tank. A category-defining anchor attraction.',
    tags: ['Anchor Attraction', 'Exclusive Partnership'],
  },
  {
    id: 'ice',
    name: 'Dubai Ice Rink',
    icon: '❄️',
    color: '#4A9EFF',
    visitors: 'Olympic Size',
    visitorLabel: 'Certified Rink',
    desc: 'Olympic-standard ice rink hosting professional events, public skating sessions, and corporate activations year-round.',
    tags: ['Corporate Events', 'Brand Activation'],
  },
  {
    id: 'cinema',
    name: 'Reel Cinemas Megaplex',
    icon: '🎬',
    color: '#9B6DFF',
    visitors: '22',
    visitorLabel: 'Premium Screens',
    desc: 'A flagship 22-screen megaplex with VIP suites, IMAX, and immersive format theatres — the region\'s premier cinematic destination.',
    tags: ['Premiere Venue', 'Sponsorship'],
  },
  {
    id: 'gaming',
    name: 'VR Park & SEGA',
    icon: '🎮',
    color: '#FF8C5A',
    visitors: '150+',
    visitorLabel: 'Game Zones',
    desc: 'Two floors of immersive entertainment — VR experiences, SEGA Republic arcade, and Gen-Z destination experiences.',
    tags: ['Youth Audience', 'Dwell Time Driver'],
  },
  {
    id: 'kids',
    name: 'KidZania Dubai',
    icon: '🏙️',
    color: '#FF4D7D',
    visitors: 'Ages 4–16',
    visitorLabel: 'Target Audience',
    desc: 'An entire city built for children — role-play, education, and branded experience opportunities for family-first brands.',
    tags: ['Family Segment', 'Brand Integration'],
  },
  {
    id: 'burj',
    name: 'Burj Khalifa Access',
    icon: '🗼',
    color: '#C9A84C',
    visitors: '#1',
    visitorLabel: 'Global Icon',
    desc: 'Direct access to the world\'s tallest building — exclusive joint activations and top-of-world brand moments.',
    tags: ['Iconic Partnership', 'Premium'],
  },
];

export default function EntertainmentZone({ onInquiry, onNavigate }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="ent-zone">
      {/* Left: Image + headline */}
      <div className="ent-left">
        <div className="ent-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/dubai_aquarium_cinematic_1776958115865.png)` }} />
        <div className="ent-overlay" />
        <div className="ent-left-content">
          <p className="label-sm text-gold">ENTERTAINMENT</p>
          <h2 className="display-lg ent-title">
            Experiences That<br /><em>Define Destinations</em>
          </h2>
          <p className="body-lg ent-intro">
            Dubai Mall is not a backdrop — it's the destination itself. 200+ attractions make it the most visited place on Earth.
          </p>
          <div className="ent-macro-stats">
            {[
              { v: '200+', l: 'Attractions' },
              { v: '34M', l: 'Sq Ft' },
              { v: '#1', l: 'Most Visited' },
            ].map(s => (
              <div key={s.l} className="ent-macro-stat">
                <span className="ent-macro-val">{s.v}</span>
                <span className="label-sm text-gold">{s.l}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-gold" onClick={() => onInquiry('Attraction Partnership')} style={{ marginTop: '1.5rem', fontSize: '0.65rem' }}>
            Partner with an Attraction →
          </button>
        </div>
      </div>

      {/* Right: Attraction grid */}
      <div className="ent-right">
        <div className="ent-right-header">
          <p className="label-sm text-gold">KEY ANCHORS</p>
          <p className="body-md" style={{ opacity: 0.5, fontSize: '0.78rem', marginTop: '0.25rem' }}>Hover to explore partnership opportunities</p>
        </div>

        <div className="ent-grid">
          {ATTRACTIONS.map((a, i) => (
            <TiltCard
              key={a.id}
              className={`ent-card glass ${hovered === a.id ? 'hovered' : ''}`}
              onClick={() => onInquiry(`${a.name} Partnership`)}
              intensity={6}
            >
              <div
                className="ent-card-inner"
                onMouseEnter={() => setHovered(a.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="ent-card-top">
                  <span className="ent-icon">{a.icon}</span>
                  <div className="ent-visitors">
                    <span className="ent-vis-num" style={{ color: a.color }}>{a.visitors}</span>
                    <span className="label-sm text-dim" style={{ fontSize: '0.45rem' }}>{a.visitorLabel}</span>
                  </div>
                </div>
                <h4 className="ent-card-name">{a.name}</h4>
                <p className="ent-card-desc">{a.desc}</p>
                <div className="ent-tags">
                  {a.tags.map(t => (
                    <span key={t} className="ent-tag" style={{ borderColor: a.color, color: a.color }}>{t}</span>
                  ))}
                </div>
                <div className="ent-card-bar" style={{ background: a.color }} />
              </div>
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
