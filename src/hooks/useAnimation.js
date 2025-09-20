import { useState, useEffect, useCallback } from 'react'

export const useAnimation = (initialState = true) => {
  const [isAnimating, setIsAnimating] = useState(initialState)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleAnimation])

  return {
    isAnimating,
    toggleAnimation,
    startAnimation,
    stopAnimation
  }
}