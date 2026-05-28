import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="large-wrapper" style={{ position: 'relative' }}>
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Milana Soleil</h4>
            <Link to="/">About</Link>
            <Link to="/talent-services">Talent Services</Link>
            <Link to="/">Milana Soleil Brands</Link>
            <Link to="/">Press</Link>
            <Link to="/">Foundation</Link>
          </div>
          <div className="footer-col">
            <h4>Socials</h4>
            <a href="https://www.instagram.com/rareglobal/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/RareGlobalInc/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@rareglobal" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://www.pinterest.com/rare_global/" target="_blank" rel="noopener noreferrer">Pinterest</a>
            <a href="https://www.linkedin.com/company/rare-global/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </div>
          <div className="footer-col">
            <h4>Careers</h4>
            <Link to="/">View open positions</Link>
            <h4 style={{ marginTop: '30px' }}>Contact</h4>
            <Link to="/">Contact Us</Link>
          </div>
          <div className="footer-col">
            <h4>Talent</h4>
            <Link to="/influencers">Explore Talent</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <p className="copyright">
              &copy; 2026 MILANA SOLEIL ALL RIGHTS RESERVED. SITE BY{' '}
              <a href="http://www.untitledera.com" target="_blank" rel="noopener noreferrer">UNTITLED ERA</a>
            </p>
            <div className="footer-legal" style={{ marginTop: '10px' }}>
              <a href="#">PRIVACY POLICY</a>
              <span>|</span>
              <a href="#">COOKIE POLICY</a>
              <span>|</span>
              <a href="#">TERMS AND CONDITIONS</a>
            </div>
          </div>
        </div>
        <div className="footer-diamond">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer
