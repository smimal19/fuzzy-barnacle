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
          <div className="hero-logo-overlay">rare &bull;</div>
        </div>
        <div className="large-wrapper">
          <h1 className="hero-heading">WE BUILD DIGITAL TALENT INTO GLOBAL BRANDS</h1>
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

      {/* Our Foundation Section */}
      <section className="section foundation-section">
        <div className="large-wrapper">
          <div className="section-grid">
            <div>
              {/* INSERT YOUR "OUR FOUNDATION" IMAGE HERE */}
              <img
                className="section-image"
                src=""
                alt="Our Foundation"
              />
            </div>
            <div className="section-content foundation-content">
              <h2>Our Foundation</h2>
              <p>
                The Be Rare Foundation is dedicated to empowering the next generation of women
                entrepreneurs and creatives who share in our purpose of moving women forward.
              </p>
              <Link to="/" className="btn-primary">LEARN MORE</Link>
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

      {/* Press Section */}
      <section className="press-section">
        <div className="large-wrapper">
          <h2>Press</h2>
          <div className="press-carousel">
            <div className="press-item">
              <p className="quote">"With a laser focus on multicultural female voices and a commitment to long-term success, Rare Global has proven that authenticity is the key to building lasting influence."</p>
            </div>
            <div className="press-item">
              <p className="quote">"Once you're crowned a 'Chanel-Clad Tennis WAG,' you're officially in the tennis discourse."</p>
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Vogue</span>
            </div>
            <div className="press-item">
              <p className="quote">"Don't call her merely an influencer. Danielle Carolan is one of the top content creators across a variety of categories."</p>
            </div>
            <div className="press-item">
              <p className="quote">"In a way, Jenn Im is the poster babe for modern fame: she can walk through Times Square or Coachella without getting mobbed."</p>
            </div>
            <div className="press-item">
              <p className="quote">"Gym Tan on the magic of embracing youthfulness at 63"</p>
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Vogue</span>
            </div>
            <div className="press-item">
              <p className="quote">"Tennis enters its WAG era: How Morgan Riddle became the sport's MVP"</p>
            </div>
            <div className="press-item">
              <p className="quote">"Michelle Phan was at the helm of digital influencing and helped pave the way for an entire generation of beauty creators."</p>
            </div>
            <div className="press-item">
              <p className="quote">"Ashley Villa is 'A Talented Woman Crafting Careers for Women'"</p>
            </div>
            <div className="press-item">
              <p className="quote">"I trust Ashley Rachel Villa with my life."</p>
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Elle</span>
            </div>
            <div className="press-item">
              <p className="quote">"The new rules of Influencer marketing: It's harder than ever to get things right."</p>
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Glossy</span>
            </div>
            <div className="press-item">
              <p className="quote">"Michelle Phan Knows What Works"</p>
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>W Magazine</span>
            </div>
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
