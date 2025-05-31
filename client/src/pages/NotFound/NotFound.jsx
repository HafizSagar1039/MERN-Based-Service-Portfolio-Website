import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../../components/ui/Button/Button'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <Container>
      <div className={styles.notFound}>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.errorTitle}>Page Not Found</h2>
            <p className={styles.errorMessage}>
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            <div className={styles.buttons}>
              <Button as={Link} to="/" variant="primary" animated>
                Back to Home
              </Button>
              <Button as={Link} to="/contact" variant="outline-primary">
                Contact Us
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default NotFound