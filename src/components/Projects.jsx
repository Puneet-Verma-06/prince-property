import './Projects.css';
import ShinyText from './ShinyText';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  
  const existingProjects = [
    { name: 'Sailok', location: 'Dehradun Saharanpur Highway' },
    { name: 'Shiv Shakti Enclave', location: 'Noida Sector 79' },
    { name: 'Manokamna Regent', location: 'Near Subharti University, Meerut' },
    { name: 'Manokamna Residency', location: 'Rajnagar Extension Ghaziabad' },
    { name: 'Builders Floor', location: 'Sector 72 & 73' }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header" data-aos="fade-up">
          <h2 className="section-title">
            <ShinyText text="Our Delivered Projects" speed={5} color="#3498db" shineColor="#87ceeb" />
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

        {/* View Upcoming Projects Section */}
        <div className="upcoming-projects-preview" data-aos="fade-up" data-aos-delay="200">
          <h4 className="subsection-title">View Upcoming Projects</h4>
          <div className="upcoming-content-wrapper">
            <div className="upcoming-image" >
              <img 
                src="https://assets-news.housing.com/news/wp-content/uploads/2021/04/07143318/shutterstock_1791084818.jpg" 
                alt="Expressway Residency"
              />
            </div>
            <div className="upcoming-info" >
              <h5 className="upcoming-subtitle">Upcoming Approved Plots on NE-3</h5>
              <h3 className="upcoming-title">Expressway Residency</h3>
              <h4 className="upcoming-location">Residential Plots on Delhi–Meerut Expressway</h4>
              <p className="upcoming-description">
                Explore government-approved residential plots located along the Delhi–Meerut Expressway (NE-3). 
                Developed by Haute Developers, Expressway Residency offers planned development, transparent pricing, 
                and structured payment options—making it ideal for both homebuyers and long-term investors.
              </p>
              <button 
                className="see-details-btn"
                onClick={() => navigate('/upcoming-projects')}
              >
                <span>See Details</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
