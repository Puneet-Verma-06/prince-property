import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import WhyChooseUs from './components/WhyChooseUs'
import Projects from './components/Projects'
import UpcomingProjects from './components/UpcomingProjects'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'
import RefundPolicy from './components/RefundPolicy'
import RegistrationForm from './components/RegistrationForm'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <ContactUs />
    </>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: false
    });

    // Open the contact modal smoothly after a short delay
    const timer = setTimeout(() => {
      setIsModalOpen(true)
    }, 1000) // 1 second delay for smooth appearance

    return () => clearTimeout(timer)
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upcoming-projects" element={<UpcomingProjects />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Router>
  )
}

export default App
