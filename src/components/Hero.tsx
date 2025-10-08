import React, { useEffect, useRef } from 'react'
import heroImage from '../assets/images/hero-image.jpg'
import './Hero.css'

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)

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
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text fade-in">
              <div className="hero-badge">
                <span>Premium Hair Salon</span>
              </div>
              
              <h1 className="hero-title">
                <span className="hero-line">Ayso</span>
                <span className="hero-line">Leuven</span>
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
            
            <div className="hero-image fade-in">
              <div className="image-wrapper">
                <img 
                  src={heroImage} 
                  alt="Luxury hair salon experience at Ayso Leuven" 
                  className="hero-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="image-fallback" style={{display: 'none'}}>
                  <div className="fallback-content">
                    <h3>Ayso</h3>
                    <p>Luxury Hair Salon</p>
                  </div>
                </div>
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
