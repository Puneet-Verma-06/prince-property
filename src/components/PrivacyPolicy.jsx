import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        
        <div className="privacy-intro">
          <p>
            At <strong>Delhi Meerut Expressway Awas Yojna</strong> (operated by Haute Developers), we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide when visiting or interacting with our website.
          </p>
        </div>

        <div className="privacy-section">
          <h2>1. Information Collection</h2>
          <p>
            While browsing our website, you can access most areas without disclosing any personal information. However, certain sections may require you to share identifiable details, such as:
          </p>
          <ul>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Contact Number</li>
          </ul>
          <p>This information is collected to:</p>
          <ul>
            <li>Grant access to restricted content or services</li>
            <li>Provide relevant products and updates</li>
            <li>Acknowledge receipt of inquiries</li>
            <li>Deliver service-related information</li>
          </ul>
          <p>
            You may opt out of receiving promotional emails by requesting removal from our mailing list at any time.
          </p>
        </div>

        <div className="privacy-section">
          <h2>2. Use of Information</h2>
          <p>
            We use the data you provide to enhance your experience and deliver the services you request. Your information is <strong>not sold or shared with any third-party organizations</strong> under any circumstances.
          </p>
        </div>

        <div className="privacy-section">
          <h2>3. Data Security</h2>
          <p>
            We are committed to protecting your information. All data transmissions between users and our team are encrypted using advanced, industry-standard protocols. Additionally, internal access to your information is restricted to authorized personnel only.
          </p>
        </div>

        <div className="privacy-section">
          <h2>4. Cookies</h2>
          <p>Our website may use cookies to:</p>
          <ul>
            <li>Maintain session continuity</li>
            <li>Enhance security</li>
            <li>Customize user experience</li>
          </ul>
          <p>
            You can choose to reject cookies; however, doing so may restrict access to certain features or services on the site.
          </p>
        </div>

        <div className="privacy-section">
          <h2>5. Policy Updates</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time without prior notice. Changes will be effective immediately upon posting on the website. Your continued use of the website implies your acceptance of any updates.
          </p>
          <p>
            If you have questions or concerns regarding this policy, feel free to contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
