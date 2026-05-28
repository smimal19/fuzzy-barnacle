import { Link } from 'react-router-dom'

function TalentServices() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img
            src="https://rare.global/wp-content/uploads/2025/09/Jonny-Marlow-Rare.png"
            alt="Talent Services Hero"
          />
        </div>
      </section>

      {/* What We Offer */}
      <section className="services-section">
        <div className="large-wrapper">
          <div className="services-infographic">
            <div className="services-grid">
              <div className="service-item">Branding</div>
              <div className="service-item">Branded Collaborations</div>
              <div className="service-item" style={{ paddingLeft: '80px' }}>Content Strategy</div>
              <div className="service-item">Strategic Brand Partnerships</div>
              <div className="service-item" style={{ paddingLeft: '60px', gridColumn: '1 / -1', textAlign: 'center' }}>Social Media Growth</div>
            </div>
          </div>

          <div className="talent-images-row">
            <img
              src="https://rare.global/wp-content/uploads/2024/05/Untitled-design-1-800x1076.png"
              alt="Talent"
            />
            <img
              src="https://rare.global/wp-content/uploads/2023/02/Isabel-Website-2-800x1001.jpg"
              alt="Talent"
            />
            <img
              src="https://rare.global/wp-content/uploads/2022/08/final-1-800x1197.jpg"
              alt="Milana Soleil influencer client"
            />
          </div>

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
            <Link to="/influencers" className="btn-primary">EXPLORE TALENT</Link>
          </div>
        </div>
      </section>

      {/* Creative Artist Management */}
      <section className="creative-section">
        <div className="large-wrapper">
          <div className="section-grid">
            <div className="creative-content">
              <h2>Creative Artist Management</h2>
              <p>
                Through the Rare Creatives division, we represent a diverse portfolio of
                creative talent in celebrity and editorial photography, makeup, hair, nails, and the
                performing arts. Our artists work with the top names in fashion, beauty, and
                entertainment, with features in leading editorial magazines as well as global
                advertising and commercial campaigns.
              </p>
              <a href="https://www.rarecreatives.com/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#fff', color: '#000' }}>
                LEARN MORE
              </a>
            </div>
            <div className="creative-images">
              <img
                src="https://rare.global/wp-content/uploads/2025/09/Jonny-Marlow-Rare.png"
                alt="Creative talent"
              />
              <img
                src="https://rare.global/wp-content/uploads/2022/10/Morgan-Website.jpg"
                alt="Creative talent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Credits */}
      <section className="gallery-credits">
        <div className="large-wrapper">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div className="gallery-item" key={index}>
                <div style={{ width: '100%', height: '100%', background: '#e0e0e0' }} />
                <div className="overlay">
                  <p className="celeb">{item.celeb}</p>
                  <p className="pub">{item.pub}</p>
                  <p className="artist">{item.artist} — {item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Talk */}
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

const galleryItems = [
  { celeb: 'Meg Thee Stallion', pub: "Glamour Mag Cover 'Women of the Year'", artist: 'Coca Michelle', role: 'Nail Artist' },
  { celeb: 'Doja Cat', pub: "'Say So' Music Video", artist: 'David Velasquez', role: 'Makeup Artist' },
  { celeb: 'JLo', pub: 'NYT Magazine', artist: 'David Velasquez', role: 'Makeup Artist' },
  { celeb: 'Grimes', pub: "'Player of Games'", artist: 'Preston Wada', role: 'Hairstylist' },
  { celeb: 'Meg Thee Stallion', pub: "'Sweetest Pie' with Dua Lipa", artist: 'Coca Michelle', role: 'Nail Artist' },
  { celeb: 'Lili Reinhart', pub: "Harper's Bazaar Vietnam Cover", artist: 'Emilynn Rose', role: 'Photographer/Director' },
  { celeb: 'Chloe Bailey', pub: 'Billboard Awards', artist: 'David Velasquez', role: 'Makeup Artist' },
  { celeb: 'Shanina Shaik', pub: "Harper's Bazaar Serbia Cover", artist: 'Emilynn Rose', role: 'Photographer/Director' },
  { celeb: 'Coi Leray', pub: 'Uproxx Magazine', artist: 'Preston Wada', role: 'Hairstylist' },
  { celeb: 'Latto', pub: 'BET Weekend', artist: 'David Velasquez', role: 'Makeup Artist' },
  { celeb: 'Kehlani', pub: '', artist: 'Preston Wada', role: 'Hairstylist' },
  { celeb: 'Raveena', pub: 'Gay Times Cover', artist: 'Jaime Diaz', role: 'Makeup Artist' },
  { celeb: 'Nikita Dragun', pub: 'Interview Magazine', artist: 'Arianna Blean', role: 'Makeup Artist/Hair Stylist' },
  { celeb: 'JLo', pub: "'In The Morning' Music Video", artist: 'David Velasquez', role: 'Makeup Artist' },
  { celeb: 'Xtina', pub: "Harper's Bazaar Vietnam Cover", artist: 'Coca Michelle', role: 'Nail Artist' },
  { celeb: 'JLo', pub: 'InStyle Magazine Cover', artist: 'David Velasquez', role: 'Makeup Artist' },
]

export default TalentServices
