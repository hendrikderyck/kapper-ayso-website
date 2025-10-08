import React, { useEffect, useRef, useState } from 'react'
import './Services.css'

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null)
  const [selectedGender, setSelectedGender] = useState<'women' | 'men'>('women')

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = {
    women: [
      { name: "Cut & Style", price: "€45" },
      { name: "Wash, Cut & Blow Dry", price: "€55" },
      { name: "Full Color", price: "€95" },
      { name: "Highlights", price: "€85" },
      { name: "Balayage", price: "€120" },
      { name: "Perm", price: "€75" },
      { name: "Keratin Treatment", price: "€150" },
      { name: "Bridal Styling", price: "€180" }
    ],
    men: [
      { name: "Cut", price: "€30" },
      { name: "Wash & Cut", price: "€35" },
      { name: "Beard Trim", price: "€25" },
      { name: "Beard Styling", price: "€30" },
      { name: "Hair Color", price: "€55" },
      { name: "Gray Coverage", price: "€50" }
    ]
  }

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-content fade-in" ref={servicesRef}>
          <div className="services-header">
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">
              Professional hair care services tailored to your needs
            </p>
          </div>
          
          <div className="gender-selector">
            <button 
              className={`gender-btn ${selectedGender === 'women' ? 'active' : ''}`}
              onClick={() => setSelectedGender('women')}
            >
              Women
            </button>
            <button 
              className={`gender-btn ${selectedGender === 'men' ? 'active' : ''}`}
              onClick={() => setSelectedGender('men')}
            >
              Men
            </button>
          </div>
          
          <div className="services-grid">
            <div className="service-category">
              <div className="category-header">
                <h3 className="category-title">{selectedGender === 'women' ? 'Women\'s Services' : 'Men\'s Services'}</h3>
              </div>
              
              <div className="services-list">
                {services[selectedGender].map((service, serviceIndex) => (
                  <div key={serviceIndex} className="service-item">
                    <span className="service-name">{service.name}</span>
                    <span className="service-price">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="services-footer">
            <div className="footer-content">
              <h3>Ready to Transform Your Look?</h3>
              <p>Book your appointment today and experience luxury hair care</p>
              <a href="tel:+32487366679" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
