import './Projects.css';
import ShinyText from './ShinyText';

const Projects = () => {
  const existingProjects = [
    { name: 'Sailok', location: 'Dehradun Saharanpur Highway' },
    { name: 'Shiv Shakti Enclave', location: 'Noida Sector 79' },
    { name: 'Manokamna Regent', location: 'Near Subharti University, Meerut' },
    { name: 'Manokamna Residency', location: 'Rajnagar Extension Ghaziabad' },
    { name: 'Builders Floor', location: 'Sector 72 & 73' }
  ];

  const amenities = [
    '50 | 40 | 30 Feet Wide Roads',
    'Club House',
    'Landscaped Park',
    'Swimming Pool',
    'CCTV Surveillance',
    'Separate Entry & Exit Gate',
    '24×7 Secured Living'
  ];

  const locations = [
    { place: 'Akshardham Temple', time: '30 Min' },
    { place: 'Noida Sector-62', time: '20 Min' },
    { place: 'Wave City', time: '10 Min' },
    { place: 'IMS College', time: '5 Min' }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header" data-aos="fade-up">
          <h2 className="section-title">
            <ShinyText text="Projects" speed={5} color="#3498db" shineColor="#87ceeb" />
          </h2>
          <h3 className="section-subtitle">
            <ShinyText text="PRESTIGE REDEFINED: A LEGACY OF EXCEPTIONAL PROJECTS" speed={6} color="#b8860b" shineColor="#ffd700" />
          </h3>
          <p className="projects-intro">
            Our portfolio boasts renowned projects like Expressway Residency, Manokamna Residency, 
            Shiv Shakti Enclave, and Manokamna Regent, each meticulously crafted to elevate your lifestyle.
          </p>
        </div>

        {/* Existing Projects */}
        <div className="existing-projects" data-aos="fade-up" data-aos-delay="100">
          <h4 className="subsection-title">Our Completed Projects</h4>
          <div className="projects-grid">
            {existingProjects.map((project, index) => (
              <div 
                key={index} 
                className="project-card"
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <h5>{project.name}</h5>
                <p>{project.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Project */}
        <div className="coming-soon-wrapper" data-aos="fade-up" data-aos-delay="200">
          <div className="coming-soon-badge">
            <span>COMING SOON</span>
          </div>
          
          <div className="featured-project">
            {/* Project Title */}
            <div className="project-title-section">
              <h3>RERA APPROVED PLOTS</h3>
              <div className="location-badge">
                <span>Delhi–Meerut Expressway</span>
              </div>
              <p className="connection-info">Directly Connected with Service Road</p>
            </div>

            {/* Key Highlights */}
            <div className="key-highlights">
              <div className="highlight-box">
                <div className="highlight-content">
                  <div className="highlight-value">100 BIGHA</div>
                  <div className="highlight-label">Total Land</div>
                </div>
              </div>
              <div className="highlight-box">
                <div className="highlight-content">
                  <div className="highlight-value">Premium</div>
                  <div className="highlight-label">Gated Township</div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="amenities-section">
              <h4 className="section-heading">
                WORLD-CLASS AMENITIES
              </h4>
              <div className="amenities-grid">
                {amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item" data-aos="fade-up" data-aos-delay={index * 50}>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="pricing-section">
              <h4 className="section-heading">
                LIMITED PRE-LAUNCH OFFER
              </h4>
              <div className="price-comparison">
                <div className="price-box pre-launch-price" data-aos="zoom-in">
                  <div className="price-content">
                    <div className="price-amount">₹35,000</div>
                    <div className="price-unit">Per SQ.YD</div>
                    <div className="price-status pre-launch-status">Pre-Launch Special</div>
                  </div>
                </div>
                <div className="price-divider">
                  <div className="divider-text">VS</div>
                </div>
                <div className="price-box post-launch-price" data-aos="zoom-in" data-aos-delay="100">
                  <div className="price-content">
                    <div className="price-amount">₹45,000</div>
                    <div className="price-unit">Per SQ.YD</div>
                    <div className="price-status post-launch-status">After Launch</div>
                  </div>
                </div>
              </div>
              <div className="booking-highlight">
                <span>BOOKING AMOUNT – ONLY 20%</span>
              </div>
            </div>

            {/* Location Advantages */}
            <div className="location-section">
              <h4 className="section-heading">
                PRIME LOCATION ADVANTAGE
              </h4>
              <div className="location-grid">
                {locations.map((location, index) => (
                  <div key={index} className="location-card" data-aos="fade-right" data-aos-delay={index * 50}>
                    <div className="location-details">
                      <div className="location-name">{location.place}</div>
                      <div className="location-distance">
                        <span>{location.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="investment-cta">
              <div className="cta-content">
                <div className="cta-text">
                  <p className="cta-main">INVEST TODAY | PRICE HIKE AFTER LAUNCH</p>
                  <p className="cta-sub">Limited Plots | High Appreciation Zone</p>
                </div>
                <button 
                  className="contact-btn"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Contact Us Now</span>
                </button>
              </div>
            </div>

            {/* Important Notes */}
            <div className="info-notice">
              <div className="notice-header">Important Information</div>
              <div className="notice-list">
                <div className="notice-item">
                  <span>Company will accept only 50 bookings in Pre-Launch</span>
                </div>
                <div className="notice-item">
                  <span>Layout is Tentative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
