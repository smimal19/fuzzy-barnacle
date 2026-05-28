import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="large-wrapper">
        <div className="header-inner">
          <Link to="/" className="logo">milana soleil</Link>
          <nav className="nav-links">
            <Link to="/">About</Link>
            <Link to="/talent-services">Talent Services</Link>
            <Link to="/">Milana Soleil Brands</Link>
            <Link to="/consulting">Consulting</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
