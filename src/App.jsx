import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Home from './pages/Home'
import TalentServices from './pages/TalentServices'
import Influencers from './pages/Influencers'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talent-services" element={<TalentServices />} />
          <Route path="/influencers" element={<Influencers />} />
        </Routes>
      </main>
      <Footer />
      <Marquee />
    </Router>
  )
}

export default App
