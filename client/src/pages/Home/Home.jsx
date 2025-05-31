import { Row, Col } from 'react-bootstrap'
import { FaCode, FaMobile, FaPaintBrush, FaSearchDollar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Components
import Section from '../../components/ui/Section/Section'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import Button from '../../components/ui/Button/Button'
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard'
import PortfolioCard from '../../components/ui/PortfolioCard/PortfolioCard'
import TestimonialCard from '../../components/ui/TestimonialCard/TestimonialCard'

// Styles
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.hero} ${styles.sections}`}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>Transform Your Digital Presence</h1>
          <p>We create innovative digital solutions to help your business grow</p>
          <div className={styles.buttons}>
            <Button as={Link} to="/services" variant="primary" size="lg" animated>
              Our Services
            </Button>
            <Button as={Link} to="/contact" variant="outline-light" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <Section dark className={styles.sections}>
        <SectionTitle 
          title="Our Services" 
          subtitle="We offer a wide range of services to meet your business needs. From web development to digital marketing, we've got you covered."
          centered
          light
        />
        
        <Row className="g-4">
          <Col lg={3} md={6}>
            <ServiceCard 
              title={<span className={styles.title}>Web Development</span>}
              description="Custom websites and web applications built with the latest technologies to enhance your online presence."
              icon={<FaCode />}
            />
          </Col>
          <Col lg={3} md={6}>
            <ServiceCard 
            title={<span className={styles.title}>Mobile Applications</span>}
              description="Native and cross-platform mobile apps designed to provide seamless experiences on all devices."
              icon={<FaMobile />}
            />
          </Col>
          <Col lg={3} md={6}>
            <ServiceCard 
              title={<span className={styles.title}>UI/UX Design</span>}
              description="User-centric design solutions that prioritize usability, accessibility, and visual appeal. provide some more detail here"
              icon={<FaPaintBrush />}
            />
          </Col>
          <Col lg={3} md={6}>
            <ServiceCard 
            title={<span className={styles.title}>Digital Marketing</span>}
              description="Strategic marketing campaigns to increase your brand visibility and drive customer engagement."
              icon={<FaSearchDollar />}
            />
          </Col>
        </Row>
        
        <div className={styles.sectionFooter}>
          <Button as={Link} to="/services" variant="outline-primary" animated>
            View All Services
          </Button>
        </div>
      </Section>
      
      {/* About Preview */}
      <Section dark  className={styles.sections}>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className={styles.aboutImage}>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team meeting" 
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.aboutContent}>
              <SectionTitle 
                title="Who We Are ?" 
                subtitle="We're a team of passionate digital creators dedicated to helping businesses succeed online."
                light
              />
              <p>
                Founded in 2015, Hafiz Sagar Tech has grown from a small startup to a comprehensive digital agency 
                serving clients worldwide. Our mission is to deliver innovative, high-quality solutions that 
                drive real business results.
              </p>
              <p>
                With a team of experienced professionals specializing in various aspects of digital 
                technology, we have the expertise to tackle projects of any size and complexity.
              </p>
              <Button as={Link} to="/about" variant="primary" animated>
                Learn More About Us
              </Button>
            </div>
          </Col>
        </Row> 
      </Section>
      
      {/* Portfolio Preview */}
      <Section dark  className={styles.sections}>
        <SectionTitle 
          title="Our Portfolio" 
          subtitle="Explore some of our recent projects and see how we've helped our clients achieve their goals."
          centered
          light
        />
        
        <Row className="g-4">
          <Col lg={4} md={6}>
            <PortfolioCard 
              title={<span className={styles.title}>E-Commerce Platform</span>}
              category="Web Development"
              description="A fully-featured e-commerce platform with custom payment integration."
              image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              detailedDescription="A comprehensive e-commerce solution built for a fashion retailer. Features include product management, inventory tracking, secure payment processing, and customer accounts."
              technologies={["React", "Node.js", "Express", "MySQL", "Stripe"]}
            />
          </Col>
          <Col lg={4} md={6}>
            <PortfolioCard 
            title={<span className={styles.title}>Fitness App</span>}
              category="Mobile Development"
              description="A mobile application for workout tracking and fitness goals."
              image="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              detailedDescription="A cross-platform mobile app that helps users track workouts, set fitness goals, and monitor their progress. Includes social features for sharing achievements."
              technologies={["React Native", "Firebase", "Redux", "Google Fit API"]}
            />
          </Col>
          <Col lg={4} md={6}>
            <PortfolioCard 
            title={<span className={styles.title}>Corporate Rebrand</span>}
              category="UI/UX Design"
              description="Complete rebranding including logo, website, and marketing materials."
              image="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              detailedDescription="A comprehensive rebranding project for a financial services company. We created a new visual identity, redesigned their website, and developed new marketing materials."
              technologies={["Adobe Creative Suite", "Figma", "WordPress", "SASS"]}
            />
          </Col>
        </Row>
        
        <div className={styles.sectionFooter}>
          <Button as={Link} to="/portfolio" variant="outline-primary" animated>
            View All Projects
          </Button>
        </div>
      </Section>
      
      {/* Testimonials */}
      <Section dark  className={styles.sections}>
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
          centered
          light
        />
        
        <Row className="g-4">
          <Col lg={4} md={6}>
            <TestimonialCard 
              quote="TechVision transformed our outdated website into a modern, user-friendly platform that has significantly increased our online conversions."
              name="Sarah Johnson"
              position="Marketing Director"
              company="Bloom Retail"
              avatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Col>
          <Col lg={4} md={6}>
            <TestimonialCard 
              quote="The mobile app developed by TechVision has revolutionized how we engage with our customers. User adoption exceeded our expectations."
              name="Michael Chang"
              position="CTO"
              company="HealthFirst"
              avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Col>
          <Col lg={4} md={6}>
            <TestimonialCard 
              quote="Working with TechVision was a game-changer for our business. Their strategic approach to digital marketing doubled our lead generation."
              name="Emma Roberts"
              position="CEO"
              company="Innovate Solutions"
              avatar="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Col>
        </Row>
      </Section>
      
      {/* CTA Section */}
      <section className={`${styles.cta} ${styles.sections}`}>
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today to discuss how we can help bring your vision to life.</p>
          <Button as={Link} to="/contact" variant="primary" size="lg" animated>
            Get Started
          </Button>
        </div>
      </section>
    </>
  )
}

export default Home