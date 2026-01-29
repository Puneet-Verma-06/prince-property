import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  
  const images = [
    'https://assets-news.housing.com/news/wp-content/uploads/2021/04/07143318/shutterstock_1791084818.jpg',
    'https://www.noidacommercial.com/wp-content/uploads/2022/12/about-image-low-rise.jpg',
    'https://bigproperty.in/wp-content/uploads/2023/05/aler2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="hero">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="hero-overlay">
        <div className="hero-content">
          <h2>Upcoming Approved Plots on NE-3</h2>
          <h1>Expressway Residency</h1>
          <h3>Residential Plots on Delhi–Meerut Expressway</h3>
          <p>Explore government-approved residential plots located along the Delhi–Meerut Expressway (NE-3). Developed by Haute Developers, Expressway Residency offers planned development, transparent pricing, and structured payment options—making it ideal for both homebuyers and long-term investors.</p>
          <button 
            className="hero-btn"
            onClick={() => navigate('/upcoming-projects')}
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
