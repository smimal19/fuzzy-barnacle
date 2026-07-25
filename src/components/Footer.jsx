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
            <Link to="/consulting">Consulting</Link>
          </div>
          <div className="footer-col">
            <h4>Consulting</h4>
            <Link to="/consulting">Learn More</Link>
            <h4 style={{ marginTop: '30px' }}>Contact</h4>
            <a href="mailto:smithmalinia@gmail.com">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <p className="copyright">
              &copy; 2026 MILANA SOLEIL ALL RIGHTS RESERVED.
            </p>
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
