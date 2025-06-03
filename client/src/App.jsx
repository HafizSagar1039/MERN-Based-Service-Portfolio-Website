import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import axios from 'axios'
import NProgress from 'nprogress'        // Import NProgress
import 'nprogress/nprogress.css'         // Import NProgress CSS

// Components
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'

// Context
import { AuthProvider } from './context/AuthContext'

// CSS
import styles from './App.module.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Set up axios defaults
    axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  // NProgress start/stop on route change
  useEffect(() => {
    NProgress.start()
    // Small delay to simulate progress bar fill
    setTimeout(() => {
      NProgress.done()
    }, 300)  // Adjust this time for speed of progress bar
  }, [location])

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    )
  }

  return (
    <AuthProvider>
      <ScrollToTop />
      <div className={styles.app}>
        <Navbar />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
