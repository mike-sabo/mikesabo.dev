import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <>
      <Header />
      <Hero
        name="Mike Sabo"
        avatarSrc="/web-app-manifest-512x512.png"
        taglines={['Senior Developer', 'Problem Solver', 'Team Player']}
      />
      <main className="main">
      </main>
    </>
  )
}

export default App
