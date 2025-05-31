import { useState } from 'react'
import { Row, Col, Button as BootstrapButton, ButtonGroup } from 'react-bootstrap'

// Components
import Section from '../../components/ui/Section/Section'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import PortfolioCard from '../../components/ui/PortfolioCard/PortfolioCard'

// Styles
import styles from './Portfolio.module.css'

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A fully-featured e-commerce platform with custom payment integration.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "A comprehensive e-commerce solution built for a fashion retailer. Features include product management, inventory tracking, secure payment processing, and customer accounts.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Stripe"]
  },
  {
    id: 2,
    title: "Fitness App",
    category: "Mobile Development",
    description: "A mobile application for workout tracking and fitness goals.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "A cross-platform mobile app that helps users track workouts, set fitness goals, and monitor their progress. Includes social features for sharing achievements.",
    technologies: ["React Native", "Firebase", "Redux", "Google Fit API"]
  },
  {
    id: 3,
    title: "Corporate Rebrand",
    category: "UI/UX Design",
    description: "Complete rebranding including logo, website, and marketing materials.",
    image: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "A comprehensive rebranding project for a financial services company. We created a new visual identity, redesigned their website, and developed new marketing materials.",
    technologies: ["Adobe Creative Suite", "Figma", "WordPress", "SASS"]
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    category: "Web Development",
    description: "A dashboard for managing and analyzing social media performance.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "A centralized dashboard for businesses to manage multiple social media accounts, schedule posts, and analyze performance metrics across platforms.",
    technologies: ["React", "Chart.js", "Node.js", "MongoDB", "Social Media APIs"]
  },
  {
    id: 5,
    title: "Restaurant Ordering System",
    category: "Mobile Development",
    description: "A mobile app for restaurant ordering and reservation management.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "A mobile application that allows customers to browse menus, place orders, and make reservations. The app also includes a backend system for restaurant staff to manage orders and tables.",
    technologies: ["Flutter", "Firebase", "Stripe", "Google Maps API"]
  },
  {
    id: 6,
    title: "Healthcare Portal",
    category: "Web Development",
    description: "A secure portal for patients and healthcare providers.",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "A HIPAA-compliant web portal that allows patients to schedule appointments, access medical records, and communicate with healthcare providers securely.",
    technologies: ["Angular", "Node.js", "PostgreSQL", "OAuth 2.0", "AWS"]
  },
  {
    id: 7,
    title: "Real Estate App",
    category: "Mobile Development",
    description: "A mobile app for property listings and real estate transactions.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "A feature-rich mobile application for browsing property listings, scheduling viewings, and facilitating real estate transactions. Includes virtual tours and mortgage calculators.",
    technologies: ["React Native", "Node.js", "MongoDB", "MapBox API", "AWS S3"]
  },
  {
    id: 8,
    title: "Educational Platform",
    category: "Web Development",
    description: "An online learning platform with courses, quizzes, and progress tracking.",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "A comprehensive e-learning platform with course creation tools, interactive quizzes, student progress tracking, and certification management.",
    technologies: ["React", "Django", "PostgreSQL", "Redis", "AWS"]
  },
  {
    id: 9,
    title: "Travel Companion App",
    category: "Mobile Development",
    description: "A mobile app for travel planning, itineraries, and recommendations.",
    image: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    detailedDescription: "A travel app that helps users plan trips, create itineraries, discover local attractions, and share their experiences with friends. Includes offline maps and translation features.",
    technologies: ["React Native", "GraphQL", "MongoDB", "Google Places API", "Firebase"]
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);
  
  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.hero} ${styles.sections}`}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>Our Portfolio</h1>
          <p>Explore our latest projects and success stories</p>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <Section dark className={styles.sections}>
        <SectionTitle 
          title="Our Work" 
          subtitle="Browse through our recent projects to see how we've helped our clients achieve their goals."
          centered
          light
        />
        
        <div className={styles.filterButtons}>
          <ButtonGroup className={styles.buttonGroup}>
            <BootstrapButton 
              variant={filter === 'all' ? 'primary' : 'outline-primary'}
              onClick={() => setFilter('all')}
              className={styles.filterButton}
            >
              All
            </BootstrapButton>
            <BootstrapButton 
              variant={filter === 'Web Development' ? 'primary' : 'outline-primary'}
              onClick={() => setFilter('Web Development')}
              className={styles.filterButton}
            >
              Web Development
            </BootstrapButton>
            <BootstrapButton 
              variant={filter === 'Mobile Development' ? 'primary' : 'outline-primary'}
              onClick={() => setFilter('Mobile Development')}
              className={styles.filterButton}
            >
              Mobile Development
            </BootstrapButton>
            <BootstrapButton 
              variant={filter === 'UI/UX Design' ? 'primary' : 'outline-primary'}
              onClick={() => setFilter('UI/UX Design')}
              className={styles.filterButton}
            >
              UI/UX Design
            </BootstrapButton>
          </ButtonGroup>
        </div>
        
        <Row className="g-4">
          {filteredItems.map(item => (
            <Col lg={4} md={6} key={item.id}>
              <PortfolioCard 
              title={<span className='text-light'>{item.title}</span>}
                category={item.category}
                description={item.description}
                image={item.image}
                detailedDescription={item.detailedDescription}
                technologies={item.technologies}
              />
            </Col>
          ))}
        </Row>
      </Section>
      
      {/* Process Section */}
      <Section dark className={styles.sections}>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className={styles.processImage}>
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Process" 
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.processContent}>
              <SectionTitle 
                title="Our Project Process" 
                subtitle="How we approach every project to ensure success."
                light
              />
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4>Discovery</h4>
                  <p>We start by understanding your business goals, target audience, and project requirements through in-depth discussions.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4>Planning & Design</h4>
                  <p>We create a detailed project plan and design prototypes that align with your brand and user expectations.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4>Development</h4>
                  <p>Our developers bring the designs to life, writing clean, efficient code and implementing all required functionality.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4>Testing & Launch</h4>
                  <p>We thoroughly test the solution and deploy it to production, ensuring a smooth launch and proper configuration.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Section>
      
      {/* Call to Action */}
      <section className={`${styles.cta} ${styles.sections}`}>
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContent}>
          <h2>Have a Project in Mind?</h2>
          <p>Let's discuss how we can help bring your vision to life.</p>
          <BootstrapButton href="/contact" variant="primary" size="lg" className={styles.ctaButton}>
            Start a Project
          </BootstrapButton>
        </div>
      </section>
    </>
  )
}

export default Portfolio