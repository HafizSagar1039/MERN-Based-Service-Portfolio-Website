import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { 
  FaCode, 
  FaMobile, 
  FaPaintBrush, 
  FaSearchDollar, 
  FaServer, 
  FaShieldAlt, 
  FaChartLine, 
  FaHeadset 
} from 'react-icons/fa'

// Components
import Section from '../../components/ui/Section/Section'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import Button from '../../components/ui/Button/Button'
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard'

// Styles
import styles from './Services.module.css'

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions for your business needs</p>
        </div>
      </section>
      
      {/* Services Overview */}
      <Section dark className={styles.sections}>
         <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive digital solutions for your business needs."
          centered
          light
        />
        <Row className="g-4">
          <Col lg={3} md={6}>
            <ServiceCard
            
            title={<span className={styles.title}> Web Development </span>}
              description="Custom websites and web applications built with the latest technologies to enhance your online presence."
              icon={<FaCode />}
              
            />
          </Col>
          <Col lg={3} md={6}>
            <ServiceCard 
            title={<span className={styles.title}> Mobile Applications </span>}
              description="Native and cross-platform mobile apps designed to provide seamless experiences on all devices."
              icon={<FaMobile />}
            />
          </Col>
          <Col lg={3} md={6}>
            <ServiceCard 
              title={<span className={styles.title}> UI/UX Design </span>}
              description="User-centric design solutions that prioritize usability, accessibility, and visual appeal."
              icon={<FaPaintBrush />}
            />
          </Col>
          <Col lg={3} md={6}>
            <ServiceCard 
            title={<span className={styles.title}> Digital Marketing </span>}
              description="Strategic marketing campaigns to increase your brand visibility and drive customer engagement."
              icon={<FaSearchDollar />}
            />
          </Col>
          <Col lg={3} md={6}>
            <ServiceCard 
                title={<span className={styles.title}> Cloud Solutions </span>}
              description="Scalable cloud infrastructure and migration services to optimize your operations."
              icon={<FaServer />}
            />
          </Col>
          <Col lg={3} md={6}>
            <ServiceCard 
             title={<span className={styles.title}> Cybersecurity </span>}
              description="Comprehensive security assessments and solutions to protect your digital assets."
              icon={<FaShieldAlt />}
            />
          </Col>
          <Col lg={3} md={6}>
            <ServiceCard 
            title={<span className={styles.title}> Analytics & Insights </span>}
              description="Data-driven insights and analytics to help you make informed business decisions."
              icon={<FaChartLine />}
            />
          </Col>
          <Col lg={3} md={6}>
            <ServiceCard 
             title={<span className={styles.title}> IT Consulting </span>}
              description="Expert guidance on technology strategy and implementation for your business."
              icon={<FaHeadset />}
            />
          </Col>
        </Row>
      </Section>
      
      {/* Web Development */}
      <Section dark className={styles.sections}>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className={styles.serviceImage}>
              <img 
                src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Web Development" 
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.serviceContent}>
              <SectionTitle 
                title="Web Development" 
                subtitle="Modern websites and web applications built with cutting-edge technologies."
                light
              />
              <p>
                Our web development services cover everything from simple informational websites to complex 
                web applications. We focus on creating responsive, fast-loading, and user-friendly websites 
                that help you achieve your business goals.
              </p>
              <ul className={styles.serviceList}>
                <li>Custom website development</li>
                <li>E-commerce solutions</li>
                <li>Content management systems</li>
                <li>Progressive web applications</li>
                <li>Web portals and dashboards</li>
                <li>API development and integration</li>
              </ul>
              <p>
                We use modern technologies and frameworks to ensure your web project is built with the best 
                tools for the job, resulting in a solution that's both powerful and maintainable.
              </p>
            </div>
          </Col>
        </Row>
      </Section>
     
      {/* Mobile Applications */}
      <Section dark className={styles.sections}>
        <Row className="align-items-center g-5">
          <Col lg={6} className="order-lg-2">
            <div className={styles.serviceImage}>
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mobile Development" 
              />
            </div>
          </Col>
          <Col lg={6} className="order-lg-1">
            <div className={styles.serviceContent}>
              <SectionTitle 
                title="Mobile Applications" 
                subtitle="Native and cross-platform mobile solutions for iOS and Android."
                light
              />
              <p>
                Reach your customers on their preferred devices with custom mobile applications designed 
                to provide seamless experiences across platforms. Our mobile development team creates apps 
                that are both beautiful and functional.
              </p>
              <ul className={styles.serviceList}>
                <li>Native iOS and Android development</li>
                <li>Cross-platform applications</li>
                <li>Mobile app UI/UX design</li>
                <li>App store optimization</li>
                <li>Mobile app testing and QA</li>
                <li>Ongoing maintenance and support</li>
              </ul>
              <p>
                Whether you need a consumer-facing app or an internal tool for your team, we can develop 
                a mobile solution that meets your specific requirements.
              </p>
            </div>
          </Col>
        </Row>
      </Section>
      
      {/* Process Section */}
      <Section dark className={styles.sections}>
        <SectionTitle 
          title="Our Process" 
          subtitle="How we approach every project to ensure success."
          centered
          light
        />
        
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.processNumber}>1</div>
            <div className={styles.processContent}>
              <h3>Discovery</h3>
              <p>
                We start by understanding your business goals, target audience, and project requirements 
                through in-depth discussions and research.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.processNumber}>2</div>
            <div className={styles.processContent}>
              <h3>Planning</h3>
              <p>
                Based on our discovery findings, we create a detailed project plan, including timelines, 
                deliverables, and technical specifications.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.processNumber}>3</div>
            <div className={styles.processContent}>
              <h3>Design</h3>
              <p>
                Our design team creates wireframes and visual designs, ensuring your solution is both 
                aesthetically pleasing and user-friendly.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.processNumber}>4</div>
            <div className={styles.processContent}>
              <h3>Development</h3>
              <p>
                Our developers bring the designs to life, writing clean, efficient code and implementing 
                all required functionality.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.processNumber}>5</div>
            <div className={styles.processContent}>
              <h3>Testing</h3>
              <p>
                We thoroughly test the solution to ensure it's bug-free, secure, and performs well across 
                all intended platforms and devices.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.processNumber}>6</div>
            <div className={styles.processContent}>
              <h3>Deployment</h3>
              <p>
                Once approved, we deploy your solution to production, ensuring a smooth launch and proper 
                configuration.
              </p>
            </div>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.processNumber}>7</div>
            <div className={styles.processContent}>
              <h3>Support</h3>
              <p>
                We provide ongoing support and maintenance to keep your solution running smoothly and 
                up-to-date with evolving technology.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className={`${styles.cta} ${styles.sections}`}>
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today to discuss how we can help bring your vision to life.</p>
          <Button as={Link} to="/contact" variant="primary" size="lg" animated>
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}

export default Services