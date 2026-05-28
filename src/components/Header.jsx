import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="large-wrapper">
        <div className="header-inner">
          <Link to="/" className="logo">rare global</Link>
          <nav className="nav-links">
            <Link to="/">About</Link>
            <Link to="/talent-services">Talent Services</Link>
            <Link to="/">Rare Brands</Link>
            <Link to="/">Press</Link>
            <Link to="/">Foundation</Link>
            <Link to="/">Careers</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
