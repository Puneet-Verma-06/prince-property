import React, { useState, useEffect } from 'react';
import './UpcomingProjects.css';
import './Hero.css';
import ContactModal from './ContactModal';
import ContactUs from './ContactUs';

const UpcomingProjects = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const images = [
    'https://assets-news.housing.com/news/wp-content/uploads/2021/04/07143318/shutterstock_1791084818.jpg',
    'https://www.noidacommercial.com/wp-content/uploads/2022/12/about-image-low-rise.jpg',
    'https://bigproperty.in/wp-content/uploads/2023/05/aler2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const projectDetails = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
      title: 'Project Type',
      description: 'Residential Plotted Development'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      title: 'Developer',
      description: 'Haute Developers (Since 2011)'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: 'Location',
      description: 'Near Hawa Hawai Restaurant, Delhi-Meerut Expressway'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: 'Plot Sizes',
      description: '100 sq. yd & above'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
      ),
      title: 'Ownership',
      description: 'Freehold'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: 'Registry',
      description: 'As per Applicable process'
    }
  ];

  const locationAdvantages = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: 'Fast Access',
      description: 'Ensuring fast access to Delhi, Ghaziabad, Noida, and Meerut.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
      title: 'Seamless Connectivity',
      description: 'Seamless connectivity to NH-9, Eastern Peripheral Expressway, and key city hubs.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: 'Future Development',
      description: 'Proposed metro expansion, logistics parks, and commercial zones nearby.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      title: 'Mobility Integration',
      description: 'Expressway-led mobility with future-ready road and public transport integration.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      title: 'Strong Appreciation',
      description: 'Driving consistent housing demand and strong long-term appreciation.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-overlay">
          <div className="hero-content">
            <h2>Upcoming Rera Approved Plots on NE-3</h2>
            <h1>Expressway Residency</h1>
            <h3>Residential Plots on Delhi-Meerut Expressway</h3>
            <p>Upcoming rera approved plots by haute developers on Delhi-Meerut Expressway, offered with clear pricing, defined payment plans, and long-term infrastructure-led growth potential.</p>
            <button className="hero-btn" onClick={() => setIsContactModalOpen(true)}>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <section className="upcoming-projects">
        <div className="upcoming-projects-container">
          <h1 className="section-title">Project Details</h1>
        
          <div className="project-details-grid">
            {projectDetails.map((detail, index) => (
              <div key={index} className="detail-card">
                <div className="detail-icon-wrapper">{detail.icon}</div>
                <h3 className="detail-title">{detail.title}</h3>
                <p className="detail-description">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="why-invest-section">
        <div className="why-invest-container">
          <div className="why-invest-content">
            <div className="why-invest-left">
              <h2 className="why-invest-label">WHY INVEST IN EXPRESSWAY RESIDENCY</h2>
              <h1 className="why-invest-title">The Right Location for Long-Term Land Investment</h1>
              
              <p className="why-invest-text">
                Investing in plots at Expressway Residency is fundamentally different from speculative real estate buying. Value here is driven by verified infrastructure growth, expressway-led development, and planned urban expansion along the Delhi–Meerut corridor. This region is emerging as a key residential and commercial belt, backed by strong government focus and sustained demand.
              </p>
              
              <p className="why-invest-text">
                With the 16-lane Delhi–Meerut Expressway, rapid connectivity to Delhi, Ghaziabad, Noida, and Meerut is already operational. Upcoming metro extensions, logistics hubs, and industrial zones are steadily transforming this corridor from a transit route into a future-ready urban destination.
              </p>
              
              <p className="why-invest-quote">
                "Early investors stand to benefit the most as expressway infrastructure, metro connectivity, and commercial developments move from expansion to full-scale utilization."
              </p>
            </div>
            
            <div className="why-invest-right">
              <h3 className="key-advantages-title">Key Advantages</h3>
              
              <div className="advantage-box">
                <p>Clear-Title Plots with Complete Due Diligence Support</p>
              </div>
              
              <div className="advantage-box">
                <p>Transparent Pricing Aligned with Expressway Corridor Benchmarks</p>
              </div>
              
              <div className="advantage-box">
                <p>End-to-End Guidance from Site Visit to Registration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage Section */}
      <div className="location-advantage-section">
        <div className="location-advantage-container">
          <h1 className="section-title">LOCATION ADVANTAGE</h1>
          <h2 className="section-subtitle">Why This Location Works</h2>
          
          <div className="location-description">
            <p>
              Delhi–Meerut Expressway is one of North India's most important infrastructure corridors, designed to drive rapid urban growth, seamless connectivity, and long-term real estate appreciation. Stretching between Delhi and Meerut, this 16-lane access-controlled expressway has significantly reduced travel time and opened new opportunities for residential and commercial development.
            </p>
            <p>
              Expressway Residency enjoys a strategic advantage with direct connectivity to Delhi, Noida, Ghaziabad, and Meerut. Surrounded by upcoming townships, industrial hubs, and daily-use infrastructure, the location is ideal for both end-users and investors. Proximity to major highways, proposed metro expansion, and essential amenities ensures strong future demand, making it a smart choice for secure investment and modern living.
            </p>
          </div>

          <div className="location-image-container">
            <div className="location-images-wrapper">
              <div className="location-map">
                <img 
                  src="https://res.cloudinary.com/dl4aqbmrc/image/upload/v1769257989/osm-intl_9_a_a_290x300_2x_emf2ui.png" 
                  alt="Location Map" 
                  className="map-image"
                />
              </div>
              <div className="location-photo">
                <img 
                  src="https://res.cloudinary.com/dl4aqbmrc/image/upload/v1769257984/Delhi_Meerut_Expressway_in_Ghaziabad_07.jpg_lwfosv.jpg" 
                  alt="Delhi-Meerut Expressway" 
                  className="location-image"
                />
              </div>
            </div>
          </div>

          <div className="location-advantages-grid">
            {locationAdvantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-number">{index + 1}</div>
                <div className="advantage-icon-wrapper">{advantage.icon}</div>
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Site Plan Section */}
      <section className="upcoming-projects" style={{ marginTop: '0' }}>
        <div className="upcoming-projects-container">
          <div className="site-plan-section">
            <h2 className="site-plan-label">LAYOUT OVERVIEW</h2>
            <h1 className="site-plan-title">Project Site Plan</h1>
            <p className="site-plan-description">
              The layout is designed for practical residential use, long-term access, and future utility integration.
            </p>
            
            <div className="site-plan-image-container">
              <img 
                src="https://res.cloudinary.com/dl4aqbmrc/image/upload/v1769258882/DAFFOFIL_UPDATED_LAYOUT_3_1__page-0001.jpg_hzkyz6.jpg" 
                alt="Project Site Plan Layout" 
                className="site-plan-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section">
        <div className="amenities-container">
          <h2 className="amenities-label">EXPRESSWAY RESIDENCY AMENITIES</h2>
          <h1 className="amenities-title">
            Future-Ready Infrastructure<br />
            Designed for Modern Living
          </h1>
          
          <div className="amenities-grid">
            <div className="amenity-card">
              <div className="amenity-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="amenity-name">Club House</h3>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 className="amenity-name">Landscaped Park</h3>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
              </div>
              <h3 className="amenity-name">Swimming Pool</h3>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <h3 className="amenity-name">CCTV Surveillance</h3>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <h3 className="amenity-name">Separate Entry & Exit Gate</h3>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="amenity-name">24*7 Secured Living</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default UpcomingProjects;
