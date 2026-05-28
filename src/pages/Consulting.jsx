import { useState } from 'react'

function Consulting() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
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
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <h2>Consulting</h2>
          <p style={{ marginBottom: '20px' }}>Enter password to access this page.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{ padding: '10px 16px', fontSize: '16px', width: '100%', marginBottom: '12px', border: '1px solid #ccc' }}
            />
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              ENTER
            </button>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          </form>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="section">
        <div className="large-wrapper">
          <h2>Consulting</h2>
          <p>Welcome to Milana Soleil consulting services.</p>
        </div>
      </section>
    </>
  )
}

export default Consulting
