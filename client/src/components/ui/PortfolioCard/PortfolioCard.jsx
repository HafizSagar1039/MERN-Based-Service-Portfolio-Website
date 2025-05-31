import { useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import styles from './PortfolioCard.module.css'

const PortfolioCard = ({ 
  title, 
  category, 
  description, 
  image, 
  detailedDescription,
  technologies = [],
  className = '',
  ...props 
}) => {
  const [showModal, setShowModal] = useState(false)
  
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  
  return (
    <>
      <Card 
        className={`${styles.portfolioCard} ${className}`} 
        onClick={handleShow}
        {...props}
      >
        <div className={styles.imageContainer}>
          <Card.Img variant="top" src={image} className={styles.image} />
          <div className={styles.overlay}>
            <div className={styles.viewDetails}>View Details</div>
          </div>
        </div>
        <Card.Body className={styles.cardBody}>
          <div className={styles.category}>{category}</div>
          <Card.Title className={styles.title}>{title}</Card.Title>
        </Card.Body>
      </Card>
      
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        centered
        size="lg"
        className={styles.modal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            src={image} 
            alt={title} 
            className={styles.modalImage} 
          />
          <div className={styles.modalCategory}>{category}</div>
          <h4 className={styles.modalTitle}>Project Details</h4>
          <p>{detailedDescription || description}</p>
          
          {technologies.length > 0 && (
            <>
              <h5 className={styles.technologiesTitle}>Technologies Used</h5>
              <div className={styles.technologies}>
                {technologies.map((tech, index) => (
                  <span key={index} className={styles.technology}>
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PortfolioCard