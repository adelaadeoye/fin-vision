import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Scheduler from './components/Scheduler'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Scheduler />
      </main>
      <Footer />
    </div>
  )
}

export default App
