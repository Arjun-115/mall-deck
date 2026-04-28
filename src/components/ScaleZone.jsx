import React, { useState, useEffect, useRef } from 'react';
import StatCounter from './StatCounter';
import './ScaleZone.css';

const DAILY_VISITORS = Math.floor(105000000 / 365);
const HOURLY = Math.floor(DAILY_VISITORS / 24);

// Exposure data: [category][market] = annual impressions
const EXPOSURE_DATA = {
  luxury_retail: { americas: 237000, europe: 312000, gcc: 890000, asia: 445000, global: 2800000 },
  mid_retail:    { americas: 580000, europe: 720000, gcc: 2100000, asia: 1050000, global: 6400000 },
  fb:            { americas: 420000, europe: 510000, gcc: 1500000, asia: 760000, global: 4800000 },
  sponsorship:   { americas: 1200000, europe: 1500000, gcc: 4200000, asia: 2100000, global: 14000000 },
  event:         { americas: 890000, europe: 1100000, gcc: 3100000, asia: 1550000, global: 9500000 },
};

const PULSE_POINTS = [
  { cx: '18%', cy: '32%', label: 'New York' },
  { cx: '26%', cy: '28%', label: 'London' },
  { cx: '72%', cy: '35%', label: 'Tokyo' },
  { cx: '50%', cy: '30%', label: 'Moscow' },
  { cx: '32%', cy: '52%', label: 'São Paulo' },
  { cx: '82%', cy: '58%', label: 'Sydney' },
  { cx: '60%', cy: '42%', label: 'Mumbai' },
  { cx: '64%', cy: '36%', label: 'Dubai', gold: true },
];

