import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Home from './pages/Home'
import TalentServices from './pages/TalentServices'
import Influencers from './pages/Influencers'
import Consulting from './pages/Consulting'
import './App.css'

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (password === 'MILA') {
      setAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  if (!authenticated) {
    return (
      <div className="site-gate">
        <h1>milana soleil</h1>
        <p>Enter password to access this site.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" className="btn-primary">ENTER</button>
          {error && <p className="gate-error">{error}</p>}
        </form>
      </div>
    )
  }

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talent-services" element={<TalentServices />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </main>
      <Footer />
      <Marquee />
    </Router>
  )
}

export default App
