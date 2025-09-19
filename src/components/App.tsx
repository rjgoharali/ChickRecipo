import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Menu from './Menu'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import AuthModal from './AuthModal'

const App: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  return (
    <div className="overflow-x-hidden">
      <Navbar onLoginClick={() => setIsAuthModalOpen(true)} />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  )
}

export default App
