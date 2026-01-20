import './Footer.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Haute Developers</h3>
            <p className="footer-description">
              Building dreams and shaping communities with over 15+ years of excellence in real estate development.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:Hautedevelopers2@gmail.com">Hautedevelopers2@gmail.com</a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <p className="contact-label">Head Office</p>
                <a href="tel:9217412029">9217412029</a>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>T-3, NX-One, Office No A, 322,<br />Greater Noida W Rd,<br />Uttar Pradesh 201318</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About Us</a></li>
              <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a></li>
              <li><a href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')}>Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Projects */}
          <div className="footer-section">
            <h3 className="footer-heading">Our Projects</h3>
            <ul className="footer-links">
              <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Sailok</a></li>
              <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Shiv Shakti Enclave</a></li>
              <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Manokamna Regent</a></li>
              <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Manokamna Residency</a></li>
              <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Builders Floor</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Haute Developers. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
