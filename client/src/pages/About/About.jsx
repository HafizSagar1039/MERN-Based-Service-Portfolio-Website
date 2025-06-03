import { Row, Col } from 'react-bootstrap'
import { FaUsers, FaLightbulb, FaTrophy, FaHandshake } from 'react-icons/fa'

// Components
import Section from '../../components/ui/Section/Section'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
// Styles
import styles from './About.module.css'

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>About SagaTech</h1>
          <p>Learn more about our company, our mission, and our team</p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <Section dark className={styles.sections}>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className={styles.aboutImage}>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team" 
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.aboutContent}>
              <SectionTitle 
                title="Our Story" 
                subtitle="How SagaTech came to be and what drives us forward."
                light
              />
              <p>
                SagaTech was founded in 2015 by a group of tech enthusiasts who shared a vision of making 
                digital technology accessible and beneficial for businesses of all sizes. What started as a 
                small web development team has grown into a full-service digital agency with expertise in 
                various domains.
              </p>
              <p>
                Over the years, we've worked with hundreds of clients across multiple industries, from startups 
                to established enterprises. Our journey has been one of continuous learning and adaptation to 
                the ever-evolving digital landscape.
              </p>
              <p>
                Today, SagaTech stands as a trusted partner for businesses looking to establish or enhance 
                their digital presence. Our comprehensive approach combines technical expertise with creative 
                thinking to deliver solutions that drive real business results.
              </p>
            </div>
          </Col>
        </Row>
      </Section>
      
      {/* Mission and Values */}
      <Section dark  className={styles.sections}>
        <SectionTitle 
          title="Our Mission & Values" 
          subtitle="The principles that guide our work and relationships."
          centered
          light
        />
        
        <div className={styles.missionBox}>
          <h3>Our Mission</h3>
          <p>
            To empower businesses through innovative digital solutions that drive growth, enhance user experiences, 
            and create lasting value in an increasingly connected world.
          </p>
        </div>
        
        <Row className="g-4 mt-4">
          <Col md={3}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaUsers />
              </div>
              <h4>Client Focus</h4>
              <p>We prioritize our clients' needs and goals, working collaboratively to ensure their success.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaLightbulb />
              </div>
              <h4>Innovation</h4>
              <p>We embrace new technologies and approaches to solve complex problems creatively.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaTrophy />
              </div>
              <h4>Excellence</h4>
              <p>We maintain the highest standards in everything we do, from code quality to design.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaHandshake />
              </div>
              <h4>Integrity</h4>
              <p>We operate with transparency, honesty, and ethical practices in all our interactions.</p>
            </div>
          </Col>
        </Row>
      </Section>
      
      {/* Team Section */}
      <Section  className={styles.sections}>
        
        <SectionTitle 
          title="Meet Our Team" 
        subtitle="The talented individuals who make the magic happen."
        light
          centered
        />
        
        <Row className="g-4">
          <Col lg={3} md={6}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="David Mitchell" 
                />
              </div>
              <div className={styles.teamInfo}>
                <h4>David Mitchell</h4>
                <p className={styles.position}>CEO & Founder</p>
                <p className={styles.bio}>
                  With over 15 years in the tech industry, David leads our team with vision and expertise.
                </p>
              </div>
            </div>
          </Col>
          
          <Col lg={3} md={6}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jennifer Lee" 
                />
              </div>
              <div className={styles.teamInfo}>
                <h4>Jennifer Lee</h4>
                <p className={styles.position}>Creative Director</p>
                <p className={styles.bio}>
                  Jennifer brings creative vision and design excellence to every project we undertake.
                </p>
              </div>
            </div>
          </Col>
          
          <Col lg={3} md={6}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img 
                  src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Michael Rodriguez" 
                />
              </div>
              <div className={styles.teamInfo}>
                <h4>Michael Rodriguez</h4>
                <p className={styles.position}>Technical Lead</p>
                <p className={styles.bio}>
                  A wizard with code, Michael ensures our technical solutions are robust and scalable.
                </p>
              </div>
            </div>
          </Col>
          
          <Col lg={3} md={6}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Johnson" 
                />
              </div>
              <div className={styles.teamInfo}>
                <h4>Sarah Johnson</h4>
                <p className={styles.position}>Project Manager</p>
                <p className={styles.bio}>
                  Sarah's organizational skills keep our projects on track and our clients happy.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Section>
      
      {/* Stats Section */}
    <section className={`${styles.stats} ${styles.sections}`}>
        <div className={styles.statsOverlay}></div>
        <div className={styles.statsContent}>
          <Row className="g-4">
            <Col md={3}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>300+</div>
                <div className={styles.statLabel}>Clients Served</div>
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>20+</div>
                <div className={styles.statLabel}>Team Members</div>
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>8</div>
                <div className={styles.statLabel}>Years of Excellence</div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default About