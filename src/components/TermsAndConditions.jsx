import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-conditions">
      <div className="terms-container">
        <h1 className="terms-title">Terms of Use</h1>
        
        <div className="terms-intro">
          <p>
            Welcome to the online booking facility of <strong>Delhi Meerut Expressway Awas Yojna</strong> by Haute Developers. By accessing or using our website, you agree to be bound by the following Terms and Conditions. Please read them carefully before proceeding.
          </p>
        </div>

        <div className="terms-section">
          <h2>1. General Use</h2>
          <p>
            By visiting, browsing, or using our website, you acknowledge that you have read, understood, and agreed to comply with these Terms & Conditions. These may be revised at any time without prior notice.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Online Booking</h2>
          <p>We provide customers with an online facility to make payments related to:</p>
          <ul>
            <li>Booking amount</li>
            <li>Milestone-based payments</li>
          </ul>
          <p>
            Payments can be made using authorized online payment gateways integrated on our platform.
          </p>
        </div>

        <div className="terms-section">
          <h2>3. User Information</h2>
          <p>
            In some cases, we may require you to provide personal information (e.g., name, contact number, email address) to access certain sections of the website or complete a booking. By providing such information, you agree to its usage as outlined in our Privacy Policy.
          </p>
        </div>

        <div className="terms-section">
          <h2>4. Refund Policy</h2>
          <p>
            At Delhi Meerut Expressway Awas Yojna, we are committed to maintaining transparency and trust.
          </p>
          <ul>
            <li>If an allotment is not made under the scheme, <strong>Rs. 21,000/</strong> will be Refunded.</li>
            <li>Refunds will be processed within <strong>7 working days</strong> from the date of confirmation of non-allotment.</li>
            <li>Refunds will be issued via the original mode of payment or another mutually agreed method.</li>
            <li>You will be notified via email or phone once the transaction is initiated.</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>5. Disclaimer</h2>
          <p>
            While every reasonable care has been taken in preparing the application form and online experience, the company reserves the right to:
          </p>
          <ul>
            <li>Modify or update the Terms & Conditions</li>
            <li>Change product specifications, facilities, or amenities</li>
            <li>Make changes as required by statutory or government authorities</li>
          </ul>
          <p>
            These changes may occur without prior notice and are binding on all users.
          </p>
          <p>
            If you do not agree to any part of these terms, we recommend not using the website or proceeding with online booking.
          </p>
          <p className="terms-contact">
            For any clarifications, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
