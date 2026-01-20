import './WhyChooseUs.css';
import { FaMapMarkerAlt, FaCheckCircle, FaChartLine, FaBuilding, FaHandshake } from 'react-icons/fa';
import ShinyText from './ShinyText';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Prime Locations',
      description: 'Carefully selected projects in high-growth zones with excellent connectivity and future appreciation.',
      icon: FaMapMarkerAlt
    },
    {
      title: 'Trusted & Transparent',
      description: 'Clear documentation, approved layouts, and complete transparency at every stage.',
      icon: FaCheckCircle
    },
    {
      title: 'Smart Investment Opportunities',
      description: 'Projects designed for both end-users and investors, ensuring strong ROI and long-term value.',
      icon: FaChartLine
    },
    {
      title: 'Quality Development',
      description: 'Modern planning, superior infrastructure, and well-defined amenities for a premium lifestyle.',
      icon: FaBuilding
    },
    {
      title: 'Customer-Centric Approach',
      description: 'Personalized support from site visit to possession, ensuring a smooth and hassle-free experience.',
      icon: FaHandshake
    }
  ];

  return (
    <section className="why-choose-us">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="https://res.cloudinary.com/dl4aqbmrc/video/upload/v1768905673/13362850_3840_2160_60fps_puixek.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      
      <div className="why-choose-us-container">
        <div className="why-choose-us-header">
          <h2 className="section-title">
            <ShinyText text="Why Choose Us" speed={5} color="#ffffff" shineColor="#3498db" />
          </h2>
          <h3 className="section-subtitle">
            <ShinyText text="Why Haute Group?" speed={5.5} color="#ecf0f1" shineColor="#f39c12" />
          </h3>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isLeftSide = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="feature-card"
                data-aos={isLeftSide ? "fade-down-right" : "fade-down-left"}
              >
                <div className="feature-icon">
                  <IconComponent />
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
