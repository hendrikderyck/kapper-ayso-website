import React from 'react'
import logoImage from '../assets/images/logo.jpg'
import './Footer.css'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-info">
              <img src={logoImage} alt="Ayso Logo" className="footer-logo" />
              <div>
                <h3>Ayso</h3>
                <p>Luxury Hair Salon</p>
              </div>
            </div>
            <p className="footer-description">
              Where artistry meets elegance. Experience the finest in hair care 
              and styling in the heart of Leuven.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-section">
              <h4>Navigation</h4>
              <ul>
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('services')}>Services</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
            
            <div className="link-section">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+32487366679">+32 487 36 66 79</a></li>
                <li><a href="mailto:info@ayso.be">info@ayso.be</a></li>
                <li><span>Leuven Center</span></li>
              </ul>
            </div>
            
            <div className="link-section">
              <h4>Hours</h4>
              <ul>
                <li><span>Mon-Fri: 9:00 AM - 6:00 PM</span></li>
                <li><span>Sat: 9:00 AM - 5:00 PM</span></li>
                <li><span>Sun: Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Ayso Hair Salon. All rights reserved.</p>
            <div className="footer-actions">
              <button onClick={scrollToTop} className="back-to-top">
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
