import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
        setIsMenuOpen(false); // Close menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    closeMenu();
  };

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img 
              src="https://res.cloudinary.com/dl4aqbmrc/image/upload/v1768912474/Haute_Developers_-_2_hpzndk.png" 
              alt="Haute Developers Logo" 
              className="logo-image"
            />
          </div>
          
          <div className="hamburger" onClick={toggleMenu}>
            <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
            <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
            <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
          </div>

          <ul className={isMenuOpen ? 'navbar-menu active' : 'navbar-menu'}>
            <li className="navbar-item">
              <a href="#home" className="navbar-link" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" onClick={(e) => handleSmoothScroll(e, '#about')}>About Us</a>
            </li>
            <li className="navbar-item">
              <a href="#projects" className="navbar-link" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact Us</a>
            </li>
            <button 
              className="site-visit-btn mobile-site-visit"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Book a Site Visit
            </button>
          </ul>

          <button 
            className="site-visit-btn desktop-site-visit"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
          >
            Book a Site Visit
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
