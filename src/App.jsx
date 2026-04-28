import React, { useState, useCallback } from 'react';
import CinematicIntro from './components/CinematicIntro';
import SideNav from './components/SideNav';
import ZoneHub from './components/ZoneHub';
import AmbientBackground from './components/AmbientBackground';
import ScaleZone from './components/ScaleZone';
import RetailZone from './components/RetailZone';
import EntertainmentZone from './components/EntertainmentZone';
import DiningZone from './components/DiningZone';
import EventsZone from './components/EventsZone';
import SponsorshipZone from './components/SponsorshipZone';
import InquiryModal from './components/InquiryModal';
import './App.css';
import './index.css';

const ZONE_COMPONENTS = {
  scale: ScaleZone,
  retail: RetailZone,
  entertainment: EntertainmentZone,
  dining: DiningZone,
  events: EventsZone,
  sponsorship: SponsorshipZone,
};

export default function App() {
  const [phase, setPhase] = useState('intro'); // 'intro' | 'hub' | 'zone'
  const [activeZone, setActiveZone] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('General Inquiry');

  const openInquiry = useCallback((subject = 'General Inquiry') => {
    setInquirySubject(subject);
    setInquiryOpen(true);
  }, []);

  const navigateTo = useCallback((zone) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      if (!zone || zone === 'hub') {
        setActiveZone(null);
        setPhase('hub');
      } else {
        setActiveZone(zone);
        setPhase('zone');
      }
      setTransitioning(false);
    }, 320);
  }, [transitioning]);

  const handleIntroComplete = useCallback(() => {
    setPhase('hub');
  }, []);

  const ActiveZone = activeZone ? ZONE_COMPONENTS[activeZone] : null;

  return (
    <div className="app-root" data-zone={activeZone || 'hub'}>
      <AmbientBackground activeZone={activeZone} phase={phase} />

      {phase === 'intro' && (
        <CinematicIntro onComplete={handleIntroComplete} />
      )}

      {phase !== 'intro' && (
        <>
          <SideNav
            activeZone={activeZone}
            phase={phase}
            onNavigate={navigateTo}
            onInquiry={openInquiry}
          />
          <main className="app-main">
            {transitioning && <div className="transition-overlay" />}

            {phase === 'hub' && (
              <ZoneHub onNavigate={navigateTo} onInquiry={openInquiry} />
            )}

            {phase === 'zone' && ActiveZone && (
              <div className="zone-enter" key={activeZone}>
                <ActiveZone onInquiry={openInquiry} onNavigate={navigateTo} />
              </div>
            )}
          </main>
        </>
      )}

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        subject={inquirySubject}
      />
    </div>
  );
}
