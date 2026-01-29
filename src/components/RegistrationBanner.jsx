import { Link } from 'react-router-dom';
import './RegistrationBanner.css';

const RegistrationBanner = () => {
  return (
    <div className="registration-banner">
      <h2 className="registration-banner-text">This registration cycle is closing fast.</h2>
      <Link to="/register" className="registration-banner-button">
        Book Now
      </Link>
    </div>
  );
};

export default RegistrationBanner;
