import { Link } from 'react-router-dom'

function TalentServices() {
  return (
    <>
      {/* What We Offer */}
      <section className="services-section">
        <div className="large-wrapper">
          <div className="track-record-text">
            <p>
              Milana Soleil has a proven track record in growing marquee talent into top-earning, international brands.
            </p>
          </div>
        </div>
      </section>

      {/* Influencer Management */}
      <section className="section">
        <div className="large-wrapper">
          <div className="section-content" style={{ maxWidth: '600px' }}>
            <h2>Influencer Management</h2>
            <p>
              Online personas to powerhouse brands. We deliver next-level 360 management,
              world-class expertise, and competitive strategy.
            </p>
            <Link to="/consulting" className="btn-primary">LEARN MORE</Link>
          </div>
        </div>
      </section>

      {/* Creative Artist Management */}
      <section className="creative-section">
        <div className="large-wrapper">
          <div className="section-grid">
            <div className="creative-content">
              <h2>Creative Artist Management</h2>
              <Link to="/consulting" className="btn-primary" style={{ background: '#fff', color: '#000' }}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk */}
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

export default TalentServices
