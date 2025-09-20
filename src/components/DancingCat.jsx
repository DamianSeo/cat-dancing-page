import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

const DancingCat = ({ isAnimating }) => {
  const [danceMove, setDanceMove] = useState('bounce')

  useEffect(() => {
    if (!isAnimating) return

    const moves = ['bounce', 'wiggle', 'spin', 'shake', 'jump']
    const interval = setInterval(() => {
      const randomMove = moves[Math.floor(Math.random() * moves.length)]
      setDanceMove(randomMove)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <div className="dancing-cat-container">
      <div className={`dancing-cat ${isAnimating ? danceMove : ''}`}>
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
        />

        {isAnimating && (
          <div className="dance-effects">
            <div className="sparkle sparkle-1">✨</div>
            <div className="sparkle sparkle-2">⭐</div>
            <div className="sparkle sparkle-3">💫</div>
            <div className="sparkle sparkle-4">🌟</div>
          </div>
        )}
      </div>

      <div className="stage">
        <div className="stage-light stage-light-1"></div>
        <div className="stage-light stage-light-2"></div>
        <div className="stage-light stage-light-3"></div>
      </div>
    </div>
  )
}

export default DancingCat