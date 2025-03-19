import { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Portfolio.css';

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<ProjectProps[]>([]);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const projects: ProjectProps[] = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      description: "A comprehensive e-commerce solution with product management, payment integration, and analytics dashboard.",
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.jn_HBMcNUcl62Skn4iTwYAHaE8&pid=Api&P=0&h=180",
      category: "web"
    },
    {
      id: 2,
      title: "Travel Companion App",
      description: "A mobile application for travelers with itinerary planning, local recommendations, and offline maps.",
      imageUrl: "https://media.istockphoto.com/id/1408069428/photo/mother-and-daughter-standing-on-steps-with-flowing-water.jpg?s=2048x2048&w=is&k=20&c=wtdNQYnLBGKP4rZcbYSG5B3s5-Lu5UW2QrVIuWfZ9uE=",
      category: "mobile"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "An interactive data visualization dashboard for tracking financial metrics and market analytics.",
      imageUrl: "https://metricalist.com/wp-content/uploads/2023/04/Modern%20Finance%20Dashboard%20Template_1_Modern%20Finance%20Dashboard%20-%20Dark%20Mode.png",
      category: "web"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      description: "A comprehensive platform for healthcare providers to manage patient records and appointment scheduling.",
      imageUrl: "https://wallpaperaccess.com/full/186125.jpg",
      category: "web"
    },
    {
      id: 5,
      title: "Social Media Mobile App",
      description: "A feature-rich social networking application with real-time messaging and content sharing capabilities.",
      imageUrl: "https://cdn.pixabay.com/photo/2017/08/01/09/07/mobile-2563782_1280.jpg",
      category: "mobile"
    },
    {
      id: 6,
      title: "Brand Identity Design",
      description: "A complete brand identity redesign including logo, color schemes, typography, and brand guidelines.",
      imageUrl: "https://cdn.pixabay.com/photo/2018/08/29/09/12/business-3639451_1280.jpg",
      category: "design"
    }
  ];

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Web Development', value: 'web' },
    { name: 'Mobile Apps', value: 'mobile' },
    { name: 'UI/UX Design', value: 'design' }
  ];

  // Initialize visible projects on component mount
  useEffect(() => {
    setVisibleProjects(projects);
  }, []);

  // Update visible projects when the filter changes
  useEffect(() => {
    const filteredProjects = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    
    setVisibleProjects(filteredProjects);
    
    // Reset the animation when filter changes
    if (portfolioRef.current) {
      const cards = portfolioRef.current.querySelectorAll('.portfolio-card');
      cards.forEach(card => {
        card.classList.remove('show');
        // Trigger reflow to restart animation
        void (card as HTMLElement).offsetWidth;
        setTimeout(() => {
          card.classList.add('show');
        }, 50);
      });
    }
  }, [activeFilter]);
  
  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  const openModal = (project: ProjectProps) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our recent projects that showcase our expertise and creativity in 
          delivering exceptional digital solutions for our clients.
        </p>
        
        <div className="portfolio-filter">
          {filters.map((filter) => (
            <button 
              key={filter.value} 
              className={`filter-button ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="portfolio-grid" ref={portfolioRef}>
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project) => (
              <div 
                key={project.id} 
                className="portfolio-card show"
                onClick={() => openModal(project)}
              >
                <img src={project.imageUrl} alt={project.title} className="portfolio-image" />
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <a href="#" className="portfolio-link" onClick={(e) => e.preventDefault()}>
                    View Project <FaArrowRight />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <p>No projects found for this category.</p>
            </div>
          )}
        </div>
      </div>
      
      {modalOpen && selectedProject && (
        <div className="modal open">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
            <h2 style={{ marginTop: '20px' }}>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div style={{ marginTop: '20px' }}>
              <h4>Project Details</h4>
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li>Category: {selectedProject.category === 'web' ? 'Web Development' : 
                              selectedProject.category === 'mobile' ? 'Mobile Application' : 'UI/UX Design'}</li>
                <li>Client: Example Client</li>
                <li>Completion: March 2025</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
