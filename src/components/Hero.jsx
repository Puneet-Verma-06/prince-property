import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    'https://assets-news.housing.com/news/wp-content/uploads/2021/04/07143318/shutterstock_1791084818.jpg',
    'https://oldwebsite.hiranandaniparks.com/blog/wp-content/uploads/2023/10/01_Is-buying-residential-plots-a-good-investment-in-Oragadam-Chennai.jpg',
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
          <h1>Upcoming Rera Approved Plots on NE-3</h1>
          <h2>Expressway Residency</h2>
          <h3>Residential Plots on Delhi-Meerut Expressway</h3>
          <p>Upcoming rera approved plots by haute developers on Delhi-Meerut Expressway, offered with clear pricing, defined payment plans, and long-term infrastructure-led growth potential.</p>
          <button className="hero-btn">Explore Properties</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
