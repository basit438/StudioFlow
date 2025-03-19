import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false); // Reset error state
    
    // Simulating API call with setTimeout
    setTimeout(() => {
      // Simulate 90% success rate
      const isSuccess = Math.random() > 0.1;
      
      setIsSubmitting(false);
      if (isSuccess) {
        setSubmitSuccess(true);
        
        // Reset form after successful submission
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
      } else {
        // Simulate an error scenario
        setSubmitError(true);
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitError(false);
        }, 5000);
      }
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to know more about our services? 
          Reach out to us and let's create something amazing together.
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card reveal">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Our Location</h3>
                <p>123 Innovation Street, Tech Hub, San Francisco, CA 94107</p>
              </div>
            </div>
            
            <div className="contact-card reveal">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p>hello@digitalagency.com</p>
                <p>support@digitalagency.com</p>
              </div>
            </div>
            
            <div className="contact-card reveal">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Send us a message</h3>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name} 
                onChange={handleChange}
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                value={formData.email} 
                onChange={handleChange}
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Subject" 
                required 
                value={formData.subject} 
                onChange={handleChange}
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                placeholder="Your Message" 
                required 
                value={formData.message} 
                onChange={handleChange}
                className="form-control"
                rows={5}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitSuccess && (
              <div className="form-success">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitError && (
              <div className="form-error">
                Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
