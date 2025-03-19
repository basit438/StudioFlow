import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">Digital Studio</div>
            <p className="footer-description">
              We create exceptional digital experiences through innovative web development, 
              mobile applications, and stunning visual designs that elevate your brand.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link"><FaFacebookF /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaLinkedinIn /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="#" onClick={() => scrollToSection('home')} className="footer-link">Home</a>
              </li>
              <li className="footer-link-item">
                <a href="#" onClick={() => scrollToSection('services')} className="footer-link">Services</a>
              </li>
              <li className="footer-link-item">
                <a href="#" onClick={() => scrollToSection('portfolio')} className="footer-link">Portfolio</a>
              </li>
              <li className="footer-link-item">
                <a href="#" onClick={() => scrollToSection('contact')} className="footer-link">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="#" className="footer-link">Web Development</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Mobile Applications</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">UI/UX Design</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Brand Strategy</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="footer-contact-text">
                  123 Innovation Street, Tech Hub, San Francisco, CA 94107
                </div>
              </div>
              
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaEnvelope />
                </div>
                <div className="footer-contact-text">
                  hello@digitalagency.com
                </div>
              </div>
              
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaPhone />
                </div>
                <div className="footer-contact-text">
                  +1 (555) 123-4567
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <hr className="footer-divider" />
      
      <div className="container">
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Digital Studio. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