export default function ScaleZone({ onInquiry, onNavigate }) {
  const [category, setCategory] = useState('luxury_retail');
  const [market, setMarket] = useState('global');
  const [calcTriggered, setCalcTriggered] = useState(false);
  const [liveCount, setLiveCount] = useState(DAILY_VISITORS);
  const sectionRef = useRef(null);

  // Fake live counter tick
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(c => c + Math.floor(Math.random() * 4 + 2));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const exposure = EXPOSURE_DATA[category]?.[market] ?? 0;
  const formattedExposure = exposure.toLocaleString();

  return (
    <div className="scale-zone" ref={sectionRef}>
      {/* Left: FootfallPulse */}
      <div className="scale-left">
        <div className="scale-header">
          <p className="label-sm text-gold">LIVE FOOTFALL PULSE</p>
          <h2 className="display-xl scale-title">
            <StatCounter end={105000000} duration={2800} suffix="+" className="counter-gold" />
          </h2>
          <p className="label-md" style={{ color: 'rgba(216,216,216,0.5)', letterSpacing: '0.2em' }}>
            Annual Visitors · Dubai Mall
          </p>
        </div>

        {/* World Map SVG */}
        <div className="pulse-map-wrap">
          <div className="pulse-map">
            {/* Simple world-map gradient representation */}
            <svg viewBox="0 0 100 60" className="pulse-svg" xmlns="http://www.w3.org/2000/svg">
              {/* World map path approximation as simple continents */}
              <rect width="100" height="60" fill="transparent" />
              {/* Americas */}
              <ellipse cx="22" cy="30" rx="12" ry="18" fill="rgba(74,158,255,0.07)" stroke="rgba(74,158,255,0.15)" strokeWidth="0.3" />
              {/* Europe/Africa */}
              <ellipse cx="38" cy="33" rx="8" ry="18" fill="rgba(74,158,255,0.07)" stroke="rgba(74,158,255,0.15)" strokeWidth="0.3" />
              {/* Asia */}
              <ellipse cx="65" cy="28" rx="18" ry="16" fill="rgba(74,158,255,0.07)" stroke="rgba(74,158,255,0.15)" strokeWidth="0.3" />
              {/* Australia */}
              <ellipse cx="82" cy="50" rx="7" ry="5" fill="rgba(74,158,255,0.07)" stroke="rgba(74,158,255,0.15)" strokeWidth="0.3" />

              {/* Lines from cities to Dubai */}
              {PULSE_POINTS.filter(p => !p.gold).map((p, i) => (
                <line
                  key={i}
                  x1={p.cx} y1={p.cy}
                  x2="64%" y2="36%"
                  stroke="rgba(201,168,76,0.15)"
                  strokeWidth="0.3"
                  strokeDasharray="1 1"
                />
              ))}

              {/* Pulse dots */}
              {PULSE_POINTS.map((p, i) => (
                <g key={i}>
                  <circle
                    cx={p.cx} cy={p.cy} r={p.gold ? '1.2' : '0.7'}
                    fill={p.gold ? '#C9A84C' : 'rgba(74,158,255,0.8)'}
                    className="pulse-dot"
                    style={{ '--delay': `${i * 0.3}s` }}
                  />
                  {p.gold && (
                    <circle cx={p.cx} cy={p.cy} r="2.5" fill="none"
                      stroke="rgba(201,168,76,0.4)" strokeWidth="0.4"
                      className="pulse-ring" />
                  )}
                </g>
              ))}
            </svg>

            {/* Labels */}
            {PULSE_POINTS.map((p, i) => (
              <div key={i} className={`map-label ${p.gold ? 'map-label-gold' : ''}`}
                style={{ left: p.cx, top: p.cy }}>
                {p.label}
              </div>
            ))}
          </div>
        </div>

        {/* Live ticker */}
        <div className="live-ticker">
          <span className="live-dot" />
          <span className="label-sm text-dim">TODAY  </span>
          <span className="live-num">{liveCount.toLocaleString()}</span>
          <span className="label-sm text-dim">  ·  HOURLY  </span>
          <span className="live-num">{HOURLY.toLocaleString()}</span>
        </div>
      </div>

      {/* Right: Stats + Calculator */}
      <div className="scale-right">
        {/* Stats grid */}
        <div className="scale-stats">
          {[
            { val: '1.2M', label: 'Sq Ft GLA', sub: 'Gross Leasable Area' },
            { val: '200+', label: 'Nations', sub: 'Visitor Origins' },
            { val: '3.8h', label: 'Avg Dwell', sub: 'Per Visit' },
            { val: '185', label: 'Retail Tenants', sub: 'Luxury & Premium' },
          ].map((s, i) => (
            <div key={i} className="stat-card glass" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="stat-val">{s.val}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* EXPOSURE CALCULATOR — "I Need To Be Here" moment */}
        <div className="calc-panel glass-dark">
          <p className="label-sm text-gold" style={{ marginBottom: '0.5rem' }}>
            YOUR BRAND EXPOSURE CALCULATOR
          </p>
          <p className="body-md" style={{ marginBottom: '1.25rem', opacity: 0.6, fontSize: '0.78rem' }}>
            Select your category and target market to see your potential annual reach.
          </p>

          <div className="calc-selects">
            <div className="calc-select-group">
              <label className="label-sm text-dim">Category</label>
              <select
                value={category}
                onChange={e => { setCategory(e.target.value); setCalcTriggered(false); }}
                className="calc-select"
              >
                <option value="luxury_retail">Luxury Retail</option>
                <option value="mid_retail">Mid-Market Retail</option>
                <option value="fb">F&amp;B / Dining</option>
                <option value="sponsorship">Sponsorship / Brand</option>
                <option value="event">Event Partner</option>
              </select>
            </div>

            <div className="calc-select-group">
              <label className="label-sm text-dim">Primary Market</label>
              <select
                value={market}
                onChange={e => { setMarket(e.target.value); setCalcTriggered(false); }}
                className="calc-select"
              >
                <option value="global">Global (All Markets)</option>
                <option value="gcc">GCC Region</option>
                <option value="europe">Europe</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia-Pacific</option>
              </select>
            </div>
          </div>

          <button
            className="btn btn-gold calc-btn"
            onClick={() => setCalcTriggered(true)}
          >
            Calculate My Reach
          </button>

          {calcTriggered && (
            <div className="calc-result">
              <div className="calc-result-label label-sm text-dim">Your projected annual reach</div>
              <div className="calc-result-num">
                <StatCounter end={exposure} duration={1600} suffix=" visitors" className="calc-big-num" trigger={calcTriggered} />
              </div>
              <p className="calc-result-sub body-md">
                walk past your potential presence at Dubai Mall each year.
              </p>
              <button className="btn btn-outline" style={{ marginTop: '1rem', fontSize: '0.6rem' }}
                onClick={() => onInquiry('Leasing Inquiry')}>
                Claim Your Position →
              </button>
            </div>
          )}
        </div>

        {/* Back to hub */}
        <button className="btn btn-ghost" onClick={() => onNavigate('hub')} style={{ marginTop: '0.75rem', fontSize: '0.6rem' }}>
          ← Back to Hub
        </button>
      </div>
    </div>
  );
}
