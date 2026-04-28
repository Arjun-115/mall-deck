import React from 'react';
import './SideNav.css';

const ZONES = [
  { id: 'hub',           icon: '⬡', label: 'Hub' },
  { id: 'scale',         icon: '◉', label: 'Scale' },
  { id: 'retail',        icon: '◈', label: 'Retail' },
  { id: 'entertainment', icon: '◆', label: 'Entertainment' },
  { id: 'dining',        icon: '◇', label: 'Dining' },
  { id: 'events',        icon: '◎', label: 'Events' },
  { id: 'sponsorship',   icon: '◐', label: 'Sponsorship' },
];

export default function SideNav({ activeZone, phase, onNavigate, onInquiry }) {
  const current = activeZone || 'hub';

  return (
    <nav className="sidenav">
      {/* Logo */}
      <div className="sidenav-logo" onClick={() => onNavigate('hub')}>
        <span className="sidenav-logo-mark">DM</span>
      </div>

      {/* Zone links */}
      <ul className="sidenav-links">
        {ZONES.map(z => (
          <li key={z.id}>
            <button
              className={`sidenav-btn ${current === z.id ? 'active' : ''}`}
              onClick={() => onNavigate(z.id)}
              title={z.label}
            >
              <span className="sidenav-icon">{z.icon}</span>
              <span className="sidenav-label">{z.label}</span>
              {current === z.id && <span className="sidenav-active-dot" />}
            </button>
          </li>
        ))}
      </ul>

      {/* Bottom CTA */}
      <div className="sidenav-bottom">
        <button className="sidenav-contact" onClick={() => onInquiry('General Inquiry')} title="Get in Touch">
          <span className="sidenav-icon">✉</span>
          <span className="sidenav-label">Contact</span>
        </button>
      </div>
    </nav>
  );
}
