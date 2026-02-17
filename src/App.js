import React, { useState, useEffect } from 'react';
import './App.css';
import LifewoodLogo from './LifewoodLogo';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Data services configuration
  const dataServices = [
    {
      id: 'audio',
      title: 'Audio',
      description: 'Collection, labelling, voice categorization, music categorization, intelligent customer service',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'image',
      title: 'Image',
      description: 'Collection, labelling, classification, audit, object detection and tagging',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 'video',
      title: 'Video',
      description: 'Collection, labelling, audit, live broadcast, subtitle generation',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 'text',
      title: 'Text',
      description: 'Text, collection, labelling, transcription, utterance collection, sentiment analysis',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <LifewoodLogo />
            </div>
            <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
              <a href="#home">Home</a>
              <div className="nav-dropdown">
                <a href="#ai-initiatives" className="nav-dropdown-trigger">AI Initiatives ▾</a>
                <div className="nav-dropdown-menu">
                  <a href="#ai-projects">AI Projects</a>
                  <a href="#ai-data-extraction">AI Data Extraction</a>
                  <a href="#ml-enablement">Machine Learning Enablement</a>
                  <a href="#autonomous-driving">Autonomous Driving Technology</a>
                </div>
              </div>
              <div className="nav-dropdown">
                <a href="#our-company" className="nav-dropdown-trigger">Our Company ▾</a>
                <div className="nav-dropdown-menu">
                  <a href="#about">About Us</a>
                  <a href="#values">Our Values</a>
                  <a href="#mission">Our Mission</a>
                  <a href="#know-us">Know Us Better</a>
                </div>
              </div>
              <div className="nav-dropdown">
                <a href="#what-we-offer" className="nav-dropdown-trigger">What We Offer ▾</a>
                <div className="nav-dropdown-menu">
                  <a href="#services">Services</a>
                  <a href="#data-solutions">Data Solutions</a>
                  <a href="#data-engineering">Data Engineering Services</a>
                  <a href="#ai-data">AI Data Solutions</a>
                </div>
              </div>
              <div className="nav-dropdown">
                <a href="#careers" className="nav-dropdown-trigger">Careers ▾</a>
                <div className="nav-dropdown-menu">
                  <a href="#job-search">Job Search</a>
                  <a href="#why-join">Why Join Lifewood?</a>
                  <a href="#life-at-lifewood">Life at Lifewood</a>
                </div>
              </div>
              <a href="#contact" className="nav-cta">Contact Us</a>
            </nav>
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Transform Data into <span className="highlight">Intelligence</span></h1>
            <p>Premium AI data solutions and machine learning platform that bring powerful insights to your business.</p>
            <div className="hero-buttons">
              <a href="#solutions" className="btn btn-primary">Our Solutions</a>
              <a href="#about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose LifeWood</h2>
            <p>Experience the finest AI technology with our premium data solutions</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Real-time Processing</h3>
              <p>Process millions of data points in milliseconds with our high-performance AI engine.</p>
            </div>
            <div className="feature-card">
              <h3>Enterprise Security</h3>
              <p>Bank-level encryption and SOC 2 compliance to keep your data safe and secure.</p>
            </div>
            <div className="feature-card">
              <h3>Advanced Analytics</h3>
              <p>Powerful visualization tools and predictive models to unlock hidden insights.</p>
            </div>
            <div className="feature-card">
              <h3>Global Scale</h3>
              <p>Deploy anywhere in the world with our distributed infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Data Services Section */}
      <section id="data-services" className="data-services">
        <div className="container">
          <div className="section-header">
            <h2>AI Data Services</h2>
            <p>Lifewood offers AI and IT services that enhance decision-making, reduce costs, and improve productivity to optimize organizational performance.</p>
          </div>
          <div className="services-grid">
            {dataServices.map((service) => (
              <div 
                key={service.id} 
                className="data-card"
                style={{ background: service.gradient }}
              >
                <div className="data-card-overlay"></div>
                <div className="data-card-content">
                  <h3 className="data-card-title">{service.title}</h3>
                  <p className="data-card-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <h3>Pioneering AI Since 2018</h3>
              <p>At LifeWood, we believe that data is the key to unlocking human potential. Our journey began with a simple mission: to make advanced AI accessible to businesses of all sizes.</p>
              <p>We work directly with leading data scientists and ML engineers who share our passion for innovation. Every solution we create is a testament to the power of artificial intelligence and the people who shape it.</p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Enterprise Clients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10B+</span>
                  <span className="stat-label">Data Points Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="products">
        <div className="container">
          <div className="section-header">
            <h2>Our Solutions</h2>
            <p>Discover our suite of AI-powered data solutions</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-info">
                <h3>Predictive Analytics</h3>
                <p>Forecast trends and anticipate customer behavior with precision using advanced machine learning algorithms.</p>
                <span className="product-price">From $299/mo</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-info">
                <h3>Machine Learning</h3>
                <p>Custom ML models trained on your specific business data to solve complex problems at scale.</p>
                <span className="product-price">From $499/mo</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-info">
                <h3>Data Validation</h3>
                <p>Ensure data quality and accuracy with AI-powered validation and automated error detection.</p>
                <span className="product-price">From $199/mo</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-info">
                <h3>NLP Solutions</h3>
                <p>Natural language processing for text analysis, sentiment detection, and intelligent chatbots.</p>
                <span className="product-price">From $349/mo</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-info">
                <h3>Data Visualization</h3>
                <p>Interactive dashboards and reports that transform complex data into actionable insights.</p>
                <span className="product-price">From $149/mo</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-info">
                <h3>Custom AI</h3>
                <p>Bespoke AI solutions tailored to your exact requirements and business objectives.</p>
                <span className="product-price">Custom Quote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="products" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive solutions for all your data and AI needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>AI Consultation</h3>
              <p>Work with our experts to identify the best AI strategy for your business and roadmap implementation.</p>
            </div>
            <div className="service-card">
              <h3>Implementation</h3>
              <p>Our team ensures seamless integration with your existing systems and minimal disruption.</p>
            </div>
            <div className="service-card">
              <h3>Model Training</h3>
              <p>Custom ML models trained specifically for your use cases with ongoing optimization.</p>
            </div>
            <div className="service-card">
              <h3>24/7 Support</h3>
              <p>Dedicated support team available around the clock to ensure your systems run smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Trusted by hundreds of innovative companies</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"LifeWood transformed how we analyze customer data. The insights have been invaluable to our growth!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-info">
                  <span className="author-name">John Davidson</span>
                  <span className="author-title">CTO, TechCorp</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The predictive analytics platform exceeded our expectations. Beautiful interface and powerful results."</p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-info">
                  <span className="author-name">Sarah Mitchell</span>
                  <span className="author-title">Data Director</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"We've seen 300% improvement in forecasting accuracy since implementing LifeWood's solutions."</p>
              <div className="testimonial-author">
                <div className="author-avatar">RW</div>
                <div className="author-info">
                  <span className="author-name">Robert Wilson</span>
                  <span className="author-title">CEO, DataFlow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div>
                    <h4>Visit Us</h4>
                    <p>100 AI Innovation Blvd, San Francisco, CA 94105</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div>
                    <h4>Call Us</h4>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div>
                    <h4>Email Us</h4>
                    <p>hello@lifewood.ai</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <LifewoodLogo />
              </div>
              <p>Premium AI data solutions crafted with precision. Bringing the power of artificial intelligence to your business since 2018.</p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">in</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">X</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">GH</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#solutions">Predictive Analytics</a></li>
                <li><a href="#solutions">Machine Learning</a></li>
                <li><a href="#solutions">Data Validation</a></li>
                <li><a href="#solutions">NLP</a></li>
                <li><a href="#solutions">Custom AI</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Newsletter</h4>
              <p>Subscribe to receive updates on new products and exclusive offers.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 LifeWood AI. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

