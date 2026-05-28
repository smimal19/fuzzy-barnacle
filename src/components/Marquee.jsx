function Marquee() {
  const text = 'RISE AND RULE EVERYDAY '
  const repeated = Array(20).fill(text).join('')

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </div>
  )
}

export default Marquee
