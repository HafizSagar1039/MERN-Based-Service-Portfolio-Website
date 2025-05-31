import { useState } from 'react'
import { Row, Col, Form, Alert } from 'react-bootstrap'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'
import axios from 'axios'

// Components
import Section from '../../components/ui/Section/Section'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import Button from '../../components/ui/Button/Button'

// Styles
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  
  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    
    try {
      const res = await axios.post('/api/contact', formData)
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: res.data.message }
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => {
        setStatus(prevStatus => ({ ...prevStatus, submitted: false, info: { error: false, msg: null } }))
      }, 5000)
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: error.response?.data?.message || 'Something went wrong. Please try again later.' }
      })
    }
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>Contact Us</h1>
          <p>Get in touch with our team to discuss your project</p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <Section dark className={styles.sections}>
        <Row className="g-5">
          <Col lg={6}>
            <SectionTitle 
              title="Get In Touch" 
              subtitle="Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible."
              light
            />
            
            {status.info.msg && (
              <Alert 
                variant={status.info.error ? 'danger' : 'success'} 
                className={styles.alert}
              >
                {status.info.msg}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className='text-light fw-bolder'>Your Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={styles.formControl}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className='text-light fw-bolder'>Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={styles.formControl}
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className='text-light fw-bolder'>Phone Number</Form.Label>
                    <Form.Control 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className={styles.formControl}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className='text-light fw-bolder'>Subject</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className={styles.formControl}
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Form.Group className="mb-4">
                <Form.Label className='text-light fw-bolder'>Your Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className={styles.formControl}
                />
              </Form.Group>
              
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                animated
                disabled={status.submitting}
                className={styles.submitButton}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </Col>
          
          <Col lg={6}>
            <div className={styles.contactInfo}>
              <div className={styles.mapContainer}>
                <iframe 
                  src="https://www.google.com/maps?q=Muslim+Town,+Lahore,+Pakistan&output=embed" 
                  width="100%" 
                  height="300" 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Office Location"
                  className={styles.map}
                ></iframe>
              </div>
              
              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Our Location</h4>
                    <p>New Muslim town Lahore, Pakistan</p>
                  </div>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <FaPhoneAlt />
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Phone Number</h4>
                    <p>+(92) 317-4512095</p>
                  </div>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Email Address</h4>
                    <p>info@techvision.com</p>
                  </div>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <FaClock />
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Section>
      
      {/* FAQ Section */}
      <Section dark className={styles.sections}>
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about working with us."
          centered
          light
        />
        
        <Row className="g-4">
          <Col lg={6}>
            <div className={styles.faqItem}>
              <h4>What is your typical process for new projects?</h4>
              <p>
                Our process typically involves an initial consultation, followed by a proposal and project plan. 
                Once approved, we move into design, development, testing, and deployment phases. Throughout the 
                process, we maintain clear communication and regular updates.
              </p>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className={styles.faqItem}>
              <h4>How long does it take to complete a project?</h4>
              <p>
                Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, 
                while a complex web application could take several months. We'll provide a detailed timeline 
                during the proposal phase.
              </p>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className={styles.faqItem}>
              <h4>What information do you need to provide a quote?</h4>
              <p>
                To provide an accurate quote, we need to understand your project goals, target audience, 
                feature requirements, design preferences, and timeline. The more details you can provide, 
                the more precise our estimate will be.
              </p>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className={styles.faqItem}>
              <h4>Do you offer maintenance services after project completion?</h4>
              <p>
                Yes, we offer ongoing maintenance and support services to keep your digital solution running 
                smoothly. We have various maintenance packages available to suit different needs and budgets.
              </p>
            </div>
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default Contact