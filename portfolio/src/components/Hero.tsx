import './Hero.css';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      
      <div className="container hero-container">
        <h1 className="hero-title">
          Transforming Ideas Into 
          <br />
          <span className="hero-highlight gradient-text">Digital Excellence</span>
        </h1>
        
        <p className="hero-text">
          We create exceptional digital experiences through innovative web development, 
          mobile applications, and stunning visual designs that elevate your brand 
          and engage your audience.
        </p>
        
        <div className="hero-buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => scrollToSection('contact')}
          >
            Start Your Project
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => scrollToSection('portfolio')}
          >
            View Our Work
          </button>
        </div>
        
        <div className="hero-image-container floating">
          <img 
            src="https://i.pinimg.com/736x/1e/2f/00/1e2f00e8fb302b877dfe5a7a49b85dcd.jpg" 
            alt="Digital design showcase" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
