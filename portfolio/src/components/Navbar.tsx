import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Studio<span className="gradient-text">Flow</span></span>
        </div>
        
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
        
        <nav className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('portfolio')}>Work</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
            <li className="nav-item mobile-hidden">
              <button 
                className="btn btn-primary nav-cta" 
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
