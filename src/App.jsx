import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Import components
import Hero from './components/Hero'
import WhyProperty from './components/WhyProperty'
import RetailLuxury from './components/RetailLuxury'
import Attractions from './components/Attractions'
import EventsModule from './components/EventsModule'
import LifestyleDining from './components/LifestyleDining'
import CinematicIntro from './components/CinematicIntro'
import InquiryModal from './components/InquiryModal'



function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')
  const [inquiry, setInquiry] = useState({ isOpen: false, subject: "" })
  
  const openInquiry = (subject) => setInquiry({ isOpen: true, subject })
  const closeInquiry = () => setInquiry({ isOpen: false, subject: "" })


  
  // Slide references and logic for intersecting
  const sections = ['hero', 'overview', 'retail', 'dining', 'attractions', 'events']
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const scrollPos = containerRef.current.scrollTop
      const windowHeight = window.innerHeight

      // Simplified way to detect which section is most visible based on snap scroll
      const index = Math.round(scrollPos / windowHeight)
      if(sections[index]) {
        setActiveSection(sections[index])
      }
    }

    const container = containerRef.current
    if(container) {
      container.addEventListener('scroll', handleScroll)
    }
    
    return () => {
      if(container) container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if(el && containerRef.current) {
      // Offset top for scroll snap container
      containerRef.current.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="deck-container">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
            style={{ position: 'fixed', inset: 0, zIndex: 10000 }}
          >
            <CinematicIntro onComplete={() => setShowIntro(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: showIntro ? 0 : 1, 
          scale: showIntro ? 0.9 : 1 
        }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Fixed Header */}
        <header className="navbar">
          <div className="logo luxury-gradient-text" onClick={() => scrollTo('hero')} style={{cursor: 'pointer'}}>DUBAI MALL</div>
          <button className="nav-btn" onClick={() => openInquiry('General Partnership')}>Inquire Now</button>
        </header>


        {/* Non-linear Dot Navigation (Deck Style) */}
        <nav className="dot-navigation">
          {sections.map((sec) => (
            <div 
              key={sec} 
              className={`dot ${activeSection === sec ? 'active' : ''}`}
              onClick={() => scrollTo(sec)}
              title={`Go to ${sec}`}
            />
          ))}
        </nav>

        {/* The Scroll-Snap Engine */}
        <main className="deck-scroll-container" ref={containerRef}>
          <section id="hero" className="deck-slide"><Hero onInquiry={openInquiry} /></section>
          <section id="overview" className="deck-slide"><WhyProperty onInquiry={openInquiry} /></section>
          <section id="retail" className="deck-slide"><RetailLuxury onInquiry={openInquiry} /></section>
          <section id="dining" className="deck-slide"><LifestyleDining onInquiry={openInquiry} /></section>
          <section id="attractions" className="deck-slide"><Attractions onInquiry={openInquiry} /></section>
          <section id="events" className="deck-slide" style={{height:'auto', minHeight: '100vh'}}><EventsModule onInquiry={openInquiry} /></section>
        </main>

        <InquiryModal 
          isOpen={inquiry.isOpen} 
          onClose={closeInquiry} 
          subject={inquiry.subject} 
        />


        {/* Background Ambience Layer */}
        <div className="global-deck-bg"></div>
      </motion.div>
    </div>
  )

}

export default App
