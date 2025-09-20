import { useState } from 'react'

const AnimationControls = ({ isAnimating, onToggle }) => {
  const [musicVolume, setMusicVolume] = useState(50)

  return (
    <div className="animation-controls">
      <div className="control-panel">
        <h3>🎮 댄스 컨트롤</h3>

        <div className="main-controls">
          <button
            className={`control-btn primary ${isAnimating ? 'stop' : 'play'}`}
            onClick={onToggle}
            aria-label={isAnimating ? '춤 멈추기' : '춤 시작하기'}
          >
            {isAnimating ? (
              <>
                <span className="btn-icon">⏸️</span>
                <span className="btn-text">춤 멈추기</span>
              </>
            ) : (
              <>
                <span className="btn-icon">▶️</span>
                <span className="btn-text">춤 시작하기</span>
              </>
            )}
          </button>
        </div>

        <div className="secondary-controls">
          <div className="volume-control">
            <label htmlFor="music-volume">🎵 음량</label>
            <input
              id="music-volume"
              type="range"
              min="0"
              max="100"
              value={musicVolume}
              onChange={(e) => setMusicVolume(e.target.value)}
              className="volume-slider"
            />
            <span className="volume-value">{musicVolume}%</span>
          </div>

          <div className="dance-status">
            <div className={`status-indicator ${isAnimating ? 'active' : 'inactive'}`}>
              <span className="status-dot"></span>
              <span className="status-text">
                {isAnimating ? '댄싱 중...' : '일시정지'}
              </span>
            </div>
          </div>
        </div>

        <div className="dance-info">
          <p>💃 다양한 댄스 동작을 자동으로 변경합니다</p>
          <p>🎪 스페이스바로도 제어할 수 있어요!</p>
        </div>
      </div>
    </div>
  )
}

export default AnimationControls