import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          {/* INSERT YOUR HERO IMAGE HERE */}
          <img
            src=""
            alt="Hero"
          />
          <div className="hero-logo-overlay">milana soleil &bull;</div>
        </div>
        <div className="large-wrapper">
          <h1 className="hero-heading">TURNING INDEPENDENT CREATIVES INTO HIGH-VALUED BRANDS</h1>
        </div>
      </section>

      {/* Our Talent Section */}
      <section className="section">
        <div className="large-wrapper">
          <div className="section-grid">
            <div>
              {/* INSERT YOUR "OUR TALENT" IMAGE HERE */}
              <img
                className="section-image"
                src=""
                alt="Our Talent"
              />
            </div>
            <div className="section-content">
              <h2>Our Talent</h2>
              <p>We've built a reputation for taking a new generation of talent to the next level.</p>
              <Link to="/talent-services" className="btn-primary">LEARN MORE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="section">
        <div className="large-wrapper">
          <div className="section-grid reverse">
            <div>
              {/* INSERT YOUR "OUR BRANDS" IMAGE HERE */}
              <img
                className="section-image"
                src=""
                alt="Our Brands"
              />
            </div>
            <div className="section-content">
              <h2>Our Brands</h2>
              <p>We develop one-of-a-kind consumer brands with our clients.</p>
              <Link to="/" className="btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="cta-section">
        <div className="large-wrapper">
          <h2>Let's Talk</h2>
          <p>Looking for representation or have a question?</p>
          <a href="mailto:malinia@milanasoleil.com" className="btn-primary">CONTACT US</a>
        </div>
      </section>
    </>
  )
}

export default Home
