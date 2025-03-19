import { FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa';
import './Services.css';

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ElementType;
}

const ServiceCard = ({ title, text, icon: Icon }: FeatureProps) => {
  return (
    <div className="service-card reveal">
      <div className="service-icon">
        <Icon />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-text">{text}</p>
      <a href="#contact" className="service-link">
        Learn more 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We provide comprehensive digital solutions to help your business thrive in the digital landscape.
          Our expertise spans across various domains to deliver exceptional results.
        </p>
        
        <div className="services-grid">
          <ServiceCard 
            title="Web Development" 
            text="We create responsive, high-performance websites and web applications using modern technologies and best practices to deliver seamless user experiences."
            icon={FaLaptopCode}
          />
          <ServiceCard 
            title="Mobile Applications" 
            text="Our team builds native and cross-platform mobile applications that provide intuitive interfaces and powerful functionality for iOS and Android devices."
            icon={FaMobileAlt}
          />
          <ServiceCard 
            title="UI/UX Design" 
            text="We craft visually stunning and user-centered designs that enhance usability and create memorable brand experiences that engage your audience."
            icon={FaPalette}
          />
        </div>
      </div>
    </section>
  );
}
