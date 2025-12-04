import React, { useEffect, useRef } from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
      // Also add visible class immediately if already in view
      if (heroRef.current.getBoundingClientRect().top < window.innerHeight) {
        heroRef.current.classList.add('visible')
      }
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleVideoCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error('Video autoplay failed:', err)
      })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-video-container">
        <video 
          ref={videoRef}
          src="/videos/hero.mp4"
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={handleVideoCanPlay}
        />
        
        <div className="hero-overlay"></div>
        <div className="hero-overlay-gradient"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text fade-in">
            <div className="hero-badge">
              <span>Premium Hair Salon</span>
            </div>
            
            <h1 className="hero-title">
              <span className="hero-line">Royal</span>
              <span className="hero-line">Kapsalon</span>
            </h1>
            
            <p className="hero-subtitle">
              Where artistry meets elegance. Experience the finest in hair care 
              and styling in the heart of Leuven.
            </p>
            
            <div className="hero-cta">
              <a href="tel:+32487366679" className="btn btn-primary">
                Book Appointment
              </a>
              <button onClick={scrollToContact} className="btn btn-secondary">
                Visit Us
              </button>
            </div>
            
            <div className="hero-contact">
              <div className="contact-item">
                <span className="contact-label">Call</span>
                <a href="tel:+32487366679" className="contact-value">+32 487 36 66 79</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">Leuven Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
