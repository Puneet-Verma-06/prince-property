import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './ContactModal.css'

const ContactModal = ({ isOpen, onClose }) => {
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

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
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        interestedIn: '',
        projectInterestedIn: '',
        message: ''
      })
      setTimeout(() => {
        onClose()
        setSubmitMessage('')
      }, 2000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitMessage('Sorry, something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-header">
          <h2>Contact Us</h2>
          <p>Fill out the form below and we'll get back to you soon</p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
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
              <option value="RERA Approved Plots - Delhi Meerut Expressway">RERA Approved Plots - Delhi Meerut Expressway</option>
              <option value="Expressway Residency">Expressway Residency</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements... (minimum 10 characters)"
              rows="4"
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
  )
}

export default ContactModal
