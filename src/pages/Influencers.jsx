import { useState } from 'react'

function Influencers() {
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="influencers-page">
      <h1>Influencers</h1>
      <form className="password-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">ENTER</button>
      </form>
    </div>
  )
}

export default Influencers
