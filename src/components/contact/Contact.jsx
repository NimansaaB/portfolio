import React, { useState } from 'react';
import Button from '../shared/Button';
import Section from '../shared/Section';
import '../../styles/components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real application, you would send the form data to your backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="contact-section">
      <div className="contact">
        <div className="contact__info">
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__description">
            Feel free to reach out to me for any questions, collaboration opportunities, or just to say hello!
          </p>
          
          <div className="contact__details">
            <div className="contact__detail">

              <div className="contact__detail-content">
                <h3 className="contact__detail-title">Email</h3>
                <a href="mailto:nimansab22@gmail.com" className="contact__detail-value">
                  nimansab22@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact__detail">

              <div className="contact__detail-content">
                <h3 className="contact__detail-title">Location</h3>
                <p className="contact__detail-value">
                  57A, Daham Mawatha, Maharagama, Sri Lanka
                </p>
              </div>
            </div>
            
            <div className="contact__detail">

              <div className="contact__detail-content">
                <h3 className="contact__detail-title">Phone</h3>
                <a href="tel:+94701681878" className="contact__detail-value">
                  +94 70 168 1878
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact__social">
            <h3 className="contact__social-title">Connect With Me</h3>
            <div className="contact__social-links">
              <a 
                href="https://www.linkedin.com/in/nimansa-bandara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact__social-link linkedin"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact__form-container">
          <form className="contact__form" onSubmit={handleSubmit}>
            <h2 className="contact__form-title">Send Me a Message</h2>
            
            {submitSuccess && (
              <div className="contact__form-success">
                ✅ Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitError && (
              <div className="contact__form-error">
                ⚠️ {submitError}
              </div>
            )}
            
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__form-label">Name</label>
              <div className="contact__form-input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`contact__form-input ${formErrors.name ? 'contact__form-input--error' : ''}`}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              {formErrors.name && (
                <span className="contact__form-error-text">⚠️ {formErrors.name}</span>
              )}
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__form-label">Email</label>
              <div className="contact__form-input-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`contact__form-input ${formErrors.email ? 'contact__form-input--error' : ''}`}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              {formErrors.email && (
                <span className="contact__form-error-text">⚠️ {formErrors.email}</span>
              )}
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="subject" className="contact__form-label">Subject</label>
              <div className="contact__form-input-container">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`contact__form-input ${formErrors.subject ? 'contact__form-input--error' : ''}`}
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              {formErrors.subject && (
                <span className="contact__form-error-text">⚠️ {formErrors.subject}</span>
              )}
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">Message</label>
              <div className="contact__form-input-container">
                <textarea
                  id="message"
                  name="message"
                  className={`contact__form-textarea ${formErrors.message ? 'contact__form-textarea--error' : ''}`}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              {formErrors.message && (
                <span className="contact__form-error-text">⚠️ {formErrors.message}</span>
              )}
            </div>
            
            <Button
              type="submit"
              variant="primary"
              className="contact__form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;