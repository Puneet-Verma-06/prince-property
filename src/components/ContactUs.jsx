import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactUs.css'
import ShinyText from './ShinyText'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedIn: '',
    projectInterestedIn: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Prepare template parameters
    const templateParams = {
      to_email: 'Hautedevelopers2@gmail.com',
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      interested_in: formData.interestedIn,
      project: formData.projectInterestedIn,
      message: formData.message
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setSubmitMessage('Thank you! Your message has been sent successfully.')
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        interestedIn: '',
        projectInterestedIn: '',
        message: ''
      })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitMessage('Sorry, something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <h1 className="contact-main-heading">
          <ShinyText text="Contact Us" speed={5} color="#16a085" shineColor="#2ecc71" />
        </h1>
        <div className="contact-wrapper">
          {/* Contact Information */}
          <div className="contact-info-section" data-aos="flip-left">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <a href="mailto:Hautedevelopers2@gmail.com">support@hautedevelopers.com</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Head Office</h3>
                  <p>T-3, NX-One, Office No A, 322, Greater Noida W Rd, Uttar Pradesh 201318</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Connect On</h3>
                  <a href="tel:9217412029">9217412029</a>
                </div>
              </div>
            </div>

            {/* Map or additional info can be added here */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.738637023687!2d77.49842731508!3d28.47557498248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea6b8f7e8c1f%3A0x7e0c8f5c8f5e8c1f!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section" data-aos="flip-right">
            <h2 className="section-title">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abc@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="interestedIn">I'm Interested In *</label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="100 sq ft">100 sq ft</option>
                    <option value="135 sq ft">135 sq ft</option>
                    <option value="150 sq ft">150 sq ft</option>
                    <option value="200 sq ft">200 sq ft</option>
                    <option value="350 sq ft">350 sq ft</option>
                    <option value="500 sq ft">500 sq ft</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="projectInterestedIn">Project Interested In *</label>
                  <select
                    id="projectInterestedIn"
                    name="projectInterestedIn"
                    value={formData.projectInterestedIn}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Project</option>
                    <option value="Expressway Residency">Expressway Residency</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements... (minimum 10 characters)"
                  rows="6"
                  minLength="10"
                  required
                ></textarea>
              </div>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
                  {submitMessage}
                </div>
              )}
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
