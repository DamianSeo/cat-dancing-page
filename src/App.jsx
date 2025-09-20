import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './styles/global.css'
import './App.css'

function App() {
  const { isAnimating, toggleAnimation } = useAnimation(true)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 댄싱 고양이 🐱</h1>
        <p>귀여운 고양이가 춤추는 모습을 감상해보세요!</p>
      </header>

      <main className="app-main">
        <DancingCat isAnimating={isAnimating} />
        <AnimationControls
          isAnimating={isAnimating}
          onToggle={toggleAnimation}
        />
      </main>

      <footer className="app-footer">
        <p>💃 React로 만든 고양이 댄싱 페이지 💃</p>
      </footer>
    </div>
  )
}

export default App
