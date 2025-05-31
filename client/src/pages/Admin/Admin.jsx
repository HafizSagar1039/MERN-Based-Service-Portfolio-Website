import { useEffect, useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Row, Col, Table, Button as BootstrapButton, Modal, Form, Alert } from 'react-bootstrap'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

// Components
import Section from '../../components/ui/Section/Section'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'

// Styles
import styles from './Admin.module.css'

const Admin = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext)
  const [messages, setMessages] = useState([])
  const [isLoadingMessages, setIsLoadingMessages] = useState(true)
  const [error, setError] = useState(null)
  
  // Modal state
  const [showModal, setShowModal] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [responseText, setResponseText] = useState('')
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' })
  
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setIsLoadingMessages(true)
        const res = await axios.get('/api/contact')
        setMessages(res.data)
        setError(null)
      } catch (err) {
        setError('Failed to load messages. Please try again.')
      } finally {
        setIsLoadingMessages(false)
      }
    }
    
    if (isAuthenticated && !isLoading) {
      fetchMessages()
    }
  }, [isAuthenticated, isLoading])
  
  const handleViewMessage = (message) => {
    setSelectedMessage(message)
    setShowModal(true)
    setResponseText('')
    setStatusMessage({ type: '', text: '' })
  }
  
  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedMessage(null)
    setResponseText('')
    setStatusMessage({ type: '', text: '' })
  }
  
  const handleSendResponse = async (e) => {
    e.preventDefault()
    
    if (!responseText.trim()) {
      setStatusMessage({ type: 'danger', text: 'Please enter a response message.' })
      return
    }
    
    try {
      await axios.post(`/api/contact/${selectedMessage.id}/respond`, { response: responseText })
      
      // Update the message status in the UI
      setMessages(messages.map(msg => 
        msg.id === selectedMessage.id ? { ...msg, status: 'Responded' } : msg
      ))
      
      setStatusMessage({ type: 'success', text: 'Response sent successfully!' })
      
      // Clear the response field
      setResponseText('')
      
      // Close the modal after a delay
      setTimeout(() => {
        handleCloseModal()
      }, 2000)
    } catch (err) {
      setStatusMessage({ type: 'danger', text: 'Failed to send response. Please try again.' })
    }
  }
  
  const handleDeleteMessage = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return
    }
    
    try {
      await axios.delete(`/api/contact/${id}`)
      setMessages(messages.filter(msg => msg.id !== id))
    } catch (err) {
      setError('Failed to delete message. Please try again.')
    }
  }
  
  // If not authenticated, redirect to login page
  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/login" replace />
  }
  
  // If still loading auth status, show loading
  if (isLoading) {
    return (
      <Section>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Loading...</p>
        </div>
      </Section>
    )
  }
  
  return (
    <>
      <Section dark>
        <SectionTitle 
          title="Admin Dashboard" 
          subtitle="Manage contact form submissions and website messages."
          light
        />
        
        {error && (
          <Alert variant="danger" className="mb-4">
            {error}
          </Alert>
        )}
        
        <div className={styles.dashboardCard}>
          <h3 className={styles.cardTitle}>Contact Form Messages</h3>
          
          {isLoadingMessages? (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <p>Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className={styles.noMessages}>
              <p>No messages found.</p>
            </div>
          ) : (
            <div className={styles.tableResponsive}>
              <Table striped hover variant="dark" className={styles.table}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map(message => (
                    <tr key={message.id}>
                      <td>{new Date(message.created_at).toLocaleDateString()}</td>
                      <td>{message.name}</td>
                      <td>{message.email}</td>
                      <td>{message.subject}</td>
                      <td>
                        <span className={`${styles.status} ${styles[message.status.toLowerCase()]}`}>
                          {message.status}
                        </span>
                      </td>
                      <td>
                        <div className={styles.actions}>
                          <BootstrapButton 
                            variant="info" 
                            size="sm"
                            onClick={() => handleViewMessage(message)}
                          >
                            View
                          </BootstrapButton>
                          <BootstrapButton 
                            variant="danger" 
                            size="sm"
                            onClick={() => handleDeleteMessage(message.id)}
                          >
                            Delete
                          </BootstrapButton>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </Section>
      
      {/* Message Detail Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal}
        centered
        size="lg"
        className={styles.modal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Message Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMessage && (
            <>
              <Row className="mb-4">
                <Col md={6}>
                  <div className={styles.messageDetail}>
                    <h5>From</h5>
                    <p>{selectedMessage.name}</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.messageDetail}>
                    <h5>Email</h5>
                    <p>{selectedMessage.email}</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.messageDetail}>
                    <h5>Phone</h5>
                    <p>{selectedMessage.phone || 'Not provided'}</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.messageDetail}>
                    <h5>Date</h5>
                    <p>{new Date(selectedMessage.created_at).toLocaleString()}</p>
                  </div>
                </Col>
                <Col md={12}>
                  <div className={styles.messageDetail}>
                    <h5>Subject</h5>
                    <p>{selectedMessage.subject}</p>
                  </div>
                </Col>
                <Col md={12}>
                  <div className={styles.messageDetail}>
                    <h5>Message</h5>
                    <div className={styles.messageContent}>
                      {selectedMessage.message}
                    </div>
                  </div>
                </Col>
              </Row>
              
              {statusMessage.text && (
                <Alert variant={statusMessage.type} className="mb-4">
                  {statusMessage.text}
                </Alert>
              )}
              
              <Form onSubmit={handleSendResponse}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Response</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5}
                    value={responseText}
                    onChange={(e) => setResponseText(e.target.value)}
                    placeholder="Type your response here..."
                    className={styles.formControl}
                  />
                </Form.Group>
                
                <div className="d-flex justify-content-end">
                  <BootstrapButton 
                    variant="secondary" 
                    className="me-2"
                    onClick={handleCloseModal}
                  >
                    Close
                  </BootstrapButton>
                  <BootstrapButton 
                    variant="primary" 
                    type="submit"
                  >
                    Send Response
                  </BootstrapButton>
                </div>
              </Form>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Admin