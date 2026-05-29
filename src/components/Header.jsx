import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="large-wrapper">
        <div className="header-inner">
          <Link to="/" className="logo">milana soleil</Link>
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/talent-services" onClick={() => setMenuOpen(false)}>Talent Services</Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>Milana Soleil Brands</Link>
            <Link to="/consulting" onClick={() => setMenuOpen(false)}>Consulting</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
