import React, { useEffect, useRef } from 'react'
import scissorsImage from '../assets/images/cutting-hair.jpg'
import toolsImage from '../assets/images/cutting-hair-2.jpg'

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null)

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content fade-in" ref={aboutRef}>
          <div className="about-header">
            <h2 className="section-title">About Ayso</h2>
            <p className="section-subtitle">
              Where artistry meets elegance in the heart of Leuven
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-text">
              <div className="about-story">
                <h3>Our Story</h3>
                <p>
                  At Ayso, we believe that exceptional hair care is an art form. 
                  Our salon represents the perfect blend of contemporary style and 
                  timeless elegance, creating an environment where every client 
                  feels truly special.
                </p>
                <p>
                  With years of experience and a passion for excellence, our team 
                  of master stylists brings international expertise to Leuven. 
                  We don't just cut hair – we craft experiences that enhance your 
                  natural beauty and boost your confidence.
                </p>
              </div>
              
              <div className="about-values">
                <h3>Our Philosophy</h3>
                <div className="values-grid">
                  <div className="value-item">
                    <h4>Excellence</h4>
                    <p>Uncompromising quality in every service we provide</p>
                  </div>
                  <div className="value-item">
                    <h4>Innovation</h4>
                    <p>Cutting-edge techniques and premium products</p>
                  </div>
                  <div className="value-item">
                    <h4>Personal Care</h4>
                    <p>Tailored experiences designed just for you</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-images">
              <div className="image-container">
                <img 
                  src={scissorsImage} 
                  alt="Professional hair styling at Ayso salon" 
                  className="about-img"
                />
              </div>
              
              <div className="image-container">
                <img 
                  src={toolsImage} 
                  alt="Hair care and styling at Ayso salon" 
                  className="about-img"
                />
              </div>
            </div>
          </div>
          
          <div className="about-cta">
            <div className="cta-content">
              <h3>Experience the Difference</h3>
              <p>Discover why Ayso is Leuven's premier destination for luxury hair care</p>
              <a href="tel:+32487366679" className="btn btn-primary">
                Book Your Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
