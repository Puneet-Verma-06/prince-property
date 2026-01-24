import './AboutUs.css';
import ShinyText from './ShinyText';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-container">
        <div className="about-image" data-aos="fade-up" data-aos-duration="800">
          <img 
            src="https://res.cloudinary.com/dl4aqbmrc/image/upload/v1769255052/dreamstime_xl_65670036.jpg_zy30je.jpg" 
            alt="Modern Building" 
          />
        </div>
        <div className="about-content" data-aos="fade-up" data-aos-duration="800">
          <h3 className="about-heading">
            <ShinyText text="About Us" speed={5} color="#16a085" shineColor="#2ecc71" />
          </h3>
          <h2 className="about-title">
            <ShinyText text="Building Dreams, Shaping Communities" speed={6} color="#2c3e50" shineColor="#3498db" />
          </h2>
          <p className="about-subtitle">We provide an essential service for you</p>
          <div className="about-text">
            <p>
              Haute Developers is a excellent real estate company with over 15+ years of experience in developing premium residential properties. We are committed to delivering excellence, innovative designs, and sustainable living solutions that enrich communities and elevate lifestyles.
            </p>
            <p>
              Our portfolio includes luxury apartments, and townships across prime locations. Every project reflects our dedication to quality, attention to detail, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
