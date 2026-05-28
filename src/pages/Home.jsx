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

      {/* The Latest Section */}
      <section className="latest-section">
        <div className="large-wrapper">
          <h2>The Latest</h2>
          <div className="latest-grid">
            <a href="https://thehouse-magazine.com/summertime-ins-outs-with-the-houses-tastemakers/" target="_blank" rel="noopener noreferrer" className="latest-item">
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#f0f0f0' }} />
              <p>Summertime 'Ins & Outs' with The House's Tastemakers</p>
            </a>
            <a href="https://www.glossy.co/pop/michelle-phan-on-transitioning-from-influencer-to-entrepreneur-trust-your-instincts-and-learn-from-failure/" target="_blank" rel="noopener noreferrer" className="latest-item">
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#f0f0f0' }} />
              <p>Michelle Phan and Chloe Morello lead round table discussions at Glossy Beauty Pop Summit</p>
            </a>
            <a href="https://www.instagram.com/p/CqTSDnfJqBt/?hl=en" target="_blank" rel="noopener noreferrer" className="latest-item">
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#f0f0f0' }} />
              <p>Jessica Vu unveils Fenty's Icon Velvet Liquid Lipstick</p>
            </a>
            <a href="https://www.elle.com.au/fashion/morgan-riddle-interview/" target="_blank" rel="noopener noreferrer" className="latest-item">
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#f0f0f0' }} />
              <p>Morgan Riddle Conquered Men's Tennis – What's Next?</p>
            </a>
            <a href="https://www.instagram.com/p/CqY1aIuvU4f/?img_index=1" target="_blank" rel="noopener noreferrer" className="latest-item">
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#f0f0f0' }} />
              <p>Ashley Villa featured in Success Magazine</p>
            </a>
            <a href="https://www.instagram.com/p/Cv7sdctNy-r/?hl=en" target="_blank" rel="noopener noreferrer" className="latest-item">
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#f0f0f0' }} />
              <p>Jenn Im launches The Stone Blue Collection with Fable</p>
            </a>
            <a href="https://www.instagram.com/p/CvF0RA9An50/?hl=en" target="_blank" rel="noopener noreferrer" className="latest-item">
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#f0f0f0' }} />
              <p>Morgan Riddle hosts "Wimbledon Threads," a mini series in partnership with Wimbledon</p>
            </a>
            <a href="https://www.elle.com/culture/a20664107/ashley-rachel-villa-rare-global-interview/" target="_blank" rel="noopener noreferrer" className="latest-item">
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#f0f0f0' }} />
              <p>Ashley Rachel Villa Thought She Had to Become a Lawyer. She Invented Her Own Career Instead.</p>
            </a>
            <a href="https://www.forbes.com/sites/jasondavis/2026/01/26/the-creator-economy-in-2026---the-era-of-consolidation/" target="_blank" rel="noopener noreferrer" className="latest-item">
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#f0f0f0' }} />
              <p>The Creator Economy In 2026: The Era Of Consolidation</p>
            </a>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="cta-section">
        <div className="large-wrapper">
          <h2>Let's Talk</h2>
          <p>Looking for representation or have a question?</p>
          <Link to="/" className="btn-primary">CONTACT US</Link>
        </div>
      </section>
    </>
  )
}

export default Home
