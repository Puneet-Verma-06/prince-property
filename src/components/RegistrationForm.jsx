import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    fatherHusbandName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    address: '',
    state: '',
    city: '',
    pinCode: '',
    referenceName: '',
    aadharNumber: '',
    panNumber: '',
    quota: '',
    size: '',
    transactionId: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.applicantName.trim()) newErrors.applicantName = 'Applicant name is required';
    if (!formData.fatherHusbandName.trim()) newErrors.fatherHusbandName = 'Father/Husband name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = 'Pin code is required';
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = 'Pin code must be 6 digits';
    }
    if (!formData.aadharNumber.trim()) {
      newErrors.aadharNumber = 'Aadhar number is required';
    } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Aadhar number must be 12 digits';
    }
    if (!formData.panNumber.trim()) {
      newErrors.panNumber = 'PAN number is required';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber)) {
      newErrors.panNumber = 'Invalid PAN format';
    }
    if (!formData.quota) newErrors.quota = 'Please select a quota';
    if (!formData.size) newErrors.size = 'Please select a size';
    if (!formData.transactionId.trim()) newErrors.transactionId = 'Transaction ID is required';
    if (!formData.consent) newErrors.consent = 'You must agree to terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage({ type: '', message: '' });
    
    if (validateForm()) {
      setLoading(true);
      
      // Send email via EmailJS
      const templateParams = {
        applicantName: formData.applicantName,
        fatherHusbandName: formData.fatherHusbandName,
        dateOfBirth: formData.dateOfBirth,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pinCode: formData.pinCode,
        aadharNumber: formData.aadharNumber,
        panNumber: formData.panNumber,
        quota: formData.quota,
        size: formData.size,
        transactionId: formData.transactionId,
        referenceName: formData.referenceName || 'N/A'
      };

      emailjs.send(
        'service_u5ylylg',
        'template_3z79n5c',
        templateParams,
        'zFqKU2QymbtNzgodj'
      )
      .then(() => {
        setStatusMessage({ 
          type: 'success', 
          message: 'Registration submitted successfully! We will contact you soon.' 
        });
        // Reset form
        setFormData({
          applicantName: '',
          fatherHusbandName: '',
          dateOfBirth: '',
          email: '',
          phoneNumber: '',
          address: '',
          state: '',
          city: '',
          pinCode: '',
          referenceName: '',
          aadharNumber: '',
          panNumber: '',
          quota: '',
          size: '',
          transactionId: '',
          consent: false
        });
        setLoading(false);
        // Clear message after 5 seconds
        setTimeout(() => setStatusMessage({ type: '', message: '' }), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatusMessage({ 
          type: 'error', 
          message: 'Failed to submit registration. Please try again.' 
        });
        setLoading(false);
      });
    } else {
      setStatusMessage({ 
        type: 'error', 
        message: 'Please fill all required fields correctly' 
      });
      // Scroll to top to see error message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="registration-form-page">
      <div className="registration-form-container">
        <div className="registration-header">
          <h1 className="registration-title">Register Now</h1>
          <p className="registration-subtitle">Complete the form below to register for the scheme</p>
        </div>

        {statusMessage.message && (
          <div className={`status-message ${statusMessage.type}`}>
            {statusMessage.type === 'success' ? '✓' : '⚠'} {statusMessage.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="payment-info-box">
            <div className="payment-header">
              <h3>💳 Payment Information</h3>
            </div>
            <div className="payment-details">
              <div className="payment-row">
                <span className="payment-label">Account Name:</span>
                <span className="payment-value">Haute Developers</span>
              </div>
              <div className="payment-row">
                <span className="payment-label">Account No:</span>
                <div className="payment-value-with-copy">
                  <span className="payment-value">22600100047613</span>
                  <button 
                    type="button"
                    className="copy-btn"
                    onClick={() => handleCopy('22600100047613', 'account')}
                    title="Copy Account Number"
                  >
                    {copiedField === 'account' ? '✓' : '📋'}
                  </button>
                </div>
              </div>
              <div className="payment-row">
                <span className="payment-label">IFSC Code:</span>
                <div className="payment-value-with-copy">
                  <span className="payment-value">FDRL0002260</span>
                  <button 
                    type="button"
                    className="copy-btn"
                    onClick={() => handleCopy('FDRL0002260', 'ifsc')}
                    title="Copy IFSC Code"
                  >
                    {copiedField === 'ifsc' ? '✓' : '📋'}
                  </button>
                </div>
              </div>
              <div className="payment-row">
                <span className="payment-label">Bank:</span>
                <span className="payment-value">Federal Bank</span>
              </div>
              <div className="payment-row registration-fee">
                <span className="payment-label">Registration Fee:</span>
                <span className="payment-value fee-amount">₹ 21,000/-</span>
              </div>
            </div>
            <div className="payment-note">
              <p>⚠️ Please complete the payment to the above account before submitting the form</p>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="applicantName">Applicant Name *</label>
              <input
                type="text"
                id="applicantName"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleChange}
                placeholder="Applicant Name"
                className={errors.applicantName ? 'error' : ''}
              />
              {errors.applicantName && <span className="error-message">{errors.applicantName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="fatherHusbandName">Father / Husband Name *</label>
              <input
                type="text"
                id="fatherHusbandName"
                name="fatherHusbandName"
                value={formData.fatherHusbandName}
                onChange={handleChange}
                placeholder="Applicant's Father / Husband Name"
                className={errors.fatherHusbandName ? 'error' : ''}
              />
              {errors.fatherHusbandName && <span className="error-message">{errors.fatherHusbandName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth *</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={errors.dateOfBirth ? 'error' : ''}
              />
              {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className={errors.phoneNumber ? 'error' : ''}
              />
              {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="referenceName">Reference Name</label>
              <input
                type="text"
                id="referenceName"
                name="referenceName"
                value={formData.referenceName}
                onChange={handleChange}
                placeholder="Reference Name"
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">Address *</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              rows="3"
              className={errors.address ? 'error' : ''}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State *</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className={errors.state ? 'error' : ''}
              />
              {errors.state && <span className="error-message">{errors.state}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className={errors.city ? 'error' : ''}
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="pinCode">Pin Code *</label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Pin Code"
                className={errors.pinCode ? 'error' : ''}
              />
              {errors.pinCode && <span className="error-message">{errors.pinCode}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="aadharNumber">Aadhar Card Number *</label>
              <input
                type="text"
                id="aadharNumber"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                placeholder="Aadhar Card Number"
                className={errors.aadharNumber ? 'error' : ''}
              />
              {errors.aadharNumber && <span className="error-message">{errors.aadharNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="panNumber">PAN Card Number *</label>
              <input
                type="text"
                id="panNumber"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                placeholder="PAN Card Number"
                style={{ textTransform: 'uppercase' }}
                className={errors.panNumber ? 'error' : ''}
              />
              {errors.panNumber && <span className="error-message">{errors.panNumber}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quota">Quota *</label>
              <select
                id="quota"
                name="quota"
                value={formData.quota}
                onChange={handleChange}
                className={errors.quota ? 'error' : ''}
              >
                <option value="">Select Quota</option>
                <option value="female">Female</option>
                <option value="government-employee">Government Employee</option>
                <option value="general">General</option>
              </select>
              {errors.quota && <span className="error-message">{errors.quota}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="size">Size *</label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className={errors.size ? 'error' : ''}
              >
                <option value="">Select Size</option>
                <option value="100">100 sq. yd</option>
                <option value="120">120 sq. yd</option>
                <option value="150">150 sq. yd</option>
                <option value="200">200 sq. yd</option>
                <option value="250">250 sq. yd</option>
                <option value="300">300 sq. yd</option>
                <option value="350">350 sq. yd</option>
                <option value="400">400 sq. yd</option>
                <option value="450">450 sq. yd</option>
                <option value="500">500 sq. yd</option>
              </select>
              {errors.size && <span className="error-message">{errors.size}</span>}
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="transactionId">Transaction ID / UTR Number *</label>
            <input
              type="text"
              id="transactionId"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              placeholder="Enter Transaction ID or UTR Number"
              className={errors.transactionId ? 'error' : ''}
            />
            {errors.transactionId && <span className="error-message">{errors.transactionId}</span>}
          </div>

          <div className="form-group consent-group">
            <label className="consent-label">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className={errors.consent ? 'error' : ''}
              />
              <span>
                I agree to the <a href="/terms-and-conditions" target="_blank">terms of use</a> and <a href="/privacy-policy" target="_blank">privacy policy</a> *
              </span>
            </label>
            {errors.consent && <span className="error-message">{errors.consent}</span>}
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
