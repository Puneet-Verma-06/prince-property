import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import WhyChooseUs from './components/WhyChooseUs'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
