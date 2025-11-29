import React, { useEffect, useRef } from 'react'
import './Contact.css'

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null)

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Leuven+Belgium', '_blank')
  }

  const openDirections = () => {
    window.open('https://maps.google.com/?daddr=Leuven+Belgium', '_blank')
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-content fade-in" ref={contactRef}>
          <div className="contact-header">
            <h2 className="section-title">Visit Us</h2>
            <p className="section-subtitle">
              Located in the heart of Leuven, we welcome you to experience luxury hair care
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-section">
                <h3>Location</h3>
                <div className="address">
                  <p><strong>Ayso Hair Salon</strong></p>
                  <p>Leuven Center</p>
                  <p>3000 Leuven, Belgium</p>
                </div>
                
                <div className="contact-buttons">
                  <button onClick={openGoogleMaps} className="btn btn-primary">
                    View Map
                  </button>
                  <button onClick={openDirections} className="btn btn-secondary">
                    Get Directions
                  </button>
                </div>
              </div>
              
              <div className="info-section">
                <h3>Contact</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-label">Phone</span>
                    <a href="tel:+32487366679" className="contact-value">+32 487 36 66 79</a>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <a href="mailto:info@ayso.be" className="contact-value">info@ayso.be</a>
                  </div>
                </div>
              </div>
              
              <div className="info-section">
                <h3>Hours</h3>
                <div className="opening-hours">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="map-container">
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.1!2d4.7!3d50.8798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c160c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sLeuven%2C%20Belgium!5e0!3m2!1sen!2sbe!4v1234567890123!5m2!1sen!2sbe"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ayso Hair Salon Location in Leuven"
                ></iframe>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
