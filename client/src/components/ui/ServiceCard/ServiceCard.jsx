import { Card } from 'react-bootstrap'
import styles from './ServiceCard.module.css'

const ServiceCard = ({ title, description, icon, className = '', ...props }) => {
  return (
    <Card className={`${styles.serviceCard} ${className}`} {...props}>
      <Card.Body className={styles.cardBody}>
        <div className={styles.iconContainer}>
          {icon}
        </div>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Text className={styles.description}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard